type CaseSectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export const CaseSection = ({ number, title, children }: CaseSectionProps) => {
  return (
    <section
      className="
        grid
        gap-8
        border-t border-white/[0.07]
        py-16
        lg:grid-cols-[240px_1fr]
        lg:gap-20
        lg:py-24
      "
    >
      {/* SECTION LABEL */}
      <div className="relative">
        <div
          className="
            sticky top-32
            flex items-start gap-4
          "
        >
          {/* accent line */}
          <div
            className="
              mt-1
              h-[68px] w-px
              shrink-0
              bg-gradient-to-b
              from-[#d4f66a]
              via-[#d4f66a]/35
              to-transparent
              shadow-[0_0_10px_rgba(212,246,106,0.25)]
            "
          />

          <div>
            <span
              className="
                block
                font-mono
                text-[13px]
                font-medium
                tracking-[0.18em]
                text-[#d4f66a]
                sm:text-[14px]
              "
            >
              / {number}
            </span>

            <h2
              className="
                mt-3
                max-w-[190px]
                text-[21px]
                font-normal
                leading-[1.25]
                tracking-[-0.02em]
                text-white/85
                sm:text-[23px]
              "
            >
              {title}
            </h2>

            <div
              className="
                mt-4
                h-px w-12
                bg-gradient-to-r
                from-[#d4f66a]/55
                to-transparent
              "
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative min-w-0">{children}</div>
    </section>
  );
};
