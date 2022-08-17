<template>
    <div class="main-content">
        <div class="left-column">
            <ul class="infinite-list" ref="list">
                <EntryList
                    v-for="item in articles"
                    :key="item.article.title"
                    :article="item.article"
                    :author="item.author"
                />
                <div class="loading" v-loading="busy" v-if="busy">
                </div>
            </ul>
        </div>
        <div class="right-column">
            <IndexAside></IndexAside>
        </div>
    </div>
</template>

<script>
import EntryList from './EntryList.vue';
import IndexList from '../../mock/IndexList.js'
import IndexAside from './IndexAside.vue'

export default {
    components: {
        EntryList,
        IndexAside
    },
    data() {
        return {
            busy: false,
            total: 0,
            loading: false,
            articles: [
                
            ],
        };
    },
    methods: {
        getKey() {
            return this.total++;
        },
        load() {
            this.loading = true;
            setTimeout(() => {
                this.articles = this.articles.concat(this.articles);
                this.loading = false;
            }, 2000);
        },
    },
    mounted() {
        this.articles = IndexList;
        const that = this;
        window.onscroll = function () {
            if (that.busy) {
                return;
            }
            that.busy = true;
            setTimeout(() => {
                const bottom = that.$refs.list.getBoundingClientRect().bottom; //list元素底部到屏幕顶部的距离
                const windowHeight = window.innerHeight; //获取窗口高度
                const distance = 70; //设置阈值为70px，因为设置了一个margin-bottom
                if (Math.abs(bottom - windowHeight) < distance) {
                    setTimeout(() => {
                        that.articles = that.articles.concat(that.articles);
                        that.busy = false;
                    }, 2000);
                    
                }else{
                    that.busy = false;
                }
            }, 200);
        };
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
    }

    .right-column {
        position: absolute;
        width: 240px;
        top: 0;
        right: 0;
    }
}
</style>