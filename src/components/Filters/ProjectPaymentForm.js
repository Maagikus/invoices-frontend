import { useState } from "react";

const ProjectPaymentForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  const changeCheckbox = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="payment__form form-payment"
    >
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Title
        </label>
        <input
          autocomplete="off"
          type="text"
          name="title"
          data-error="Ошибка"
          placeholder="Test project"
          className="form-payment__input input"
        />
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Url
        </label>
        <input
          autocomplete="off"
          type="text"
          name="title"
          data-error="Ошибка"
          placeholder="www.project.com"
          className="form-payment__input input"
        />
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Mid
        </label>
        <input
          autocomplete="off"
          type="text"
          name="title"
          data-error="Ошибка"
          placeholder="project"
          className="form-payment__input input"
        />
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Account
        </label>
        <input
          autocomplete="off"
          type="text"
          name="title"
          data-error="Ошибка"
          placeholder="project"
          className="form-payment__input input"
        />
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Status
        </label>
        <input
          autocomplete="off"
          type="text"
          name="title"
          data-error="Ошибка"
          placeholder="rejected"
          className="form-payment__input input"
        />
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Paymet key
        </label>
        <div className="form-payment__wrap">
          <input
            autocomplete="off"
            type="text"
            name="title"
            data-error="Ошибка"
            placeholder="rejected"
            className="form-payment__input form-payment__input-grey input"
          />
        </div>
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Withdrawal key
        </label>
        <div className="form-payment__wrap">
          <input
            autocomplete="off"
            type="text"
            name="title"
            data-error="Ошибка"
            placeholder="rejected"
            className="form-payment__input form-payment__input-grey input"
          />
        </div>
      </div>
      <div className="form-payment__item">
        <label for="title" className="form-payment__lable">
          Sandbox
        </label>

        <div
          onClick={(e) => {
            changeCheckbox(e);
          }}
          className={
            isChecked
              ? "checkbox form-payment__checkbox checked"
              : "checkbox form-payment__checkbox"
          }
        >
          <input
            id="c_1"
            data-error="Ошибка"
            className="checkbox__input"
            type="checkbox"
            name="form[]"
            defaultChecked={isChecked}
          />

          <label for="c_1" className="checkbox__label">
            <span className="checkbox__text">Light</span>
          </label>
        </div>
      </div>
    </form>
  );
};
export default ProjectPaymentForm;
