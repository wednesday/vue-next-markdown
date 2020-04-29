<script lang="ts">
import { h, computed, defineComponent } from 'vue';

interface PropsData {
    data: {
        type: string;
        value: string;
        depth: number;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    setup(props) {
        const tag = computed(() => `h${props.data?.depth}`);
        return {
            tag,
        };
    },
    render(props: PropsData) {
        return h(
            this.tag,
            {
                class: 'as-hx',
            },
            [
                ...props.data.children.map(child => {
                    if (child.type === 'text') {
                        return child.value;
                    } else {
                        return h(`com-${child.type}`, { onData: child });
                    }
                }),
            ],
        );
    },
});
</script>

<style></style>
