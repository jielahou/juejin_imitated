<template>
    <div class="main-box">
        <form @focusin="active(true)" @focusout="active(false)" role="search" class="search-form">
            <input type="search" maxlength="32" :placeholder="inputValue" value="" class="search-input">
            <div class="search-icon-container">
                <img 
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                    alt="搜索" class="search-icon">
            </div>
        </form>
        <div class="creater-box">
            <button class="add-btn">
                创作者中心
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxTwo',
    data() {
        return {
            isActive: false,
            inputValue: '探索稀土掘金'
        }
    },
    methods: {
        active(status) {
            if(status) {
                this.isActive = true
                this.inputValue = '搜索文章/小册/标签/用户'
                document.getElementsByClassName('main-box')[0].className="main-box active"
            } else {
                this.isActive = false
                this.inputValue = '探索稀土掘金'
                document.getElementsByClassName('main-box')[0].className="main-box"
            }
        }
    }
}
</script>

<style lang="less" scoped>
button {
    border: none;
}

.main-box {
    margin-right: 50px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-form {
    width: 180px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    height: 2.834rem;
    border: 1px solid #c2c8d1;
    transition: width .3s;
}



.search-input {
    border: none;
    width: calc(100% - 44px);
    padding: 0.6rem 0 0.6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #8a919f;
    background-color: transparent;
    transition: width .3s;
}

.search-form .search-icon-container {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    border-radius: 2px;
}

.search-icon-container {
    display: flex;
}

.search-form .search-input{
    border: none;
    // width: calc(100% - 44px);
    padding: 0.6rem 0 0.6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #8a919f;
    background-color: transparent;
    transition: width 3s;
}

.creater-box {
    width: 60px;
    height: 44px;
    margin-right: 20px;
    .add-btn {
    padding: 0 1rem;
    font-size: 1.167rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    white-space: nowrap;
    }
    .add-btn {
        height: 100%;
        color: #fff;
        background-color: #1e80ff;
        border-radius: 3px;
        transition: background-color .1s linear .05s;
    }
}

.active {
    .search-form {
        width: 360px;
    }
    .creater-box {
        display: none;
    }
}
</style>