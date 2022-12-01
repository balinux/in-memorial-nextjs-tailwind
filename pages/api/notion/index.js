import axios from 'axios'


export default async function handler(req, res) {

    const { gender, status, name, author, image_url, date } = req.body;
    const database_id = process.env.NOTION_DATABASE_ID;
    const url =  'https://api.notion.com/v1/pages/';
    const token = `Bearer ${process.env.NOTION_TOKEN}`;
    const notion_version = process.env.NOTION_VERSION;

    var data = JSON.stringify({
        "parent": {
            "database_id": database_id
        },
        "properties": {
            "gender": {
                "select": {
                    "name": gender
                }
            },
            "status": {
                "select": {
                    "name": status
                }
            },
            "name": {
                "title": [
                    {
                        "text": {
                            "content": name
                        }
                    }
                ]
            },
            "author": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": author
                        }
                    }
                ]
            },
            "date": {
                "date": {
                    "start": date,
                    "end": null
                }
            },
            "image_url": {
                "files": [
                    {
                        "type": "external",
                        "name": "Space Wallpaper",
                        "external": {
                            "url": image_url ?? "https://in-memorial.yhotie.com/_next/image?url=%2Fcta.png&w=640&q=75"
                        }
                    }
                ]
            }
        }
    });
    var config = {
        method: 'post',
        url: url,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
            'Notion-Version': notion_version
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });



    // console.log(req.body);
    // res.json("ok")
}