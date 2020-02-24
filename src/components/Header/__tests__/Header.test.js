import React from "react"
import { render } from "@testing-library/react"
import Header from "../header"

describe("<Header />", () => {
  it("renders title", () => {
    const title = "My Test Title"
    const { getByText } = render(<Header siteTitle={title} />)

    expect(getByText(title)).toBeInTheDocument()
  })
})
