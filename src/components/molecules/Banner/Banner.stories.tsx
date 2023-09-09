import { Meta, StoryObj } from "@storybook/react"
import { IconBrandFacebookFilled, IconBrandReact } from "@tabler/icons-react"
import React from "react"
import { Void } from "../../../icons"
import Button from "../../atoms/Button"
import Link from "../../atoms/Link"
import Banner from "./Banner"

const icons = {
  None: null,
  Void: <Void />,
  Facebook: (
    <IconBrandFacebookFilled style={{ background: "white", color: "blue" }} />
  ),
  React: <IconBrandReact color={"cyan"} />,
}

const dismissables = {
  Button: <Button style={{ color: "white" }}>Button</Button>,
  Link: (
    <Link
      href="https://www.google.com"
      text="Google"
      style={{ color: "white" }}
    />
  ),
}

const meta: Meta<typeof Banner> = {
  title: "molecules/Banner",
  component: Banner,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Banner>

export const primary: Story = {
  args: {
    title: "Banner",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    dismissable: <Button color="primary">Button</Button>,
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
    dismissable: {
      options: Object.keys(dismissables),
      mapping: dismissables,
      control: {
        type: "select",
      },
    },
  },
}

export default meta
