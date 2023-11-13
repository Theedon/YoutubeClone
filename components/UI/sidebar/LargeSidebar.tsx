"use client";
import Link from "next/link";
import React, { ElementType, ReactNode, useState } from "react";
import Button, { buttonStyles } from "../Button";
import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

export function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const childrenArray = React.Children.toArray(children).flat();
  const showExpandedButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const Icon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <>
      <div className="">
        {title && (
          <div className="mb-1 ml-4 mt-2 text-lg font-bold">{title}</div>
        )}
        {visibleChildren}
        {showExpandedButton && (
          <Button
            className="ml-2 flex w-full items-center gap-4 rounded-lg p-3"
            onClick={() => setIsExpanded((s) => !s)}
            variant="ghost"
          >
            <Icon className="h-6 w-6" />
            <div> {isExpanded ? "show less" : "show more"}</div>
          </Button>
        )}
      </div>
    </>
  );
}

type LargeSidebarItemProps = {
  title: string;
  IconOrImgUrl: ElementType | string;
  url: string;
  isActive?: boolean;
};
export function LargeSidebarItem({
  title,
  IconOrImgUrl,
  url,
  isActive,
}: LargeSidebarItemProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `ml-2 flex w-full items-center gap-4 rounded-lg p-3 ${
          isActive ? "bg-neutral-100 font-bold hover:bg-secondary" : undefined
        }`,
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <Image
          src={IconOrImgUrl}
          alt="icon image"
          width={50}
          height={50}
          className="h-6 w-6 rounded-full"
        />
      ) : (
        <IconOrImgUrl className="h-6 w-6 flex-shrink-0" />
      )}

      <p className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</p>
    </Link>
  );
}
