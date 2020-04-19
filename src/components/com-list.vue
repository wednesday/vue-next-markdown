<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps, computed } from 'vue';

interface PropsData {
    data: {
        type: string;
        ordered: boolean;
        start: number | null;
        spread: boolean;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    setup(props) {
        const tag = computed(() => (props.data?.ordered ? 'ol' : 'ul'));
        return {
            tag,
        };
    },
    render(props: PropsData) {
        return h(
            this.tag,
            {
                class: 'as-list',
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
