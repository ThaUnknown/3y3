# 3y3
Hide text in plain sight, using invisible characters.

Usage:
```js
import { encode, decode, detect } from '3y3'

const invisibleText = 'hello ' + encode('world!') // looks like "hello" when rendered, "world!" is invisible

const fullText = decode(invisibleText)

console.log(fullText === 'hello world!') // true
console.log(detect(invisibleText)) // true
console.log(detect('normal text')) // false
```

# Credit
Credit goes to https://synthetic.garden/3y3.htm

Here is the message left by the dev:
```
Made by Twilight Sparkle (@yourcompanionAI).

Please do not reimplement without crediting me!
I know the method is simple... but I'm the one who did it first!
Let me hang out on your credits list! 
```
