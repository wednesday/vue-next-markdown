<template>
    <article class="as-article-wrap">
        <div class="as-article-title">
            <h1>{{ contents.data.title || '标题去那儿了？' }}</h1>
            <p>
                <span>{{
                    contents.data.createTime ? format(new Date(contents.data.createTime), 'yyyy-MM-dd HH:mm:ss') : '?'
                }}</span
                >|<span>By as</span>|<span>{{ contents.data.comment_counts || 0 }} comments</span>
            </p>
        </div>
        <div class="as-article-content" v-if="contents.data.children">
            <component
                :is="`com-${para.type}`"
                v-for="(para, index) in contents.data.children"
                :data="para"
                :key="index"
            ></component>
        </div>

        <div class="error-no-result" v-if="!contents.success">404 not found.</div>
    </article>
</template>

<script lang="ts">
import { ref, reactive, onMounted, defineComponent } from 'vue';
import { format } from 'date-fns';
import { useRoute } from 'vue-router';

import { getArticle, ArticleMDData } from '../../api';

export default defineComponent({
    setup() {
        const route = useRoute();
        const count = ref(0);
        const contents: ArticleMDData = reactive({ success: 0, data: {} });
        const inc = (): void => {
            count.value++;
        };
        const _format = (date: Date, formatStr: string): string => {
            return format(date, formatStr);
        };
        const getArticles = (): void => {
            getArticle(route.params.articleName).then(res => {
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
            route,
            format: _format,
        };
    },
});
</script>
<style lang="less">
.as-article-title {
    margin-bottom: 25px;
    h1 {
        text-align: center;
        font-size: 30px;
        line-height: 80px;
        margin-bottom: 0;
    }
    p {
        text-align: center;
    }
    span {
        display: inline-block;
        margin: 0 5px;
    }
}
</style>
