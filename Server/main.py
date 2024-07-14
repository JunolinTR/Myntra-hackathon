import requests
from segment import segment_clothing
from PIL import Image
from io import BytesIO
import os

def process_image(url,type):
  image_url = url
  output_dir = r"D:/Myntra/Client/src/output"

  # Download the image
  response = requests.get(image_url)
  if response.status_code == 200:
      # Open the image from bytes using PIL
      image = Image.open(BytesIO(response.content))
      
      # Perform segmentation
      result = segment_clothing(img=image, clothes=type)
      
      # Ensure output directory exists
      os.makedirs(output_dir, exist_ok=True)
      
      # Save the segmented image
      output_path = os.path.join(output_dir, f"{type}.png")
      result.save(output_path)
      print(f"Segmented image saved to {output_path}")
  else:
      print(f"Failed to download image. Status code: {response.status_code}")
