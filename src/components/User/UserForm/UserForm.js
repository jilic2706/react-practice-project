import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      props.onAddNewUser("Username cannot be empty.");
      return;
    }
    if (typeof age !== "number" || age < 1) {
      props.onAddNewUser("Age must be a number higher than 1.");
      return;
    }
    const newUser = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.onAddNewUser(newUser);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(+event.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={classes["form-actions"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
