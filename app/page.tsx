import Header from "@/components/header";
import PostsDisplay from "@/components/postsDisplay";
import TerminalWindow from "@/components/terminalWindow";

export default function Home() {
  return (
    <>
      <Header />
      <TerminalWindow>
        <PostsDisplay />
      </TerminalWindow>
    </>
  );
}
