export interface CaseStudyData {
  name: string;
  description: string;
  livedemo: string;
  overview: string;
  services: string[];
  duration: string;
  images: string[];
  result: string;
  resultType: string;
  testimonialText: string;
}

export const projects: { [key: string]: CaseStudyData } = {
  sleek_studio: {
    name: "Sleek Studio",
    description: "A cutting-edge website for a modern design studio.",
    livedemo: "#",
    overview:
      "Sleek Studio needed a portfolio website that reflected their minimalist and modern design philosophy. We created a visually stunning, highly responsive site that showcases their work beautifully.",
    services: ["UI/UX Design", "Web Development", "Branding"],
    duration: "6 Weeks",
    images: [
      "/projectimages/sleekstudio/herobg.jpeg",
      "/projectimages/luxx/herobg.jpg",
      "/projectimages/switchfixx/herobg.jpg",
      "/projectimages/portfolio/herobg.png",
      "/projectimages/sleekstudio/herobg.jpeg",
      "/projectimages/luxx/herobg.jpg",
      "/projectimages/switchfixx/herobg.jpg",
      "/projectimages/portfolio/herobg.png",
    ],
    result: "250%",
    resultType: "Increase in Client Inquiries",
    testimonialText: "Working with Eazweb was a game-changer for our design studio. Their team transformed our online presence with a website that perfectly captures our aesthetic and has significantly increased our client inquiries.",
  },
  luxx: {
    name: "Luxx Design",
    description: "An elegant e-commerce platform for a luxury fashion brand.",
    livedemo: "#",
    overview:
      "Luxx required an online store that provided a seamless and luxurious shopping experience. We developed a custom e-commerce solution with a focus on sophisticated design and intuitive navigation.",
    services: ["E-commerce Development", "Payment Gateway Integration", "CMS"],
    duration: "10 Weeks",
    images: [
      "/projectimages/luxx/carousel/1.webp",
      "/projectimages/luxx/carousel/2.webp",
      "/projectimages/luxx/carousel/3.webp",
      "/projectimages/luxx/carousel/4.webp",
      "/projectimages/luxx/carousel/5.webp",
      "/projectimages/luxx/carousel/6.webp",
      "/projectimages/luxx/carousel/7.webp",
      "/projectimages/luxx/carousel/8.webp",
    ],
    result: "150%",
    resultType: "Increase in Online Sales",
    testimonialText: "The new Luxx e-commerce platform has exceeded our expectations. The clean design and smooth user experience have directly contributed to a significant boost in our online sales.",
  },
  luxury_machines: {
    name: "Luxury Machines",
    description: "An exclusive platform for high-end vehicle enthusiasts.",
    livedemo: "#",
    overview:
      "Luxury Machines required a sophisticated web presence to showcase their collection of rare and high-performance vehicles. We built a visually stunning platform with a focus on immersive imagery and detailed vehicle profiles, providing an unparalleled digital showroom experience.",
    services: ["Web Design", "Content Management System", "3D & Motion"],
    duration: "12 Weeks",
    images: [
      "/projectimages/luxurymachines/carousel/1.jpg",
      "/projectimages/luxurymachines/carousel/2.jpg",
      "/projectimages/luxurymachines/carousel/3.jpg",
      "/projectimages/luxurymachines/carousel/4.jpg",
      "/projectimages/luxurymachines/carousel/5.jpg",
      "/projectimages/luxurymachines/carousel/6.jpg",
      "/projectimages/luxurymachines/carousel/7.jpg",
      "/projectimages/luxurymachines/carousel/8.jpg",
    ],
    result: "500%",
    resultType: "Increase in Qualified Leads",
    testimonialText: "The new website has been a game-changer for our business. The quality of leads we're receiving has improved dramatically, and our clients love the immersive experience.",
  },
  switch_fixx: {
    name: "Switch Fixx Electrical",
    description: "A user-friendly booking platform for electrical services.",
    livedemo: "#",
    overview:
      "Switch Fixx needed a modern solution to manage their growing electrical services business. We created a comprehensive platform that allows customers to book services, track appointments, and receive real-time updates, while the business can efficiently manage their workforce and schedule.",
    services: ["Web App Development", "API Integration", "Database Management"],
    duration: "8 Weeks",
    images: [
      "/projectimages/switchfixx/herobg.jpg",
      "/projectimages/switchfixx/image1.jpg",
      "/projectimages/switchfixx/image2.jpg",
      "/projectimages/switchfixx/image3.jpg",
      "/projectimages/switchfixx/herobg.jpg",
      "/projectimages/switchfixx/image1.jpg",
      "/projectimages/switchfixx/image2.jpg",
      "/projectimages/switchfixx/image3.jpg",
    ],
    result: "400%",
    resultType: "Growth in User Engagement",
    testimonialText: "Since launching our new booking platform, we've seen a dramatic increase in customer engagement and satisfaction. The system has streamlined our operations and made it much easier for customers to access our services.",
  },
  portfolio: {
    name: "Portfolio",
    description: "A modern and interactive portfolio website.",
    livedemo: "#",
    overview:
      "This portfolio website was designed to showcase creative work in a clean, modern interface. The responsive design ensures optimal viewing across all devices, while the smooth animations and transitions create an engaging user experience.",
    services: ["UI/UX Design", "Web Development", "Animation"],
    duration: "4 Weeks",
    images: [
      "/projectimages/portfolio/herobg.png",
      "/projectimages/portfolio/image1.jpg",
      "/projectimages/portfolio/image2.jpg",
      "/projectimages/portfolio/image3.jpg",
      "/projectimages/portfolio/herobg.png",
      "/projectimages/portfolio/image1.jpg",
      "/projectimages/portfolio/image2.jpg",
      "/projectimages/portfolio/image3.jpg",
    ],
    result: "300%",
    resultType: "Increase in Project Inquiries",
    testimonialText: "The new portfolio has been instrumental in attracting high-quality clients. The clean design and smooth animations make our work stand out, and we've seen a significant increase in project inquiries since the launch.",
  },
  suburbia_skate: {
    name: "Suburbia Skate",
    description: "An e-commerce platform for skateboard enthusiasts.",
    livedemo: "#",
    overview:
      "Suburbia Skate needed an online store that captured the energy and culture of skateboarding. We created a dynamic e-commerce platform with features like product customization, local skate spot finder, and community forums to engage their customer base.",
    services: ["E-commerce Development", "Community Features", "Mobile Optimization"],
    duration: "12 Weeks",
    images: [
      "/projectimages/suburbia/herobg.jpg",
      "/projectimages/suburbia/image1.jpg",
      "/projectimages/suburbia/image2.jpg",
      "/projectimages/suburbia/image3.jpg",
      "/projectimages/suburbia/herobg.jpg",
      "/projectimages/suburbia/image1.jpg",
      "/projectimages/suburbia/image2.jpg",
      "/projectimages/suburbia/image3.jpg",
    ],
    result: "275%",
    resultType: "Increase in Online Sales",
    testimonialText: "The Suburbia Skate platform has completely transformed our online presence. The community features have helped us build a loyal following, and the e-commerce functionality has made it easy for customers to purchase our products.",
  },
  alex_varga: {
    name: "Alex Varga",
    description: "Personal portfolio for a professional photographer.",
    livedemo: "#",
    overview:
      "Alex Varga needed a portfolio that would showcase his photography in the best possible light. We created a minimalist, image-focused design that puts his stunning work front and center, with a custom-built gallery that loads quickly and displays images in stunning detail.",
    services: ["Portfolio Design", "Image Optimization", "Responsive Development"],
    duration: "5 Weeks",
    images: [
      "/projectimages/alexvarga/carousel/1.webp",
      "/projectimages/alexvarga/carousel/2.webp",
      "/projectimages/alexvarga/carousel/3.webp",
      "/projectimages/alexvarga/carousel/4.webp",
      "/projectimages/alexvarga/carousel/5.webp",
      "/projectimages/alexvarga/carousel/6.webp",
      "/projectimages/alexvarga/carousel/7.webp",
      "/projectimages/alexvarga/carousel/8.webp",
    ],
    result: "200%",
    resultType: "Increase in Client Inquiries",
    testimonialText: "The new portfolio has completely changed how potential clients view my work. The clean, fast-loading design showcases my photography beautifully, and I've seen a significant increase in both inquiries and bookings since the site launched.",
  },
};
