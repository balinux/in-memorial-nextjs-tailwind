import axios from "axios";
import FormData from "form-data";
var fs = require('fs');
import formidable from 'formidable'

export const config = {
    api: {
      bodyParser: false,
    },
  };

export default async function handler(req, res) {
    const form = new formidable.IncomingForm()
    form.parse(req, async(err,fiels,files) => {
        if (err) {
            console.log("ERROR: ", err);
        }
        if (!files.length) {
            console.log("FILE: ", files.file.filepath);
            
            var data = new FormData();
            data.append('files', fs.createReadStream(files.file.filepath));
        
            var config = {
                method: 'post',
                url: 'https://telegra.ph/upload',
                headers: {
                    ...data.getHeaders()
                },
                data: data
            };
        
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    // res.status(200).json(response.data);
                    res.status(200).json({url: `https://telegra.ph${response.data[0].src}`});
        
                })
                .catch(function (error) {
                    console.log(error);
                    res.json(error)
                });
        }
    }) 
    // console.log(req.body);
    // var data = new FormData();
    // data.append('files', fs.createReadStream('/Users/usdi.prog/Documents/photo_2022-04-04_11-32-43.jpg'));

    // var config = {
    //     method: 'post',
    //     url: 'https://telegra.ph/upload',
    //     headers: {
    //         ...data.getHeaders()
    //     },
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         // res.status(200).json(response.data);
    //         res.status(200).json({url: `https://telegra.ph${response.data[0].src}`});

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         res.json(error)
    //     });

    //Return the content of the data file in json format
    // res.status(200).json(data);
}
