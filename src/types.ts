export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  techStack: string[];
  aiTech: string[];
  problem: string;
  solution: string;
  architecture: {
    steps: { name: string; description: string; role: string }[];
    diagramLabel: string;
  };
  metrics: { value: string; label: string }[];
  challenges: string;
  results: string;
  githubUrl?: string;
  role?: string;
  aiFeatures?: string[];
  businessImpact?: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  videoType?: "youtube" | "vimeo" | "loom" | "mp4";
  screenshots?: string[];
  responsibilities?: string[];
  achievements?: string[];
  timeline?: string;
  industry?: string;
  company?: string;
  country?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  modulesCount: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  syllabus: string[];
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarLetter: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}
