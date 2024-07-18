import React from "react";

// Loder Component

const Loder = () => {
  return (
    <div className="lg:h-[45vh] w-full flex justify-center items-center gap-2 p-2 shadow-md rounded-3xl border my-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGI9AG2lCcy7Rmz9Mw09SQuJVnjs4useug0Q&s" className="lg:w-[200px] w-48" />
      <p>
        <span className="lg:text-3xl text-xl font-bold italic">Loading....</span>
        <br />
        please wait some time
      </p>
    </div>
  );
};

export default Loder;
