import "./index.scss";
import spendingData from "./content/data.json";

import yinYanCircle from "./content/images/logo.svg";
function App() {
  const renderedSpendingData = spendingData.map((item) => (
    <div className="item">
      <div
        onClick={(e) => {
          showSpan(e);
        }}
        className="item-amount"
        style={{ height: `${item.amount / 5}rem` }}
      >
        <span className="item-amount-value">${item.amount}</span>
      </div>
      <p className="item-day">{item.day}</p>
    </div>
  ));
  const initialValue = 0;
  const sumValArr = spendingData
    .map((item) => item.amount)
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  return (
    <div className="App">
      <div className="user-data container">
        <div className="user-balance">
          <div>
            <p>My balance</p>
            <span>$921.48</span>
          </div>
          <img src={yinYanCircle} alt="" />
        </div>
        <div className="user-spending container">
          <p className="spending-sign">Spending - Last 7 days</p>
          <div className="weekly-spending">{renderedSpendingData}</div>
          <div className="monthly-val">
            <div id="monthly-val">
              <p>Total this month</p>
              <span
                onClick={(e) => {
                  e.target.textContent = "$" + sumValArr;
                  changeMonWeek(e);
                }}
              >
                ${sumValArr + 250.39}
              </span>
            </div>
            <div className="monthly-diff">
              <span>+2.4%</span>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
function changeMonWeek(e) {
  if (
    document.getElementById("monthly-val").firstChild.textContent ===
    "Total this month"
  ) {
    document.getElementById("monthly-val").firstChild.textContent =
      "Total this week";
  } else {
    document.getElementById("monthly-val").firstChild.textContent =
      "Total this month";
    e.target.textContent =
      "$" + (parseFloat(e.target.textContent.replace(/\$/g, "")) + 250.39);
  }
}
function showSpan(e) {
  try {
    document.querySelector(".show").classList.remove("show");
  } catch (error) {}
  e.target.classList.add("show");
}
