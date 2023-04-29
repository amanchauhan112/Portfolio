import React from "react";
import "../assets/css/projects.css";
import { ProjectsDetails } from "../ProjectsDetails";
import Footer from "../components/footer/footer";
const Projects = () => {

  const ProjectCard = ({ img_src, desc, techType, RouteLink,name }) => {
    return (
          <div className="cards__item">
            <a href={RouteLink} target="_blank" rel="noreferrer">
              <figure className="cards__item__pic-wrap" data-category={techType}>
                <img className="cards__item__img" alt="Travel" src={img_src} />
              </figure>
            </a>
            <p className="project_name">{name}</p>
            <div className="cards__item__info">
              <h5 className="project_desc">{desc}</h5>
            </div>                  
            <a className="project_link" rel="noreferrer" target="_blank"  href={RouteLink}>Link</a>
          </div>
    );
  };
  return (
    <div className="project_main_div" style={{ width: `100%` }}>
      <h1 className="my_projects">MY PROJECTS</h1>
      <div className="cards">
        {ProjectsDetails.map((val) => (
          <ProjectCard
            img_src={val.img}
            name={val.name}
            desc={val.desc}
            techType={val.techType}
            RouteLink={val.RouteLink}
            key={val.key}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
