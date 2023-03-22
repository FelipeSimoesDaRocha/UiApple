import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
    session: Session | null;
}

const Home = () => {
    return (
        <div className="">
            <Head>
                <title>Apple Redesign</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className="relative h-[200vh] bg-[#E7ECEE]">
                <Landing />
            </main>
            <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
                <div className="space-y-10 py-16">
                    <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                        New Promos
                    </h1>

                    <Tab.Group>
                        <Tab.List className="flex justify-center">
                        </Tab.List>
                        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
};