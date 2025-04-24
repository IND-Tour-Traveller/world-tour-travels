import React from 'react'

export default function Container({children, width,  styles}) {
  return (
    <>
    <div className={`w-[${width?width:'100%'}%] mx-auto ${styles}`}>
        {children}
    </div>
    </>
  );
}
