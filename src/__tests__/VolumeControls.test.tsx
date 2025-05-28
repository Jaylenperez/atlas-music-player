// src/__tests__/VolumeControls.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { VolumeControls } from "../components/VolumeControls";

describe("VolumeControls component", () => {
  test("matches snapshot in light mode", () => {
    const mockChange = vi.fn();
    const { container } = render(
      <VolumeControls lightMode={true} volume={25} onVolumeChange={mockChange} />
    );
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot in dark mode", () => {
    const mockChange = vi.fn();
    const { container } = render(
      <VolumeControls lightMode={false} volume={75} onVolumeChange={mockChange} />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders button with correct aria-label", () => {
    const mockChange = vi.fn();
    render(<VolumeControls lightMode={false} volume={50} onVolumeChange={mockChange} />);
    const btn = screen.getByRole("button", { name: /volume/i });
    expect(btn).toBeInTheDocument();
  });

  test("slider reflects `volume` prop and calls `onVolumeChange` when moved", () => {
    const mockChange = vi.fn();
    render(<VolumeControls lightMode={false} volume={40} onVolumeChange={mockChange} />);
    
    const slider = screen.getByRole("slider", { name: /volume slider/i });
    // initial value
    expect((slider as HTMLInputElement).value).toBe("40");
    
    // change to 65
    fireEvent.change(slider, { target: { value: "65" } });
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(65);
  });
});
