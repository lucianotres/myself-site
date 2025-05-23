const SectionTitle = ({
  title,
  paragraph,
  width = "750px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
          {title}
        </h2>
        <p className="txt-j text-base !leading-relaxed dark:text-dark-mode text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
