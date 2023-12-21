import { Meta, StoryObj } from "@storybook/react"
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconCaretDownFilled,
  IconPlus,
} from "@tabler/icons-react"
import React from "react"
import { text } from "../../../theme/mapper"
import { Rating } from "../../atoms/Rating"
import Accordion from "./Accordion"
import { AccordionDataShape } from "./utils/types"

const icons = {
  none: "",
  Plus: <IconPlus className={text["danger"][500]} />,
  Down: <IconArrowDown className={text["warning"][500]} />,
  CaretDown: <IconCaretDownFilled className="h-5 text-success-500" />,
  ArcheryArrow: <IconArrowDownLeft />,
}

const meta: Meta<typeof Accordion> = {
  title: "molecules/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-[400px]">
        <Story />
      </div>
    ),
  ],
}

type Story = StoryObj<typeof Accordion>

const data: AccordionDataShape[] = [
  {
    label: "This is panel header 1",
    children: (
      <p>There are many variations of passages of Lorem Ipsum available</p>
    ),
    disabled: true,
  },
  {
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
    label: "This is panel header 3",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export const primary: Story = {
  args: {
    data: data,
    multiActive: false,
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
