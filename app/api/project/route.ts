import { connectToDatabase } from "@utils/database";
import Project from "@models/project";
import { NextApiRequest } from "next";

export const POST = async (req: NextApiRequest) => {
  try {
    await connectToDatabase();
    const {
      page_shown,
      project_name,
      description,
      utils_data,
      landscape,
      img,
      link,
      presentation,
    } = await req.body();
    const project = await Project.create({
      page_shown,
      project_name,
      description,
      utils_data,
      landscape,
      img,
      link,
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
export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDatabase();

    const projects = await Project.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ err: "Error bro" }), { status: 500 });
  }
};
