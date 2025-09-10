// src/data/projects.ts
import Psico from "../components/work/SystemPsico.astro";
import Reports from "../components/work/SystemReports.astro";
import Landing from "../components/work/LandingAndes.astro";
import Blog from "../components/work/LaCalifornia.astro";

export interface ProjectData {
  component: any; // el componente Astro
  title: string;
  description: string;
  image?: string;
}

export const projects: Record<string, ProjectData> = {
  psico: { 
    component: Psico, 
    title: "Sistema de Psicología", 
    description: "Sistema web para agendar y gestionar citas psicológicas con reportes y videollamadas.",
    image: "/assets/Psico.webp" },

  reports: { 
    component: Reports, 
    title: "Sistema Reportes", 
    description: "Plataforma de gestión de reportes migrada a Astro con backend en NestJS.",
    image: "/assets/Reportes.webp" },

  landing: { 
    component: Landing, 
    title: "Landing Lácteos", 
    description: "Landing page para el departamento de sistemas de lácteos los andes.",
    image: "/assets/Landing.webp" },

  blog: { 
    component: Blog, 
    title: "Blog La California", 
    description: "Blog informativo con diseño personalizado para una comunidad local.",
    image: "/assets/Blog.webp" },
};

// Mapeo de rutas dinámicas
export function getProjectPaths() {
  return Object.keys(projects).map((id) => ({
    params: { id },
    props: { id },
  }));
}
