import React from 'react'
import Menu_list from './Menu_list'
import Container from '../Container/Container'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-12 w-full">
        <Container>
            <nav className="w-full flex items-center justify-between gap-x-[72px]">
                <menu className="w-full flex items-center justify-between">
                    {Menu_list.map((menu_item) => (
                        <li key={menu_item.id} className='inline-flex'>
                            {menu_item.isImage ?(
                                <Link href={menu_item.url} className='text-base text-gray-900 px-32'><img src={menu_item.src} width={65} height={53} alt="" /></Link>
                            ):(
                                <Link href={menu_item.url} className='text-base text-gray-900 hover:text-yellow-500 transition-color duration-200'>{menu_item.title}</Link>
                            )}
                        </li>
                    ))}
                </menu>
                <ul className="flex items-center gap-[64px]">
                <li className="">
                        <button className="">
                            <FaSearch/>
                        </button>
                    </li>
                    <li className="">
                        <button className="">
                            <FaBars/>
                        </button>
                    </li>
                </ul>
            </nav>
        </Container>
    </header>
  )
}
