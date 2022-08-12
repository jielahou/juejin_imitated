<template>
    <div class="author-mini-info">
        <div class="avatar">
            <img
                src="https://p6-passport.byteacctimg.com/img/user-avatar/a6aee7df076585022b660b0f45700463~300x300.image"
                alt=""
                class="lazy avatar avatar"
            />
        </div>
        <div class="basic-info">
            <div class="author-name">奥里给</div>
            <div class="time">233</div>
        </div>
        <div class="favour">
            <el-button>点击关注</el-button>
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