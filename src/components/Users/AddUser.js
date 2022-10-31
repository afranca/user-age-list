import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal";
import clases from  "./AddUser.module.css";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            console.log("Empty field");
            setError({
                title: 'Invalid Input',
                message: 'Name & Age are mandatory fields'
            }); 
            return;
        }
        // + converts String to Number
        if (+enteredAge < 1){
            console.log("Age cannot be ZERO");
            setError({
                title: 'Invalid Age',
                message: 'Age must be greater than 0'
               }); 
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);        
    }
    const ageChangeHandler = (event) =>{        
        setEnteredAge(event.target.value);
    }    

    const closeModalHandler = () =>{
        console.log('closeModalHandler');
        setError(null);
    }
    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
            <Card className={clases.input}>
                <form onSubmit={addUserHandler}>
                    
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                                
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                
                    <Button type="submit">Add User</Button>
                    
                </form>
            </Card>
        </React.Fragment>
    )

};

export default AddUser;