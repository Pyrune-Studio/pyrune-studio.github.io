import type { MDXComponents } from "mdx/types";

// Styling of MDX content is handled by the `.legal` class (globals.css).
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
