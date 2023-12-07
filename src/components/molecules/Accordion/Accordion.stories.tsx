import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Accordion from "./Accordion"
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
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.{" "}
      </p>
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
    color: "primary",
    data: data,
  },
}

export default meta
