import { createContext, useState } from 'react';
import { app } from '../Firebase'
export const createFirebaseContext = createContext<any>(null);
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const FirebaseContext = ({ children }: any) => {
    const [userData, setUserData] = useState<any>('');
    const [loginData, setLoginData] = useState<any>('');
    const [userError, setUserError] = useState<any>('');
    const [userLogInError, setUserLogInError] = useState<any>('')
    const [logout, setLogOut] = useState(false);
    const [signInWithGoogle, setSignInWithGoogle] = useState(false);


    const createRealTimeDb = () => {
        set(ref(db, 'sohil/sohilxdfsf'), {
            id: 1,
            name: 'sohil Maurya',
            age: 23,
            job: 'unemployed from oct 08 2024'
        });
    }
    const getSignUP = async (email: any, password: any) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            setUserData(res);
        } catch (error) {
            setUserError(error)
        }
    }

    const sighnUpWithGoogle = async () => {
        try{
            const res = await signInWithPopup(auth, provider);
            if(res){
             setSignInWithGoogle(true);
            }
        }catch(error){
            console.log(error);
            alert(error)
        }
      
    }

    const logInUser = async (email: any, password: any) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            setLoginData(response?.user);
        } catch (err) {
            setUserLogInError(err);
        }
    }
    const logOut = async () => {
        signOut(auth).then(() => {
            setLogOut(true);
        }).catch((error) => {
            alert(error)
        });

    }


    const contextValue = { createRealTimeDb, getSignUP, userData, userError, logInUser, loginData, userLogInError, logOut, logout,sighnUpWithGoogle, signInWithGoogle }
    // abc1234

    return (
        <createFirebaseContext.Provider value={contextValue}>
            {children}
        </createFirebaseContext.Provider>
    )
}

export default FirebaseContext;