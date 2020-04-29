<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        checked: null;
        spread: boolean;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        let className = 'as-list-item';
        const context = [];
        if (props.data.checked !== null) {
            context.push(h('input', { class: 'task-list-item', type: 'checkbox', checked: props.data.checked }));
            className += ' task-list ';
        }
        return h(
            'li',
            {
                class: className,
            },
            [
                ...context,
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

<style>
.task-list-item {
    display: block;
    margin-right: 10px;
}
.task-list {
    display: flex;
    align-items: center;
}
.task-list p {
    margin: 0;
    padding: 0;
}
</style>
