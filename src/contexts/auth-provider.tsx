import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '@/appwrite/appwrite';

interface User {
  $id: string;
  name: string;
  email: string;
  //  avatar: string;
}

// use type cause you hae to write = sign and that is simillar to object
type GlobalContextType = {
  loggedIn: boolean;
  user: User | null;
  setUser: () => void;
  loading: boolean;
  setloading: () => void;
};

// why start with capital letter ? cause it becomes component which gives props such
// AuthContext.provider // looks diffrent will later thing about more

// And it's a rule to write a component name starting with capital case
const AuthContext = createContext<GlobalContextType | undefined>(undefined);

// Provider component for wrapping whole app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // All over the app we need to provide things
  // 1. is user getCurrentUser is still fetching the user information from server ?
  // why loading true ? cause if loading that means user information hasn't fetched
  const [loading, setLoading] = useState(true);
  // 2. is user loggedIn or not
  // initially loading will be false
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // 3. Store the current loggedIn user information
  // intially user variables will store null value
  const [user, setUser] = useState<null | any>(null);

  // So whenever the app reload/mount/update/remove it will run the useEffect
  // you said whenever app reload ? iska aur app ka koi relaton hi nahi hai
  // ye to hooks file me hai then how ?
  // cause this AuthProvider component is wrapped by whole app so whenever something(reload/any life cycle method/)
  //  happnes  then this useEffect will execute
  useEffect(() => {
    // This useEffect will execute getCurrentUser function and will store in currentUser variable
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
        setUser(null);
        console.log(error);
        throw new Error('Failed to fetch user ');
      } finally {
        setLoading(false);
      }
    };

    // execute the fetch user
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useGlobalContext must be used within a GlobalProvider');

  return context;
};
