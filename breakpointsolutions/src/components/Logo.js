import React from 'react';
import '../assets/Logo.css'


function Logo({ width, height }) {
  const size = Math.min(width, height*1.03) * 0.8; // adjust this factor to change the size of the logo
  return (
    <div className="logo" style={{ width: size, height: size*1.03 }}>
       <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                version="1.1"
                viewBox="0 0 50.063 51.883"
            >
                <path
                    fill="#fcc900"
                    fillOpacity="1"
                    d="M37.92 42.88q-4.93 5.87-6.48 7.12-2.55 2.04-6.76 1.87-2.89-.11-3-.11-7.84.03-15.68-.07a1.24 1.32 67.6 01-.87-.33L.37 47.03a1.1 1.14 20.1 01-.37-.84V5.82a1.21 1.19 67.8 01.35-.85L4.56.76A2.56 2.55 22.3 016.38 0h17.51q3.88 0 5.93 1.03 2.25 1.12 3.91 3.12 1.58 1.91 1.65 2 6.27 6.84 12.44 13.78 1.88 2.11 2.14 4.19.28 2.16-.2 4.29-.4 1.78-2.04 3.62-2.43 2.73-4.94 5.39-2.59 2.75-4.86 5.46zM5.89 45.93a.51.51 0 00.51.51l20.24.06a1.11 1.18 22.2 00.85-.39l17.32-19.37a1.05 1.07 45 00.01-1.41L27.57 6.07a1.71 1.72 69.3 00-1.28-.57H6.54a.84.85 89.7 00-.85.85z"
                ></path>
                <circle
                    cx="21.78"
                    cy="25.97"
                    r="8.52"
                    fill="#e41400"
                    fillOpacity="1"
                ></circle>
            </svg>
    </div>
  );
}

export default Logo;