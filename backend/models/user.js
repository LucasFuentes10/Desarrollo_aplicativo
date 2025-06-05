import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    fullName: String,
    hashPassword: String,
    email:String,
    roles:Array,
});

export default mongoose.model('user', userSchema);