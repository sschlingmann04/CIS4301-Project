import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import HomeScreenNavButton from "@/components/HomeScreenNavButton";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <div>
            <Head>
                <title>Gaming Throughout History</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row w-full h-screen justify-center">
                <div className="flex flex-col justify-center w-64">
                    <HomeScreenNavButton
                        page_url="/prebuilt-query"
                        text="Prebuilt Query"
                    />
                    <div className="border-b" />
                    <HomeScreenNavButton
                        page_url="/custom-query"
                        text="Custom Query"
                    />
                </div>
            </main>
        </div>
    );
}
