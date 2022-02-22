import {gqlSdk} from "../config/gql";
import {ServerTaskFragment} from "../generated/config-schemas";
import {getImageSignedLink} from "../utils/imageBucket";


export interface GetGroupTasks {
  groupId: string
}

export async function getGroupTasks({groupId}: GetGroupTasks) {
  const {raw_task: tasks} = await gqlSdk.getTasksByGroup({groupId})

  return Promise.all(tasks.map(formatTask));
}


async function formatTask(task: ServerTaskFragment) {
  const newBlocks = await Promise.all(task.content.blocks.map(async (block: any) => {
    if (block.type !== "image") return {...block};
    return {
      ...block,
      data: {
        ...block.data,
        file: {
          ...block.data.file,
          url: await generateTemporaryImageLink(getFileNameFromUrl(block.data.file.url))
        }
      }
    }
  }));
  return {
    ...task,
    content: {
      ...task.content,
      blocks: newBlocks
    }
  }
}

function getFileNameFromUrl(imageName: string): string {
  const regex = /([0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}\.[A-Z]+)/i
  const regexResponse = regex.exec(imageName);
  if (!regexResponse) return imageName;
  return regexResponse[0]
}

async function generateTemporaryImageLink(fileName: string): Promise<string> {
  return await getImageSignedLink(fileName)
}