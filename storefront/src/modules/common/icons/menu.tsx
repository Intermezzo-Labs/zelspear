import React from "react"

import { IconProps } from "types/icon"

const Menu: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      fill="currentColor"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M3,12H21M9,18H21M3,6H15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      ></path>
    </svg>
  )
}

export default Menu
