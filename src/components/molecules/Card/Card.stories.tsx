import { Meta, StoryObj } from "@storybook/react"
import { IconHeartFilled, IconMessage, IconShare3 } from "@tabler/icons-react"
import React from "react"
import { Avatar, Button, Label, Tag } from "../.."
import Card from "./Card"
import CardCover from "./CardCover"
import CardFooter from "./CardFooter"
import CardContent from "./CardContent"
const meta: Meta<typeof Card> = {
  title: "molecules/Card",
  component: Card,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof Card>

export const primary: Story = {
  render: () => {
    return (
      <Card width={250} height={220} align="center">
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1710830549028-8d008023c72f?"
            width={"100%"}
            height={"100%"}
          />
        </CardCover>
        <CardContent>
          <Label text="Facebook" weight="h4" />
        </CardContent>
        <CardFooter>
          <Button color="aloha" style={{ width: "100%" }}>
            Upgrade
          </Button>
        </CardFooter>
      </Card>
    )
  },
}
export default meta
