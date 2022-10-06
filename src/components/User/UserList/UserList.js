import Card from "../../UI/Card";
import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card>
        <p className={classes["user-list--no-users"]}>No users found.</p>
      </Card>
    );
  }

  return (
    <Card>
      <ul className={classes["user-list"]}>
        {props.users.map((user) => (
          <UserItem key={user.id}>
            {`${user.username} (${user.age} years old)`}
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
