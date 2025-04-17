
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeDisease } from "@/lib/ml-model";
import { DiseaseInfo, getDiseaseInfo } from "@/lib/diseases-data";

interface ResultsDisplayProps {
  isVisible: boolean;
  disease: EyeDisease | null;
  confidence: number;
}

const ResultsDisplay = ({ isVisible, disease, confidence }: ResultsDisplayProps) => {
  if (!isVisible || !disease) return null;

  const diseaseInfo: DiseaseInfo = getDiseaseInfo(disease);
  const confidencePercentage = Math.round(confidence * 100);

  // Determine severity based on confidence
  let severity: "low" | "medium" | "high" = "low";
  if (confidence >= 0.8) severity = "high";
  else if (confidence >= 0.65) severity = "medium";

  // Determine badge color based on disease and severity
  let badgeClass = "bg-green-100 text-green-800";
  if (disease !== "Normal") {
    badgeClass = severity === "high" 
      ? "bg-medical-red-100 text-medical-red-800" 
      : severity === "medium" 
        ? "bg-amber-100 text-amber-800" 
        : "bg-blue-100 text-blue-800";
  }

  return (
    <Card className="w-full bg-white shadow-md border-t-4 border-medical-blue-500 rounded-xl overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold text-medical-gray-800">{diseaseInfo.name}</CardTitle>
            <CardDescription className="text-medical-gray-500 mt-1">
              Diagnostic Analysis Results
            </CardDescription>
          </div>
          <Badge className={`${badgeClass} text-sm font-medium px-3 py-1 rounded-full`}>
            {disease === "Normal" ? "Healthy" : `${confidencePercentage}% Confidence`}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-medical-gray-700 mb-4">{diseaseInfo.description}</p>
        
        <Tabs defaultValue="symptoms" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="treatments">Treatments</TabsTrigger>
            <TabsTrigger value="prevention">Prevention</TabsTrigger>
            <TabsTrigger value="risk-factors">Risk Factors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="symptoms" className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {diseaseInfo.symptoms.map((symptom, index) => (
                <li key={index} className="text-medical-gray-700">{symptom}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="treatments" className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {diseaseInfo.treatments.map((treatment, index) => (
                <li key={index} className="text-medical-gray-700">{treatment}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="prevention" className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {diseaseInfo.prevention.map((item, index) => (
                <li key={index} className="text-medical-gray-700">{item}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="risk-factors" className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {diseaseInfo.riskFactors.map((factor, index) => (
                <li key={index} className="text-medical-gray-700">{factor}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        {disease !== "Normal" && (
          <div className="mt-6 p-4 rounded-lg bg-medical-blue-50 border border-medical-blue-200">
            <h4 className="font-medium text-medical-blue-800 mb-2">Important Note</h4>
            <p className="text-medical-gray-700 text-sm">
              This is an AI-assisted analysis and should not replace professional medical advice. 
              Please consult with an ophthalmologist for proper diagnosis and treatment.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
