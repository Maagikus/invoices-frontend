import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import "./providers.scss";
import "../mainPage/mainPage.css";
import IndustrySelect from "../../components/Filters/IndustrySelect";
import { useState } from "react";
import usePagination from "../../hooks/usePagination.hook";

// import "../../index.css";

const Providers = () => {
  const [firstIndustry, setFirstIndustry] = useState("");
  const [secondIndustry, setSecondIndustry] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const industryList = ["text", "text1", "text2"];
  const industryList2 = ["text3", "text4", "text5"];
  const services = [
    "Acquirer",
    "Banking",
    "Payment Gateway",
    "Payment Provider",
    "Payment Orchestrator",
    "Crypto Exchange",
  ];
  const providers = [
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov8",
    "prov9",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
  ];
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    gaps,
    totalPages,
  } = usePagination({
    contentPerPage: 14,
    count: providers.length,
  });

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  const openFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div class="wrapper">
      <HeaderMain />
      <main className="page">
        <section class="providersPage">
          <div class="providersPage__container">
            <div class="providersPage__wrapper">
              <div class="providersPage__header">
                <h2 class="providersPage__title">AVAILABLE PROVIDERS </h2>
              </div>
              <div class="providersPage__body body-providersPage">
                <div class="body-providersPage__filters filters-providersPage">
                  <form class="filters-providersPage__form">
                    <div class="filters-providersPage__item _icon-search">
                      <input
                        class="filters-providersPage__input filters-providersPage__input-search  input"
                        type="text"
                        name=""
                        placeholder="Search"
                      />
                    </div>
                    <div
                      onClick={openFilters}
                      class="filters-providersPage__title  filters-providersPage__title-mobile"
                    >
                      FILTERS
                    </div>
                    <div
                      class={`filters-providersPage__wrapper ${
                        isFiltersOpen ? "opened" : ""
                      } `}
                    >
                      <div className="filters-providersPage__item filters-providersPage__item-space">
                        {/* <div class="filters-providersPage__item _icon-search">
                          <input
                            class="filters-providersPage__input filters-providersPage__input-search  input"
                            type="text"
                            name=""
                            placeholder="Search"
                          />
                        </div> */}
                        <div class="filters-providersPage__title ">
                          Which service are you looking for?{" "}
                          <span
                            onClick={openFilters}
                            class="_icon-cross-main"
                          ></span>
                        </div>
                        <div class="filters-providersPage__checkboxes">
                          {services.map((item, index) => {
                            return (
                              <li
                                key={index}
                                className="checkbox filters-providersPage__checkbox "
                              >
                                <input
                                  id={item}
                                  value={item}
                                  className={`checkbox__input ${
                                    checkedState[index] ? "checked" : ""
                                  }`}
                                  type="checkbox"
                                  name={item}
                                  defaultChecked={checkedState[index]}
                                  onChange={() => handleOnChange(index)}
                                />
                                <label
                                  htmlFor={item}
                                  className="checkbox__label"
                                >
                                  <span className="checkbox__text">{item}</span>
                                </label>
                              </li>
                            );
                          })}
                        </div>
                      </div>
                      <div
                        className="filters-providersPage__selects"
                        style={{ overflow: "auto" }}
                      >
                        <IndustrySelect
                          state={firstIndustry}
                          setState={setFirstIndustry}
                          industryList={industryList}
                        />
                        <IndustrySelect
                          state={secondIndustry}
                          industryList={industryList2}
                          setState={setSecondIndustry}
                        />
                        <IndustrySelect
                          state={secondIndustry}
                          industryList={industryList2}
                          setState={setSecondIndustry}
                        />
                        <IndustrySelect
                          state={secondIndustry}
                          industryList={industryList2}
                          setState={setSecondIndustry}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="body-providersPage__content content-providersPage">
                  <div class="content-providersPage__pagination pagination-providersPage">
                    <ul className="pagination-providersPage__list">
                      <li
                        onClick={() => setPage(1)}
                        className={`pagination-providersPage__item  ${
                          page === 1 && "active"
                        }`}
                      >
                        1
                      </li>
                      {gaps.before ? "..." : null}
                      {/* @ts-ignore */}
                      {gaps.paginationGroup.map((el) => (
                        <li
                          onClick={() => setPage(el)}
                          key={el}
                          className={`pagination-providersPage__item  ${
                            page === el ? "active" : ""
                          }`}
                        >
                          {el}
                        </li>
                      ))}
                      {gaps.after ? "..." : null}
                      <li
                        onClick={() => setPage(totalPages)}
                        className={`pagination-providersPage__item  ${
                          page === totalPages && "active"
                        }`}
                      >
                        {totalPages}
                      </li>
                    </ul>
                  </div>
                  <div class="content-providersPage__body">
                    <ul class="content-providersPage__list">
                      {providers
                        .slice(firstContentIndex, lastContentIndex)
                        .map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="content-providersPage__item"
                            >
                              <div className="content-providersPage__image-ibg">
                                <img
                                  src={require(`../../img/desctop/${item}.png`)}
                                  alt={item}
                                />
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div class="content-providersPage__pagination pagination-providersPage">
                    <ul className="pagination-providersPage__list">
                      <li
                        onClick={() => setPage(1)}
                        className={`pagination-providersPage__item  ${
                          page === 1 && "active"
                        }`}
                      >
                        1
                      </li>
                      {gaps.before ? "..." : null}
                      {/* @ts-ignore */}
                      {gaps.paginationGroup.map((el) => (
                        <li
                          onClick={() => setPage(el)}
                          key={el}
                          className={`pagination-providersPage__item  ${
                            page === el ? "active" : ""
                          }`}
                        >
                          {el}
                        </li>
                      ))}
                      {gaps.after ? "..." : null}
                      <li
                        onClick={() => setPage(totalPages)}
                        className={`pagination-providersPage__item  ${
                          page === totalPages && "active"
                        }`}
                      >
                        {totalPages}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Providers;
