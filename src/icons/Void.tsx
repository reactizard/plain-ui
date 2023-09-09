import React from "react"

const Void: React.FC = () => {
  return (
    <svg
      width="42"
      height="40"
      viewBox="25 -5 22 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_2200_265)">
        <g clipPath="url(#clip0_2200_265)">
          <rect x="16" width="32" height="32" rx="8" fill="#F8FAFC" />
          <path
            d="M21 35H31.1064C34.3828 35 36.2695 31.2767 34.332 28.6346L27.559 19.3986C25.9607 17.2192 22.7059 17.2192 21.1077 19.3986L17.7744 23.944C17.2713 24.6301 17 25.4587 17 26.3095V31C17 33.2091 18.7909 35 21 35Z"
            fill="#DBE8FF"
          />
          <path
            d="M44 37H27.1499C23.8264 37 21.9526 33.182 23.9857 30.553L35.1691 16.0917C36.7704 14.021 39.8962 14.021 41.4975 16.0917L47.1642 23.4192C47.706 24.1199 48 24.9805 48 25.8662V33C48 35.2091 46.2091 37 44 37Z"
            fill="url(#paint0_linear_2200_265)"
          />
          <rect x="23" y="6" width="6" height="6" rx="3" fill="#5280FF" />
        </g>
        <rect x="16.5" y="0.5" width="31" height="31" rx="7.5" stroke="white" />
      </g>
      <defs>
        <filter
          id="filter0_dd_2200_265"
          x="-4"
          y="0"
          width="72"
          height="72"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_2200_265"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2200_265"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_2200_265"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2200_265"
            result="effect2_dropShadow_2200_265"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2200_265"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2200_265"
          x1="19.0374"
          y1="36.918"
          x2="50.6225"
          y2="15.9608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2970FF" />
          <stop offset="1" stopColor="#0040C1" />
        </linearGradient>
        <clipPath id="clip0_2200_265">
          <rect x="16" width="32" height="32" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Void
