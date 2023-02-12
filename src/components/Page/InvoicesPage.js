import Invoices from "../Invoices/Invoices";
import Analitics from "../Analitics/Analitics";
const InvoicesPage = () => {
  return (
    <div className="main">
      <section className="invoices">
        <div className="invoices__container">
          <h2 className="invoices__title">INVOICES</h2>
          <Invoices />
          <Analitics />
        </div>
      </section>
    </div>
  );
};
export default InvoicesPage;
