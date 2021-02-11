from drawbot_skia.drawbot import *
import globals


def draw(a, b, id):
    print("Drawing rectangle")
    newDrawing()
    w = a + globals.padding * 2
    h = b + globals.padding * 2
    size(w, h)
    fill(0, 0, 0, 1)
    rect(globals.padding, globals.padding, a, b)
    saveImage(globals.output_path + str(id) + "_rectangle" + ".svg")