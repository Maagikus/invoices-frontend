import { useState } from "react";
import Filter from "../Filters/Filter";
import { TransitionCardTile, TransactionCard } from "../Cards/Cards";

const Transaction = () => {
  const [isList, setIsList] = useState(true);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const onActiveFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

  return (
    <div className="invoices__body body-invoices">
      <div className="body-invoices__header">
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
                  ? "invoices__table _icon-filter-table-vector"
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
          <div className="content-invoices__wrapper">
            <div
              className={
                isList
                  ? "transactions__items transactions__items-tile"
                  : "transactions__items "
              }
            >
              {isList ? (
                <>
                  <TransitionCardTile />
                  <TransitionCardTile />
                  <TransitionCardTile />
                </>
              ) : (
                <>
                  <TransactionCard />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
