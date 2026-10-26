import type { Entry } from "./types";

const placement = [
  { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Which side of the trigger the panel opens on." },
  { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment against the trigger." },
  { name: "sideOffset", type: "number", default: "8", description: "Distance from the trigger in pixels." },
];

export const components: Entry[] = [
  /* ── Actions ── */
  {
    slug: "button",
    title: "Button",
    category: "Actions",
    description: "Triggers an action. Seven variants, three sizes, an icon-only form, a loading state, and buttonClass() to give a link the same look.",
    file: "actions",
    server: true,
    demos: [
      { title: "Variants", name: "ButtonVariants" },
      { title: "Sizes", name: "ButtonSizes" },
      { title: "With an icon", name: "ButtonWithIcon" },
      { title: "Loading", name: "ButtonLoading" },
      { title: "As a link", description: "buttonClass() returns the class string, so any element can look like a button.", name: "ButtonAsLink" },
    ],
    props: [
      {
        rows: [
          { name: "variant", type: '"primary" | "brand" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"outline"', description: "Visual weight. primary is solid ink, brand is the accent; use brand once per page." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Height and padding." },
          { name: "icon", type: "boolean", default: "false", description: "Square button for a lone icon. Add an aria-label." },
          { name: "loading", type: "boolean", default: "false", description: "Shows a spinner, sets aria-busy and ignores clicks." },
          { name: "type", type: '"button" | "submit" | "reset"', default: '"button"', description: "Defaults to button so it never submits a form by accident." },
        ],
      },
    ],
    notes: ["Every other `<button>` attribute is passed through.", "Server-component friendly: no hooks, no client code."],
  },
  {
    slug: "button-group",
    title: "Button group",
    category: "Actions",
    description: "Joins related buttons into one segmented control with shared borders.",
    file: "actions",
    server: true,
    demos: [{ name: "ButtonGroupDemo" }],
    notes: ['Renders a `div` with `role="group"`. Add an `aria-label` when the group needs a name.'],
  },
  {
    slug: "toggle",
    title: "Toggle",
    category: "Actions",
    description: "A two-state button: on or off. Use it for bold, mute or favourite.",
    baseUi: "toggle",
    file: "actions",
    demos: [{ name: "ToggleDemo" }],
    props: [
      {
        rows: [
          { name: "outline", type: "boolean", default: "false", description: "Draws a border so the toggle stands on its own." },
          { name: "pressed / defaultPressed", type: "boolean", description: "Controlled or initial state." },
          { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Called when the state changes." },
        ],
      },
    ],
  },
  {
    slug: "toggle-group",
    title: "Toggle group",
    category: "Actions",
    description: "A row of toggles that works as a single-choice or multi-choice control.",
    baseUi: "toggle-group",
    file: "actions",
    demos: [{ name: "ToggleGroupDemo" }],
    props: [
      {
        rows: [
          { name: "value / defaultValue", type: "string[]", description: "The pressed items, by their `value`." },
          { name: "multiple", type: "boolean", default: "false", description: "Allow several items to be pressed at once." },
          { name: "onValueChange", type: "(value: string[]) => void", description: "Called when the selection changes." },
        ],
      },
    ],
  },
  {
    slug: "kbd",
    title: "Kbd",
    category: "Actions",
    description: "Displays a keyboard key or shortcut.",
    file: "actions",
    server: true,
    demos: [{ name: "KbdDemo" }],
  },
  {
    slug: "spinner",
    title: "Spinner",
    category: "Actions",
    description: "An indeterminate loading indicator that takes the colour and size of the text around it.",
    file: "actions",
    server: true,
    demos: [{ name: "SpinnerDemo" }],
    notes: ["Size it with `font-size`. It inherits `currentColor`.", 'Has `role="status"` and an accessible label.'],
  },

  /* ── Forms ── */
  {
    slug: "input",
    title: "Input",
    category: "Forms",
    description: "A text field with hover, focus and error states.",
    file: "forms",
    server: true,
    demos: [{ name: "InputDemo" }],
    props: [
      {
        rows: [
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Height of the field." },
          { name: "aria-invalid", type: "boolean | 'true'", description: "Shows the error style." },
        ],
      },
    ],
    notes: ["Every native `<input>` attribute is passed through. For labels, hints and validation wiring, wrap it in Field."],
  },
  {
    slug: "input-group",
    title: "Input group",
    category: "Forms",
    description: "An input with an icon or text inside it, at the start or the end.",
    file: "forms",
    server: true,
    demos: [{ name: "InputGroupDemo" }],
    props: [
      {
        rows: [
          { name: "start", type: "ReactNode", description: "Icon or text before the input." },
          { name: "end", type: "ReactNode", description: "Icon or text after the input." },
        ],
      },
    ],
  },
  {
    slug: "textarea",
    title: "Textarea",
    category: "Forms",
    description: "A multi-line text field.",
    file: "forms",
    server: true,
    demos: [{ name: "TextareaDemo" }],
  },
  {
    slug: "field",
    title: "Field",
    category: "Forms",
    description: "Wires a label, a control, a description and validation messages together with the right aria attributes.",
    baseUi: "field",
    file: "forms",
    demos: [
      { title: "Validation", name: "FieldDemo" },
      { title: "Fieldset", description: "Group related controls under a legend.", name: "FieldsetDemo" },
    ],
    notes: [
      "`FieldError` shows when its `match` fails; `match` takes any `ValidityState` key or `true` for any error.",
      "`Form` validates every Field on submit and accepts server errors through its `errors` prop.",
    ],
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Forms",
    description: "Lets people toggle one or more options. Supports an indeterminate state and groups.",
    baseUi: "checkbox",
    file: "forms",
    demos: [{ name: "CheckboxDemo" }, { title: "Group", name: "FieldsetDemo" }],
    props: [
      {
        part: "Checkbox",
        rows: [
          { name: "checked / defaultChecked", type: "boolean", description: "Controlled or initial state." },
          { name: "indeterminate", type: "boolean", default: "false", description: "Shows a dash instead of a check." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when toggled." },
        ],
      },
      {
        part: "Choice",
        rows: [
          { name: "label", type: "ReactNode", description: "The clickable label." },
          { name: "description", type: "ReactNode", description: "Secondary text under the label." },
        ],
      },
    ],
  },
  {
    slug: "radio-group",
    title: "Radio group",
    category: "Forms",
    description: "A set of mutually exclusive options.",
    baseUi: "radio-group",
    file: "forms",
    demos: [{ name: "RadioGroupDemo" }],
    props: [
      {
        rows: [
          { name: "value / defaultValue", type: "string", description: "The selected option." },
          { name: "onValueChange", type: "(value: string) => void", description: "Called when the selection changes." },
        ],
      },
    ],
  },
  {
    slug: "switch",
    title: "Switch",
    category: "Forms",
    description: "A control that turns a setting on or off immediately, with a spring-eased thumb.",
    baseUi: "switch",
    file: "forms",
    demos: [{ name: "SwitchDemo" }],
    props: [
      {
        rows: [
          { name: "checked / defaultChecked", type: "boolean", description: "Controlled or initial state." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when toggled." },
        ],
      },
    ],
  },
  {
    slug: "slider",
    title: "Slider",
    category: "Forms",
    description: "Picks a number, or a range, by dragging a thumb. Fully keyboard operable.",
    baseUi: "slider",
    file: "forms",
    demos: [{ name: "SliderDemo" }],
    props: [
      {
        rows: [
          { name: "value / defaultValue", type: "number | number[]", description: "A number gives one thumb, an array gives a range." },
          { name: "min / max / step", type: "number", default: "0 / 100 / 1", description: "The numeric range." },
          { name: "aria-label", type: "string", description: "Names each thumb. Required unless you label it another way." },
        ],
      },
    ],
  },
  {
    slug: "number-field",
    title: "Number field",
    category: "Forms",
    description: "A numeric input with stepper buttons, arrow keys, wheel and locale-aware formatting.",
    baseUi: "number-field",
    file: "forms",
    demos: [{ name: "NumberFieldDemo" }],
    props: [
      {
        rows: [
          { name: "value / defaultValue", type: "number | null", description: "The number." },
          { name: "min / max / step", type: "number", description: "Bounds and increment." },
          { name: "format", type: "Intl.NumberFormatOptions", description: "Display format, e.g. currency or percent." },
        ],
      },
    ],
  },
  {
    slug: "otp-field",
    title: "OTP field",
    category: "Forms",
    description: "A one-time code input with a box per character, paste support and auto-advance.",
    baseUi: "otp-field",
    file: "forms",
    demos: [{ name: "OtpFieldDemo" }],
    props: [
      {
        rows: [
          { name: "length", type: "number", default: "6", description: "Number of characters." },
          { name: "onValueComplete", type: "(value: string) => void", description: "Called once every box is filled." },
        ],
      },
    ],
  },
  {
    slug: "select",
    title: "Select",
    category: "Forms",
    description: "A custom dropdown to pick one option from a list. Replaces the native select.",
    baseUi: "select",
    file: "forms",
    demos: [{ name: "SelectDemo" }],
    props: [
      {
        part: "Select",
        rows: [
          { name: "items", type: "{ label: string; value: string }[]", description: "Pass this so the trigger can show the label of the selected value." },
          { name: "value / defaultValue", type: "string", description: "The selected value." },
          { name: "onValueChange", type: "(value: string) => void", description: "Called when the selection changes." },
        ],
      },
      { part: "SelectTrigger", rows: [{ name: "placeholder", type: "string", description: "Shown while nothing is selected." }] },
    ],
  },
  {
    slug: "combobox",
    title: "Combobox",
    category: "Forms",
    description: "An input that filters a list as you type. Pick from the list or search by name.",
    baseUi: "combobox",
    file: "forms",
    demos: [{ name: "ComboboxDemo" }],
    props: [
      {
        rows: [
          { name: "items", type: "T[]", description: "The options. Objects with `label` and `value` work out of the box." },
          { name: "value / defaultValue", type: "T | null", description: "The selected item." },
          { name: "onValueChange", type: "(value: T | null) => void", description: "Called when the selection changes." },
        ],
      },
    ],
  },

  /* ── Overlays ── */
  {
    slug: "dialog",
    title: "Dialog",
    category: "Overlays",
    description: "A modal window that asks for focus. Traps focus, locks scroll, closes on Escape and outside click.",
    baseUi: "dialog",
    file: "overlays",
    demos: [{ name: "DialogDemo" }],
    props: [
      {
        part: "DialogContent",
        rows: [
          { name: "size", type: '"md" | "lg"', default: '"md"', description: "Maximum width of the dialog." },
          { name: "showClose", type: "boolean", default: "true", description: "Show the close button in the corner." },
        ],
      },
      {
        part: "Dialog",
        rows: [
          { name: "open / defaultOpen", type: "boolean", description: "Controlled or initial state." },
          { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
        ],
      },
    ],
    notes: ["Use `render={<Button />}` on a trigger or close part to merge it with a styled button instead of nesting buttons."],
  },
  {
    slug: "alert-dialog",
    title: "Alert dialog",
    category: "Overlays",
    description: "A dialog that interrupts with a decision. It cannot be dismissed by clicking outside, so use it for destructive or irreversible actions.",
    baseUi: "alert-dialog",
    file: "overlays",
    demos: [{ name: "AlertDialogDemo" }],
  },
  {
    slug: "drawer",
    title: "Drawer",
    category: "Overlays",
    description: "A panel that slides in from the right, left or bottom and can be swiped away on touch devices.",
    baseUi: "drawer",
    file: "overlays",
    demos: [{ name: "DrawerDemo" }],
    props: [
      {
        rows: [
          { name: "side", type: '"right" | "left" | "bottom"', default: '"right"', description: "Which edge it opens from. Set it on Drawer and on DrawerContent." },
          { name: "showClose", type: "boolean", default: "true", description: "Show the close button (hidden for the bottom drawer, which has a handle)." },
        ],
      },
    ],
  },
  {
    slug: "popover",
    title: "Popover",
    category: "Overlays",
    description: "A floating panel anchored to a button, for forms and rich content.",
    baseUi: "popover",
    file: "overlays",
    demos: [{ name: "PopoverDemo" }],
    props: [{ part: "PopoverContent", rows: placement }],
  },
  {
    slug: "hover-card",
    title: "Hover card",
    category: "Overlays",
    description: "A preview that appears when you hover or focus a link.",
    baseUi: "preview-card",
    file: "overlays",
    demos: [{ name: "HoverCardDemo" }],
    props: [{ part: "HoverCardContent", rows: placement }],
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Overlays",
    description: "A short label for an element on hover or focus. Wrap your app in TooltipProvider so delays are shared.",
    baseUi: "tooltip",
    file: "overlays",
    demos: [{ name: "TooltipDemo" }],
    props: [
      { part: "TooltipProvider", rows: [{ name: "delay", type: "number", default: "600", description: "Milliseconds before the first tooltip opens." }] },
      {
        part: "TooltipContent",
        rows: [
          { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Which side of the trigger it opens on." },
          { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment against the trigger." },
          { name: "sideOffset", type: "number", default: "6", description: "Distance from the trigger in pixels." },
        ],
      },
    ],
  },
  {
    slug: "menu",
    title: "Menu",
    category: "Overlays",
    description: "A dropdown of actions with typeahead, arrow keys, checkbox and radio items, and submenus.",
    baseUi: "menu",
    file: "overlays",
    demos: [{ name: "MenuDemo" }],
    props: [
      {
        part: "MenuContent",
        rows: [
          { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Which side of the trigger it opens on." },
          { name: "align", type: '"start" | "center" | "end"', default: '"start"', description: "Alignment against the trigger." },
          { name: "sideOffset", type: "number", default: "6", description: "Distance from the trigger in pixels." },
        ],
      },
      {
        part: "MenuItem",
        rows: [
          { name: "destructive", type: "boolean", default: "false", description: "Colours the item as a dangerous action." },
          { name: "onClick", type: "() => void", description: "Called when chosen." },
        ],
      },
    ],
  },
  {
    slug: "context-menu",
    title: "Context menu",
    category: "Overlays",
    description: "A menu opened by right-clicking, or long-pressing on touch, an area.",
    baseUi: "context-menu",
    file: "overlays",
    demos: [{ name: "ContextMenuDemo" }],
    notes: ["Fill `ContextMenuContent` with the same parts as Menu: `MenuItem`, `MenuSeparator`, `MenuCheckboxItem` and so on."],
  },
  {
    slug: "command",
    title: "Command palette",
    category: "Overlays",
    description: "A ⌘K search dialog: type to filter grouped commands, arrow keys to move, Enter to run.",
    baseUi: "autocomplete",
    file: "overlays",
    demos: [{ name: "CommandDemo" }],
    props: [
      {
        rows: [
          { name: "open", type: "boolean", description: "Controlled open state. Bind the keyboard shortcut yourself." },
          { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when it should open or close." },
          { name: "groups", type: "{ value: string; items: CommandItem[] }[]", description: "Groups of { value, label, icon?, hint? } items." },
          { name: "onSelect", type: "(item: CommandItem) => void", description: "Called when an item is chosen. The palette closes afterwards." },
          { name: "placeholder / emptyText", type: "string", description: "Texts for the field and the no-results state." },
        ],
      },
    ],
    notes: ["This docs site uses it for search. Press ⌘K (Ctrl K) anywhere."],
  },
  {
    slug: "toast",
    title: "Toast",
    category: "Overlays",
    description: "Brief, stackable notifications that fan out on hover and can be swiped away.",
    baseUi: "toast",
    file: "overlays",
    demos: [{ name: "ToastDemo" }],
    props: [
      {
        part: "Toaster",
        rows: [
          { name: "timeout", type: "number", default: "5000", description: "Milliseconds before a toast closes by itself." },
          { name: "limit", type: "number", default: "3", description: "How many toasts show at once." },
        ],
      },
      {
        part: "useToast().add()",
        rows: [
          { name: "title / description", type: "ReactNode", description: "The content." },
          { name: "type", type: '"success" | "error" | string', description: "Changes the icon colour." },
          { name: "timeout", type: "number", description: "Per-toast override. 0 keeps it until dismissed." },
        ],
      },
    ],
    notes: ["Mount `<Toaster>` once near the root of your app, wrapped around your content: `<Toaster>{children}</Toaster>`."],
  },

  /* ── Navigation ── */
  {
    slug: "tabs",
    title: "Tabs",
    category: "Navigation",
    description: "Layers of content shown one at a time. An indicator slides between tabs.",
    baseUi: "tabs",
    file: "navigation",
    demos: [{ name: "TabsDemo" }, { title: "Pill", name: "TabsPillDemo" }],
    props: [
      {
        rows: [
          { name: "variant", type: '"line" | "pill"', default: '"line"', description: "Underlined row or segmented control." },
          { name: "value / defaultValue", type: "string", description: "The active tab." },
          { name: "onValueChange", type: "(value: string) => void", description: "Called when the tab changes." },
        ],
      },
    ],
  },
  {
    slug: "accordion",
    title: "Accordion",
    category: "Navigation",
    description: "A stack of headings that each reveal a section of content, with animated height.",
    baseUi: "accordion",
    file: "navigation",
    demos: [{ name: "AccordionDemo" }],
    props: [
      {
        rows: [
          { name: "multiple", type: "boolean", default: "false", description: "Let several items stay open." },
          { name: "value / defaultValue", type: "string[]", description: "The open items, by their `value`." },
        ],
      },
    ],
  },
  {
    slug: "collapsible",
    title: "Collapsible",
    category: "Navigation",
    description: "One region that expands and collapses. For several, use Accordion.",
    baseUi: "collapsible",
    file: "navigation",
    demos: [{ name: "CollapsibleDemo" }],
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb",
    category: "Navigation",
    description: "The path to the current page, as a trail of links.",
    file: "navigation",
    server: true,
    demos: [{ name: "BreadcrumbDemo" }],
    props: [{ rows: [{ name: "items", type: "{ label: ReactNode; href?: string }[]", description: "The trail. The last item is the current page." }] }],
  },
  {
    slug: "pagination",
    title: "Pagination",
    category: "Navigation",
    description: "Page links with previous and next, collapsing long ranges to an ellipsis.",
    file: "navigation",
    demos: [{ name: "PaginationDemo" }],
    props: [
      {
        rows: [
          { name: "page", type: "number", description: "The current page, starting at 1." },
          { name: "pageCount", type: "number", description: "Total pages." },
          { name: "onPageChange", type: "(page: number) => void", description: "Called with the chosen page." },
          { name: "hrefFor", type: "(page: number) => string", description: "Render real links instead of buttons." },
        ],
      },
    ],
  },
  {
    slug: "navigation-menu",
    title: "Navigation menu",
    category: "Navigation",
    description: "A site header navigation whose triggers open one shared panel that morphs between sections.",
    baseUi: "navigation-menu",
    file: "navigation",
    demos: [{ name: "NavigationMenuDemo", layout: "tall" }],
  },

  /* ── Display ── */
  {
    slug: "card",
    title: "Card",
    category: "Display",
    description: "A container for related content with a header, body and footer.",
    file: "display",
    server: true,
    demos: [{ name: "CardDemo" }, { title: "Interactive and raised", name: "CardInteractiveDemo" }],
    props: [
      {
        rows: [
          { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: "Inner padding." },
          { name: "tone", type: '"default" | "surface" | "raised"', default: '"default"', description: "surface is flat and tinted; raised has a shadow." },
          { name: "interactive", type: "boolean", default: "false", description: "Lift on hover, for cards that are links." },
        ],
      },
    ],
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Display",
    description: "A compact label for status, category or a new feature.",
    file: "display",
    server: true,
    demos: [{ name: "BadgeDemo" }],
    props: [
      {
        rows: [
          { name: "variant", type: '"outline" | "brand" | "solid" | "secondary" | "success" | "warning" | "destructive"', default: '"outline"', description: "Colour treatment." },
          { name: "dot", type: "boolean", default: "false", description: "A status dot before the text." },
          { name: "label", type: "ReactNode", description: "A coloured chip on the left: “New · …”." },
        ],
      },
    ],
  },
  {
    slug: "avatar",
    title: "Avatar",
    category: "Display",
    description: "A user image with initials as the fallback while it loads or when it fails.",
    baseUi: "avatar",
    file: "display",
    demos: [{ name: "AvatarDemo" }],
    props: [
      {
        rows: [
          { name: "src / alt", type: "string", description: "The image." },
          { name: "fallback", type: "ReactNode", description: "Initials or an icon shown when there is no image." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Diameter." },
        ],
      },
    ],
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Display",
    description: "A message that calls attention to information, success, warnings and errors.",
    file: "display",
    server: true,
    demos: [{ name: "AlertDemo" }],
    props: [
      {
        rows: [
          { name: "tone", type: '"neutral" | "info" | "success" | "warning" | "danger"', default: '"neutral"', description: "Colour and icon. warning and danger set role=alert." },
          { name: "title", type: "ReactNode", description: "Bold first line." },
          { name: "icon", type: "ReactNode | false", description: "Replace or hide the icon." },
        ],
      },
    ],
  },
  {
    slug: "progress",
    title: "Progress",
    category: "Display",
    description: "Shows the completion of a task. Pass null for an indeterminate bar.",
    baseUi: "progress",
    file: "display",
    demos: [{ name: "ProgressDemo" }],
    props: [{ rows: [{ name: "value", type: "number | null", description: "0–100, or null while the duration is unknown." }] }],
  },
  {
    slug: "meter",
    title: "Meter",
    category: "Display",
    description: "A bar for a known quantity within a range, such as storage used.",
    baseUi: "meter",
    file: "display",
    demos: [{ name: "MeterDemo" }],
    props: [
      {
        rows: [
          { name: "label", type: "ReactNode", description: "Text on the left of the bar." },
          { name: "value / min / max", type: "number", description: "The measurement and its range." },
        ],
      },
    ],
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    category: "Display",
    description: "A shimmering placeholder shown while content loads.",
    file: "display",
    server: true,
    demos: [{ name: "SkeletonDemo" }],
  },
  {
    slug: "separator",
    title: "Separator",
    category: "Display",
    description: "A hairline that divides content, horizontal or vertical.",
    baseUi: "separator",
    file: "display",
    demos: [{ name: "SeparatorDemo" }],
  },
  {
    slug: "table",
    title: "Table",
    category: "Display",
    description: "A bordered, scrollable data table. Use native table elements inside.",
    file: "display",
    server: true,
    demos: [{ name: "TableDemo" }],
    notes: ['Add `className="zay-table-numeric"` to right-align numeric cells with tabular figures.'],
  },
  {
    slug: "scroll-area",
    title: "Scroll area",
    category: "Display",
    description: "A scrollable region with a slim scrollbar that appears on hover or scroll.",
    baseUi: "scroll-area",
    file: "display",
    demos: [{ name: "ScrollAreaDemo" }],
    notes: ["Give it a height or max-height; content beyond it scrolls."],
  },
  {
    slug: "empty",
    title: "Empty",
    category: "Display",
    description: "A placeholder for a list or panel that has nothing in it yet.",
    file: "display",
    server: true,
    demos: [{ name: "EmptyDemo" }],
  },
  {
    slug: "stat",
    title: "Stat",
    category: "Display",
    description: "A key figure with a label and a change indicator.",
    file: "display",
    server: true,
    demos: [{ name: "StatDemo" }],
    props: [
      {
        rows: [
          { name: "label / value", type: "ReactNode", description: "The caption and the figure." },
          { name: "delta", type: "ReactNode", description: "The change, e.g. +12%." },
          { name: "trend", type: '"up" | "down"', default: '"up"', description: "Colours the delta green or red." },
        ],
      },
    ],
  },
  {
    slug: "icon-box",
    title: "Icon box",
    category: "Display",
    description: "A plate that holds an icon, for feature lists and cards.",
    file: "display",
    server: true,
    demos: [{ name: "IconBoxDemo" }],
    props: [
      {
        rows: [
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Plate size." },
          { name: "solid", type: "boolean", default: "false", description: "Tint with the accent." },
        ],
      },
    ],
  },
];

export const categories = ["Actions", "Forms", "Overlays", "Navigation", "Display"] as const;

export const bySlug = (slug: string) => components.find((c) => c.slug === slug);
