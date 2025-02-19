import express from 'express';
import getAllEntries from '@/models/idiomFunctions';

const idiomsRouter = express.Router ();

type IdiomData = object[] 

// type DataReceived = {
//     success: boolean
//     payload: IdiomData
// }

idiomsRouter.get("/", async (req, res) => {
    try {
        const idiomData: IdiomData = await getAllEntries();
        console.log(idiomData)
        const data = {
            success: true,
            payload: idiomData,
          };
          res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            payload: null
        })
        
    }
})

export default idiomsRouter;