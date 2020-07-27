import React from 'react';
import { Consumer } from '../../index';


const User = () => {
    return (
        <Consumer>
            {({ user }) => (
                <>
                    <h2>{user.name}</h2>
                    <p>{user.status}</p>
                </>
            )}
        </Consumer>
    );
}

export default User;