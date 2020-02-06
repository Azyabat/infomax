import { users } from "./db";

const resolvers = {
    Query: {
        user: (parent, { username }, context, info) => {
          return users.find(user => user.username === username);
        },
        users: (parent, args, context, info) => {
          return users;
        }
      },
      Mutation: {
        createUser: (parent, { id, username, email, password }, context, info) => {
          const newUser = { id, username, email, password };
    
          users.push(newUser);
    
          return newUser;
        },
        updateUser: (parent, { id, username, email, password }, context, info) => {
          let newUser = users.find(user => user.id === id);
    
          newUser.username = username;
          newUser.email = email;
          newUser.password = password;
    
          return newUser;
        },
        deleteUser: (parent, { id }, context, info) => {
          const userIndex = users.findIndex(user => user.id === id);
    
          if (userIndex === -1) throw new Error("User not found.");
    
          const deletedUsers = users.splice(userIndex, 1);
    
          return deletedUsers[0];
        }
      }
};

export default resolvers;