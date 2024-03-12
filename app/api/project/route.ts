import { connectToDatabase } from "@utils/database";
import Project from "@models/project";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const {
      title,
      utils_data,
      description,
      demo,
      repository,
      img,
      presentation,
    } = await req.json();
    const project = await Project.create({
      title,
      utils_data,
      description,
      demo,
      repository,
      img,
      presentation,
    });
    if (project)
      return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
    else throw "not created";
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ err: "Error bro" }), { status: 500 });
  }
};
export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const limit = 2;
    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit);
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ err: "Error bro" }), { status: 500 });
  }
};
