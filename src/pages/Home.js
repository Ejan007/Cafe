import React, { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSeedling, 
  faMugHot, 
  faCoffee, 
  faLeaf, 
  faHeart, 
  faChevronLeft, 
  faChevronRight 
} from "@fortawesome/free-solid-svg-icons";


// Function to dynamically load images from the src/img folder
const importAllImages = (context) => {
  return context.keys().map(context);
};

const foodImages = importAllImages(require.context("../images", false, /\.(jpg|jpeg|png|gif)$/));

function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="no-select">
      {/* Hero Section */}
      <div className="relative h-screen bg-[url('./images/imgbg6.jpg')] bg-cover bg-[center_100%]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/20 to-[#444444]/40"></div>
        {/* Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-handwritten text-white drop-shadow-lg">
            Sip, Savor, Smile<br /> Himalayan Brew Experience.
          </h1>
          <motion.p
            className="text-lg mt-4 text-[white] drop-shadow-md font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Cafe Himalayan Brew is a heaven where the flavors of the coffee come to life.
          </motion.p>
            
          <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
  <motion.a
    href="/menu"
    className="border border-[#e8d9c1] text-[white] px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-[#e8d9c1] hover:text-[#60462c] transition-all duration-300"
    whileHover={{ scale: 1.2 }}
  >
    View Menu
  </motion.a>

  <motion.a
    href="/Contact"
    className="border border-[#e8d9c1] text-[white] px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-[#e8d9c1] hover:text-[#60462c] transition-all duration-300"
    whileHover={{ scale: 1.2 }}
  >
    Book a Table
  </motion.a>
</div>


        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
  className="pb-6 pt-6 bg-[#f7e5d2] text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center justify-items-center">
    {/* Feature 1 - Quality Beans */}
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faSeedling} className="text-[#60462c] text-7xl mb-4" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold text-[#60462c]"
      >
        Quality Beans
      </motion.p>
    </motion.div>

    {/* Feature 2 - Freshly Brewed */}
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faMugHot} className="text-[#60462c] text-7xl mb-4" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold text-[#60462c]"
      >
        Freshly Brewed
      </motion.p>
    </motion.div>

    {/* Feature 3 - Eco-Friendly Practices */}
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faLeaf} className="text-[#60462c] text-7xl mb-4" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold text-[#60462c]"
      >
        Eco-Friendly Practices
      </motion.p>
    </motion.div>

    {/* Feature 4 - Made with Love */}
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faHeart} className="text-[#60462c] text-7xl mb-4" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold text-[#60462c]"
      >
        Made with Love
      </motion.p>
    </motion.div>
    
  </div>
</motion.section>

{/* Mobile Layout */}
<div className="block md:hidden bg-white pt-10 pb-0 px-6">
  <div className="max-w-screen-2xl mx-auto flex flex-col gap-8">
    {/* Eat – Text only */}
    <div>
      <h1 className="text-6xl font-bold font-serif mb-4">Eat.</h1>
      <h2 className="text-lg text-gray-700 mb-2">
        Breakfast, Lunch, and Cakes
      </h2>
      <p className="text-base text-gray-600 mb-4">
        From hearty breakfasts that start your day off right to indulgent cakes, 
        our menu celebrates the joy of good food. Whether you’re looking for a light lunch or a sweet treat, 
        we bring you the finest flavors and ingredients in every bite, because every meal should be a delicious occasion.
      </p>
    </div>

    {/* Left Column Image */}
    <div>
      <img
        src="sec/img3.jpg"  // Update with your image path
        alt="Delicious dish"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>

    {/* Drink – Text only */}
    <div>
      <h1 className="text-6xl font-bold font-serif mb-4">Drink</h1>
      <h2 className="text-lg text-gray-700 mb-2">
        Great Coffee, Made Right
      </h2>
      <p className="text-base text-gray-600 mb-4">
        Enjoy our freshly brewed coffee made from quality beans. Every cup is a simple, satisfying treat to brighten your day.
      </p>
    
    </div>

    {/* Right Column Image */}
    <div>
      <img
        src="sec/img5.jpg"
        alt="Delicious dish"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>
  </div>
</div>

{/* Desktop Layout */}
<div className="hidden md:block">
  {/* Section for "Eat." (Text Left, Image Right) */}
  <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10 pb-0 px-6 bg-white">
    {/* Left Column: Text */}
    <div>
      <h1 className="text-6xl font-bold font-serif mb-4">Eat.</h1>
      <h2 className="text-lg text-gray-700 mb-2">
        Breakfast, Lunch, and Cakes
      </h2>
      <p className="text-base text-gray-600 mb-4">
        From hearty breakfasts that start your day off right to indulgent cakes, 
        our menu celebrates the joy of good food. Whether you’re looking for a light lunch or a sweet treat, 
        we bring you the finest flavors and ingredients in every bite, because every meal should be a delicious occasion.
      </p>
    </div>
    {/* Right Column: Image */}
    <div>
      <img
        src="sec/img5.jpg"
        alt="Delicious dish"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>
  </section>

  {/* Section for "Drink." (Image Left, Text Right) */}
  <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10 pb-0 px-6 bg-white">
    {/* Left Column: Image */}
    <div>
      <img
        src="sec/img8.jpg"  // Update with your image path
        alt="Delicious dish"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>
    {/* Right Column: Content */}
    <div>
      <h1 className="text-6xl font-bold font-serif mb-4">Drink</h1>
      <h2 className="text-lg text-gray-700 mb-2">
        Great Coffee, Made Right
      </h2>
      <p className="text-base text-gray-600 mb-4">
        Enjoy our freshly brewed coffee made from quality beans. Every cup is a simple, satisfying treat to brighten your day.
      </p>
    </div>
  </section>
</div>

      {/* Gallery Section */}
      <motion.section
  className="pb-5 bg-[#f7e5d2] text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <p
    className="text-4xl font-bold text-black pt-10 pb-10 px-7 rounded-lg text-center mb-8"
    style={{ fontFamily: '"Playfair Display", serif' }}
  >
    Experience the taste with your eyes first.
  </p>

  {/* Enlarged container for the slider */}
  <div className="max-w-6xl mx-auto relative rounded-lg shadow-lg h-[300px] md:h-[600px] overflow-hidden">
    <AnimatePresence exitBeforeEnter>
      <motion.img
        key={currentImage}
        src={foodImages[currentImage]}
        alt="Food Gallery"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, x: -50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 50, scale: 0.95 }}
        transition={{ duration: 0.8 }}
      />
    </AnimatePresence>

    {/* Left Arrow */}
    <motion.button
      onClick={() =>
        setCurrentImage((prev) => (prev - 1 + foodImages.length) % foodImages.length)
      }
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="lg" className="text-[#60462c]" />
    </motion.button>

    {/* Right Arrow */}
    <motion.button
      onClick={() => setCurrentImage((prev) => (prev + 1) % foodImages.length)}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={faChevronRight} size="lg" className="text-[#60462c]" />
    </motion.button>
  </div>

  {/* View Gallery Button */}
  <div className="mt-8">
    <motion.a
      href="/gallery"
      className="px-10 py-4 text-xl font-bold border border-[#60462c] text-[#60462c] rounded-full shadow-xl hover:bg-[#60462c] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    >
      Our Gallery
    </motion.a>
  </div>
</motion.section>




    </div>
  );
}

export default Home;
