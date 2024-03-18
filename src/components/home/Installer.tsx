import Image from "next/image";
import {forwardRef, createRef} from "react";
import {IconPackage} from "@tabler/icons-react";
import {Button} from "../utils/Button";
import Container from "../utils/Container";

export const InstallerRef = createRef<HTMLDivElement>();
export const Installer = forwardRef(() => (
    <section className="bg-vueling-dark overflow-hidden py-12" ref={InstallerRef}>
        <Container className="3xl:flex-row 3xl:justify-center flex flex-col items-center">
            <div className="3xl:text-left mb-4 text-center 2xl:mr-12">
                <IconPackage className="bg-vueling-gray 3xl:mx-0 mx-auto mb-4 rounded-xl p-2" size={55} stroke={1.5} />
                <h2 className="font-extrabold">
                    Custom-built Installer
                </h2>
                <p className="text-vueling-yellow max-w-2xl">
                    Our custom-build, open-source installer is where we keep the vPilotHub ACARS and liveries for you you to easily install.
                    Pick what you want to install, and the installer will automatically download  it into the proper folder.
                </p>
                <a href="https://api.vueling-virtual/isntaller">
                    <Button className="border-vueling-yellow bg-vueling-gray hover:bg-vueling-button-over hover:text-vueling-dark mt-8 w-40 border-2">
                        Download
                    </Button>
                </a>
            </div>
            <div className="3xl:-mb-3 3xl:w-320 mb-[-125px] w-11/12 xl:w-5/6">
                <Image src="/img/Installer.png" alt="Installer" width={1200} height={850} quality={80} objectFit="contain" />
            </div>
        </Container>
    </section>
));