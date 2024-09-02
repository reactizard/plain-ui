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
    children: "Default Label",
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

export const Variations: Story = {
  render: () => {
    return (
      <div className="flex flex-col w-fit">
        <Label>Default label</Label>
        <Label
          as="a"
          href="www.google.com"
          color="primary"
          className="underline"
        >
          Anchor label
        </Label>
        <Label color="danger">Colored Label</Label>
        <Label as="h1">H1 Label</Label>
        <Label as="h2">H2 Label</Label>
      </div>
    )
  },
}
