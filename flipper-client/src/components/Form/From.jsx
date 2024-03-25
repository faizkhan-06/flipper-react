import Inputbox from "../ui/Inputbox";

function From() {
  const userFormDetails = [
    {
      label: "Name",
      type: "name",
      placeholder: "Enter Channel name here",
    },

    {
      label: "Email",
      type: "email",
      placeholder: "Enter email here",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter password here",
    },
    {
      label: "Profile Photo",
      type: "file",
      //   placeholder: "Enter email here",
    },
    {
      label: "Background Photo",
      type: "file",
      //   placeholder: "Enter email here",
    },
    {
      label: "Other Social media Links",
      type: "url",
      placeholder: "Enter Url here",
    },
  ];
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <form className="flex flex-col backdrop-blur-sm border-white rounded-3xl items-start justify-center px-10 py-10 gap-4 border-4 w-max lg:w-8/12">
          {userFormDetails.map((form) => {
            return (
              <>
                <Inputbox
                  label={form.label}
                  type={form.type}
                  placeholder={form.placeholder}
                />
              </>
            );
          })}
          <button className="bg-transparent text-white text-[2rem] self-center px-6 py-2 font-sans border-white border-2 rounded-lg mt-6">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default From;
