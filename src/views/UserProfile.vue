<template>
  <ContentBase>
    <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
          <UserProfileWrite @post_a_post="post_a_post"/>
        </div>
        <div class="col-9"><UserProfilePost :posts="posts"/></div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase.vue';
import UserProfileInfo from '../components/UserProfileInfo.vue';
import UserProfilePost from '../components/UserProfilePost.vue';
import UserProfileWrite from '../components/UserProfileWrite.vue';

import { reactive } from 'vue';

export default {
  name: 'UserProfile',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePost,
    UserProfileWrite
  },
  setup(){
    const user = reactive({
        id: 1,
        username: "桃金娘",
        followerCount: 123,
        is_followed: true
    });

    const posts = reactive({
      count: 3,
      posts:[
        {
          id: 1,
          userId: 1,
          content: "hello world",
        },
        {
          id: 2,
          userId: 1,
          content: "PHP is best",
        },
        {
          id: 3,
          userId: 1,
          content: "404 not found",
        },
      ]
    });

    const follow = ()=>{
        if(user.is_followed) return;
        user.is_followed = true;
        user.followerCount++;
    }

    const unfollow = ()=>{
        if(!user.is_followed) return;
        user.is_followed = false;
        user.followerCount--;
    }

    const post_a_post = (content)=>{
      posts.count ++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content
      })
    }

    return {
        user, 
        posts,
        follow,
        unfollow,
        post_a_post
    }
  }
}
</script>

<style scoped>

</style>
