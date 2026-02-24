export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

// Define the Message interface to support chat history in ChatWidget
export interface Message {
  role: 'user' | 'bot';
  text: string;
}
