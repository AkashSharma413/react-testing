import { render, screen } from '@testing-library/react'
import Application from './application'

describe('Application', () => {
  test('Renders Correctly', () => {
    render(<Application />)

    let pageHeadingElement = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeadingElement).toBeInTheDocument()

    let sectionHeadingElement = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeadingElement).toBeInTheDocument()

    let paragraphElement = screen.getByText('All fields are mandatory.', {
      selector: 'p',
    })
    expect(paragraphElement).toBeInTheDocument()

    let pElement = screen.getByText((content) => content.startsWith('All'))
    expect(pElement).toBeInTheDocument()

    let imageElement = screen.getByAltText('A person with laptop')
    expect(imageElement).toBeInTheDocument()

    let closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    let customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    let nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    let nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    let nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    let nameElement4 = screen.getByDisplayValue('Akash')
    expect(nameElement4).toBeInTheDocument()

    let bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    let jobLocationElement = screen.getByRole('listbox')
    expect(jobLocationElement).toBeInTheDocument()

    let termElement = screen.getByRole('checkbox')
    expect(termElement).toBeInTheDocument()

    let termElement2 = screen.getByLabelText('Accept the terms and condition')
    expect(termElement2).toBeInTheDocument()

    let submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()

    expect(submitButtonElement).toBeDisabled()
  })
})
