
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface HealthAnalysis {
  possibleConditions: Array<{
    name: string;
    probability: number;
    description: string;
  }>;
  recommendations: Array<{
    type: 'medication' | 'lifestyle' | 'home-remedy' | 'diet' | 'yoga';
    description: string;
  }>;
  emergencyLevel: 'none' | 'low' | 'medium' | 'high';
  emergencyMessage?: string;
}
