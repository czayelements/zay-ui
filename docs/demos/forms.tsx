"use client";

import { useState } from "react";

import {
  Button, Checkbox, CheckboxGroup, Choice, Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList,
  Field, FieldControl, FieldDescription, FieldError, FieldLabel, Fieldset, FieldsetLegend, Form, Input, InputGroup, Label, MailIcon,
  NumberField, OtpField, Radio, RadioGroup, SearchIcon, Select, SelectContent, SelectItem, SelectTrigger, Slider, Switch, Textarea,
} from "@czayelements/zay-ui";

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="With an error" aria-invalid="true" defaultValue="not-an-email" />
      <div className="flex gap-2">
        <Input size="sm" placeholder="Small" />
        <Input size="lg" placeholder="Large" />
      </div>
    </div>
  );
}

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup start={<SearchIcon />}>
        <Input placeholder="Search…" />
      </InputGroup>
      <InputGroup start={<MailIcon />} end=".com">
        <Input placeholder="yourname" />
      </InputGroup>
    </div>
  );
}

export function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little about yourself" />
    </div>
  );
}

export function FieldDemo() {
  return (
    <Form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="you@example.com" required />
        <FieldDescription>We will never share it.</FieldDescription>
        <FieldError match="valueMissing">Please enter your email.</FieldError>
        <FieldError match="typeMismatch">That does not look like an email.</FieldError>
      </Field>
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </Form>
  );
}

export function FieldsetDemo() {
  return (
    <Fieldset className="w-full max-w-sm">
      <FieldsetLegend>Notifications</FieldsetLegend>
      <CheckboxGroup defaultValue={["email"]}>
        <Choice label="Email" description="Product updates and receipts.">
          <Checkbox value="email" />
        </Choice>
        <Choice label="Push" description="Mentions and replies.">
          <Checkbox value="push" />
        </Choice>
        <Choice label="SMS">
          <Checkbox value="sms" />
        </Choice>
      </CheckboxGroup>
    </Fieldset>
  );
}

export function CheckboxDemo() {
  return (
    <div className="grid gap-3">
      <Choice label="Accept the terms and conditions">
        <Checkbox defaultChecked />
      </Choice>
      <Choice label="Subscribe to the newsletter" description="One email a month, no spam.">
        <Checkbox />
      </Choice>
      <Choice label="Disabled">
        <Checkbox disabled />
      </Choice>
      <Choice label="Indeterminate">
        <Checkbox indeterminate />
      </Choice>
    </div>
  );
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" aria-label="Density">
      <Choice label="Compact">
        <Radio value="compact" />
      </Choice>
      <Choice label="Comfortable">
        <Radio value="comfortable" />
      </Choice>
      <Choice label="Spacious">
        <Radio value="spacious" />
      </Choice>
    </RadioGroup>
  );
}

export function SwitchDemo() {
  return (
    <div className="grid gap-3">
      <Choice label="Airplane mode">
        <Switch />
      </Choice>
      <Choice label="Notifications" description="Receive a push when someone replies.">
        <Switch defaultChecked />
      </Choice>
      <Choice label="Disabled">
        <Switch disabled />
      </Choice>
    </div>
  );
}

export function SliderDemo() {
  const [value, setValue] = useState(40);
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div>
        <div className="mb-1 flex justify-between text-sm">
          <Label>Volume</Label>
          <span className="text-muted-foreground">{value}</span>
        </div>
        <Slider aria-label="Volume" value={value} onValueChange={(v) => setValue(v as number)} />
      </div>
      <div>
        <Label>Price range</Label>
        <Slider aria-label="Price" defaultValue={[20, 70]} />
      </div>
    </div>
  );
}

export function NumberFieldDemo() {
  return (
    <div className="grid gap-4">
      <NumberField defaultValue={2} min={0} max={10} />
      <NumberField defaultValue={19.99} step={0.5} locale="en-US" format={{ style: "currency", currency: "USD" }} />
    </div>
  );
}

export function OtpFieldDemo() {
  return (
    <div className="grid gap-2">
      <Label>Verification code</Label>
      <OtpField length={6} />
      <p className="text-sm text-muted-foreground">Enter the 6-character code we sent you.</p>
    </div>
  );
}

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vite", value: "vite" },
];

export function SelectDemo() {
  return (
    <Select items={frameworks} defaultValue="next">
      <SelectTrigger className="w-56" placeholder="Pick a framework" />
      <SelectContent>
        {frameworks.map((f) => (
          <SelectItem key={f.value} value={f.value}>
            {f.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function ComboboxDemo() {
  return (
    <div className="w-64">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Search a framework…" />
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof frameworks)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
