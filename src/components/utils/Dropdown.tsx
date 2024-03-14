import {ReactNode, useState} from "react";
import {IconChevronDown} from "@tabler/icons-react";

type DropdownProps = {
    className?: string,
    titleName: string,
    children: ReactNode
}

export const DropdownItem = (props: {children: ReactNode}) => (
    <li className="px-4 py-1 text-vueling-links-color hover:text-vueling-links-over md:hover:bg-vueling-gray md:hover:text-vueling-dark">
        {props.children}
    </li>
);
export const Dropdown = (props: DropdownProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <li className={`cursor-pointer list-none ${props.className}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <span className="py-5 font-semibold" onClick={() => setIsShown(!isShown)} draggable="false">
                <span className={`group inline-flex hover:text-vueling-links-over ${isShown && 'text-vueling-links-color'}`}>
                    {props.titleName}
                    <IconChevronDown className={`${isShown && '-rotate-180'} self-center transition duration-200`} size={20} />
                </span>
                {isShown && (
                    <div className="relative">
                        <ul className="right-0 mt-4 flex w-56 flex-col gap-y-3 rounded-md py-1 ring-black/10 md:absolute md:bg-white md:shadow-lg md:ring-1">
                            {props.children}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    );
};