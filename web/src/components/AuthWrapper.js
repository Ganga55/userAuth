import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthWrapper = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton
                    title="Click to Logout"
                />
            </div>
        ) : (
            <div>
                <LoginButton
                    title="Click to Login"
                />
                <br />
                {
                    props.children
                }
            </div>
        )
    );
};

export default AuthWrapper;