import { useState, useRef, useEffect } from "react";

const PaymentForm = ({
  cvv,
  expiryDate,
  cardHolder,
  cardNumber,
  setCVV,
  setExpiryDate,
  setCardHolder,
  setCardNumber,
  unlockButtonColor,
  outline,
  lockButtonColor,
  payButtonColor,
  orderTextColor,
  textColor,
  isDark,
  setTextColor,
}) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const checkForm = () => {
    if (
      isCardHolderValid() &&
      isExpDateValid() &&
      isCvvValid() &&
      isCardNumberValid()
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && cardNumber[index] === "") {
      // Move focus to the previous input field
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const isCardNumberValid = () => {
    const joinedCardNumber = cardNumber.join("");
    // Remove any non-digit characters
    const cardNumberDigitsOnly = joinedCardNumber.replace(/\D/g, "");

    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumberDigitsOnly.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumberDigitsOnly.charAt(i));

      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
  };

  const isCardHolderValid = () => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(cardHolder) && cardHolder.length >= 2;
  };
  const isExpDateValid = () => {
    const regex = /^(0[1-9]|1[0-2])\/2[0-9]$/;
    return regex.test(expiryDate);
  };
  const isCvvValid = () => {
    const regex = /^\d{0,3}$/;
    return regex.test(cvv) && cvv.length === 3;
  };
  const handleChangeHolder = (event) => {
    const inputValue = event.target.value;
    setCardHolder(inputValue);
  };
  const handleChangeСvv = (e) => {
    const inputValue = e.target.value;
    setCVV(inputValue);
  };
  const handleChangeExpDate = (e) => {
    const value = e.target.value;

    // Remove any non-digit characters from the input value
    const digitsOnly = value.replace(/\D/g, "");

    // Format the input value as "mm/yy"
    let formattedValue = digitsOnly;
    if (digitsOnly.length > 2) {
      formattedValue = digitsOnly.slice(0, 2) + "/" + digitsOnly.slice(2, 4);
    }

    setExpiryDate(formattedValue);
    // Validate the expiry date
    //  const regex = /^(0[1-9]|1[0-2])\/2[0-9]$/; // Format: "mm/yy"
    //  setIsValid(regex.test(formattedValue));
    //  console.log(regex.test(formattedValue));
  };
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value === "") {
      const newCardNumber = [...cardNumber];
      newCardNumber[index] = "";
      setCardNumber(newCardNumber);

      // Move focus to the previous input field
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (/^\d*$/.test(value) && value.length <= 4) {
      const newCardNumber = [...cardNumber];
      newCardNumber[index] = value;
      setCardNumber(newCardNumber);

      // Move focus to the next input field
      if (value.length === 4 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <form
      onChange={() => checkForm()}
      className="body-card__information information-card"
    >
      <div className="information-card__wrapper">
        <div className="information-card__item">
          <div style={{ color: textColor }} className="information-card__title">
            Card number
          </div>

          <div
            style={{
              borderColor: isCardNumberValid() ? "#fbbd00" : "red",
              outline: outline ? "auto" : "none",
              outlineColor: "#fbbd00",
            }}
            className="information-card__number"
          >
            {cardNumber.map((value, index) => {
              return (
                <input
                  key={index}
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={inputRefs[index]}
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  data-error="Ошибка"
                  placeholder=" "
                  maxLength="4"
                  className="information-card__input information-card__input-number input"
                />
              );
            })}
          </div>
        </div>
        <div className="information-card__items">
          <div className="information-card__item">
            <div
              style={{ color: textColor }}
              className="information-card__title"
            >
              Expiration date
            </div>
            <div
              style={{
                borderColor:
                  isExpDateValid() || expiryDate === "" ? "#fbbd00" : "red",
                outline: outline ? "auto" : "none",
                outlineColor: "#fbbd00",
              }}
              className="information-card__date"
            >
              <input
                autoComplete="off"
                type="text"
                name="form[]"
                data-error="Ошибка"
                maxLength="5"
                placeholder="MM/DD"
                className="information-card__input information-card__input-date input"
                value={expiryDate}
                onChange={(e) => handleChangeExpDate(e)}
              />
            </div>
          </div>
          <div className="information-card__item">
            <div
              style={{ color: textColor }}
              className="information-card__title"
            >
              CVV/CVC code
            </div>
            <input
              autoComplete="off"
              type="text"
              name="form[]"
              data-error="Ошибка"
              placeholder=" "
              maxLength="3"
              className="information-card__input information-card__input-cvv input"
              value={cvv}
              onChange={(e) => handleChangeСvv(e)}
              style={{
                borderColor: isCvvValid() || cvv === "" ? "#fbbd00" : "red",
                outline: outline ? "auto" : "none",
                outlineColor: "#fbbd00",
              }}
            />
          </div>
        </div>
        <div className="information-card__item">
          <div style={{ color: textColor }} className="information-card__title">
            Card holder
          </div>
          <input
            autoComplete="off"
            type="text"
            name="form[]"
            data-error="Ошибка"
            placeholder=""
            className="information-card__input information-card__input-holder input"
            value={cardHolder}
            onChange={(e) => handleChangeHolder(e)}
            style={{
              borderColor:
                isCardHolderValid() || cardHolder === "" ? "#fbbd00" : "red",
              outline: outline ? "auto" : "none",
              outlineColor: "#fbbd00",
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="information-card__button _icon-lock"
        style={{
          borderColor: isFormValid ? unlockButtonColor : lockButtonColor,
          backgroundColor: payButtonColor,
        }}
        disabled={isFormValid}
      >
        {" "}
        <span>Pay</span>{" "}
      </button>
    </form>
  );
};
export default PaymentForm;
