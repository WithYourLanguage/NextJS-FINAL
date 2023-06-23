import { useEffect, useState } from "react";
import Link from "next/link";

export default function IndexPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // const response = await fetch(
      //   "https://books-api.nomadcoders.workers.dev/lists"
      // );
      // const dataFetch = await response.json();
      const dataFetch = await (
        await fetch("https://books-api.nomadcoders.workers.dev/lists")
      ).json();
      setData(dataFetch.results);
    })();
  }, []);

  return (
    <div>
      <div className="flex">
        <h2 className="title">The New York Times Best Seller Explorer</h2>
        <br />
        <div className="books">
          {Array.isArray(data) &&
            data.map((book) => (
              <div className="book_list">
                <Link
                  className="Link"
                  href={`/list/${String(book.list_name_encoded)}`}
                >
                  <span key={book.list_name_encoded}>
                    {book.list_name_encoded}
                  </span>
                </Link>
                <br />
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .Link {
          width: 150px;
          height: 50px;
        }
        .flex {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .title {
          font-size: 30px;
          margin-left: 20px;
          margin-bottom: 100px;
        }
        .books {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .book_list {
          cursor: pointer;

          width: 150px;
          height: 50px;
          background-color: white;
          border: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          border-radius: 15px;
        }
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
      `}</style>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
        `}
      </style>
    </div>
  );
}
