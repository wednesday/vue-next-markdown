<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        value?: string;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        return h(
            'p',
            {
                class: 'as-para',
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
