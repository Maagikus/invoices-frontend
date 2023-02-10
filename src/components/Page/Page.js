import Header from "../Header/Header";

const Page = ({ Analitics, Invoices, Transaction, Refound }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <div className="main">
          <section className="invoices">
            <div className="invoices__container">
              <h2 className="invoices__title">INVOICES</h2>
              {Invoices}
              {Analitics}
            </div>
          </section>
        </div>
        <div className="main">
          <section className="invoices">
            <div className="invoices__container">
              <h2 className="invoices__title">TRANSACTIONS</h2>
              {Transaction}
              {Refound}
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__item">
            2022
            <a href="/#" className="footer__link">
              BEEZYY CASHIER SYSTEM
            </a>
            LTD, ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Page;
