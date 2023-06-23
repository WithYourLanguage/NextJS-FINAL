import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./../../components/Header";
import Link from "next/link";

export default function Detail() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const dataFetch = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${String(
            router.query.id
          )}`
        )
      ).json();
      console.log(
        `https://books-api.nomadcoders.workers.dev/list?name=${String(
          router.query.id
        )}`
      );

      setData(dataFetch);
      setData(dataFetch.results.books);
    })();
  }, []);

  return (
    <>
      <div className="title__div">
        <h1 className="title">Business books</h1>
      </div>
      <div className="books">
        {data === []
          ? "Loading"
          : Array.isArray(data) &&
            data.map((book) => (
              <div className="book_list">
                <img src={book.book_image} />
                <br />
                <span>{book.title}</span>
                <span className="author">{book.author}</span>
                <div className="Bay_Now__button">
                  <Link href={book.amazon_product_url}>
                    <a className="bayNowLinkA">Bay Now &rarr;</a>
                  </Link>
                </div>
                <br />
              </div>
            ))}
      </div>
      <style jsx>{`
        .bayNowLinkA {
          color: black;
          text-decoration: none;
        }
        .Bay_Now__button {
          padding: 10px 15px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          margin-top: 10px;
        }
        .author {
          color: rgb(0, 140, 255);
        }
        .books {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .title {
          font-size: 30px;
        }
        .title__div {
          display: flex;
          justify-content: center;
        }
        img {
          width: 120px;
          height: 170px;
          border-radius: 15px;
        }
        .book_list {
          width: 200px;
          height: 300px;
          flex-direction: column;

          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* x-offset=2px, y-offset=2px, blur-radius=5px, color=rgba(0, 0, 0, 0.5) */
        }
      `}</style>
    </>
  );
}
