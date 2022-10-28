import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  //   parse from json string to object
  let data = JSON.parse(fileContents);

//   console.log("req: ", req.query);

  const dataFiltered = data.data.filter(item => item.id == req.query.id )

  //Return the content of the data file in json format
  res.status(200).json(dataFiltered[0]);
}
