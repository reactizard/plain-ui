import { Meta, StoryObj } from "@storybook/react"
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconCaretDownFilled,
  IconPlus,
} from "@tabler/icons-react"
import React, { ReactElement } from "react"
import { text } from "../../../theme/mapper"
import { Rating } from "../../atoms/Rating"
import Accordion from "./Accordion"
import { AccordionDataShape, CollapseIconProps } from "./utils/types"
import { Switch } from "../../"
import classNames from "classnames"

const icons: Record<string, ReactElement | string> = {
  none: "",
  Plus: <IconPlus className={text["danger"][500]} />,
  Down: <IconArrowDown className={text["warning"][500]} />,
  CaretDown: <IconCaretDownFilled className="h-5 text-success-500" />,
  ArcheryArrow: <IconArrowDownLeft />,
}

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

export const primary: Story = {
  args: {
    data: data,
    multiActive: false,
  },
  argTypes: {
    collapseIcon: {
      options: Object.keys(icons),
      mapping: {
        Plus: ({ className, ...rest }: CollapseIconProps) => (
          <IconPlus className={`${className} text-success-500`} {...rest} />
        ),
        Down: ({ className, ...rest }: CollapseIconProps) => (
          <IconArrowDown
            className={`${className} text["warning"][500]`}
            {...rest}
          />
        ),
        CaretDown: ({ className, ...rest }: CollapseIconProps) => (
          <IconCaretDownFilled
            className={`${className} h-5 text-success-500`}
            {...rest}
          />
        ),
        ArcheryArrow: ({ className, ...rest }: CollapseIconProps) => (
          <IconArrowDownLeft className={`${className}`} {...rest} />
        ),
      },
      control: {
        type: "select",
      },
    },
  },
}

export const SwitchControl: Story = {
  args: {
    data,
    controlByCollapseIndicator: true,
    //multiActive: true,
    collapseIcon: ({ isOpen, ...rest }: CollapseIconProps) => {
      console.log("isopen...", isOpen)
      return <Switch color="melon" isOn={isOpen} {...rest} />
    },
  },
}

export default meta
