import Link from "next/link";
import { buttonStyles } from "../Button";
import { twMerge } from "tailwind-merge";
import { ElementType } from "react";

type SmallSidebarItemsProps = {
  title: string;
  Icon: ElementType;
  url: string;
};
function SmallSidebarItems({ title, Icon, url }: SmallSidebarItemsProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "justify-content flex flex-col items-center",
      )}
    >
      <Icon className="h-6 w-6" />
      <p>{title}</p>
    </Link>
  );
}
export default SmallSidebarItems;
