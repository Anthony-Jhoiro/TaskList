import {NextApiRequest, NextApiResponse} from "next";
import {File, IncomingForm} from "formidable";
import {readFileSync} from "fs"
import {generateFilename, getImageSignedLink, postImage} from "../../../utils/imageBucket";


export const config = {
  api: {
    bodyParser: false,
  }
};


export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse<{}>) {
  const originalFileName = req.query.file as string ?? "rdm.jpeg";

  const fileName = generateFilename(originalFileName);


  const image: File = await new Promise(((resolve, reject) => {
    const form = new IncomingForm({keepExtensions: true});
    form.parse(req, function (err, fields, files) {
      if (err) reject(err);

      if (Array.isArray(files.image)) {
        reject("Bad request")
      } else {
        resolve(files.image);
      }
    });
  }));

  const imageContent = readFileSync(image.filepath);

  try {
    const [, url] = await Promise.all([
      postImage(fileName, imageContent),
      getImageSignedLink(fileName)
    ]);
    res.status(200).json({
      success: 1,
      file: {
        url
      }
    });
  } catch {
    res.status(500).json({message: "Fail to upload image"})
  }
}