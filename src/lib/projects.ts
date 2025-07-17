// src/lib/projects.ts
export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    bgImage: string;
    smallImage: string;
    content: string;
    position: {
      smallImage: { top?: string; left?: string; right?: string; bottom?: string; transform?: string };
      content: { top?: string; left?: string; right?: string; bottom?: string; transform?: string };
    };
    animation: {
      bgImage: {
        initial: { opacity: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
        animate: { opacity: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
        exit: { opacity: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
      };
      smallImage: {
        initial: { opacity?: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
        animate: { opacity?: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
        exit: { opacity?: number; scale?: number; x?: number | string; y?: number | string; rotate?: number | string; clipPath?: string; filter?: string };
      };
      content: {
        initial: { opacity: number; y?: number | string; x?: number | string };
        animate: { opacity: number; y?: number | string; x?: number | string };
        exit: { opacity: number; y?: number | string; x?: number | string };
      };
    };
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Sleek Studio',
      slug: 'sleek_studio',
      category: 'Web Development',
      bgImage: 'https://res.cloudinary.com/dzrsboari/image/upload/v1752554710/_DSC4576_kebc5u.webp',
      smallImage: 'https://res.cloudinary.com/dzrsboari/image/upload/v1752554710/_DSC4576_kebc5u.webp',
      content: 'yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap',
      position: {
        smallImage: { top: '30%', left: '10%' },
        content: { top: '40%', left: '25%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, y: '-100%' },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: '100%' },
        },
        smallImage: {
          initial: { clipPath: 'inset(0 100% 0 0)' }, // Reveal from the left
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(0 100% 0 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
    {
      id: 2,
      title: 'Luxury Machines',
      slug: 'luxury_machines',
      category: 'UI/UX Design',
      bgImage: '/projectimages/luxurymachines/herobg.jpg',
      smallImage: '/projectimages/luxurymachines/herobg.jpg',
      content: 'yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap',
      position: {
        smallImage: { top: '45%', right: '15%' },
        content: { top: '65%', right: '15%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, x: '100%' },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: '-100%' },
        },
        smallImage: {
          initial: { clipPath: 'inset(100% 0 0 0)' }, // Reveal from the top
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(100% 0 0 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
    {
      id: 3,
      title: 'Switchfixx Electrical',
      slug: 'switch_fixx',
      category: 'Branding',
      bgImage: '/projectimages/switchfixx/herobg.jpg',
      smallImage: '/projectimages/switchfixx/herobg.jpg',
      content: 'yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap',
      position: {
        smallImage: { bottom: '25%', right: '40%' },
        content: { bottom: '20%', right: '20%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, scale: 1.2 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.2 },
        },
        smallImage: {
          initial: { clipPath: 'inset(0 0 100% 0)' }, // Reveal from the bottom
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(0 0 100% 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
    {
      id: 4,
      title: 'Luxx Design',
      slug: 'luxx',
      category: 'Web Development',
      bgImage: '/projectimages/luxx/herobg.jpg',
      smallImage: '/projectimages/luxx/herobg.jpg',
      content: 'Content for Project Delta.',
      position: {
        smallImage: { top: '25%', right: '10%' },
        content: { top: '45%', right: '10%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, filter: 'blur(10px)' },
          animate: { opacity: 1, filter: 'blur(0px)' },
          exit: { opacity: 0, filter: 'blur(10px)' },
        },
        smallImage: {
          initial: { clipPath: 'inset(0 0 0 100%)' }, // Reveal from the right
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(0 0 0 100%)' },
        },
        content: {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
        },
      },
    },
    {
      id: 5,
      title: 'Portfolio',
      slug: 'portfolio',
      category: 'UI/UX Design',
      bgImage: '/projectimages/portfolio/herobg.webp',
      smallImage: '/projectimages/portfolio/herobg.webp',
      content: 'Content for Project Epsilon.',
      position: {
        smallImage: { bottom: '15%', right: '15%' },
        content: { bottom: '35%', right: '15%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
          animate: { opacity: 1, clipPath: 'circle(75% at 50% 50%)' },
          exit: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
        },
        smallImage: {
          initial: { clipPath: 'inset(100% 0 0 0)' }, // Reveal from the top
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(100% 0 0 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
    {
      id: 6,
      title: 'Suburbia Skate',
      slug: 'suburbia_skate',
      category: 'Branding',
      bgImage: 'https://res.cloudinary.com/dzrsboari/image/upload/v1752554710/_DSC4576_kebc5u.webp',
      smallImage: 'https://res.cloudinary.com/dzrsboari/image/upload/v1752554710/_DSC4576_kebc5u.webp',
      content: 'Content for Project Zeta.',
      position: {
        smallImage: { top: '40%', left: '40%' },
        content: { top: '60%', left: '40%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, x: '-100vw' },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: '100vw' },
        },
        smallImage: {
          initial: { clipPath: 'inset(0 100% 0 0)' }, // Reveal from the left
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(0 100% 0 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
    {
      id: 7,
      title: 'Alex Varga',
      slug: 'alex_varga',
      category: 'Web Development',
      bgImage: '/projectimages/luxurymachines/herobg.jpg',
      smallImage: '/projectimages/luxurymachines/herobg.jpg',
      content: 'Content for Project Eta.',
      position: {
        smallImage: { top: '20%', right: '55%' },
        content: { top: '40%', right: '55%' },
      },
      animation: {
        bgImage: {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        },
        smallImage: {
          initial: { clipPath: 'inset(0 0 100% 0)' }, // Reveal from the bottom
          animate: { clipPath: 'inset(0 0 0 0)' },
          exit: { clipPath: 'inset(0 0 100% 0)' },
        },
        content: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
        },
      },
    },
  ];