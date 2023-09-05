import React from "react";

const Buttons = () => {
  return (
    <div>
      <img src="./dice-1.png" alt="Playing dice" className="dice" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </div>
  );
};

export default Buttons;
