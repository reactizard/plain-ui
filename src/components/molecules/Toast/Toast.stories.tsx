import { Meta, StoryObj } from "@storybook/react"
import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react"
import React from "react"
import { text } from "../../../theme/mapper"
import Toast from "./Toast"
import Label from "../../atoms/Label"

const icons = {
  none: "",
  AlertTriangle: <IconAlertTriangleFilled className={text["danger"][500]} />,
  Alert: <IconAlertCircleFilled className={text["warning"][500]} />,
  DiscountCheck: <IconDiscountCheckFilled className={text["success"][500]} />,
}

const meta: Meta<typeof Toast> = {
  title: "molecules/Toast",
  component: Toast,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Toast>

export const Primary: Story = {
  args: {
    color: "success",
    variant: "filled",
    title: "Toast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    closable: true,
    autoClose: true,
    sideIcon: <IconDiscountCheckFilled className={text["success"][500]} />,
    footer: (
      <Label as="a" href="http://www.google.com" target="_blank">
        Search
      </Label>
    ),
    onClose: (e) => console.log("The Toast has been closed", e.type),
  },
  argTypes: {
    autoClose: { description: "After 10 second" },
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
export const minimal: Story = {
  args: {
    variant: "filled",
    title: "Lorem ipsum dolor sit amet",
    color: "success",
    closable: true,
    autoClose: false,
  },
}

export default meta
