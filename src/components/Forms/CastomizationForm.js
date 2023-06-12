import { useState, useEffect, useRef } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { useResize } from "../../hooks/useResize.hook";

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
  customizeFormOpened,
  setCustomizeFormOpened,
  selectedImage,
  setSelectedImage,
}) => {
  const langList = ["EN", "UA", "FR"];
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Проверка размера файла
      const fileSize = file.size / 1024; // в килобайтах
      const maxSize = 1024; // Максимальный допустимый размер в килобайтах

      if (fileSize > maxSize) {
        // Обработка ошибки при превышении максимального размера
        alert("Изображение превышает допустимый размер");
        return;
      }

      // Преобразование файла в base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // Сохранение строки с base64 в состоянии компонента или передача в другой компонент
        setSelectedImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const onChangeInput = (e, func) => {
    func(e.target.value);
  };
  const onOptionChange = (e) => {
    setLanguages(e.target.value);
  };
  const { isScreenSmalMobile, isScreenSm } = useResize();

  return (
    <form onSubmit={(e) => onSubmit(e)} className="options__form">
      <div className="options__decor _icon-hand"></div>
      <div
        onClick={() => setCustomizeFormOpened(!customizeFormOpened)}
        className="options__close _icon-cross-main"
        style={{ display: isScreenSmalMobile ? "block" : "none" }}
      ></div>
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
              {langList.map((item, index) => {
                return (
                  <li key={index} className="checkbox languages__checkbox ">
                    <input
                      onClick={(e) => onOptionChange(e)}
                      onChange={(e) => {
                        onOptionChange(e);
                      }}
                      id={item}
                      value={item}
                      className={`checkbox__input ${
                        languages === item ? "checked" : ""
                      }`}
                      type="radio"
                      name="language"
                      defaultChecked={languages === item}
                    />
                    <label htmlFor={item} className="checkbox__label">
                      <span className="checkbox__text">{item}</span>
                    </label>
                  </li>
                );
              })}
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
              accept=".png, .jpg, .jpeg, .svg"
              onChange={handleImageChange}
            />
            <label htmlFor="logo_file" className="logo__button">
              Browse ...
            </label>
            <div className="logo__preview">
              {/* <img src={selectedImage} alt="" /> */}
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
              className={`checkbox__input ${theme ? "checked" : ""}`}
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
              className={`checkbox__input ${outline ? "checked" : ""}`}
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
