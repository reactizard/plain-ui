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
    children: "I'm a polymorphic label component",
  },
  argTypes: {
    as: {
      description:
        "This is a polymorphic Label component, which renders as a span element by default. You can change the rendered element using the as prop.",
    },
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
        <Label as="a" href="www.google.com">
          Anchor label
        </Label>
        <Label color="danger">Colored Label</Label>
        <Label as="h1">H1 Label</Label>
        <Label as="h2">H2 Label</Label>
      </div>
    )
  },
}
