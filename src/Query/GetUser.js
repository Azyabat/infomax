import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Users = gql`
  {
    users {
      username
      email
      password
      fname
      sname
    }
  }
`;
function GetUser() {
  const UsersList = useQuery(Users);
  let UserInfo;
  if (!UsersList.loading) {
    UserInfo = UsersList.data.users.find(
      user => user.username === localStorage.getItem("user")
    );
    return UserInfo;
  }

}

export default GetUser;
