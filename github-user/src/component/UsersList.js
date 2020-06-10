import React from "react";
import User from "./User";

const UsersList = (props) => {
    console.log("this is props form userlist", props.users);
    return(
        
        <div>
                <User user={props.users} />
        </div>
    );
}

export default UsersList