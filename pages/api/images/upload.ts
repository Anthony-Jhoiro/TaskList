import {Storage} from '@google-cloud/storage';
import {NextApiRequest, NextApiResponse} from "next";
import {v4} from "uuid";

const ALLOWED_EXTENSIONS = ["png", "jpg", "jpeg"]


export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse<{}>) {
  const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY,
    },
  });

  const bucket = storage.bucket(process.env.GCP_BUCKET_NAME as string);

  const originalFileName = req.query.file as string ?? "rdm.jpeg";

  let fileExtention = originalFileName.split('.').pop();

  if (!fileExtention || !ALLOWED_EXTENSIONS.includes(fileExtention)) {
    fileExtention = "jpg";
  }

  const fileName = `${v4()}.${fileExtention}`;

  const file = bucket.file(fileName);

  const options = {
    expires: Date.now() + 60 * 1000, //  1 minute,
    fields: {
      'x-goog-meta-test': 'data'
    },
  };

  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}