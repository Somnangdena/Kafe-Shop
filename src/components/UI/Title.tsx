const Title = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center py-10 px-5 mt-10 gap-4">
      <div className="w-0.5 h-25 bg-primary"></div>
      <h4 className="tracking-widest text-xl text-primary font-semibold uppercase text-center">{title}</h4>
      <h2 className="text-3xl lg:text-4xl text-center font-bold text-accent transition capitalize">{desc}</h2>
    </section>
  );
};

export default Title;
