import { sprite }  from "./index.js";



const main = async function() {
    //whatever
    const result = await sprite.generateSprite("a robot samurai cat", {save: true})
    console.log('this is the finished result o yeah', result)
}

main()
