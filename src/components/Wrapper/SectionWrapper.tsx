import React from "react";

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={className}>
      <div className="mx-auto px-4 max-w-screen-xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
