const mongoose = require('mongoose');

main().then((result) => {
    console.log("successfull run");    
}).catch((err) => {
    console.log(err);
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
})

const employee = mongoose.model('employee',userSchema);