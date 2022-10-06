import classes from "./Overlay.module.css";

const Overlay = (props) => {
  const clickOverlayHandler = () => {
    props.onClickOverlay(true);
  };

  return (
    <div onClick={clickOverlayHandler} className={classes.overlay}>
      {props.children}
    </div>
  );
};

export default Overlay;
