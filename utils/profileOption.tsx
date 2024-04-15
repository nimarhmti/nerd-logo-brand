import { DetailsSVG, NotificationSVG } from "@/public/Icons";

export interface profileOptItemsModel {
  name?: string;
  id: string;
  icon: React.ReactNode;
}

export const profileOptItems: profileOptItemsModel[] = [
  {
    id: "notification",
    icon: <NotificationSVG className="fill-baseColor" />,
  },
  {
    id: "details",
    icon: <DetailsSVG className="fill-baseColor" />,
  },
];
