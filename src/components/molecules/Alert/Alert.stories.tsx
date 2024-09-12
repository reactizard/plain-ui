import { Meta, StoryObj } from "@storybook/react"
import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react"
import React from "react"
import { CommonProps } from "../../../theme/constants"
import { text } from "../../../theme/mapper"
import { Alert } from "./Alert"
import Label from "../../atoms/Label"
type AlertType = Exclude<typeof Alert, CommonProps>

const icons = {
  none: "",
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
type Story = StoryObj<typeof Alert>

export const Primary: Story = {
  args: {
    color: "success",
    variant: "filled",
    title: "Alert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus sit sit facilisis dictumst bibendum. Lorem ipsum dolor sit amet dictumst ipsum consectetur adipiscing.",
    closable: true,
    sideIcon: <IconDiscountCheckFilled className={text["success"][500]} />,
    footer: (
      <Label as="a" href="http://www.google.com" target="_blank">
        Search
      </Label>
    ),
    onClose: (e) => console.log("The alert has been closed", e.type),
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
