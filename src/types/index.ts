export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string; // comma-separated, we'll split it when displaying
  github_url: string | null;
  live_url: string | null;
  created_at: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

// What the contact form sends — no id/created_at, the DB generates those
export type NewMessage = Pick<Message, "name" | "email" | "message">;