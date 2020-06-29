interface INameInfo{
    firstName:string,
    lastName:string
}
interface IRedis{
    port:number,
    host:string,
    password?:string,   // 可选参数
    [options:string]:any  // 索引签名可以扩展参数
}
interface IPipleline{
    readonly length:number
    readonly isCluster: boolean;
    readonly numbers: string[]
}
const getFullName=({firstName,lastName}:INameInfo): string=>{
    return `${firstName}${lastName}`
}
const result = getFullName({firstName:"jiakewei",lastName:"wangxindeng",sex:"男"} as INameInfo)  // 扩展参数

// 数组只读属性
interface IArray{
    0:number,
    readonly 1:string
}
let array:IArray = [1,"JIAKEWEI"]
// array[1] ="heloo"  报错 因为是只读属性

// 使用接口来描述一个函数

type IAddFun = (num1:number,num2:number) =>number

// 使用索引签名扩展函数参数的定义

interface IRoleDic{
    [name:string]:string
}
const role2:IRoleDic={
    a:"jiakewei"
}

// 接口的继承
interface IA{
    name:string
}
interface IB extends IA{
    age:number
}
const user:IB ={
    age:20,
    name:"jiakewei"
}

// 混合类型  需要接续掌握----------------------------------------------------------------------------
interface ICounter{
    ():void,
    count:number
}
const getCounter = ():ICounter=>{
    const c= ()=>{
        c.count++
    }
    c.count=0
    return c
}
const counter:ICounter = getCounter()
counter()
console.log(counter.count)