import axios, { AxiosResponse } from 'axios';

interface MDPositionItemData {
    line: number;
    column: number;
    offset: number;
}

interface MDPositionData {
    start: MDPositionItemData;
    end: MDPositionItemData;
}

export interface MDData {
    type: string;
    ordered?: boolean | null;
    start?: number | null;
    spread?: boolean | null;
    checked?: boolean | null;
    value?: string;
    align?: Array<string | null>;
    lang?: string | null;
    meta?: string | null;
    depth?: number | null;
    title?: string | null;
    url?: string | null;
    alt?: string | null;
    children?: Array<MDData | null>;
}

export interface ArticleMDData {
    success: number;
    data: {
        type?: string;
        children?: Array<MDData>;
        position?: MDPositionData;
    };
}

export function getArticle(id: string | string[]): Promise<AxiosResponse<ArticleMDData>> {
    return axios.get(`/api/articles/${id}`);
}
