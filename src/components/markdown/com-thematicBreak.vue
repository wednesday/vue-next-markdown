<script lang="ts">
import { h, defineComponent } from 'vue';

interface PropsData {
    data: {
        type: string;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render() {
        return h('hr', {
            class: 'as-thematic-break',
        });
    },
});
</script>

<style></style>
