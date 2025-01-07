
// types.ts

// Import the content to infer types from it
import { content } from './content';

// Infer the content type from the content object
export type Content = typeof content[keyof typeof content];

// Export specific types if needed for props
export type ServiceDetail = Content['services']['items'][0];
export type Language = keyof typeof content;
export type IconType = ServiceDetail['icon'];