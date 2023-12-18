import { useState } from 'react';

function Gallery() {
  // State for managing showMore toggle and array1 content
  const [showMore, setShowMore] = useState(false);
  const [array1, setArray1] = useState([1, 2, 3, 4, 5, 6]);

  // Function to handle the "Show More" or "Show Less" click
  const handleClick = () => {
    if (showMore) {
      // If already showing more, switch to showing less
      setShowMore(false);
      setArray1([1, 2, 3, 4, 5, 6]); // Reset to initial set of images
    } else {
      // If showing less, switch to showing more
      setShowMore(true);
      setArray1([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Show additional images
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-center lg:text-left text-[#314584] font-semibold text-3xl mb-6">See some of our Creative work.</h2>
      
      {/* Grid to display images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {array1.map((card, index) => {
          return (
            // Individual image container
            <div key={index} className="group relative w-fit card-flash">
              <img src="/images/1.png" alt="" /> {/* Image */}
            </div>
          );
        })}
      </div>
      
      {/* Button to toggle Show More/Less */}
      <p onClick={handleClick} className="cursor-pointer text-center text-[#FF3946] text-lg font-bold mt-6 hover:text-[#314584] duration-300">
        Show {`${showMore === false ? "More" : "Less"}`}
      </p>
    </div>
  );
}

export default Gallery;
