
  
  

---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It then iterates through every pixel in the image, extracts the red, green, blue and alpha channel values for each pixel, converts those values to a single integer color representation, and adds that integer to a Set. This Set will only contain unique color values. Once all pixels have been processed, the Set is converted to an Array and returned, giving a list of all the unique colors present in the input image.


  
  