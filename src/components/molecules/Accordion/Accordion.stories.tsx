import { Meta, StoryObj } from "@storybook/react"
import {
  IconArrowDown,
  IconCaretDownFilled,
  IconPlus,
} from "@tabler/icons-react"
import React from "react"
import { text } from "../../../theme/mapper"
import { Rating } from "../../atoms/Rating"
import Accordion from "./Accordion"

const icons = {
  none: "",
  Plus: <IconPlus className={text["danger"][500]} />,
  Down: <IconArrowDown className={text["warning"][500]} />,
  CaretDown: <IconCaretDownFilled className="h-5 text-success-500" />,
}

const meta: Meta<typeof Accordion> = {
  title: "molecules/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Accordion>

const data = [
  {
    key: "1",
    label: "This is panel header 1",
    children: (
      <p>There are many variations of passages of Lorem Ipsum available,</p>
    ),
    disabled: true,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
        <br />
        Rate this: <Rating color="yellow" size="sm" variant="star" />
      </div>
    ),
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    ),
  },
]

export const primary: Story = {
  args: {
    data: data,
  },
  argTypes: {
    collapseIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
}

export default meta
