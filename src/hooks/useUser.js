import axios from "axios";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import {API_URL, USERS_API_URL} from "@/common/API";
import {newGuid} from "@/common/GuidLogic";

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
        //TODO
        const response = await axios.get(API_URL + USERS_API_URL + '/?email=' + user.value.email
            + "&password=" + user.value.password);

        if (response.data.length === 1) {
            await store.dispatch("authentication", user)
        } else {
            //store.commit("setErrorMessage", "Неверно указан логин или пароль")
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
        //alert("ASD")
        //TODO
        const response = await axios.get(API_URL + USERS_API_URL + '/?email=' + user.value.email);
        if (response.data.length === 0) {
            //const errors = validUser(user.value)
            //if (errors !== ''){
            //    store.commit("setErrorMessage", errors)
            //    return
            //}
            const newUser = {
                id: newGuid(),
                email: user.value.email,
                login: user.value.login,
                password: user.value.password,
                roles: user.value.roles,
                tests_by_invite:[],
            }
            //alert(newUser)
            await axios.post(API_URL + USERS_API_URL + "/", newUser);
            await store.dispatch("authentication", newUser)
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

        //alert("ASD")
    }

    const signOut = async () => {
        await store.dispatch("signOut")
    }

    const checkAuth = async () =>{
        await store.dispatch("checkAuth")
    }

    const getLoginByID = async (id) => {
        const response = await axios.get(API_URL + USERS_API_URL + '/?id=' + id);
        return response.data[0]
    }

    onMounted(checkAuth)

    return {
        register, login, signOut, getLoginByID, user, checkAuth
    }
}