import {NextPage} from "next";
import {FullScreenLoading} from "../../components/FullScreenLoading";
import {useRouter} from "next/router";
import {useGetGroupTaskQuery} from "../../generated/data-schemas";
import {useEffect} from "react";
import {TaskCard} from "../../components/TaskCard";


const TaskList: NextPage = () => {
  const router = useRouter();
  const {groupId} = router.query;
  const [{fetching, error, data}] = useGetGroupTaskQuery({variables: {groupId: groupId as string}});

  useEffect(() => {
    if (!fetching && error ) {
      router.push("/").then();
    }
  }, [fetching, error, router])


  if (fetching) {
    return <FullScreenLoading/>
  }

  if (error || ! data) {
    return <p>Error : Redirecting to home page...</p>
  }

  return <main id={"group-list"} className="container mx-auto py-5">
      {data.task.map(task => <div key={task.id} className={"mb-5"}>
        <TaskCard task={task} />
      </div>)}
    </main>

}


export default TaskList