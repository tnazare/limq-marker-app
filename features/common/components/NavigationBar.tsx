import Link from "next/link";
import StyledNavigationLink from "./StyledNavigationLink";


const NavigationBar = () => (<nav className="bg-gray-700
                py-4 text-white fixed
                w-full top-0 left-0">
        <div className="container mx-auto">
            <ul className="ml-8 space-x-4">
                <li className="inline-block">
                    <StyledNavigationLink href="/" title="Accueil" />
                </li>
                <li className="inline-block">
                    <StyledNavigationLink href="/musicians" title="Musiciens" />
                </li>
            </ul>
        </div>
    </nav>)

export default NavigationBar;
