import { useArgs } from "@storybook/preview-api"
import { Meta, StoryObj } from "@storybook/react"
import {
  IconAlertCircle,
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react"
import React from "react"
import { text } from "../../../theme/mapper"
import Button from "../../atoms/Button"
import Dialog from "./Dialog"

const icons = {
  none: "",
  AlertSuccess: (
    <div className="w-8 h-8 p-3 bg-green-200 rounded-[999px] border-4 border-orange-100 justify-center items-center inline-flex">
      <div className="w-4 h-4 justify-center items-center inline-flex">
        <div className="text-center text-green-500 text-base font-black font-['Font Awesome 5 Free']">
          <IconAlertCircle />
        </div>
      </div>
    </div>
  ),
  AlertTriangle: <IconAlertTriangleFilled className={text["danger"][500]} />,
  Alert: <IconAlertCircleFilled className={text["warning"][500]} />,
  DiscountCheck: <IconDiscountCheckFilled className={text["success"][500]} />,
}

const meta: Meta<typeof Dialog> = {
  title: "molecules/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Dialog>

export const primary: Story = {
  args: {
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus
        sit sit facilisis dictumst bibendum.
      </p>
    ),
    title: "Dialog",
    icon: icons.AlertSuccess,
    open: false,
    size: "md",
  },
  argTypes: {
    actions: React.Component,
    children: React.Children,
    content: { control: "text" },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    const [{ open }, updateArgs] = useArgs()
    const handleClose = () => {
      updateArgs({ open: !open })
    }
    const actions = [
      <Button key="btn-1" color="danger" onClick={handleClose}>
        Cancel
      </Button>,
      <Button key="btn-2" color="primary" onClick={handleClose}>
        Confirm
      </Button>,
    ]
    return <Dialog {...args} onClose={handleClose} actions={actions} />
  },
  decorators: [
    (Story) => {
      const [{ open }, updateArgs] = useArgs()
      return (
        <div className="flex items-center justify-center h-[400px]">
          <Button onClick={() => updateArgs({ open: !open })}>
            Open Dialog
          </Button>
          <Story />
        </div>
      )
    },
  ],
}

export default meta
