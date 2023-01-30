import {
  TransactionCardMobile,
  TransactionCard,
  SingleCardInformation,
} from "../Cards/Cards";
import { useResize } from "../../hooks/useResize.hook";
const Analitics = () => {
  const { isScreenSm } = useResize();
  return (
    <div className="invoices__body single-card">
      <div className="single-card__content">
        <SingleCardInformation />
        <div className="single-card__transactions transactions">
          <div className="transactions__title">RELATED TRANSACTIONS</div>
          <div className="transactions__items">
            {isScreenSm ? <TransactionCard /> : <TransactionCardMobile />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analitics;
