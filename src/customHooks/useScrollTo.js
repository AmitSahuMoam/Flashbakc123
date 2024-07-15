import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTo = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adding a delay to ensure the element is rendered
      }
    }
  }, [hash]);
};

export default useScrollTo;
