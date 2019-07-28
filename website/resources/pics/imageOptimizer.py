import os, sys
from PIL import Image

def rmMeta(image):
        data = list(image.getdata())
        width, height = image.size
        image_without_exif = Image.new(image.mode, (width, height))
        image_without_exif.putdata(data)

        bound_size = 1920
        scale_factor = max(width, height)/bound_size
        if scale_factor > 1:
            newSize = (int(width/scale_factor), int(height/scale_factor))
            imresize=image_without_exif.resize(newSize)
            return imresize
        else:
            return image_without_exif

def main():
        imList = []
        dirList = os.listdir()
        dirName = os.getcwd()

        for f in dirList:
            filepath = dirName+"/"+f

            if os.path.isfile(filepath):
                try:
                    image = Image.open(filepath)
                    imRmMeta = rmMeta(image)
                    imRmMeta.save(dirName+"/"+f)

                except OSError:
                    continue

            print("Saved: " + f)


if __name__ == "__main__":
    main()
