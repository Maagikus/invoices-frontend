import ProjectPaymentForm from "../Filters/ProjectPaymentForm";

import { CreditCards, CryptoCards } from "../Forms/Cards";
import { useState } from "react";
const ProjectsPayment = () => {
  return (
    <section className="payment">
      <div className="payment__container">
        <h2 className="payment__title">PROJECTS</h2>
        <div className="payment__content">
          <ProjectPaymentForm />
        </div>
        <div className="payment__search search-payment">
          <form action="#" className="search-payment__form">
            <div className="search-payment__item _icon-search">
              <input
                autocomplete="off"
                type="text"
                name="search"
                data-error="Ошибка"
                placeholder="Search by condition"
                className="input"
              />
            </div>
          </form>
        </div>
        <div className="payment__cards cards-payment">
          <CreditCards />
          <CryptoCards />
        </div>
      </div>
    </section>
  );
};
export default ProjectsPayment;
