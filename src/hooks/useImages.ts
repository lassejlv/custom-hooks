/**
Opgavebeskrivelse:
Du skal i denne opgave lave et "useImages" hook. Dit hook skal hente stierne på alle billeder man placerer i "/Public" mappen. Det vil sige at du ender ud med at have et hook som henter alle billeder i et array når man kalder "useImages".


Opgavekrav:
Dit useImages hook skal også demonstreres. Du skal derfor finde nogle billeder og placerer i din "public" folder. Herefter skal hooket kaldes og du skal "mappe" dit array igennem for at vise billederne.

*/

import { useEffect, useState } from "react";

// Hook
export const useImages = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const files = await import.meta.glob('/public/*');
      const paths = Object.keys(files);
      setImages(paths);
    };
    fetchImages();
  }, []);
  return images;
}
