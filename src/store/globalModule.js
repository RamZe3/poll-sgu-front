export const globalModule = {
    state: () => ({
        isAuth: false,
        //errorMessage: null,
        login: null,
        role: null,
    }),

    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        LOGIN: state => {
            return state.login
        },
        ROLE: state => {
            return state.role
        },
    },

    mutations: {
        setLogin(state) {
            state.login = sessionStorage.getItem("Login");
        },
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth;
        },
        setRole(state){
            state.role = sessionStorage.getItem("Role");
        },
    },

    actions: {
        //TODO logic with Tokens (backend)
        checkAuth:  (context) => {
            if (sessionStorage.getItem("UserID") != null){
                context.commit("setIsAuth", true)
                context.commit("setLogin")
                context.commit("setRole")
            }
            else {
                context.commit("setIsAuth", false)
            }
        },

        authentication: (context, user) => {
            sessionStorage.setItem("UserID", user.id)
            sessionStorage.setItem("Login", user.login)
            sessionStorage.setItem("Role", user.role)
            context.commit("setIsAuth", true)
        },

        signOut: (context) => {
            sessionStorage.removeItem("UserID")
            sessionStorage.removeItem("Login")
            sessionStorage.removeItem("Role")
            context.commit("setIsAuth", false)
        }
    },
}