import { Component, VoidProps } from "solid-js"

export type ActiveIndicatorProps = {
} & VoidProps

export const ActiveIndicator: Component<ActiveIndicatorProps> = (_) => {
  const style = { transformOrigin: '' }

  return (
    <span class="md3-field__active-indicator"
      style={style}></span>
  )
}
