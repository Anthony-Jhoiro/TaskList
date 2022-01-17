import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {
  useGetGroupTaskQuery,
  useInsertTaskMutation,
  useUpdateTaskMutation
} from "../../generated/data-schemas";
import {useEffect, useState} from "react";
import {TaskList} from "../../components/TaskList";
import {Button} from "../../components/Button";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {AddUserToGroupDialog} from "../../components/AddUserToGroupDialog";
import Head from "next/head";


const TaskListPage: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});
  const [{fetching: isInserting, error: insertError}, executeInsertMutation] = useInsertTaskMutation();
  const [{fetching: isUpdating, error: updateError}, executeUpdateMutation] = useUpdateTaskMutation();
  const [addUserModalOpen, setAddUserModalOpen] = useState(false)

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


  return <div className={""}>
    <Head>
      <title>{data.group_by_pk?.name}</title>
    </Head>

    <div className="container bg-gray-100 mx-auto my-0 sm:my-5 p-5 flex justify-between items-center ">
      <h2 className={"text-primary text-xl"}>{data.group_by_pk?.name}</h2>
      <div className={""}>
        <Button icon={faUserPlus} onClick={() => setAddUserModalOpen(true)} >Ajouter des utilisateurs</Button>
      </div>
    </div>
    <TaskList
      tasks={data.task}
      onCreate={createTask}
      onUpdate={modifyTask}
      createError={insertError}
      updateError={updateError}
      createFetching={isInserting}
      updateFetching={isUpdating}
    />
    <AddUserToGroupDialog groupId={groupId as string} open={addUserModalOpen} closable={true} onClose={() => setAddUserModalOpen(false)} />
  </div>

}


export default TaskListPage