import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const clickModalHandler = (event) => {
    event.stopPropagation();
  };

  const clickCloseHandler = () => {
    props.onClickClose(true);
  };

  return (
    <div onClick={clickModalHandler} className={classes.modal}>
      <Card className={classes["modal-box"]}>
        <div className={classes["modal-header"]}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes["modal-content"]}>{props.children}</div>
        <div className={classes["modal-actions"]}>
          <Button onClick={clickCloseHandler}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
