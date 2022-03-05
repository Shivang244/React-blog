import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, //if there is a logged in user fetch him from LS, else null
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); // Reducer will be updating the INITIAL_STATE

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]); // FOR STORING USER CREDS IN A SESSION, fire this useEffect whenever a state.user changes
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
