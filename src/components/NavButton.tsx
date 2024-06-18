import { Link } from "react-router-dom";

export function NavButton({ title, link }: { title: string, link: string }){
	return (
		<li>
            <Link className="w-[150px] inline-block text-white font-bold text-center
			no-underline py-[5px] px-0 text-[14px] hover:underline" to={link}>{title}</Link>
        </li>
	)
}