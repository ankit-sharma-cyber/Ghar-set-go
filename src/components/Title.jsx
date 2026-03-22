import React from 'react'

const Title = ({Title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col ${
      align === "left" 
        ? "justify-center items-center text-center md:justify-start md:items-start md:text-left" 
        : "justify-center items-center text-center"
    }`}>
     <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{Title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title