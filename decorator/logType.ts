type Type<T> = {
    new(...args: any[]): T;
};

function getParamTypes<T>(constructor: T): undefined | any[] {
    return Reflect.getOwnMetadata('design:paramtypes', constructor);
}

export function LookupTypes<T>(target: T): T {
    if (typeof target !== 'function') {
        throw new TypeError('Конструктор должен быть функцией');
    }

    console.log('target------------------------>',target);
    const types = getParamTypes(target);
    console.log('------------------------>',types);
    types?.map((type) => console.log('------------------------>',type));

    return target;
}

export function logType(target: any, key: string) {
    console.log("",target);
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(`${key} type: ${t}`);
}