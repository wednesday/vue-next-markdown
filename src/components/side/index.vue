<template>
    <div class="as-side-area">
        <div class="logo">
            <a href="/">
                <img :src="imgSrc" alt="我的小站" />
            </a>
        </div>
        <nav class="nav-area">
            <ul>
                <li class="nav-item"><router-link to="/article/first-note">程序狗的折腾</router-link></li>
                <li class="nav-item"><router-link to="/">哔哔叨叨</router-link></li>
                <li class="nav-item"><router-link to="/article">随心拍摄</router-link></li>
                <!-- <li class="nav-item"></li> -->
            </ul>
        </nav>
        <div class="tags">
            <ul>
                <li class="tag-item"></li>
                <li class="tag-item"></li>
                <li class="tag-item"></li>
            </ul>
        </div>
        <footer>
            <div class="theme-by">
                Theme by AfterStory
            </div>
            <div class="coryright">
                © 2020 zzzzz.li版权所有
            </div>
        </footer>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const imgSrc = ref('https://s.gravatar.com/avatar/7c87cf97143eb538183d6445f9147d0a?s=80');

        return {
            imgSrc,
        };
    },
});
</script>

<style lang="less">
.as-side-area {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    box-shadow: #8e8e8e40 6px 0px 20px 10px;
    .logo {
        font-size: 0;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 100px;
        overflow: hidden;
        a {
            display: block;
        }
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .nav-area {
        margin-top: 20px;
        line-height: 1.8;
    }
    footer {
        position: absolute;
        bottom: 20px;
    }
}
</style>
