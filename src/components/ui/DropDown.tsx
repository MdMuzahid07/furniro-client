"use client";
import React, { useState, useEffect } from "react";

interface DropDownProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  style?: string;
  triggerStyle?: string;
  overlayStyle?: string;
  closeOnOutsideClick?: boolean;
  closeTrigger?: boolean;
  closeTriggerIcon?: React.ReactNode;
  closeTriggerStyle?: string;
  onClickClose?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  children,
  trigger,
  style,
  triggerStyle,
  overlayStyle = "bg-black/20",
  closeOnOutsideClick = true,
  closeTrigger = true,
  closeTriggerIcon,
  closeTriggerStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 200);
    } else {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 200);
    }
  };

  const handleOutsideClick = () => {
    if (closeOnOutsideClick && isOpen) {
      toggleDropdown();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleDropdown();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`${triggerStyle} cursor-pointer`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </button>

      {/* overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 ${overlayStyle} transition-opacity duration-200 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOutsideClick}
        />
      )}
      {/* dropdown content */}
      {isOpen && (
        <div
          className={`dropDownCustomBreak fixed top-0 right-0 z-50 mt-[24px] transform bg-white transition-all duration-200 ${
            isAnimating ? "translate-y-0 opacity-100 md:translate-y-2" : "-translate-y-4 opacity-0"
          } ${style}`}
        >
          {closeTrigger && (
            <button
              onClick={toggleDropdown}
              className={`${closeTriggerStyle || "absolute top-[35px] right-[40px]"} cursor-pointer`}
            >
              {closeTriggerIcon}
            </button>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
