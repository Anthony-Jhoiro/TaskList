import React, {useState} from "react";
import {PublicTaskFragment} from "../../generated/data-schemas";
import {OutputData} from "@editorjs/editorjs";
import {TaskEditor} from "../TaskEditor";
import {TaskCard} from "../TaskCard";
import {TaskCreateButton} from "../TaskCreateButton";
import {CombinedError} from "urql";

type IEditionState = {
  isCreation: false,
  task: PublicTaskFragment
} | {
  isCreation: true,
}

export interface TaskListProps {
  tasks: PublicTaskFragment[],
  onCreate: (task: { icon: string, title: string, content: any }) => Promise<any>,
  onUpdate: (task: { taskId: string, icon: string, title: string, content: any }) => Promise<any>,
  createError?: CombinedError,
  updateError?: CombinedError,
  createFetching?: boolean,
  updateFetching?: boolean
}

export const TaskList: React.VFC<TaskListProps> = ({
                                                     tasks, onCreate,
                                                     onUpdate,
                                                     createError,
                                                     updateError,
                                                     createFetching,
                                                     updateFetching
                                                   }: TaskListProps) => {
  const [editionState, setEditionState] = useState<IEditionState | null>(null);

  const preventDoubleEdition = () => {
    if (editionState) {
      alert("Action impossible. Tu es déjà en train de créer ou d'éditer quelque chose.");
      return true;
    }
    return false;
  }

  const clearEditor = () => setEditionState(null);

  const handleSubmit = (title: string, icon: string, content: OutputData) => {
    if (!editionState) return;
    if (editionState.isCreation) {
      onCreate({icon, title, content}).then(clearEditor)
    } else {
      onUpdate({taskId: editionState.task.id, title, icon, content}).then(clearEditor)
    }
  }

  const handleCancel = () => {
    setEditionState(null);
  }

  const handleNewTask = () => {
    if (preventDoubleEdition()) return;
    setEditionState({
      isCreation: true
    })
  }

  const handleEdit = (task: PublicTaskFragment) => {
    if (preventDoubleEdition()) return;
    setEditionState({
      isCreation: false,
      task: {...task}
    })
  }

  return <main id={"group-list"} className="container mx-auto py-5">
    {tasks.map(task => <div key={task.id} className={"mb-3"}>
      {editionState && !editionState?.isCreation && editionState?.task?.id === task.id
        ?
        <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} defaultTask={editionState.task} error={updateError}
                    isLoading={updateFetching}/>
        : <TaskCard task={task} onEdit={handleEdit}/>}
    </div>)}
    <div>
      {editionState
        ? editionState.isCreation &&
          <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} error={createError} isLoading={createFetching}/>
        : <TaskCreateButton onClick={handleNewTask}/>
      }
    </div>
  </main>
}
