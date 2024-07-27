declare module 'react-responsive-masonry' {
  import { ComponentType, ReactNode } from 'react';

  // Props for the Masonry component
  interface MasonryProps {
    columnsCount?: number; 
    columnsCountBreakPoints?: { [key: number]: number }; 
    gutter?: string; 
    children: ReactNode; 
  }

  // Export the Masonry component
  const Masonry: ComponentType<MasonryProps>;

  export default Masonry;
}
