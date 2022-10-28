export default function MemoryIndex({response}) {
    console.log("data: ", response);
    return (
      <div>
        <p>{response[0].name}</p>
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    const { params } = context;

    // const { id } = params;
    const response = await fetch("https://in-memorial-nextjs-tailwind-mndcbzykb-balinuxninja.vercel.app/api/passed-away");
  
    const data = await response.json();
    // console.log(data);
  
    return {
      props: {
        response: data.data,
      },
    };
  }
  