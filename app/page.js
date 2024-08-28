'use client' 
import Complement from "@/components/complement";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Timer from "@/components/timer";
import CustomCursor from '@/components/CustomCursor';
import Eyes from "@/components/eyes";


export default function Home() {

  return (
  <>
     <CustomCursor />
    <main className="h-full felx flex-col justify-center items-center dark:bg-cyan-950">
    <Nav/>
    <Eyes/>
    <Timer />
    <Complement/>
    
    <Footer/>
    
    </main>
    </>
  );
}
