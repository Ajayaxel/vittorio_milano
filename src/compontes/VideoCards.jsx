import React, { useEffect, useRef } from "react";

const videos = [
  { id: 1, src: "/VIDEO-2025-08-17-21-41-50.mp4" , name: "CLASSIC TUXEDO"},
  { id: 2, src: "/VIDEO-2025-08-17-21-38-17.mp4" , name: "WEDDING SUIT"},
  { id: 3, src: "/VIDEO-2025-08-17-21-41-50.mp4" , name: "LUXURY BLAZER"},
  { id: 4, src: "/VIDEO-2025-08-17-21-41-50.mp4" , name: "BLACK TIE OUTFIT"},
];

export default function VideoCardsSection() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="w-full bg-white py-10">
      {/* Desktop Grid / Mobile Horizontal Scroll */}
      <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 max-w-8xl mx-auto px-4 scrollbar-hide">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-[250px] sm:w-auto overflow-hidden  "
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-[520px] sm:h-[520px] object-cover"
              src={video.src}
              muted
              loop
              playsInline
            />
                 <p className="mt-2 text-center text-gray-800 text-md font-medium">
            {video.name}
          </p>
          </div>
     
        ))}
      </div>
    </div>
  );
}

