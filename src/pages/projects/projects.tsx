import { Project } from "../../components/Project/project";
import { Title } from "../../components/title/title";
import { data } from "./data";

export const Projects = () => {
  return (
    <div id="projects">
      <Title title="My projects" />
      <div className="projectsContiner">
        {data.map((data) => (
          <Project data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
