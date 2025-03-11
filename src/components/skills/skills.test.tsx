import { render, screen, logRoles } from '@testing-library/react'
import Skills from './skills'

describe('skills', () => {
  const skills = ['html', 'css', 'javascript']

  test('renders list correctly!', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders list item correctly!', () => {
    render(<Skills skills={skills} />)
    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(skills.length)
  })

  test('Login button renders correctly!', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button rendered eventually', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      },
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})
