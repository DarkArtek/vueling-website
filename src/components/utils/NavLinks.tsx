import Link from "next/link";
import {useRouter} from "next/router";
import {Dropdown, DropdownItem} from "@/components/utils/Dropdown";

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({name, path, external, className}: LinkProps) => (
    <li className={`w-full cursor-pointer list-none transition hover:text-vueling-links-over ${className}`}>
        {
            external? (
                <a href={path}><p>{name}</p></a>
            ) : (
                <Link href={path}><p>{path}</p></Link>
            )
        }
    </li>
);

export const NavLinks = (props: {className?: string}) => {
    const router = useRouter();

    return (
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
            {router.pathname !== '/' && <NavLink name="Home" path="/" />}
            <NavLink name="NOTAMS" path="/notams" />
            <NavLink name="Monthly Schedule" path="/schedule" />
            <NavLink name="Documents" external path="https://docs.vueling-virtual.com/" />
            <NavLink name="Destinations" path="/destinations" />
            <Dropdown titleName="Community">
                <DropdownItem>
                    <NavLink name="Discord" external path="#" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Twitter" external path="#" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Facebook" external path="#" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Twitch" external path="#" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Donate" external path="https://opencollective.com/vueling-virtual" />
                </DropdownItem>
            </Dropdown>
        </span>
    );
};