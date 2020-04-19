<script lang="ts">
import { h, defineComponent } from 'vue';

interface PropsData {
    data: {
        type: string;
        value: string;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        return h(
            'code',
            {
                class: 'as-inlineCode',
            },
            props.data.value,
        );
    },
});
</script>

<style></style>
