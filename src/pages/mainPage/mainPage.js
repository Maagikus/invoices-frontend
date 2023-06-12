import { useState, useEffect } from "react";
import Select, { components } from "react-select";
import Providers from "../../components/Providers/Providers";
import vectorLogo from "../../img/icons/Vector-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import PaymentForm from "../../components/Forms/PaymentForm";
import CustomizationForm from "../../components/Forms/CastomizationForm";
import { useResize } from "../../hooks/useResize.hook";
import "./mainPage.css";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Industries from "../../components/industries/Industries";
import { useCookies } from "react-cookie";
import line from "../../img/desctop/03.svg";
import HeaderMain from "../../components/Header/HeaderMain";
import Footer from "../../components/Footer/Footer";
const MainPage = () => {
  const [svgFillColor, setSvgFillColor] = useState("#FFE2A1");

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const gradientHeight = body.scrollHeight - window.innerHeight;

      // Проверка, находится ли скролл в зоне наложения фонового градиента
      if (scrollTop < 362.5) {
        setSvgFillColor("#FFFFFF");
      } else {
        setSvgFillColor("#FFE2A1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [cookies, setCookie] = useCookies(["name"]);
  const [cvv, setCVV] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [selectedImage, setSelectedImage] = useState("");

  //========================================================================================================================================================

  const options = [
    { value: "Ukraine", label: "Ukraine" },
    { value: "Poland", label: "Poland" },
  ];
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 10L0.00480938 0.25H12.9952L6.5 10Z" fill="#FBBD00" />
        </svg>
      </components.DropdownIndicator>
    );
  };
  //   useEffect(() => {
  //     const hasCookiePermission = cookies.cookiePermission;

  //     if (!hasCookiePermission) {
  //       setCookie("cookiePermission", true);
  //     }
  //   }, [cookies, setCookie]);
  useEffect(() => {
    if (JSON.stringify(cookies) !== "{}") {
      const {
        languages,
        theme,
        inputOutline,
        unlockBtnColor,
        lockBtnColor,
        textColor,
        payBtnColor,
        orderTextColor,
        selectedImage,
      } = cookies.name;

      setLanguages(languages);
      setTheme(theme);
      setOutline(inputOutline);
      setUnlockButtonColor(unlockBtnColor);
      setLockButtonColor(lockBtnColor);
      setTextColor(textColor);
      setPayButtonColor(payBtnColor);
      setOrderTextColor(orderTextColor);
      setIsDark(theme);
      setSelectedImage(selectedImage);
    }
  }, [cookies]);

  const { isScreenSmalMobile, isScreenMmd } = useResize();

  const [isChecked, setIsChecked] = useState(false);
  const [closed, setClosed] = useState(true);
  const [languages, setLanguages] = useState("EN");
  const [theme, setTheme] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [outline, setOutline] = useState(false);
  const [unlockButtonColor, setUnlockButtonColor] = useState("green");
  const [lockButtonColor, setLockButtonColor] = useState("#FF0000");
  const [payButtonColor, setPayButtonColor] = useState("transparent");
  const [orderTextColor, setOrderTextColor] = useState("#fbbd00");
  const [textColor, setTextColor] = useState("#000000");
  const [customizeFormOpened, setCustomizeFormOpened] = useState(false);
  const [activeItem, setActiveItem] = useState("item1");
  const [activeForm, setActiveForm] = useState("item1");

  const handleClickMenu = (item, e) => {
    e.preventDefault();
    setActiveItem(item);
  };
  const handleClickActiveForm = (item, e) => {
    e.preventDefault();
    setActiveForm(item);
  };
  const changeCheckbox = (e) => {
    setIsChecked((prev) => !prev);
  };

  let customizingStyles = {
    languages: languages,
    theme: theme,
    inputOutline: outline,
    unlockBtnColor: unlockButtonColor,
    lockBtnColor: lockButtonColor,
    textColor: textColor,
    payBtnColor: payButtonColor,
    orderTextColor: orderTextColor,
    selectedImage: selectedImage,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    customizingStyles = {
      languages: languages,
      theme: theme,
      inputOutline: outline,
      unlockBtnColor: unlockButtonColor,
      lockBtnColor: lockButtonColor,
      textColor: textColor,
      payBtnColor: payButtonColor,
      orderTextColor: orderTextColor,
      selectedImage: selectedImage,
    };
    setCookie("name", customizingStyles, { path: "/" });
  };
  return (
    <div className="wrapper">
      <HeaderMain />
      <main className="page">
        <section id="introduction" className="introduction">
          <div className="introduction__decor introduction__decor-top">
            <img src={require("../../img/desctop/07.png")} alt="decor" />
          </div>
          <div className="introduction__decor introduction__decor-bottom">
            {/* <img src={`data:image/svg+xml;utf8,`} alt="decor" /> */}
            <svg
              id="svgId"
              width="603"
              height="241"
              viewBox="0 0 603 241"
              //   fill={svgFillColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={svgFillColor}
                style={{
                  transition: "all 0.3s ease 0s",
                }}
                d="M585.885 9.53674e-05C576.982 9.53674e-05 569.765 7.5849 569.765 16.9413C569.765 26.2976 576.982 33.8824 585.885 33.8824C594.788 33.8824 602.005 26.2976 602.005 16.9413C602.005 7.5849 594.788 9.53674e-05 585.885 9.53674e-05Z"
              />
              <path
                fill={svgFillColor}
                style={{
                  transition: "all 0.3s ease 0s",
                }}
                d="M438.656 109.176C429.16 109.176 421.462 116.761 421.462 126.118C421.462 135.474 429.16 143.059 438.656 143.059C448.152 143.059 455.851 135.474 455.851 126.118C455.851 116.761 448.152 109.176 438.656 109.176Z"
              />
              <path
                fill={svgFillColor}
                style={{
                  transition: "all 0.3s ease 0s",
                }}
                d="M292.503 9.53674e-05C283.007 9.53674e-05 275.309 7.5849 275.309 16.9413C275.309 26.2976 283.007 33.8824 292.503 33.8824C302 33.8824 309.698 26.2976 309.698 16.9413C309.698 7.5849 302 9.53674e-05 292.503 9.53674e-05Z"
              />
              <path
                fill={svgFillColor}
                style={{
                  transition: "all 0.3s ease 0s",
                }}
                d="M585.418 16.9412L586.959 19.015L438.315 129.82L292.57 20.9711L144.83 181.58L144.565 181.689L1.18427 240.941L0.199036 238.551L143.317 179.408L292.249 17.5049L438.317 126.596L585.418 16.9412Z"
              />
            </svg>
          </div>
          <div className="introduction__container">
            <div className="introduction__wrapper">
              <div className="introduction__conten content-introductiont">
                <div className="content-introductiont__header">
                  <div className="content-introductiont__title">
                    BEEZYY - ORGANIZE <span>YOUR PAYMENTS EASY</span>{" "}
                  </div>
                  <div className="content-introductiont__subtitle">
                    {" "}
                    A NEW APPROACH IN PAYMENT ORGANIZATION{" "}
                    <span>COMPLEX THINGS CAN BE SIMPLE</span>
                  </div>
                </div>
                <div className="content-introductiont__footer footer-introduction">
                  <div className="footer-introduction__wrapp">
                    <div className="content-introductiont__image-ibg">
                      <img
                        src={require("../../img/desctop/girl-coins.png")}
                        alt="Girl with coins"
                      />
                    </div>
                  </div>
                  <div className="content-introductiont__demo button">
                    I want Demo
                  </div>
                </div>
              </div>
              <div className="introduction__decorations decorations-introduction">
                <div className="decorations-introduction__image-ibg">
                  <img
                    src={require("../../img/desctop/main-screen.png")}
                    alt="mainScreen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="introduction__controls">
            <ul className="introduction__list">
              <Link
                activeClass="active"
                className="introduction__item"
                to="introduction"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ></Link>
              <Link
                className="introduction__item"
                activeClass="active"
                to="advantages"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ></Link>
              <Link
                className="introduction__item"
                activeClass="active"
                to="payment"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ></Link>
              <Link
                className="introduction__item"
                activeClass="active"
                to="providers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ></Link>
              <Link
                className="introduction__item"
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ></Link>
            </ul>
          </div>
        </section>
        <section id="advantages" className="advantages">
          <div className="advantages__container ">
            <div className="advantages__header">
              <div className="advantages__decor decor-top"></div>
              <ul className="advantages__list">
                <li className="advantages__item item-advantages">
                  <div className="item-advantages__mark _icon-check"></div>
                  <span>No fee</span> for installation
                </li>
                <li className="advantages__item item-advantages">
                  <div className="item-advantages__mark _icon-check"></div>
                  <span>No fee</span> for additional connection of SRM systems
                </li>
                <li className="advantages__item item-advantages">
                  <div className="item-advantages__mark _icon-check"></div>
                  <span>No fee</span> or customizing the payment system
                </li>
                <li className="advantages__item item-advantages">
                  <div className="item-advantages__mark _icon-check"></div>
                  <p>
                    <span>No fee</span> for the integration of payment
                    providers. (Integration speed is up to 10 payments per
                    month. When all the necessary keys are supplied by the
                    provider)
                  </p>
                </li>
              </ul>
            </div>
            <div className="advantages__body">
              <div className="advantages__content content-advantages">
                <div className="content-advantages__content">
                  <div className="advantages__decor decor-middle"></div>
                  <div className="content-advantages__title">
                    There is a commission{" "}
                    <span> for the number of successful transactions </span> per
                    month. To find out the cost, contact the form
                  </div>
                  <div className="content-advantages__apply button">Apply</div>
                </div>
                <div className="content-advantages__decorations">
                  <div className="content-advantages__image-ibg">
                    <img
                      src={require("../../img/desctop/04.png")}
                      alt="Decoration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="payment" className="payment">
          <div className="payment__decor"></div>
          <div className="payment__container">
            <div className="payment__header header-payment">
              <div className="header-payment__title">
                {" "}
                CUSTOMIZE YOUR <span>PAYMENT FORM</span> RIGHT NOW{" "}
              </div>
              <ul className="header-payment__list">
                <li
                  onClick={(e) => handleClickMenu("item1", e)}
                  className={`header-payment__item ${
                    activeItem === "item1" ? "active" : ""
                  }`}
                >
                  <a href="#" className="header-payment__link">
                    Your form
                  </a>
                </li>
                <li
                  onClick={(e) => handleClickMenu("item2", e)}
                  className={`header-payment__item ${
                    activeItem === "item2" ? "active" : ""
                  }`}
                >
                  <a href="#" className="header-payment__link">
                    Ready-made forms
                  </a>
                </li>
              </ul>
            </div>
            <div className="payment__body">
              {activeItem === "item1" ? (
                <div className="payment__wrapper">
                  {" "}
                  <div className="payment__options options">
                    <div
                      style={{
                        display: customizeFormOpened ? "block" : "none",
                        //   transition: "opacity 0.3s ease 0s",
                      }}
                      onClick={() =>
                        setCustomizeFormOpened(!customizeFormOpened)
                      }
                      className="options__customize _icon-hand"
                    >
                      {" "}
                      Customize{" "}
                    </div>
                    {isScreenSmalMobile ? (
                      <SlideDown
                        className={"my-dropdown-slidedown"}
                        closed={customizeFormOpened}
                      >
                        <CustomizationForm
                          customizeFormOpened={customizeFormOpened}
                          setCustomizeFormOpened={setCustomizeFormOpened}
                          languages={languages}
                          theme={theme}
                          outline={outline}
                          closed={closed}
                          unlockButtonColor={unlockButtonColor}
                          lockButtonColor={lockButtonColor}
                          payButtonColor={payButtonColor}
                          orderTextColor={orderTextColor}
                          textColor={textColor}
                          setTheme={setTheme}
                          setOutline={setOutline}
                          setUnlockButtonColor={setUnlockButtonColor}
                          setLockButtonColor={setLockButtonColor}
                          setPayButtonColor={setPayButtonColor}
                          setOrderTextColor={setOrderTextColor}
                          setTextColor={setTextColor}
                          setLanguages={setLanguages}
                          onSubmit={onSubmit}
                          setClosed={setClosed}
                          changeCheckbox={changeCheckbox}
                          setIsDark={setIsDark}
                          setSelectedImage={setSelectedImage}
                          selectedImage={selectedImage}
                        />
                      </SlideDown>
                    ) : (
                      <CustomizationForm
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        customizeFormOpened={customizeFormOpened}
                        setCustomizeFormOpened={setCustomizeFormOpened}
                        languages={languages}
                        theme={theme}
                        outline={outline}
                        closed={closed}
                        unlockButtonColor={unlockButtonColor}
                        lockButtonColor={lockButtonColor}
                        payButtonColor={payButtonColor}
                        orderTextColor={orderTextColor}
                        textColor={textColor}
                        setTheme={setTheme}
                        setOutline={setOutline}
                        setUnlockButtonColor={setUnlockButtonColor}
                        setLockButtonColor={setLockButtonColor}
                        setPayButtonColor={setPayButtonColor}
                        setOrderTextColor={setOrderTextColor}
                        setTextColor={setTextColor}
                        setLanguages={setLanguages}
                        onSubmit={onSubmit}
                        setClosed={setClosed}
                        changeCheckbox={changeCheckbox}
                        setIsDark={setIsDark}
                      />
                    )}
                  </div>
                  <div
                    data-mode-dark={isDark}
                    className="payment__form  form-payment"
                  >
                    {}
                    <div className="form-payment__card card-payment">
                      <div className="card-payment__header header-card">
                        <div className="header-card__top">
                          <div className="header-card__lang">{languages}</div>
                          <div className="header-card__select header-card__select-mobile">
                            <Select
                              components={{ DropdownIndicator }}
                              //   defaultInputValue="Select country"
                              className="react-select-container"
                              classNamePrefix="react-select"
                              options={options}
                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  border: "1px solid #FBBD00",
                                  borderRadius: "10px",
                                  minHeight: "23px",
                                  gap: "83px",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),

                                input: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),

                                singleValue: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),
                                option: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: state.isDisabled
                                    ? "#FBBD00"
                                    : state.isSelected
                                    ? "#fff"
                                    : state.isFocused
                                    ? "#fff"
                                    : "#FBBD00",
                                  minHeight: "23px",
                                  transition: "all 0.3s ease 0s",
                                  backgroundColor: state.isDisabled
                                    ? undefined
                                    : state.isSelected
                                    ? "#FBBD00"
                                    : state.isFocused
                                    ? "#FBBD00"
                                    : undefined,
                                  ":active": {
                                    backgroundColor: state.isSelected
                                      ? "#FBBD00"
                                      : "#fff",
                                  },
                                  ":hover": {
                                    backgroundColor: "#FBBD00",
                                    color: "#fff",
                                  },
                                }),
                              }}
                            />
                          </div>
                          <div className="checkbox header-card__checkbox ">
                            <input
                              id="c_6"
                              data-error="Ошибка"
                              className={`checkbox__input ${
                                isDark ? "checked" : ""
                              }`}
                              type="checkbox"
                              name="form[]"
                              onChange={(e) => {
                                changeCheckbox(e);
                                setIsDark(!isDark);
                                if (!isDark) {
                                  setTextColor("#ffffff");
                                } else {
                                  setTextColor("#000000");
                                }
                              }}
                              defaultChecked={isDark}
                              value={isDark}
                            />
                            <label htmlFor="c_6" className="checkbox__label">
                              <span className="checkbox__text">
                                {isDark ? "Dark" : "Light"}
                              </span>
                            </label>
                          </div>
                        </div>
                        <ul className="header-card__navigation header-card__navigation-mobile navigation-header">
                          <li
                            onClick={(e) => handleClickActiveForm("item1", e)}
                            className={`navigation-header__item ${
                              activeForm === "item1" ? "active" : ""
                            }`}
                          >
                            <a href="#" className="navigation-header__link">
                              Card
                            </a>
                          </li>
                          <li
                            onClick={(e) => handleClickActiveForm("item2", e)}
                            className={`navigation-header__item ${
                              activeForm === "item2" ? "active" : ""
                            }`}
                          >
                            <a href="#" className="navigation-header__link">
                              Other payment methods
                            </a>
                          </li>
                        </ul>
                        <div className="header-card__middle header-card__middle-mobile">
                          <div className="header-card__logo ">
                            <img
                              style={{
                                width: "39px",
                                height: "19px",
                              }}
                              src={!!selectedImage ? selectedImage : vectorLogo}
                              alt=""
                            />
                            <span>BeezyyCashier</span>{" "}
                          </div>
                          <div
                            style={{ color: orderTextColor }}
                            className="header-card__bottom"
                          >
                            {" "}
                            Order <span>1234567890</span>{" "}
                          </div>
                          <div className="header-card__select">
                            <Select
                              components={{ DropdownIndicator }}
                              //   defaultInputValue="Select country"
                              className="react-select-container"
                              classNamePrefix="react-select"
                              options={options}
                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  border: "1px solid #FBBD00",
                                  borderRadius: "10px",
                                  minHeight: "23px",
                                  gap: "83px",
                                  flexWrap: "nowrap",
                                }),
                                placeholder: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),

                                input: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),

                                singleValue: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: "#FBBD00",
                                }),
                                option: (baseStyles, state) => ({
                                  ...baseStyles,
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  color: state.isDisabled
                                    ? "#FBBD00"
                                    : state.isSelected
                                    ? "#fff"
                                    : state.isFocused
                                    ? "#fff"
                                    : "#FBBD00",
                                  minHeight: "23px",
                                  transition: "all 0.3s ease 0s",
                                  backgroundColor: state.isDisabled
                                    ? undefined
                                    : state.isSelected
                                    ? "#FBBD00"
                                    : state.isFocused
                                    ? "#FBBD00"
                                    : undefined,
                                  ":active": {
                                    backgroundColor: state.isSelected
                                      ? "#FBBD00"
                                      : "#fff",
                                  },
                                  ":hover": {
                                    backgroundColor: "#FBBD00",
                                    color: "#fff",
                                  },
                                }),
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{ color: orderTextColor }}
                          className="header-card__bottom"
                        >
                          {" "}
                          Order <span>1234567890</span>{" "}
                        </div>
                      </div>
                      <div className="card-payment__wrapper">
                        {isScreenMmd ? (
                          activeForm === "item1" ? (
                            <>
                              {" "}
                              <div className="card-payment__body body-card">
                                <div
                                  style={{ color: textColor }}
                                  className="body-card__amount"
                                >
                                  Amount: <span>10 USD</span>
                                </div>
                                <PaymentForm
                                  cvv={cvv}
                                  expiryDate={expiryDate}
                                  cardHolder={cardHolder}
                                  cardNumber={cardNumber}
                                  setCVV={setCVV}
                                  setExpiryDate={setExpiryDate}
                                  setCardHolder={setCardHolder}
                                  setCardNumber={setCardNumber}
                                  unlockButtonColor={unlockButtonColor}
                                  outline={outline}
                                  lockButtonColor={lockButtonColor}
                                  payButtonColor={payButtonColor}
                                  orderTextColor={orderTextColor}
                                  textColor={textColor}
                                  isDark={isDark}
                                  setTextColor={setTextColor}
                                />
                              </div>
                              <div className="card-payment__footer footer-payment">
                                <ul className="footer-payment__list">
                                  <li className="footer-payment__item">
                                    <img
                                      src={require("../../img/desctop/visa.png")}
                                      alt=""
                                    />
                                  </li>
                                  <li className="footer-payment__item">
                                    <img
                                      src={require("../../img/desctop/mc.png")}
                                      alt=""
                                    />
                                  </li>
                                  <li className="footer-payment__item">
                                    <img
                                      src={require("../../img/desctop/dss.png")}
                                      alt=""
                                    />
                                  </li>
                                </ul>
                              </div>
                            </>
                          ) : (
                            <div class="form-payment__methods methods-payment form-payment__methods-mobile">
                              <ul class="methods-payment__list">
                                <li class="methods-payment__item">
                                  <h2 class="methods-payment__name">
                                    APPLE PAY
                                  </h2>
                                  <div class="methods-payment__buttons">
                                    <button
                                      type="submit"
                                      class="methods-payment__button _icon-apple"
                                    >
                                      <span>Apple Pay</span>
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button _icon-apple"
                                    >
                                      <span>Apple Pay 2</span>
                                    </button>
                                  </div>
                                </li>
                                <li class="methods-payment__item">
                                  <h2 class="methods-payment__name">CRYPTO</h2>
                                  <div class="methods-payment__buttons">
                                    <button
                                      type="submit"
                                      class="methods-payment__button _icon-btc"
                                    >
                                      <span>Crypto </span>
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button _icon-btc"
                                    >
                                      <span>Crypto 2 </span>
                                    </button>
                                  </div>
                                </li>
                                <li class="methods-payment__item">
                                  <h2 class="methods-payment__name">OTHER</h2>
                                  <div class="methods-payment__buttons">
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      <span>Google Pay</span>
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      <span>Easy Pay</span>
                                    </button>
                                  </div>
                                </li>
                                <li class="methods-payment__item">
                                  <h2 class="methods-payment__name">
                                    BANK TRANSFER
                                  </h2>
                                  <div class="methods-payment__buttons">
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                    <button
                                      type="submit"
                                      class="methods-payment__button"
                                    >
                                      OTHER
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          )
                        ) : (
                          <>
                            {" "}
                            <div className="card-payment__body body-card">
                              <div
                                style={{ color: textColor }}
                                className="body-card__amount"
                              >
                                Amount: <span>10 USD</span>
                              </div>
                              <PaymentForm
                                cvv={cvv}
                                expiryDate={expiryDate}
                                cardHolder={cardHolder}
                                cardNumber={cardNumber}
                                setCVV={setCVV}
                                setExpiryDate={setExpiryDate}
                                setCardHolder={setCardHolder}
                                setCardNumber={setCardNumber}
                                unlockButtonColor={unlockButtonColor}
                                outline={outline}
                                lockButtonColor={lockButtonColor}
                                payButtonColor={payButtonColor}
                                orderTextColor={orderTextColor}
                                textColor={textColor}
                                isDark={isDark}
                                setTextColor={setTextColor}
                              />
                            </div>
                            <div className="card-payment__footer footer-payment">
                              <ul className="footer-payment__list">
                                <li className="footer-payment__item">
                                  <img
                                    src={require("../../img/desctop/visa.png")}
                                    alt=""
                                  />
                                </li>
                                <li className="footer-payment__item">
                                  <img
                                    src={require("../../img/desctop/mc.png")}
                                    alt=""
                                  />
                                </li>
                                <li className="footer-payment__item">
                                  <img
                                    src={require("../../img/desctop/dss.png")}
                                    alt=""
                                  />
                                </li>
                              </ul>
                            </div>
                          </>
                        )}

                        {/* динамически */}
                      </div>
                    </div>
                    <div className="form-payment__methods methods-payment">
                      <div className="methods-payment__title">
                        Other payment methods
                      </div>
                      <ul className="methods-payment__list">
                        <li className="methods-payment__item">
                          <h2 className="methods-payment__name">APPLE PAY</h2>
                          <div className="methods-payment__buttons">
                            <button
                              type="submit"
                              className="methods-payment__button _icon-apple"
                            >
                              <span>Apple Pay</span>
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button _icon-apple"
                            >
                              <span>Apple Pay 2</span>
                            </button>
                          </div>
                        </li>
                        <li className="methods-payment__item">
                          <h2 className="methods-payment__name">CRYPTO</h2>
                          <div className="methods-payment__buttons">
                            <button
                              type="submit"
                              className="methods-payment__button _icon-btc"
                            >
                              <span>Crypto (100+ Coins)</span>
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button _icon-btc"
                            >
                              <span>Crypto 2 (100+ Coins)</span>
                            </button>
                          </div>
                        </li>
                        <li className="methods-payment__item">
                          <h2 className="methods-payment__name">OTHER</h2>
                          <div className="methods-payment__buttons">
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              <span>Google Pay</span>
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              <span>Easy Pay</span>
                            </button>
                          </div>
                        </li>
                        <li className="methods-payment__item">
                          <h2 className="methods-payment__name">
                            BANK TRANSFER
                          </h2>
                          <div className="methods-payment__buttons">
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                            <button
                              type="submit"
                              className="methods-payment__button"
                            >
                              OTHER
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <p style={{ textAlign: "center", width: "100%" }}>
                  READY MADE FORM
                </p>
              )}
            </div>
          </div>
        </section>
        <Providers />
        <section id="features" className="features">
          <div className="features__container">
            <h2 className="features__title">
              {" "}
              <span>OUR FEATURES</span> FOR PAYMENTS{" "}
            </h2>
            <div className="features__body body-features">
              <div className="body-features__content">
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>ANALYTICS</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Provides robust analytics that allow users to track and
                        analyze their data in real-time. Users can gain insights
                        into various metrics, such as user behavior, engagement,
                        and retention.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>ROUTING</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Allows users to define complex routing rules for their
                        data. Users can configure the rules based on criteria
                        such as location, user type, or any custom parameter.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>CONVERSION</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Enables users to convert data from one format to
                        another. Users can configure the conversion rules and
                        execute the conversion process in real-time.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>DONATES MODULE</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Includes a donation module that enables users to accept
                        donations from their customers. Users can define
                        donation amounts and configure the donation process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="body-features__picture">
                  <div className="body-features__image-ibg">
                    <img src={require("../../img/desctop/06.png")} alt="" />
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>SUBSCRIPTIONS</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Provides a subscription management module that allows
                        users to manage their subscription plans. Users can
                        define pricing plans, billing cycles, and other related
                        parameters.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>CASCADING</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Enables users to create a hierarchy of data processing
                        steps. This helps to streamline data processing and
                        ensure data accuracy.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {}}
                  className={"body-features__card card-features"}
                >
                  <div className="card-features__item">
                    <svg
                      width="231"
                      height="206"
                      viewBox="0 0 231 206"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M172.723 0.206543H57.58L0.00878906 102.915L57.58 205.625H172.723L230.295 102.915L172.723 0.206543Z"
                        fill="white"
                      />
                      <path
                        d="M174.882 4.05816L173.443 1.49045L172.571 1.9794L172.137 1.20654H171.208V0.206543H168.178V1.20654H165.148V0.206543H162.118V1.20654H159.088V0.206543H156.058V1.20654H153.028V0.206543H149.998V1.20654H146.968V0.206543H143.937V1.20654H140.907V0.206543H137.877V1.20654H134.847V0.206543H131.817V1.20654H128.787V0.206543H125.757V1.20654H122.727V0.206543H119.697V1.20654H116.667V0.206543H113.637V1.20654H110.607V0.206543H107.576V1.20654H104.546V0.206543H101.516V1.20654H98.4862V0.206543H95.4561V1.20654H92.426V0.206543H89.3959V1.20654H86.3658V0.206543H83.3357V1.20654H80.3056V0.206543H77.2755V1.20654H74.2454V0.206543H71.2153V1.20654H68.1853V0.206543H65.1552V1.20654H62.1251V0.206543H59.095V1.20654H58.1659L57.7327 1.97936L56.8604 1.4904L55.4211 4.05813L56.2934 4.54708L54.8541 7.1148L53.9818 6.62585L52.5425 9.19357L53.4148 9.68252L51.9755 12.2502L51.1032 11.7613L49.664 14.329L50.5363 14.818L49.097 17.3857L48.2247 16.8967L46.7854 19.4645L47.6577 19.9534L46.2184 22.5211L45.3461 22.0322L43.9068 24.5999L44.7791 25.0889L43.3399 27.6566L42.4676 27.1676L41.0283 29.7353L41.9006 30.2243L40.4613 32.792L39.589 32.3031L38.1497 34.8708L39.022 35.3597L37.5827 37.9275L36.7104 37.4385L35.2712 40.0062L36.1435 40.4952L34.7042 43.0629L33.8319 42.5739L32.3926 45.1417L33.2649 45.6306L31.8256 48.1983L30.9533 47.7094L29.514 50.2771L30.3864 50.7661L28.9471 53.3338L28.0748 52.8448L26.6355 55.4125L27.5078 55.9015L26.0685 58.4692L25.1962 57.9803L23.7569 60.548L24.6292 61.0369L23.19 63.6047L22.3176 63.1157L20.8784 65.6834L21.7507 66.1724L20.3114 68.7401L19.4391 68.2511L17.9998 70.8189L18.8721 71.3078L17.4328 73.8755L16.5605 73.3866L15.1212 75.9543L15.9936 76.4433L14.5543 79.011L13.682 78.522L12.2427 81.0897L13.115 81.5787L11.6757 84.1464L10.8034 83.6575L9.36413 86.2252L10.2364 86.7141L8.79716 89.2819L7.92485 88.7929L6.48557 91.3606L7.35788 91.8496L5.9186 94.4173L5.04629 93.9283L3.60701 96.4961L4.47932 96.985L3.04004 99.5527L2.16773 99.0638L0.728452 101.632L1.60076 102.12L1.15517 102.915L1.60074 103.71L0.728429 104.199L2.16771 106.767L3.04002 106.278L4.4793 108.846L3.60699 109.335L5.04627 111.903L5.91858 111.414L7.35786 113.981L6.48555 114.47L7.92483 117.038L8.79714 116.549L10.2364 119.117L9.36411 119.606L10.8034 122.173L11.6757 121.685L13.115 124.252L12.2427 124.741L13.6819 127.309L14.5543 126.82L15.9935 129.388L15.1212 129.877L16.5605 132.444L17.4328 131.956L18.8721 134.523L17.9998 135.012L19.4391 137.58L20.3114 137.091L21.7507 139.659L20.8784 140.148L22.3176 142.715L23.1899 142.227L24.6292 144.794L23.7569 145.283L25.1962 147.851L26.0685 147.362L27.5078 149.93L26.6355 150.419L28.0748 152.986L28.9471 152.497L30.3863 155.065L29.514 155.554L30.9533 158.122L31.8256 157.633L33.2649 160.201L32.3926 160.69L33.8319 163.257L34.7042 162.768L36.1435 165.336L35.2712 165.825L36.7104 168.393L37.5828 167.904L39.022 170.472L38.1497 170.961L39.589 173.528L40.4613 173.039L41.9006 175.607L41.0283 176.096L42.4676 178.664L43.3399 178.175L44.7792 180.743L43.9068 181.232L45.3461 183.799L46.2184 183.31L47.6577 185.878L46.7854 186.367L48.2247 188.935L49.097 188.446L50.5363 191.014L49.664 191.503L51.1033 194.07L51.9756 193.581L53.4148 196.149L52.5425 196.638L53.9818 199.206L54.8541 198.717L56.2934 201.285L55.4211 201.774L56.8604 204.341L57.7327 203.852L58.1659 204.625H59.095V205.625H62.1251V204.625H65.1552V205.625H68.1853V204.625H71.2154V205.625H74.2455V204.625H77.2756V205.625H80.3056V204.625H83.3357V205.625H86.3658V204.625H89.3959V205.625H92.426V204.625H95.4561V205.625H98.4862V204.625H101.516V205.625H104.546V204.625H107.576V205.625H110.607V204.625H113.637V205.625H116.667V204.625H119.697V205.625H122.727V204.625H125.757V205.625H128.787V204.625H131.817V205.625H134.847V204.625H137.877V205.625H140.907V204.625H143.938V205.625H146.968V204.625H149.998V205.625H153.028V204.625H156.058V205.625H159.088V204.625H162.118V205.625H165.148V204.625H168.178V205.625H171.208V204.625H172.137L172.571 203.852L173.443 204.341L174.882 201.774L174.01 201.285L175.449 198.717L176.322 199.206L177.761 196.638L176.888 196.149L178.328 193.581L179.2 194.07L180.639 191.503L179.767 191.014L181.206 188.446L182.079 188.935L183.518 186.367L182.646 185.878L184.085 183.31L184.957 183.799L186.396 181.232L185.524 180.743L186.963 178.175L187.836 178.664L189.275 176.096L188.403 175.607L189.842 173.039L190.714 173.528L192.154 170.961L191.281 170.472L192.721 167.904L193.593 168.393L195.032 165.825L194.16 165.336L195.599 162.768L196.471 163.257L197.911 160.69L197.038 160.201L198.478 157.633L199.35 158.122L200.789 155.554L199.917 155.065L201.356 152.497L202.229 152.986L203.668 150.419L202.796 149.93L204.235 147.362L205.107 147.851L206.546 145.283L205.674 144.794L207.113 142.226L207.986 142.715L209.425 140.148L208.553 139.659L209.992 137.091L210.864 137.58L212.304 135.012L211.431 134.523L212.87 131.956L213.743 132.444L215.182 129.877L214.31 129.388L215.749 126.82L216.621 127.309L218.061 124.741L217.188 124.252L218.628 121.685L219.5 122.173L220.939 119.606L220.067 119.117L221.506 116.549L222.378 117.038L223.818 114.47L222.945 113.981L224.385 111.414L225.257 111.902L226.696 109.335L225.824 108.846L227.263 106.278L228.136 106.767L229.575 104.199L228.703 103.71L229.148 102.915L228.703 102.12L229.575 101.632L228.136 99.0638L227.263 99.5528L225.824 96.9851L226.696 96.4961L225.257 93.9284L224.385 94.4173L222.945 91.8496L223.818 91.3607L222.378 88.7929L221.506 89.2819L220.067 86.7142L220.939 86.2252L219.5 83.6575L218.628 84.1464L217.188 81.5787L218.061 81.0898L216.621 78.522L215.749 79.011L214.31 76.4433L215.182 75.9543L213.743 73.3866L212.87 73.8756L211.431 71.3078L212.304 70.8189L210.864 68.2512L209.992 68.7401L208.553 66.1724L209.425 65.6834L207.986 63.1157L207.113 63.6047L205.674 61.037L206.546 60.548L205.107 57.9803L204.235 58.4692L202.796 55.9015L203.668 55.4126L202.229 52.8448L201.356 53.3338L199.917 50.7661L200.789 50.2771L199.35 47.7094L198.478 48.1984L197.038 45.6306L197.911 45.1417L196.471 42.574L195.599 43.0629L194.16 40.4952L195.032 40.0062L193.593 37.4385L192.721 37.9275L191.281 35.3598L192.154 34.8708L190.714 32.3031L189.842 32.792L188.403 30.2243L189.275 29.7354L187.836 27.1676L186.963 27.6566L185.524 25.0889L186.396 24.5999L184.957 22.0322L184.085 22.5212L182.646 19.9534L183.518 19.4645L182.079 16.8968L181.206 17.3857L179.767 14.818L180.639 14.329L179.2 11.7613L178.328 12.2503L176.888 9.68256L177.761 9.1936L176.322 6.62588L175.449 7.11484L174.01 4.54712L174.882 4.05816Z"
                        stroke="#FBBD00"
                        strokeOpacity="0.4"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M9.16347 102.599L62.3094 10.541H168.602L221.748 102.599L168.602 194.658H62.3094L9.16347 102.599Z"
                        fill="white"
                        stroke="#FBBD00"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="card-features__title">
                      {" "}
                      <span>DASHBOARD WITH TRANSACTIONS AND EXPORT</span>{" "}
                    </div>
                    <div className="card-features__backside">
                      <p>
                        Offers a transaction dashboard that displays real-time
                        transaction data. Users can also export transaction data
                        in various formats for further analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Industries />
      </main>
      <Footer />
    </div>
  );
};
export default MainPage;
