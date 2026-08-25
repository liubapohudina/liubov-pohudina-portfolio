type ProjectMetaProps = {
  label: string;
  value: string;
};

export const ProjectMeta = ({ label, value }: ProjectMetaProps) => {
  return (
    <div
      className="
        border-b border-white/[0.06]
        px-5 py-5
        last:border-b-0
        sm:border-r
        lg:border-b-0
      "
    >
      <p
        className="
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-[#d4f66a]/55
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-[13px]
          font-normal
          text-white/70
        "
      >
        {value}
      </p>
    </div>
  );
};
