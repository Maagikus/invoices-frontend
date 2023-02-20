import {
  SingleCardInformation,
  ListCard,
  NormalCard,
  TransactionCard,
  TransactionCardMobile,
} from "../Cards/Cards";
import { useResize } from "../../hooks/useResize.hook";

const RefundSingle = () => {
  const { isScreenSm } = useResize();

  return (
    <div className="invoices__body single-card">
      <div className="single-card__content">
        <SingleCardInformation />
        <div className="single-card__transactions related">
          <div className="related__item">
            <div className="transactions__title">RELATED INVOICE</div>
            <div className="transactions__items">
              {isScreenSm ? <ListCard /> : <NormalCard />}
            </div>
          </div>
          <div className="related__item">
            <div className="transactions__title">RELATED ТRANSACTIONS</div>
            <div className="transactions__items related__items">
              {isScreenSm ? <TransactionCard /> : <TransactionCardMobile />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RefundSingle;
