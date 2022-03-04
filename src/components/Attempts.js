import React from "react";

export const Attempts = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <div>
      {/* You have 5 attempts */}
      {errors > 0 && <div>5 Attempts left</div>}
      {errors > 1 && <div>4 Attempts left</div>}
      {errors > 2 && <div>3 Attempts left</div>}
      {errors > 3 && <div>2 Attempts left</div>}
      {errors > 4 && <div>1 Attempt left</div>}
    </div>
  );
};
