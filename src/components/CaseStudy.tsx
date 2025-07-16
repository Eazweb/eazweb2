import Image from "next/image";
import { Footer } from "./Footer";

export function CaseStudy({ props }: { props: any }) {
  return (
    <div>
      <Hero {...props}></Hero>
      <Content {...props}></Content>
      <Testimonial {...props}></Testimonial>
      <ImageGrid {...props}></ImageGrid>
      <ResultsGrid {...props}></ResultsGrid>
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
    <div className="flex w-full flex-col items-center justify-center px-20">
      <div className="mt-16 mb-4 flex flex-row items-end justify-between gap-60">
        <p className="font-funnelDisplay text-9xl leading-none font-bold tracking-tight text-nowrap">
          {title}
        </p>
        <p className="flex text-xl text-neutral-300">{description}</p>
      </div>
      <div className="w-full overflow-hidden rounded-2xl">
        <Image src={image} alt={title} width={1920} height={1080} />
      </div>
    </div>
  );
}

function Content({
  contentText,
  contentImage,
}: {
  contentText: string;
  contentImage: string;
}) {
  return (
    <div className="flex flex-row gap-16 px-20 py-50">
      <div className="flex flex-col gap-5">
        <div className="text-2xl font-light text-neutral-200">
          {contentText}
        </div>
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src={contentImage}
            alt={contentText}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src={contentImage}
            alt={contentText}
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-2xl font-light text-neutral-200">
          {contentText}
        </div>
      </div>
    </div>
  );
}

function Testimonial({ testimonialText }: { testimonialText: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-20 py-32">
      <div className="font-funnelDisplay text-2xl font-extralight text-neutral-200">
        What they say about us
      </div>
      <div className="w-1/2 text-center text-4xl font-semibold">
        {testimonialText}
      </div>
    </div>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="relative px-20 py-32">
      {/* Grid Container */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-neutral-800"
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
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
    <div className="flex w-full flex-col items-center justify-center gap-5 py-32">
      <div className="w-[1440px]">
        <div className="font-funnelDisplay w-full text-left text-2xl font-extralight text-neutral-200">
          Results
        </div>
        <div className="text-center text-4xl font-semibold">
          {result} {resultType}
        </div>
      </div>
    </div>
  );
}
