import { Meta, StoryObj } from "@storybook/react"
import Switch from "./Switch"
import React from "react"

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: { onChange: { control: false } },
}
export default meta

type Story = StoryObj<typeof Switch>
export const Primary: Story = {
  args: {
    size: "md",
    color: "success",
  },
}

export const MultipleSwitch: Story = {
  render: () => {
    return (
      <>
        <Switch color="success" size="md" />
        <Switch color="aloha" isOn={true} size="md" />
      </>
    )
  },
}
