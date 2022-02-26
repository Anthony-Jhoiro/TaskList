import {NextPage} from "next";
import {useRouter} from "next/router";
import {useGetGroupsQuery, useInsertGroupMutation} from "../../generated/data-schemas";
import {GroupCard} from "../../components/groups/GroupCard";
import {useEffect, useState} from "react";
import Link from "next/link"
import Head from "next/head";
import {TaskCreateButton} from "../../components/tasks/TaskCreateButton";
import {GroupEditor} from "../../components/groups/GroupEditor";
import {LoadingIndicator} from "../../components/shared/indicators/LoadingIndicator";
import {alert} from "../../utils/alert";


const Groups: NextPage = () => {
  const router = useRouter();
  const [{fetching, error, data}, refreshLoading] = useGetGroupsQuery();
  const [isEditing, setIsEditing] = useState(false);
  const [{fetching: fetchingNewGroup}, doInsertGroup] = useInsertGroupMutation();



  useEffect(() => {
    if (!fetching && error) {
      router.push("/").then();
    }

  }, [fetching, error, router])


  if (error) {
    return <p>Error : Redirecting to home page...</p>
  }

  const onCreateNewGroup = ({name}: {name: string}) => {
    doInsertGroup({name})
      .then(() => {
        alert("SUCCESS", "Succès", `Le groupe ${name} a été créé !`);
        refreshLoading();
      });
  }

  return <div>
    <Head>
      <title>Liste des groupes</title>
    </Head>
    <main id={"group-list"} className="container mx-auto py-5">

      {fetching && <LoadingIndicator label={"Chargement de vos groupes"} />}

      {data && data.group.map(group => <Link key={group.id} href={`/groups/${group.id}`} passHref>
        <div className={"mb-5"}>
          <GroupCard group={group}/>
        </div>
      </Link>)}

      <div className={"mb-5"}>
        {isEditing

  ? <GroupEditor onSubmit={onCreateNewGroup} disabled={fetchingNewGroup} />
          :<TaskCreateButton onClick={() => setIsEditing(!isEditing)} />
        }
      </div>
    </main>
  </div>

}


export default Groups