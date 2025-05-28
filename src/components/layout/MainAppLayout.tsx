import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string; // Optional className for the main layout container
}

/**
 * MainAppLayout provides the top-level structure for the application pages.
 * For the Login Page, it establishes a full-screen flex container that centers its children.
 * The background color is applied here, and children (like LoginForm) are expected
 * to define their own specific styling (e.g., card-like appearance).
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        // Corresponds to 'Layout Requirements -> overall.definition'
        'flex items-center justify-center h-screen bg-background',
        className
      )}
    >
      {/* Children (e.g., LoginForm or a page content wrapper) will be rendered here */}
      {children}
    </div>
  );
};

export default MainAppLayout;
