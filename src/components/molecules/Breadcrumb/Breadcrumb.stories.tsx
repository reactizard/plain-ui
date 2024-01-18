import { Meta, StoryObj } from "@storybook/react"
import { IconArrowForward } from "@tabler/icons-react"
import React from "react"
import Breadcrumb from "./Breadcrumb"
import { BreadcrumbProps } from "./utils/types"
const meta: Meta<typeof Breadcrumb> = {
  title: "molecules/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Breadcrumb>

export const primary: Story = {
  args: {
    color: "primary",
    children: "Home",
  },
}

type GroupStory = StoryObj<typeof Breadcrumb.Group>
const GroupTemplate: GroupStory = {
  argTypes: {},
  render: ({ items, ...args }: any) => {
    return (
      <Breadcrumb.Group color={args.color}>
        {items.map((item: BreadcrumbProps, index: number) => {
          return (
            <Breadcrumb key={index} color={item.color}>
              {item.children}
            </Breadcrumb>
          )
        })}
      </Breadcrumb.Group>
    )
  },
}

export const GroupBreadcrumb: object = {
  ...GroupTemplate,
  args: {
    color: "aloha",
    items: [
      { children: "Home" },
      { children: "Profile" },
      { children: "Settings" },
      { children: "Config", color: "danger" },
      { children: "Theme" },
    ],
  },
}

const CustomGroup: GroupStory = {
  argTypes: {},
  render: ({ items, ...args }: any) => {
    return (
      <Breadcrumb.Group color={args.color} separator={args.separator}>
        {items.map((item: BreadcrumbProps, index: number) => {
          return (
            <Breadcrumb
              key={index}
              color={item.color}
              href={item.href}
              {...item}
            >
              {item.children}
            </Breadcrumb>
          )
        })}
      </Breadcrumb.Group>
    )
  },
}

export const CustomGroupTemplate: object = {
  ...CustomGroup,
  args: {
    separator: <IconArrowForward className="text-success-300" />,
    color: "success",
    items: [
      { children: "Home" },
      { children: "Profile" },
      { children: "Settings" },
      {
        children: "Config",
      },
      { children: "Theme", href: "https://tailwindcss.com", target: "_blank" },
    ],
  },
}

export default meta
