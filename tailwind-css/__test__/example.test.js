/**
 * @jest-environment jsdom
 */

import Example from "../pages/index"
import { render, screen } from "@testing-library/react"

test('testing', async () => {
  render(<Example />)
  screen.debug()
  expect(screen.getByRole("testing")).toHaveTextContent("welcome")
})