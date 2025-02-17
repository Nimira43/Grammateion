import { jsx } from 'react/jsx-runtime';
import * as R from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-react';
import { q as qt } from '../_/nitro.mjs';

const i = R.forwardRef(({ ...r }, a) => jsx("nav", { ref: a, "aria-label": "breadcrumb", ...r }));
i.displayName = "Breadcrumb";
const n = R.forwardRef(({ className: r, ...a }, e) => jsx("ol", { ref: e, className: qt("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", r), ...a }));
n.displayName = "BreadcrumbList";
const l = R.forwardRef(({ className: r, ...a }, e) => jsx("li", { ref: e, className: qt("inline-flex items-center gap-1.5", r), ...a }));
l.displayName = "BreadcrumbItem";
const p = R.forwardRef(({ asChild: r, className: a, ...e }, t) => jsx(r ? Slot : "a", { ref: t, className: qt("transition-colors hover:text-foreground", a), ...e }));
p.displayName = "BreadcrumbLink";
const f = R.forwardRef(({ className: r, ...a }, e) => jsx("span", { ref: e, role: "link", "aria-disabled": "true", "aria-current": "page", className: qt("font-normal text-foreground", r), ...a }));
f.displayName = "BreadcrumbPage";
const u = ({ children: r, className: a, ...e }) => jsx("li", { role: "presentation", "aria-hidden": "true", className: qt("[&>svg]:w-3.5 [&>svg]:h-3.5", a), ...e, children: r != null ? r : jsx(ChevronRight, {}) });
u.displayName = "BreadcrumbSeparator";

export { f, i, l, n, p, u };
//# sourceMappingURL=breadcrumb-DZxmAuy3.mjs.map
