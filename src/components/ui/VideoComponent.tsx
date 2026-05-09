import { IframeHTMLAttributes, Suspense } from "react";
import { Skeleton } from "./skeleton";

export default function VideoComponent({
  src,
  width,
  height,
  title,
  allow,
  referrerPolicy,
}: Readonly<IframeHTMLAttributes<HTMLIFrameElement>>) {
  return (
    <Suspense
      fallback={
        <Skeleton className={`w-[${width}px] h-[${height}px] rounded-xl`} />
      }
    >
      <iframe
        src={src}
        width={width}
        height={height}
        title={title}
        allow={allow}
        referrerPolicy={referrerPolicy}
        allowFullScreen
        loading="lazy"
      />
    </Suspense>
  );
}
