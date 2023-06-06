import { useState } from "react";

const Providers = () => {
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
            {providers.map((item, index) => {
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

          <a
            href="#"
            className="body-providers__more  more-button _icon-down_arrow"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Providers;
