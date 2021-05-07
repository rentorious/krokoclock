import React from "react";

export default function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <h3>{timeLeft}</h3>
    </div>
  );
}
