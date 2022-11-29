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
        <nav className=" flex flex-row h-20 justify-between items-center px-5 md:px-20">
            <Link href={'/'}>
                <p className=" font-bold text-3xl text-[#587462]"> In-Memorial.</p>
            </Link>
            <div className="md:flex flex-row hidden items-center">
                <a href="#beranda">
                    <p className="mr-5 ">Beranda</p>
                </a>
                <a href="#kenangan">
                    <p className="mr-5 ">Kenangan</p>
                </a>
                <a href="#kontak">
                    <p className="mr-5 ">Kontak</p>
                </a>
                {session && <Image src={session.user.image} width={50} height={50} alt="" className="w-7 h-7 mr-2 rounded-full" />}
                {session && <p className='mr-5 font-bold'>{session.user.name}</p>}

                {session && <a href="#" onClick={handleSignout}>

                    <button className="bg-grey-light hover:bg-grey text-grey-darkest font-semibold px-4 rounded inline-flex items-center bg-[#587462] text-white py-1">
                        <span className='mr-2'>Logout</span>
                        <Image src="/logout.png" width={50} height={50} alt="no image" className='w-7 h-7 ' />
                    </button>
                </a>}
                {!session && <a href="#" onClick={handleSignin} className="">  <button className="bg-grey-light hover:bg-grey text-grey-darkest font-semibold px-4 rounded inline-flex items-center bg-[#587462] text-white py-1">
                    <span className='mr-2'>Login</span>
                    <Image src="/logout.png" width={50} height={50} alt="no image" className='w-7 h-7 ' />
                </button></a>}

            </div>
        </nav>
    )
}