// 不二类型
let bool: boolean = false
let isTRue: boolean
isTRue = true
// 数值类型
let num: number = 123
console.log(num)
// 数组类型
let arr: number[] = [1, 2, 3, 4]
let arr2: number[] = [1, 2, 3, 4, 5]
let arr3: (string | number)[] = [1, "dasdsa"]
// 元祖类型  固定长度 固定类型 一一对应
let tuple: [string, number, boolean] = ["jiakewei", 23, true]
// 枚举类型 可以自动定义
enum Roles {
    SUPER_ADMIN = 5,
    ADMIN,
    USER
}
console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER)
console.log(Roles[5])

// any 类型 任意值
let value: any = [23, 45]

// void 类型
const get = (text: string): void => {
    console.log(text)
}
// null undefined
let u: undefined
let n: null

// never 类型   报错或者死循环
const throwError = (message: string): never => {
    throw Error(message)
};
const sixunhuan = (): never => {
    while (true) { }
}

// object
function getObject(obj: object): void {
    console.log(obj)
}
getObject({ name: "jiakewei" })

// 类型断言  将某种类型自动转换一下
const getLength = (target: string | number): number => {
    if ((target as string).length || (target as string).length === 0) {
        return (target as string).length
    }else {
        return target.toString.length
    }
}