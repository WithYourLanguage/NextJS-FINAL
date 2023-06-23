import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="header_div">
        <Link href="/">
          <a className="header-title">Home</a>
        </Link>
        <Link href="/about">
          <a className="header-about">About</a>
        </Link>
      </div>

      <style jsx>{`
        .header_div {
          display: flex;
          justify-content: space-between;
          margin: 20px;
          border-bottom: 1px solid black;
          padding: 10px 90px;
        }
        .header-title,
        .header-about {
          font-size: 20px;
          color: black;
          text-decoration: none;
        }
        .title {
          font-size: 30px;
          margin-left: 20px;
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
