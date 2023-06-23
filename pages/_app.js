import "../styles/reset.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
          font-family: "Indie Flower", cursive;
        }
      `}</style>
    </div>
  );
}
