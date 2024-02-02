import React from 'react'
import Menu_list from './Menu_list'
import Container from '../Container/Container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
        <Container>
            <nav className="">
                <menu className="flex gap-[24px] items-center">
                    {Menu_list.map((menu_item) => (
                        <li key={menu_item.id} className='inline-flex'>
                            <Link href={menu_item.url} className='text-base text-gray-900'>{menu_item.title}</Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </Container>
    </header>
  )
}
