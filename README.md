
# Ocular Disease Detection

An AI-powered application for analyzing eye scan images to detect and classify potential eye diseases.

## Features

- **AI-Powered Analysis**: Upload retinal scan images for automated disease detection
- **Disease Classification**: Identifies common eye conditions including:
  - Diabetic Retinopathy
  - Glaucoma
  - Cataract
  - Age-related Macular Degeneration
  - Hypertensive Retinopathy
  - Myopia
  - Hypermetropia
- **Treatment Recommendations**: Provides suggestions based on detected conditions
- **Educational Resources**: Informative content about common eye diseases
- **Medical-Grade UI**: Professional interface designed for healthcare settings

## Technology Stack

- React with TypeScript
- Hugging Face Transformers.js for machine learning
- Tailwind CSS for styling
- shadcn/ui component library

## Usage

1. Upload an eye scan image (retinal scan recommended)
2. Click "Analyze Image" to process
3. View detailed results including:
   - Detected disease (if any)
   - Confidence level
   - Symptoms
   - Treatment options
   - Prevention recommendations
   - Risk factors

## Important Note

This application is for demonstration purposes only. In a production environment, it would use:

1. A specialized medical model trained specifically on eye disease images
2. HIPAA-compliant data handling
3. Professional medical validation

Always consult healthcare professionals for actual medical advice and diagnosis.

## Demo Images

For testing, you can use retinal scan images from public datasets such as:
- [EyePACS](https://www.kaggle.com/c/diabetic-retinopathy-detection)
- [ODIR-5K](https://odir2019.grand-challenge.org/)
- [MESSIDOR](https://www.adcis.net/en/third-party/messidor/)

## Disclaimer

This tool is designed as a screening aid and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your ophthalmologist or other qualified health provider with any questions you may have regarding a medical condition.
