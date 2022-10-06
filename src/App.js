import "./App.css";
import { useState } from "react";
import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserList/UserList";
import Overlay from "./components/UI/Overlay";
import Modal from "./components/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);

  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const addNewUserHandler = (newUser) => {
    if (typeof newUser === "string") {
      setModalTitle("Invalid Input");
      setModalMessage(newUser);
      setShowOverlay(true);
      return;
    } else if (newUser instanceof Object) {
      setUsers((prevUsers) => {
        return [...prevUsers, newUser];
      });
    }
  };

  const closeModalHandler = (isClicked) => {
    if (isClicked) {
      setShowOverlay(false);
    }
  };

  return (
    <div>
      <UserForm onAddNewUser={addNewUserHandler} />
      <UserList users={users} />
      {showOverlay && (
        <Overlay onClickOverlay={closeModalHandler}>
          <Modal title={modalTitle} onClickClose={closeModalHandler}>
            {modalMessage}
          </Modal>
        </Overlay>
      )}
    </div>
  );
}

export default App;
