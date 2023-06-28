import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import "./singleProvider.scss";
import "../mainPage/mainPage.css";
import { useResize } from "../../hooks/useResize.hook";

// import "../../index.css";

const SingleProvider = () => {
  const { isScreenMmd } = useResize();
  const providers = ["prov1", "prov1", "prov1", "prov1", "prov1", "prov1"];

  return (
    <div className="wrapper">
      <HeaderMain />
      <main className="page">
        <section className="pitch">
          <div className="pitch__container">
            <div className="pitch__body">
              <div className="pitch__left">
                <div className="pitch__image-ibg">
                  <img
                    src={require("../../img/desctop/singleProvider/connectum.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="pitch__right">
                <h2 className="pitch__title">
                  <span>Effective acquiring. Reliable payments.</span>
                  <span>Effective acquiring. Reliable payments.</span>
                  <span>Effective acquiring. Reliable payments.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="pitch__decor pitch__decor-light"></div>
          <div className="pitch__decor pitch__decor-darck"></div>
        </section>
        <section className="singleProvider__information provider-information">
          <div className="provider-information__header header-information">
            <div className="header-information__container">
              <ul className="header-information__list">
                <li className="header-information__item">
                  <h2 className="header-information__title">Website</h2>
                  <span className="header-information__text header-information__title-highlighted">
                    https://connectum.eu/
                  </span>
                </li>
                <li className="header-information__item">
                  <h2 className="header-information__title header-information__title-highlighted">
                    Country
                  </h2>
                  <span className="header-information__text">
                    United Kingdom
                  </span>
                </li>
                <li className="header-information__item">
                  <h2 className="header-information__title">Processing in</h2>
                  <span className="header-information__text header-information__text-highlighted">
                    Europe
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="provider-information__body body-information">
            <div className="body-information__container">
              <div className="body-information__left">
                <ul className="body-information__list">
                  <li className="body-information__item">
                    <h2 className="body-information__title">
                      <span>
                        <img
                          src={
                            isScreenMmd
                              ? require("../../img/desctop/singleProvider/icons/mobile/payment.png")
                              : require("../../img/desctop/singleProvider/icons/payment.png")
                          }
                          alt=""
                        />
                      </span>{" "}
                      Payment methods
                    </h2>
                    <span className="body-information__text">
                      Bank Wire, Credit card, E-wallet
                    </span>
                  </li>
                  <li className="body-information__item">
                    <h2 className="body-information__title">
                      <span>
                        <img
                          src={
                            isScreenMmd
                              ? require("../../img/desctop/singleProvider/icons/mobile/options.png")
                              : require("../../img/desctop/singleProvider/icons/options.png")
                          }
                          alt=""
                        />
                      </span>
                      Payment options
                    </h2>
                    <span className="body-information__text">
                      Apple Pay, Google Pay, Maestro, Mastercard, UnionPay,
                      Visa, Visa Electron
                    </span>
                  </li>
                  <li className="body-information__item">
                    <h2 className="body-information__title">
                      {" "}
                      <span>
                        <img
                          src={
                            isScreenMmd
                              ? require("../../img/desctop/singleProvider/icons/mobile/feature.png")
                              : require("../../img/desctop/singleProvider/icons/feature.png")
                          }
                          alt=""
                        />
                      </span>
                      Features
                    </h2>
                    <span className="body-information__text">
                      Currency conversion, Payment Link, Payouts, Recurring
                      Payments, Refunds
                    </span>
                  </li>
                  <li className="body-information__item">
                    <h2 className="body-information__title">
                      {" "}
                      <span>
                        <img
                          src={
                            isScreenMmd
                              ? require("../../img/desctop/singleProvider/icons/mobile/solutions.png")
                              : require("../../img/desctop/singleProvider/icons/solutions.png")
                          }
                          alt=""
                        />
                      </span>
                      Solutions
                    </h2>
                    <span className="body-information__text">
                      Solutions Fraud Prevention, IBAN account, Mobile Checkout,
                      Online Payments, Payment Gateway, Virtual Terminal
                    </span>
                  </li>
                  <li className="body-information__item">
                    <h2 className="body-information__title">
                      {" "}
                      <span>
                        <img
                          src={
                            isScreenMmd
                              ? require("../../img/desctop/singleProvider/icons/mobile/plugins.png")
                              : require("../../img/desctop/singleProvider/icons/plugins.png")
                          }
                          alt=""
                        />
                      </span>
                      Plugins
                    </h2>
                    <span className="body-information__text"> WooCommerce</span>
                  </li>
                  {isScreenMmd ? (
                    <>
                      {" "}
                      <li className="body-information__item">
                        <h2 className="body-information__title">
                          {" "}
                          <span>
                            <img
                              src={
                                isScreenMmd
                                  ? require("../../img/desctop/singleProvider/icons/mobile/accepted.png")
                                  : require("../../img/desctop/singleProvider/icons/accepted.png")
                              }
                              alt=""
                            />
                          </span>
                          Accepted industries
                        </h2>
                        <span className="body-information__text">
                          Adult, E-commerce, Financial Services, Gambling,
                          Gaming, Hospitality, Travel
                        </span>
                      </li>
                      <li className="body-information__item">
                        <h2 className="body-information__title">
                          {" "}
                          <span>
                            <img
                              src={
                                isScreenMmd
                                  ? require("../../img/desctop/singleProvider/icons/mobile/methods.png")
                                  : require("../../img/desctop/singleProvider/icons/methods.png")
                              }
                              alt=""
                            />
                          </span>
                          Integration methods
                        </h2>
                        <span className="body-information__text">
                          Integration Methods Hosted Checkout, Server to Server
                        </span>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
              <div className="body-information__right">
                <div className="body-information__social social-hexa">
                  <div className="social-hexa__column social-hexa__column-left">
                    {!isScreenMmd ? (
                      <div className="social-hexa__item">
                        <svg
                          width="147"
                          height="119"
                          viewBox="0 0 147 119"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                            fill="#FBBD00"
                            fillOpacity="0.18"
                          />
                        </svg>
                        <a href="#" className="social-hexa__link"></a>
                      </div>
                    ) : null}

                    <div className="social-hexa__item">
                      <svg
                        width="147"
                        height="119"
                        viewBox="0 0 147 119"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                          fill="#FBBD00"
                        />
                      </svg>
                      <a href="#" className="social-hexa__link _icon-f2"></a>
                    </div>
                  </div>
                  <div className="social-hexa__column social-hexa__column-middle">
                    {!isScreenMmd ? (
                      <div className="social-hexa__item">
                        <svg
                          width="147"
                          height="119"
                          viewBox="0 0 147 119"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                            fill="#FBBD00"
                            fillOpacity="0.07"
                          />
                        </svg>

                        <a href="#" className="social-hexa__link"></a>
                      </div>
                    ) : null}

                    <div className="social-hexa__item">
                      <svg
                        width="147"
                        height="119"
                        viewBox="0 0 147 119"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                          fill="#FBBD00"
                        />
                      </svg>
                      <a href="#" className="social-hexa__link _icon-f4"></a>
                    </div>
                    <div className="social-hexa__item">
                      <svg
                        width="147"
                        height="119"
                        viewBox="0 0 147 119"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                          fill="#FBBD00"
                        />
                      </svg>
                      <a
                        href="#"
                        className="social-hexa__link _icon-linkedin"
                      ></a>
                    </div>
                  </div>
                  {!isScreenMmd ? (
                    <div className="social-hexa__column social-hexa__column-right">
                      <div className="social-hexa__item">
                        <svg
                          width="147"
                          height="120"
                          viewBox="0 0 147 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110.813 8.2033e-05L37.0893 0L0 59.7653L37.0893 120H110.813L147 59.7653L110.813 8.2033e-05Z"
                            fill="#FBBD00"
                            fillOpacity="0.16"
                          />
                        </svg>
                        <a href="#" className="social-hexa__link"></a>
                      </div>
                      <div className="social-hexa__item">
                        <svg
                          width="147"
                          height="119"
                          viewBox="0 0 147 119"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110.813 8.13494e-05L37.0893 0L0 59.2673L37.0893 119H110.813L147 59.2673L110.813 8.13494e-05Z"
                            fill="#FBBD00"
                            fillOpacity="0.31"
                          />
                        </svg>

                        <a href="#" className="social-hexa__link"></a>
                      </div>
                    </div>
                  ) : null}
                </div>
                {!isScreenMmd ? (
                  <ul className="body-information__list">
                    <li className="body-information__item">
                      <h2 className="body-information__title">
                        {" "}
                        <span>
                          <img
                            src={
                              isScreenMmd
                                ? require("../../img/desctop/singleProvider/icons/mobile/accepted.png")
                                : require("../../img/desctop/singleProvider/icons/accepted.png")
                            }
                            alt=""
                          />
                        </span>
                        Accepted industries
                      </h2>
                      <span className="body-information__text">
                        Adult, E-commerce, Financial Services, Gambling, Gaming,
                        Hospitality, Travel
                      </span>
                    </li>
                    <li className="body-information__item">
                      <h2 className="body-information__title">
                        {" "}
                        <span>
                          <img
                            src={
                              isScreenMmd
                                ? require("../../img/desctop/singleProvider/icons/mobile/methods.png")
                                : require("../../img/desctop/singleProvider/icons/methods.png")
                            }
                            alt=""
                          />
                        </span>
                        Integration methods
                      </h2>
                      <span className="body-information__text">
                        Integration Methods Hosted Checkout, Server to Server
                      </span>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
          <div className="singleProvider__decor"></div>
        </section>
        <section className="alternative">
          <div className="alternative__header">
            <div className="alternative__container">
              <h2 className="alternative__title">ALTERNATIVE PROVIDERS</h2>
            </div>
          </div>
          <div className="alternative__body">
            <div className="alternative__container alternative__container-wide">
              <div className="alternative__content">
                <ul className="alternative__list">
                  {}
                  {isScreenMmd
                    ? providers.slice(0, 3).map((item, index) => {
                        return (
                          <li key={index} className="alternative__item">
                            <div className="alternative__image-ibg">
                              <img
                                src={require(`../../img/desctop/prov1.png`)}
                                alt=""
                              />
                            </div>
                          </li>
                        );
                      })
                    : providers.map((item, index) => {
                        return (
                          <li key={index} className="alternative__item">
                            <div className="alternative__image-ibg">
                              <img
                                src={require(`../../img/desctop/prov1.png`)}
                                alt=""
                              />
                            </div>
                          </li>
                        );
                      })}
                </ul>
                <div className="alternative__all _icon-down_arrow"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SingleProvider;
