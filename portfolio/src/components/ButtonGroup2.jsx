/* eslint-disable react/prop-types */

import React from "react";
// let should = true;
const ButtonGroup2 = ({ children }) => {
  const buttons = [...children].map((child, index) => {
    // console.log(child.props)
    const text = child.props.children + " ?";
    return React.cloneElement(
      child,
      {
        color: "white",
        backgroundColor: "black",
        callBackFn: child.props.callBackFn,
        key: index,
      },
      text
    );
  });

  // cloneElement(parent.childrenElement, props or style , textContent)
  // const cloneElement = React.Children.map(children ,child => {
  //   const text = child.props.children + " ?";
  //   return React.cloneElement(
  //     child,
  //     { color: "white", backgroundColor: "black", callBackFn },
  //     text
  //   );
  // })
  // console.log(cloneElement)
  return <div>{buttons}</div>;
};

export default ButtonGroup2;
