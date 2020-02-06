import { gql } from "apollo-boost";
import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";


function CheckUser(props) {
  const CHEKUSER = gql`
query ChkUser($username: String!) {
  user(username: $username) {
    id
    username
    password
    email
  }
}
`;
  const SS = useLazyQuery(CHEKUSER, {
    variables: { username: props }
  });
  console.log("CHK " + SS);
}
export default CheckUser;
