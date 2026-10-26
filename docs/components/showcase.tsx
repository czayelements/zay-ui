import {
  Avatar, AvatarGroup, Badge, Button, Card, CardDescription, CardHeader, CardTitle, Checkbox, Choice, Field, FieldControl, FieldLabel,
  GithubIcon, IconBox, Meter, MailIcon, Slider, Stat, Switch, Table, Tabs, TabsList, TabsPanel, TabsTab, ToggleGroup, Toggle,
  BoldIcon, ItalicIcon, UnderlineIcon, ZapIcon, BellIcon, ShieldIcon,
} from "@czayelements/zay-ui";

/** A composition of real components for the home page. */
export function Showcase() {
  return (
    <div className="dx-showcase">
      <Card padding="lg" tone="raised" className="dx-span-4 flex flex-col">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your email below to get started.</CardDescription>
        </CardHeader>
        <div className="mt-5 grid gap-4">
          <Button className="w-full">
            <GithubIcon /> Continue with GitHub
          </Button>
          <div className="flex items-center gap-3 text-xs text-subtle-foreground">
            <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
          </div>
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="you@example.com" />
          </Field>
          <Choice label="I agree to the terms">
            <Checkbox defaultChecked />
          </Choice>
          <Button variant="primary" className="w-full">
            <MailIcon /> Create account
          </Button>
        </div>
        <p className="mt-auto pt-6 text-center text-sm text-muted-foreground">
          Already have an account? <span className="font-medium text-foreground underline underline-offset-4">Sign in</span>
        </p>
      </Card>

      <div className="dx-span-4 grid gap-4 content-start">
        <Card padding="lg">
          <Stat label="Total revenue" value="$48,200" delta="+12.5% from last month" />
          <div className="mt-5">
            <Meter value={72} label="Quarterly goal" locale="en-US" format={{ style: "unit", unit: "percent" }} />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <AvatarGroup>
              <Avatar size="sm" fallback="AL" />
              <Avatar size="sm" fallback="GH" />
              <Avatar size="sm" fallback="LT" />
              <Avatar size="sm" fallback="+5" />
            </AvatarGroup>
            <Badge variant="success" dot>
              On track
            </Badge>
          </div>
        </Card>
        <Card padding="lg">
          <div className="mb-3 text-sm font-medium">Format</div>
          <ToggleGroup multiple defaultValue={["bold"]} aria-label="Text style">
            <Toggle value="bold" aria-label="Bold">
              <BoldIcon />
            </Toggle>
            <Toggle value="italic" aria-label="Italic">
              <ItalicIcon />
            </Toggle>
            <Toggle value="underline" aria-label="Underline">
              <UnderlineIcon />
            </Toggle>
          </ToggleGroup>
          <div className="mt-5 mb-1 flex justify-between text-sm">
            <span className="font-medium">Brightness</span>
            <span className="text-muted-foreground">64%</span>
          </div>
          <Slider aria-label="Brightness" defaultValue={64} />
        </Card>
      </div>

      <div className="dx-span-4 grid gap-4 content-start">
        <Card padding="lg">
          <div className="mb-4 text-sm font-medium">Notifications</div>
          <div className="grid gap-4">
            {[
              { icon: <BellIcon />, label: "Push notifications", on: true },
              { icon: <MailIcon />, label: "Email digest", on: false },
              { icon: <ShieldIcon />, label: "Security alerts", on: true },
            ].map((row) => (
              <label key={row.label} className="flex items-center gap-3 text-sm">
                <IconBox size="sm">{row.icon}</IconBox>
                <span className="flex-1">{row.label}</span>
                <Switch defaultChecked={row.on} aria-label={row.label} />
              </label>
            ))}
          </div>
        </Card>
        <Card padding="lg" className="zay-dark" style={{ backgroundColor: "var(--background)" }}>
          <IconBox solid>
            <ZapIcon />
          </IconBox>
          <CardTitle className="mt-4">Ship faster</CardTitle>
          <CardDescription>Dark panels work anywhere with one class.</CardDescription>
        </Card>
      </div>

      <Card padding="none" className="dx-span-12">
        <Tabs defaultValue="invoices" className="p-1">
          <TabsList className="px-4">
            <TabsTab value="invoices">Invoices</TabsTab>
            <TabsTab value="members">Members</TabsTab>
            <TabsTab value="usage">Usage</TabsTab>
          </TabsList>
          <TabsPanel value="invoices" className="!pt-0">
            <Table wrapperClassName="!border-0 !rounded-none">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Status</th>
                  <th>Method</th>
                  <th className="zay-table-numeric">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["INV-0042", "Paid", "success", "Visa •••• 4242", "$250.00"],
                  ["INV-0041", "Pending", "warning", "PayPal", "$150.00"],
                  ["INV-0040", "Paid", "success", "Bank transfer", "$350.00"],
                  ["INV-0039", "Failed", "destructive", "Visa •••• 1881", "$450.00"],
                ].map(([id, status, tone, method, amount]) => (
                  <tr key={id}>
                    <td className="font-medium">{id}</td>
                    <td>
                      <Badge variant={tone as "success"} dot>
                        {status}
                      </Badge>
                    </td>
                    <td className="text-muted-foreground">{method}</td>
                    <td className="zay-table-numeric">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabsPanel>
          <TabsPanel value="members" className="p-6 text-sm text-muted-foreground">
            12 members across 3 teams.
          </TabsPanel>
          <TabsPanel value="usage" className="p-6 text-sm text-muted-foreground">
            8.2 GB of 10 GB used this month.
          </TabsPanel>
        </Tabs>
      </Card>
    </div>
  );
}
