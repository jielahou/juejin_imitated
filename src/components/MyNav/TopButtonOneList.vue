<template>
    <div class="TopButtonOneList" :key="key">
        <button  v-for="(item, i) in TopButtonOneList" :key="i"  @click.prevent="changeActive(item)">
            <TopButtonOne :info="item"></TopButtonOne>
        </button>
    </div>
</template>

<script>
import TopButtonOne from './TopButtonOne.vue'
    export default {
    name: 'TopButtonOneList',
    components: { TopButtonOne },
    data() {
        return {
            TopButtonOneList: [
                { name: "首页", url: "", isActive: true },
                { name: "沸点", url: "", isActive: false },
                { name: "课程", url: "", isActive: false },
                { name: "直播", url: "", isActive: false },
                { name: "活动", url: "", isActive: false },
                { name: "商城", url: "", isActive: false },
                { name: "APP", url: "", isActive: false },
                { name: "插件", url: "", isActive: false },
            ],
            key: 0
        }
    },
    methods: {
        changeActive(item) {
            this.TopButtonOneList.forEach(element => {
                element.isActive = false
            });
            item.isActive = true
            // 数组中的变化不会引起渲染, 利用改变key值来引起重新渲染
            this.key++
        }
    }
}
</script>

<style lang="less" scoped>
button {
    background-color: #FFF;
	border-radius: 0;
	border: none;
	outline: none;
}
.TopButtonOneList {
    display: flex;
    flex-direction: row;
}
</style>