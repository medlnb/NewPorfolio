import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    utils_data: {
      type: Array,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
    },
    repository: {
      type: String,
    },
    presentation: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
