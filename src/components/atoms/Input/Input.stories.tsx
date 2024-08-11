import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Input from "./Input"
import {
  IconAlertCircle,
  IconLock,
  IconMail,
  IconMessage,
} from "@tabler/icons-react"
import { text } from "../../../theme/mapper"
const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Input>

export const primary: Story = {
  args: {
    color: "primary",
    placeholder: "Email",
    leftIcon: <IconMessage size={18} />,
    rightIcon: <IconAlertCircle size={18} />,
    label: "Enter your email address",
  },
}

export const password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    leftIcon: <IconLock size={18} />,
  },
}

export const disabled: Story = {
  args: {
    disabled: true,
    leftIcon: <IconMessage size={18} />,
    rightIcon: <IconAlertCircle size={18} />,
  },
}

export const error: Story = {
  args: {
    placeholder: "Email",
    error: true,
    errorText: "Invalid email",
    leftIcon: <IconMail className={text["danger"][500]} size={18} />,
  },
}

export default meta
