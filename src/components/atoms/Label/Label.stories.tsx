import { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"
import React from "react"
import { FontNames } from "../../../theme/constants/font"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    weight: {
      options: Object.keys(FontNames),
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    color: undefined,
    text: "Hello There",
  },
}

export const Labels: Story = {
  render: () => {
    return (
      <div className="flex flex-col">
        <Label text="xsRegular" weight="xs" />
        <Label text="smRegular" weight="sm" />
        <Label text="mdRegular" weight="md" />
        <Label text="lgRegular" weight="lg" />
        <Label text="xsSemiBold" weight="xs-med" />
        <Label text="smSemiBold" weight="sm-med" />
        <Label text="mdSemiBold" weight="md-med" />
        <Label text="lgSemiBold" weight="lg-med" />
        <Label text="h4Bold" weight="h4" />
        <Label text="h3Bold" weight="h3" />
        <Label text="h2Bold" weight="h2" />
        <Label text="h1Bold" weight="h1" />
      </div>
    )
  },
}
