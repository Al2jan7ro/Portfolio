import Psico from "../components/work/SystemPsico.astro";
import Reports from "../components/work/SystemReports.astro";
import Landing from "../components/work/LandingAndes.astro";
import Blog from "../components/work/LaCalifornia.astro";

export const projects: Record<string, any> = {
  psico: Psico,
  reports: Reports,
  landing: Landing,
  blog: Blog,
};

// Mapeo para declrar las rutas
export function getProjectPaths() {
  return Object.keys(projects).map((id) => ({
    params: { id },
    props: { id },//id como props para enviar a la pagina
  }));
}
