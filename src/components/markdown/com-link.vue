<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        value: string;
        depth: number;
        url?: string;
        title?: string;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        return h(
            'a',
            {
                class: 'as-alink',
                href: props.data.url,
                title: props.data.title,
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
