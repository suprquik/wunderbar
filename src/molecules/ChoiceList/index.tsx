/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { css, jsx } from '@emotion/react'
// eslint-disable-next-line no-unused-vars
import Choice, { ChoiceProps } from '../../atoms/Choice'
import { grey, red } from '../../styles/colors'
import { subHeading } from '../../styles/font'

type ChoiceListPropTypes = {
  allowMultiple?: boolean
  disabled?: boolean
  separator?: boolean
  error?: string
  title?: string
  name?: string
  className?: string
  id?: string
  choices: ChoiceProps[]
  selected: string[]
  onChange: (selected: string[], name?: string) => void
}

const ChoiceList = ({
  allowMultiple,
  choices,
  disabled,
  separator,
  selected,
  title,
  error,
  name,
  onChange,
  className,
  id
}: ChoiceListPropTypes) => {
  const type = allowMultiple ? 'checkbox' : 'radio'
  const styles = css`
    margin: 0;
    padding: 0;
    border: none;

    legend {
      ${subHeading}
    }

    ${disabled &&
    css`
      legend {
        color: ${grey[500]};
      }
    `}

    ul {
      list-style: none;
      li {
        padding: 4px 0;
      }
    }

    ${separator &&
    css`
      li {
        border-bottom: 1px solid ${grey[400]};

        &:nth-last-child(1) {
          border-bottom: 0px;
        }
      }
    `}
  `

  function updateSelectedChoices({ value }: ChoiceProps, checked: boolean) {
    let val
    if (checked) {
      val = allowMultiple ? [...selected, value] : [value]
    } else {
      val = selected.filter((selectedChoice) => selectedChoice !== value)
    }

    onChange(val, name)
  }

  return (
    <fieldset className={className} id={id} css={styles}>
      {title && <legend>{title}</legend>}
      <ul>
        {choices.map((choice, index) => (
          <li key={choice.label + index}>
            <Choice
              {...choice}
              type={type}
              disabled={disabled}
              checked={isSelected(choice, selected)}
              onChange={(checked) => updateSelectedChoices(choice, checked)}
            />
          </li>
        ))}
      </ul>
      {error && (
        <span
          css={css`
            color: ${red[600]} !important;
          `}
        >
          {error}
        </span>
      )}
    </fieldset>
  )
}

export default ChoiceList

ChoiceList.defaultProps = {
  choices: [],
  selected: [],
  onChange: () => {}
}

const isSelected = ({ value }: ChoiceProps, selected: string[]): boolean => {
  return selected.includes(value)
}