function Inputbox({ label, type, placeholder }) {
  console.log("rendered");
  return (
    <>
      <label
        htmlFor=""
        className="text-white text-[1rem] xl:text-[1.6rem] font-sans "
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-10 bg-transparent text-white text-[0.8rem] xl:text-[1.4rem] font-sans w-full"
      />
    </>
  );
}

export default Inputbox;
