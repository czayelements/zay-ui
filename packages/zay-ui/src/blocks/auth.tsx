"use client";

import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { Button } from "../components/button.js";
import { Field, FieldControl, FieldError, FieldLabel, Form } from "../components/field.js";
import { OtpField } from "../components/otp-field.js";

/** A centered card for sign-in, sign-up and similar one-task pages. */
export function AuthCard({
  logo,
  title,
  description,
  footer,
  className,
  children,
  ...props
}: Omit<ComponentProps<"div">, "title"> & { logo?: ReactNode; title: ReactNode; description?: ReactNode; footer?: ReactNode }) {
  return (
    <div className={cx("zay-auth", className)} {...props}>
      <div className="zay-auth-card">
        {logo ? <div className="zay-auth-logo">{logo}</div> : null}
        <h1 className="zay-auth-title">{title}</h1>
        {description ? <p className="zay-auth-description">{description}</p> : null}
        <div className="zay-auth-body">{children}</div>
      </div>
      {footer ? <p className="zay-auth-footer">{footer}</p> : null}
    </div>
  );
}

export type AuthProvider = { label: ReactNode; icon?: ReactNode; onClick?: () => void };

function Providers({ providers }: { providers: AuthProvider[] }) {
  return (
    <>
      <div className="zay-auth-providers">
        {providers.map((p, i) => (
          <Button key={i} onClick={p.onClick} style={{ width: "100%" }}>
            {p.icon}
            {p.label}
          </Button>
        ))}
      </div>
      <div className="zay-auth-divider">
        <span>or continue with email</span>
      </div>
    </>
  );
}

type AuthFormProps = Omit<ComponentProps<"div">, "title" | "onSubmit"> & {
  logo?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  providers?: AuthProvider[];
  /** Called with the form values, e.g. { email, password }. */
  onSubmit?: (values: Record<string, string>) => void;
  submitLabel?: ReactNode;
  loading?: boolean;
  /** An error from the server, shown above the button. */
  error?: ReactNode;
};

const values = (form: HTMLFormElement) => Object.fromEntries([...new FormData(form)].map(([k, v]) => [k, String(v)]));

/** Email and password sign-in with optional social providers. */
export function SignInForm({
  logo,
  title = "Welcome back",
  description = "Sign in to your account to continue.",
  providers,
  onSubmit,
  submitLabel = "Sign in",
  loading,
  error,
  forgotHref = "#",
  signUpHref = "#",
  ...props
}: AuthFormProps & { forgotHref?: string; signUpHref?: string }) {
  return (
    <AuthCard
      logo={logo}
      title={title}
      description={description}
      footer={
        <>
          Don&apos;t have an account? <a href={signUpHref}>Sign up</a>
        </>
      }
      {...props}
    >
      {providers?.length ? <Providers providers={providers} /> : null}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(values(e.currentTarget));
        }}
      >
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" placeholder="you@example.com" required autoComplete="email" />
          <FieldError match="valueMissing">Please enter your email.</FieldError>
          <FieldError match="typeMismatch">That does not look like an email.</FieldError>
        </Field>
        <Field name="password">
          <div className="zay-auth-label-row">
            <FieldLabel>Password</FieldLabel>
            <a href={forgotHref}>Forgot password?</a>
          </div>
          <FieldControl type="password" required autoComplete="current-password" />
          <FieldError match="valueMissing">Please enter your password.</FieldError>
        </Field>
        {error ? <p className="zay-field-error">{error}</p> : null}
        <Button type="submit" variant="primary" size="lg" loading={loading} style={{ width: "100%" }}>
          {submitLabel}
        </Button>
      </Form>
    </AuthCard>
  );
}

/** Name, email and password sign-up with optional social providers. */
export function SignUpForm({
  logo,
  title = "Create your account",
  description = "Start in a minute. No credit card required.",
  providers,
  onSubmit,
  submitLabel = "Create account",
  loading,
  error,
  signInHref = "#",
  terms,
  ...props
}: AuthFormProps & { signInHref?: string; terms?: ReactNode }) {
  return (
    <AuthCard
      logo={logo}
      title={title}
      description={description}
      footer={
        <>
          Already have an account? <a href={signInHref}>Sign in</a>
        </>
      }
      {...props}
    >
      {providers?.length ? <Providers providers={providers} /> : null}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(values(e.currentTarget));
        }}
      >
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <FieldControl placeholder="Ada Lovelace" required autoComplete="name" />
          <FieldError match="valueMissing">Please enter your name.</FieldError>
        </Field>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" placeholder="you@example.com" required autoComplete="email" />
          <FieldError match="valueMissing">Please enter your email.</FieldError>
          <FieldError match="typeMismatch">That does not look like an email.</FieldError>
        </Field>
        <Field name="password">
          <FieldLabel>Password</FieldLabel>
          <FieldControl type="password" required minLength={8} autoComplete="new-password" />
          <FieldError match="valueMissing">Choose a password.</FieldError>
          <FieldError match="tooShort">Use at least 8 characters.</FieldError>
        </Field>
        {error ? <p className="zay-field-error">{error}</p> : null}
        <Button type="submit" variant="primary" size="lg" loading={loading} style={{ width: "100%" }}>
          {submitLabel}
        </Button>
        {terms ? <p className="zay-auth-terms">{terms}</p> : null}
      </Form>
    </AuthCard>
  );
}

/** A one-time code entry: six boxes and a confirm button. */
export function VerifyCodeForm({
  logo,
  title = "Check your email",
  description = "We sent a 6-digit code. Enter it below to continue.",
  length = 6,
  onComplete,
  onResend,
  ...props
}: Omit<ComponentProps<"div">, "title"> & {
  logo?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  length?: number;
  onComplete?: (code: string) => void;
  onResend?: () => void;
}) {
  return (
    <AuthCard
      logo={logo}
      title={title}
      description={description}
      footer={
        <>
          Did not get a code?{" "}
          <button type="button" className="zay-link-button" onClick={onResend}>
            Resend
          </button>
        </>
      }
      {...props}
    >
      <div className="zay-auth-otp">
        <OtpField length={length} onValueComplete={onComplete} />
      </div>
    </AuthCard>
  );
}
