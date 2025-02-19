import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "libs", "idioms.json");

const readData = () => {
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
};

const writeData = (data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = readData();

  if (req.method === "GET") {
    res.status(200).json(data)
} else {
    res.status(500).json('Error fetching data')
  }
}