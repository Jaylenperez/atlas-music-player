// src/__tests__/CoverArt.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { CoverArt } from "../components/CoverArt";

describe("CoverArt component", () => {
  test("matches snapshot with default alt", () => {
    const { container } = render(
      <CoverArt src="http://example.com/cover.jpg" />
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot with custom alt", () => {
    const { container } = render(
      <CoverArt src="http://example.com/cover.jpg" alt="Album Cover" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders image with correct src and alt attributes", () => {
    render(<CoverArt src="http://example.com/cover2.png" />);
    const img = screen.getByRole("img", { name: /cover art/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "http://example.com/cover2.png");
    expect(img).toHaveAttribute("alt", "Cover Art");
  });

  test("applies correct Tailwind classes to wrapper and img", () => {
    render(<CoverArt src="dummy-url" alt="Test Alt" />);
    const img = screen.getByRole("img", { name: /test alt/i });
    const wrapper = img.parentElement;

    // wrapper should have flex & justify classes
    expect(wrapper).toHaveClass("flex", "justify-center", "md:justify-start");

    // img should have responsive aspect-square and width classes
    expect(img).toHaveClass(
      "aspect-square",
      "w-full",
      "rounded-md",
      "object-cover",
      "sm:w-72",
      "md:w-80",
      "lg:w-96",
      "xl:w-[50rem]"
    );
  });
});
