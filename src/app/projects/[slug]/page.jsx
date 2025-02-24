import Header from "@/components/Header";
import projects from "@/data/projects";

const SingleProject = (props) => {
  const slug = props.params.slug;

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) return <p>Project not found!</p>;
  console.log(project.name);

  return (
    <section className="">
      <Header />
      <div className="px-4">
        <div className="mt-60 p-6 bg-zinc-100 rounded grid grid-cols-2 gap-8 tracking-tight">
          <div>
            <img src={`/images/projects/${project.image}`} className="w-full" />
          </div>
          <div>
            <div className="leading-none">
              <h1 className="font-medium">{project.name}</h1>
              <p className="text-zinc-500">{project.type}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
