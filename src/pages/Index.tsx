import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUpload from "@/components/ImageUpload";
import CameraCapture from "@/components/CameraCapture";
import ResultsDisplay from "@/components/ResultsDisplay";
import DiseasesInfoSection from "@/components/DiseasesInfoSection";
import { EyeDisease, detectEyeDisease, initModel } from "@/lib/ml-model";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<{ disease: EyeDisease | null, confidence: number }>({
    disease: null,
    confidence: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("upload");

  useEffect(() => {
    // Initialize the ML model when the component mounts
    const loadModel = async () => {
      try {
        await initModel();
        setIsModelLoading(false);
      } catch (error) {
        console.error("Failed to load model:", error);
        toast({
          title: "Error loading AI model",
          description: "Please try again later or contact support.",
          variant: "destructive"
        });
      }
    };

    loadModel();
  }, []);

  const handleImageSelected = (imageData: string) => {
    setSelectedImage(imageData);
    // Reset results when a new image is selected
    setShowResults(false);
    setResults({ disease: null, confidence: 0 });
  };

  const handleAnalyzeClick = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an eye scan image to analyze.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setShowResults(false);

    try {
      // Process the image with our ML model
      const result = await detectEyeDisease(selectedImage);
      
      // Short delay to simulate processing (remove in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResults({
        disease: result.disease,
        confidence: result.confidence
      });
      setShowResults(true);
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast({
        title: "Error analyzing image",
        description: "There was a problem processing your image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCameraCaptured = async (imageData: string) => {
    setSelectedImage(imageData);
    setShowResults(false);
    setResults({ disease: null, confidence: 0 });
    
    // Automatically analyze the captured image
    setIsProcessing(true);

    try {
      // Process the image with our ML model
      const result = await detectEyeDisease(imageData);
      
      // Short delay to simulate processing (remove in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResults({
        disease: result.disease,
        confidence: result.confidence
      });
      setShowResults(true);
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast({
        title: "Error analyzing image",
        description: "There was a problem processing your image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-medical-gray-100">
      {/* Header */}
      <header className="bg-medical-blue-600 text-white py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Ocular Disease Detection
          </h1>
          <p className="mt-2 text-medical-blue-100 max-w-2xl">
            Advanced AI-powered tool for detecting and classifying eye diseases from retinal images
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-medical-blue-500 to-medical-blue-700 text-white border-none">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Early Detection Saves Sight</h2>
                <p className="text-medical-blue-100 mb-4">
                  Our AI system analyzes retinal scan images to detect potential eye diseases with high accuracy, 
                  helping healthcare professionals make informed decisions faster.
                </p>
                <ul className="list-disc list-inside text-medical-blue-100 space-y-2 mb-6">
                  <li>Detects multiple eye conditions</li>
                  <li>Provides treatment recommendations</li>
                  <li>Medical-grade accuracy</li>
                  <li>Secure and private analysis</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Eye Examination" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-medical-gray-800 mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-medical-blue-100 text-medical-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-medical-gray-800 mb-2">1. Upload Image</h3>
                <p className="text-medical-gray-600">
                  Upload a high-quality retinal scan image. For best results, use clear, well-focused images.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-medical-blue-100 text-medical-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-medical-gray-800 mb-2">2. AI Analysis</h3>
                <p className="text-medical-gray-600">
                  Our advanced AI model analyzes the image to detect signs of eye diseases with high precision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-medical-blue-100 text-medical-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-medical-gray-800 mb-2">3. Get Results</h3>
                <p className="text-medical-gray-600">
                  Receive detailed results including disease classification, confidence level, and treatment suggestions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Image Upload & Analysis Section */}
        <section>
          <h2 className="text-2xl font-bold text-medical-gray-800 mb-6">Analyze Eye Scan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-medical-gray-800 mb-4">Capture or Upload Image</h3>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload Image</TabsTrigger>
                  <TabsTrigger value="camera">Use Camera</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="mt-4">
                  <ImageUpload onImageSelected={handleImageSelected} isProcessing={isProcessing} />
                  
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleAnalyzeClick} 
                      className="bg-medical-blue-600 hover:bg-medical-blue-700 text-white px-8 py-2 text-lg"
                      disabled={isProcessing || !selectedImage || isModelLoading}
                    >
                      {isProcessing ? "Analyzing..." : isModelLoading ? "Loading AI Model..." : "Analyze Image"}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="camera" className="mt-4">
                  <CameraCapture onImageCaptured={handleCameraCaptured} isProcessing={isProcessing} />
                </TabsContent>
              </Tabs>

              {!isModelLoading && (
                <div className="mt-4 text-center text-medical-gray-500 text-sm">
                  <p>AI model loaded and ready for analysis</p>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-medical-gray-800 mb-4">Analysis Results</h3>
              
              {selectedImage && !showResults && !isProcessing && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-medical-gray-700 mb-2">Selected Image:</h4>
                  <div className="rounded-lg overflow-hidden border border-medical-gray-200">
                    <img 
                      src={selectedImage} 
                      alt="Selected eye scan" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              )}
              
              <ResultsDisplay 
                isVisible={showResults} 
                disease={results.disease} 
                confidence={results.confidence}
              />
              
              {!showResults && !isProcessing && !selectedImage && (
                <Card className="bg-medical-gray-50 border border-medical-gray-200">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-64">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-medical-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <h4 className="text-xl font-medium text-medical-gray-700 mb-2">No Results Yet</h4>
                    <p className="text-medical-gray-500">
                      {activeTab === "upload" ? "Upload an eye scan image and click 'Analyze Image'" : "Use your camera to capture an eye scan"}
                    </p>
                  </CardContent>
                </Card>
              )}
              
              {isProcessing && (
                <Card className="bg-white border border-medical-gray-200">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-medical-blue-600 mb-4"></div>
                    <h4 className="text-xl font-medium text-medical-gray-700 mb-2">Analyzing Image</h4>
                    <p className="text-medical-gray-500">
                      Our AI is examining the eye scan for potential diseases. This may take a moment...
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Diseases Info Section */}
        <DiseasesInfoSection />

        {/* Disclaimer */}
        <section className="mt-12 p-6 bg-medical-gray-50 rounded-lg border border-medical-gray-200">
          <h3 className="text-lg font-medium text-medical-gray-800 mb-2">Important Medical Disclaimer</h3>
          <p className="text-medical-gray-600 text-sm">
            This tool is designed as a screening aid and should not replace professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your ophthalmologist or other qualified health provider with any questions you may have regarding a medical condition. 
            Never disregard professional medical advice or delay in seeking it because of something you have read or seen on this website.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-medical-gray-800 text-medical-gray-300 py-8 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Ocular Disease Detection</h3>
              <p className="mb-4 text-sm">
                Advanced AI-powered tool for detecting and classifying eye diseases from retinal images.
                Early detection can significantly improve treatment outcomes for many eye conditions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Common Eye Diseases</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-6 bg-medical-gray-700" />
          <div className="text-sm text-medical-gray-400">
            &copy; {new Date().getFullYear()} Ocular Disease Detection. All rights reserved.
            <p className="mt-1">This is a demonstration application and not intended for actual medical use.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
