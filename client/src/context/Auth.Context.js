import { createContext } from "react"

function noop() { }


export const AuthContext = createContext( {
  token: null,
  mark: null,
  name: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: 'loading',
  userRole: null,
  userCoins: 0
} )