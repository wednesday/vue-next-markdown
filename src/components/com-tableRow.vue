<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        children: Array<any>;
    };
    isHead: boolean;
    align: Array<string>;
}

export default defineComponent({
    props: {
        data: Object,
        isHead: Boolean,
        align: Array,
    },
    render(props: PropsData) {
        return h(
            'tr',
            {
                class: 'as-table-row',
            },
            [
                ...props.data.children.map((child, idx) => {
                    if (child.type === 'text') {
                        return child.value;
                    } else {
                        const comp = resolveComponent(`com-${child.type}`);
                        return h(
                            comp,
                            mergeProps({
                                data: child,
                                isHead: props.isHead,
                                align: props.align[idx] ? props.align[idx] : '',
                            }),
                        );
                    }
                }),
            ],
        );
    },
});
</script>

<style></style>
