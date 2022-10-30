import React from "react";
import Card from "../UI/Card"
import clases from  "./AddUser.module.css";

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <Card className={clases.input}>
            <form onSubmit={addUserHandler}>
                <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                </div>
                <div>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                </div>
                <div>
                <button type="submit">Add User</button>
                </div>            
            </form>
        </Card>
    )

};

export default AddUser;