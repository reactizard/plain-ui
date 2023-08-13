import { Meta, StoryObj } from "@storybook/react"
import Switch from "./Switch"

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
