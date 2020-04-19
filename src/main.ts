import { createApp } from 'vue';
import App from './app.vue';
// import '@assets/styles/common/resets.css';
import '@assets/styles/common/typoa.css';

import comHeading from './components/com-heading.vue';
import comParagraph from './components/com-paragraph.vue';
import comLink from './components/com-link.vue';
import comStrong from './components/com-strong.vue';
import comEmphasis from './components/com-emphasis.vue';
import comBlockquote from './components/com-blockquote.vue';
import comCode from './components/com-code.vue';
import comInlineCode from './components/com-inlineCode.vue';
import comList from './components/com-list.vue';
import comListItem from './components/com-listItem.vue';
import comThematicBreak from './components/com-thematicBreak.vue';
import comImage from './components/com-image.vue';
import comDelete from './components/com-delete.vue';
import comTable from './components/com-table.vue';
import comThead from './components/com-thead.vue';
import comTbody from './components/com-tbody.vue';
import comTableRow from './components/com-tableRow.vue';
import comTableCell from './components/com-tableCell.vue';

const app = createApp(App);

app.component('comHeading', comHeading);
app.component('comParagraph', comParagraph);
app.component('comLink', comLink);
app.component('comStrong', comStrong);
app.component('comEmphasis', comEmphasis);
app.component('comBlockquote', comBlockquote);
app.component('comCode', comCode);
app.component('comInlineCode', comInlineCode);
app.component('comList', comList);
app.component('comListItem', comListItem);
app.component('comThematicBreak', comThematicBreak);
app.component('comImage', comImage);
app.component('comDelete', comDelete);
app.component('comTable', comTable);
app.component('comThead', comThead);
app.component('comTbody', comTbody);
app.component('comTableRow', comTableRow);
app.component('comTableCell', comTableCell);

app.mount('#app');
