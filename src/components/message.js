import React from "react";

// When we call the message component we'll pass through a message and a className
// The message will be displayed (something like "Good Job" and "Bad Luck, Try again")
// The className will define to colour of the component, Green for good, Red for bad
// It'll flash up on screen for a half a second and then fade
function Message(props) {
  return (
    <div className={props.className}>
      <p>{props.message}</p>
    </div>
  );
}

export default Message;
