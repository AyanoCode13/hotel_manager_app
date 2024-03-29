import fs from "fs";

/*

  The following component contains functions that are used to handle image data.
  The functions are imported in the model_handler.

*/

export const generateImageData = async (image, imageType, id, path) => {
  image !== null &&
    (await image.mv(
      process.env.IMAGES_PATH +
        path +
        "/" +
        id +
        "/" +
        imageType +
        "/" +
        image.name
    ));
  return image !== null
    ? process.env.IMAGES_URL +
        path +
        "/" +
        id +
        "/" +
        imageType +
        "/" +
        image.name
    : process.env.NO_IMAGES_URL;
};

export const deleteImageData = (path, id) => {
  fs.rmSync(process.env.IMAGES_PATH + path + "/" + id + "/thumbnail", {
    recursive: true,
    force: true,
  });
  fs.rmSync(process.env.IMAGES_PATH + path + "/" + id + "/gallery", {
    recursive: true,
    force: true,
  });
};
