import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'

test('input text is converted to lowercase when the conversion mode is lowercase', () => {
  render(<App/>)

  const lowerCaseRadioBtn = screen.getByLabelText('Convert text to lowercase')
  const textInput = screen.getByLabelText('Text to be converted:')

  userEvent.clear(textInput)
  userEvent.type(textInput, 'CONVERT THIS TO LOWERCASE')
  userEvent.click(lowerCaseRadioBtn)
  userEvent.click(screen.getByText('Submit'))

  expect(screen.getByLabelText('Converted text:')).toHaveValue('convert this to lowercase')
})

test('input text is converted to uppercase when the conversion mode is uppercase', () => {
  render(<App/>)

  const upperCaseRadioBtn = screen.getByLabelText('Convert text to uppercase')
  const textInput = screen.getByLabelText('Text to be converted:')

  userEvent.clear(textInput)
  userEvent.type(textInput, 'convert this to uppercase')
  userEvent.click(upperCaseRadioBtn)
  userEvent.click(screen.getByText('Submit'))

  expect(screen.getByLabelText('Converted text:')).toHaveValue('CONVERT THIS TO UPPERCASE')
})