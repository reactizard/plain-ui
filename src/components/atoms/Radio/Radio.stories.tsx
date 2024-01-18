import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Radio from "./Radio"
import { RadioGroupProps } from "./utils/types"

type Story = StoryObj<RadioGroupProps>

const meta: Meta<RadioGroupProps> = {
  title: "Atoms/Radio",
  component: Radio.Group,
  tags: ["autodocs"],
}

const GroupTemplate: Story = {
  argTypes: {
    size: { defaultValue: { summary: "md" } },
    direction: { defaultValue: { summary: "column" } },
  },
  render: ({ items, ...args }: any) => {
    return (
      <Radio.Group
        name={args.name}
        size={args.size}
        direction={args.direction}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log("radio:", e.target.value)
        }}
      >
        {items.map((item: object, index: number) => (
          <Radio {...item} key={index} />
        ))}
      </Radio.Group>
    )
  },
}

export const GroupRadio: object = {
  ...GroupTemplate,
  args: {
    items: [
      {
        label: "Radio one",
        value: 1,
        color: "lime",
      },
      { label: "Radio two", value: 2 },
      { label: "Radio three", value: 3 },
    ],
    direction: "vertical",
    name: "radio",
    size: "md",
  },
}

export const RadioSingle: Story = {
  parameters: {},
  name: "Single Radio",
  render: () => (
    <>
      <Radio label="Radio Single" color="primary" labelPosition="left" />
      <Radio
        label="Radio Single"
        color="primary"
        labelPosition="left"
        disabled
      />
    </>
  ),
}

export default meta
