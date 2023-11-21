"use client";
import Link from "next/link";
import Image from "next/image";
import { Video, BellDot, User, Search, Mic, ArrowLeft } from "lucide-react";
import { Button } from "@/components";
import { useEffect, useState } from "react";
import { useSidebarContext } from "@/app/contexts/SidebarContext";
import PageHeaderFirstSection from "./PageHeaderFirstSection";

function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const { toggle, isSmallOpen } = useSidebarContext();

  return (
    <div
      onClick={() => {
        setShowFullWidthSearch(false);
      }}
      className="mx-4 mb-6 flex w-full justify-between gap-10 pt-2 lg:gap-20"
    >
      <PageHeaderFirstSection showFullWidthSearch={showFullWidthSearch} />

      <form
        className={`flex-grow justify-end gap-4 md:flex md:justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <Button
          type="button"
          onClick={() => {
            setShowFullWidthSearch(false);
          }}
          variant="ghost"
          className={`${showFullWidthSearch ? "flex" : "hidden"}`}
        >
          <ArrowLeft />
        </Button>
        <div className="flex max-w-[600px] flex-grow">
          <input
            onClick={(event) => {
              event?.stopPropagation();
            }}
            type="search"
            placeholder="search"
            className=" w-full rounded-l-full  border border-secondary-border px-4 py-1 shadow-inner shadow-secondary outline-none focus:border-blue-500"
          />
          <Button
            type="button"
            className="flex-shrink-0 rounded-r-full border border-l-0 border-secondary-border px-4 py-2"
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          onClick={(event) => {
            event.stopPropagation();
            setShowFullWidthSearch(true);
          }}
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost">
          <Video />
        </Button>
        <Button variant="ghost">
          <BellDot />
        </Button>
        <Button variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
