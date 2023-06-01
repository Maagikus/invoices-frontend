import { useState, useEffect, useRef } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
const CustomizationForm = ({
  languages,
  theme,
  outline,
  closed,
  unlockButtonColor,
  lockButtonColor,
  payButtonColor,
  orderTextColor,
  textColor,
  setTheme,
  setOutline,
  setUnlockButtonColor,
  setLockButtonColor,
  setPayButtonColor,
  setOrderTextColor,
  setTextColor,
  setLanguages,
  onSubmit,
  setClosed,
  changeCheckbox,
  setIsDark,
  isDark,
}) => {
  const onChangeInput = (e, func) => {
    func(e.target.value);
  };
  const onOptionChange = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="options__form">
      <div className="options__decor _icon-hand"></div>
      <div className="options__close _icon-cross-main"></div>
      <div className="options__body">
        <div className="options__item languages">
          <div
            onClick={() => setClosed(!closed)}
            className="options__title active"
          >
            Languages
          </div>
          <SlideDown className={"my-dropdown-slidedown"} closed={closed}>
            <ul className="languages__body">
              <div className="checkbox languages__checkbox checked">
                <input
                  onChange={(e) => onOptionChange(e)}
                  id="EN"
                  value={"EN"}
                  className="checkbox__input"
                  type="radio"
                  name="language"
                  defaultChecked={languages === "EN"}
                />
                <label htmlFor="EN" className="checkbox__label">
                  <span className="checkbox__text">EN</span>
                </label>
              </div>
              <div className="checkbox languages__checkbox checked">
                <input
                  onChange={(e) => onOptionChange(e)}
                  id="FR"
                  value={"FR"}
                  className="checkbox__input"
                  type="radio"
                  name="language"
                  defaultChecked={languages === "FR"}
                />
                <label htmlFor="FR" className="checkbox__label">
                  <span className="checkbox__text">FR</span>
                </label>
              </div>
            </ul>
          </SlideDown>
        </div>
        <div className="options__item logo">
          <div className="options__title">Logo</div>
          <div className="logo__wrapp">
            <input
              id="logo_file"
              className="logo__file"
              type="file"
              accept=".png, .jpg, .jpeg"
            />
            <label htmlFor="logo_file" className="logo__button">
              Browse ...
            </label>
            <div className="logo__preview">
              {/* <img src={require("../../img" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="options__item">
          <div className="options__title">Switch to dark theme</div>
          <div className="checkbox options__checkbox checked">
            <input
              onChange={(e) => {
                changeCheckbox(e);
                setTheme(!theme);
                setIsDark(!theme);
              }}
              defaultChecked={theme}
              value={theme}
              id="theme"
              data-error="Ошибка"
              className="checkbox__input"
              type="checkbox"
              name="form[]"
            />
            <label htmlFor="theme" className="checkbox__label">
              <span className="checkbox__text">{theme ? "Yes" : "No"}</span>
            </label>
          </div>
        </div>
        <div className="options__item">
          <div className="options__title">Outline of the input area</div>
          <div className="checkbox options__checkbox checked">
            <input
              onChange={(e) => {
                changeCheckbox(e);
                setOutline(!outline);
              }}
              defaultChecked={outline}
              value={"Outline"}
              id="Outline"
              data-error="Ошибка"
              className="checkbox__input"
              type="checkbox"
              name="form[]"
            />
            <label htmlFor="Outline" className="checkbox__label">
              <span className="checkbox__text">{outline ? "Yes" : "No"}</span>
            </label>
          </div>
        </div>
        <div className="options__item">
          <div className="options__title">Unlock button color</div>
          <input
            value={unlockButtonColor}
            onChange={(e) => onChangeInput(e, setUnlockButtonColor)}
            autoComplete="off"
            type="color"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="options__input options__input-collor input"
          />
        </div>
        <div className="options__item">
          <div className="options__title">Lock button color</div>
          <input
            onChange={(e) => onChangeInput(e, setLockButtonColor)}
            value={lockButtonColor}
            autoComplete="off"
            type="color"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="options__input input"
          />
        </div>
        <div className="options__item">
          <div className="options__title">Order text color</div>
          <input
            onChange={(e) => onChangeInput(e, setOrderTextColor)}
            value={orderTextColor}
            autoComplete="off"
            type="color"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="options__input input"
          />
        </div>
        <div className="options__item">
          <div className="options__title">Text color</div>
          <input
            onChange={(e) => onChangeInput(e, setTextColor)}
            value={textColor}
            autoComplete="off"
            type="color"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="options__input input"
          />
        </div>
        <div className="options__item">
          <div className="options__title">Pay button color</div>
          <input
            onChange={(e) => onChangeInput(e, setPayButtonColor)}
            value={payButtonColor}
            autoComplete="off"
            type="color"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="options__input input"
          />
        </div>
      </div>
      <button type="submit" className="options__save">
        Save
      </button>
    </form>
  );
};
export default CustomizationForm;
