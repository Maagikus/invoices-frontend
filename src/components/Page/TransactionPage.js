import Transaction from "../Transaction/Transaction";
import Refound from "../Refound/Refound";

const TransactionPage = () => {
  return (
    <div className="main">
      <section className="invoices">
        <div className="invoices__container">
          <h2 className="invoices__title">TRANSACTIONS</h2>
          <Transaction />
          <Refound />
        </div>
      </section>
    </div>
  );
};
export default TransactionPage;
