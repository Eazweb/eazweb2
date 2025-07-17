"use client";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "こんにちは",
  "Bonjour",
  "Olá",
  "مرحبا",
  "Здравствуйте",
];

export default function Banner() {
  return (
    <div className="mb-8 flex h-auto w-full items-center overflow-hidden bg-black/70 whitespace-nowrap text-white backdrop-blur-sm">
      <div className="animate-scroll flex min-w-max py-12">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <span key={i} className="flex items-center">
              {greetings.map((greet, idx) => (
                <span
                  key={greet + idx}
                  className="mx-16 inline-block text-7xl font-extrabold tracking-wider uppercase opacity-90 md:text-9xl"
                >
                  {greet}
                </span>
              ))}
            </span>
          ))}
      </div>
    </div>
  );
}
