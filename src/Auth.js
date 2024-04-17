// import React, { useEffect, useState } from "react";
// import app from "./Firebase/config";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUSer] = useState(null);

//     useEffect(() => {
//         app.auth().onAuthStateChanged(setCurrentUSer);
//     }, []);

//     return (
//         <AuthContext.Provider
//             value={{
//                 currentUser,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };
