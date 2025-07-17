'use client';

import * as React from 'react';
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Footer } from "./Footer";

interface CaseStudyProps {
  name: string;
  description: string;
  overview: string;
  testimonialText: string;
  result: string;
  resultType: string;
  images: string[];
}

export function CaseStudy({ props }: { props: CaseStudyProps }) {
  return (
    <div className="bg-black pb-8">
      <Hero
        title={props.name}
        description={props.description}
        image={props.images[0]} // Use the first image for the hero
      />
      <Content
        contentText={props.overview}
        firstImage={props.images[1]} // Use the second image for content
        secondImage={props.images[2]} // Use the third image for content
      />
      <Testimonial testimonialText={props.testimonialText} />
      <ImageGrid images={props.images} />
      <ResultsGrid result={props.result} resultType={props.resultType} />
      <Footer />
    </div>
  );
}

function Hero({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full max-w-[95vw] mx-auto px-1 sm:px-2">
      <div className="pt-6 md:pt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
        <h1 className="font-funnelDisplay text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight break-words">
          {title}
        </h1>
        <p className="text-base md:text-lg text-neutral-300 max-w-md">{description}</p>
      </div>
      <div className="w-full overflow-hidden rounded-xl mt-6">
        <Image 
          src={image} 
          alt={title} 
          width={1920} 
          height={1080} 
          className="w-full h-auto" 
          priority
        />
      </div>
    </div>
  );
}

function Content({
  contentText,
  firstImage,
  secondImage,
}: {
  contentText: string;
  firstImage: string;
  secondImage: string;
}) {
  return (
    <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg md:text-xl lg:text-2xl font-light text-neutral-200 leading-relaxed">
            {contentText}
          </p>
          <div className="w-full aspect-video overflow-hidden rounded-2xl">
            <Image
              src={firstImage}
              alt=""
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-8">
          <div className="w-full aspect-square overflow-hidden rounded-2xl">
            <Image
              src={secondImage}
              alt=""
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-neutral-200 leading-relaxed">
            {contentText}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ testimonialText }: { testimonialText: string }) {
  return (
    <div className="bg-black py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-funnelDisplay text-xl md:text-2xl font-extralight text-neutral-400 mb-6">
            What they say about us
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            &ldquo;{testimonialText}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="py-8 md:py-12 w-full overflow-hidden">
      <VelocityScroll defaultVelocity={2}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex-shrink-0 overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 28rem"
            />
          </div>
        ))}
      </VelocityScroll>
    </div>
  );
}

function ResultsGrid({
  result,
  resultType,
}: {
  result: string;
  resultType: string;
}) {
  return (
    <div className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-funnelDisplay text-xl md:text-2xl font-extralight text-neutral-400 mb-4">
            Results
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {result} <span className="text-white">{resultType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
