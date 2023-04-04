import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BooksCard from "../BooksCard/BooksCard";
import Loader from "../Loader/Loader";

const BookStore = () => {
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <Loader />
  }

  const { books } = useLoaderData();

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {books.map((book) => (
          <BooksCard key={book.isbn13} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookStore;
