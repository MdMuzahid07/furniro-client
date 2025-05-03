"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductSearchDrawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white shadow-xl"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductSearchDrawer;
