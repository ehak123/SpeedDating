import { createContext, useContext, useReducer } from 'react'
import { getUserRank, isUser } from './users';

// Contexts
const LoginContext = createContext(null);
const LoginDispatchContext = createContext(null);

export function useLoginContext() {
  return useContext(LoginContext);
}

export function useLoginDispatchContext() {
  return useContext(LoginDispatchContext);
}

// Initial state
const initialState = {
  loggedIn: false,
  currentUser: null,
  userRank: null,
}

// Provider
export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

// Reducer
export default function loginReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      state.currentUser = action.username;
      state.userRank = getUserRank(action.username);
      state.loggedIn = true;
      return state;
    case 'LOGOUT':
      state.currentUser = null;
      state.userRank = null;
      state.loggedIn = false;
      return state;
    default:
      throw new Error();
  }
}

// Other functions
export function isValidLogin(username) {
  return isUser(username);
}

export function isValidAdminLogin(username) {
  return isUserAdmin(username);
}