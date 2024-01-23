import { Schema } from "mongoose";



export const FrogSchema = new Schema({
  name: {type: String, required: true},
  picture: {type: String, required: true},
  age: {type: Number, required: true},
  poisonous: {type: Boolean, required: true, default: false},
  isToad: {type: Boolean, required: true, default: false},
  color: {type: String},
  diet: {type: String},
  likes: {type: String},
  dislikes: {type: String}
})
