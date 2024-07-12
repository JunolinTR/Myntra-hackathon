import axios from 'axios';

const EXTRACT_DRESS_API_URL = 'http://localhost:5000/extract-dress';

export const extractDress = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(EXTRACT_DRESS_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    });

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Error extracting dress:', error);
    return null;
  }
};
