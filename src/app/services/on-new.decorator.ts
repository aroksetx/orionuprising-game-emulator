export type FilteredPropertyNames<T, TProp> = {
    [K in keyof T]: T[K] extends TProp ? K : never;
}[Extract<keyof T, string>];
type NewStateHandler<TState> = (va?: TState, oldVal?: TState, firstValue?: boolean) => void;


export function OnNew<TClass, T = any>(handlerGetter: FilteredPropertyNames<TClass, NewStateHandler<T>>): Function {
    return (target: Function, property: string) => {
        let innerProperty: string = `%${property}`;
        let isNotFirstValueProperty = `%${property}_is_FirstValue`;

        Object.defineProperty(target, innerProperty, <PropertyDescriptor>{
            enumerable: false,
            configurable: false,
            writable: true,
        });
        Object.defineProperty(target, isNotFirstValueProperty, <PropertyDescriptor>{
            enumerable: false,
            configurable: false,
            writable: true,
        });

        Object.defineProperty(target, property, <PropertyDescriptor>{
            enumerable: true,
            configurable: false,
            get: function (this: TClass): T {
                return this[innerProperty];
            },
            set: function (this: TClass, val: T): void {
                if (this[innerProperty] === val) {
                    return;
                }

                let oldVal = this[innerProperty];
                this[innerProperty] = val;
                let firstValue = this[isNotFirstValueProperty] !== true;
                (<any>this[handlerGetter])(val, oldVal, firstValue);
                this[isNotFirstValueProperty] = true;
            },
        });
    };
}
