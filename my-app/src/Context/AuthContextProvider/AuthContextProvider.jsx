import { createContext, useReducer } from "react";
import reducer from "./reducer";


export const AuthContext = createContext();

const initialState={
    isLoading:false,
    isAuth:false,
    isError:false,
    token:null
  
}

const AuthContextProvider = ({children}) => {
    // console.log(reducer);
     const [state,dispatch] = useReducer( reducer, initialState);
    
      return (
      <AuthContext.Provider value={{ state , dispatch}}>
        {children}
      </AuthContext.Provider>)
    
    };
    
export default AuthContextProvider;

