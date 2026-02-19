export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: "frontend" | "backend" | "fullstack" | "ai";
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Message {
  role: "user" | "assistant";
  content: string;
}
