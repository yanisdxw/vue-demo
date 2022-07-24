<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <img class="img-fluid" src="../assets/img/profile.jpeg" alt="">
                </div>
                <div class="col-6" style="padding: 12px;">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">粉丝: {{ user.followerCount }}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">+取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';

export default {
    name: 'UserProfileInfo',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    setup(props, context){
        let fullName = computed(()=>'Dr.' + props.user.username );

        const follow = ()=>{
            context.emit('follow');
            console.log("follow");
        };
        const unfollow = ()=>{
            context.emit('unfollow');
            console.log("unfollow");
        };
        return {
            fullName,
            follow,
            unfollow
        }
    }
}
</script>
<style scoped>
img {
    border-radius: 50%;
}
.username {
    font-weight: bold;
}
.fans {
    font-size: 12px;
    color: gray;
}
button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>