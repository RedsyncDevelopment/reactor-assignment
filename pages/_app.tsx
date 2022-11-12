import type { AppProps } from "next/app";
import { CommentsProvider } from "../src/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommentsProvider>
      <Component {...pageProps} />
    </CommentsProvider>
  );
}
