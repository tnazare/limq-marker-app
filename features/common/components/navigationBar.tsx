import Image from "next/image";
import NavigationLink from "@/features/common/components/navigationLink";
import logo from '@/public/images/limq-logo.png'

function NavigationBar() {
  return (
    <nav
      className="flex flex-row items-center h-16 px-4 border-b border-gray-200 bg-gray-500 shrink-0 gap-4 md:px-6 dark:border-gray-800 dark:bg-gray-600">
      <Image src={logo} alt={"logo de la ligue"} height={50}/>
      <nav className="flex flex-1 justify-center md:justify-start">
        <NavigationLink text={"Accueil"} href="/"/>
        <span className="h-[2px] mx-4 bg-gray-200 dark:bg-gray-800/30"/>
        <NavigationLink text={"Musiciens"} href="/musicians"/>
        <span className="h-[2px] mx-4 bg-gray-200 dark:bg-gray-800/30"/>
        <NavigationLink text={"Équipes"} href="/teams" disabled/>
        <span className="h-[2px] mx-4 bg-gray-200 dark:bg-gray-800/30"/>
        <NavigationLink text={"Saisons"} href="/" disabled/>
        <span className="h-[2px] mx-4 bg-gray-200 dark:bg-gray-800/30"/>
        <NavigationLink text={"Matchs"} href="/" disabled/>
      </nav>
    </nav>
  )
}


export default NavigationBar;
