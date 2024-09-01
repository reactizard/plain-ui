interface FontShape {
  fontFamily: Record<string, string[]>
  fontSize: Record<string, Array<any>>
}

export const FontNames = {
  //Paragraph Regular
  xs: { xsRegular: ["10px", { lineHeight: "16px", fontWeight: "400" }] },
  sm: {
    smRegular: ["12px", { lineHeight: "19.2px", fontWeight: "400" }],
  },
  md: { mdRegular: ["14px", { lineHeight: "22.4px", fontWeight: "400" }] },
  lg: { lgRegular: ["16px", { lineHeight: "25.6px", fontWeight: "400" }] },

  //Paragraph Semibold
  "xs-med": { xsSemiBold: ["10px", { lineHeight: "16px", fontWeight: "600" }] },
  "sm-med": {
    smSemiBold: ["12px", { lineHeight: "19.2px", fontWeight: "600" }],
  },
  "md-med": {
    mdSemiBold: ["14px", { lineHeight: "22.4px", fontWeight: "600" }],
  },
  "lg-med": {
    lgSemiBold: ["16px", { lineHeight: "25.6px", fontWeight: "600" }],
  },

  //Heading
  h4: { h4Bold: ["18px", { lineHeight: "21.6px", fontWeight: "700" }] },
  h3: { h3Bold: ["20px", { lineHeight: "24px", fontWeight: "700" }] },
  h2: { h2Bold: ["24px", { lineHeight: "28.8px", fontWeight: "700" }] },
  h1: { h1Bold: ["28px", { lineHeight: "33.6px", fontWeight: "700" }] },
}

export const FontSize = Object.entries(FontNames).reduce(
  (acc, [key, value]) => {
    Object.entries(value).forEach(([subKey, subValue]) => {
      acc[subKey] = [...subValue]
    })
    return acc
  },
  {} as Record<string, any[]>
)

export type FontWeights = keyof typeof FontNames

export const Font: FontShape = {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    inter: ["Inter", "sans-serif"],
  },
  fontSize: FontSize,
}

export default Font
