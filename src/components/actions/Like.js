import React from "react";

function Like({userId, modifySuperficialChoices}) {
  return (
    <button
      type='button'
      onClick={() => modifySuperficialChoices(userId, "ADD_TO_LIKED_USER")}
    >
      <img src='images/misc/like.png' alt='Like User' />
    </button>
  );
}

export default Like;
