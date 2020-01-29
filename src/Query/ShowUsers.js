import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const Users = gql`
  {
    users {
      id
      username
      password
      email
    }
  }
`;

function ShowUsers() {
  const { loading, error, data } = useQuery(Users);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ id, username, password, email }) => (
    <div key={id}>
      <p>
        {id} : {username} : {password} : {email}
      </p>
      <hr/>
    </div>
  ));
}
;
export default  ShowUsers;