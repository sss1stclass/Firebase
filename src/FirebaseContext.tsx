import { createContext } from 'react';

export const createFirebaseContext = createContext(null);

const FirebaseContext = ({ children }: any) => {




    return (
        <createFirebaseContext.Provider value={null}>
            {children}
        </createFirebaseContext.Provider>
    )
}

export default FirebaseContext