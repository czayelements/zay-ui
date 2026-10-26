/*
 * zay-ui: React components. Import the styles once:
 *
 *   @import "tailwindcss";
 *   @import "@czayelements/zay-ui/styles.css";
 *
 * Static components (Button, Card, Badge …) have no hooks and work in server
 * components. Interactive ones (Dialog, Menu, Tabs …) are Base UI components
 * and carry "use client".
 */
export { cx, type Cn } from "./cx.js";

/* Actions */
export { Button, ButtonGroup, Spinner, buttonClass, type ButtonStyle, type ButtonVariant, type ButtonSize } from "./components/button.js";
export { Toggle, ToggleGroup } from "./components/toggle.js";
export { Kbd } from "./components/kbd.js";

/* Forms */
export { Input, Textarea, Label, InputGroup, fieldClass, type InputSize } from "./components/input.js";
export { Field, FieldLabel, FieldControl, FieldDescription, FieldError, Fieldset, FieldsetLegend, Form } from "./components/field.js";
export { Checkbox, CheckboxGroup, Choice } from "./components/checkbox.js";
export { RadioGroup, Radio } from "./components/radio.js";
export { Switch } from "./components/switch.js";
export { Slider } from "./components/slider.js";
export { NumberField } from "./components/number-field.js";
export { OtpField } from "./components/otp-field.js";
export { Select, SelectGroup, SelectTrigger, SelectContent, SelectItem, SelectLabel } from "./components/select.js";
export { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxEmpty, ComboboxItem } from "./components/combobox.js";

/* Overlays */
export {
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogBody, DialogActions, DialogClose,
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogClose,
} from "./components/dialog.js";
export { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription, DrawerClose, type DrawerSide } from "./components/drawer.js";
export { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose, HoverCard, HoverCardTrigger, HoverCardContent } from "./components/popover.js";
export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./components/tooltip.js";
export {
  Menu, MenuTrigger, MenuContent, MenuItem, MenuLinkItem, MenuCheckboxItem, MenuRadioGroup, MenuRadioItem, MenuSeparator,
  MenuGroup, MenuLabel, MenuShortcut, MenuSub, MenuSubTrigger, MenuSubContent, ContextMenu, ContextMenuTrigger, ContextMenuContent,
} from "./components/menu.js";
export { CommandPalette, type CommandItem, type CommandGroup } from "./components/command.js";
export { Toaster, useToast } from "./components/toast.js";

/* Navigation */
export { Tabs, TabsList, TabsTab, TabsPanel } from "./components/tabs.js";
export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "./components/accordion.js";
export { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "./components/collapsible.js";
export { Breadcrumb, type BreadcrumbItem } from "./components/breadcrumb.js";
export { Pagination, pageRange } from "./components/pagination.js";
export {
  NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuCard,
} from "./components/navigation-menu.js";

/* Display */
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardClass, type CardStyle, type CardPadding } from "./components/card.js";
export { Badge, badgeClass, type BadgeVariant } from "./components/badge.js";
export { Avatar, AvatarGroup } from "./components/avatar.js";
export { Alert, type AlertTone } from "./components/alert.js";
export { Progress, Meter } from "./components/progress.js";
export { Skeleton } from "./components/skeleton.js";
export { Separator } from "./components/separator.js";
export { Table } from "./components/table.js";
export { ScrollArea } from "./components/scroll-area.js";
export { Empty } from "./components/empty.js";
export { Stat } from "./components/stat.js";
export { IconBox, iconBoxClass, type IconBoxStyle } from "./components/icon-box.js";
export { Container, Section } from "./components/container.js";

/* Icons used by the components, exported for your own use. */
export * from "./components/icons.js";
