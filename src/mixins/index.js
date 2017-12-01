import { getBasePath, isNotEmpty } from '../utils/index'

const mixins = {
    methods: {
        initIconFont () {
            let domModule = weex.requireModule('dom')
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
            })
        },
        jump (path) {
            if (this.$router) {
                this.$router.push(path)
            }
        },
        jumpWeb (url) {
            if(isNotEmpty(url)){
                this.$router.push({
                    path: 'page/webview',
                    query: {
                        weburl: encodeURIComponent(url)
                    }
                })
            }else{
                this.jump('home')
            }
        },
        back () {
            this.$router.back()
        },
        getImageSrc (folderPath) {
            if (weex.config.env.rem) {
                return folderPath;
            }
            const fullpath = getBasePath() + folderPath;
            return fullpath;
        }
    },
    created(){
        this.initIconFont()
    }
}
Vue.mixin(mixins)