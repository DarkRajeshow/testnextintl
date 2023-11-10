"use client"
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

export default function Test() {
    const t = useTranslations("Test");
    const router = useRouter();
    const pathname = usePathname();
    const changeLanguage = () => {
        if (pathname === "/mr") {
            router.push("/en")
        }
        else {
            router.push("/mr")
        }
    }
    return (
        <div >
            <button onClick={changeLanguage}>{t("title")}</button>
        </div>
    )
}
