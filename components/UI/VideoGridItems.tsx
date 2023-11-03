"use client";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import type { VideoGridItemProps } from "@/types";
import { Button } from "@/components";
import Link from "next/link";
import formatDuration from "@/app/utils/formatDuration";
import formatTimeAgo from "@/app/utils/formatTimeAgo";
import { useState, useRef, useEffect } from "react";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

function VideoGridItems({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  });
  return (
    <div className="flex flex-col">
      <Link
        href={`/watch?v=${id}`}
        className="relative aspect-video"
        onMouseEnter={() => {
          setIsVideoPlaying(true);
        }}
        onMouseLeave={() => {
          setIsVideoPlaying(false);
        }}
      >
        <Image
          src={thumbnailUrl}
          alt="thumbnail"
          fill={true}
          className="rounded-xl duration-200"
        />
        <div className="absolute bottom-1 right-1 rounded bg-secondary-dark px-0.5 text-sm text-secondary">
          {formatDuration(duration)}
        </div>
        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={` absolute inset-0 object-cover transition-opacity duration-200 ${
            isVideoPlaying
              ? "rounded-none opacity-100 delay-200"
              : "rounded-xl opacity-0"
          }`}
        ></video>
      </Link>

      <div className="mt-2 flex gap-2 ">
        <div>
          <Link href={`@/${channel.id}`}>
            <Image
              src={channel.profileUrl}
              height={48}
              width={48}
              alt="profile url"
              className="mr-4 rounded-full"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col text-sm ">
          <Link href={``}>
            <p className="mb-2 line-clamp-2 font-semibold">{title}</p>
          </Link>
          <Link href={``}></Link>
          <Link href={``}>
            <p>{channel.name}</p>
          </Link>
          <span className="flex gap-2">
            <Link href={``}>
              <p className="whitespace-nowrap">
                {VIEW_FORMATTER.format(views)} views • {formatTimeAgo(postedAt)}
              </p>
            </Link>
          </span>
        </div>
        <div className="">
          <Button
            size="icon"
            variant="ghost"
            className="opacity-0 transition-opacity hover:opacity-100 "
          >
            <MoreVertical className="" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoGridItems;
