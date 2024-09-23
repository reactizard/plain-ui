import { Meta, StoryObj } from "@storybook/react"
import { IconCheck, IconDots, IconExclamationCircle } from "@tabler/icons-react"
import React from "react"
import { Button, Divider, Label } from "../.."
import Card from "./Card"

import { CardGroup } from "./CardGroup"
import CardContent from "./CardContent"
const meta: Meta<typeof Card> = {
  title: "molecules/Card",
  component: Card,
  tags: ["autodocs"],
}

const metaIcon = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1462_119583)">
      <path
        d="M60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 44.9739 10.9706 57.385 25.3125 59.6354V38.6719H17.6953V30H25.3125V23.3906C25.3125 15.8719 29.7913 11.7187 36.6439 11.7187C39.9262 11.7187 43.3594 12.3047 43.3594 12.3047V19.6875H39.5764C35.8497 19.6875 34.6875 22 34.6875 24.3725V30H43.0078L41.6777 38.6719H34.6875V59.6354C49.0294 57.385 60 44.9739 60 30Z"
        fill="#1877F2"
      />
      <path
        d="M41.6777 38.6719L43.0078 30H34.6875V24.3725C34.6875 22 35.8497 19.6875 39.5764 19.6875H43.3594V12.3047C43.3594 12.3047 39.9262 11.7188 36.6439 11.7188C29.7913 11.7188 25.3125 15.8719 25.3125 23.3906V30H17.6953V38.6719H25.3125V59.6354C28.4186 60.1215 31.5814 60.1215 34.6875 59.6354V38.6719H41.6777Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1462_119583">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const twitterIcon = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1462_119590)">
      <path
        d="M30.0007 59.9995C46.5691 59.9995 60.0004 46.5681 60.0004 29.9997C60.0004 13.4313 46.5691 0 30.0007 0C13.4323 0 0.000976562 13.4313 0.000976562 29.9997C0.000976562 46.5681 13.4323 59.9995 30.0007 59.9995Z"
        fill="#55ACEE"
      />
      <path
        d="M48.3765 21.5599C47.0678 22.1398 45.6794 22.52 44.2577 22.6878C45.7554 21.7921 46.8763 20.3824 47.4113 18.7214C46.0037 19.5566 44.4636 20.1449 42.8577 20.461C42.1866 19.7452 41.3756 19.175 40.475 18.7856C39.5744 18.3962 38.6034 18.196 37.6222 18.1973C33.6628 18.1973 30.4515 21.4086 30.4515 25.3681C30.4515 25.9301 30.5151 26.4772 30.6381 27.0023C24.6786 26.7034 19.3945 23.8488 15.8575 19.5091C15.2197 20.6035 14.8845 21.8478 14.8863 23.1145C14.8863 25.6017 16.1532 27.7975 18.0763 29.0831C16.9375 29.048 15.8237 28.7401 14.8286 28.1852L14.8281 28.2762C14.8281 31.7506 17.3008 34.6485 20.5806 35.3068C19.9651 35.4747 19.3298 35.5594 18.6918 35.5587C18.2287 35.5587 17.78 35.5143 17.3426 35.4309C18.2549 38.2791 20.9025 40.3524 24.0411 40.4107C21.5009 42.4044 18.3637 43.4856 15.1345 43.4803C14.5569 43.4803 13.9847 43.4466 13.4248 43.3798C16.7029 45.4874 20.5188 46.606 24.416 46.6018C37.6057 46.6018 44.8187 35.6753 44.8187 26.1986C44.8187 25.8879 44.8117 25.5782 44.7978 25.2713C46.2023 24.2572 47.4142 23.0003 48.3765 21.5599Z"
        fill="#F1F2F2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1462_119590">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const instaIcon = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1462_119597)">
      <path
        d="M60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30Z"
        fill="url(#paint0_linear_1462_119597)"
      />
      <path
        opacity="0.1"
        d="M52.5786 10.2632C48.2049 18.2921 42.0194 26.5737 34.2905 34.3026C26.5615 42.0316 18.2799 48.2053 10.2628 52.5789C9.76019 52.1421 9.27203 51.6868 8.79835 51.2132C5.93515 48.4455 3.6516 45.1356 2.08086 41.4763C0.510116 37.817 -0.31639 33.8817 -0.350464 29.8996C-0.384538 25.9176 0.374501 21.9687 1.88239 18.2831C3.39029 14.5974 5.61686 11.2489 8.43227 8.4327C11.2477 5.6165 14.5956 3.389 18.2808 1.88007C21.966 0.371151 25.9147 -0.38899 29.8968 -0.356028C33.8788 -0.323065 37.8144 0.502342 41.4741 2.07206C45.1338 3.64179 48.4444 5.92441 51.2128 8.78683C51.6865 9.26052 52.1418 9.75262 52.5786 10.2632Z"
        fill="white"
      />
      <path
        d="M37.1057 14.2105H22.8951C20.592 14.2105 18.3831 15.1255 16.7545 16.7541C15.1259 18.3827 14.2109 20.5915 14.2109 22.8947V37.1052C14.2109 39.4084 15.1259 41.6173 16.7545 43.2459C18.3831 44.8745 20.592 45.7895 22.8951 45.7895H37.1057C39.4089 45.7895 41.6177 44.8745 43.2463 43.2459C44.8749 41.6173 45.7899 39.4084 45.7899 37.1052V22.8947C45.7899 20.5915 44.8749 18.3827 43.2463 16.7541C41.6177 15.1255 39.4089 14.2105 37.1057 14.2105ZM43.0267 35.8579C43.0267 37.7591 42.2715 39.5824 40.9271 40.9267C39.5828 42.2711 37.7595 43.0263 35.8583 43.0263H24.1425C22.2413 43.0263 20.418 42.2711 19.0737 40.9267C17.7293 39.5824 16.9741 37.7591 16.9741 35.8579V24.1421C16.9741 22.2409 17.7293 20.4176 19.0737 19.0732C20.418 17.7289 22.2413 16.9737 24.1425 16.9737H35.8583C37.7595 16.9737 39.5828 17.7289 40.9271 19.0732C42.2715 20.4176 43.0267 22.2409 43.0267 24.1421V35.8579Z"
        fill="white"
      />
      <path
        d="M35.7592 24.3L35.6842 24.225L35.6211 24.1618C34.1286 22.6745 32.1071 21.8398 30 21.8408C28.936 21.848 27.8838 22.0648 26.9036 22.4788C25.9233 22.8928 25.0343 23.4959 24.2872 24.2536C23.5401 25.0113 22.9497 25.9088 22.5495 26.8948C22.1494 27.8808 21.9475 28.9359 21.9553 30C21.9537 32.1594 22.8049 34.2321 24.3237 35.7671C25.0677 36.5201 25.9542 37.1173 26.9315 37.524C27.9088 37.9306 28.9573 38.1385 30.0158 38.1355C31.6036 38.1022 33.1474 37.6076 34.4589 36.712C35.7704 35.8164 36.7929 34.5585 37.4018 33.0917C38.0107 31.6249 38.1796 30.0127 37.888 28.4516C37.5963 26.8905 36.8566 25.4479 35.7592 24.3ZM30 35.3526C28.9383 35.3675 27.8962 35.0662 27.0061 34.4872C26.1161 33.9082 25.4183 33.0775 25.0017 32.1008C24.585 31.1242 24.4683 30.0457 24.6663 29.0025C24.8643 27.9593 25.368 26.9985 26.1135 26.2424C26.859 25.4863 27.8126 24.969 28.8529 24.7563C29.8932 24.5437 30.9733 24.6452 31.9557 25.048C32.9381 25.4508 33.7786 26.1368 34.3701 27.0186C34.9617 27.9003 35.2776 28.9381 35.2777 30C35.2829 30.698 35.1505 31.3903 34.888 32.0372C34.6255 32.684 34.2382 33.2728 33.748 33.7699C33.2579 34.267 32.6746 34.6627 32.0315 34.9342C31.3884 35.2058 30.6981 35.348 30 35.3526Z"
        fill="white"
      />
      <path
        d="M40.4339 21.4658C40.436 21.7191 40.3881 21.9703 40.2929 22.2051C40.1978 22.4398 40.0573 22.6535 39.8795 22.8339C39.7017 23.0143 39.49 23.1579 39.2566 23.2563C39.0232 23.3548 38.7727 23.4063 38.5194 23.4079C38.2682 23.4078 38.0196 23.3578 37.7879 23.2609C37.5561 23.164 37.3459 23.0221 37.1694 22.8434C36.902 22.5721 36.7201 22.2282 36.6463 21.8545C36.5724 21.4807 36.6099 21.0936 36.7541 20.7409C36.8983 20.3883 37.1427 20.0857 37.4573 19.8708C37.7718 19.6558 38.1425 19.5378 38.5234 19.5316C38.9692 19.5315 39.4009 19.6879 39.7431 19.9737L39.7826 20.0131C39.8462 20.065 39.9044 20.1232 39.9563 20.1868L39.9997 20.2342C40.2822 20.5823 40.4357 21.0174 40.4339 21.4658Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1462_119597"
        x1="8.78684"
        y1="8.78684"
        x2="51.2132"
        y2="51.2132"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAE100" />
        <stop offset="0.15" stopColor="#FCB720" />
        <stop offset="0.3" stopColor="#FF7950" />
        <stop offset="0.5" stopColor="#FF1C74" />
        <stop offset="1" stopColor="#6C1CD1" />
      </linearGradient>
      <clipPath id="clip0_1462_119597">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const dotButton = (
  <button className="absolute top-4 right-4 bg-gray-200/30 text-white p-1 rounded-full hover:bg-gray-300/50 focus:outline-none">
    <IconDots size={15} />
  </button>
)

