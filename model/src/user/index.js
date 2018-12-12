import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: String
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel };
