import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {useGetGroupsQuery} from "../../generated/data-schemas";
import {GroupCard} from "../../components/GroupCard";
import {useEffect} from "react";
import Link from "next/link"
import Head from "next/head";


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

  return <div>
    <Head>
      <title>Liste de groupes</title>
    </Head>
    <main id={"group-list"} className="container mx-auto py-5">


      {data.group.map(group => <Link key={group.id} href={`/groups/${group.id}`} passHref>
        <div className={"mb-5"}>
          <GroupCard group={group}/>
        </div>
      </Link>)}
    </main>
  </div>

}


export default Groups