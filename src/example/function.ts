console.log("函数学习")

let add: (x: number, y: number) => number
add = (x: number, y: number): number => x + y  // 可以这样定义
add = (x, y) => x + y  // 也可以这样定义 因为上面定义了  所以下面可以省略掉

// 使用接口来描述一个函数
type IAdd = (x: number, y: number) => number
const sum: IAdd = (x, y) => x + y
console.log(sum(1, 2))

// 函数的参数
type AddFunc = (arg1: number, arg2: number, arg3?: number) => number
let addNumber: AddFunc
addNumber = (x: number, y: number, z:number =4) => x + y + z
console.log(addNumber(1,2))

// 剩余参数
const handleData = (arg1:number,...args:number[])=>{
    // todo
}

// 函数重载（只能用function 来定义） 跟Java 不一样  感觉很鸡肋  有啥用？
function actionData(x:string):string[]
function actionData(x:number):number[]
function actionData(x:any):any{
    if(typeof x ==='string'){
        return x.split('')
    }else{
        return x.toString().split('').map((item:any)=>Number(item))
    }
}
console.log(actionData("abc"))
console.log(actionData(33456))
// 下面这么写 就会存在问题
// actionData("dasjdioasd").map((item)=>{
    // return item.toFixed()
// })
