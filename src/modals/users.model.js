import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
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
  password: {
    type: String, required: true
  },
  avatar: { type: String, default: "" },
  coverImage: { type: String, default: "" },
  refreshToken: { type: String, default: "" }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
usersSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      id: this._id, username: this.username, email: this.email,
      fullName: this.fullName
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
usersSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
}
const User = mongoose.model("User", usersSchema);

export default User;
