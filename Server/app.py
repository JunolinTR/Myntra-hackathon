from segment import segment_clothing, batch_segment_clothing
from PIL import Image

# Single image segmentation
image_path = 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25685654/2023/10/30/c49dfada-18a5-4189-b080-f4e946d67d1a1698669606431COTLANDFASHIONPinkGeometricPrintCottonTop1.jpg'
output_path = 'segmented.png'

img = Image.open(image_path)
result = segment_clothing(img=img)
result.save(output_path)
#["Hat", "Upper-clothes", "Skirt", "Pants", "Dress", "Belt", "Left-shoe", "Right-shoe", "Scarf"]

# Explicitly specifying clothes to segment
result = segment_clothing(img=img, clothes=["Hat", "Upper-clothes"])
result.save('segmented_specific.png')

# Batch segmentation
batch_segment_clothing(img_dir="images", out_dir="output", clothes=["Hat", "Upper-clothes", "Skirt", "Pants", "Dress", "Belt", "Left-shoe", "Right-shoe", "Scarf"])





