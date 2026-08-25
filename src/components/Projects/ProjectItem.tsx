import { useTranslation } from 'react-i18next';

import type { Project } from '../../types/project';
import { ArrowIcon } from '../icons/icons';

type ProjectItemProps = {
  project: Project;
  index: number;
};

export const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const { i18n, t } = useTranslation();

  const language: 'en' | 'uk' = i18n.language.startsWith('uk') ? 'uk' : 'en';

  const isReversed = index % 2 !== 0;

  return (
    <article
      className="
        grid items-center
        gap-10
        md:grid-cols-2
        md:gap-14
        lg:gap-20
      "
    >
      {/* IMAGE */}
      <div
        className={`
    relative
    ${isReversed ? 'md:order-2' : 'md:order-1'}
  `}
      >
        <div className="project-preview mx-auto w-full max-w-[680px]">
          <picture>
            <source media="(max-width: 767px)" srcSet={project.image.mobile} />

            <img
              src={project.image.desktop}
              alt={project.image.alt[language]}
              loading="lazy"
              draggable={false}
              className="
          project-preview__image
          max-h-[560px]
          select-none
        "
            />
          </picture>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10
          ${isReversed ? 'md:order-1' : 'md:order-2'}
        `}
      >
        {/* CATEGORY */}
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-[#d4f66a]
            sm:text-[11px]
          "
        >
          {project.category[language]}
        </span>

        {/* TITLE */}
        <h3
          className="
            mt-4
            max-w-[520px]
            text-[27px]
            font-normal
            leading-[1.15]
            tracking-[-0.03em]
            text-white
            sm:text-[32px]
            lg:text-[38px]
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            max-w-[520px]
            text-[14px]
            font-normal
            leading-[1.8]
            text-white/55
            sm:text-[15px]
          "
        >
          {project.description[language]}
        </p>

        {/* TECH STACK */}
        <div className="mt-6 flex max-w-[540px] flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-white/[0.07]
                bg-white/[0.04]
                px-3 py-1.5
                text-[11px]
                font-normal
                text-white/65
                backdrop-blur-md
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* CASE LINK */}
        <a
          href={`/projects/${project.slug}`}
          className="
            group
            mt-7
            inline-flex h-[46px]
            min-w-[170px]
            items-center justify-between
            gap-8
            rounded-full
            border border-[#d4f66a]/55
            bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))]
            px-5
            text-[11px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#d4f66a]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            backdrop-blur-xl
            transition-[border-color,box-shadow]
            duration-300
            hover:border-[#d4f66a]
            hover:shadow-[0_0_14px_rgba(212,246,106,0.22),0_0_32px_rgba(212,246,106,0.08)]
          "
        >
          <span>{t('projects.viewCase')}</span>

          <ArrowIcon
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>
      </div>
    </article>
  );
};
