import AddBookForm from "@/Components/From/AddBookForm";

const AddBookPage = () => {
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
