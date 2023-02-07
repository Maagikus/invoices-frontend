import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
const Filter = () => {
  const [isShowInput, setIsShowInput] = useState(false);

  return (
    <form action="#" className="filters__form">
      <div className="filters__item">
        <div data-spollers className="spollers">
          <div className="spollers__item">
            <button
              type="button"
              data-spoller
              onClick={() => setIsShowInput(!isShowInput)}
              className={
                isShowInput
                  ? "spollers__title _spoller-active"
                  : "spollers__title"
              }
            >
              Инпут для ввода
            </button>
            <CSSTransition
              in={isShowInput}
              classNames="my-node"
              timeout={400}
              unmountOnExit
            >
              <div className="spollers__body">
                <input
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=""
                  className="filters__input input"
                />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      <SingleSelect />
      <MultipleSelect />
    </form>
  );
};
export default Filter;
