import React from "react";
import DisplayActivePeriods from "./displayActivePeriods";

function CheckDateMatch(props) {
  var isMatch = false;
  var matchedActivePeriod = "";
  var selectedDate = props.selectedDate.split(",");
  for (let i = 0; i < props.active_periods.length; i++) {
    if (props.active_periods[i].start_time.includes(selectedDate[0])) {
      isMatch = true;
      matchedActivePeriod = props.active_periods[i];
    }
  }
  return (
    <div>
      <DisplayActivePeriods
        isMatch={isMatch}
        selectedDate={props.selectedDate}
        matchedActivePeriod={matchedActivePeriod}
      />
    </div>
  );
}

export default CheckDateMatch;
