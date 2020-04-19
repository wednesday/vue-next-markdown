<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

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
    render(props: PropsData) {
        console.log(`[del]`, props);

        return h(
            'del',
            {
                class: 'as-del',
            },
            [
                ...props.data.children.map(child => {
                    if (child.type === 'text') {
                        return child.value;
                    } else {
                        const comp = resolveComponent(`com-${child.type}`);
                        return h(comp, mergeProps({ data: child }));
                    }
                }),
            ],
        );
    },
});
</script>

<style></style>
