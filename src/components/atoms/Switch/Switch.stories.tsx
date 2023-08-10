import { Meta, StoryObj } from "@storybook/react"
import Switch from "./Switch"

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
}
export default meta

type story = StoryObj<typeof Switch>
export const Primary: story = {
  args: {},
}