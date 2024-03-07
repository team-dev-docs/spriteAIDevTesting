
  
  
---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors async function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It initializes a JavaScript Set to store unique colors. The image is scanned pixel-by-pixel and for each pixel, the red, green, blue and alpha values are extracted. If the pixel is not fully transparent (alpha != 0), the color values are converted to an integer representation using Jimp's rgbaToInt. This integer color value is added to the Set, which only stores unique values. Finally, the Set is converted to an Array and returned, containing the unique colors present in the image.


  
  