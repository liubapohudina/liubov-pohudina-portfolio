import { useTranslation } from 'react-i18next';

import {
  ArrowIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
} from '../icons/icons';

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
};

export const Contact = () => {
  const { t } = useTranslation();

  const contacts: ContactItem[] = [
    {
      label: t('contact.phone'),
      value: '+48 536 379 221',
      href: 'tel:+48536379221',
      icon: <PhoneIcon size={24} />,
    },
    {
      label: t('contact.email'),
      value: 'drogalsteva92@gmail.com',
      href: 'mailto:drogalsteva92@gmail.com',
      icon: <MailIcon size={24} />,
    },
    {
      label: t('contact.location'),
      value: 'Starachowice, Poland',
      icon: <LocationIcon size={25} />,
    },
    {
      label: 'Telegram',
      value: '@LiubovPohudina',
      href: 'https://t.me/LiubovPohudina',
      icon: <TelegramIcon size={24} />,
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative z-10
        px-4 py-24
        sm:px-6
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1180px]">
        {/* HEADER */}
        <div className="mx-auto max-w-[680px] text-center">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d4f66a]/85
            "
          >
            {t('contact.eyebrow')}
          </p>

          <h2
            className="
              mt-3
              text-[36px]
              font-normal
              leading-[1.1]
              tracking-[-0.035em]
              text-white
              sm:text-[44px]
              lg:text-[50px]
            "
          >
            {t('contact.titleStart')}{' '}
            <span
              className="
                font-accent
                font-normal italic
                text-[#d4f66a]
              "
            >
              {t('contact.titleAccent')}
            </span>{' '}
            {t('contact.titleEnd')}
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-[560px]
              text-[14px]
              font-normal
              leading-[1.8]
              text-white/50
              sm:text-[15px]
            "
          >
            {t('contact.description')}
          </p>
        </div>

        {/* CONTACT GLASS PANEL */}
        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[26px]
            border border-white/10
            bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_45px_rgba(0,0,0,0.3)]
            backdrop-blur-2xl
          "
        >
          {/* subtle liquid glass highlight */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-[radial-gradient(circle_at_18%_0%,rgba(212,246,106,0.05),transparent_30%),radial-gradient(circle_at_82%_100%,rgba(255,255,255,0.025),transparent_30%)]
            "
          />

          <div
            className="
              relative z-10
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {contacts.map((contact, index) => {
              const content = (
                <>
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-[#d4f66a]/15
                      bg-[#d4f66a]/[0.035]
                      text-[#d4f66a]
                      shadow-[0_0_18px_rgba(212,246,106,0.06)]
                    "
                  >
                    {contact.icon}
                  </div>

                  <span
                    className="
                      mt-4
                      text-[13px]
                      font-normal
                      text-white/55
                    "
                  >
                    {contact.label}
                  </span>

                  <span
                    className="
                      mt-1
                      break-all
                      text-[14px]
                      font-normal
                      text-white/85
                      sm:text-[15px]
                    "
                  >
                    {contact.value}
                  </span>
                </>
              );

              return (
                <div
                  key={contact.label}
                  className={`
                    relative
                    flex min-h-[180px]
                    flex-col items-center justify-center
                    px-6 py-7
                    text-center

                    ${
                      index !== 0
                        ? 'border-t border-white/[0.06] sm:border-t-0'
                        : ''
                    }

                    ${
                      index % 2 !== 0
                        ? 'sm:border-l sm:border-white/[0.06]'
                        : ''
                    }

                    ${
                      index > 1
                        ? 'sm:border-t sm:border-white/[0.06] lg:border-t-0'
                        : ''
                    }

                    ${index > 0 ? 'lg:border-l lg:border-white/[0.06]' : ''}
                  `}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        contact.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="
                        group
                        flex flex-col
                        items-center
                        transition-[filter] duration-300
                        hover:drop-shadow-[0_0_8px_rgba(212,246,106,0.15)]
                      "
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:drogalsteva92@gmail.com"
            className="
              inline-flex h-[52px]
              items-center justify-center gap-4
              rounded-full
              border border-[#ddff78]
              bg-gradient-to-r from-[#c7f44f] to-[#e5ff80]
              px-8
              text-[14px]
              font-medium
              text-[#10140c]
              shadow-[0_0_18px_rgba(201,244,79,0.25)]
              transition-shadow
              duration-300
              hover:shadow-[0_0_14px_rgba(210,255,80,0.75),0_0_35px_rgba(201,244,79,0.4)]
            "
          >
            {t('contact.button')}
            <ArrowIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
