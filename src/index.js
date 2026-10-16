

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()



/*

import express from "express"
const app = express()


( async() => {
try{

    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    app.on("error", (error ) => {
        console.log("ERROR: ", error );
        throw error
    })

    app.listen(process.env.PORT, () => {
        CONSOLE.LOG(`App is listening on port $ 
            {process.env.PORT} `);
    })

} catch(error){
    condole.log("ERROR:", error)
    throw err
}

})() */