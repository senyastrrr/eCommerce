import axios from 'axios';
import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const asset = (path) => `/storage/images/${path}`;

const ImageUpload = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post(window.location.origin + '/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      onChange(response.data.image);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="sm">
                <DeleteOutlineOutlinedIcon className="h-4 w-4" />
              </Button>
            </div>
            <img
              className="object-cover"
              alt="Image"
              src={url ? asset(url) : asset("default-avatar.jpg")}
            />
          </div>
        ))}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <Button
          type="button"
          disabled={!selectedFile || disabled}
          variant="secondary"
          onClick={handleUpload}
        >
          <AddPhotoAlternateOutlinedIcon className="h-4 w-4 mr-2" />
          Upload an Image
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
