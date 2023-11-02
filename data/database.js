const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();


let db;
mongoose.connect(`mongodb+srv://michelleguti17:DiosyoteamO17!@cluster0.vgwo4if.mongodb.net/project1`,(err)=>{
    if(err) throw err;
    console.log('Connected Successfully');
    }),(err)=>{
if(err) throw err;
console.log("DB Connected Successfully");
};

/* const initDb = (callback) => {
    if(db){
        console.log('Db is already initialized');
        return callback(null,database);
    }

    MongoClient.connect(process.env.MONGODB_URI)
    .then((client)=>{
        db = client
        callback(null, db);

        })
        .catch((err) => {
            callback(err);
        });

};


const getDatabase =() => {
    if(!db){
        throw Error('Db is not initialized');
        
    }
    return db;



}; */
module.exports = {
    initDb,
    getDatabase
};
