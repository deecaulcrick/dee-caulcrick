const About = () => {
  return (
    <section className="mt-60 lg:mt-[300px] px-6 ">
      <div className="border-t borderStyle pt-4">
        {/*  */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-10">
          <div className="col-span-6 text-xs md:text-sm grid grid-cols-2">
            <div className=" leading-none">
              <h3 className="text-zinc-500">Location</h3>
              <p>Lagos, Nigeria</p>
            </div>
            <div className=" leading-none">
              <h3 className="text-zinc-500">Contact</h3>
              <p>M deecaulcrick@gmail.com</p>
              <p>Github</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
            </div>
            <div>
              <img src="/images/hello.gif" />
            </div>
          </div>
          <div className="col-span-6 leading-none md:w-[70%]">
            <h3 className="text-3xl leading-none mb-6">
              Hi, I'm a front-end developer. I work/would love to work with
              small to large companies, startups, web dev studios, and creative
              individuals globally.
            </h3>
            <p>
              With over 5 years of web dev experience, I’m passionate about
              creating digital experiences that are both captivating and
              seamless. I specialize in crafting interactive, detail-driven
              websites that balance functionality with beautiful design. For me,
              bringing ideas to life and turning them into tailored,
              user-friendly platforms is incredibly rewarding.
              <br />
              <br />
              More than anything, I love meeting new people value building
              meaningful connections and collaborating with creative minds who
              share the same passion for design and innovation.
              <br />
              <br />
              When I'm not coding or designing, I can be found reading a
              fanatasy book or hanging out with my friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
