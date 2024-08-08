from flask import Flask, request, jsonify, send_file
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the FSRCNN model
model_path = 'fsrcnn_model.h5'
model = load_model(model_path)

def preprocess_image(image, target_size):
    if image.mode != 'L':
        image = image.convert('L')  # Ensure the image is in grayscale
    image = image.resize(target_size, Image.BICUBIC)
    image = np.array(image)
    image = image.astype('float32') / 255.0
    image = np.expand_dims(image, axis=-1)  # Add channel dimension
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

def postprocess_image(image):
    image = np.squeeze(image, axis=0)  # Remove batch dimension
    image = np.squeeze(image, axis=-1)  # Remove channel dimension
    image = image * 255.0
    image = np.clip(image, 0, 255).astype('uint8')
    return Image.fromarray(image)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"})
    
    if file:
        original_image = Image.open(file.stream)
        preprocessed_image = preprocess_image(original_image, (224, 224))
        enhanced_image = model.predict(preprocessed_image)
        enhanced_image = postprocess_image(enhanced_image)
        
        # Save the enhanced image to a BytesIO object
        img_io = io.BytesIO()
        enhanced_image.save(img_io, 'JPEG')
        img_io.seek(0)
        
        return send_file(img_io, mimetype='image/jpeg')

if __name__ == "__main__":
    app.run(debug=True)
