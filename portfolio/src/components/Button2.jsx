/* eslint-disable react/prop-types */

const Button2 = ({ children, color, backgroundColor, custonClasses , callBackFn}) => {
  return (
    <div
      className={custonClasses ? "button " + custonClasses : "button"}
      style={{ color, backgroundColor }}
      onClick={() => callBackFn(children)}
    >
      {children}
    </div>
  );
};

export default Button2;
