
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiseasesInfoSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-medical-gray-800 mb-6">Common Eye Diseases</h2>
      
      <Tabs defaultValue="diabetic-retinopathy" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="diabetic-retinopathy">Diabetic Retinopathy</TabsTrigger>
          <TabsTrigger value="glaucoma">Glaucoma</TabsTrigger>
          <TabsTrigger value="cataract">Cataract</TabsTrigger>
          <TabsTrigger value="amd">Macular Degeneration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="diabetic-retinopathy">
          <Card>
            <CardHeader>
              <CardTitle>Diabetic Retinopathy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-medical-gray-700 mb-4">
                    Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to 
                    the blood vessels in the light-sensitive tissue at the back of the eye (retina).
                  </p>
                  <p className="text-medical-gray-700 mb-4">
                    At first, diabetic retinopathy might cause no symptoms or only mild vision problems. But it can 
                    eventually lead to blindness.
                  </p>
                  <h3 className="font-medium text-medical-gray-800 mt-4 mb-2">Key Symptoms:</h3>
                  <ul className="list-disc pl-5 text-medical-gray-700 space-y-1 mb-4">
                    <li>Spots or dark strings floating in your vision (floaters)</li>
                    <li>Blurred vision</li>
                    <li>Fluctuating vision</li>
                    <li>Dark or empty areas in your vision</li>
                    <li>Vision loss</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Eye with Diabetic Retinopathy" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-medical-gray-500 italic">
                    Image: Retinal scan showing signs of diabetic retinopathy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="glaucoma">
          <Card>
            <CardHeader>
              <CardTitle>Glaucoma</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-medical-gray-700 mb-4">
                    Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally 
                    high pressure in your eye. This damage can lead to permanent vision loss if not treated early.
                  </p>
                  <p className="text-medical-gray-700 mb-4">
                    Glaucoma is one of the leading causes of blindness for people over the age of 60, though it 
                    can occur at any age.
                  </p>
                  <h3 className="font-medium text-medical-gray-800 mt-4 mb-2">Key Symptoms:</h3>
                  <ul className="list-disc pl-5 text-medical-gray-700 space-y-1 mb-4">
                    <li>Patchy blind spots in peripheral or central vision</li>
                    <li>Tunnel vision (in advanced stages)</li>
                    <li>Severe headache</li>
                    <li>Eye pain</li>
                    <li>Blurred vision</li>
                    <li>Halos around lights</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1577758936663-e6989b8ffbca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Eye with Glaucoma" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-medical-gray-500 italic">
                    Image: Advanced imaging showing glaucoma damage to the optic nerve
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cataract">
          <Card>
            <CardHeader>
              <CardTitle>Cataract</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-medical-gray-700 mb-4">
                    A cataract is a clouding of the lens in the eye which leads to a decrease in vision. Cataracts 
                    often develop slowly and can affect one or both eyes.
                  </p>
                  <p className="text-medical-gray-700 mb-4">
                    Cataracts are most commonly due to aging but may also occur due to trauma, radiation exposure, 
                    be present from birth, or occur following eye surgery for other problems.
                  </p>
                  <h3 className="font-medium text-medical-gray-800 mt-4 mb-2">Key Symptoms:</h3>
                  <ul className="list-disc pl-5 text-medical-gray-700 space-y-1 mb-4">
                    <li>Clouded, blurred or dim vision</li>
                    <li>Increasing difficulty with vision at night</li>
                    <li>Sensitivity to light and glare</li>
                    <li>Seeing "halos" around lights</li>
                    <li>Frequent changes in eyeglass or contact lens prescription</li>
                    <li>Fading or yellowing of colors</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1518077891242-3bafa8323533?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Eye with Cataract" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-medical-gray-500 italic">
                    Image: Close-up of an eye with a visible cataract
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="amd">
          <Card>
            <CardHeader>
              <CardTitle>Age-related Macular Degeneration (AMD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-medical-gray-700 mb-4">
                    Age-related macular degeneration (AMD) is a common eye condition and a leading cause of vision loss 
                    among people aged 50 and older. It causes damage to the macula, a small spot near the center of the 
                    retina needed for sharp, central vision.
                  </p>
                  <p className="text-medical-gray-700 mb-4">
                    There are two types: dry (atrophic) AMD and wet (neovascular) AMD. The dry form is more common, 
                    but the wet form leads to more serious vision loss.
                  </p>
                  <h3 className="font-medium text-medical-gray-800 mt-4 mb-2">Key Symptoms:</h3>
                  <ul className="list-disc pl-5 text-medical-gray-700 space-y-1 mb-4">
                    <li>Visual distortions, such as straight lines seeming bent</li>
                    <li>Reduced central vision</li>
                    <li>Decreased brightness of colors</li>
                    <li>Blurry areas in central vision</li>
                    <li>Difficulty adapting to low light levels</li>
                    <li>Difficulty recognizing faces</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Retina with AMD" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <p className="mt-3 text-sm text-medical-gray-500 italic">
                    Image: Retinal scan showing macular degeneration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DiseasesInfoSection;
