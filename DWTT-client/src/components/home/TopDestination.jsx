import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SkewText from "@/components/ui/SkewText";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, DollarSign, IndianRupee, MapPin, MoveRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useGetDestinationsQuery } from "@/services/destinationService";
import LoadingErrorEmptyState from "../ui/LoadingErrorEmptyState";

export default function TopDestination() {
  const [activeIdx, setActiveIdx] = useState(1);
  // Fetching data using RTK Query
  const { data, isLoading, error } = useGetDestinationsQuery();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const handleAutoPlay = async () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // console.error("Error playing video:", error);
        }
      }
    };
    handleAutoPlay();
    //  memory leak prevention
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
  }, []);
 
  return (
    <>
      {/* Top Destination */}
      <section
        id="hero-destination"
        className="w-full min-h-[50vh] bg-teal-50 py-4 bg-[url('/assets/images/bg_circle_bee.svg')] bg-repeat-space lg:bg-[length:40%] md:bg-cover"
      >
        <Container width={90}>
          {/* Destionation title */}
          <div className="flex items-center justify-center pt-6">
            <h3 className="text-slate-700 text-2xl ">
              Top
              <SkewText text="Destination" bgStyle="before:bg-teal-500" />
            </h3>
          </div>

          {/* destination spots */}
          <div className="hero-destination-spots bg-gray-50 w-full rounded-sm shadow-lg mt-4 min-h-96">
            {/* destinations spots header */}
            <div className="spot-header w-full relative">
              <div className="p-2">
                <img
                  src="/assets/images/destination_beach.jpg"
                  alt="sea"
                  className="w-full h-60 object-cover rounded-md"
                />
              </div>
              <div className="destination-overlay-video p-2 rounded-md h-72 border-1 w-60 absolute top-[25%] right-[2%] bg-white">
                <div className="video w-full h-full relative">
                  <video
                    preload="none"
                    className="rounded-md"
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

            {/* destination contents */}
            <div className="px-4 pt-2 w-3/4">
              <p className="text-slate-500 first-line:tracking-widest first-letter:text-7xl first-letter:font-normal first-letter:text-teal-500 first-letter:mr-3 first-letter:float-left text-justify text-sm">
                Wonderful destinations await you around every corner of the
                world. From serene tropical islands to bustling cultural
                capitals, we've handpicked experiences that will take your
                breath away.Whether you're seeking thrilling adventures,
                peaceful escapes, or unforgettable moments with loved ones, our
                curated list of places has something magical for everyone.
              </p>
            </div>

            {/* destination spots */}
            {!data ? (
              <div className="destination-spots flex flex-col items-center justify-center text-pink-200 text-lg font-medium italic mt-4 p-2 border-t-2 border-t-pink-700 bg-red-500 rounded-md">
                No destination spots available ...
              </div>
            ) : (
              <div className="spots-card w-full h-full rounded-md shadow-lg mt-4 p-2 flex flex-col items-center justify-center bg-[url('/assets/images/flight_spots_bg.jpg')] bg-no-repeat lg:bg-center bg-cover md:bg-cover bg-blend-multiply bg-opacity-50">
                <div className="badge bg-blue-600 text-white text-sm my-4 rounded-full px-4 py-1">
                  Popular Places
                </div>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-sm md:max-w-2xl lg:max-w-[75%] p-2"
                >
                  <CarouselContent>
                    {data &&
                      data?.destinations?.map((item, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/3 lg:basis-1/3 select-none">
                          <div className="">
                            <Card
                              className={`${index === activeIdx ? "border-[.1rem] border-blue-600" : null} border-[.1rem] hover:border-blue-600 transition-border duration-300 ease-linear hover:shadow-lg rounded-md`} onClick={() => setActiveIdx(index)}>
                              <CardContent className="flex flex-col aspect-square p-0 relative overflow-hidden rounded-t-md">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover rounded-t-md scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  loading="lazy"
                                />
                                <div className="absolute left-2 bottom-10 bg-white bg-opacity-50 py-[.1rem] px-4 rounded-full">
                                  <span className="text-sm text-gray-700">
                                    {item.category}
                                  </span>
                                </div>
                                <div className="absolute left-0 bottom-0 p-2">
                                  <span className="flex gap-2 text-white font-semibold justify-center items-center text-lg bg-slate-700 bg-opacity-5">
                                    {item.name}
                                  </span>
                                </div>
                                <div className="absolute top-0 right-0 bg-zinc-900 bg-gradient-to-r from-orange-600 to-pink-600 border-white bg-opacity-80 rounded-t-md w-20 text-center p-1 ">
                                  <span className="text-gray-100 font-normal text-sm flex gap-1 justify-center items-center">
                                    {/* <IndianRupee size={16} /> */}
                                    <DollarSign size={16} />
                                    {item.price}
                                  </span>
                                </div>
                              </CardContent>
                              <CardFooter className="px-2 flex-col py-3">
                                <div className="w-full flex justify-between">
                                  <span className="text-gray-500 font-semibold text-sm flex gap-1 items-center cursor-pointer">
                                    <MapPin className="text-blue-800" size={16}/>
                                    {item.location}
                                  </span>
                                  <span className="text-gray-600 font-semibold text-sm flex gap-1 cursor-pointer">
                                    <Star
                                      className="text-orange-400 "
                                      size={16}
                                      fill="orange"
                                      id={item.rating}
                                    />
                                    {item.rating}
                                  </span>
                                </div>
                                <span className="text-gray-500 font-semibold text-[.75rem] my-2 cursor-text">
                                  {item.description}
                                </span>
                                <div className="divide-y-2 divide-blue-200 w-full border-b border-b-blue-100"></div>
                                <div className="w-full flex justify-between items-center md:flex-wrap mt-2 book-btn">
                                  <p className="lg:text-sm lg:text-slate-600 mg:mb-0 md:mb-2 cursor-text">
                                    Day:
                                    <span className="text-sm text-gray-500">
                                      {" "}
                                      1 Night-3 Days
                                    </span>
                                  </p>
                                  <Button
                                    variant="outline"
                                    className="border-blue-700 text-teal-600 hover:bg-blue-50 lg:rounded-full"
                                  >
                                    Explore <MoveRight />
                                  </Button>
                                </div>
                              </CardFooter>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-slate-800 text-white" />
                  <CarouselNext className="bg-slate-800 text-white" />
                </Carousel>
                <div className="my-4 mb-2">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-teal-600 hover:bg-blue-50"
                  >
                    View All Destinations{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
