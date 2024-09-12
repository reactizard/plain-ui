import { Meta, StoryObj } from "@storybook/react"
import {
  IconBrandFacebookFilled,
  IconBrandReact,
  IconX,
} from "@tabler/icons-react"
import React from "react"
import { Void } from "../../../icons"
import Button from "../../atoms/Button"
import Banner from "./Banner"
import Label from "../../atoms/Label"

const icons = {
  None: null,
  Void: <Void />,
  Facebook: (
    <IconBrandFacebookFilled
      style={{ background: "white", color: "#0E8FF2" }}
    />
  ),
  React: <IconBrandReact color={"cyan"} />,
}

const dismissables = {
  Button: <Button style={{ color: "white" }}>Button</Button>,
  Link: (
    <Label as="a" href="https://www.google.com" style={{ color: "white" }}>
      Google
    </Label>
  ),
  Icon: <IconX style={{ cursor: "pointer" }} />,
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
