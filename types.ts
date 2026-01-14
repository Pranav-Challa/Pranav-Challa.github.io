
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
