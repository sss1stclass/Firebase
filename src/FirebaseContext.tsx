import { createContext } from 'react';
import { app } from '../Firebase'

export const createFirebaseContext = createContext<any>(null);
import { getDatabase, ref, set } from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const db = getDatabase(app);
//   const auth = getAuth(app);



const FirebaseContext = ({ children }: any) => {

    const testApp = () => {
        set(ref(db, 'sohil/sohilxdfsf'), {
            id: 1,
            name: 'sohil Maurya',
            age: 23,
            job: 'unemployed from oct 08 2024'
        });
    }
    const val = 'sohil';


    return (
        <createFirebaseContext.Provider value={{ testApp, val }}>
            {children}
        </createFirebaseContext.Provider>
    )
}

export default FirebaseContext;