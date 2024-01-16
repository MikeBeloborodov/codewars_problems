export const zero = (func?: Function) => (func ? func(0) : 0);
export const one = (func?: Function) => (func ? func(1) : 1);
export const two = (func?: Function) => (func ? func(2) : 2);
export const three = (func?: Function) => (func ? func(3) : 3);
export const four = (func?: Function) => (func ? func(4) : 4);
export const five = (func?: Function) => (func ? func(5) : 5);
export const six = (func?: Function) => (func ? func(6) : 6);
export const seven = (func?: Function) => (func ? func(7) : 7);
export const eight = (func?: Function) => (func ? func(8) : 8);
export const nine = (func?: Function) => (func ? func(9) : 9);

export const plus = (b: number) => (a: number) => a + b;
export const minus = (b: number) => (a: number) => a - b;
export const times = (b: number) => (a: number) => a * b;
export const dividedBy = (b: number) => (a: number) => Math.floor(a / b);
