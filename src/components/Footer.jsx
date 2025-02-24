import React from "react";

const Footer = () => {
  return (
    <section className="border-t borderStyle grid grid-cols-2 w-full py-4 text-sm mt-10 px-4">
      <div>
        <p className="leading-none ">
          <span className="text-zinc-600">&copy;</span> <br />
          2025
        </p>
      </div>
      <div>
        <p className="leading-none ">
          <span className="text-zinc-600">By</span> <br />
          DEE CAULCRICK
        </p>
      </div>
    </section>
  );
};

export default Footer;
