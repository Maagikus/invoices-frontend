import Filter from "../Filters/Filter";
import { useState } from "react";
import { useResize } from "../../hooks/useResize.hook";
import { ProjectCardList, ProjectCardTile } from "../Cards/Cards";
const Projects = () => {
  const { isScreenMd } = useResize();
  const [isList, setIsList] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const onActiveFilter = () => {
    setIsFilterActive(!isFilterActive);
  };
  return (
    <>
      <div className="invoices__controls">
        <div className="invoices__create">
          <span className="_icon-withdrawals"></span> Create
        </div>
        <div className="invoices__view">
          <div
            onClick={() => setIsList(!isList)}
            className={
              !isList
                ? "invoices__list _icon-filter-table "
                : "invoices__list _icon-filter-table active "
            }
          ></div>
          <div
            onClick={() => setIsList(!isList)}
            className={
              isList
                ? "invoices__table _icon-filter-table-vector "
                : "invoices__table _icon-filter-table-vector active"
            }
          ></div>
        </div>
      </div>
      <div
        onClick={onActiveFilter}
        className="filters-invoices__title filters-invoices__title-mobile"
      >
        FILTERS
      </div>

      <div className="body-invoices__wrapper">
        <div
          className={
            isFilterActive
              ? "body-invoices__filters filters-invoices filters active"
              : "body-invoices__filters filters-invoices filters"
          }
        >
          <h2 onClick={onActiveFilter} className="filters-invoices__title">
            FILTERS
          </h2>
          <Filter />
        </div>

        <div className="body-invoices__content content-invoices">
          <div className="content-invoices__wrapper projects">
            <div className="projects__content">
              <div
                className={
                  isList
                    ? "projects__cards cards-projects cards-projects-list"
                    : "projects__cards cards-projects"
                }
              >
                {isList && isScreenMd ? (
                  <>
                    <ProjectCardList />
                    <ProjectCardList />
                    <ProjectCardList />
                  </>
                ) : (
                  <>
                    <ProjectCardTile />
                    <ProjectCardTile />
                    <ProjectCardTile />
                    <ProjectCardTile />
                    <ProjectCardTile />
                    <ProjectCardTile />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
