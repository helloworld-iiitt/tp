"use client";
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { navigation } from '@/lib/constants/home';
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Mobile() {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='w-fit'>
                <div className="flex flex-col gap-2">
                    {
                        navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? ' text-green-600' : 'hover:text-green-400',
                                    'px-3 text-15px font-medium space-links text-xl flex justify-start items-center gap-1'
                                )}
                                aria-current={item.href ? 'page' : undefined}
                                onClick={() => setOpen(false)}
                            >
                                {item.icon} {item.name}
                            </a>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>

    )
}
