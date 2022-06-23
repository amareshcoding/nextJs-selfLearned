import Head from 'next/head';

export default function Tech({ data }){
     console.log('data: ', data);

     return(
          <div>
               <Head><title>tech</title> </Head>
               <h1>welcome to tech page</h1>
               <h1>{data.name}</h1>
               <p>{data.address}</p>
          </div>
     )
}
// getStaticProps
//used for static data props/fetch

export async function getStaticProps(){
    //data fetch
    const res = await fetch('http://localhost:3001/product/1');
    const data = await res.json();
    return {
     props : {
          data
     }
    }
}

//getServiceSideProps
//for changing data
export async function getServiceSideProps() {
//data fetch
//     const res = await fetch('http://localhost:3001/product/1');
//     const data = await res.json();
//     return {
//      props : {
//           data
//      }
//     }
}