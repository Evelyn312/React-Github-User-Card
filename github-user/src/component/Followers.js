import React from "react";

const Followers = props => {

    return(
        <div>
            <h3>Followers:</h3>
            <div className="followWrapper">
                
                {
                    props.followers.map((follower)=> (
                        <div className="followerCont" key={follower.id}>
                            <p>{follower.login}</p>
                            <img src={follower.avatar_url} alt="follower Picture"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Followers;