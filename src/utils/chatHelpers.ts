
import { Message, HealthAnalysis } from "@/types/chat";

// Generate unique IDs for messages
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Initial welcome message from Cura
export const getWelcomeMessage = (language: string = 'en'): Message => {
  const welcomeMessages: Record<string, string> = {
    en: "Hello! I'm Cura, your AI health assistant. Please describe your symptoms or health concerns, and I'll do my best to help. Remember, I'm not a doctor, but I can provide information and guidance.",
    hi: "नमस्ते! मैं क्यूरा हूँ, आपका AI स्वास्थ्य सहायक। कृपया अपने लक्षणों या स्वास्थ्य चिंताओं का वर्णन करें, और मैं आपकी मदद करने की पूरी कोशिश करूंगा। याद रखें, मैं डॉक्टर नहीं हूँ, लेकिन मैं जानकारी और मार्गदर्शन प्रदान कर सकता हूँ।",
    te: "హలో! నేను క్యూరా, మీ AI ఆరోగ్య సహాయకుడిని. దయచేసి మీ లక్షణాలు లేదా ఆరోగ్య ఆందోళనలను వివరించండి, మరియు నేను మీకు సహాయం చేయడానికి నా వంతు ప్రయత్నం చేస్తాను. నేను డాక్టర్ కాదని గుర్తుంచుకోండి, కానీ నేను సమాచారం మరియు మార్గదర్శకత్వాన్ని అందించగలను.",
    ta: "வணக்கம்! நான் க்யூரா, உங்கள் AI சுகாதார உதவியாளர். உங்கள் அறிகுறிகள் அல்லது சுகாதார கவலைகளை விவரிக்கவும், நான் உங்களுக்கு உதவ எனது சிறந்த முயற்சி செய்வேன். நான் ஒரு மருத்துவர் அல்ல என்பதை நினைவில் கொள்ளுங்கள், ஆனால் நான் தகவல் மற்றும் வழிகாட்டுதலை வழங்க முடியும்."
  };

  return {
    id: generateId(),
    role: 'assistant',
    content: welcomeMessages[language] || welcomeMessages.en,
    timestamp: new Date()
  };
};

