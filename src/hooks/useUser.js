import axios from "axios";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import { API_URL_2, USERS_API_URL_2} from "@/common/API";
//import {newGuid} from "@/common/GuidLogic";

export function useUser() {
    const user = ref(
        {
            id: '',
            email: '',
            login: '',
            password: '',
            roles: ["user"],
        })

    const store = useStore()

    const login = async () => {
        const response = await axios.get(API_URL_2 + "/login" + '?login=' + user.value.email
            + "&password=" + user.value.password);

        if (response.data.user_id !== undefined) {
            user.value.id = response.data.user_id
            user.value.email = response.data.user_email
            user.value.login = response.data.user_login
            user.value.password = response.data.user_password
            user.value.roles = response.data.user_roles_array
            await store.dispatch("authentication", user.value)
        } else {
            //store.commit("setErrorMessage", "Неверно указан логин или пароль")
            //asd
        }

        user.value = {
            id: '',
            email: '',
            login: '',
            password: '',
            roles: ["user"],
        }
    }

    const register = async () => {
        const response = await axios.get(API_URL_2 + "/login" + '?login=' + user.value.email
            + "&password=" + user.value.password);

        if (response.data.user_id === undefined) {
            const newUser = {
                user_email: user.value.email,
                user_login: user.value.login,
                user_password: user.value.password,
                user_roles_array: user.value.roles,
                user_tests_by_invite_array:[],
            }
            const response2 = await axios.post(API_URL_2 + USERS_API_URL_2, newUser);
            user.value.id = response2.data.user_id
            user.value.email = response2.data.user_email
            user.value.login = response2.data.user_login
            user.value.password = response2.data.user_password
            user.value.roles = response2.data.user_roles_array
            await store.dispatch("authentication", user.value)
        } else {
            //store.commit("setErrorMessage", "Пользователь с номером телефона уже существует")
        }

        user.value = {
            id: '',
            email: '',
            login: '',
            password: '',
            roles: [],
        }
    }

    const signOut = async () => {
        await store.dispatch("signOut")
    }

    const checkAuth = async () =>{
        await store.dispatch("checkAuth")
    }

    const getLoginByID = async (id) => {
        const response = await axios.get(API_URL_2 + USERS_API_URL_2 + '/' + id);
        user.value.id = response.data.user_id
        user.value.email = response.data.user_email
        user.value.login = response.data.user_login
        user.value.password = response.data.user_password
        user.value.roles = response.data.user_roles_array
        return user.value
    }

    onMounted(checkAuth)

    return {
        register, login, signOut, getLoginByID, user, checkAuth
    }
}