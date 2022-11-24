
export default function NotionTitle({ params }) {
    // console.log(params.title[0].plain_text);
    return (
        params.title.map((data) => (
            <>{data.plain_text}</>
        ))
    )
}