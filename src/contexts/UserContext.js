import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import useAuth from "../hooks/useAuth";
import { getUser } from "../services/user";

import { message } from "antd";

const Context = React.createContext();

export function useUser() {
  return useContext(Context);
}

export function UserProvider({ children }) {
  const { auth } = useAuth();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState();
  const { error, execute: getUserFn } = useAsyncFn(getUser);

  useEffect(() => {
    // setFetching(true)
    getUserFn(userId)
      .then((res) => {
        console.log(res)
        //setIsOwner(auth.userId == userId)
        setUser(res);
        // setFriendship(res.friendshipStatus)
        // setFetching(false)
      })
      .catch((err) => {
        message.error(err);
        console.log("ERROR: ", err);
        //setFetching(false)
        // err.response?.data === "Blocked"
        //   &&
        //   Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: `It seems like this user has blocked you ¯\\_(ツ)_/¯`
        //   })
        // navigate("/Users")
      });
  }, [userId]);

  return (
    <Context.Provider
      value={{
        userId: auth.userId,
        user: {userId, ...user },
        // firstname: firstname,
        // lastname: lastname,
        // email: email,
        // events: events,
      }}
    />
  );
}
