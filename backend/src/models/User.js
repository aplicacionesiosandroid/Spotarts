import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'editor'], default: 'admin' },
  password: { type: String, required: true } // para login
});

const User = mongoose.model('User', userSchema);
export default User;
