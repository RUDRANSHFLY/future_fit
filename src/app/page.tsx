import Main from "@/components/Main";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <main className={"max-w-7xl h-screen mx-auto py-4 px-2 text-background flex justify-center items-center"}>
     <NavBar />
     <Main />
    </main>
  );
}
