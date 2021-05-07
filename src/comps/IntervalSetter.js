import React from "react";

export default function IntervalSetter({ setSpeed }) {
  return (
    <div className="interval-setter">
      <input
        type="number"
        placeholder="minutes per interval"
        onChange={(e) => setSpeed(e.target.value)}
      />
    </div>
  );
}
