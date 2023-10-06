import React from "react";

const ProductsFilter = () => {
  return (
    <div className="w-1/6">
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1.5 w-full h-9 rounded-lg dark:bg-pink-500 text-white sm:text-sm"
      >
        <option value="">Please select</option>
        <option value="JM">John Mayer</option>
        <option value="SRV">Stevie Ray Vaughn</option>
        <option value="JH">Jimi Hendrix</option>
        <option value="BBK">B.B King</option>
        <option value="AK">Albert King</option>
        <option value="BG">Buddy Guy</option>
        <option value="EC">Eric Clapton</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
