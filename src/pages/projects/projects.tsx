import { useContext } from "react";
import { Project } from "../../components/Project/project";
import { Title } from "../../components/title/title";
import { Context } from "../../context/store";
import { data } from "./data";

export const Projects = () => {
  const { theme } = useContext(Context);

  return (
    <div className={`projects ${theme}`}>
      <Title title="My projects" />
      <div className="projectsContiner">
        {data.map((data) => (
          <Project data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
