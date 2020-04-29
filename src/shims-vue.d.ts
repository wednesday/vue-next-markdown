declare module '*.vue' {
    import { Component } from 'vue';
    const _default: Component;
    export default _default;
}

// fix typescript paintWorklet in css
interface CSS {
    paintWorklet: CSSPaintWorklet;
}

interface CSSPaintWorklet {
    addModule(path: string): void;
}
