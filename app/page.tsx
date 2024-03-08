import Left from "@components/Left";
import Right from "@components/Right";

function Page() {
  return (
    <div
      className="flex lg:flex-row flex-col px-2 py-16 lg:gap-0 gap-20 lg:p-32"
      style={{ height: "35rem", maxHeight: "90%" }}
    >
      <Left />
      <Right />
    </div>
  );
}

export default Page;
