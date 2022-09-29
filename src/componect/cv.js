import "./cv.css";
import Header from "./header";
import { Helmet } from 'react-helmet';

function Cv() {

    return (
        <>
            <Header />
            <Helmet>
                <title>HOHOKZ | CV</title>
            </Helmet>
            <div class="">
                <div className="mt-[-50px] inset-0 w-[500px] h-screen bg-gray-500 
            shadow-[0_-1px_28px_87px_-8px_rgba(0,0,0,0.36)] bg-opacity-30 
            flex-col items-start justify-start  text-thin ">
                    <div className="" >
                        <p className="pt-[250px]   flex justify-center font-thin tracking-widest text-xs text-gray-800">
                            Bron 1990 in ChiangMai
                        </p>
                        <p className=" mt-[20px] flex justify-center font-thin tracking-widest text-xs text-gray-800">
                            Software Development in Training / Photographer / Flimmaker
                        </p>

                        <p className=" flex justify-center font-thin tracking-widest text-xs text-gray-800">
                            Live, life and Learn / Now ! I'm Software Development in Training
                        </p>
                        <p className="mt-[50px] mr-[45px] flex justify-center font-thin text-right tracking-widest text-lx text-black">
                            Educate
                        </p>
                        <p className="px-[50px] content-center flex-wrap-reverse flex flex-row  justify-between p-[20px] font-thin text-right tracking-widest text-xs text-gray-800">
                            2011
                            <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                Information Science ChiangMai Rajabhat University
                            </span>
                        </p>

                        <p className="mb-[20px] px-[50px] flex justify-center font-thin text-right tracking-widest text-lx text-black">
                            Experience
                        </p>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2011-2015
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    FreeLance Photographer / Flimmaker
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row  justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2016-2017
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    ChiangMai Citylife Magazine Photographer
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2018-2019
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    Head ChiangMai Citylife Magazine Photographer
                                </span>
                            </p>
                        </div>
                        <p className="mb-[20px] mt-[50px] mr-[45px] flex justify-center font-thin text-right tracking-widest text-lx text-black">
                            Experience
                        </p>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2011-2015
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    FreeLance Photographer / Flimmaker
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row  justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2016-2017
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    ChiangMai Citylife Magazine Photographer
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2018-2019
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    Head ChiangMai Citylife Magazine Photographer
                                </span>
                            </p>
                        </div>
                        <p className="mb-[20px] mt-[50px] mr-[45px] flex justify-center font-thin text-right tracking-widest text-lx text-black">
                            Exhibition
                        </p>
                        <div className="">
                            <p className="px-[30px] content-center flex-wrap-reverse flex flex-row justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2016
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    Awkwardly Rangefinder at Galleries Night Chiang Mai
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p className="px-[30px] content-center flex-wrap-reverse flex flex-row  justify-between font-thin text-right tracking-widest text-xs text-gray-800">
                                2018
                                <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                                    belive(fe) at The Box Hotel ChiangMai
                                </span>
                            </p>
                        </div>
                        <div className="pt-[30px] flex justify-center">
                            <svg className="pl-[5px]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.207 14.793C11.525 17.111 13.678 18.403 15.28 19.121C16.679 19.748 18.33 19.256 19.617 17.969L19.911 17.674L16.375 15.424C15.703 16.404 14.432 16.979 13.163 16.444C12.202 16.038 10.93 15.344 9.793 14.207C8.656 13.07 7.963 11.798 7.557 10.837C7.021 9.568 7.595 8.297 8.576 7.625L6.326 4.089L6.031 4.383C4.744 5.67 4.253 7.321 4.879 8.72C5.597 10.322 6.889 12.475 9.207 14.793ZM14.463 20.946C12.648 20.133 10.291 18.705 7.793 16.207C5.295 13.71 3.867 11.352 3.053 9.537C1.978 7.137 2.96 4.627 4.617 2.969L4.911 2.674C5.12275 2.46212 5.37938 2.3005 5.66195 2.20109C5.94453 2.10169 6.24582 2.06702 6.54359 2.09966C6.84135 2.13229 7.12799 2.2314 7.38232 2.38966C7.63665 2.54792 7.85218 2.76128 8.013 3.014L10.843 7.464C10.918 7.58204 10.9673 7.71449 10.9879 7.85279C11.0085 7.9911 10.9999 8.13218 10.9626 8.26694C10.9252 8.40169 10.8601 8.52713 10.7713 8.63514C10.6825 8.74314 10.572 8.83133 10.447 8.894L9.814 9.211C9.382 9.427 9.294 9.808 9.399 10.059C9.738 10.862 10.305 11.89 11.207 12.793C12.11 13.695 13.138 14.262 13.941 14.601C14.192 14.707 14.573 14.618 14.789 14.186L15.106 13.553C15.1686 13.4279 15.2567 13.3174 15.3647 13.2284C15.4726 13.1395 15.5981 13.0743 15.7328 13.0369C15.8676 12.9995 16.0087 12.9907 16.147 13.0112C16.2854 13.0318 16.4179 13.0811 16.536 13.156L20.986 15.987C21.2387 16.1478 21.4521 16.3634 21.6103 16.6177C21.7686 16.872 21.8677 17.1586 21.9003 17.4564C21.933 17.7542 21.8983 18.0555 21.7989 18.338C21.6995 18.6206 21.5379 18.8773 21.326 19.089L21.031 19.383C19.374 21.041 16.864 22.022 14.463 20.946Z" fill="black" />
                            </svg>
                            <span className="pl-[5px] tracking-widest text-xs text-gray-600">(+66) 80 677 1226 </span>
                            <svg className="pl-[5px]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.544 5.168C2.8 4.80788 3.13824 4.51404 3.53061 4.3109C3.92298 4.10776 4.35816 4.00117 4.8 4H19.2C20.136 4 20.953 4.47 21.456 5.168C21.799 5.646 22 6.235 22 6.867V17.133C22 18.682 20.78 20 19.2 20H4.8C3.22 20 2 18.682 2 17.133V6.867C2 6.235 2.2 5.646 2.544 5.167V5.168ZM4.933 6L11.26 12.965C11.3537 13.0681 11.468 13.1505 11.5954 13.2069C11.7228 13.2633 11.8607 13.2924 12 13.2924C12.1393 13.2924 12.2772 13.2633 12.4046 13.2069C12.532 13.1505 12.6463 13.0681 12.74 12.965L19.067 6H4.933ZM20 7.948L14.22 14.31C13.9388 14.6194 13.5961 14.8665 13.2138 15.0357C12.8315 15.2048 12.418 15.2922 12 15.2922C11.582 15.2922 11.1685 15.2048 10.7862 15.0357C10.4039 14.8665 10.0612 14.6194 9.78 14.31L4 7.948V17.133C4 17.647 4.392 18 4.8 18H19.2C19.608 18 20 17.647 20 17.133V7.948Z" fill="black" />
                            </svg>
                            <span className="pl-[5px] tracking-widest text-xs text-gray-600">hohokz@hotmail.com </span>
                        </div>
                    </div>


                </div>
                <   div className="flex flex-row-reverse mt-[-900px]">
                    <img src="./images/photographer_picture.jpg" width="929px" />
                </div>
            </div>


        </>
    )
}

export default Cv;

