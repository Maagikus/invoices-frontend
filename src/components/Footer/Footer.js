const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top top-footer">
          <div className="top-footer__main">
            <div className="top-footer__header">
              <div className="top-footer__logo _icon-logo">BeezyyCashier</div>
              <div className="top-footer__img">
                <img
                  src={require("../../img/mobile/dss-footer-mabile.png")}
                  alt="PCI DSS"
                />
              </div>
            </div>
            <div className="top-footer__social social">
              <ul className="social__list">
                <li className="social__item">
                  <a href="#" className="social__link _icon-f1"></a>
                </li>
                <li className="social__item">
                  <a href="#" className="social__link _icon-f2"></a>
                </li>
                <li className="social__item">
                  <a href="#" className="social__link _icon-linkedin"></a>
                </li>
                <li className="social__item">
                  <a href="#" className="social__link _icon-f4"></a>
                </li>
                <li className="social__item">
                  <a href="#" className="social__link _icon-f5"></a>
                </li>
                <li className="social__item">
                  <a href="#" className="social__link _icon-f6"></a>
                </li>
              </ul>
            </div>
            <div className="top-footer__img">
              <img src={require("../../img/desctop/dss2.png")} alt="PCI DSS" />
            </div>
            <div className="top-footer__rights">
              {" "}
              2022 <span>BEEZYY CASHIER SYSTEM LTD</span>, ALL RIGHTS RESERVED{" "}
            </div>
            <div className="top-footer__address">
              85 Great Portland Street, London, England, W1W 7LT Registration
              number 13076709
            </div>
          </div>
          <ul className="top-footer__information information-list">
            <li className="information-list__item">
              <h2 className="information-list__title">About us</h2>
              <ul className="information-list__sublist sublist-information">
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Why Beezyy Cashier?
                  </a>
                </li>
              </ul>
            </li>
            <li className="information-list__item">
              <h2 className="information-list__title">Our services</h2>
              <ul className="information-list__sublist sublist-information">
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Our plans
                  </a>
                </li>
              </ul>
            </li>
            <li className="information-list__item">
              <h2 className="information-list__title">Our oroduct</h2>
              <ul className="information-list__sublist sublist-information">
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    One integration
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Increase Revenue
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Modular and Dynamic
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Financial Management
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Virtual Terminal
                  </a>
                </li>
              </ul>
            </li>
            <li className="information-list__item">
              <h2 className="information-list__title">Beezyy</h2>
              <ul className="information-list__sublist sublist-information">
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Contact
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    FAQ
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Careers
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="information-list__item">
              <h2 className="information-list__title">Terms and conditions</h2>
              <ul className="information-list__sublist sublist-information">
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Privacy policy
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Terms of use
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Cookie policy
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    AML/CTF AND
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    KYC POLICY
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Refund policy
                  </a>
                </li>
                <li className="sublist-information__item">
                  <a href="#" className="sublist-information__link">
                    Formal offer
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p>
            SERVICES ARE INTEGRATION AND DATA TRANSFER ONLY. AND DO NOT INCLUBE
            TRANSACTION PROCESSING
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
