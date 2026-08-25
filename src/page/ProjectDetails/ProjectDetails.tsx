import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { projects } from '../../data/projects';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Meta } from '../../components/Meta/Meta';
import { ProjectMeta } from '../../components/ProjectMeta/ProjectMeta';
import { CaseSection } from '../../components/CaseSection/CaseSection';
import { ProjectNavigation } from '../../components/ProjectNavigation/ProjectNavigation';
import { ArrowIcon } from '../../components/icons/icons';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  const language: 'en' | 'uk' = i18n.language.startsWith('uk') ? 'uk' : 'en';

  const projectIndex = projects.findIndex((item) => item.slug === slug);

  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <Meta
        title={`${project.title} | Liubov Pohudina`}
        description={project.description[language]}
        imageAlt={project.image.alt[language]}
        locale={language === 'uk' ? 'uk_UA' : 'en_US'}
        type="article"
      />

      <MainLayout>
        <article className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
          {/* HERO */}
          <section className="relative px-4 sm:px-6">
            <div className="mx-auto max-w-[1180px]">
              {/* breadcrumbs */}
              <div
                className="
                  flex items-center gap-3
                  text-[10px]
                  font-normal
                  uppercase
                  tracking-[0.14em]
                  text-white/35
                "
              >
                <Link
                  to="/#projects"
                  className="transition-colors hover:text-[#d4f66a]"
                >
                  Projects
                </Link>

                <span>/</span>

                <span className="text-[#d4f66a]/70">0{project.id}</span>
              </div>

              <div
                className="
                  mt-9
                  grid items-end
                  gap-10
                  lg:grid-cols-[1.3fr_0.7fr]
                  lg:gap-16
                "
              >
                {/* title */}
                <div>
                  <p
                    className="
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#d4f66a]
                    "
                  >
                    {project.category[language]}
                  </p>

                  <h1
                    className="
                      mt-5
                      max-w-[850px]
                      text-[42px]
                      font-normal
                      leading-[1.02]
                      tracking-[-0.045em]
                      text-white
                      sm:text-[58px]
                      lg:text-[72px]
                    "
                  >
                    {project.title}
                  </h1>
                </div>

                {/* short description */}
                <p
                  className="
                    max-w-[480px]
                    text-[14px]
                    font-normal
                    leading-[1.85]
                    text-white/50
                    sm:text-[15px]
                  "
                >
                  {project.description[language]}
                </p>
              </div>

              {/* PROJECT META */}
              <div
                className="
                  mt-12
                  grid
                  overflow-hidden
                  rounded-[24px]
                  border border-white/[0.07]
                  bg-white/[0.018]
                  backdrop-blur-xl
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                <ProjectMeta
                  label={language === 'uk' ? 'Рік' : 'Year'}
                  value={project.details.year}
                />

                <ProjectMeta
                  label={language === 'uk' ? 'Роль' : 'Role'}
                  value={project.details.role[language]}
                />

                <ProjectMeta
                  label={language === 'uk' ? 'Тип' : 'Type'}
                  value={project.details.type[language]}
                />

                <ProjectMeta
                  label="Stack"
                  value={`${project.technologies.length} tools`}
                />
              </div>

              {/* BIG IMAGE */}
              <div className="project-preview relative mt-16">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={project.image.mobile}
                  />

                  <img
                    src={project.image.desktop}
                    alt={project.image.alt[language]}
                    className="
                      project-preview__image
                      mx-auto
                      block
                      w-full
                      max-w-[1100px]
                      object-contain
                    "
                  />
                </picture>
              </div>
            </div>
          </section>

          {/* CASE CONTENT */}
          <section className="px-4 pt-24 sm:px-6 lg:pt-32">
            <div className="mx-auto max-w-[1180px]">
              <CaseSection
                number="01"
                title={language === 'uk' ? 'Огляд проєкту' : 'Project Overview'}
              >
                <LargeText>{project.details.overview[language]}</LargeText>
              </CaseSection>

              {project.details.challenge && (
                <CaseSection
                  number="02"
                  title={language === 'uk' ? 'Завдання' : 'The Challenge'}
                >
                  <LargeText>{project.details.challenge[language]}</LargeText>
                </CaseSection>
              )}

              {project.details.solution && (
                <CaseSection
                  number="03"
                  title={language === 'uk' ? 'Рішення' : 'The Solution'}
                >
                  <LargeText>{project.details.solution[language]}</LargeText>
                </CaseSection>
              )}

              {/* PROCESS */}
              {project.details.process && (
                <CaseSection
                  number="04"
                  title={language === 'uk' ? 'Процес' : 'Development Process'}
                >
                  <div className="grid gap-4 md:grid-cols-3">
                    {project.details.process.map((step, index) => (
                      <div
                        key={step.title.en}
                        className="
                            relative
                            overflow-hidden
                            rounded-[24px]
                            border border-white/[0.07]
                            bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]
                            p-6
                            backdrop-blur-xl
                          "
                      >
                        <span
                          className="
                              font-mono
                              text-[10px]
                              tracking-[0.15em]
                              text-[#d4f66a]/45
                            "
                        >
                          0{index + 1}
                        </span>

                        <h3
                          className="
                              mt-6
                              text-[20px]
                              font-normal
                              text-white
                            "
                        >
                          {step.title[language]}
                        </h3>

                        <p
                          className="
                              mt-4
                              text-[13px]
                              font-normal
                              leading-[1.8]
                              text-white/45
                            "
                        >
                          {step.description[language]}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              )}

              {/* RESULTS */}
              {project.details.results && (
                <CaseSection
                  number="05"
                  title={language === 'uk' ? 'Результати' : 'Results & Impact'}
                >
                  <div
                    className="
                      grid
                      overflow-hidden
                      rounded-[26px]
                      border border-white/[0.07]
                      bg-white/[0.018]
                      sm:grid-cols-3
                      backdrop-blur-xl
                    "
                  >
                    {project.details.results.map((result, index) => (
                      <div
                        key={result.value}
                        className={`
                            px-6 py-9
                            text-center
                            ${
                              index !== 0
                                ? 'border-t border-white/[0.06] sm:border-l sm:border-t-0'
                                : ''
                            }
                          `}
                      >
                        <div
                          className="
                              font-accent
                              text-[42px]
                              font-normal
                              italic
                              text-[#d4f66a]
                              sm:text-[48px]
                            "
                        >
                          {result.value}
                        </div>

                        <p
                          className="
                              mt-3
                              text-[12px]
                              font-normal
                              uppercase
                              tracking-[0.1em]
                              text-white/45
                            "
                        >
                          {result.label[language]}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              )}

              {/* TECH */}
              <CaseSection
                number="06"
                title={language === 'uk' ? 'Технології' : 'Technology Stack'}
              >
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                          rounded-full
                          border border-white/[0.08]
                          bg-white/[0.025]
                          px-4 py-2.5
                          text-[12px]
                          font-normal
                          text-white/60
                          backdrop-blur-md
                        "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </CaseSection>

              {/* EXTERNAL LINKS */}
              {project.links && (
                <div className="mt-20 flex flex-wrap gap-3">
                  {Object.entries(project.links).map(
                    ([key, url]) =>
                      url && (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group
                            inline-flex h-[48px]
                            items-center gap-5
                            rounded-full
                            border border-[#d4f66a]/35
                            bg-white/[0.02]
                            px-5
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                            text-[#d4f66a]
                            backdrop-blur-xl
                            transition-[border-color,box-shadow]
                            duration-300
                            hover:border-[#d4f66a]
                            hover:shadow-[0_0_20px_rgba(212,246,106,0.12)]
                          "
                        >
                          {key}

                          <ArrowIcon size={16} />
                        </a>
                      ),
                  )}
                </div>
              )}
            </div>
          </section>

          {/* PROJECT NAVIGATION */}
          <section className="px-4 pt-28 sm:px-6 lg:pt-36">
            <div
              className="
                mx-auto
                grid max-w-[1180px]
                overflow-hidden
                rounded-[26px]
                border border-white/[0.07]
                bg-white/[0.018]
                md:grid-cols-2
                backdrop-blur-xl
              "
            >
              <ProjectNavigation
                direction="previous"
                project={previousProject}
                language={language}
              />

              <ProjectNavigation
                direction="next"
                project={nextProject}
                language={language}
              />
            </div>
          </section>
        </article>
      </MainLayout>
    </>
  );
};

const LargeText = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className="
        max-w-[800px]
        text-[22px]
        font-normal
        leading-[1.55]
        tracking-[-0.02em]
        text-white/75
        sm:text-[26px]
        lg:text-[30px]
      "
    >
      {children}
    </p>
  );
};
