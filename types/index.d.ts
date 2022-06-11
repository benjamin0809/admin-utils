/**
 * 深拷贝
 * @return new
 */
export declare const deepClone: (obj: Array<unknown> | object) => any;

export declare const throttle: (fn: throttleFn, delay: number | undefined, context: any, ...args: any) => (...fnArgs: any) => void;

declare type throttleFn = (...args: unknown[]) => void;

export { }
