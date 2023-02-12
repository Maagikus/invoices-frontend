import Header from "../Header/Header";
import InvoicesPage from "./InvoicesPage";
import TransactionPage from "./TransactionPage";

const Page = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <InvoicesPage />
        <TransactionPage />
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
