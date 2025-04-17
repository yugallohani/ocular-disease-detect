
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface ImageUploadProps {
  onImageSelected: (imageData: string) => void;
  isProcessing: boolean;
}

const ImageUpload = ({ onImageSelected, isProcessing }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreviewUrl(result);
      onImageSelected(result);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        onImageSelected(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <div 
        className="p-6 flex flex-col items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          disabled={isProcessing}
        />
        
        {previewUrl ? (
          <div className="relative w-full max-w-md">
            <img 
              src={previewUrl} 
              alt="Eye scan preview" 
              className="w-full h-auto rounded-lg object-cover border-2 border-medical-blue-300"
            />
            <Button 
              onClick={triggerFileInput} 
              className="mt-4 w-full bg-medical-blue-500 hover:bg-medical-blue-600 text-white"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Change Image"}
            </Button>
          </div>
        ) : (
          <div 
            onClick={triggerFileInput}
            className="border-2 border-dashed border-medical-blue-300 rounded-lg p-12 w-full max-w-md cursor-pointer hover:bg-medical-blue-50 transition-colors"
          >
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-medical-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-medical-blue-600 font-medium text-lg mb-2">Upload Eye Scan Image</p>
              <p className="text-medical-gray-500 text-sm text-center">
                Drag and drop your image here, or click to select a file
              </p>
              <p className="text-medical-gray-400 text-xs mt-2">
                Supported formats: JPEG, PNG, WebP
              </p>
              <p className="text-medical-gray-400 text-xs">
                Maximum file size: 5MB
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageUpload;
