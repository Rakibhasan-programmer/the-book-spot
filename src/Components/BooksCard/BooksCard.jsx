import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const {title, image, price} = book;
  return (
    <>
      <Link to={`../store/${book.isbn13}`}>
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Price: {price}
            </p>
        </Card>
      </Link>
    </>
  );
};

export default BooksCard;
