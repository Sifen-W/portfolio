import { getProjects } from "@/lib/db";

export default async function Home() {
  const projects = await getProjects();
  return <pre>{JSON.stringify(projects, null, 2)}</pre>;
}