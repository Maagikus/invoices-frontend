import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const SingleSelect = () => {
  const [isShowSingleSelect, setIsShowSingleSelect] = useState(false);
  const [selected, setSelected] = useState("nothing");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["qqqq", "wwwww", "eeeee"];
  const onSelected = (e) => {
    setSelected(e.target.textContent);
    setIsOpen(false);
  };
  const onDeleteAll = () => {
    setSelected("nothing");
  };
  return (
    <div className="filters__item">
      <div data-spollers className="spollers">
        <div className="spollers__item">
          <button
            type="button"
            data-spoller
            onClick={() => setIsShowSingleSelect(!isShowSingleSelect)}
            className={
              isShowSingleSelect
                ? "spollers__title _spoller-active"
                : "spollers__title"
            }
          >
            Одиночный селект
          </button>
          <CSSTransition
            in={isShowSingleSelect}
            classNames="my-node"
            timeout={400}
            unmountOnExit
          >
            <div className="spollers__body">
              <div className="filter__single">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="filter__array array-filter"
                >
                  <div
                    onClick={(e) => onDeleteAll(e)}
                    class="array-filter__clear"
                  >
                    <span className="array-filter__delete-all"></span>
                  </div>
                  <div className="array-filter__selectd">{selected}</div>
                </div>
                <CSSTransition
                  in={isOpen}
                  classNames="my-node"
                  timeout={400}
                  unmountOnExit
                >
                  <div className="filter__tools tools-filter">
                    {options.map((item, index) => {
                      return (
                        <div
                          onClick={(e) => onSelected(e)}
                          key={index}
                          className="tools-filter__item"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </CSSTransition>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
export default SingleSelect;
