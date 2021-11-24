import { createContext, useEffect, useReducer, useState } from "react"
import AuthReducer from "./AuthReducer"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"

const initialState =  {
    user: null,
    isFetching: false,
    error: ''    
}

export const AuthContext = createContext(initialState)
export const AuthContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const auth = getAuth();
    
    useEffect(() =>  {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                try {
                    dispatch(loginStart())
                    dispatch(loginSuccess({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }));
                } catch (error) {
                    dispatch(loginFailure(error.message))
                }
            }
            });
            return unsubscribe
    }, [])
    return (
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}