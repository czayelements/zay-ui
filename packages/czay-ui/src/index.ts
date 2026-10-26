/*
 * czay-ui: React components. Import the styles once:
 *
 *   @import "tailwindcss";
 *   @import "@czayelements/czay-ui/styles.css";
 *
 * Static components (Button, Card, Badge …) have no hooks and work in server
 * components. Interactive ones (Dialog, Menu, Tabs …) are Base UI components
 * and carry "use client".
 */
export { cx } from "./cx.js";

export { Button, buttonClass, type ButtonStyle, type ButtonVariant, type ButtonSize } from "./components/button.js";
export { Card, CardHeader, CardTitle, CardDescription, CardFooter, cardClass, type CardStyle, type CardPadding } from "./components/card.js";
export { Badge, badgeClass } from "./components/badge.js";
export { Tag, tagClass } from "./components/tag.js";
export { IconBox, iconBoxClass, type IconBoxStyle } from "./components/icon-box.js";
export { Kbd } from "./components/kbd.js";
export { Input, Textarea, Label, fieldClass } from "./components/input.js";
export { Skeleton } from "./components/skeleton.js";
export { Callout, type CalloutTone } from "./components/callout.js";
export { Container, Section } from "./components/container.js";

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogActions, DialogClose } from "./components/dialog.js";
export { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose } from "./components/popover.js";
export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./components/tooltip.js";
export { Tabs, TabsList, TabsTab, TabsPanel } from "./components/tabs.js";
export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "./components/accordion.js";
export { Menu, MenuTrigger, MenuContent, MenuItem, MenuLinkItem, MenuSeparator, MenuGroup, MenuLabel } from "./components/menu.js";
export { Select, SelectTrigger, SelectContent, SelectItem } from "./components/select.js";
export { Checkbox } from "./components/checkbox.js";
export { Switch } from "./components/switch.js";
export { Progress } from "./components/progress.js";
export { Field, FieldLabel, FieldControl, FieldDescription, FieldError } from "./components/field.js";
export { Separator } from "./components/separator.js";
