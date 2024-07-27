// Define the structure of an image from Unsplash
export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
  description?: string;
  tags: { title: string }[];
  links: { download?: string };
}

// Define props for the ImageCard component
export interface ImageCardProps {
  url: string;
  alt: string;
  tags: string[];
  onClick: () => void;
}

// Define props for the ImageModal component
export interface ImageModalProps {
  url: string;
  alt: string;
  description: string;
  links: any; // Adjust according to the data structure
  onClose: () => void;
}

// Define props for the SearchBar component
export interface SearchBarProps {
  onSearch: (query: string) => void;
}

// Define the structure of the data returned by fetchImages
export interface FetchImagesResponse {
  results: UnsplashImage[];
}
