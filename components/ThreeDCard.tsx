
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

// Define the type for the context value
type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

// Create a context to share the mouse enter state
const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

// CardContainer: The main wrapper that handles mouse events for the 3D effect
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
