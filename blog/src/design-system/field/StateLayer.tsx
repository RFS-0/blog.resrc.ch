import { Component, VoidProps } from "solid-js"
import './styles/filled-styles.css'


export type StateLayerProps = {
} & VoidProps

export const StateLayer: Component<StateLayerProps> = (_) => {
  return (
    <span class="md3-field__state-layer"></span>
  )
}
