import * as chalk from 'chalk';
import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as unified from 'unified';
import * as markdown from 'remark-parse';
import * as html from 'remark-html';

const app = express();
const md = unified().use(markdown);
const mdH = unified().use(markdown).use(html);

interface ArticlesDataRes {
    success: number;
    data: any;
    error?: string;
}

interface ArticlesDataHTMLRes {
    success: number;
    data: any;
    error?: string;
}

app.use(cors());

// statics
app.use(express.static(path.resolve('./dist/')));

// gzip
app.use(compression());

app.get('/api/articles/:name', (req, res) => {
    const targetPath = path.resolve(`./articles/${req.params.name}.md`);
    let targetMD = '';
    let mdData: ArticlesDataRes;
    if (fs.existsSync(targetPath)) {
        targetMD = fs.readFileSync(path.resolve(targetPath), 'utf-8');
        console.log(chalk.greenBright('[Get]'), req.params.name);
        mdData = { success: 1, data: md.parse(targetMD) };
        res.json(mdData);
    } else {
        console.log(chalk.redBright('[Error]'), `File ${req.params.name} is not exists.`);
        mdData = { success: 0, error: `File ${req.params.name} is not exists.`, data: null };
        res.json(mdData);
    }
});

app.get('/api/articles-html/:name', async (req, res) => {
    const targetPath = path.resolve(`./articles/${req.params.name}.md`);
    let targetMD = '';
    let mdData: ArticlesDataHTMLRes;
    if (fs.existsSync(targetPath)) {
        targetMD = fs.readFileSync(path.resolve(targetPath), 'utf-8');
        console.log(chalk.greenBright('[Get]'), req.params.name);
        mdH.process(targetMD, (err, data) => {
            mdData = { success: 1, data };
            res.json(mdData);
        });
    } else {
        console.log(chalk.redBright('[Error]'), `File ${req.params.name} is not exists.`);
        mdData = { success: 0, error: `File ${req.params.name} is not exists.`, data: '' };
        res.json(mdData);
    }
});

app.get('/*', (res, req) => {
    req.send(fs.readFileSync(path.resolve('./dist/index.html'), 'utf-8'));
});

app.listen(3000);
