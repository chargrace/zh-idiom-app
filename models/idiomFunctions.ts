import { readData } from "./helperFunction";
//Get all entries

async function getAllEntries () {
    const allIdiomData = await readData();
    return allIdiomData;
    console.log(allIdiomData);
}

//Get entry by id

//Update entry

//delete entry

//query params character in idiom property

//query params words in en_meaning property

export default getAllEntries;