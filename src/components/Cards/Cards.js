export const ListCard = () => {
  return (
    <div className="content-invoices__card content-invoices__card-list card-content">
      <div className="card-content__column">
        <div className="card-content__item">
          <span className="card-content__title">uuid</span>
          4cbe30d0-7f6f-4062-95da-ed1b79901813
        </div>
        <div className="card-content__item">
          <span className="card-content__title">payment method</span>
          BeezyyCashier (Sandbox)
        </div>
      </div>
      <div className="card-content__column">
        <div className="card-content__item">
          <span className="card-content__title">reference</span>
          bcea9877-976b-47d4-b578-ad179f62a27b
        </div>
        <div className="card-content__item">
          <span className="card-content__title">date</span>
          Dec 11, 2022 3:20:47 PM
        </div>
      </div>
      <div className="card-content__column">
        <div className="card-content__item card-content__item-highlighted">
          <span className="card-content__title card-content__title-right">
            project
          </span>
          Guide Project
        </div>
        <div className="card-content__item card-content__item-right card-content__item-highlighted">
          <span className="card-content__title card-content__title-right">
            amount
          </span>
          10 HKD
        </div>
      </div>
      <div className="card-content__column">
        <div className="card-content__item">
          <div className="card-content__status card-content__status-column">
            <span className="card-content__title card-content__title-right">
              status
            </span>
            <div className="card-content__state stat-success">Success</div>
          </div>
        </div>
        <button className="card-content__view card-content__view-right card-content__view-bg _icon-eye"></button>
      </div>
    </div>
  );
};
export const NormalCard = () => {
  return (
    <div className="content-invoices__card card-content">
      <div className="card-content__item">
        <div className="card-content__wrapp">
          <div className="card-content__status">
            <span className="card-content__title header-title">status</span>
            <div className="card-content__state stat-success">Success</div>
          </div>
          <button className="card-content__view card-content__view-bg _icon-eye"></button>
        </div>
      </div>
      <div className="card-content__item">
        <span className="card-content__title">uuid</span>
        4cbe30d0-7f6f-4062-95da-ed1b79901813
      </div>
      <div className="card-content__item">
        <span className="card-content__title">reference</span>
        bcea9877-976b-47d4-b578-ad179f62a27b
      </div>
      <div className="card-content__about">
        <div className="card-content__item card-content__item-highlighted">
          <span className="card-content__title">project</span>
          Guide Project
        </div>
        <div className="card-content__item">
          <span className="card-content__title card-content__title-right">
            payment method
          </span>
          BeezyyCashier (Sandbox)
        </div>
        <div className="card-content__item">
          <span className="card-content__title">date</span>
          Dec 11, 2022 3:20:47 PM
        </div>
        <div className="card-content__item card-content__item-highlighted">
          <span className="card-content__title card-content__title-right">
            amount
          </span>
          10 HKD
        </div>
      </div>
    </div>
  );
};
export const TransactionCardMobile = () => {
  return (
    <div className="transactions__item mobile-item-transaction">
      <div className="mobile-item-transaction__column">
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              status
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value stat-success">
              Success
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              type
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value sale _icon-arrow">
              Sale
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title"></div>
            <div className="mobile-item-transaction__value mobile-item-transaction__value-bg invoices-inform__value _icon-eye"></div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              Transaction uuid
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              4cbe30d0-7f6f-4062-95da-ed1b79901813
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              Invoice uuid
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              bcea9877-976b-47d4-b578-ad179f62a27b
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              Pid
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              cf6a3e70-2235-4172-837f-c47221a1faa9
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              project
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              Guide Project
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title mobile-item-transaction__title-right invoices-inform__title">
              payment method
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              BeezyyCashier (Sandbox)
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              date
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              Dec 11, 2022 3:20:47 PM
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title mobile-item-transaction__title-right invoices-inform__title">
              amount
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              10 HKD
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              card country
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              US
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              mode
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              Sandbox
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              card type
            </div>
            <div className="mobile-item-transaction__value mobile-item-transaction__value-right invoices-inform__value">
              VISA
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              customer email
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              guide@test.com
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              message
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const TransactionCard = () => {
  return (
    <div className="transactions__item item-transaction">
      <div className="item-transaction__column">
        <div className="item-transaction__row">
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              transaction uuid
            </div>
            <div className="item-transaction__value invoices-inform__value">
              4cbe30d0-7f6f-4062-95da-ed1b79901813
            </div>
          </div>
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              invoice uuid
            </div>
            <div className="item-transaction__value invoices-inform__value">
              bcea9877-976b-47d4-b578-ad179f62a27b
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              project
            </div>
            <div className="item-transaction__value invoices-inform__value invoices-inform__value-highlight">
              Guide Project
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              status
            </div>
            <div className="item-transaction__value invoices-inform__value stat-success">
              Success
            </div>
          </div>
        </div>
        <div className="item-transaction__row">
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              pid
            </div>
            <div className="item-transaction__value invoices-inform__value">
              bcea9877-976b-47d4-b578-ad179f62a27b
            </div>
          </div>
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              date
            </div>
            <div className="item-transaction__value invoices-inform__value">
              Dec 11, 2022 3:20:47 PM
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              mode
            </div>
            <div className="item-transaction__value invoices-inform__value">
              Sandbox
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              type
            </div>
            <div className="item-transaction__value invoices-inform__value sale _icon-arrow">
              Sale
            </div>
          </div>
        </div>
        <div className="item-transaction__row">
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              payment method
            </div>
            <div className="item-transaction__value invoices-inform__value">
              BeezyyCashier (Sandbox)
            </div>
          </div>
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              customer email
            </div>
            <div className="item-transaction__value invoices-inform__value">
              guide@test.com
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              card type
            </div>
            <div className="item-transaction__value invoices-inform__value">
              VISA
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              card country
            </div>
            <div className="item-transaction__value invoices-inform__value status-success">
              US
            </div>
          </div>
        </div>
        <div className="item-transaction__row">
          <div className="item-transaction__item item-transaction__item-wide invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              message
            </div>
            <div className="item-transaction__value item-transaction__value-narrow invoices-inform__value">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ...
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              amount
            </div>
            <div className="item-transaction__value invoices-inform__value invoices-inform__value-highlight">
              10 HKD
            </div>
          </div>

          <div className="item-transaction__item item-transaction__item-bottom item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title"></div>
            <div className="item-transaction__value item-transaction__value-bg invoices-inform__value _icon-eye"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SingleCardInformation = () => {
  return (
    <div className="single-card__information information-card">
      <div className="information-card__button">Resent notification</div>
      <div className="information-card__content">
        <ul className="information-card__list">
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              status
            </h2>
            <div className="information-card__value stat-success">Success</div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              uuid
            </h2>
            <div className="information-card__value invoices-inform__value">
              <div className="information-card__copy"></div>
              <span>4cbe30d0-7f6f-4062-95da-ed1b79901813</span>
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              reference
            </h2>
            <div className="information-card__value invoices-inform__value">
              <div className="information-card__copy"></div>
              bcea9877-976b-47d4-b578-ad179f62a27b
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              project
            </h2>
            <div className="information-card__value invoices-inform__value">
              <div className="information-card__link"></div>
              web site
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              project title
            </h2>
            <div className="information-card__value invoices-inform__value">
              Guide Project
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              amount
            </h2>
            <div className="information-card__value invoices-inform__value">
              10 HKD
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              payment method id
            </h2>
            <div className="information-card__value invoices-inform__value">
              BeezyyCashier (Sandbox)(11111)
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              create
            </h2>
            <div className="information-card__value invoices-inform__value">
              2022-12-11 15:20:47
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              update
            </h2>
            <div className="information-card__value invoices-inform__value">
              2021-02-28 22:41:42
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              success url
            </h2>
            <div className="information-card__value invoices-inform__value">
              web site
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              fail url
            </h2>
            <div className="information-card__value invoices-inform__value">
              web site
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              notification url
            </h2>
            <div className="information-card__value invoices-inform__value">
              web site
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              customer info
            </h2>
            <div className="information-card__value information-card__value-slim invoices-inform__value">
              email : guide@test.com <br />
              name : test customer <br />
              ip : 176.37.23.233 <br />
              country : UA
            </div>
          </li>
          <li className="information-card__item invoices-inform">
            <h2 className="information-card__title invoices-inform__title">
              metadata
            </h2>
            <div className="information-card__value invoices-inform__value">
              {`
                            {
                            "key1": "value1", 
                            "key2": "value2"
                            }
                            `}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const TransitionCardTile = () => {
  return (
    <div className="transactions__item transactions__item-tile mobile-item-transaction">
      <div className="mobile-item-transaction__column">
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              status{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value stat-success">
              {" "}
              Success{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              type{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value sale _icon-arrow">
              {" "}
              Sale{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title"></div>
            <div className="mobile-item-transaction__value mobile-item-transaction__value-bg invoices-inform__value _icon-eye"></div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              Transaction uuid{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              4cbe30d0-7f6f-4062-95da-ed1b79901813{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              Invoice uuid{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              bcea9877-976b-47d4-b578-ad179f62a27b{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              Pid{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              cf6a3e70-2235-4172-837f-c47221a1faa9{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              project{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Guide Project{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title mobile-item-transaction__title-right invoices-inform__title">
              {" "}
              payment method{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              BeezyyCashier (Sandbox){" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              date{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Dec 11, 2022 3:20:47 PM{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title mobile-item-transaction__title-right invoices-inform__title">
              {" "}
              amount{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              10 HKD{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              card country{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              US{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              mode{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Sandbox{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              card type{" "}
            </div>
            <div className="mobile-item-transaction__value mobile-item-transaction__value-right invoices-inform__value">
              {" "}
              VISA{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              customer email{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              guide@test.com{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              message{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ...{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const RefundCard = () => {
  return (
    <div className="transactions__item item-transaction">
      <div className="item-transaction__column ">
        <div className="item-transaction__row">
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              uuid
            </div>
            <div className="item-transaction__value invoices-inform__value">
              4cbe30d0-7f6f-4062-95da-ed1b79901813
            </div>
          </div>
          <div className="item-transaction__item invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              invoice uuid
            </div>
            <div className="item-transaction__value invoices-inform__value">
              bcea9877-976b-47d4-b578-ad179f62a27b
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              project
            </div>
            <div className="item-transaction__value invoices-inform__value invoices-inform__value-highlight">
              Guide Project
            </div>
          </div>
          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              status
            </div>
            <div className="item-transaction__value invoices-inform__value stat-success">
              Success
            </div>
          </div>
        </div>
        <div className="item-transaction__row">
          <div className="item-transaction__item item-transaction__item-wide invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              date
            </div>
            <div className="item-transaction__value invoices-inform__value">
              Dec 11, 2022 3:20:47 PM
            </div>
          </div>

          <div className="item-transaction__item item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              amount
            </div>
            <div className="item-transaction__value invoices-inform__value invoices-inform__value-highlight">
              10 HKD
            </div>
          </div>

          <div className="item-transaction__item item-transaction__item-bottom item-transaction__item-right invoices-inform">
            <div className="item-transaction__title invoices-inform__title"></div>
            <div className="item-transaction__value item-transaction__value-bg invoices-inform__value _icon-eye"></div>
          </div>
        </div>

        <div className="item-transaction__row">
          <div className="item-transaction__item item-transaction__item-wide invoices-inform">
            <div className="item-transaction__title invoices-inform__title">
              message
            </div>
            <div className="item-transaction__value  invoices-inform__value">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const RefundCardMobile = () => {
  return (
    <div className="transactions__item transactions__item-tile mobile-item-transaction">
      <div className="mobile-item-transaction__column">
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              status{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value stat-success">
              {" "}
              Success{" "}
            </div>
          </div>

          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title"></div>
            <div className="mobile-item-transaction__value mobile-item-transaction__value-bg invoices-inform__value _icon-eye"></div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              uuid{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              4cbe30d0-7f6f-4062-95da-ed1b79901813{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              Invoice uuid{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              bcea9877-976b-47d4-b578-ad179f62a27b{" "}
            </div>
          </div>
        </div>

        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              project{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value-highlight invoices-inform__value">
              {" "}
              Guide Project{" "}
            </div>
          </div>
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title mobile-item-transaction__title-right invoices-inform__title">
              {" "}
              amount{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value-highlight invoices-inform__value">
              {" "}
              10 HKD{" "}
            </div>
          </div>
        </div>
        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              date{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Dec 11, 2022 3:20:47 PM{" "}
            </div>
          </div>
        </div>

        <div className="mobile-item-transaction__row">
          <div className="mobile-item-transaction__item invoices-inform">
            <div className="mobile-item-transaction__title invoices-inform__title">
              {" "}
              message{" "}
            </div>
            <div className="mobile-item-transaction__value invoices-inform__value">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ...{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
