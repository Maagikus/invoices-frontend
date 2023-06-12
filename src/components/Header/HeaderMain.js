import { useEffect, useState } from "react";

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguagesListOpen, setIsLanguagesListOpen] = useState(false);
  const [defaulteLanguage, setDefaulteLanguage] = useState("EN");
  const laguages = ["EN", "UA", "FR"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      const scrollThreshold = 100;

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Обновляем класс элемента <html> при открытии/закрытии меню
    if (isMenuOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isMenuOpen]);
  const selectLanguage = (e) => {
    setDefaulteLanguage(e.target.textContent);
    setIsLanguagesListOpen(false);
  };
  return (
    <header className={`header ${isScrolled ? "scroll" : ""}`}>
      <div className="header__container">
        <a href="#" className="header__logo _icon-logo">
          <span>BeezyyCashier</span>
        </a>
        <div className="menu__login menu__login-hidden">
          <span className="prev-decor"></span>
          <a href="#">Log in</a>
          <span className="next-decor"></span>
        </div>
        <div
          className={
            isMenuOpen ? "header__menu menu  menu-open" : "header__menu menu"
          }
        >
          <div className="menu__wrapper">
            <nav className="menu__body">
              <ul className="menu__list list-left">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    About us
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Services
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Carreers
                  </a>
                </li>
              </ul>
              <div className="menu__login">
                <span className="prev-decor"></span>
                <a href="#">Log in</a>
                <span className="next-decor"></span>
              </div>
              <ul className="menu__list list-right">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Blog
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header__apply button header__apply-mobile">
                Apply
              </div>
              <div className="header__social social">
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
            </nav>
            <div
              onClick={() => setIsLanguagesListOpen(!isLanguagesListOpen)}
              className={
                isLanguagesListOpen
                  ? "header__lang lang-select opened"
                  : "header__lang lang-select "
              }
            >
              {" "}
              <span>{defaulteLanguage}</span>
              {/* <Select options={options} /> */}
              <ul className="lang-select__body">
                {laguages.map((item, index) => {
                  return (
                    <li
                      onClick={(e) => selectLanguage(e)}
                      key={index}
                      className="lang-select__item"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="header__apply button">Apply</div>
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              type="button"
              className="menu__icon icon-menu"
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderMain;
