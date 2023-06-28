import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
import "./singleProvider.scss";
import "../mainPage/mainPage.css";
import { useResize } from "../../hooks/useResize.hook";

// import "../../index.css";

const SingleProvider = () => {
  const { isScreenMmd } = useResize();
  const providers = ["prov1", "prov1", "prov1", "prov1", "prov1", "prov1"];
  console.log(isScreenMmd);
  return (
    <div class="wrapper">
      <HeaderMain />
      <main className="page">
        <section class="pitch">
          <div class="pitch__container">
            <div class="pitch__body">
              <div class="pitch__left">
                <div class="pitch__image-ibg">
                  <img
                    src={require("../../img/desctop/singleProvider/connectum.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="pitch__right">
                <h2 class="pitch__title">
                  <span>Effective acquiring. Reliable payments.</span>
                  <span>Effective acquiring. Reliable payments.</span>
                  <span>Effective acquiring. Reliable payments.</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="pitch__decor pitch__decor-light"></div>
          <div class="pitch__decor pitch__decor-darck"></div>
        </section>
        <section class="singleProvider__information provider-information">
          <div className="provider-information__header header-information">
            <div class="header-information__container">
              <ul class="header-information__list">
                <li class="header-information__item">
                  <h2 class="header-information__title">Website</h2>
                  <span class="header-information__text header-information__title-highlighted">
                    https://connectum.eu/
                  </span>
                </li>
                <li class="header-information__item">
                  <h2 class="header-information__title header-information__title-highlighted">
                    Country
                  </h2>
                  <span class="header-information__text">United Kingdom</span>
                </li>
                <li class="header-information__item">
                  <h2 class="header-information__title">Processing in</h2>
                  <span class="header-information__text header-information__text-highlighted">
                    Europe
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="provider-information__body body-information">
            <div class="body-information__container">
              <div class="body-information__left">
                <ul class="body-information__list">
                  <li class="body-information__item">
                    <h2 class="body-information__title">
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
                    <span class="body-information__text">
                      Bank Wire, Credit card, E-wallet
                    </span>
                  </li>
                  <li class="body-information__item">
                    <h2 class="body-information__title">
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
                    <span class="body-information__text">
                      Apple Pay, Google Pay, Maestro, Mastercard, UnionPay,
                      Visa, Visa Electron
                    </span>
                  </li>
                  <li class="body-information__item">
                    <h2 class="body-information__title">
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
                    <span class="body-information__text">
                      Currency conversion, Payment Link, Payouts, Recurring
                      Payments, Refunds
                    </span>
                  </li>
                  <li class="body-information__item">
                    <h2 class="body-information__title">
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
                    <span class="body-information__text">
                      Solutions Fraud Prevention, IBAN account, Mobile Checkout,
                      Online Payments, Payment Gateway, Virtual Terminal
                    </span>
                  </li>
                  <li class="body-information__item">
                    <h2 class="body-information__title">
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
                    <span class="body-information__text"> WooCommerce</span>
                  </li>
                  {isScreenMmd ? (
                    <>
                      {" "}
                      <li class="body-information__item">
                        <h2 class="body-information__title">
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
                        <span class="body-information__text">
                          Adult, E-commerce, Financial Services, Gambling,
                          Gaming, Hospitality, Travel
                        </span>
                      </li>
                      <li class="body-information__item">
                        <h2 class="body-information__title">
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
                        <span class="body-information__text">
                          Integration Methods Hosted Checkout, Server to Server
                        </span>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
              <div class="body-information__right">
                <div class="body-information__social social-hexa">
                  <div class="social-hexa__column social-hexa__column-left">
                    {!isScreenMmd ? (
                      <div class="social-hexa__item">
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
                            fill-opacity="0.18"
                          />
                        </svg>
                        <a href="#" class="social-hexa__link"></a>
                      </div>
                    ) : null}

                    <div class="social-hexa__item">
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
                      <a href="#" class="social-hexa__link _icon-f2"></a>
                    </div>
                  </div>
                  <div class="social-hexa__column social-hexa__column-middle">
                    {!isScreenMmd ? (
                      <div class="social-hexa__item">
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
                            fill-opacity="0.07"
                          />
                        </svg>

                        <a href="#" class="social-hexa__link"></a>
                      </div>
                    ) : null}

                    <div class="social-hexa__item">
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
                      <a href="#" class="social-hexa__link _icon-f4"></a>
                    </div>
                    <div class="social-hexa__item">
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
                      <a href="#" class="social-hexa__link _icon-linkedin"></a>
                    </div>
                  </div>
                  {!isScreenMmd ? (
                    <div class="social-hexa__column social-hexa__column-right">
                      <div class="social-hexa__item">
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
                            fill-opacity="0.16"
                          />
                        </svg>
                        <a href="#" class="social-hexa__link"></a>
                      </div>
                      <div class="social-hexa__item">
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
                            fill-opacity="0.31"
                          />
                        </svg>

                        <a href="#" class="social-hexa__link"></a>
                      </div>
                    </div>
                  ) : null}
                </div>
                {!isScreenMmd ? (
                  <ul class="body-information__list">
                    <li class="body-information__item">
                      <h2 class="body-information__title">
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
                      <span class="body-information__text">
                        Adult, E-commerce, Financial Services, Gambling, Gaming,
                        Hospitality, Travel
                      </span>
                    </li>
                    <li class="body-information__item">
                      <h2 class="body-information__title">
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
                      <span class="body-information__text">
                        Integration Methods Hosted Checkout, Server to Server
                      </span>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
          <div class="singleProvider__decor"></div>
        </section>
        <section class="alternative">
          <div class="alternative__header">
            <div class="alternative__container">
              <h2 class="alternative__title">ALTERNATIVE PROVIDERS</h2>
            </div>
          </div>
          <div class="alternative__body">
            <div class="alternative__container alternative__container-wide">
              <div class="alternative__content">
                <ul class="alternative__list">
                  {}
                  {isScreenMmd
                    ? providers.slice(0, 3).map((item, index) => {
                        return (
                          <li key={index} class="alternative__item">
                            <div class="alternative__image-ibg">
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
                          <li key={index} class="alternative__item">
                            <div class="alternative__image-ibg">
                              <img
                                src={require(`../../img/desctop/prov1.png`)}
                                alt=""
                              />
                            </div>
                          </li>
                        );
                      })}
                </ul>
                <div class="alternative__all _icon-down_arrow"></div>
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
