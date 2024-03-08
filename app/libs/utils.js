import moongoose from "mongoose"

export const connectToDB = async() => {
    
    const connection = {}
    try{
        if(connection.isConnected) return;
        const db = await moongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState
        
    } catch(error){
        throw new Error(error)

    }
}