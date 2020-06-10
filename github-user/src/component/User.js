import React from "react";

const User = props => {
    return(
        <div>
            {props.user ? 
            <div>
                <h4>{props.user.login}</h4>
                <img src={props.user.avatar_url} alt={props.user.login}/>
            </div> : null}
        </div>
    );
}

export default User;