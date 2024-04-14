import {
  GrammarSVG,
  DashboardSVG,
  CodeSVG,
  ImagesSVG,
  TranslateSVG,
  ChatSVG,
  ReWriterSVG,
} from "@/public/Icons/index";

export interface RoutesModel {
  name: string;
  Icon: React.ReactNode;
  href: string;
  label: string;
}

const Routes: RoutesModel[] = [
  {
    name: "Dashboard",
    Icon: <DashboardSVG />,
    href: "/dashboard",
    label: "dashboard",
  },
  {
    name: "chat",
    Icon: <ChatSVG />,
    href: "/chat",
    label: "chat",
  },
  {
    name: "ReWrite",
    Icon: <ReWriterSVG />,
    href: "/rewrite",
    label: "rewrite",
  },
  {
    name: "Images",
    Icon: <ImagesSVG />,
    href: "/images",
    label: "images",
  },
  {
    name: "translate",
    Icon: <TranslateSVG />,
    href: "/translate",
    label: "translate",
  },
  {
    name: "Grammar",
    Icon: <GrammarSVG />,
    href: "/grammar",
    label: "grammar",
  },
  {
    name: "Code",
    Icon: <CodeSVG />,
    href: "/code",
    label: "code",
  },
];
export { Routes };
