import Image from "next/image";
import { Inter } from "next/font/google";
import CountriesList from "@/components/CountriesList";
import SearchFilter from "@/components/SearchFilter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start px-16 py-10 ${inter.className} `}
    >
      <SearchFilter />
      <CountriesList />
    </main>
  );
}
