import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../Api";

const useLoginedUser = () => {
  const { allUsers } = useSelector((state) => state.allUsers);

  // const [allUsers, setAllUsers] = useState(null);
  const [currentLoginedUser, setCurrentLoginedUser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("auth") && allUsers) {
      setCurrentLoginedUser(
        allUsers.filter(
          (user) => user.token === JSON.parse(localStorage.getItem("auth"))
        )[0]
      );
    }
    // fetchAllUsers();
  }, [allUsers]);

  return { currentLoginedUser, setCurrentLoginedUser };
};

export default useLoginedUser;
