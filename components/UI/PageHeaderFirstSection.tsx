import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import { Menu } from "lucide-react";
import { useSidebarContext } from "@/app/contexts/SidebarContext";

type PageHeaderFirstSectionProps = {
  showFullWidthSearch?: boolean;
};

function PageHeaderFirstSection({
  showFullWidthSearch = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`flex flex-shrink-0 items-center gap-4 ${
        showFullWidthSearch ? "hidden" : "flex"
      } `}
    >
      <Button variant="ghost" size="icon" onClick={toggle}>
        <Menu />
      </Button>

      <Link className="flex" href="/">
        <Image
          className="mr-1"
          src="/youtubeLogo.png"
          alt="youtube-logo"
          height={20}
          width={20}
        ></Image>{" "}
        Youtube
      </Link>
    </div>
  );
}

export default PageHeaderFirstSection;
