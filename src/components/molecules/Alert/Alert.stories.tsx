import { Meta, StoryObj } from "@storybook/react"
import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react"
import React from "react"
import { CommonProps } from "../../../theme/constants"
import { text } from "../../../theme/mapper"
import Link from "../../atoms/Link/Link"
import { Alert } from "./Alert"
type AlertType = Exclude<typeof Alert, CommonProps>

const icons = {
  AlertTriangle: <IconAlertTriangleFilled className={text["danger"][500]} />,
  Alert: <IconAlertCircleFilled className={text["warning"][500]} />,
  DiscountCheck: <IconDiscountCheckFilled className={text["success"][500]} />,
}

const meta: Meta<AlertType> = {
  title: "Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: [],
    },
  },
}
type story = StoryObj<typeof Alert>

export const Primary: story = {
  args: {
    color: "success",
    title: "Alert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus sit sit facilisis dictumst bibendum. Lorem ipsum dolor sit amet dictumst ipsum consectetur adipiscing.",
    closable: true,
    sideIcon: <IconDiscountCheckFilled className={text["success"][500]} />,
    footer: <Link href="http://www.google.com" text="Search" target="_blank" />,
  },
  argTypes: {
    onClose: { control: false },
    footer: { type: "string" || "function" },
    sideIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
}

export default meta
