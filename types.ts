// FIX: Import React to provide the React namespace for types like React.ReactNode.
import React from 'react';

export interface NodeData {
  id: string;
  title: string;
  content: React.ReactNode;
  position: { top?: string; bottom?: string; left?: string; right?: string; };
  mobilePosition?: { top?: string; bottom?: string; left?: string; right?: string; };
  bgColor: string;
  icon: React.ReactNode;
}
