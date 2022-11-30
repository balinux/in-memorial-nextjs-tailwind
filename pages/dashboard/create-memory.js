import Image from "next/image";
import React, { useState, useRef, useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import axios from "axios";
import { getSession } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth/next";
// import { options } from '../api/auth/[...nextauth]'
import Nav from "../../components/nav";
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion'
import Modal from "../../components/modal";

export const CreateMemory = ({ session }) => {
  // console.log(props);
  const { email, image } = session.user

  // set router
  const router = useRouter()

  // state
  const [imgSrc, setImgSrc] = useState()
  const [modalOpen, setmodalOpen] = useState(false)

  // modal setting
  const close = () => setmodalOpen(false)
  const open = () => setmodalOpen(true)


  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log("acceptedFiles: ", acceptedFiles);
    setImgSrc(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive, acceptedFiles,
    fileRejections, } = useDropzone({
      onDrop,
      accept: {
        'image/png': ['.png'],
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jpeg'],
      },
      maxFiles: 1
    })

  const acceptedFileItems = acceptedFiles.map(file => {
    if (file.length <= 0) return (<></>);
    return (
      <div key={file.path} className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 md:mb-3" role="alert">
        <ul>
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        </ul>
      </div>
    )
  });
  const preview = acceptedFiles.map(file => {
    if (file.length <= 0) return (<></>);

    return (
      <div key={file.path} className="bg-green-100 rounded-full mb-4 text-base text-green-700 md:mb-3 w-2/3 h-80 md:h-[40rem] md:w-[40rem]" role="alert">
        <Image
          // src={URL.createObjectURL(file)}
          src={URL.createObjectURL(imgSrc[0])}

          width={500}
          height={500}
          className=" w-full h-full object-cover rounded-md"
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    )
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {

    if (file.length <= 0 && errors == undefined) return (<></>);

    return (
      <div key={file.path} className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 md:mb-3" role="alert">
        <ul>
          <li key={file.path}>
            {/* {file.path} - {file.size} bytes */}
            <ul>
              {errors.map((e, i) => {
                return (
                  <li className=" text-sm" key={e.code + i}>{e.message}</li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
    )
  });

  // state 
  const [name, setname] = useState()
  const [date, setdate] = useState()
  const [gender, setgender] = useState()

  // form handle
  const handleGender = (event) => {
    console.log(event.target.value);
    setgender(event.target.value)
  }
  // form handle
  const handleDate = (event) => {
    console.log(event.target.value);
    setdate(event.target.value)
  }
  // form handle
  const handleName = (event) => {
    console.log(event.target.value);
    setname(event.target.value)
  }

  // submit
  const handleSubmit = async (event) => {
    open()

    event.preventDefault();
    const upload = await imageUploader(imgSrc[0])
    console.log("upload:", upload);
    const storeNotion = await storetoNotion(upload)
    console.log(storeNotion);
    close()
    router.push("/");
  };

  // image uploader
  const imageUploader = async (image) => {
    const formData = new FormData()
    formData.append('file', imgSrc[0])

    const urlUpload = `${process.env.NEXT_PUBLIC_BASE_URL}/api/telegraph`
    console.log(urlUpload);
    // const urlUpload = "https://httpbin.org/post"
    const response = await fetch(urlUpload, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  }

  // store to notion
  const storetoNotion = async (image_url) => {

    var data = JSON.stringify({
      "gender": gender,
      "status": "pending",
      "name": name,
      "author": email,
      "image_url": image_url.url,
      "date": date
    });

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });


  }



  return (
    <main className="flex flex-col md:p-0 p-5">
      {/* navigasi */}
      <Nav />
      {/* navigasi */}
      <section className="container self-center">
        <div className="md:flex flex-row justify-between">
          <div {...getRootProps()} className="bg-[#FBFBFB] md:h-[40rem] md:w-[40rem] h-36 flex flex-col items-center justify-center rounded-md text-gray-500 border-dashed border-2 border-indigo-600/30 mt-10 md:p-0 p-10">
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag `n` drop some files here, or click to select files</p>
            }
          </div>
          <aside>
            <div className="overflow-hidden md:mt-10 mt-5 flex flex-row justify-center">
              {preview}
            </div>
            {/* {acceptedFileItems} */}
            {fileRejectionItems}
          </aside>
        </div>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}


        <form onSubmit={handleSubmit}>
          {/* form */}
          <div className="w-full md:mr-5 mb-5 md:mb-10 mt-5">
            <label className="block">
              <span className="text-gray-700">Nama <span className=" text-gray-500 text-xs">(Almarhum/Almarhumah)</span></span>
              <input
                type="text"
                onChange={handleName}
                className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="masukkan nama"
              />
            </label>
          </div>
          {/* form */}

          {/* jenis kelamin */}
          <div className="w-full md:mr-5 mb-10 md:mb-10 mt-3">
            <label className="block">

              <span className="text-gray-700">Jenis Kelamin</span>
              <select className=" mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleGender}>
                <option value="male">pilih jenis kelamin</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>

            </label>
          </div>
          {/* jenis kelamin */}

          {/* tanggal */}
          <div className="w-full md:mr-5 mb-5 md:mb-0 mt-3">
            <label className="block">
              <span className="text-gray-700">Tanggal Wafat</span>
              <input
                onChange={handleDate}
                type="date"
                className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="masukkan nama"
              />
            </label>
          </div>
          {/* tanggal */}

          {/* submit button */}
          {modalOpen ? <motion.button
            onClick={() => null}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" bg-gray-500 mt-5 text-white rounded-md w-32 p-0 px-2 py-2 text-sm font-bold md:mb-10 self-center md:self-start"
            type="submit">Mengirim...</motion.button> : <motion.button
              onClick={() => (modalOpen ? close() : open())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" bg-[#587462] mt-5 text-white rounded-md w-32 p-0 px-2 py-2 text-sm font-bold md:mb-10 self-center md:self-start"
              type="submit">Kirim</motion.button>}
          {/* submit button */}


        </form>
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
        {/* {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />} */}
      </section>
    </main>
  )
}

export default CreateMemory;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  // const session = await unstable_getServerSession(context.req, context.res, options)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}