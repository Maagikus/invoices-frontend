import { useState } from "react";
import img from "./../../img/UserImage.png";

const Header = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const onMenuOpen = () => {
    setIsmenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="header__container">
        <button
          onClick={onMenuOpen}
          type="button"
          className={
            isMenuOpen
              ? "invoices__icon icon-menu menu-open"
              : "invoices__icon icon-menu"
          }
        >
          <span></span>
        </button>
      </div>
      <div className="header__logout">Log out</div>
      <div
        className={isMenuOpen ? "main__menu menu active" : "main__menu menu"}
      >
        <div className="menu__header header-menu">
          <a href="#" className="header-menu__logo _icon-logo">
            <span>BeezyyCashier</span>
          </a>
          <div className="header-menu__user">
            <div className="header-menu__photo">
              <img src={img} alt="UserPhoto" />
            </div>
            <div className="header-menu__email">username@beezyycashier.com</div>
          </div>
        </div>
        <nav className="menu__body">
          <div className="checkbox menu__checkbox">
            <input
              id="c_1"
              data-error="Ошибка"
              className="checkbox__input"
              type="checkbox"
              value="1"
              name="form[]"
            />
            <label htmlFor="c_1" className="checkbox__label">
              <span className="checkbox__text">Light</span>
            </label>
          </div>
          <div className="menu__search _icon-search">
            <input
              autoComplete="off"
              type="text"
              name="form[]"
              data-error="Ошибка"
              placeholder="Search"
              className="menu__input input"
            />
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <div className="menu__icon _icon-home"></div>
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__item">
              <div className="menu__icon _icon-analitics"></div>
              <a href="#" className="menu__link active">
                Analitics
              </a>
            </li>
            <li className="menu__item item-menu">
              <h2 className="item-menu__title">Payments</h2>
              <ul className="item-menu__submenu">
                <li className="item-menu__item">
                  <div className="menu__icon _icon-invoice"></div>
                  <a href="#" className="item-menu__link">
                    Invoices
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-transactions"></div>
                  <a href="#" className="item-menu__link">
                    Transactions
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon menu__icon-bg _icon-Group-16"></div>
                  <a href="#" className="item-menu__link">
                    Refund
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item item-menu">
              <h2 className="item-menu__title">Users</h2>
              <ul className="item-menu__submenu">
                <li className="item-menu__item">
                  <div className="menu__icon _icon-C"></div>
                  <a href="#" className="item-menu__link">
                    Customers
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-M"></div>
                  <a href="#" className="item-menu__link">
                    Merchants
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-S"></div>
                  <a href="#" className="item-menu__link">
                    Stuff
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item item-menu">
              <h2 className="item-menu__title">Project</h2>
              <ul className="item-menu__submenu">
                <li className="item-menu__item">
                  <div className="menu__icon _icon-project"></div>
                  <a href="#" className="item-menu__link">
                    Projects
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-cascade"></div>
                  <a href="#" className="item-menu__link">
                    Cascade
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon menu__icon-line"></div>
                  <a href="#" className="item-menu__link">
                    Limits
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-route"></div>
                  <a href="#" className="item-menu__link">
                    Route
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <div className="menu__icon _icon-reports"></div>
              <a href="#" className="menu__link">
                Reports
              </a>
            </li>
            <li className="menu__item">
              <div className="menu__icon menu__icon-bg _icon-integrations"></div>
              <a href="#" className="menu__link">
                New integrations
              </a>
            </li>
            <li className="menu__item">
              <div className="menu__icon _icon-accounts"></div>
              <a href="#" className="menu__link">
                Accounts/Organizations
              </a>
            </li>
            <li className="menu__item">
              <div className="menu__icon menu__icon-bg _icon-withdrawals"></div>
              <a href="#" className="menu__link">
                Withdrawals
              </a>
            </li>
            <li className="menu__item">
              <div className="menu__icon _icon-ticets"></div>
              <a href="#" className="menu__link">
                Tickets
              </a>
            </li>
            <li className="menu__item item-menu">
              <h2 className="item-menu__title">System</h2>
              <ul className="item-menu__submenu">
                <li className="item-menu__item">
                  <div className="menu__icon _icon-connectors"></div>
                  <a href="#" className="item-menu__link">
                    Connectors
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-confic"></div>
                  <a href="#" className="item-menu__link">
                    Connector config
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-access"></div>
                  <a href="#" className="item-menu__link">
                    Access instance
                  </a>
                </li>
                <li className="item-menu__item">
                  <div className="menu__icon _icon-presets"></div>
                  <a href="#" className="item-menu__link">
                    Presets
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
