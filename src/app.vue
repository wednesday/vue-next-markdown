<template>
    <div class="as-md-main">
        <component
            :is="`com-${para.type}`"
            v-for="(para, index) in contents.data.children"
            :data="para"
            :key="index"
        ></component>
    </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted, defineComponent } from 'vue';
import axios from 'axios';

interface ArticleData {
    success: number;
    data: Array<any>;
    error?: string;
}
export default defineComponent({
    setup() {
        const count = ref(0);
        const contents: ArticleData = reactive({ success: 0, data: [] });
        const inc = (): void => {
            count.value++;
        };
        const getArticles = (): void => {
            axios.get('http://localhost:3000/articles/first-note').then(res => {
                const _data = res.data;
                if (_data && _data.success) {
                    contents.success = _data.success;
                    contents.data = _data.data;
                }
            });
        };

        onMounted(() => {
            getArticles();
        });
        return {
            count,
            inc,
            contents,
        };
    },
});
</script>

<style scoped>
img {
    width: 200px;
}
h1 {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
