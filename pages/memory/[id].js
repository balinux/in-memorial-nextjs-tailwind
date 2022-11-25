import Head from "next/head";
import Image from "next/image";
import NotionImageCard from "../../components/notion-image";
import NotionTitle from "../../components/notion-title";

export default function MemoryDetailById({ response }) {
  const { properties } = response;
  // console.log("properties: ", properties);

  const { id, name, date, gender, image_url } = properties;
  // console.log("properties: ", image_url);

  return (
    // <div>
    //   <p>{response.name}</p>
    // </div>
    <div className=" bg-white">
      <Head>
        {/* <title><NotionTitle params={name} textOnly={false}/></title> */}
        {/* <title>{<NotionTitle params={name} textOnly={false}/>}</title> */}
        <title>{NotionTitle({params:name, textOnly:true })}</title>

        <meta
          name="title"
          content={NotionTitle({params:name, textOnly:true }) == undefined ? "title" : "memory " + NotionTitle({params:name, textOnly:true })}
        />
        <meta
          name="description"
          // content={name == undefined ? name : "memory " + name}
          content={NotionTitle({params:name, textOnly:true }) == undefined ? "title" : "Turut berduka atas wafatnya " + NotionTitle({params:name, textOnly:true })}

        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://in-memorial.yhotie.com" />

        <meta
          property="twitter:title"
          // content={
          //   name == undefined ? name : " Turut berduka atas wafatnya " + name
        // }
          content={NotionTitle({params:name, textOnly:true }) == undefined ? "tw title" : "memory " + NotionTitle({params:name, textOnly:true })}
            
        />
        <meta
          property="twitter:description"
          // content="Turut berduka atas wafatnya syaikh ali jaber (Syaikh Ali Saleh Muhammed Ali Jaber)"
          // content={
          //   name == undefined ? name : " Turut berduka atas wafatnya " + name
          // }
          content={NotionTitle({params:name, textOnly:true }) == undefined ? "tw desc" : "Turut berduka atas wafatnya " + NotionTitle({params:name, textOnly:true })}

        />
        <meta
          property="twitter:image"
          // content="https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png"
          content={image_url.url == undefined ? "https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png" : image_url.url}

        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hthttps://in-memorial.yhotie.com" />
        <meta
          property="og:title"
          // content={name == undefined ? name : "memory " + name}
          content={NotionTitle({params:name, textOnly:true }) == undefined ? "og title" : "memory " + NotionTitle({params:name, textOnly:true })}

        />
        <meta
          property="og:description"
          // content={
          //   name == undefined ? name : " Turut berduka atas wafatnya " + name
          // }

          content={NotionTitle({params:name, textOnly:true }) == undefined ? "og desc" : "Turut berduka atas wafatnya " + NotionTitle({params:name, textOnly:true })}

        />

        <meta
          property="og:image"
          content={image_url.url == undefined ? "https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png" : image_url.url}

          // content="https://1.bp.blogspot.com/-hQra7wHJcec/YAJzUxwn2HI/AAAAAAAAEC8/8DcysIQpk54rQIV8begIPN3JcVIgcBOfwCLcBGAsYHQ/s1017/syaikh-ali-jaber.png"
        />
      </Head>

      <main className=" bg-white h-screen w-screen flex flex-col md:flex-row">
        {/* ucapan */}
        <div className="bg-white flex flex-1 flex-col justify-center items-start mx-5 mt-5 md:ml-32 md:mr-32 order-2 md:order-1">
          <Image src="/tahlil.svg" alt="tahlil" width={500} height={500} />
          {/* <figure className="">
            <img src="/tahlil.svg" alt="tahlil" className="" />
          </figure> */}
          <p className="mt-10 md:mt-5 self-center md:self-start text-lg">
            turut beduka cita atas wafatnya
          </p>
          <p className="mt-5 font-bold text-3xl self-center md:self-start ">
            {gender.select.name == "male" ? "Alm" : "Almh"}.{" "}
            <NotionTitle params={name} textOnly={false} />
          </p>
          <p className="self-center md:self-start">
            (<NotionTitle params={name} textOnly={false} />)
          </p>
          <p className="mt-10 md:mt-5 font-bold text-xl self-center md:self-start">
            {gender.select.name == "male"
              ? "Allahummaghfirlahu warhamhu wa ‘afihi wa’fu anhu "
              : "Allahummaghfirlahaa warhamhaa wa’aafihaa wa’fu anhaa"}
          </p>
          <p className="mt-5 italic mb-10 md:mb-5 self-center md:self-start">
            “ Ya Allah! Ampunilah dia (jenazah), berilah dia rahmat-mu,
            kesejahteraan, serta maafkanlah kesalahannya ”
          </p>

          {/* audio */}
          <div className="audio-player">
            <div className="timeline">
              <div className="progress"></div>
            </div>
            <div className="controls">
              <div className="play-container">
                <div className="toggle-play play"></div>
              </div>
              <div className="time">
                <div className="current">0:00</div>
                <div className="divider">/</div>
                <div className="length"></div>
              </div>
              <div className="name">Nasihat Tentang Kematian</div>
              {/* credit for icon to https://saeedalipoor.github.io/icono/  */}
              <div className="volume-container">
                <div className="volume-button">
                  <div className="volume icono-volumeMedium"></div>
                </div>

                <div className="volume-slider">
                  <div className="volume-percentage"></div>
                </div>
              </div>
            </div>
          </div>
          {/* audio */}
        </div>
        {/* ucapan */}

        {/* foto */}
        <div className="flex flex-1 justify-center items-center order-1 md:order-2">
          <div className="relative w-full md:h-screen h-80 overflow-hidden ">
            {/* <div className="absolute right-0">
              <Image
                src="/background-2.jpg"
                className=" md:opacity-70 opacity-20"
                width={500}
                height={300}
                alt="no image"
              />
            </div> */}

            <div className="absolute top-0 bottom-0 md:top-0 right-0 left-0 md:bottom-0 md:right-20 ">
              {/* <figure>
                <img src="/bunda.png" className="drop-shadow-5xl w-screen" />
              </figure> */}
              <div className=" flex flex-col md:h-full md:w-full h-full overflow-hidden justify-center  ">
                {/* <Image
                  // src="/bunda.png"
                  src={image_url}
                  className="drop-shadow-5xl w-screen"
                  width={500}
                  height={500}
                  alt="no image"
                /> */}

                <NotionImageCard
                  image_url={image_url}
                  className="drop-shadow-5xl md:w-screen w-1/2 md:h-2/3 h-2/3 object-cover rounded-full self-center"
                  width={500}
                  height={500}
                  alt="no image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <script defer src="/js/audio.js"></script>

      {/* <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  // console.log("id: ", id);
  // dev
  // const response = await fetch(`http://localhost:3000/api/passed-away/${id}`);

  // prod
  // const response = await fetch(`https://in-memorial-nextjs-tailwind.vercel.app/api/passed-away/${id}`);

  // const data = await response.json();
  // console.log("data: ", data);

  // api from notion
  const page_id = id;
  const url = `https://api.notion.com/v1/pages/${page_id}`;
  const token = `Bearer ${process.env.NOTION_TOKEN}`;
  const notion_version = process.env.NOTION_VERSION;

  // header
  const headers = {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: token,
    "Notion-Version": notion_version,
  };

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  // console.log("data: ", data);

  return {
    props: {
      response: data,
    },
  };
}
