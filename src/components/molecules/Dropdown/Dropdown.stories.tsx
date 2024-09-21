import { Meta, StoryObj } from "@storybook/react"
import React, { SyntheticEvent } from "react"
import Dropdown from "./Dropdown"
import {
  IconUser,
  IconBuilding,
  IconNotification,
  IconCreditCard,
  IconLogout,
  IconLanguage,
  IconChevronUp,
  IconChevronDown,
} from "@tabler/icons-react"
import { DropdownProps, MenuItemShape } from "./utils/types"
import Button from "../../atoms/Button"
import Avatar from "../../atoms/Avatar"
import Divider from "../../atoms/Divider"

const items: MenuItemShape[] = [
  {
    key: "i1",
    label: "Your Profile",
    extraElement: <IconUser size={15} />,
  },
  {
    key: "i2",
    label: "Your Organization",
    extraElement: <IconBuilding size={15} />,
  },
  {
    key: "i3",
    extraElement: <Divider label="Settings" />,
  },
  {
    key: "i4",
    label: "Notifications",
    extraElement: <IconNotification size={15} />,
  },
  {
    key: "i5",
    label: "Payment",
    extraElement: <IconCreditCard size={15} />,
  },
  {
    key: "i6",
    label: "Language",
    extraElement: <IconLanguage size={15} />,
  },
  {
    key: "i7",
    extraElement: <Divider label="" />,
  },
  {
    key: "i8",
    label: "Log Out",
    extraElement: <IconLogout size={15} />,
  },
]

const meta: Meta<typeof Dropdown> = {
  title: "molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    onItemClick: { type: "function" },
    width: { description: "number of pixel" },
    opener: {
      description: "must attach ref to the trigger element",
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center h-[300px] flex-col ">
          <Story />
        </div>
      )
    },
  ],
}

type Story = StoryObj<typeof Dropdown>

const opnr: DropdownProps["opener"] = function opener({
  isOpen,
  setIsOpen,
  ref,
}) {
  return (
    <Avatar
      imgURL=""
      onlineStatus="online"
      size="md"
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: "pointer" }}
      ref={ref}
    >
      Adam Smith
    </Avatar>
  )
}

export const avatarOpener: Story = {
  name: "Avatar Opener",
  args: {
    items: items,
    opener: opnr,
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center justify-center h-[300px] flex-col">
          <Story />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      )
    },
  ],
}

export const ButtonOpener = () => {
  const openerElement: DropdownProps["opener"] = ({
    isOpen,
    setIsOpen,
    ref,
  }) => (
    <Button
      onClick={() => setIsOpen((prev) => !prev)}
      rightIcon={isOpen ? <IconChevronUp /> : <IconChevronDown />}
      ref={ref}
    >
      Click
    </Button>
  )

  const onClick = (e: SyntheticEvent) => {
    console.log((e.target as HTMLLIElement).innerText)
  }

  return (
    <div className="w-full">
      <Dropdown items={items} opener={openerElement} onItemClick={onClick} />
    </div>
  )
}

export const HoverOpener = () => {
  const openerElement: DropdownProps["opener"] = ({
    isOpen,
    setIsOpen,
    ref,
  }) => (
    <Button
      onMouseOver={() => setIsOpen(true)}
      rightIcon={isOpen ? <IconChevronUp /> : <IconChevronDown />}
      ref={ref}
    >
      Hover Over
    </Button>
  )

  return <Dropdown items={items} opener={openerElement} />
}

export default meta
