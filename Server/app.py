import requests
from segment import segment_clothing
from PIL import Image
from PIL import Image
from io import BytesIO
response = requests.get('https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30021444/2024/6/22/d2f8396a-a450-452e-aa4f-bbf26c21e6621719069648275TheRoadsterLifestyleCoRoundNeckPullover1.jpg')
if response.status_code == 200:
    # Open the image from bytes using PIL
    image = Image.open(BytesIO(response.content))
    
    # Perform segmentation or any other processing here
    result = segment_clothing(img=image, clothes=["Upper-clothes"])
    
    # Save the segmented image to a local file
    result.save('segmented.png')




