
import { EyeDisease } from "./ml-model";

export interface DiseaseInfo {
  name: EyeDisease;
  description: string;
  symptoms: string[];
  treatments: string[];
  prevention: string[];
  riskFactors: string[];
}

export const diseasesData: Record<EyeDisease, DiseaseInfo> = {
  "Normal": {
    name: "Normal",
    description: "No eye disease detected. Your eye appears healthy based on the scan provided.",
    symptoms: ["No symptoms of eye disease"],
    treatments: ["Regular eye check-ups to maintain eye health"],
    prevention: [
      "Regular eye examinations",
      "Wearing sunglasses to protect from UV rays",
      "Maintaining a healthy diet rich in vitamins A, C, and E",
      "Taking regular breaks from screens to reduce eye strain"
    ],
    riskFactors: [
      "Age (over 60)",
      "Family history of eye diseases",
      "Smoking",
      "Diabetes",
      "High blood pressure"
    ]
  },
  "Diabetic Retinopathy": {
    name: "Diabetic Retinopathy",
    description: "A diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).",
    symptoms: [
      "Spots or dark strings floating in your vision (floaters)",
      "Blurred vision",
      "Fluctuating vision",
      "Dark or empty areas in your vision",
      "Vision loss"
    ],
    treatments: [
      "Managing diabetes through medication, diet, and exercise",
      "Anti-VEGF therapy to reduce swelling",
      "Laser treatment to seal leaking blood vessels",
      "Vitrectomy surgery for advanced cases"
    ],
    prevention: [
      "Managing blood sugar levels",
      "Regular eye examinations",
      "Maintaining healthy blood pressure and cholesterol levels",
      "Not smoking"
    ],
    riskFactors: [
      "Duration of diabetes",
      "Poor blood sugar control",
      "High blood pressure",
      "High cholesterol",
      "Pregnancy",
      "Smoking"
    ]
  },
  "Glaucoma": {
    name: "Glaucoma",
    description: "A group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.",
    symptoms: [
      "Patchy blind spots in peripheral or central vision",
      "Tunnel vision in advanced stages",
      "Severe headache",
      "Eye pain",
      "Nausea and vomiting",
      "Blurred vision",
      "Halos around lights"
    ],
    treatments: [
      "Eye drops to reduce pressure",
      "Oral medications",
      "Laser therapy",
      "Surgery to improve fluid drainage"
    ],
    prevention: [
      "Regular eye examinations",
      "Knowing your family's eye health history",
      "Exercising safely",
      "Taking prescribed eye drops regularly"
    ],
    riskFactors: [
      "Elevated internal eye pressure",
      "Age (over 60)",
      "Family history of glaucoma",
      "Medical conditions like diabetes, heart disease, high blood pressure",
      "Eye injuries",
      "Nearsightedness"
    ]
  },
  "Cataract": {
    name: "Cataract",
    description: "A clouding of the lens in the eye that affects vision. Cataracts are common in older adults.",
    symptoms: [
      "Clouded, blurred or dim vision",
      "Increasing difficulty with vision at night",
      "Sensitivity to light and glare",
      "Need for brighter light for reading",
      "Seeing halos around lights",
      "Frequent changes in eyeglass or contact lens prescription"
    ],
    treatments: [
      "New eyeglasses",
      "Brighter lighting",
      "Anti-glare sunglasses",
      "Magnifying lenses",
      "Cataract surgery to replace the cloudy lens"
    ],
    prevention: [
      "Regular eye examinations",
      "Quitting smoking",
      "Wearing sunglasses to block ultraviolet rays",
      "Managing other health problems like diabetes",
      "Maintaining a healthy diet rich in fruits and vegetables"
    ],
    riskFactors: [
      "Aging",
      "Diabetes",
      "Smoking",
      "Excessive alcohol consumption",
      "Prolonged sunlight exposure",
      "Obesity",
      "High blood pressure",
      "Previous eye injury or inflammation",
      "Prolonged use of corticosteroid medications"
    ]
  },
  "Age-related Macular Degeneration": {
    name: "Age-related Macular Degeneration",
    description: "A common eye condition and a leading cause of vision loss among people aged 50 and older, causing damage to the macula, a small spot near the center of the retina.",
    symptoms: [
      "Visual distortions, such as straight lines seeming bent",
      "Reduced central vision in one or both eyes",
      "The need for brighter light when reading or doing close work",
      "Difficulty adapting to low light levels",
      "Increased blurriness of printed words",
      "Decreased intensity or brightness of colors"
    ],
    treatments: [
      "Anti-angiogenic drugs to stop new blood vessels from forming",
      "Laser therapy to destroy abnormal blood vessels",
      "Photodynamic therapy to damage abnormal blood vessels",
      "Vision rehabilitation",
      "Dietary supplements like vitamins C and E, zinc, copper, and beta-carotene"
    ],
    prevention: [
      "Regular eye examinations",
      "Not smoking",
      "Regular exercise",
      "Maintaining normal blood pressure and cholesterol levels",
      "Eating a diet rich in fruits and vegetables, particularly dark leafy greens"
    ],
    riskFactors: [
      "Age (over 50)",
      "Family history",
      "Smoking",
      "Obesity",
      "Cardiovascular disease",
      "High blood pressure",
      "High cholesterol"
    ]
  },
  "Hypertensive Retinopathy": {
    name: "Hypertensive Retinopathy",
    description: "Damage to the retina and its blood vessels due to high blood pressure.",
    symptoms: [
      "Usually no symptoms in early stages",
      "Reduced vision",
      "Double vision",
      "Headache",
      "Visual impairment"
    ],
    treatments: [
      "Blood pressure control through medication",
      "Lifestyle changes including diet and exercise",
      "Regular monitoring of blood pressure",
      "Laser surgery for severe cases"
    ],
    prevention: [
      "Regular blood pressure checks",
      "Maintaining a healthy diet low in salt",
      "Regular exercise",
      "Not smoking",
      "Limiting alcohol intake"
    ],
    riskFactors: [
      "Hypertension (high blood pressure)",
      "Diabetes",
      "Smoking",
      "Being overweight or obese",
      "Stress",
      "Family history of high blood pressure"
    ]
  },
  "Myopia": {
    name: "Myopia",
    description: "Also known as nearsightedness, myopia is a common vision condition in which near objects are seen clearly, but objects farther away appear blurred.",
    symptoms: [
      "Distant objects appear blurry",
      "Need to squint to see clearly",
      "Eyestrain",
      "Headaches",
      "Difficulty seeing while driving, especially at night"
    ],
    treatments: [
      "Eyeglasses",
      "Contact lenses",
      "LASIK or PRK (laser surgeries)",
      "Orthokeratology (specially designed contact lenses worn only at night)",
      "Atropine eye drops (for children to slow progression)"
    ],
    prevention: [
      "Spending more time outdoors in childhood",
      "Taking breaks from close-up work",
      "Limiting screen time",
      "Ensuring proper lighting for reading"
    ],
    riskFactors: [
      "Genetics (having parents with myopia)",
      "Extended time spent on close-up work or screen time",
      "Limited outdoor activities in childhood",
      "Ethnicity (more common in Asian populations)"
    ]
  },
  "Hypermetropia": {
    name: "Hypermetropia",
    description: "Also known as farsightedness, hypermetropia is a common vision condition in which nearby objects appear blurry, but distant objects can be seen more clearly.",
    symptoms: [
      "Nearby objects appear blurry",
      "Need to squint to see clearly",
      "Eyestrain",
      "Headaches",
      "Aching or burning eyes",
      "Fatigue when working at close range"
    ],
    treatments: [
      "Eyeglasses",
      "Contact lenses",
      "LASIK or other refractive surgeries"
    ],
    prevention: [
      "Regular eye examinations",
      "Protecting eyes from injury"
    ],
    riskFactors: [
      "Genetics (often inherited)",
      "Age (common in young children, often corrects itself as they grow)",
      "Associated with certain medical conditions like microphthalmia or tumors"
    ]
  }
};

// Function to get disease information
export const getDiseaseInfo = (disease: EyeDisease): DiseaseInfo => {
  return diseasesData[disease] || diseasesData["Normal"];
};
