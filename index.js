console.log(process.argv)

import path from 'path'
import { fileURLToPath } from 'url'
import * as glob from "glob"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(import.meta.url)
console.log(__filename)
console.log(__dirname)

// 阻塞
console.time('glob')
const result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')
console.log(result.filter(url => url.indexOf('node-app/dist') >= 0))

// 非阻塞
glob(__dirname + '/**/*', (res) => { })


