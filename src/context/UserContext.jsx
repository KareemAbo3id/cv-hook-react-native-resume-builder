import { useState, createContext } from "react";

const localStoredUser = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};

const initialState = {
  userInfo: localStoredUser(currentUser),
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState(initialState);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};
