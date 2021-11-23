import { render, screen, waitFor } from '@testing-library/react'
import { Async } from './index'

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()

  await waitFor(
    () => {
      return expect(screen.getByText('Button')).toBeInTheDocument()
    },
    { timeout: 1000 }
  )
})
