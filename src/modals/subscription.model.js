import mongoose,{Schema} from "mongoose";
import User from "./users.model";
const subscriptionSchema = new Schema({
    subscirber :{
        type: Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
   
    
},{timestamps:true});
export const Subscription = mongoose.model("Subscription", subscriptionSchema);