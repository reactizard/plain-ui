import { Colors } from "../../constants"

const stroke = {
  primary: {
    [100]: "stroke-primary-100",
    [200]: "stroke-primary-200",
    [300]: "stroke-primary-300",
    [400]: "stroke-primary-400",
    [500]: "stroke-primary-500",
    [600]: "stroke-primary-600",
    [700]: "stroke-primary-700",
    [800]: "stroke-primary-800",
    [900]: "stroke-primary-900",
  },
  gray: {
    [100]: "stroke-gray-100",
    [200]: "stroke-gray-200",
    [300]: "stroke-gray-300",
    [400]: "stroke-gray-400",
    [500]: "stroke-gray-500",
    [600]: "stroke-gray-600",
    [700]: "stroke-gray-700",
    [800]: "stroke-gray-800",
    [900]: "stroke-gray-900",
  },
  success: {
    [100]: "stroke-success-100",
    [200]: "stroke-success-200",
    [300]: "stroke-success-300",
    [400]: "stroke-success-400",
    [500]: "stroke-success-500",
    [600]: "stroke-success-600",
    [700]: "stroke-success-700",
    [800]: "stroke-success-800",
    [900]: "stroke-success-900",
  },
  warning: {
    [100]: "stroke-warning-100",
    [200]: "stroke-warning-200",
    [300]: "stroke-warning-300",
    [400]: "stroke-warning-400",
    [500]: "stroke-warning-500",
    [600]: "stroke-warning-600",
    [700]: "stroke-warning-700",
    [800]: "stroke-warning-800",
    [900]: "stroke-warning-900",
  },
  danger: {
    [100]: "stroke-danger-100",
    [200]: "stroke-danger-200",
    [300]: "stroke-danger-300",
    [400]: "stroke-danger-400",
    [500]: "stroke-danger-500",
    [600]: "stroke-danger-600",
    [700]: "stroke-danger-700",
    [800]: "stroke-danger-800",
    [900]: "stroke-danger-900",
  },
  yellow: {
    [100]: "stroke-yellow-100",
    [200]: "stroke-yellow-200",
    [300]: "stroke-yellow-300",
    [400]: "stroke-yellow-400",
    [500]: "stroke-yellow-500",
    [600]: "stroke-yellow-600",
    [700]: "stroke-yellow-700",
    [800]: "stroke-yellow-800",
    [900]: "stroke-yellow-900",
  },
  orange: {
    [100]: "stroke-orange-100",
    [200]: "stroke-orange-200",
    [300]: "stroke-orange-300",
    [400]: "stroke-orange-400",
    [500]: "stroke-orange-500",
    [600]: "stroke-orange-600",
    [700]: "stroke-orange-700",
    [800]: "stroke-orange-800",
    [900]: "stroke-orange-900",
  },
  melon: {
    [100]: "stroke-melon-100",
    [200]: "stroke-melon-200",
    [300]: "stroke-melon-300",
    [400]: "stroke-melon-400",
    [500]: "stroke-melon-500",
    [600]: "stroke-melon-600",
    [700]: "stroke-melon-700",
    [800]: "stroke-melon-800",
    [900]: "stroke-melon-900",
  },
  pink: {
    [100]: "stroke-pink-100",
    [200]: "stroke-pink-200",
    [300]: "stroke-pink-300",
    [400]: "stroke-pink-400",
    [500]: "stroke-pink-500",
    [600]: "stroke-pink-600",
    [700]: "stroke-pink-700",
    [800]: "stroke-pink-800",
    [900]: "stroke-pink-900",
  },
  purple: {
    [100]: "stroke-purple-100",
    [200]: "stroke-purple-200",
    [300]: "stroke-purple-300",
    [400]: "stroke-purple-400",
    [500]: "stroke-purple-500",
    [600]: "stroke-purple-600",
    [700]: "stroke-purple-700",
    [800]: "stroke-purple-800",
    [900]: "stroke-purple-900",
  },
  azure: {
    [100]: "stroke-azure-100",
    [200]: "stroke-azure-200",
    [300]: "stroke-azure-300",
    [400]: "stroke-azure-400",
    [500]: "stroke-azure-500",
    [600]: "stroke-azure-600",
    [700]: "stroke-azure-700",
    [800]: "stroke-azure-800",
    [900]: "stroke-azure-900",
  },
  aloha: {
    [100]: "stroke-aloha-100",
    [200]: "stroke-aloha-200",
    [300]: "stroke-aloha-300",
    [400]: "stroke-aloha-400",
    [500]: "stroke-aloha-500",
    [600]: "stroke-aloha-600",
    [700]: "stroke-aloha-700",
    [800]: "stroke-aloha-800",
    [900]: "stroke-aloha-900",
  },
  lime: {
    [100]: "stroke-lime-100",
    [200]: "stroke-lime-200",
    [300]: "stroke-lime-300",
    [400]: "stroke-lime-400",
    [500]: "stroke-lime-500",
    [600]: "stroke-lime-600",
    [700]: "stroke-lime-700",
    [800]: "stroke-lime-800",
    [900]: "stroke-lime-900",
  },
  warm: {
    [100]: "stroke-warm-100",
    [200]: "stroke-warm-200",
    [300]: "stroke-warm-300",
    [400]: "stroke-warm-400",
    [500]: "stroke-warm-500",
    [600]: "stroke-warm-600",
    [700]: "stroke-warm-700",
    [800]: "stroke-warm-800",
    [900]: "stroke-warm-900",
  },
}

export const hoverStroke: Record<Colors, string> = {
  primary: "hover:stroke-primary-500",
  gray: "hover:stroke-gray-500",
  success: "hover:stroke-success-500",
  warning: "hover:stroke-warning-500",
  danger: "hover:stroke-danger-500",
  yellow: "hover:stroke-yellow-500",
  orange: "hover:stroke-orange-500",
  melon: "hover:stroke-melon-500",
  pink: "hover:stroke-pink-500",
  purple: "hover:stroke-purple-500",
  azure: "hover:stroke-azure-500",
  aloha: "hover:stroke-aloha-500",
  lime: "hover:stroke-lime-500",
  warm: "hover:stroke-warm-500",
}
export default stroke
