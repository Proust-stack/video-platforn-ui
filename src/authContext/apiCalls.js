import { loginFailure, loginStart, loginSuccess } from "./AuthActions"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const login =  (email, password, dispatch) => {
    const auth = getAuth()
    dispatch(loginStart())
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        dispatch(loginSuccess({
            email: user.email,
            token: user.accessToken,
            id: user.uid
        }))   
    })
    .catch((error) => {
        dispatch(loginFailure(error.message))
    });
}

export const signUp = ( email, password, dispatch ) => {
    const auth = getAuth()
    dispatch(loginStart())
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        dispatch(loginSuccess({
            email: user.email,
            token: user.accessToken,
            id: user.uid
        }));
    })
    .catch((error) => {
        dispatch(loginFailure(error.message))
      });
}