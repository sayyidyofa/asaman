export function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map((n) => o[n]);
}

export type UnwrappedPromiseType <T extends (...args: any) => any> =
T extends (...args: any) => Promise<infer U> ? U :
    T extends (...args: any) => infer U ? U : any