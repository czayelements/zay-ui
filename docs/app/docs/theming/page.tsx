import type { Metadata } from "next";

export const metadata: Metadata = { title: "Theming" };

const tokens: [string, string, string][] = [
  ["--background", "page", "var(--background)"],
  ["--surface", "cards, wells", "var(--surface)"],
  ["--foreground", "text", "var(--foreground)"],
  ["--muted-foreground", "secondary text", "var(--muted-foreground)"],
  ["--border", "hairlines", "var(--border)"],
  ["--brand", "call to action", "var(--brand)"],
  ["--link", "links, accent text", "var(--link)"],
  ["--ring", "focus ring", "var(--ring)"],
  ["--destructive", "danger", "var(--destructive)"],
  ["--success", "success", "var(--success)"],
  ["--warning", "warning", "var(--warning)"],
  ["--inverse", "reversed panels", "var(--inverse)"],
];

export default function Theming() {
  return (
    <>
      <h1>Theming</h1>
      <p>
        Every measurement is a CSS custom property in <code>tokens.css</code>. Re-theme by overriding the semantic tokens after importing the styles;
        components, blocks and Tailwind utilities all follow.
      </p>

      <h2>Colour</h2>
      <p>Colour is a signal, never decoration: sage for the main action, moss for links and focus. Dark mode redefines the same names.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tokens.map(([name, role, value]) => (
          <div key={name}>
            <div className="docs-swatch" style={{ background: value }} />
            <p style={{ marginTop: "0.375rem" }}>
              <code>{name}</code>
              <br />
              <span className="text-sm">{role}</span>
            </p>
          </div>
        ))}
      </div>

      <h2>Make it yours</h2>
      <pre className="docs-code" style={{ borderTop: "1px solid var(--border)", borderRadius: "var(--radius-lg)", marginTop: "1rem" }}>
        <code>{`:root {
  --brand: #f5c26b;           /* the conversion colour */
  --brand-foreground: #1b1d1b;
  --link: #8a5a00;
  --ring: #b87a00;
}
.dark {
  --link: #f0c27a;
}`}</code>
      </pre>

      <h2>Shape and type</h2>
      <p>
        Radii step through <code>--radius-xs</code> to <code>--radius-xl</code> (4 to 20px); full rounding is only for badges and avatars. The type scale is
        fluid: <code>text-display</code>, <code>text-h1</code> to <code>text-h3</code>, <code>text-lead</code>, <code>text-body</code>, <code>text-meta</code> (Tailwind utilities).
        Weights stay at 400 to 600 so headings are tight and calm.
      </p>

      <h2>Conventions</h2>
      <ul>
        <li>No card inside a card. For a recessed block use a plain tinted surface.</li>
        <li>No small uppercase kicker above a heading: the heading carries its own weight.</li>
        <li>One saturated colour at a time; accent only for action, links and focus.</li>
        <li>No pill buttons: full rounding belongs to badges.</li>
      </ul>
    </>
  );
}
