import React from "react";

function DisplayActivePeriods(props) {
  var activePeriodShow = "";
  if (props.isMatch) {
    var startTime = props.matchedActivePeriod.start_time.split(" ");
    var endTime = props.matchedActivePeriod.end_time.split(" ");
    activePeriodShow =
      "The user was active from " +
      startTime[4] +
      " to " +
      endTime[3] +
      " on " +
      props.selectedDate;
  } else {
    activePeriodShow = "The user was not active on " + props.selectedDate;
  }
  return <div className="text-info">{activePeriodShow}</div>;
}

export default DisplayActivePeriods;
