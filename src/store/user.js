import $ from 'jquery'
import jwt_decode from 'jwt-decode'

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

    },
    mutations:{

    },
    actions: {
        login(context, data){
            $.ajax({
                url: "/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password
                },
                success(resp){
                    console.log(resp);
                    const { access, refresh } = resp;
                    console.log(refresh);
                    const access_obj = jwt_decode(access);
                    $.ajax({
                        url: "/myspace/getinfo/",
                        type: "GET",
                        data: {
                            user_id : access_obj.user_id,
                        },
                        headers: {
                            'Authorization': "Bearer " + access
                        },
                        success(resp){
                            console.log(resp);
                        }
                    })
                }
            })
        }
    },
    modules: {

    }
}

export default ModuleUser;