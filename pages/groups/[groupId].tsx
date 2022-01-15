import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {
  PublicTaskFragment,
  useGetGroupTaskQuery,
  useInsertTaskMutation,
  useUpdateTaskMutation
} from "../../generated/data-schemas";
import {useEffect, useState} from "react";
import {TaskCard} from "../../components/TaskCard";
import {TaskCreateButton} from "../../components/TaskCreateButton";
import {TaskEditor} from "../../components/TaskEditor";
import {OutputData} from "@editorjs/editorjs";


type IEditionState = {
  isCreation: false,
  task: PublicTaskFragment
} | {
  isCreation: true,
}

const TaskList: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});
  const [editionState, setEditionState] = useState<IEditionState | null>(null);
  const [{fetching: isInserting, error: insertError}, executeInsertMutation] = useInsertTaskMutation();
  const [{fetching: isUpdating, error: updateError}, executeUpdateMutation] = useUpdateTaskMutation();

  useEffect(() => {
    if (!fetching && error) {
      router.push("/").then();
    }
  }, [fetching, error, router])


  if (fetching) {
    return <FullScreenLoading/>
  }

  if (error || !data) {
    return <p>Error : Redirecting to home page...</p>
  }

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
      executeInsertMutation({groupId: groupId as string, icon, title, content}).then(clearEditor)
    } else {
      executeUpdateMutation({taskId: editionState.task.id, title, icon, content}).then(clearEditor)
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
    {data.task.map(task => <div key={task.id} className={"mb-3"}>
      {editionState && !editionState?.isCreation && editionState?.task?.id === task.id
        ? <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} defaultTask={editionState.task} error={updateError} isLoading={isUpdating}/>
        : <TaskCard task={task} onEdit={handleEdit}/>}
    </div>)}
    <div>
      {editionState
        ? editionState.isCreation && <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} error={insertError} isLoading={isInserting} />
        : <TaskCreateButton onClick={handleNewTask}/>
      }
    </div>
  </main>

}


export default TaskList