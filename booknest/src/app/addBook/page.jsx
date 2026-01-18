import AddBookForm from "@/Components/From/AddBookForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AddBookPage = async () => {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;

  if (auth !== "true") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="mainText text-center mb-6">Add New Book</h2>
        <AddBookForm />
      </div>
    </div>
  );
};

export default AddBookPage;
