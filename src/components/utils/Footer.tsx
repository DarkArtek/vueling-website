import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faDiscord, faTelegram, faFacebook,faTwitter, faTwitch} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/utils/Container";

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} aria-label={props.href} target="_blank">
        <FontAwesomeIcon className="transition hover:text-vueling-green" icon={props.icon} size="lg" />
    </a>
);

export const Footer = () => (
    <footer className="bg-vueling-dark py-8">
        <Container className="flex flex-col space-y-2">
            <div className="flex justify-center gap-x-4">
                <FooterIconItem icon={faDiscord} href="#"/>
                <FooterIconItem icon={faFacebook} href="#"/>
                <FooterIconItem icon={faTwitter} href="#"/>
                <FooterIconItem icon={faTelegram} href="#"/>
                <FooterIconItem icon={faTwitch} href="#"/>
            </div>
            <div className="flex justify-center gap-x-4 text-center">
                <a href="https://github.com/DarkArtek/vueling-website" className="hover:underline" target="_blank"
                   rel="noreferrer">
                    Source Code
                </a>
                <span className="cursor-pointer hover:underline">
                    <Link href="/tos">
                        Terms of Service
                    </Link>
                </span>
                <span className="cursor-pointer hover:underline">
                    <Link href="/policy">
                        Privacy Policy
                    </Link>
                </span>
            </div>
            <a href="https://vercel.com/?utm_source=DarkArtek&utm_campaign=oss" className="flex justify-center" target="_blank" rel="noreferrer">
                Powered by <span className="mx-2"><Image src="vercel.svg" alt="Vercel" width={60} height={20} /> </span>
            </a>
            <em className="text-center text-vueling-yellow">&copy; Vueling Virtual and its contributors.</em>
        </Container>
    </footer>
)