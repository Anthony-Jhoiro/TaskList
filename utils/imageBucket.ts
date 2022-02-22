import {GetSignedUrlConfig, Storage} from "@google-cloud/storage";
import FormData from "form-data";
import {v4} from "uuid";

const ALLOWED_EXTENSIONS = ["png", "jpg", "jpeg"]

const buildBucket = () => {
  const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY,
    },
  });

  return storage.bucket(process.env.GCP_BUCKET_NAME as string);
}


export const generateFilename = (originalFileName: string) => {
  let fileExtention = originalFileName.split('.').pop();

  if (!fileExtention || !ALLOWED_EXTENSIONS.includes(fileExtention)) {
    fileExtention = "jpg";
  }

  return `${v4()}.${fileExtention}`;
}

export const getImageSignedLink = async (fileName: string) => {
  const bucket = buildBucket()

  const file = bucket.file(fileName);

  const options: GetSignedUrlConfig = {
    expires: Date.now() + 60 * 60 * 1000, //  60 minutes,
    action: 'read',
    version: 'v4'
  };

  const [response] = await file.getSignedUrl(options);
  return response;
}


/**
 *
 * @param fileName
 * @param imageContent
 */
export const postImage = async (fileName: string, imageContent: Buffer) => {
  const bucket = buildBucket()

  const file = bucket.file(fileName);

  const options = {
    expires: Date.now() + 60 * 1000, //  1 minute,
    fields: {
      'x-goog-meta-test': 'data'
    },
  };

  const [{url, fields}] = await file.generateSignedPostPolicyV4(options);

  const form = new FormData();

  Object.entries({...fields, file: imageContent}).forEach(([key, value]) => {
    form.append(key, value);
  });

  await new Promise((resolve, reject) => form.submit(url, async (err, resp) => {
    if (err) reject(err);
    resolve(resp);
  }));
}
