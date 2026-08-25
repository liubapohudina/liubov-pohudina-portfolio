type LoaderProps = {
  fullscreen?: boolean;
};

export const Loader = ({ fullscreen = true }: LoaderProps) => {
  return (
    <div
      className={`
        flex items-center justify-center
        ${fullscreen ? 'fixed inset-0 z-[9999]' : 'min-h-[320px]'}
        bg-[#030706]
      `}
    >
      <div className="relative flex flex-col items-center">
        {/* OUTER GLOW */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-[44px]
            h-[130px] w-[130px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#d4f66a]/10
            blur-[45px]
          "
        />

        {/* ORBIT */}
        <div
          className="
            relative
            flex h-[104px] w-[104px]
            items-center justify-center
          "
        >
          <div
            className="
              absolute inset-0
              animate-spin
              rounded-full
              border border-white/[0.06]
              border-t-[#d4f66a]
              border-r-[#d4f66a]/30
              shadow-[0_0_18px_rgba(212,246,106,0.12)]
            "
          />

          <div
            className="
              absolute inset-[8px]
              rounded-full
              border border-[#d4f66a]/10
            "
          />

          <img
            src="/images/logo.webp"
            alt="Liubov Pohudina logo"
            className="
              relative z-10
              h-[68px] w-[68px]
              rounded-full
              object-cover
              shadow-[0_0_20px_rgba(212,246,106,0.18)]
            "
          />
        </div>

        {/* TEXT */}
        <div className="mt-6 text-center">
          <p
            className="
              text-[12px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/70
            "
          >
            Liubov Pohudina
          </p>

          <p
            className="
              mt-2
              text-[10px]
              font-normal
              uppercase
              tracking-[0.16em]
              text-[#d4f66a]/60
            "
          >
            Loading experience
          </p>
        </div>

        {/* DOTS */}
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4f66a]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4f66a]/60 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4f66a]/30 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};
