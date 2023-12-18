function ProductsGrid({ cardsInfo }) {
  return (
    // Grid layout for displaying product cards
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 ">
      {/* Mapping through each product card */}
      {cardsInfo.map((cardInfo, index) => (
        <div key={index} className="card group border-2 border-[#e6e6e6] rounded-lg">
          <div className="relative">
            {/* Product image */}
            <img className="mb-4 w-full h-[350px] rounded-t-lg" src={cardInfo.ProductVariations[0].ProductVarientImages[0].image_path} alt="" />
            {/* Quick view overlay */}
            <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">Quick View</span>
          </div>
          <div className="text-center p-3">
            {/* Product title */}
            <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-1">{cardInfo.name}</h5>
            {/* Product description */}
            <p className="text-base text-[#979a9b]">{cardInfo.description}</p>
            {/* Product price */}
            <p className="text-base text-[#979a9b]">{`£ ${cardInfo.ProductVariations[0].price}`}</p>
            {/* Additional product details */}
            <div className="text-[#979a9b] flex items-center justify-center space-x-3 mb-4">
              {/* Product rating */}
              <p className="text-sm">Rating: {cardInfo.product_rating}</p>
              {/* Product category */}
              <p className="text-sm">Category: {cardInfo.SubCategories.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
