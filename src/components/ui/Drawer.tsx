"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  from?: "left" | "right";
  width?: string;
}

const Drawer = ({ isOpen, onClose, children, from = "right", width = "300px" }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-dark"
          />

          {/* drawer */}
          <motion.div
            initial={{ x: from === "right" ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: from === "right" ? "100%" : "-100%" }}
            transition={{ type: "tween", ease: [0.83, 0, 0.17, 1], duration: 0.7 }}
            style={{ width }}
            className={`fixed top-0 z-50 h-full bg-white shadow-xl ${
              from === "right" ? "right-0" : "left-0"
            }`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
