import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {
  useGetGroupTaskQuery,
  useInsertTaskMutation,
  useUpdateTaskMutation
} from "../../generated/data-schemas";
import {useEffect} from "react";
import {TaskList} from "../../components/TaskList";


const TaskListPage: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});
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

  const createTask = ({title, icon, content}: { title: string, icon: string, content: any }) =>
    executeInsertMutation({groupId: groupId as string, icon, title, content});

  const modifyTask = ({title, icon, content, taskId}: { title: string, icon: string, content: any, taskId: string }) =>
    executeUpdateMutation({taskId, title, icon, content})


  return <div>
    <TaskList
      tasks={data.task}
      onCreate={createTask}
      onUpdate={modifyTask}
      createError={insertError}
      updateError={updateError}
      createFetching={isInserting}
      updateFetching={isUpdating}
    />
  </div>

}


export default TaskListPage