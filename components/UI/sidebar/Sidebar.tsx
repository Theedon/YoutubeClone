"use client";
import SmallSidebarItems from "./SmallSidebar";
import { LargeSidebarItem, LargeSidebarSection } from "./LargeSidebar";
import {
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { subscriptions } from "@/data/sidebarItems";
import { playlists } from "@/data/sidebarItems";
import { useSidebarContext } from "@/app/contexts/SidebarContext";
import PageHeaderFirstSection from "../PageHeaderFirstSection";

function Sidebar() {
  const { isSmallOpen, isLargeOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`scrollbar-hidden top-0 flex-col overflow-y-auto overflow-x-hidden lg:hidden ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarItems title="Home" Icon={Home} url="/" />
        <SmallSidebarItems title="Shorts" Icon={Repeat} url="/shorts" />
        <SmallSidebarItems
          title="Subscriptions"
          Icon={Clapperboard}
          url="/subscriptions"
        />
        <SmallSidebarItems title="Library" Icon={Library} url="/library" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-[999] h-full w-full bg-secondary-dark opacity-50 lg:hidden"
        ></div>
      )}
      <aside
        className={`scrollbar-hidden absolute top-0  w-56 flex-col overflow-y-auto overflow-x-hidden lg:sticky ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${
          isSmallOpen
            ? " ro z-[999] flex max-h-screen rounded-r-md bg-white"
            : "hidden"
        }`}
      >
        <div className={`sticky top-0 bg-white px-2 pb-4 pt-2 lg:hidden `}>
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImgUrl={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            IconOrImgUrl={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem IconOrImgUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSidebarItem
            IconOrImgUrl={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrImgUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

export default Sidebar;
