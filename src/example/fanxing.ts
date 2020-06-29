// demo1 小试牛刀
const getArray = <T>(value:T,times:number=5):T[]=>{
    return new Array(times).fill(value)
}
console.log(getArray<string>("DJSAD",10).map((item)=>item+1))

// demo2 稍微晋升一下

const getArray2=<T,U>(params1:T,params2:U,times:number):[T,U][]=>{
    return new Array(times).fill([params1,params2])
}
console.log(getArray2<number,string>(1,"dasd",4))

// 利用泛型定义函数