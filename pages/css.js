import style from '../styles/Css.module.css';
import Head from 'next/head';

export default function Css(){
     return(
          <div>
                     <Head><title>css</title> </Head>
               <style jsx>{`
                    .h1tag{
                         color: teal;
                         font-family: Roboto;
                         text-align: center; 
                    }
               `}</style>
               <h1 className="h1tag">Styled JSX</h1>

               <h1 className="globalCss">Global CSS</h1>

               <h1 className={style.cssModule}>Module CSS</h1>
          </div>
     )
}