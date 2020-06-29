// Symbol 独一无二
const s =Symbol()
const s2 =Symbol("jiakewei")
console.log(s)

const s3=Symbol('name')
const info={
    [s3]:"jiakewei",
    age:20,
    sex:'男'
}
console.log(info)
info[s3]="wangxindeng" // info.s3 会报错   只能这样获取
console.log(info)
// 下面4中方式无法获取symboll
for (const key in info) {
    console.log(key)
}
console.log(Object.keys(info))
console.log(Object.getOwnPropertyNames(info))
console.log(JSON.stringify)
// 那么如何获取呢
console.log(Object.getOwnPropertySymbols(info))
// es6获取
console.log(Reflect.ownKeys(info))
// Symbol 的两个方法  symbol.for
const s7 = Symbol('zhangsan')
const s8 = Symbol('zhangsan')
// console.log(s7 === s8)  false
const s9 = Symbol.for('zhangsan')
const s10 = Symbol.for('zhangsan')
// console.log(s9 === s10) 相等  会在全局范围内搜索  有的话就直接饮用