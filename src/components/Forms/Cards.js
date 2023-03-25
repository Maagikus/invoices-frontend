import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const CreditCards = () => {
  const [status, setStatus] = useState(false);
  const [isShowCards, setIsShowCards] = useState(false);

  const changeCheckbox = (e) => {
    e.preventDefault();
    setStatus(!status);
  };
  return (
    <div className="cards-payment__item item-cards">
      <h2
        onClick={() => setIsShowCards(!isShowCards)}
        className={
          isShowCards ? "item-cards__title active" : "item-cards__title "
        }
      >
        CREDIT CARDS
      </h2>
      <CSSTransition
        in={isShowCards}
        classNames="my-node"
        timeout={400}
        unmountOnExit
      >
        <div className="item-cards__content">
          <div className="item-cards__card card-credit">
            <div className="card-credit__name">Cards via connectum</div>
            <div className="card-credit__options options">
              <div className="options__item">
                <div className="options__name">Status</div>
                <div
                  onClick={(e) => {
                    changeCheckbox(e);
                  }}
                  className={
                    status
                      ? "checkbox options__checkbox checked"
                      : "checkbox options__checkbox"
                  }
                >
                  <input
                    id="c_1"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                    defaultChecked={status}
                  />
                  <label for="c_1" className="checkbox__label">
                    <span className="checkbox__text">Active</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Verification</div>
                <div className="checkbox options__checkbox">
                  <input
                    id="c_2"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_2" className="checkbox__label">
                    <span className="checkbox__text">Disabled</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Is iframe</div>
                <div className="checkbox options__checkbox checked">
                  <input
                    id="c_3"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_3" className="checkbox__label">
                    <span className="checkbox__text">Yes</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Type</div>
                <div className="checkbox options__checkbox">
                  <input
                    id="c_4"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_4" className="checkbox__label">
                    <span className="checkbox__text">Light</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Is auto redirect</div>
                <div className="checkbox options__checkbox">
                  <input
                    id="c_5"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_5" className="checkbox__label">
                    <span className="checkbox__text">Interact</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="card-credit__inputs inpust">
              <div className="inpust__item">
                <div className="inpust__name">Template</div>
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=""
                  className="input"
                />
              </div>
              <div className="inpust__item">
                <div className="inpust__name">Landing url</div>
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=""
                  className="input"
                />
              </div>
            </div>
            <div className="card-credit__save">Save</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
export const CryptoCards = () => {
  const [status, setStatus] = useState(false);
  const [isShowCards, setIsShowCards] = useState(false);

  const changeCheckbox = (e) => {
    e.preventDefault();
    setStatus(!status);
  };
  return (
    <div className="cards-payment__item item-cards">
      <h2
        onClick={() => setIsShowCards(!isShowCards)}
        className={
          isShowCards
            ? "item-cards__title item-cards__title-yellow active"
            : "item-cards__title item-cards__title-yellow"
        }
      >
        CRYPTO CURRENCY
      </h2>
      <CSSTransition
        in={isShowCards}
        classNames="my-node"
        timeout={400}
        unmountOnExit
      >
        <div className="item-cards__content">
          <div className="item-cards__card card-credit">
            <div className="card-credit__name">Cards via connectum</div>
            <div className="card-credit__options options">
              <div className="options__item">
                <div className="options__name">Status</div>
                <div
                  onClick={(e) => {
                    changeCheckbox(e);
                  }}
                  className={
                    status
                      ? "checkbox options__checkbox options__checkbox-yellow checked"
                      : "checkbox options__checkbox options__checkbox-yellow "
                  }
                >
                  <input
                    id="c_6"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                    defaultChecked={status}
                  />
                  <label for="c_6" className="checkbox__label">
                    <span className="checkbox__text">Active</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Verification</div>
                <div className="checkbox options__checkbox options__checkbox-yellow">
                  <input
                    id="c_7"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_7" className="checkbox__label">
                    <span className="checkbox__text">Disabled</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Is iframe</div>
                <div className="checkbox options__checkbox options__checkbox-yellow checked">
                  <input
                    id="c_8"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_8" className="checkbox__label">
                    <span className="checkbox__text">Yes</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Type</div>
                <div className="checkbox options__checkbox options__checkbox-yellow">
                  <input
                    id="c_9"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_9" className="checkbox__label">
                    <span className="checkbox__text">Light</span>
                  </label>
                </div>
              </div>
              <div className="options__item">
                <div className="options__name">Is auto redirect</div>
                <div className="checkbox options__checkbox options__checkbox-yellow">
                  <input
                    id="c_10"
                    data-error="Ошибка"
                    className="checkbox__input"
                    type="checkbox"
                    value="1"
                    name="form[]"
                  />
                  <label for="c_10" className="checkbox__label">
                    <span className="checkbox__text">Interact</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="card-credit__inputs inpust">
              <div className="inpust__item">
                <div className="inpust__name">Template</div>
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=""
                  className="input"
                />
              </div>
              <div className="inpust__item">
                <div className="inpust__name">Landing url</div>
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=""
                  className="input"
                />
              </div>
            </div>
            <div className="card-credit__save card-credit__save-yellow">
              Save
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
