import { sprite }  from "./index.js";



const main = async function() {
    const result = await sprite.generateSprite("a robot samurai cat", {save: true})
    console.log('this is the finished result', result)
}

main()