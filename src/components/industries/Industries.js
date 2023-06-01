import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize.hook";
const Industries = () => {
  const { isScreenLg } = useResize();
  const [itemsToShow, setItemsToShow] = useState(12);
  useEffect(() => {
    if (isScreenLg) {
      setItemsToShow(16);
    } else {
      setItemsToShow(12);
    }
  }, [isScreenLg]);
  const supportedIndunsry = [
    "RETAIL",
    "MARKETING",
    "E-COMMERCE",
    "COINS",
    "HOSTING",
    "GAMBLING",
    "WEBSITE DEVELOPMENT",
    "WHITE LABEL",
    "CASINO",
    "CREDIT REPAIR",
    "VPN",
    "BITCOIN",
    "CASUAL GAMING",
    "SEO",
    "FANTASY SPORTS",
    "MULTIPLE MERCHANTS ACCOUNTS",
    "ICO MERCHANT",
    "DATING",
    "ONLINE GAMING",
    "COLLECTIBLE",
    "TRAVEL AGENCY",
    "ONLINE TUTORIALS",
    "APPLICATION DEVELOPMENT",
    "TECH SUPPORT",
    "FOREX",
    "NUMEROLOGY",
    "ESSAY WRITING",
    "ASTROLOGY",
    "SUBSCRIPTION BOX",
    "CRYPTOCURRENCY",
    "CRYPTO EXCHANGE",
    "ICO MERCHANT",
    "CBD OIL",
    "TIMESHARE",
    "COLLECTION AGENCY",
    "SKILL GAMING",
  ];
  const showmore = () => {
    setItemsToShow(supportedIndunsry.length);
  };

  const showless = () => {
    if (isScreenLg) {
      setItemsToShow(16);
    }
    setItemsToShow(12);
  };
  return (
    <section className="supported">
      <div className="supported__decor"></div>
      <div className="supported__container">
        <div className="supported__title">
          SUPPORTED <span>INDUSTRIES</span>{" "}
        </div>
        <div className="supported__body">
          <ul className="supported__industries">
            {supportedIndunsry.slice(0, itemsToShow).map((item, index) => {
              return (
                <li key={index} className="supported__industry">
                  {item}
                </li>
              );
            })}
          </ul>
          {itemsToShow === 12 ? (
            <div
              onClick={showmore}
              className="supported__more more-button _icon-down_arrow"
            >
              SEE MORE
            </div>
          ) : (
            <div
              onClick={showless}
              className="supported__more supported__more-rotate more-button _icon-down_arrow"
            >
              SEE LESS
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Industries;
