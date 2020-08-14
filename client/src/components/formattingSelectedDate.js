import React from "react";
import CheckDateMatch from "./checkDateMatch";

function formattingSelectedDate(props) {
  var formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(props.date);
  formattedDate.toString();

  return (
    <div>
      <CheckDateMatch
        selectedDate={formattedDate}
        active_periods={props.active_periods}
      />
    </div>
  );
}

export default formattingSelectedDate;
