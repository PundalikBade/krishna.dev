import mongoose from "mongoose";
import Project from "../models/Project.js";
import asyncHandler from "../middleware/asyncHandler.js";

/* GET /api/projects  (supports ?status= and ?featured=true) */
export const getProjects = asyncHandler(async (req, res) => {
  const query = {};

  if (req.query.status) query.status = req.query.status;
  if (req.query.featured === "true") query.featured = true;

  const projects = await Project.find(query).sort({ createdAt: -1 });

  res.status(200).json({ success: true, count: projects.length, data: projects });
});

/* GET /api/projects/:id */
export const getProject = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json({ success: true, data: project });
});

/* POST /api/projects */
export const createProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    technologies = [],
    github,
    demo,
    image,
    status = "in-progress",
    featured = false,
  } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Title and description are required");
  }

  const project = await Project.create({
    title,
    description,
    technologies,
    github,
    demo,
    image,
    status,
    featured,
  });

  res.status(201).json({ success: true, message: "Project created", data: project });
});

/* PUT /api/projects/:id */
export const updateProject = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json({ success: true, message: "Project updated", data: project });
});

/* DELETE /api/projects/:id */
export const deleteProject = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json({ success: true, message: "Project deleted" });
});