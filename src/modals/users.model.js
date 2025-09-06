import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  watchHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  username: { 
    type: String, 
    required: true,
    unique: true, 
    lowercase: true, 
    trim: true, 
    index: true 
  },
  email: { type: String, required: true, unique: true, trim: true },
  fullName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  coverImage: { type: String, default: "" },
  refreshToken: { type: String, default: "" }
}, { timestamps: true });

const User = mongoose.model("User", usersSchema);

export default User;
