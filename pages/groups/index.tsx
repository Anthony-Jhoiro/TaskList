import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {useGetGroupsQuery} from "../../generated/data-schemas";
import {GroupCard} from "../../components/GroupCard";
import {useEffect} from "react";


const Groups: NextPage = () => {
  const router = useRouter();
  const [{fetching, error, data}] = useGetGroupsQuery();

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

  return <main id={"group-list"} className="container mx-auto py-5">
    {data.group.map(group => <div key={group.id} className={"mb-5"}>
      <GroupCard group={group}/>
    </div>)}
  </main>;

}


export default Groups