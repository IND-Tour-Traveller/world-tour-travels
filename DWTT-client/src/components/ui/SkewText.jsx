import React from 'react'

export default function SkewText({ text, bgStyle = "before:bg-pink-500", angle = "before:-skew-y-3" }) {
  return (
    <>
      <span
        className={`ml-2 relative inline-block before:absolute before:-inset-1 before:block ${angle} ${bgStyle}`}
      >
        <span className="relative text-white dark:text-gray-950">{text}</span>
      </span>
    </>
  );
}
