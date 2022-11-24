import Image from "next/image";

export default function NotionImageCard({image_url, className, width, height}) {
  // console.log("image_url:", image_url);
  // console.log("className:", className);
    return(
      //   <Image
      //   // src="/background-2.jpg"
      //   src={image_url.url}
      //   className=" md:opacity-70 w-[400px] h-[250px] object-cover"
      //   width={400}
      //   height={600}
      //   alt="no image"
      // />
      <Image
      // src="/background-2.jpg"
      src={image_url.url}
      className={className}
      width={width}
      height={height}
      alt="no image"
    />
    )
}