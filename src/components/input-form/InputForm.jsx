import React from 'react'
import {Group,FormInputLabel,Input} from "./inputform.styles"
const InputForm = ({ label, ...otherProps }) => {
      return (
            <Group>
                  <Input {...otherProps} />
                  {label && (
                        <FormInputLabel shrink={otherProps.value.length}>
                              {label}
                        </FormInputLabel>
                  )}
            </Group>
      )
}

export default InputForm