import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt = '', className = '', style = {}, fallback = 'https://via.placeholder.com/300x160?text=No+image' }){
  const [s, setS] = useState(src);
  return (
    <img
      src={s}
      alt={alt}
      className={className}
      style={{display:'block', ...style}}
      onError={() => { if(s !== fallback) setS(fallback); }}
    />
  );
}
