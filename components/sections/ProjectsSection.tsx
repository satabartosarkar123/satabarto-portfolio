import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const PROJECTS_QUERY = defineQuery(`*[_type == "project"]{
  _id,
  title,
  metric,
  problem,
  challenges,
  techStack,
  githubUrl,
  image
}`);

export async function ProjectsSection() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Systems Architecture
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & Implementations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade solutions focusing on data pipelines, backend
            integrity, and scalable APIs.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="flex flex-col gap-8">
          {projects.map(
            (project: {
              _id: string;
              title?: string | null;
              metric?: string | null;
              problem?: string | null;
              challenges?: string | null;
              techStack?: string[] | null;
              githubUrl?: string | null;
            }) => (
              <div
                key={project._id}
                className="stardust-hover rounded-xl p-6 md:p-10 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                    {project.title}
                  </h3>
                  {project.metric && (
                    <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full hud-border">
                      {project.metric}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  <div>
                    <h4 className="text-foreground font-semibold mb-2 flex items-center text-sm">
                      <span className="w-1 h-4 mr-2 rounded-sm bg-primary" />
                      Problem Space
                    </h4>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2 flex items-center text-sm">
                      <span className="w-1 h-4 mr-2 rounded-sm bg-[#7c4dff]" />
                      Challenges & Bottlenecks
                    </h4>
                    <p>{project.challenges}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="skill-tag text-[10px] font-mono px-3 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm px-5 py-2 hud-border hud-border-hover text-primary rounded transition-all duration-300"
                    >
                      View Repository ↗
                    </Link>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
