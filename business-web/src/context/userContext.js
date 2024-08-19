
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
useEffect(()=>{
    const userset =  localStorage.getItem("user");
    if(userset){
        setUser(JSON.parse(userset))
    }
});

useEffect(()=>{
    if(user){
        localStorage.setItem("user", JSON.stringify(user));
    }else{
        localStorage.removeItem("user")
    }
},[user])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
