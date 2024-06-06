
---
# removeBackgroundColor /index.js
## Imported Code Object
This is an asynchronous function that removes a specified color from an image file. It takes the following parameters:

- `inputPath` (string): The file path of the input image.
- `outputPath` (string): The file path where the modified image will be saved.
- `targetColor` (string): The color (in CSS hex format) to be removed from the image.
- `colorThreshold` (optional, number, default: 0): The maximum color difference allowed before a pixel is considered to be the target color and made transparent.
- `options` (optional, object, default: {}): Additional options for the function.

The function loads the input image using the Jimp library, scans through each pixel, and if the pixel color difference from the target color is less than or equal to the specified threshold, it sets the alpha value (transparency) of that pixel to 0 (fully transparent). The modified image is then written to the specified output path.

---
# encodeImage /index.js
## Imported Code Object
This function takes an image file path as input and returns a Base64-encoded string representation of the image data. It reads the image file using the `fs` module and converts the binary data to a Base64 string.

---
# getUniqueColors /index.js
## Imported Code Object
This is an asynchronous function that retrieves a list of unique colors present in an image file. It takes the following parameters:

- `imagePath` (string): The file path of the input image.
- `options` (optional, object, default: {}): Additional options for the function.

The function loads the input image using the Jimp library, scans through each pixel, and adds the color integer value of non-transparent pixels to a `Set` data structure, effectively removing duplicates. Finally, it returns an array containing the unique color integer values.

---
# generateSprite /index.js
## Imported Code Object
This is an asynchronous function that generates a sprite sheet image using OpenAI's DALL-E 3 and GPT-4 models. It takes the following parameters:

- `description` (string): The description or prompt for the desired sprite sheet.
- `options` (optional, object): Additional options for the function, such as the number of iterations, image size, and whether to save the image file.

The function generates a sprite sheet image based on the provided description, processes the image (grayscale, base64 encoding), and uses GPT-4 to determine the appropriate frame width and frame height for a Phaser.js sprite sheet. If multiple iterations are requested, it repeats the process and returns an array of iteration results. Otherwise, it returns a single result object containing the frame dimensions and the image data URL.

---
# generateHouseAsset /index.js
## Imported Code Object
This is an asynchronous function that generates a 2D asset image for a Phaser.js game using OpenAI's DALL-E 3 model. It takes the following parameters:

- `description` (string): The description or prompt for the desired 2D asset.
- `options` (optional, object): Additional options for the function, such as the number of iterations and image size.

The function generates an asset image based on the provided description. If multiple iterations are requested, it repeats the process and returns an array of image URLs. Otherwise, it returns a single image URL or response object.
