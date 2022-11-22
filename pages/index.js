import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/nav";

export default function Home({ response }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>In Memorial</title>

        <meta name="title" content="web in memorial" />
        <meta
          name="description"
          content="Website In memorial kenangan keluarga meninggal"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://in-memorial-nextjs-tailwind-mndcbzykb-balinuxninja.vercel.app"
        />

        <meta
          property="twitter:title"
          content="Syaikh Ali Jaber (Syaikh Ali Saleh Muhammed Ali Jaber)"
        />
        <meta
          property="twitter:description"
          content="Website In memorial kenangan keluarga meninggal"
        />
        <meta
          property="twitter:image"
          content="https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://in-memorial.yhotie.com" />
        <meta
          property="og:title"
          content="Website In memorial kenangan keluarga meninggal"
        />
        <meta
          property="og:description"
          content="Website In memorial kenangan keluarga meninggal"
        />

        <meta
          property="og:image"
          content="https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png"
        />
      </Head>

      <main className="px-0 md:px-0 ">
        {/* navigasi */}
          <Nav/>
        {/* navigasi */}

        {/* HERO */}
        <section
          id="beranda"
          className=" flex flex-col md:flex-row justify-start items-center content-center px-4 md:px-20 md:h-[70vh] "
        >
          <div className="flex flex-col w-full md:h-full md:w-1/2 md:order-1 order-2 justify-center mt-5 md:mt-0">
            <p className=" font-bold md:text-3xl text-2xl text-center md:text-start">Simpan Kenangan Mereka</p>
            <p className="mt-2 mb-10 text-center md:text-start">
              Jaga kenangan terbaik bersama orang tercintamu bersama kami
            </p>
            <button className=" bg-[#587462] text-white rounded-md w-32 p-0 px-2 py-2 text-sm font-bold md:mb-10 self-center md:self-start">
              Buat Kenangan
            </button>
          </div>

          <div className="flex flex-row md:w-1/2 w-full justify-center content-center md:order-2 order-1 ">
            <Image src="/cta.png" width={400} height={100} alt="no image" />
          </div>
        </section>
        {/* HERO */}

        {/* memory */}
        <section
          id="kenangan"
          className=" bg-[#587462]/5 flex flex-col items-center mt-14 md:mt-0 px-4 pb-10 md:pb-0 md:px-0"
        >
          <div className=" w-1/6 h-1 bg-[#587462] mt-10 md:mt-20 mb-3"></div>
          <p className="text-2xl font-semibold md:mb-20">Kenangan Bersama </p>
          <p className="font-semibold text-[#587462] self-end md:mr-20 mt-5 ">
            Lihat lainnya
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-20 w-full h-full md:mb-20">
            <div className="flex flex-wrap -mx-1 lg:mx-4">
              {/* looping data */}
              {response.data.map((item) => (
                <div
                  key={item.id}
                  className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
                >
                  <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <Link href={`/memory/${item.id}`}>
                      
                      {/* <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  /> */}

                      <Image
                        // src="/background-2.jpg"
                        src={item.image_url}
                        className=" md:opacity-70 w-[400px] h-[250px] object-cover"
                        width={400}
                        height={600}
                        alt="no image"
                      />
                    </Link>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black font-bold"
                          href="#"
                        >
                          {item.name}
                        </a>
                      </h1>
                      <p className=" text-gray-500 text-sm">{item.date}</p>
                      {/* <p className="text-grey-darker text-sm">11/1/19</p> */}
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        {/* <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    /> */}

                        <Image
                          // src="/background-2.jpg"
                          src="https://picsum.photos/32/32/?random"
                          className=" block rounded-full"
                          width={32}
                          height={32}
                          alt="no image"
                        />

                        {/* <p className="ml-2 text-sm">Author Name</p> */}
                        <p className="ml-2 text-sm">{item.author}</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="#"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                </div>
              ))}

              {/* element Card*/}
              {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Article Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div> */}
              {/* element Card*/}
            </div>
          </div>
        </section>
        {/* memory */}

        {/* contact */}
        <section
          id="kontak"
          className=" flex flex-col items-center mt-14 md:mt-20 md:mb-20 px-4 md:px-0"
        >
          <div className=" w-1/6 h-1 bg-[#587462] mt-10 mb-3"></div>
          <p className="text-2xl font-semibold mb-10 md:mb-20">Kontak Saya </p>

          <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-20 w-full h-full md:mb-10 mb-5">
            <div className="w-full md:mr-5 mb-5 md:mb-0">
              <label className="block">
                <span className="text-gray-700">Nama</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="masukkan nama"
                />
              </label>
            </div>

            <div className="w-full">
              <label className="block">
                <span className="text-gray-700">Nomor HP</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="masukkan nomor HP"
                />
              </label>
            </div>
          </div>

          <div className="w-full md:mx-20 md:px-20 mb-10">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Pesan
            </label>
            <div className="mt-1 ">
              <textarea
                id="about"
                name="about"
                rows={5}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="masukkan pesan anda"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Tulis secara singkat dan jelas pesan anda
            </p>
          </div>

          <button className=" bg-[#587462] text-white rounded-md w-32 p-0 px-2 py-2 text-sm font-bold mb-10 md:mb-10 self-end md:mr-20">
            Kirim Pesan
          </button>
        </section>
        {/* contact */}

        {/* footer */}
        <footer className=" h-20 bg-[#587462]/5 flex md:flex-row flex-col px-20 items-center md:justify-between justify-center">
          <p className=" font-bold text-xl text-[#587462]"> In-Memorial.</p>
          <p className=" text-[#587462] text-center"> Copyright 2022, created by yhotie</p>
        </footer>
        {/* footer */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // dev
  // const response = await fetch(`http://localhost:3000/api/passed-away/`);

  // prod
  const response = await fetch(
    `https://in-memorial-nextjs-tailwind.vercel.app/api/passed-away`
  );

  const data = await response.json();

  return {
    props: {
      response: data,
    },
  };
}
