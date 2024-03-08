import { Schema, model, models } from "mongoose";

const SkillModel = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  persantage: {
    type: Number,
    required: true,
  },
  graphColor: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Skill = models.Skill || model("Skill", SkillModel);
export default Skill;
