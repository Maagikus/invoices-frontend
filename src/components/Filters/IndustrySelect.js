import { useState } from "react";
import { SlideDown } from "react-slidedown";

const IndustrySelect = ({ state, setState, industryList }) => {
  const [closed, setClosed] = useState(true);

  const onOptionChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="filters-providersPage__item provider-industry">
      <div onClick={() => setClosed(!closed)} class="provider-industry__title">
        Industry
      </div>
      <SlideDown className={"my-dropdown-slidedown"} closed={closed}>
        <ul className="provider-industry__body">
          {industryList.map((item, index) => {
            return (
              <li key={index} className="checkbox provider-industry__checkbox ">
                <input
                  onClick={(e) => onOptionChange(e)}
                  onChange={(e) => {
                    onOptionChange(e);
                  }}
                  id={item}
                  value={item}
                  className={`checkbox__input ${
                    state === item ? "checked" : ""
                  }`}
                  type="radio"
                  name="language"
                  defaultChecked={state === item}
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
  );
};
export default IndustrySelect;
