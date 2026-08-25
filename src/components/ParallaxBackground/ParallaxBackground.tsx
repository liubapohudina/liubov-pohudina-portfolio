import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ParallaxElement = {
  id: number;
  className: string;
  y: number;
  x?: number;
  rotate?: number;
  scale?: number;
};

const elements: ParallaxElement[] = [
  {
    id: 1,
    className:
      'left-[-5%] top-[8%] w-[220px] sm:w-[300px] lg:w-[380px] opacity-40',
    y: -120,
    x: 25,
    rotate: 2,
  },
  {
    id: 2,
    className:
      'left-[3%] top-[25%] w-[150px] sm:w-[210px] lg:w-[270px] opacity-50',
    y: -190,
    x: -20,
  },
  {
    id: 3,
    className:
      'left-[-4%] top-[48%] w-[210px] sm:w-[290px] lg:w-[360px] opacity-45',
    y: -260,
    x: 30,
    rotate: -3,
  },

  {
    id: 4,
    className:
      'right-[-5%] top-[10%] w-[220px] sm:w-[300px] lg:w-[390px] opacity-45',
    y: -140,
    x: -30,
    rotate: -2,
  },
  {
    id: 5,
    className:
      'right-[3%] top-[30%] w-[150px] sm:w-[200px] lg:w-[260px] opacity-50',
    y: -210,
    x: 20,
  },

  {
    id: 7,
    className:
      'right-[7%] top-[58%] w-[130px] sm:w-[180px] lg:w-[230px] opacity-40',
    y: -280,
    x: 15,
  },

  {
    id: 8,
    className:
      'left-1/2 top-[15%] w-[300px] -translate-x-1/2 sm:w-[420px] lg:w-[560px] opacity-30',
    y: -100,
    scale: 1.08,
  },

  {
    id: 9,
    className:
      'left-[-5%] top-[75%] w-[210px] sm:w-[280px] lg:w-[350px] opacity-45',
    y: -360,
    x: 35,
  },
  {
    id: 10,
    className:
      'left-[8%] top-[90%] w-[140px] sm:w-[190px] lg:w-[250px] opacity-40',
    y: -420,
  },

  {
    id: 11,
    className:
      'right-[-4%] top-[72%] w-[220px] sm:w-[290px] lg:w-[370px] opacity-45',
    y: -360,
    x: -30,
  },
  {
    id: 12,
    className:
      'right-[7%] top-[88%] w-[150px] sm:w-[200px] lg:w-[260px] opacity-40',
    y: -430,
  },

  {
    id: 13,
    className:
      'left-[18%] top-[18%] w-[180px] sm:w-[240px] lg:w-[300px] opacity-25',
    y: -180,
    x: 10,
    rotate: 4,
  },
  {
    id: 14,
    className:
      'right-[17%] top-[64%] w-[180px] sm:w-[240px] lg:w-[310px] opacity-25',
    y: -330,
    x: -15,
    rotate: -4,
  },

  {
    id: 15,
    className:
      'bottom-[-8%] left-1/2 w-[420px] -translate-x-1/2 sm:w-[600px] lg:w-[820px] opacity-30',
    y: -480,
    scale: 1.05,
  },
];

export const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('[data-parallax]');

      items.forEach((item) => {
        const y = Number(item.dataset.y ?? 0);
        const x = Number(item.dataset.x ?? 0);
        const rotate = Number(item.dataset.rotate ?? 0);
        const scale = Number(item.dataset.scale ?? 1);

        gsap.to(item, {
          y,
          x,
          rotate,
          scale,
          ease: 'none',

          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        pointer-events-none
        fixed inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* BASE */}
      <div className="absolute inset-0 bg-[#030706]" />

      {/* AMBIENT LIGHT */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_30%,rgba(130,180,45,0.06),transparent_35%)]
        "
      />

      {/* PARALLAX ELEMENTS */}
      <div className="absolute inset-0">
        {elements.map(({ id, className, y, x = 0, rotate = 0, scale = 1 }) => (
          <img
            key={id}
            data-parallax
            data-y={y}
            data-x={x}
            data-rotate={rotate}
            data-scale={scale}
            src={`/images/parallax/element-${id}.webp`}
            alt=""
            draggable={false}
            className={`
                absolute
                h-auto
                select-none
                object-contain
                will-change-transform
                ${className}
              `}
          />
        ))}
      </div>

      {/* CENTRAL CONTENT CORRIDOR */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(2,7,5,0.78)_0%,rgba(2,7,5,0.58)_24%,rgba(2,7,5,0.18)_48%,transparent_72%)]
        "
      />

      {/* VERTICAL FADE */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/25
          via-transparent
          to-black/60
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]
        "
      />
    </div>
  );
};
