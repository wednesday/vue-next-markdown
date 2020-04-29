import * as SimplexNoise from 'simplex-noise';
const sim = new SimplexNoise(() => 1);

declare function registerPaint(name: string, func: any): Function;

class Wave {
    static get inputProperties(): Array<string> {
        return ['--animation-tick'];
    }

    paint(ctx: any, geom: any, properties: any): void {
        const tick = Number(properties.get('--animation-tick'));

        this.drawWave(ctx, geom, 'rgba(255, 255, 255, 0.4)', 0.004, tick, 15);
        this.drawWave(ctx, geom, 'rgba(255, 255, 255, 0.5)', 0.006, tick, 12);
    }

    /**
     * 绘制波纹
     */
    drawWave(ctx: any, geom: any, fillColor: string, ratio: number, tick: number, amp: number): void {
        const { width, height } = geom;
        const initY = 100;
        const speedT = tick * ratio;

        ctx.beginPath();
        for (let x = 0, speedX = 0; x <= width; x++) {
            speedX += ratio * 1;
            const y = initY + sim.noise2D(speedX, speedT) * amp;
            ctx[x === 0 ? 'moveTo' : 'lineTo'](x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, initY + sim.noise2D(0, speedT) * amp);
        ctx.closePath();

        ctx.fillStyle = fillColor;
        ctx.fill();
    }
}
try {
    registerPaint('wave', Wave);
} catch (e) {}