// Mock function to analyze health symptoms
// In a real app, this would connect to a backend AI model
export const analyzeSymptoms = async (symptoms: string): Promise<HealthAnalysis> => {
  console.log("Analyzing symptoms:", symptoms);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Very simple keyword matching for demo purposes
  const symptomsLower = symptoms.toLowerCase();
  
  // Basic analysis based on keywords
  if (symptomsLower.includes("headache") || symptomsLower.includes("head") && symptomsLower.includes("pain")) {
    if (symptomsLower.includes("severe") || symptomsLower.includes("worst") || symptomsLower.includes("vomiting")) {
      return {
        possibleConditions: [
          { name: "Migraine", probability: 0.7, description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound." },
          { name: "Tension Headache", probability: 0.2, description: "A mild to moderate pain that feels like a constant band around the head." },
          { name: "Cluster Headache", probability: 0.1, description: "Extremely painful headaches that occur in clusters, often at the same time of day." }
        ],
        recommendations: [
          { type: "medication", description: "Over-the-counter pain relievers like acetaminophen or ibuprofen may help with mild headaches." },
          { type: "lifestyle", description: "Rest in a quiet, dark room. Apply a cold pack to your forehead or neck." },
          { type: "home-remedy", description: "Peppermint oil or lavender oil applied to the temples may help relieve tension headaches." }
        ],
        emergencyLevel: symptomsLower.includes("worst headache") ? "high" : "low",
        emergencyMessage: symptomsLower.includes("worst headache") ? "If this is the worst headache of your life, suddenly came on, or is accompanied by confusion, please seek emergency care immediately." : undefined
      };
    } else {
      return {
        possibleConditions: [
          { name: "Tension Headache", probability: 0.8, description: "A mild to moderate pain that feels like a constant band around the head." },
          { name: "Dehydration", probability: 0.1, description: "Not having enough fluids in your body can cause headaches." },
          { name: "Eye Strain", probability: 0.1, description: "Prolonged use of digital screens can lead to eye strain and headaches." }
        ],
        recommendations: [
          { type: "lifestyle", description: "Take regular breaks from screens and ensure proper lighting." },
          { type: "home-remedy", description: "Stay hydrated and try a warm compress on your forehead or neck." },
          { type: "yoga", description: "Neck stretches and shoulder rolls can help relieve tension." }
        ],
        emergencyLevel: "none"
      };
    }
  } else if (symptomsLower.includes("fever") || symptomsLower.includes("temperature")) {
    const highFever = symptomsLower.includes("high") || symptomsLower.includes("very");
    
    return {
      possibleConditions: [
        { name: "Common Cold", probability: 0.5, description: "A viral infection marked by nasal congestion, sore throat, and mild fever." },
        { name: "Influenza", probability: 0.3, description: "Viral infection that attacks your respiratory system with more severe symptoms than a cold." },
        { name: "COVID-19", probability: 0.2, description: "Viral infection causing respiratory symptoms, fever, and potentially other symptoms." }
      ],
      recommendations: [
        { type: "medication", description: "Acetaminophen or ibuprofen can help reduce fever. Follow dosage instructions." },
        { type: "home-remedy", description: "Stay hydrated, rest, and consider a lukewarm bath to help lower body temperature." },
        { type: "diet", description: "Clear broths, herbal teas, and plenty of fluids can help support recovery." }
      ],
      emergencyLevel: highFever ? "medium" : "low",
      emergencyMessage: highFever ? "If fever is above 103°F (39.4°C) for adults, or accompanied by severe headache, rash, or difficulty breathing, seek medical attention." : undefined
    };
  } else if (symptomsLower.includes("cough") || symptomsLower.includes("cold")) {
    return {
      possibleConditions: [
        { name: "Common Cold", probability: 0.6, description: "A viral infection marked by nasal congestion, sore throat, and cough." },
        { name: "Bronchitis", probability: 0.2, description: "Inflammation of the lining of your bronchial tubes, which carry air to and from your lungs." },
        { name: "Allergies", probability: 0.2, description: "An immune response to substances that are typically harmless." }
      ],
      recommendations: [
        { type: "home-remedy", description: "Honey and warm water or tea with honey can help soothe a cough. (Not for children under 1 year)" },
        { type: "lifestyle", description: "Use a humidifier or take a steamy shower to help relieve congestion." },
        { type: "diet", description: "Hot soups and broths can help soothe a sore throat and provide hydration." }
      ],
      emergencyLevel: "none"
    };
  } else if (symptomsLower.includes("stomach") || symptomsLower.includes("nausea") || symptomsLower.includes("vomit")) {
    return {
      possibleConditions: [
        { name: "Gastroenteritis", probability: 0.5, description: "Often called stomach flu, it's an intestinal infection marked by watery diarrhea, abdominal cramps, nausea, vomiting." },
        { name: "Food Poisoning", probability: 0.3, description: "Illness caused by eating contaminated food." },
        { name: "Indigestion", probability: 0.2, description: "Discomfort or burning feeling in the upper abdomen." }
      ],
      recommendations: [
        { type: "home-remedy", description: "Ginger tea can help alleviate nausea. Try the BRAT diet (Bananas, Rice, Applesauce, Toast)." },
        { type: "lifestyle", description: "Rest and stay hydrated with small sips of water or electrolyte solution." },
        { type: "medication", description: "Over-the-counter medications like bismuth subsalicylate may help with mild symptoms." }
      ],
      emergencyLevel: symptomsLower.includes("blood") ? "high" : "low",
      emergencyMessage: symptomsLower.includes("blood") ? "If you are vomiting blood or have blood in your stool, seek emergency medical attention immediately." : undefined
    };
  } else {
    // Generic response for unrecognized symptoms
    return {
      possibleConditions: [
        { name: "Various Conditions", probability: 1.0, description: "Based on your symptoms, there could be multiple possible causes." }
      ],
      recommendations: [
        { type: "lifestyle", description: "Ensure you're getting adequate rest and staying hydrated." },
        { type: "home-remedy", description: "Pay attention to your symptoms and note any changes or patterns." },
        { type: "medication", description: "Consult with a healthcare provider for proper diagnosis and treatment options." }
      ],
      emergencyLevel: "low"
    };
  }
};

// Format the health analysis into a readable message
export const formatHealthAnalysis = (analysis: HealthAnalysis): string => {
  let message = "### Based on your symptoms, here's what I can tell you:\n\n";
  
  message += "#### Possible Conditions\n";
  analysis.possibleConditions.forEach(condition => {
    const probabilityPercent = Math.round(condition.probability * 100);
    message += `- **${condition.name}** (${probabilityPercent}% match): ${condition.description}\n`;
  });
  
  message += "\n#### Recommendations\n";
  analysis.recommendations.forEach(rec => {
    message += `- **${rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}**: ${rec.description}\n`;
  });
  
  if (analysis.emergencyLevel !== "none") {
    message += "\n#### ⚠️ Important Note\n";
    message += analysis.emergencyMessage || "Some of your symptoms may require medical attention. Please consider consulting a healthcare professional.";
  }
  
  message += "\n\n*Remember: This is not a medical diagnosis. Always consult with a healthcare professional for proper medical advice.*";
  
  return message;
};