type Story = StoryObj<typeof Card>

export const primary: Story = {
  render: () => {
    return (
      <Card align="center" width={300}>
        <CardContent media className="relative">
          <img src="https://placehold.co/300x200/turquoise/white" />
          {dotButton}
        </CardContent>
        <CardContent>
          <Label>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Label>
        </CardContent>
        <CardContent>
          <Button style={{ background: "#34495E" }} fullWidth>
            Upgrade
          </Button>
        </CardContent>
      </Card>
    )
  },
}
export const SocialMedia: Story = {
  render: () => {
    const socialMedia = [
      {
        icon: metaIcon,
        title: "Facebook",
        status: "Connected",
      },
      {
        icon: twitterIcon,
        title: "Twitter",
        status: "Disconnected",
      },
      {
        icon: instaIcon,
        title: "Instagram",
        status: "Connected",
      },
    ]
    return (
      <div className="flex flex-row gap-5">
        {socialMedia.map((item, i) => (
          <Card align="center" width={170} key={`sm-${i}`}>
            <CardContent align="center">{item.icon}</CardContent>
            <CardContent align="center">
              <Label weight="h2">{item.title}</Label>
            </CardContent>
            <CardContent align="center">
              <Label
                weight="md-med"
                color={item.status == "Connected" ? "lime" : "danger"}
              >
                {item.status}
              </Label>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  },
}

export const pricingCard: Story = {
  render: () => {
    const packages = [
      {
        name: "Lite",
        description: "Basic shop and the tools to set up your profile",
        price: "Free",
        priceDescription: "of the monthly income you earn on the market",
        packageBenefit: [
          "Basic shop profile",
          "Customer communication tools",
          "100 promotion posts",
          "Maximum 50 product updates",
        ],
      },
      {
        name: "Pro",
        description: "Pro shop and the tools to set up your profile 🔥",
        price: "$49",
        priceDescription: "of the monthly income you earn on the market",
        packageBenefit: [
          "Basic shop profile",
          "Customer communication tools",
          "100 promotion posts",
          "Maximum 50 product updates",
          "Extented shop profile",
          "Analytics and insight",
          "Unlimited promotion posts",
        ],
      },
    ]

    const packageCards = packages.map((item, index) => {
      return (
        <Card width={300} key={index}>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Label weight="h2">{item.name}</Label>
              <Label weight="sm">{item.description}</Label>
            </div>
          </CardContent>
          <Divider />

          <CardContent>
            <div className="flex flex-row items-center">
              <Label weight="h2" className="basis-1/5">
                {item.price}
              </Label>
              <Label className="basis-3/5">{item.priceDescription}</Label>
              <IconExclamationCircle size={20} className="basis-1/5" />
            </div>
          </CardContent>
          <Divider />

          <CardContent>
            <div className="flex flex-col gap-3">
              {item.packageBenefit.map((item, i) => (
                <Label key={`pkg_bnft-${i}`}>
                  <IconCheck size={15} className="mr-2" />
                  {item}
                </Label>
              ))}
            </div>
          </CardContent>

          <CardContent className="h-full flex flex-col justify-end">
            <Button fullWidth color="purple">
              Start Streaming
            </Button>
          </CardContent>
        </Card>
      )
    })

    return <CardGroup>{packageCards}</CardGroup>
  },
}

export default meta
