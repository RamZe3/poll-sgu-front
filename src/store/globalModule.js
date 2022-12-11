export const globalModule = {
    state: () => ({
        isAuth: false,
        //errorMessage: null,
        login: null,
        roles: [],
    }),

    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        LOGIN: state => {
            return state.login
        },
        ROLES: state => {
            return state.roles
        },
    },

    mutations: {
        setLogin(state) {
            state.login = sessionStorage.getItem("Login");
        },
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth;
        },
        setRoles(state){
            state.roles = sessionStorage.getItem("Roles");
        },
    },

    actions: {
        //TODO logic with Tokens (backend)
        checkAuth:  (context) => {
            if (sessionStorage.getItem("UserID") != null){
                context.commit("setIsAuth", true)
                context.commit("setLogin")
                context.commit("setRoles")
            }
            else {
                context.commit("setIsAuth", false)
            }
        },

        authentication: (context, user) => {
            sessionStorage.setItem("UserID", user.id)
            sessionStorage.setItem("Login", user.login)
            sessionStorage.setItem("Roles", user.roles)
            context.commit("setIsAuth", true)
        },

        signOut: (context) => {
            sessionStorage.removeItem("UserID")
            sessionStorage.removeItem("Login")
            sessionStorage.removeItem("Roles")
            context.commit("setIsAuth", false)
        }
    },
}