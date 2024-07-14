import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { navigation } from './Navbar'
import Link from 'next/link'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Mobile() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='w-fit'>
                <div className="flex flex-col gap-2">
                    {
                        navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? ' text-green-600' : 'hover:text-green-400',
                                    'px-3 text-15px font-medium space-links text-xl'
                                )}
                                aria-current={item.href ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>

    )
}