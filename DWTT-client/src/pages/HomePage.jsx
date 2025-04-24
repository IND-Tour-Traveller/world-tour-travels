import React,{useEffect, useRef, useState} from "react";
import Container from "@/components/ui/Container";
import SkewText from "@/components/ui/SkewText";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";

export default function HomePage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
     if(videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
     }else{
      videoRef.current.play();
      setIsPlaying(true);
     }
  };
   useEffect(() => {
     if(videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.play();
      setIsPlaying(true);
     }
   }, []);
  return (
    <>
      <section className="w-full min-h-[50vh] bg-teal-50 py-4 bg-[url('/assets/images/bg_circle_bee.svg')] bg-repeat-space lg:bg-[length:40%] md:bg-cover">
        <Container width={90}>
          {/* Top Destination */}
          <div className="flex flex-col items-center justify-center pt-6">
            <h3 className="text-slate-700 text-2xl ">
              Top
              <SkewText text="Destination" bgStyle="before:bg-teal-500" />
            </h3>
            {/* destination spots */}
            <div className="bg-gray-50 w-full  rounded-sm  shadow-lg mt-4 min-h-96">
              {/* header part */}
              <div className="w-full relative destination-header">
                <div className="p-2">
                  <img
                    src="/assets/images/destination_beach.jpg"
                    alt="sea"
                    className="w-full h-60 object-cover rounded-md"
                  />
                </div>
                <div className="destination-overlay-video p-2 rounded-md h-72 border-1 w-64 absolute top-[25%] right-[2%] bg-white">
                  <div className="video w-full h-full relative">
                    <video
                      className="rounded-md"
                      autoPlay
                      ref={videoRef}
                      loop
                      src="/assets/media/sea_beach.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-controls absolute top-[0%] right-[0%] text-2xl cursor-pointer m-1 bg-gray-600 rounded-full">
                      {isPlaying ? (
                        <IoPauseCircleOutline onClick={handleVideoClick} />
                      ) : (
                        <IoPlayCircleOutline onClick={handleVideoClick} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* contents */}
              <div className="px-4 pt-2 w-3/4">
                <p className="text-slate-500 first-line:tracking-widest first-letter:text-7xl first-letter:font-normal first-letter:text-teal-500 first-letter:mr-3 first-letter:float-left text-justify text-sm">
                  Wonderful destinations await you around every corner of the world. From serene tropical islands to bustling cultural capitals, we've handpicked experiences that will take your breath away. Whether you're seeking thrilling adventures, peaceful escapes, or unforgettable moments with loved ones, our curated list of places has something magical for everyone.
                </p>
              </div>
            </div>
          </div>
          {/* Todo: write your code here  */}
        </Container>
      </section>
    </>
  );
}
