const BookDetails = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Book ID: {id}</h1>
    </div>
  );
};

export default BookDetails;
