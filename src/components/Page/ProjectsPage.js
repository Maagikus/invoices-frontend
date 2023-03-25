import Projects from "../Projects/Projects";
import ProjectsSingle from "../ProjectsSingle/ProjectsSingle";
import ProjectsPayment from "../Page/ProjectsPayment";
const ProjectsPage = () => {
  return (
    <div className="main">
      <section className="invoices">
        <div className="invoices__container">
          <h2 className="invoices__title">PROJECTS</h2>
          <Projects />
          <ProjectsSingle />
        </div>
      </section>
      <ProjectsPayment />
    </div>
  );
};
export default ProjectsPage;
