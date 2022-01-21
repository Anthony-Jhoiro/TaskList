import {NextPage} from "next";
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
import Image from "next/image";
import {LoadingIndicator} from "../../components/LoadingIndicator";


const TaskListPage: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}, refreshGroupeData] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});
  const [{fetching: isInserting, error: insertError}, executeInsertMutation] = useInsertTaskMutation();
  const [{fetching: isUpdating, error: updateError}, executeUpdateMutation] = useUpdateTaskMutation();
  const [addUserModalOpen, setAddUserModalOpen] = useState(false)

  useEffect(() => {
    if (!fetching && error) {
      router.push("/").then();
    }
  }, [fetching, error, router]);

  const onUserAdded = () => {
    refreshGroupeData();
    setAddUserModalOpen(false);
  }


  if (error) {
    return <p>Error : Redirecting to home page...</p>
  }

  const createTask = ({title, icon, content}: { title: string, icon: string, content: any }) =>
    executeInsertMutation({groupId: groupId as string, icon, title, content});

  const modifyTask = ({title, icon, content, taskId}: { title: string, icon: string, content: any, taskId: string }) =>
    executeUpdateMutation({taskId, title, icon, content})


  return <div className={""}>
    <Head>
      <title>{data ? data.group_by_pk?.name : "Chargement..."}</title>
    </Head>

    <div className="container bg-gray-100 mx-auto my-0 sm:my-5 p-5 flex justify-between items-center">
      {fetching && <LoadingIndicator label={"Chargement des données du groupe..."} />}

      {data && <>
          <div className={"flex"}>
              <h2 className={"text-primary text-xl"}>{data.group_by_pk?.name}</h2>
            {/* Member profile pictures */}
              <div className={"ml-3"}>
                {data.group_by_pk?.users.map(user => <div key={`pp_user_${user.id}`} className={"inline-block -ml-1"}>
                  <ProfilePicture user={user}/>
                </div>)
                }
              </div>
          </div>
      </>}

      {data && <div className={""}>
          <Button icon={faUserPlus} onClick={() => setAddUserModalOpen(true)}>Ajouter des utilisateurs</Button>
      </div>}
    </div>
    <TaskList
      tasks={data ? data.task : []}
      onCreate={createTask}
      onUpdate={modifyTask}
      createError={insertError}
      updateError={updateError}
      createFetching={isInserting}
      updateFetching={isUpdating}
    />
    <AddUserToGroupDialog groupId={groupId as string} open={addUserModalOpen} closable={true}
                          onClose={onUserAdded}/>
  </div>

}

const ProfilePicture = ({user}: { user: any }) => {
  return <div className={"rounded-full h-8 w-8 bg-gray-200 overflow-hidden relative"}>
    {user.image &&
    <Image src={user.image} alt={`Photo de profil de ${user.name}`} objectFit={'cover'} layout={'fill'}/>}
  </div>
}


export default TaskListPage
