import { render, screen } from '@testing-library/react'
import Users from './users'

describe('Users', () => {
  test('Renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const usersList = await screen.findAllByRole('listitem')
    expect(usersList).toHaveLength(1)
  })
})
