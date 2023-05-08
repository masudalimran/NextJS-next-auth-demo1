import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <EditModal />
        <Layout>
          {/* <Modal isOpen title="Text Modal" actionLabel="Submit" /> */}
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
