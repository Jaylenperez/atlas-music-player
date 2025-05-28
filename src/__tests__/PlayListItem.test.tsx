// src/__tests__/PlayListItem.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem component", () => {
  const sample = {
    title: "Starlight",
    artist: "Nova Echo",
    length: "4:20",
  };

  test("matches snapshot", () => {
    const { container } = render(
      <PlayListItem
        title={sample.title}
        artist={sample.artist}
        length={sample.length}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders title, artist, and length text", () => {
    render(
      <PlayListItem
        title={sample.title}
        artist={sample.artist}
        length={sample.length}
      />
    );
    expect(screen.getByText(sample.title)).toBeInTheDocument();
    expect(screen.getByText(sample.artist)).toBeInTheDocument();
    expect(screen.getByText(sample.length)).toBeInTheDocument();
  });

  test("applies correct Tailwind classes", () => {
    render(
      <PlayListItem
        title={sample.title}
        artist={sample.artist}
        length={sample.length}
      />
    );
    // Title should be an <h3> with text-sky-400
    const titleEl = screen.getByRole("heading", { level: 3, name: sample.title });
    expect(titleEl).toHaveClass("text-sky-400");

    // Artist should be a <p> with text-fuchsia-500
    const artistEl = screen.getByText(sample.artist);
    expect(artistEl.tagName.toLowerCase()).toBe("p");
    expect(artistEl).toHaveClass("text-fuchsia-500");

    // Length should be a <span> with text-fuchsia-300
    const lengthEl = screen.getByText(sample.length);
    expect(lengthEl.tagName.toLowerCase()).toBe("span");
    expect(lengthEl).toHaveClass("text-fuchsia-300");
  });
});
