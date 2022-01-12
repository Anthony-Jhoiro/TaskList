import {NextPage} from "next";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {NavBar} from "../../components/NavBar";
import {useRouter} from "next/router";
import {useGetGroupsQuery} from "../../generated/data-schemas";
import {GroupCard} from "../../components/GroupCard";
import {useEffect} from "react";


const Groups: NextPage = () => {
  const {user, error, fetching} = useCurrentUser();
  const router = useRouter();
  const [{fetching: groupsFetching, error: groupsError, data}] = useGetGroupsQuery();

  useEffect(() => {
    if (!(fetching || groupsFetching) && (error || !user || groupsError)) {
      console.log({error, user, groupsError})
      router.push("/").then();
    }

  }, [fetching, groupsFetching, error, groupsError, router, user])


  if (fetching || groupsFetching) {
    return <FullScreenLoading/>
  }

  if (error || !user || groupsError) {
    return <p>Error : Redirecting to home page...</p>
  }

  return <div className={"bg-background min-h-screen"}>
    <NavBar user={user} />

    <div>
      {error && <p className="text-error">Une erreur est survenue, je m&apos;en occupe dès que possible !</p>}
    </div>

    <main id={"group-list"} className="container mx-auto py-5">
      {data && data.group.map(group => <div key={group.id} className={"mb-5"}>
        <GroupCard group={group}  />
      </div>)}
      </main>
  </div>

}


export default Groups