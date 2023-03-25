const ProjectsSingle = () => {
  return (
    <div className="single-project__content">
      <div className="invoices__body project-card">
        <div className="project-card__content">
          <div className="project-card__information information-card">
            <div className="information-card__content">
              <ul className="information-card__list">
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    status{" "}
                  </h2>
                  <div className="information-card__value stat-success">
                    {" "}
                    Success{" "}
                  </div>
                </li>
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    in sanbdbox{" "}
                  </h2>
                  <div className="information-card__value">
                    {" "}
                    <span className="sanbdbox-no"> No</span>{" "}
                  </div>
                </li>
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    title{" "}
                  </h2>
                  <div className="information-card__value invoices-inform__value">
                    <div className="information-card__copy"></div>
                    <span>Test Project</span>
                  </div>
                </li>
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    url{" "}
                  </h2>
                  <div className="information-card__value invoices-inform__value">
                    <div className="information-card__link"></div>{" "}
                    https://beezyycashier.com/
                  </div>
                </li>
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    description{" "}
                  </h2>
                  <div className="information-card__value invoices-inform__value">
                    {" "}
                    Test project{" "}
                  </div>
                </li>
                <li className="information-card__item invoices-inform">
                  <h2 className="information-card__title invoices-inform__title">
                    {" "}
                    amount{" "}
                  </h2>
                  <div className="information-card__value invoices-inform__value">
                    {" "}
                    10 HKD{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card__actions">
        <div className="project-card__update">Update</div>
        <div className="project-card__customization">Customization</div>
        <div className="project-card__delete">Delete</div>
      </div>
    </div>
  );
};
export default ProjectsSingle;
