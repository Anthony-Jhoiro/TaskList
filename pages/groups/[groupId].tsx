import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {PublicTaskFragment, useGetGroupTaskQuery} from "../../generated/data-schemas";
import {useEffect, useState} from "react";
import {TaskCard} from "../../components/TaskCard";
import {TaskCreateButton} from "../../components/TaskCreateButton";
import {TaskEditor} from "../../components/TaskEditor";
import {OutputData} from "@editorjs/editorjs";


interface IEditionState {
  isCreation: boolean,
  task?: PublicTaskFragment
}

const TaskList: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});
  const [editionState, setEditionState] = useState<IEditionState | null>(null);

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

  const handleSubmit = (_icon: string, _title: string, _content: OutputData) => {

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
    {data.task.map(task => <div key={task.id} className={"mb-5"}>
      {editionState?.task?.id === task.id
        ? <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} defaultTask={editionState.task}/>
        : <TaskCard task={task} onEdit={handleEdit}/>}
    </div>)}
    <div>
      {editionState
        ? editionState.isCreation && <TaskEditor onSubmit={handleSubmit} onCancel={handleCancel} />
        : <TaskCreateButton onClick={handleNewTask}/>
      }
    </div>
  </main>

}


export default TaskList