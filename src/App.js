import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  // Initalise usersList with an empty array
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
      const objUser = {
        name: uName,
        age: uAge
      };
      
      setUsersList( (prevUsersList) =>{
        return [...prevUsersList, objUser];
      });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
