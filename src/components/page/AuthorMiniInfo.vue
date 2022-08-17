<template>
    <div class="author-mini-info">
        <div class="avatar">
            <img
                src="https://p26-passport.byteacctimg.com/img/user-avatar/61130727b6e6bf9ed813434aeaed8ac3~300x300.image"
                alt=""
                class="lazy avatar avatar"
            />
        </div>
        <div class="basic-info">
            <div class="author-name">CUGGZ</div>
            <div class="time">公众号：前端充电宝</div>
        </div>
        <div class="favour">
            <el-button>+关注</el-button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.author-mini-info {
    display: flex;
    align-items: center;
    margin: 5px 32px;

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 30px;
        margin-right: 15px;
    }

    .basic-info {
        flex: 1 1 auto;
        color: #515767;
        line-height: 25px;

        .time {
            color: #8a919f;
            font-size: 15px;
        }
    }
}
</style>