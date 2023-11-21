import {
  CategoryPills,
  PageHeader,
  VideoGridItems,
  Sidebar,
} from "@/components";
import videos from "@/data/videos";
import { SidebarProvider } from "./contexts/SidebarContext";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex max-h-screen flex-col">
        <div className="flex">
          <PageHeader />
        </div>
        <div className="grid flex-grow grid-cols-[auto,1fr] overflow-auto">
          <Sidebar></Sidebar>
          <div className="overflow-x-hidden px-8 pb-4 ">
            <div className="sticky top-0 z-10 bg-white pb-4">
              <CategoryPills />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
              {videos.map((video) => (
                <VideoGridItems
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  postedAt={video.postedAt}
                  duration={video.duration}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
