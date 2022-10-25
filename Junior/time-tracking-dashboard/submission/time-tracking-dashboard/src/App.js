import React, { useState } from "react";
import userData from "./content/data.json";
import userimg from "./content/images/image-jeremy.png";
import iconElipsis from "./content/images/icon-ellipsis.svg";
function App() {
  const [timeState, setTimeState] = useState("weekly");

  function changeTimeState(e) {
    setTimeState(e.target.value);
  }

  const renderedData = userData.map((item) => {
    let timeFrameValueCurrent = 0;
    let timeFrameValuePrevious = 0;
    if (timeState === "daily") {
      timeFrameValueCurrent = item.timeframes.daily.current;
      timeFrameValuePrevious = item.timeframes.daily.previous;
    } else if (timeState === "weekly") {
      timeFrameValueCurrent = item.timeframes.weekly.current;
      timeFrameValuePrevious = item.timeframes.weekly.previous;
    } else {
      timeFrameValueCurrent = item.timeframes.monthly.current;
      timeFrameValuePrevious = item.timeframes.monthly.previous;
    }

    return (
      <>
        <div
          className={`stat-card ${item.title
            .toLowerCase()
            .replace(/\s+/g, "")}`}
        >
          <div className="stat-img"></div>
          <div
            onMouseOver={(e) => (e.target.style.filter = "brightness(200%)")}
            onMouseOut={(e) => (e.target.style.filter = "brightness(100%)")}
            className="stats"
          >
            <div className="stat-headers">
              <h3>{item.title}</h3>
              <div className="imgelipsis">
                <img alt="" src={iconElipsis} />
              </div>
            </div>
            <div className="stats-values">
              <p className="currentStat">{timeFrameValueCurrent}hrs</p>
              <p className="prevStat">
                {timeState === "daily"
                  ? "Yesterday "
                  : timeState === "weekly"
                  ? "Last Week "
                  : "Last Month "}
                - {timeFrameValuePrevious}hrs
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="App">
      <div className="userProfileContainer">
        <div className="userProfile">
          <img
            className="userImg"
            src={userimg}
            alt="lovely portrait of the user"
          />
          <div className="userInfo">
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className="timeStateButtons">
          <button
            value={"daily"}
            onClick={changeTimeState}
            className={timeState === "daily" ? "active" : ""}
          >
            Daily
          </button>
          <button
            value={"weekly"}
            onClick={changeTimeState}
            className={timeState === "weekly" ? "active" : ""}
          >
            Weekly
          </button>
          <button
            value={"monthly"}
            onClick={changeTimeState}
            className={timeState === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
        </div>
      </div>
      {renderedData}
    </div>
  );
}

export default App;
