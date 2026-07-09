import { createClient } from "@libsql/client";
import type { Project, NewMessage } from "@/types";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function getProjects(): Promise<Project[]> {
  const result = await client.execute(
    "SELECT * FROM projects ORDER BY created_at DESC"
  );
  return result.rows as unknown as Project[];
}

export async function getProjectById(id: number): Promise<Project | null> {
  const result = await client.execute({
    sql: "SELECT * FROM projects WHERE id = ?",
    args: [id],
  });
  return (result.rows[0] as unknown as Project) ?? null;
}

export async function createMessage(data: NewMessage): Promise<void> {
  await client.execute({
    sql: "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
    args: [data.name, data.email, data.message],
  });
}