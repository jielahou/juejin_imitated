<template>
    <div class="main-content">
        <div class="left-column">
            <AuthorMiniInfo></AuthorMiniInfo>
            <Content></Content>
        </div>
        <div class="right-column">
            <Aside></Aside>
                <!-- <Catalog :catalog-data="catalogData"></Catalog> -->
        </div>
    </div>
</template>

<script>
import Content from "./Content.vue";
import AuthorMiniInfo from "./AuthorMiniInfo.vue";
import Catalog from "./Catalog.vue";
import { nextTick } from "vue";
import Aside from "./Aside.vue";

export default {
    components: {
    Content,
    AuthorMiniInfo,
    Catalog,
    Aside
},
    data() {
        return {
            catalogData: [],
            busy: false,
            windowBoundTop: 0,
        };
    },
    methods: {
        // async changeStyle() {
        //     await nextTick();

        //     let catalogs = document.querySelectorAll(".el-tabs__item");

        //     for (let i = 0; i < catalogs.length; i++) {
        //         console.log(this.catalogData[i]);
        //         if (this.catalogData[i].level === 2) {
        //             document.querySelector(
        //                 "#" + catalogs[i].id
        //             ).style.paddingLeft = "50px";
        //         }
        //     }
        // },

        // listenScroll() {
        //     //不能一个劲监听
        //     if (this.busy === true) {
        //         return;
        //     }

        //     this.busy = true;
        //     let flag = false;//如果是false，下拖，否则上拖
        //     //先判断是上移了还是下移了
        //     const newWindowBoundTop = document.body.getBoundingClientRect().top;
        //     if(this.windowBoundTop > newWindowBoundTop){
        //         //往下拖了
        //         console.log('下拖');
        //         flag = false;
        //     }else{
        //         //往上拖了
        //         console.log('上拖');
        //         flag = true;
        //     }
        //     this.windowBoundTop = newWindowBoundTop;

        //     let headers = Array.from(document.querySelectorAll("h1,h2")); //获取所有标签为h1，h2的节点
        //     let allNum = headers.length;
        //     for (let i = 0; i < allNum; i++) {
        //         if (headers[i].getBoundingClientRect().top > 110 && headers[i].getBoundingClientRect().top < 130) {
        //             let actualHighlightTitle = i;
        //             if(flag){
        //                 //往上托，如果是0的话，那也只能是0
        //                 actualHighlightTitle = (i === 0) ? 0 : i - 1; 
        //             }
        //             document.getElementsByClassName('el-tabs__active-bar is-right')[0].setAttribute('style', `height: 40px; transform: translateY(${actualHighlightTitle*40}px);`);
        //             for(let j = 0; j<allNum; j++){
        //                 document.getElementById('tab-' + j).className = "el-tabs__item is-right";
        //             }
        //             document.getElementById('tab-' + actualHighlightTitle).className = "el-tabs__item is-right is-active";
        //             break;
        //         }
        //     }
        //     this.busy = false;
        // },
    },
    mounted() {
        // let headers = Array.from(document.querySelectorAll("h1,h2")); //获取所有标签为h1，h2的节点
        // headers.forEach((item) => {
        //     let headerData = {};
        //     headerData.title = item.innerHTML;
        //     headerData.id = item.id;
        //     headerData.level = Number.parseInt(item.localName.slice(1));
        //     this.catalogData.push(headerData);
        // });
        // //然后修改一下样式

        // this.changeStyle();
        // window.onscroll = this.listenScroll;
    },
};
</script>

<style lang="less" scoped>
.main-content {
    position: relative;
    width: 960px;
    margin: 70px auto;

    .left-column {
        width: 700px;
        background-color: #fff;
        border: 5px solid #fff;
        border-radius: 3px;
    }

    .right-column {
        position: absolute;
        width: 240px;
        top: 0;
        right: 0;
    }
}
</style>