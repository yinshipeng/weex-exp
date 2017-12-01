<template>
    <div class="wrapper">
        <div class="bar-item" @click="jump('home')">
            <text class="bar-ic iconfont" :style="testCS">&#xe660;</text>
            <text class="bar-txt">首页</text>
        </div>
        <div class="bar-item" @click="jump('topic')">
            <text class="bar-ic iconfont">&#xe744;</text>
            <text class="bar-txt">专题</text>
        </div>
        <div class="bar-item act" @click="jump('classify')">
            <text class="bar-ic iconfont">&#xe605;</text>
            <text class="bar-txt">分类</text>
        </div>
        <div class="bar-item" @click="jump('shop')">
            <text class="bar-ic iconfont">&#xe61a;</text>
            <text class="bar-txt">购物车</text>
        </div>
        <div class="bar-item" @click="jump('my')">
            <text class="bar-ic iconfont">&#xe639;</text>
            <text class="bar-txt">个人</text>
        </div>
    </div>
</template>
<script>
    import '../app'
    var modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                pIndexKey: 'home'
            }
        },
        computed: {
            testCS: function () {
                return this.pIndexKey == 'home' ? 'color:#b4282d;' : ''
            }
        },
        methods: {
            jump(path) {
                this.$router.push(path)
                if (this.pIndexKey == path) return
                this.pIndexKey = path
            }
        }
    }
</script>
<style src="../assets/css/app.css"></style>
<style scoped>
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }

    .bar-item {
        flex: 1;
    }

    .bar-txt, .bar-ic {
        color: #666;
        text-align: center;
    }

    .bar-ic {
        padding-top: 14px;
        font-size: 38px;
    }

    .bar-txt {
        font-size: 22px;
        padding-top: 2px;
    }
</style>