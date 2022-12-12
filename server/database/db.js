import mongoose from "mongoose";

const Connection = async(username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@mern.wey5c3l.mongodb.net/?retryWrites=true&w=majority`
    try{
     await mongoose.connect(URL,{useUnifiedTopology : true , useNewUrlParser : true});
    console.log("Databse connected....")
    }catch(error){
        console.log('Error while connecting with a database' , error)

    }
}
export default Connection;