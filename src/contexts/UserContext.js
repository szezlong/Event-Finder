import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import useAuth from "../hooks/useAuth";
import { getUser } from "../services/user";
import { useAsync } from "../hooks/useAsync";
import { message } from "antd";

const Context = React.createContext();

export function useUser() {
  return useContext(Context);
}

export function UserProvider({ children }) {
  const { auth } = useAuth();
  const userId = localStorage.getItem("userId");
  //const [user, setUser] = useState();
  // const { error, execute: getUserFn } = useAsyncFn(getUser);

  const {
    loading,
    error,
    value: user,
  } = useAsync(
    () =>
      getUser(userId).catch((err) => {
        message.error(err);
        console.log("ERROR: ", err);
      }),
    [userId]
  );

  // useEffect(() => {
  //   // setFetching(true)
  //   getUserFn(userId)
  //     .then((res) => {
  //       console.log(res)
  //       setUser(res);
  //     })
  //     .catch((err) => {
  //       message.error(err);
  //       console.log("ERROR: ", err);
  //     });
  // }, [userId]);

  return (
    <>
      <Context.Provider
        value={{
          userId: auth.userId,
          user: { userId, ...user },
          // firstname: firstname,
          // lastname: lastname,
          // email: email,
          // events: events,
        }}
      >
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1 className="error-msg">{error}</h1>
        ) : (
          children
        )}
      </Context.Provider>
    </>
  );
}
