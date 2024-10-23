const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://sukishkohli:Sukish17@cluster0.dqpo9.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}