import { useState } from "react";

const Providers = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const providers = [
    "prov1",
    "prov2",
    "prov3",
    "prov4",
    "prov5",
    "prov6",
    "prov7",
    "prov8",
    "prov9",
  ];
  const showmore = () => {
    setItemsToShow(providers.length);
  };

  const showless = () => {
    setItemsToShow(3);
  };
  return (
    <section id="providers" className="providers">
      <div className="providers__container">
        <div className="providers__header">
          <h2 className="providers__title">
            {" "}
            AVAILABLE <span>PROVIDERS</span>
          </h2>
        </div>
        <div className="providers__body body-providers">
          <ul className="body-providers__list">
            {providers.slice(0, itemsToShow).map((item, index) => {
              return (
                <li key={index} className="body-providers__item">
                  <div className="body-providers__image-ibg">
                    <img
                      src={require(`../../img/desctop/${item}.png`)}
                      alt={item}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          {itemsToShow === 3 ? (
            <div
              onClick={showmore}
              className="body-providers__more  more-button _icon-down_arrow"
            >
              SEE MORE
            </div>
          ) : (
            <div
              onClick={showless}
              className="body-providers__more  body-providers__more-rotate more-button _icon-down_arrow"
            >
              SEE LESS
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Providers;
