
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, CameraOff } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CameraCaptureProps {
  onImageCaptured: (imageData: string) => void;
  isProcessing: boolean;
}

const CameraCapture = ({ onImageCaptured, isProcessing }: CameraCaptureProps) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isCameraAvailable, setIsCameraAvailable] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize the camera when the component mounts
  useEffect(() => {
    checkCameraAvailability();
    return () => {
      // Clean up when the component unmounts
      stopCamera();
    };
  }, []);

  const checkCameraAvailability = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasCamera = devices.some(device => device.kind === 'videoinput');
      setIsCameraAvailable(hasCamera);
      
      if (!hasCamera) {
        toast({
          title: "No camera detected",
          description: "Your device doesn't have a camera or permission was denied.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error checking camera:', error);
      setIsCameraAvailable(false);
      toast({
        title: "Camera error",
        description: "Unable to detect cameras on your device.",
        variant: "destructive"
      });
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "environment", // Use the back camera if available
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera access denied",
        description: "Please allow camera access to use this feature.",
        variant: "destructive"
      });
      setIsCameraAvailable(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => {
        track.stop();
      });
      
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame onto the canvas
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to data URL
      try {
        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        onImageCaptured(imageData);
        
        // Optional: Stop the camera after capturing
        // stopCamera();
        
        toast({
          title: "Image captured",
          description: "Processing your eye scan...",
        });
      } catch (error) {
        console.error('Error capturing image:', error);
        toast({
          title: "Capture failed",
          description: "Unable to capture image. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const toggleCamera = () => {
    if (isStreaming) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  return (
    <Card className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <CardContent className="p-4">
        {!isCameraAvailable ? (
          <div className="flex flex-col items-center justify-center p-6 bg-medical-gray-50 rounded-lg border border-medical-gray-200">
            <CameraOff className="h-12 w-12 text-medical-gray-400 mb-3" />
            <p className="text-medical-gray-700 font-medium text-center">
              Camera not available
            </p>
            <p className="text-medical-gray-500 text-sm text-center mt-1">
              Please ensure camera permissions are granted or use image upload instead.
            </p>
          </div>
        ) : (
          <>
            <div className="relative rounded-lg overflow-hidden bg-medical-gray-900 aspect-video">
              <video 
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover ${isStreaming ? 'block' : 'hidden'}`}
              />
              
              {!isStreaming && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-medical-gray-100">
                  <Camera className="h-12 w-12 text-medical-gray-400 mb-2" />
                  <p className="text-medical-gray-600 text-center">
                    Click the button below to activate camera
                  </p>
                </div>
              )}
              
              <canvas ref={canvasRef} className="hidden" />
            </div>
            
            <div className="mt-4 flex justify-center space-x-3">
              <Button
                onClick={toggleCamera}
                className={`px-4 py-2 flex items-center ${isStreaming ? 'bg-medical-red-500 hover:bg-medical-red-600' : 'bg-medical-blue-500 hover:bg-medical-blue-600'}`}
                disabled={isProcessing}
              >
                {isStreaming ? (
                  <>
                    <CameraOff className="mr-2 h-4 w-4" />
                    Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="mr-2 h-4 w-4" />
                    Start Camera
                  </>
                )}
              </Button>
              
              {isStreaming && (
                <Button
                  onClick={captureImage}
                  className="bg-medical-green-500 hover:bg-medical-green-600 text-white px-4 py-2"
                  disabled={isProcessing}
                >
                  Capture & Analyze
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CameraCapture;
