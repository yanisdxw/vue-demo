const ModuleUser = {
    state: {
        user: {
            username: "",
            id: "",
            photo: "",
            followerCount: 0,
        }
    },
    getters: {
        fullname(state){
            return state.user.firstname +" "+ state.user.lastname
        }
    },
    mutations:{
        updateUser(state, user){
            state.user.username = user.username;
        }
    },
    actions: {

    },
    modules: {

    }
}

export default ModuleUser;