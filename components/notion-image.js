import Image from "next/image";

export default function NotionImageCard({params}) {
    return(
        <Image
        // src="/background-2.jpg"
        src={params.url}
        className=" md:opacity-70 w-[400px] h-[250px] object-cover"
        width={400}
        height={600}
        alt="no image"
      />
    )
}