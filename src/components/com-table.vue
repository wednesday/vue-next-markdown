<script lang="ts">
import { h, defineComponent, resolveComponent, mergeProps } from 'vue';

interface PropsData {
    data: {
        type: string;
        align: Array<string>;
        children: Array<any>;
    };
}

export default defineComponent({
    props: {
        data: Object,
    },
    render(props: PropsData) {
        const theadData = props.data.children[0];
        const tbodyData = props.data.children.slice(1);
        return h(
            'table',
            {
                class: 'as-table',
            },
            [
                h(() => {
                    const comp = resolveComponent(`com-thead`);
                    return h(comp, mergeProps({ data: theadData, align: props.data.align }));
                }),
                h(() => {
                    const comp = resolveComponent(`com-tbody`);
                    return h(comp, mergeProps({ data: tbodyData, align: props.data.align }));
                }),
            ],
        );
    },
});
</script>

<style>
.as-table {
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}
.as-table td,
.as-table th {
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
}
.as-table thead th {
    background-color: #cce8eb;
    width: 100px;
}
.as-table tr:nth-child(odd) {
    background: #fff;
}
.as-table tr:nth-child(even) {
    background: #f5fafa;
}
</style>
