import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { ArrowIcon } from '../icons/icons';

type ProjectNavigationProps = {
  direction: 'previous' | 'next';
  project: Project;
  language: 'en' | 'uk';
};

export const ProjectNavigation = ({
  direction,
  project,
  language,
}: ProjectNavigationProps) => {
  const isPrevious = direction === 'previous';

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`
        group
        relative
        flex min-h-[170px]
        flex-col justify-between
        p-6
        transition-colors duration-300
        hover:bg-white/[0.025]
        sm:p-8
        ${
          !isPrevious
            ? 'border-t border-white/[0.06] md:border-l md:border-t-0'
            : ''
        }
      `}
    >
      <span
        className="
          text-[10px]
          font-normal
          uppercase
          tracking-[0.15em]
          text-white/30
        "
      >
        {isPrevious
          ? language === 'uk'
            ? 'Попередній проєкт'
            : 'Previous Project'
          : language === 'uk'
            ? 'Наступний проєкт'
            : 'Next Project'}
      </span>

      <div
        className={`
          mt-8 flex items-center gap-5
          ${isPrevious ? '' : 'justify-between text-right'}
        `}
      >
        {isPrevious && (
          <span
            className="
              text-[24px]
              text-[#d4f66a]
              transition-transform duration-300
              group-hover:-translate-x-1
            "
          >
            ←
          </span>
        )}

        <div className={isPrevious ? '' : 'ml-auto'}>
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-[#d4f66a]/50
            "
          >
            {project.category[language]}
          </p>

          <h3
            className="
              mt-2
              text-[20px]
              font-normal
              text-white/80
            "
          >
            {project.title}
          </h3>
        </div>

        {!isPrevious && (
          <ArrowIcon
            size={22}
            className="
              text-[#d4f66a]
              transition-transform duration-300
              group-hover:translate-x-1
            "
          />
        )}
      </div>
    </Link>
  );
};
