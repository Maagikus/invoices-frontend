import { SingleCardInformation, ListCard, NormalCard } from "../Cards/Cards";
import { useResize } from "../../hooks/useResize.hook";
const Refound = () => {
  const { isScreenSm } = useResize();
  return (
    <div className="invoices__body single-card">
      <div className="single-card__content">
        <SingleCardInformation />
        <div className="single-card__transactions transactions">
          <div className="transactions__title">RELATED INVOICE</div>
          <div className="transactions__items">
            {isScreenSm ? <ListCard /> : <NormalCard />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Refound;
