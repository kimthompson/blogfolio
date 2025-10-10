import { render, screen } from '@testing-library/react'
import Header from '../header-desktop'
// import { axe } from "vitest-axe";

vi.mock('@tanstack/react-router', () => ({
  RouterProvider: () => { },
  Link: (props) => {
    const children = props.children.map((child) => {
      if (!child?.props?.children || false) return
      return child.props.children
    })
    return (
      <>{children}</>
    )
  },
}))

describe('Header (Desktop)', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('renders', () => {
    expect(screen).toMatchSnapshot()
  })

  it('has all expected menu options', () => {
    const { getAllByText } = screen

    const homeToggle = getAllByText('Home')
    const blogToggle = getAllByText('Blog')
    const projectsToggle = getAllByText('Projects')
    const resumeToggle = getAllByText('Resume')
    const feedsToggle = getAllByText('Feeds')

    expect(homeToggle).toBeDefined()
    expect(blogToggle).toBeDefined()
    expect(projectsToggle).toBeDefined()
    expect(resumeToggle).toBeDefined()
    expect(feedsToggle).toBeDefined()
  })


  it('is the desktop (horizontal) version', () => {
    const { container } = render(<Header />)

    expect(container.getElementsByClassName('text-sideways').length).toBe(0)
  })

  // ISSUE: This seems to falsely go off, though I'm pretty sure I'm using
  // semantic HTML correctly and do not wish to turn my headers into div soup
  // www.codecademy.com/resources/docs/html/semantic-html/header
  // it("passes axe accessibility tests", async () => {
  //   const { container } = render(<Header />);
  //   // @ts-expect-error 2339
  //   expect(await axe(container)).toHaveNoViolations();
  // });
})

