import type { MDXComponents } from "mdx/types";
import { Pre, RawCode, highlight } from "codehike/code";
import { ReactNode } from "react";
import NextLink from "next/link";
import { Heading, Link, Text } from "@radix-ui/themes";
import { Slide } from "./slides/slides";

const h1 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="9" mb="6" as="h1" {...props} />
);
const h2 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="8" mb="5" as="h2" {...props} />
);
const h3 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="7" mb="4" as="h3" {...props} />
);
const h4 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="6" mb="4" as="h4" {...props} />
);
const h5 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="5" mb="4" as="h5" {...props} />
);
const h6 = (props: { children?: ReactNode }) => (
  <Heading weight="bold" size="4" mb="4" as="h6" {...props} />
);
const p = (props: { children?: ReactNode }) => (
  <Text as="p" my="4" {...props} />
);
const a = (props: { href?: string; children?: ReactNode }) =>
  props.href?.startsWith("/") || props.href?.startsWith(".") ? (
    <Link asChild>
      <NextLink {...(props as { href: string; children?: ReactNode })} />
    </Link>
  ) : (
    <Link {...props} />
  );

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark");
  return <Pre code={highlighted} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    slide: Slide,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        sizes="100vw"
        style={{ maxWidth: "100%", height: "auto" }}
        {...props}
      />
    ),
    Code,
  };
}