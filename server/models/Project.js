import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
    github: {
      type: String,
      trim: true,
    },
    demo: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "completed", "coming-soon"],
      default: "in-progress",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;