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
}

const Routes: RoutesModel[] = [
  {
    name: "Dashboard",
    Icon: <DashboardSVG />,
    href: "/dashboard",
  },
  {
    name: "chat",
    Icon: <ChatSVG />,
    href: "/chat",
  },
  {
    name: "ReWrite",
    Icon: <ReWriterSVG />,
    href: "/rewriter",
  },
  {
    name: "Images",
    Icon: <ImagesSVG />,
    href: "/images",
  },
  {
    name: "translate",
    Icon: <TranslateSVG />,
    href: "/translate",
  },
  {
    name: "grammar",
    Icon: <GrammarSVG />,
    href: "/grammar",
  },
  {
    name: "code",
    Icon: <CodeSVG />,
    href: "/code",
  },
];
export { Routes };
