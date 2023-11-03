import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CategoryPills, PageHeader } from "@/components";
import VideoGridItems from "@/components/UI/VideoGridItems";
import videos from "@/data/videos";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "500"] });

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "A youtube clone created with love by Theedon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex max-h-screen flex-col">
          <div className="flex">
            <PageHeader />
          </div>
          <div className="grid flex-grow grid-cols-[auto,1fr] overflow-auto">
            <div>Sidebar</div>
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
      </body>
    </html>
  );
}
