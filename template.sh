#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Please provide a folder path as an argument."
  exit 1
fi

# Get the component name
component=$(basename "$1")

#atoms/molecules
component_type=$(basename "$(dirname "$1")")

# string to concat
props="Props"

# Get the folder path from the argument
folder_path="$1"

# Check if the folder exists, if not, create it
if [ ! -d "$folder_path" ]; then
  mkdir -p "$folder_path"
fi

# Check if the utils folder exists, if not, create it
util_path="$folder_path/utils"
if [ ! -d "$util_path" ]; then
  mkdir -p "$util_path"
fi

# utils/types.ts
types_name="types.ts"
types_path="$util_path/$types_name"
if [ ! -f "$types_path" ]; then
  touch "$types_path"
fi
echo "Creating $types_path"
cat <<EOT >"$types_path"


import { Colors } from "../../../../theme/constants"

export interface $component$props {
  color?: Colors
}
export type StyleProps = Pick<$component$props, "color">
EOT

# utils/styles.ts
style_name="styles.ts"
style_path="$util_path/$style_name"
if [ ! -f "$style_path" ]; then
  touch "$style_path"
fi
echo "Creating $style_path"
cat <<EOT >"$style_path"


import classNames from "classnames"
import { StyleProps } from "./types"

export const getStyles = ({ color }: StyleProps) => {
  const container = classNames([""])
  return { container }
}
EOT

# index.ts
index_name="index.ts"
index_path="$folder_path/$index_name"
if [ ! -f "$index_path" ]; then
  touch "$index_path"
fi
echo "Creating $index_path"
cat <<EOT >"$index_path"
export { default } from "./$component"
EOT

# $component.stories.tsx
story_name="$component.stories.tsx"
story_path="$folder_path/$story_name"
if [ ! -f "$story_path" ]; then
  touch "$story_path"
fi
echo "Creating $story_path"
cat <<EOT >"$story_path"

import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import $component from "./$component"
const meta: Meta<typeof $component> = {
  title: "$component_type/$component",
  component: $component,
  tags: ["autodocs"],
}

type Story = StoryObj<typeof $component>

export const primary: Story = {
  args: {
    color:"primary"
  },
}

export default meta
EOT

# $component.tsx
component_name="$component.tsx"
component_path="$folder_path/$component_name"
if [ ! -f "$component_path" ]; then
  touch "$component_path"
fi
echo "Creating $component_path"
cat <<EOT >"$component_path"

import React, { FC, forwardRef, useEffect, useRef } from "react"
import { $component$props } from "./utils/types"
import { getStyles } from "./utils/styles"

export const $component: FC<$component$props> = forwardRef<HTMLDivElement, $component$props>(
  function $component({ color = "primary" },ref) {
    const styles = getStyles({ color })
    return (<div ref={ref}>$component</div>)
})
export default $component
EOT

echo "Files created successfully in $folder_path"
