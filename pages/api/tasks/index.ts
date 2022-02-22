// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {getGroupTasks} from "../../../server/tasks";

type Task = {
  id: string,
  created_at: Date,
  updated_at: Date,
  group_id: string,
  title: string,
  content: any,
  icon: string,
  created_by: string,
  updated_by: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
  const tasks = await getGroupTasks({groupId: req.body.input.groupId});
  res.status(200).json(tasks)
}


