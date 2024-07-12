from flask import Flask, request, send_file
import numpy as np
import cv2
import io
from PIL import Image
import tensorflow as tf

app = Flask(__name__)

# Load the pre-trained Mask R-CNN model
# This is a placeholder for the actual model
model = tf.keras.applications.MobileNetV2(weights='imagenet')

@app.route('/extract-dress', methods=['POST'])
def extract_dress():
    if 'image' not in request.files:
        return "No image provided", 400

    image_file = request.files['image']
    image = Image.open(image_file)
    image = np.array(image)

    # Preprocess the image for the model
    image_resized = cv2.resize(image, (224, 224))
    image_resized = np.expand_dims(image_resized, axis=0)

    # Predict the masks
    predictions = model.predict(image_resized)
    # Assuming predictions contain the mask for the dress

    # Process the predictions to extract the dress
    # (This is a simplified example, you need a proper mask processing here)
    mask = predictions[0] > 0.5  # Simplified mask thresholding
    dress = np.zeros_like(image)
    dress[mask] = image[mask]

    # Convert the dress image to a format suitable for sending as response
    dress_image = Image.fromarray(dress)
    byte_arr = io.BytesIO()
    dress_image.save(byte_arr, format='PNG')
    byte_arr.seek(0)

    return send_file(byte_arr, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
