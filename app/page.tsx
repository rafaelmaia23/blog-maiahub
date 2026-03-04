import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PostsDisplay from "@/components/postsDisplay";
import TerminalWindow from "@/components/terminalWindow";
import Aside from "@/components/aside";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
        <div className="flex flex-col gap-6">
          <TerminalWindow title="~/maiahub/transmissoes">
            <PostsDisplay />
          </TerminalWindow>
        </div>

        <Aside />
      </main>

      <Footer />
    </>
  );
}
