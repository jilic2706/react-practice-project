import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return <li className={classes["user-item"]}>{props.children}</li>;
};

export default UserItem;
