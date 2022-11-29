
export default function NotionTitle({ params, textOnly }) {
    console.log(params.title[0].plain_text);
    // console.log("textOnly:", textOnly);
    if (textOnly == true) return params.title[0].plain_text

    return (
        params.title.map((data,index) => (
            <div key={index}>
                {data.plain_text}
            </div>
        ))
    )
}