import React from 'react'

// color: primary, secondary, success, danger, warning, info, light, dark
export default function PButton({color, size, variant, children}) {
  return (
    <div className={`btn btn-${color} btn-${size} `}>
      {children}
    </div>
  );
}
