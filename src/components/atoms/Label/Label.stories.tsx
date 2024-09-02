import { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"
import React from "react"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    children: "Label",
    color: "primary",
  },
}

export const Anchor: Story = {
  args: {
    children: "Google",
    as: "a",
    href: "http://google.com",
  },
}

export const title: Story = {
  args: {
    children: "Page Title",
    as: "h1",
    color: "gray",
  },
}
