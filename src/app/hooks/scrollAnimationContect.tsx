import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ScrollAnimationContextType {
  visibleItems: Set<string>;
  addVisibleItem: (id: string) => void;
  removeVisibleItem: (id: string) => void;
}

const ScrollAnimationContext = createContext<
  ScrollAnimationContextType | undefined
>(undefined);

export const ScrollAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  const addVisibleItem = (id: string) => {
    setVisibleItems(prev => new Set(prev.add(id)));
  };

  const removeVisibleItem = (id: string) => {
    setVisibleItems(prev => {
      const updatedSet = new Set(prev);
      updatedSet.delete(id);
      return updatedSet;
    });
  };

  return (
    <ScrollAnimationContext
      value={{ visibleItems, addVisibleItem, removeVisibleItem }}>
      {children}
    </ScrollAnimationContext>
  );
};

export const useScrollAnimation = () => {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error(
      'useScrollAnimation must be used within a ScrollAnimationProvider',
    );
  }
  return context;
};
