<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        children: Array<any>;
    };
    align: Array<string>;
}

export default defineComponent({
    props: {
        data: Object,
        align: Array,
    },
    render(props: PropsData) {
        return h('thead', {}, [
            ...props.data.children.map((child, idx) => {
                if (child.type === 'text') {
                    return child.value;
                } else {
                    const comp = resolveComponent(`com-${child.type}`);
                    return h(comp, mergeProps({ data: child, isHead: true, algin: props.align[idx] }));
                }
            }),
        ]);
    },
});
</script>

<style></style>
