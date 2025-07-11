import localFont from "next/font/local";

export const funnelDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/funnelDisplay/FunnelDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-funnelDisplay",
  display: "swap",
});

export const redHatDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/redHatDisplay/RedHatDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-redHatDisplay",
  display: "swap",
});
