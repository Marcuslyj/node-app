console.log(process.argv)

import { getSum } from "./esm/lib.js"

console.log(getSum(1, 2))


// 监听输入
process.stdin.on('data', e=>{
  const action = e.toString().trim()
  console.log(action)
  if (action === 'kill') {
    process.exit()
  }
})