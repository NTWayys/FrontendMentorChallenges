import "./index.scss";
import cardLogo from "./images/card-logo.svg";
import { useEffect, useState } from "react";
function App() {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    expiryyy: "",
    expirymm: "",
  });

  const changeDetails = (details) => {
    const id = details.target.id;
    let value;
    if (id === "name") {
      value = details.target.value;
    } else {
      value = details.target.value.replace(/\D/g, "");
    }
    if (id === "number") {
      setCardDetails((oldDetails) => ({ ...oldDetails, number: value }));
    } else if (id === "name") {
      setCardDetails((oldDetails) => ({ ...oldDetails, name: value }));
    } else if (id === "cvc") {
      setCardDetails((oldDetails) => ({ ...oldDetails, cvc: value }));
    } else if (id === "mm") {
      setCardDetails((oldDetails) => ({ ...oldDetails, expirymm: value }));
    } else if (id === "yy") {
      setCardDetails((oldDetails) => ({ ...oldDetails, expiryyy: value }));
    }
  };

  useEffect(() => {
    const expireDate = cardDetails.expirymm + cardDetails.expiryyy;
    setCardDetails((oldDetails) => ({ ...oldDetails, expiry: expireDate }));
  }, [cardDetails.expirymm, cardDetails.expiryyy]);

  function testDetails(e) {
    e.preventDefault();
    if (cardDetails.number.length < 16) {
      document.getElementById("user-number").classList.add("failed");
    } else {
      document.getElementById("user-number").classList.remove("failed");
    }
    if (!cardDetails.name) {
      document.getElementById("user-name").classList.add("failed");
    } else {
      document.getElementById("user-name").classList.remove("failed");
    }
    if (!cardDetails.expiryyy) {
      document.getElementById("user-date").classList.add("failed");
    } else {
      document.getElementById("user-date").classList.remove("failed");
    }
    if (!cardDetails.expirymm) {
      document.getElementById("user-date").classList.add("failed");
    } else {
      document.getElementById("user-date").classList.remove("failed");
    }
    if (!cardDetails.cvc) {
      document.getElementById("user-cvc").classList.add("failed");
    } else {
      document.getElementById("user-cvc").classList.remove("failed");
    }
  }

  return (
    <div className="App flex-container">
      <div className="card-preview">
        <div className="card-background">
          <div className="card">
            <div className="side card-back">
              <span className="cardCVC">
                {cardDetails.cvc ? cardDetails.cvc : "000"}
              </span>
            </div>
            <div className="side card-front">
              <img src={cardLogo} alt="" />
              <div className="card-details">
                <span className="cardNum">
                  {cardDetails.number
                    ? cardDetails.number.match(/.{1,4}/g).join(" ")
                    : "0000 0000 0000 0000"}
                </span>
                <div>
                  <span className="cardName">
                    {cardDetails.name ? cardDetails.name : "JANE APPLESEED"}
                  </span>
                  <span className="cardExpiry">
                    {cardDetails.expirymm ? cardDetails.expirymm : "00"}/
                    {cardDetails.expiryyy ? cardDetails.expiryyy : "00"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="user-details">
        <div id="user-name" className="user-name">
          <label>
            CARDHOLDER NAME
            <input
              id="name"
              onChange={(e) => changeDetails(e)}
              value={cardDetails.name}
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </label>
          <p className="error">"Can't be blank"</p>
        </div>

        <div id="user-number">
          <label>
            CARD NUMBER
            <input
              id="number"
              onChange={(e) => changeDetails(e)}
              value={
                cardDetails.number
                  ? cardDetails.number.match(/.{1,4}/g).join(" ")
                  : cardDetails.number
              }
              size="19"
              maxLength="19"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>
          <p className="error">
            {cardDetails.number
              ? cardDetails.number.length < 16
                ? "needs to be at least 16 characters"
                : ""
              : `Can't be blank`}
          </p>
        </div>

        <div className="small-details">
          <div id="user-date" className="user-date">
            <label>EXP. DATE (MM/YY)</label>
            <input
              id="mm"
              onChange={(e) => changeDetails(e)}
              value={cardDetails.expirymm}
              min="1"
              max="12"
              size="5"
              maxLength="2"
              placeholder="MM"
            />
            <input
              id="yy"
              onChange={(e) => changeDetails(e)}
              value={cardDetails.expiryyy}
              min="1"
              max="99"
              size="5"
              maxLength="2"
              placeholder="YY"
            />
            <p className="error">Can't be blank</p>
          </div>
          <div id="user-cvc" className="user-cvc">
            <label>
              CVC
              <input
                id="cvc"
                onChange={(e) => changeDetails(e)}
                value={cardDetails.cvc}
                size="3"
                maxLength="3"
                placeholder="e.g. 123"
              />
            </label>
            <p className="error">Can't be blank</p>
          </div>
        </div>
        <div>
          <button onClick={testDetails} className="submit-btn">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
