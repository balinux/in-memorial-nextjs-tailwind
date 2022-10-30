import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ response }) {
  return (
    <div className=" bg-white">
      <Head>
        <title>In Memorial</title>

        <meta
          name="title"
          content="web in memorial"
        />
        <meta name="description" content="Website In memorial kenangan keluarga meninggal" />
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
        <meta
          property="og:url"
          content="https://syaikh-ali-jaber.yhotie.com/"
        />
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

      <main className=" container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
    
          {/* looping data */}
          {response.data.map((item) => (
            <div key={item.id} className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
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
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      {item.name}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">{item.date}</p>
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
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // dev
  // const response = await fetch(`http://localhost:3000/api/passed-away/`);

  // prod
  const response = await fetch(`https://in-memorial-nextjs-tailwind.vercel.app/api/passed-away`);

  const data = await response.json();

  return {
    props: {
      response: data,
    },
  };
}
