import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <section className='w-full py-20 '>
        <Container>
            <div className="w-full flex items-start ">
                <div className="w-[60%]">
                    <h1 className="uppercase text-[48px] leading-[70px]">ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                    <p className="text-base mt-[32px] text-left leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="flex items-center gap-[24px] mt-[48px]">
                        <li className=" inline-flex">
                            <Button href="/"  type='primary'>Explore more</Button>
                        </li>
                        <li className=" inline-flex">
                            <Button href="/" type='outline'>Read more</Button>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <img className='w-full h-auto object-cover' src="/images/hero_img.png" alt="Изображение кофейных зёрен" />
                </div>
                
            </div>
        </Container>
    </section>
  )
}
