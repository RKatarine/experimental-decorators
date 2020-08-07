function getParamTypes<T>(constructor: T): undefined | any[] {
    return Reflect.getOwnMetadata('design:paramtypes', constructor);
}

export function LookupTypes<T>(target: T): T {
    if (typeof target !== 'function') {
        throw new TypeError('Конструктор должен быть функцией');
    }

    const types = getParamTypes(target);
    console.log('Types for constructor', types);
    types?.map((type, idx) => console.log(`type-${idx}:`, type));

    return target;
}

export function logType(target: any, key: string) {
    const t = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${t}`);
}