import React from "react";
import PropTypes from "prop-types";

const LoginLogoutButton = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-secondary" onClick={onLogOut}>
                    Выйти
                </button>
            ) : (
                <button className="btn btn-secondary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </>
    );
};

LoginLogoutButton.propTypes = {
    onLogin: PropTypes.any,
    onLogOut: PropTypes.any,
    isAuth: PropTypes.bool
};

export default LoginLogoutButton;
