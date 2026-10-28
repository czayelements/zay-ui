import Link from "next/link";
import { Children, cloneElement, isValidElement, type ComponentProps, type ReactElement, type ReactNode } from "react";

import { Alert } from "@czayelements/zay-ui";

import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";

/** A grid of tokens with a colour swatch each: `<Tokens tokens={[["background", "The page"]]} />`. */
function Tokens({ tokens }: { tokens: [string, string][] }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {tokens.map(([name, label]) => (
        <div key={name}>
          <div className="dx-color" style={{ backgroundColor: `var(--${name})` }} />
          <p className="!mt-1.5 text-[0.8125rem] !leading-tight">
            <code>--{name}</code>
            <br />
            <span className="text-xs">{label}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

const Cards = ({ children }: { children: ReactNode }) => <div className="dx-card-grid">{children}</div>;

function CardLink({ href, title, children }: { href: string; title: string; children: ReactNode }) {
  return (
    <Link className="dx-index-card" href={href}>
      <strong>{title}</strong>
      <span>{children}</span>
    </Link>
  );
}

/** Fenced code in MDX goes through the same highlighter as <CodeBlock>. */
async function Pre({ children, title }: { children?: ReactNode; title?: string }) {
  const code = (children as { props?: { className?: string; children?: string } } | undefined)?.props;
  const lang = /language-(\w+)/.exec(code?.className ?? "")?.[1] ?? "tsx";
  const source = String(code?.children ?? "").replace(/\n$/, "");
  return <CodeBlock code={source} lang={lang} title={title} />;
}

/** Gives the fenced block inside it a file-name title: <Titled title="app/layout.tsx">```tsx …```</Titled>. */
function Titled({ title, children }: { title: string; children: ReactNode }) {
  return <>{Children.map(children, (child) => (isValidElement(child) ? cloneElement(child as ReactElement<{ title?: string }>, { title }) : child))}</>;
}

export const docComponents = {
  Titled,
  Alert,
  CodeBlock,
  InstallTabs,
  Tokens,
  Cards,
  CardLink,
  pre: Pre,
  a: ({ href = "", ...props }: ComponentProps<"a">) =>
    href.startsWith("/") || href.startsWith("#") ? <Link href={href} {...(props as object)} /> : <a href={href} {...props} />,
};
