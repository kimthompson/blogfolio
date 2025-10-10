import { render, screen } from '@testing-library/react'
import Footer from '../footer-desktop'

describe('Footer (Desktop)', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders the Footer (Desktop) component', () => {
    expect(screen).toMatchSnapshot()
  })

  it('has light and dark toggles', () => {
    const { getByText } = screen

    const lightToggle = getByText('Light')
    const darkToggle = getByText('Dark')

    expect(lightToggle).toBeDefined()
    expect(darkToggle).toBeDefined()
  })
})

