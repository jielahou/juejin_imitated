<!-- 顶部导航栏 -->
<template>
    <div class="nav-box">
        <div class="leftBox">
            <a href=""><img class="logo-img" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="稀土掘金"/></a>
            <TopButtonOneList></TopButtonOneList>
        </div>
        <div class="rightBox">
            <BoxTwo></BoxTwo>
            <a href=""><img data-v-925bf8d6="" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="vip" class="vip-img"/></a>
            <a data-v-925bf8d6="" class="app-link notification-a" href="/notification"><svg data-v-925bf8d6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification-icon"><path data-v-925bf8d6="" d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" stroke-width="1.5" stroke-linecap="round"></path><path data-v-925bf8d6="" d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round"></path><path data-v-925bf8d6="" d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" stroke-linecap="round" stroke-linejoin="round"></path></svg> <!----></a>
            <a href="" class="profilePicture"><img src="https://p6-passport.byteacctimg.com/img/user-avatar/c6869eb6d43442a2ac64ce4e58874273~300x300.image" alt="Orphea的头像" class="lazy avatar avatar immediate" data-src="https://p6-passport.byteacctimg.com/img/user-avatar/c6869eb6d43442a2ac64ce4e58874273~300x300.image" loading="lazy"/></a>         
        </div>
    </div>
</template>

<script>
import TopButtonOneList from './TopButtonOneList.vue';
import BoxTwo from './BoxTwo.vue';
    export default {
    name: "MyNav",
    data() {
        return {

        }
    },
    components: { TopButtonOneList, BoxTwo }
}
</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.nav-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    justify-content: space-between;

    padding-left: 20px;

    .logo-img {
    display: block;
    width: 124px;
    height: 30px;
    }
}

.leftBox, .rightBox {
    display: flex;
    justify-content: center;
    align-items: center;
}


.profilePicture {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 2rem;
    }
}
</style>