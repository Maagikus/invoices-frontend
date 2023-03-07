import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const MultiSelect = () => {
  const [isShowMultiSelect, setIsShowMultiSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArr, setSelectedArr] = useState([]);
  const options = ["qqqq", "wwwww", "eeeee", "Select All"];
  const onSelect = (e) => {
    if (e.target.textContent === "Select All") {
      const filteredArr = options.filter(
        (item) => item !== e.target.textContent
      );
      setSelectedArr(Array.from(new Set([...filteredArr])));
    } else {
      setSelectedArr(
        Array.from(new Set([...selectedArr, e.target.textContent]))
      );
    }
  };
  const onDeleteAll = (e) => {
    e.stopPropagation();
    setSelectedArr([]);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };
  const onDelete = (e) => {
    e.stopPropagation();
    setSelectedArr(
      selectedArr.filter((item) => item !== e.target.parentElement.textContent)
    );
  };
  return (
    <div className="filters__item">
      <div data-spollers className="spollers">
        <div className="spollers__item">
          <button
            type="button"
            data-spoller
            onClick={() => setIsShowMultiSelect(!isShowMultiSelect)}
            className={
              isShowMultiSelect
                ? "spollers__title _spoller-active"
                : "spollers__title"
            }
          >
            мультиселект
          </button>
          <CSSTransition
            in={isShowMultiSelect}
            classNames="my-node"
            timeout={400}
            unmountOnExit
          >
            <div className="spollers__body">
              <div className="filter__multiple">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="filter__array array-filter"
                >
                  <div
                    onClick={(e) => onDeleteAll(e)}
                    className="array-filter__clear"
                  >
                    <span className="array-filter__delete-all"></span>
                  </div>

                  {selectedArr.length > 0 ? (
                    selectedArr.map((item, index) => {
                      return (
                        <div key={index} className="array-filter__selectd">
                          {item}
                          <span
                            onClick={(e) => onDelete(e)}
                            className="array-filter__delete"
                          ></span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="array-filter__selectd">Select filter</div>
                  )}
                </div>

                <CSSTransition
                  in={isOpen}
                  classNames="my-node"
                  timeout={400}
                  unmountOnExit
                >
                  <div
                    onMouseLeave={onMouseLeave}
                    className="filter__tools tools-filter"
                  >
                    {options.map((item, index) => {
                      return (
                        <>
                          <div
                            onClick={(e) => onSelect(e)}
                            onTouchEnd={(e) => onSelect(e)}
                            key={index}
                            className={
                              selectedArr.includes(item)
                                ? "tools-filter__item active"
                                : "tools-filter__item "
                            }
                          >
                            {item}
                            <span className="tools-filter__cicle"></span>
                          </div>
                        </>
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
export default MultiSelect;
