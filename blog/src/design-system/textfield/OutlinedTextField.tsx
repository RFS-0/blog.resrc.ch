import { Component, createEffect, createSignal, JSX } from 'solid-js';
import { OutlinedField, redispatchEvent } from '~/design-system';
import { v4 as uuidv4 } from 'uuid';
import { composeEventHandlers } from '~/design-system';
import { ARIAAttributes } from '../aria/aria';
import './styles/outlined-styles.css';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type OutlinedTextFieldProps = {
  ref?: HTMLElement
  inputProps: JSX.InputHTMLAttributes<HTMLInputElement>;
  name?: string
  defaultValue?: string
  required?: boolean
  label?: string
  supportingText?: string
  prefixText?: string
  suffixText?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  hasLeadingIcon?: boolean
  leadingIcon?: JSX.Element
  hasTrailingIcon?: boolean
  trailingIcon?: JSX.Element
  aria?: ARIAAttributes
}

export const OutlinedTextField: Component<OutlinedTextFieldProps> = (props) => {
  const inputProps = props.inputProps
  const [value, setValue] = createSignal(props.inputProps?.value || props?.defaultValue || '');
  const [dirty, setDirty] = createSignal(false);
  const [focused, setFocused] = createSignal(false);

  const counterId = uuidv4();
  const supportTextId = uuidv4();

  let input: HTMLInputElement;
  // let textField: HTMLElement;

  const focus = () => {
    if (!input) {
      return;
    }
    if (props?.disabled || input.matches(':focus-within')) {
      return;
    }
    input.focus();
  };

  const focusIn = () => {
    setFocused(true);
  };

  const focusOut = () => {
    if (!input) {
      return;
    }
    if (input.matches(':focus-within')) {
      return;
    }
    setFocused(false);
  };

  const getSupportingText = () => {
    return props.errorText ? props.errorText : props?.supportingText;
  }

  const getCounterText = () => {
    const maxLength = Number(props.inputProps?.maxlength)
    const valueIsText = typeof value() === 'string'
    const maxLengthIsValid = !isNaN(maxLength)
    return hasCounter() && valueIsText && maxLengthIsValid ? `${value().toString().length}/${maxLength}` : ''
  }

  const hasCounter = () => {
    return typeof props.inputProps?.maxlength === 'number' ? props.inputProps?.maxlength > 0 : Number.parseInt(props.inputProps?.maxlength || '0') > 0;
  }

  const getAriaDescribedBy = () => {
    const hasSupport = !!getSupportingText();
    return (hasSupport || hasCounter()) ?
      `${hasSupport ? supportTextId : ''} ${hasCounter() ? counterId : ''}` : '';
  }

  const getInputValue = () => {
    return dirty() ? value() : props?.defaultValue || value();
  }

  const handleInput = (e: Event) => {
    setDirty(true);
    setValue((e.target as HTMLInputElement).value);
  }

  createEffect(() => {
    console.log(props.textFieldRef)
  })

  return (
    <span
      ref={props.ref}
      class={
        `
        ${'md3-text-field outlined-text-field'} 
        ${props?.disabled ? 'md3-text-field--disabled' : ''} 
        ${props?.error ? 'md3-text-field--error' : ''} 
      `}
    >
      <OutlinedField
        leadingIcon={
          <span
            class={`
                   ${'md3-text-field__icon'}
                   ${'md3-text-field__icon--leading'}
                   `}
          >
            {props?.leadingIcon}
          </span>
        }
        hasLeadingIcon={props?.hasLeadingIcon}
        trailingIcon={
          <span
            class={`
                   ${'md3-text-field__icon'}
                   ${'md3-text-field__icon--trailing'}
                   `
            }
          >
            {props?.trailingIcon}</span>
        }
        hasTrailingIcon={props?.hasTrailingIcon}
        classes={[`${'md3-text-field__field'}`]}
        disabled={props?.disabled}
        error={props?.error}
        supportingTextStart={getSupportingText()}
        supportingTextEnd={getCounterText()}
        focused={focused()}
        label={props?.label}
        populated={!!getInputValue()}
        required={props?.required}
      >
        <span
          class={`
                 ${'md3-text-field__prefix'}
                 `
          }
        >
          {props?.prefixText}
        </span>
        <input
          {...inputProps}
          value={props.inputProps?.value}
          ref={input!}
          class={`${'md3-text-field__input'}`}
          aria-activedescendant={`${props?.aria?.activeDescendant || ''}`}
          aria-autocomplete={`${props?.aria?.autocomplete || 'none'}`}
          aria-controls={`${props?.aria?.controls || ''}`}
          aria-describedby={`${getAriaDescribedBy() || ''}`}
          aria-expanded={`${props?.aria?.expanded || 'false'}`}
          aria-invalid={props?.error}
          aria-label={`${props?.aria?.label || props?.label || ''}`}
          aria-labelledby={`${props?.aria?.labelledBy || ''}`}
          role={props?.aria?.role}
          onFocusIn={composeEventHandlers([focusIn, inputProps?.onFocusIn])}
          onFocusOut={composeEventHandlers([focusOut, inputProps?.onFocusOut])}
          onClick={composeEventHandlers([focus, inputProps?.onClick])}
          onInput={composeEventHandlers([handleInput, inputProps?.onInput])}
        />
        <span
          class={`
                 ${'md3-text-field__suffix'}
                  `
          }
        >
          {props?.suffixText}
        </span>
      </OutlinedField >
    </span >
  )
}
