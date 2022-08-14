<!-- 根据主体文章生成目录 -->
<template>
    <div class="catalog-box">
        <div class="title-box">目录</div>
        <div class="item-box">
            <div v-for="item in catalogData" :key="item.id" :class="['item', item.isActivate ? 'activate' : '', 'level-' + item.level]" @click="goto(item)">
                <div class="label"></div>
                <div class="text">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                catalogData: [],
                busy: false
            }
        },
        mounted() {
            let passage = document.querySelector('.left-column')
            console.log(passage)
            let headers = Array.from(passage.querySelectorAll("h1, h2")); //获取所有标签为h1，h2的节点
            headers.forEach((item) => {
                this.catalogData.push({
                        title: item.innerHTML,
                        id: item.id,
                        level: Number.parseInt(item.localName.slice(1)),
                        isActivate: false
                    })
            });
            console.log(this.catalogData)

            window.addEventListener('scroll', this.scrollListener)
        },
        beforeDestory() {
            window.removeEventListener("scroll", this.scrollListener)
        },
        methods: {
            goto(item) {
                //根据elementui组件特性来取id
                const clickedId =Number.parseInt(item.id.slice(item.id.indexOf('-')+1, ));
                const windowTop = document.body.getBoundingClientRect().top;
                const toTopDistance = document.getElementById(this.catalogData[clickedId].id).getBoundingClientRect().top;
                console.log(toTopDistance)
                window.scrollTo({
                top: toTopDistance - windowTop,
                behavior: 'auto'
                })
            },
            scrollListener() {
                //不能一个劲监听
                if (this.busy === true) {
                    return;
                }
                this.busy = true;

                let passage = document.querySelector('.left-column')
                // console.log(passage)

                let flag = false;//如果是false，下拖，否则上拖
                //先判断是上移了还是下移了
                const newWindowBoundTop = document.body.getBoundingClientRect().top;
                if(this.windowBoundTop > newWindowBoundTop){
                    //往下拖了
                    console.log('下拖');
                    flag = false;
                }else{
                    //往上拖了
                    console.log('上拖');
                    flag = true;
                }
                this.windowBoundTop = newWindowBoundTop;

                let headers = Array.from(passage.querySelectorAll("h1, h2")); //获取所有标签为h1，h2的节点
                // console.log(headers)
                let allNum = headers.length;
                for (let i = 0; i < allNum; i++) {
                    console.log(headers[i].getBoundingClientRect().top)
                    if (headers[i].getBoundingClientRect().top > 110 && headers[i].getBoundingClientRect().top < 130) {
                        console.log("1111111111111111111")
                        this.catalogData.forEach(item => item.isActivate = false)
                        let indexOfActivate = i;
                        if(flag){
                            //往上托，如果是0的话，那也只能是0
                            indexOfActivate = (i === 0) ? 0 : i - 1;
                        }
                        // document.getElementsByClassName('el-tabs__active-bar is-right')[0].setAttribute('style', `height: 40px; transform: translateY(${actualHighlightTitle*40}px);`);
                        this.catalogData[indexOfActivate].isActivate = true
                        break;
                    }
                }
                this.busy = false;
            },
        },
        watch: {

        }
    }
</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.catalog-box {
    margin-top: 20px;
    width: 300px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    
    .title-box {
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #e4e6eb;
        display: flex;
        align-items: center;
        color:  #1d2129;
        margin: 0 20px;
    }
    .item-box {
        height: 600px;
        overflow-y: scroll;
        scrollbar-face-color: #E4E6EB;
        .item {
            width: 100%;
            height: 45px;
            background-color: #FFFFFF;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .label {
                width: 4px;
                height: 16px;
                border-radius: 0 4px 4px 0;
                left: 0;
                background-color: #FFF;
            }

            .text {
                width: 100%;
            }
            &.level-1 .text {
                color: #000;
                padding-left: 16px;
            }
            &.level-2 .text {
                color: #333;
                padding-left: 30px;
            }

            &.activate {
                .label {
                    background-color: #1E80FF;
                }
                color: #1E80FF;
            }
            &:hover {
                cursor: pointer;
                background-color: #F7F8FA;
            }
        }
    }
    
}
</style>