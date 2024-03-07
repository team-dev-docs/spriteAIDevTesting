
  
  
  
  
---
# generateSprite index.js
## Imported Code Object

The generateSprite async function generates a sprite image and metadata using DALL-E 3 and GPT-4. It takes in a description prompt and options object as parameters. 

It prompts DALL-E 3 to generate a 1024x1024 PNG sprite image based on the description. It then converts the image to grayscale and base64 encodes it. 

It passes the base64 encoded image to GPT-4 to analyze and extract the frameWidth and frameHeight for using it as a sprite sheet.

It returns an object containing the GPT-4 extracted frame data as a JSON object and the base64 encoded sprite image.

If iterations option is passed, it will iterate and generate multiple sprites.


  
  
---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors async function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It initializes a JavaScript Set to store unique colors. The image is scanned pixel-by-pixel, and for each pixel that is not fully transparent, its RGBA values are converted to a single integer color value which is added to the Set. This avoids duplicate color values. Finally, the unique Set is converted to an Array and returned.


  
  