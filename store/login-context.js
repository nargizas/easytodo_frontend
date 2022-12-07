import { createContext } from "react";
import { useReducer } from "react";

export const LoginContext = createContext({
    sids: [],
    initializeSID: (sid) => { }
})

function loginReducer(state, action) {
    switch (action.type) {
        case 'INIT':
            console.log("now here");
            // console.log(action.payload)
            return [action.payload, ...state]
        default:
            return state;
    }
}

function LoginContextProvider({ children }) {
    const [sidState, dispatch] = useReducer(loginReducer, []);

    function initializeSID(sid) {
        dispatch({ type: 'INIT', payload: sid });
    }
    const value = {
        sids: sidState,
        initializeSID: initializeSID
    };
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>

}

export default LoginContextProvider;