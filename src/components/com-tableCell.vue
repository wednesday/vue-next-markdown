<script lang="ts">
import { h, defineComponent, resolveComponent, computed, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        children: Array<any>;
    };
    isHead: boolean;
    align: string;
}

export default defineComponent({
    props: {
        isHead: Boolean,
        data: Object,
        align: String,
    },
    setup(props: PropsData) {
        const tag = computed(() => (props.isHead ? 'th' : 'td'));
        return {
            tag,
        };
    },
    render(props: PropsData) {
        return h(
            this.tag,
            {
                class: 'as-table-cell',
                style: { textAlign: props.align },
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
