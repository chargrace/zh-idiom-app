import { promises as fs } from "fs";
import path from "node:path";

const FILEPATH = path.resolve(process.cwd(), "./libs/idioms.json");

async function readData () {
    try {
        const data = await fs.readFile(FILEPATH, "utf8")
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file", error)
        return null
    }
}

// data will look like: 
// "id": 8629,
// "idiom": "屏声息气",
// "en_meaning": "keeping silent and motionless",
// "zh_meaning": "形容保持安静，不发出声音和气息",
// "ja_meaning": "無言で静かに待ち、息を殺すこと。また、身をひそめて注意深く行動すること。"

type Data = {
    id: number
    idiom: string
    en_meaning: string
    zh_meaning: string
    ja_meaning: string
}

async function writeData (data: Data) {
    try {
        await fs.writeFile(FILEPATH, JSON.stringify(data), "utf8")
    } catch (error) {
        console.error("Error writing to file", error)
    }
}

export { readData, writeData };