<template>
    <div>
        <Header4 :leftBtn="leftBtn" @click="back"></Header4>
        <div class="webdiv">
            <web class="webview" :src="weburl" :style="webStyle"></web>
        </div>
    </div>
</template>
<script>
    import '../../app'
    import { isNotEmpty } from '../../utils'
    import Header4 from '../../components/Header4.vue'
    export default {
        data () {
            return {
                weburl: 'http://',
                leftBtn: {
                    name: '返回'
                },
                webStyle: {}
            }
        },
        components: {
            Header4
        },
        created(){
            let width = '750px'
            let height = ''
            if(isNotEmpty(weex.config.env.rem)){
                height = window.screen.availHeight

            }else{
                height = weex.config.env.deviceHeight
            }

            this.webStyle = {
                "width": width,
                "height": height + "px"
            }

            this.weburl = decodeURIComponent(this.$router.query.weburl)
        }
    }
</script>
<style>
    /*.webdiv {*/
        /*flex: 1;*/
    /*}*/
    /*.webview {*/
        /*flex: 1;*/
    /*}*/
</style>
