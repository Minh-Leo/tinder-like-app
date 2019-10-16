import React from "react";

function SuperLike({userId, modifySuperficialChoices}) {
  return (
    <button
      type='button'
      onClick={() => modifySuperficialChoices(userId, "ADD_TO_SUPERLIKED_USER")}
    >
      <img src='images/misc/superlike.png' alt='Superlike User' />
    </button>
  );
}

export default SuperLike;
