"use client";

import { useEffect, useState } from "react";

import {
  Alert, ArrowUpRightIcon, Avatar, AvatarGroup, Badge, BellIcon, Button, Card, CardContent, CardDescription, CardFooter, CardHeader,
  CardTitle, Empty, IconBox, InboxIcon, Meter, Progress, ScrollArea, Separator, Skeleton, Stat, Table, ZapIcon,
} from "@czayelements/zay-ui";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm" padding="lg">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Pick a framework, connect a repository and we take care of the build, previews and rollbacks.
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export function CardInteractiveDemo() {
  return (
    <>
      <Card interactive padding="md" className="w-60">
        <IconBox solid>
          <ZapIcon />
        </IconBox>
        <CardTitle className="mt-4">Fast by default</CardTitle>
        <CardDescription>No runtime styling, no layout shift.</CardDescription>
      </Card>
      <Card tone="raised" padding="md" className="w-60">
        <IconBox>
          <BellIcon />
        </IconBox>
        <CardTitle className="mt-4">Raised</CardTitle>
        <CardDescription>A card that lifts off the page.</CardDescription>
      </Card>
    </>
  );
}

export function BadgeDemo() {
  return (
    <>
      <Badge>Outline</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success" dot>
        Active
      </Badge>
      <Badge variant="warning" dot>
        Pending
      </Badge>
      <Badge variant="destructive" dot>
        Failed
      </Badge>
      <Badge variant="brand" label="New">
        Dark mode is here
      </Badge>
    </>
  );
}

export function AvatarDemo() {
  return (
    <>
      <Avatar src="https://github.com/czaydev.png" alt="czaydev" fallback="CZ" />
      <Avatar fallback="AL" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="lg" fallback="LG" />
      <AvatarGroup>
        <Avatar fallback="A" />
        <Avatar fallback="B" />
        <Avatar fallback="C" />
        <Avatar fallback="+4" />
      </AvatarGroup>
    </>
  );
}

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-lg gap-3">
      <Alert title="Heads up!">You can add components to your app using the CLI.</Alert>
      <Alert tone="info" title="Update available">
        Version 0.2 brings a new date picker.
      </Alert>
      <Alert tone="success" title="Payment received">
        Thank you. A receipt is on its way to your inbox.
      </Alert>
      <Alert tone="warning" title="Storage almost full">
        You have used 92% of your quota.
      </Alert>
      <Alert tone="danger" title="Deployment failed">
        The build exited with code 1. Check the logs for details.
      </Alert>
    </div>
  );
}

export function ProgressDemo() {
  const [value, setValue] = useState(13);
  useEffect(() => {
    const id = setTimeout(() => setValue(72), 500);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Progress value={value} aria-label="Upload progress" />
      <Progress value={null} aria-label="Loading" />
    </div>
  );
}

export function MeterDemo() {
  return (
    <div className="w-full max-w-sm">
      <Meter value={64} label="Storage used" locale="en-US" format={{ style: "unit", unit: "percent" }} />
    </div>
  );
}

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  );
}

export function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="text-sm font-medium">zay-ui</div>
      <p className="text-sm text-muted-foreground">An open-source component library.</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Blocks</span>
      </div>
    </div>
  );
}

export function TableDemo() {
  const rows = [
    { id: "INV001", status: "Paid", method: "Credit card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Paid", method: "Bank transfer", amount: "$350.00" },
    { id: "INV004", status: "Failed", method: "Credit card", amount: "$450.00" },
  ];
  const tone = { Paid: "success", Pending: "warning", Failed: "destructive" } as const;
  return (
    <Table wrapperClassName="w-full max-w-2xl">
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th>Method</th>
          <th className="zay-table-numeric">Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="font-medium">{row.id}</td>
            <td>
              <Badge variant={tone[row.status as keyof typeof tone]} dot>
                {row.status}
              </Badge>
            </td>
            <td className="text-muted-foreground">{row.method}</td>
            <td className="zay-table-numeric">{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-64 rounded-lg border border-border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-semibold">Tags</h4>
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i}>
            <div className="py-2 text-sm">v1.2.0-beta.{24 - i}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export function EmptyDemo() {
  return (
    <Empty
      className="w-full max-w-md"
      icon={
        <IconBox size="lg">
          <InboxIcon />
        </IconBox>
      }
      title="No messages yet"
      description="When someone sends you a message, it will show up here."
    >
      <Button variant="primary" size="sm">
        Compose a message
      </Button>
    </Empty>
  );
}

export function StatDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-3">
      <Card padding="md">
        <Stat label="Revenue" value="$48,200" delta="+12.5%" />
      </Card>
      <Card padding="md">
        <Stat label="Active users" value="2,350" delta="+180" />
      </Card>
      <Card padding="md">
        <Stat label="Churn" value="1.2%" delta="-0.3%" trend="down" />
      </Card>
    </div>
  );
}

export function IconBoxDemo() {
  return (
    <>
      <IconBox size="sm">
        <ZapIcon />
      </IconBox>
      <IconBox>
        <ZapIcon />
      </IconBox>
      <IconBox size="lg" solid>
        <ArrowUpRightIcon />
      </IconBox>
    </>
  );
}
