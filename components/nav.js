import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    const { data: session } = useSession();
    // console.log(data);
    // return(
    //     <div>{data.user.name}</div>
    // )

    return (
        <nav className=" flex flex-row h-20 w-screen justify-between items-center px-5 md:px-20">
            <p className=" font-bold text-3xl text-[#587462]"> In-Memorial.</p>
            <div className="md:flex flex-row hidden">
                <a href="#beranda">
                    <p className="mr-5">Beranda</p>
                </a>
                <a href="#kenangan">
                    <p className="mr-5">Kenangan</p>
                </a>
                <a href="#kontak">
                    <p className="mr-5">Kontak</p>
                </a>
                {session && <Image src={session.user.image} width={50} height={50} alt="no image" className='w-7 h-7 mr-2' />}
                {session && <p className='mr-5 font-bold'>{session.user.name}</p>}

                {session && <a href="#" onClick={handleSignout}><Image src="/logout.png" width={50} height={50} alt="no image" className='w-7 h-7' /></a>}
                {!session && <a href="#" onClick={handleSignin}>SIGN IN</a>}
            </div>
        </nav>
    )
}