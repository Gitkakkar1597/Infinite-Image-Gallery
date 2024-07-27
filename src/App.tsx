import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageModal from './components/ImageModal';
import SearchBar from './components/SearchBar';
import { fetchImages } from './services/unsplashService';
import { useInfiniteScroll } from './utils/infiniteScroll';

const App: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [query, setQuery] = useState('nature');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  useEffect(() => {
    // Fetch images based on query and page number
    const loadImages = async () => {
      try {
        const data = await fetchImages(query, page);
        if (data && data.results) {
          // Append new images to the existing list
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, [query, page]); // Dependencies to re-fetch images when query or page changes

  // Use infinite scroll to load more images when scrolling
  useInfiniteScroll(() => setPage((prevPage) => prevPage + 1));

  return (
    <div className="app-container">
      <header className="header">Infinite Image Gallery</header>
      <SearchBar
        onSearch={(newQuery) => {
          setQuery(newQuery);
          setImages([]); // Clear current images for new search
          setPage(1); // Reset page number for new search
        }}
      />
      <div className="grid-container">
        {images.length > 0 ? (
          images.map((image) => (
            <ImageCard
              key={image.id}
              url={image.urls.small}
              alt={image.alt_description || 'Image'}
              tags={image.tags.map((tag: any) => tag.title)} // Extract and display tags
              onClick={() => setSelectedImage(image)} // Set the selected image for modal
            />
          ))
        ) : (
          <div className="no-images">No images found!</div> // Message when no images are available
        )}
      </div>
      {selectedImage && (
        <ImageModal
          url={selectedImage.urls.regular}
          alt={selectedImage.alt_description || 'Image'}
          description={selectedImage.description || 'No description'}
          links={selectedImage.links} // Display image links if available
          onClose={() => setSelectedImage(null)} // Close the modal
        />
      )}
    </div>
  );
};

export default App;
