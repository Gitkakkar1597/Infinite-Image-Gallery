import { useEffect } from 'react';

export const useInfiniteScroll = (loadMore: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Trigger loadMore when nearing the bottom
      if (scrollTop + windowHeight >= scrollHeight - 100) {
        loadMore();
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);
};
