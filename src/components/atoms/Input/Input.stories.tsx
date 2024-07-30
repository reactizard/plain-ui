import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Input from "./Input"
const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Input>

export const primary: Story = {
  args: {
    color: "primary",
    placeholder: "Email Email Email Email Email Email",
  },
}

export default meta
