"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRightIcon from "../icons/ArrowRightIcon";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-2 border border-quaternary">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full cursor-pointer border-none bg-transparent px-4 py-3 text-left font-bold outline-none"
        >
          {title}
        </button>
        <span className={`${open ? "rotate-[270deg]" : "rotate-90"} mr-[20px]`}>
          <ArrowRightIcon />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
