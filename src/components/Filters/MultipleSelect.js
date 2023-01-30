import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MultiSelect = () => {
  const [isShowMultiSelect, setIsShowMultiSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArr, setSelectedArr] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const options = ["qqqq", "wwwww", "eeeee"];
  const onSelect = (e) => {
    setSelectedElement(e.target.textContent);
    setSelectedArr([...selectedArr, e.target.textContent]);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };
  const onDelete = (e) => {
    e.stopPropagation();
    // console.log(e.target.parentElement.textContent);

    setSelectedArr(
      selectedArr.filter((item) => item != e.target.parentElement.textContent)
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