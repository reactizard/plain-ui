import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Breadcrumb from "./Breadcrumb"
const meta: Meta<typeof Breadcrumb> = {
  title: "molecules/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Breadcrumb>

export const primary: Story = {
  args: {
    color: "primary",
    children: "helo",
  },
}

const GroupTemplate: Story = {
  argTypes: {},
  render: () => {
    return (
      <Breadcrumb.Group>
        <Breadcrumb>Hello</Breadcrumb>
        <Breadcrumb>Adam Smith</Breadcrumb>
        <Breadcrumb> Ishant Patel </Breadcrumb>
        <Breadcrumb>Hello</Breadcrumb>
        <Breadcrumb>Milan Farmer</Breadcrumb>
        <Breadcrumb>Hello</Breadcrumb>
        <Breadcrumb>Hello</Breadcrumb>
        <Breadcrumb>Glen McCanon</Breadcrumb>
      </Breadcrumb.Group>
    )
  },
}

export const GroupBreadcrumb = {
  ...GroupTemplate,
}

export default meta
