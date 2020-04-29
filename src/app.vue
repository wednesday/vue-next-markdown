<template>
    <div class="main-wrap" ref="content">
        <side></side>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import side from './components/side/index.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { side },
    mounted() {
        if ('paintWorklet' in CSS) {
            CSS.paintWorklet.addModule('/paintworklet.js');

            const wave: HTMLBaseElement = this.$refs['content'] as HTMLBaseElement;
            let tick = 0;
            requestAnimationFrame(function raf() {
                tick += 1;
                wave.style.cssText = `--animation-tick: ${tick};`;
                requestAnimationFrame(raf);
            });
        }
    },
});
</script>

<style lang="less">
.main-wrap {
    min-height: 100vh;
    background-color: #ffcfdf;
    background-image: paint(wave);
}
.content-wrap {
    width: calc(100vw - 400px);
    padding-left: 300px;
    padding-right: 100px;
}
</style>
