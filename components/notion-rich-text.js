
export default function NotionRichText({ params }) {
    // console.log(params.title[0].plain_text);
    return (
        params.rich_text.map((data) => (
            <>{data.plain_text}</>
        ))
    )
}