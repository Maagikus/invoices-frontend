import { SingleCardInformation, ListCard } from "../Cards/Cards";
const Refound = () => {
  return (
    <div className="invoices__body single-card">
      <div className="single-card__content">
        <SingleCardInformation />
        <div className="single-card__transactions transactions">
          <div className="transactions__title">RELATED INVOICE</div>
          <div className="transactions__items">
            <ListCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Refound;
