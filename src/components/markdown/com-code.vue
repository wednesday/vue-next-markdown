<template>
    <div class="as-code" ref="codeBlock">
        <pre :class="languageClass"><code>{{data.value}}</code></pre>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, watch, defineComponent } from 'vue';
import Prism from 'prism-es6';

// styles (duotone-sea,prism-coy,prism-dark,prism-funky,prism-okaidia,prism-solarizedlight,prism-tomorrow,prism-twilight)
import '@assets/styles/codeStyle/prism-tomorrow.css';

interface PropsData {
    data: {
        type: string;
        value: string;
        lang: string;
        meta: string;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    setup(props: PropsData) {
        const codeBlock = ref(null);
        const languageClass = computed(() => `language-${props.data?.lang}`);
        onMounted(() => {
            Prism.highlightAllUnder(codeBlock.value);
        });
        watch(
            () => props.data?.value,
            () => {
                Prism.highlightAllUnder(codeBlock.value);
            },
        );
        return {
            codeBlock,
            languageClass,
        };
    },
});
</script>

<style>
.as-code pre {
    background: #effff4;
    border-radius: 10px;
    border: 1px solid #ffe2e2;
}
.as-code pre:hover {
    animation: highlight-codearea 0.5s ease-in-out forwards infinite;
}

@keyframes highlight-codearea {
    0% {
        border-color: #ffe2e2;
    }
    50% {
        border-color: #fdc0ff;
    }
    100% {
        border-color: #ffe2e2;
    }
}
</style>
