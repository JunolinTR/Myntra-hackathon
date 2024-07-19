from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from main import process_image

app = Flask(__name__, static_folder='D:/Coding/Myntra/Client/src/output')
CORS(app)  # This will enable CORS for all routes

# Route to serve static files from the output directory
@app.route('/output/<path:filename>')
def serve_file(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/segment', methods=['POST'])
def segment():
    data = request.get_json()
    image_url = data['image_url']
    cloth_type = data['cloth_type']
    output_path = process_image(image_url, cloth_type)
    if output_path:
        relative_path = os.path.relpath(output_path, 'D:/Coding/Myntra/Client/src')
        return jsonify({"segmented_image_url": relative_path})
    else:
        return jsonify({"error": "Image processing failed"}), 500

["Hat", "Upper-clothes", "Skirt", "Pants", "Dress", "Belt", "Left-shoe", "Right-shoe", "Scarf"]

#     output_dir = os.path.join("Server", "output")
    
#     response = requests.get(image_url)
#     if response.status_code == 200:
#         # Open the image from bytes using PIL
#         image = Image.open(BytesIO(response.content))
        
#         # Perform segmentation
#         result = segment_clothing(img=image, clothes=["Upper-clothes"])

#         output_dir = os.path.join("Server", "output")
#         os.makedirs(output_dir, exist_ok=True)

#         # Create the output path with the cloth_type in the filename
#         output_path = os.path.join(output_dir, "Uppercloth.png")
#         result.save(output_path)
        
#     else:
#         return jsonify({"error": "Failed to download image"}), 500

# # def download_image(url):
# #     try:
# #         response = requests.get(url)
# #         response.raise_for_status()  # Check if the request was successful
# #         return Image.open(BytesIO(response.content))
# #     except requests.exceptions.RequestException as e:
# #         print(f"Error downloading the image: {e}")
# #         return None

if __name__ == '__main__':
    app.run(debug=True)
