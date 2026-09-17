import { useEffect, useState } from 'react'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import toTransparentColor from './assets/toTranperentColor'

function Select2(props) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (props.options) {
      setOptions(
        props.options.map((item) => ({
          value: item.value,
          label: item.label,
        }))
      )
    }
  }, [props.options])

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: 'transparent',
      boxShadow: 'none',
      backgroundColor: '',
      '&:hover': { borderColor: 'transparent' },
      position: 'relative',
      zIndex: 1,
      padding: 0,
    }),
    input: (provided) => ({
      ...provided,
      color: props.style?.color || '#000',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: props.style?.color || '#000',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: props.style?.color ? toTransparentColor(props.style?.color, 0.5) : '#00000075',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: props.style?.dropdownBgColor || '#fff',
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0000' : '#fff',
      color: props.style?.optionColor || '#000',
      '&:hover': { backgroundColor: '#f0f0f0', position: 'relative' },
    }),
  }

  const selectedOption = props.isMulti
    ? options.filter((option) => (props.value || []).includes(option.value))
    : options.find((option) => option.value === props.value) || null

  return (
    props.creatableOptions ?
      <Creatable
        isMulti={props.isMulti || false}
        value={selectedOption}
        onChange={(selectedOption) => {
          props.onChange({
            target: {
              value: props.isMulti
                ? selectedOption.map((opt) => opt.value)
                : selectedOption?.value || '',
            },
          })
        }}
        onCreateOption={(inputValue) => {
          const newOption = { value: inputValue, label: inputValue };
          setOptions((prev) => [...prev, newOption]);
          if (props.isMulti) {
            props.onChange({
              target: {
                value: [...(props.value || []), inputValue]
              }
            });
          } else {
            props.onChange({
              target: {
                value: inputValue
              }
            });
          }
          props.onNewOptionCreated(newOption)
        }}
        onBlur={props.onBlur || null}
        onFocus={props.onFocus || null}
        options={options}
        placeholder={`Select ${props.name}`}
        isDisabled={props.isDisabled || false}
        className={props.className || ''}
        styles={customStyles}
        isSearchable={options.length > 10 || props.searchQuery || false}
      />
      :
      <Select
        isMulti={props.isMulti || false}
        value={selectedOption}
        onChange={(selectedOption) => {
          props.onChange({
            target: {
              value: props.isMulti
                ? selectedOption.map((opt) => opt.value)
                : selectedOption?.value || '',
            },
          })
        }}
        onBlur={props.onBlur || null}
        onFocus={props.onFocus || null}
        options={options}
        placeholder={`Select ${props.name}`}
        isDisabled={props.isDisabled || false}
        className={props.className || ''}
        styles={customStyles}
        isSearchable={options.length > 10 || props.searchQuery || false}
      />
  )
}

export default Select2
