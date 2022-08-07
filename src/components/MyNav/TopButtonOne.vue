<!-- 首页 沸点 这种按钮 -->
<template>
    <a :class="classObj" :href="info.url">
    <!-- <a :class="classObj"> -->
        {{info.name}}
        <span class="label"></span>
    </a>
</template>

<script>
    export default {
        name: 'TopButtonOne',
        props: ['info'],
        data() {
            return {
                classObj: {
                    TopButtonBox: true,
                    isActive: this.info.isActive,
                }
            }
        }
    }
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
    color: #909090;
}
.TopButtonBox {
    display: block;
    width: 70px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // text-align: center;
    
    .label {
        position: relative;
        bottom: -10px;
        height: 2px;
        width: 30px;
        background-color: #FFF;
    }
}

a:hover {
    color: #71777c;
    .label {
        background-color: #1E80FF;
    }
}

.isActive {
    color: #1E80FF;
}

a:hover.isActive {
    color: #2c3e50;
}
</style>