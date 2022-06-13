/**
 * 深拷贝
 * @return new
 */
declare const deepClone: (obj: Array<unknown> | Record<string, any>) => any;

declare type throttleFn = (...args: unknown[]) => void;
/**
 * 节流
 * @param fn 节流函数
 * @param delay 执行间隔
 * @param context this
 * @param args 参数
 * @returns void
 */
declare function throttle(fn: throttleFn, delay: number | undefined, context: any, ...args: any): (...fnArgs: any) => void;

export { deepClone, throttle };
