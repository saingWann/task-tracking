import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FadeInOutComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Unmount Component" : "Mount Component"}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              {/* Your component content here */}
              <h1>FadeInOutComponent</h1>
              <p>
                This component fades in when mounted and fades out when
                unmounted.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FadeInOutComponent;
