<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: Array<{
        type: string;
        children: Array<any>;
    }>;
    align: Array<string>;
}

export default defineComponent({
    props: {
        data: Array,
        align: Array,
    },
    render(props: PropsData) {
        return h('tbody', {}, [
            ...props.data.map(child => {
                const comp = resolveComponent(`com-${child.type}`);
                return h(comp, mergeProps({ data: child, align: props.align }));
            }),
        ]);
    },
});
</script>

<style></style>
