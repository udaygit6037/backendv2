import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema({
  video: { type: String, required: true },         // video URL or path
  thumbnail: { type: String, default: "" },        // thumbnail URL
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  duration: { type: Number, required: true },      // in seconds
  views: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });
videoSchema.plugin(mongooseAggregatePaginate);
const Video = mongoose.model("Video", videoSchema);
export default Video;
