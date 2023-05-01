import { Component, } from "solid-js"
import './styles/base-styles.css'

export type SupportingTextEndProps = {
  supportText?: string
}

export const SupportingTextEnd: Component<SupportingTextEndProps> = (props) => {
  return (
    <span class="md3-field__supporting-text-end">

      <span>
        {props?.supportText}
      </span>
    </span>
  )
}
