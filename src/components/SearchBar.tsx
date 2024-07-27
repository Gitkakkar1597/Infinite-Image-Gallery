import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void; // Function to handle search queries
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim()); // Call onSearch with trimmed query
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search images..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
