import { HistorySVG, ShareSVG } from "@/public/Icons";

export interface ToolsItem {
  name?: string;
  id: string;
  icon: React.ReactNode;
}

export const toolsItem: ToolsItem[] = [
  {
    id: "notifi",
    name: "History",
    icon: <HistorySVG className="fill-baseColor" />,
  },
  {
    id: "share",
    name: "Share",
    icon: <ShareSVG className="fill-baseColor" />,
  },
];
