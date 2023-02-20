import Refund from "../Refunds/Refunds";
import RefundSingle from "../RefundSingle/RefundSingle";

const RefundsPage = () => {
  return (
    <div className="main">
      <section className="invoices">
        <div className="invoices__container">
          <h2 className="invoices__title">REFUNDS</h2>
          <Refund />
          <RefundSingle />
        </div>
      </section>
    </div>
  );
};
export default RefundsPage;
