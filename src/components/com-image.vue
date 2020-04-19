<script lang="ts">
import { h, defineComponent } from 'vue';

interface PropsData {
    data: {
        type: string;
        title: string;
        url: string;
        alt: string;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        return h('img', {
            class: 'as-image',
            title: props.data.title,
            src: props.data.url,
            alt: props.data.alt,
        });
    },
});
</script>

<style>
.as-image {
    display: block;
    margin: 0 auto;
}
</style>
