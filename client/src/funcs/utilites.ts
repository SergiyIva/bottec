import styled, { css } from "styled-components";
import { Property } from "csstype";

type PropertyLocal =
  | "color"
  | "background-color"
  | "background"
  | "opacity"
  | "visibility"
  | "border-color"
  | "border-radius"
  | "box-shadow"
  | "text-shadow"
  | "transform"
  | "outline"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "position"
  | "height"
  | "margin"
  | "fill"
  | "filter"
  | "stroke"
  | "font-weight";
type Animation = Property.AnimationTimingFunction;

export const getTransition = (
  duration: number = 300,
  property: PropertyLocal[] | PropertyLocal = ["background-color", "color"],
  animation: Animation = "ease"
) => css`
  transition-property: ${Array.isArray(property)
    ? property.join(", ")
    : property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${animation};
`;

export const ScreenReader = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const visible = css`
  opacity: 1;
  visibility: visible;
`;

export const hidden = css`
  opacity: 0;
  visibility: hidden;
`;