// src/__tests__/SongTitle.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { SongTitle } from "../components/SongTitle";

describe("SongTitle component", () => {
  test("matches snapshot in light mode", () => {
    const { container } = render(
      <SongTitle lightMode={true} title="Dreamscape" artist="Aurora" />
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot in dark mode", () => {
    const { container } = render(
      <SongTitle lightMode={false} title="Dreamscape" artist="Aurora" />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders title and artist text correctly", () => {
    render(
      <SongTitle lightMode={true} title="Windsong" artist="Skyline" />
    );
    expect(screen.getByText("Windsong")).toBeInTheDocument();
    expect(screen.getByText("Skyline")).toBeInTheDocument();
  });

  test("applies the correct classes based on lightMode", () => {
    // Light mode
    const { rerender } = render(
      <SongTitle lightMode={true} title="Echoes" artist="Reverie" />
    );
    const titleEl = screen.getByRole("heading", { level: 2 });
    const artistEl = screen.getByText("Reverie");

    expect(titleEl).toHaveClass("text-slate-950");
    expect(artistEl).toHaveClass("text-yellow-950");

    // Dark mode
    rerender(
      <SongTitle lightMode={false} title="Echoes" artist="Reverie" />
    );
    expect(titleEl).toHaveClass("text-sky-400");
    expect(artistEl).toHaveClass("text-fuchsia-500");
  });
});
