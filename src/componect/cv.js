import "./cv.css";

function Cv() {
    return (
        <div class="relative">
            <div className="absolute inset-0 w-[500px] h-screen bg-gray-500 
            shadow-[0_-1px_28px_87px_-8px_rgba(0,0,0,0.36)] bg-opacity-30 
            flex-col items-start justify-start  text-thin ">
                <div className="" >
                    <p className="mt-[30px] flex justify-center text-xl font-thin text-right tracking-widest text-black" >
                        APIWAT SINGHARACH
                    </p>
                    <p className="mt-[50px] mr-[20px] font-thin text-right tracking-widest text-xs text-gray-800">
                        Photographer / Flimmaker / Software Development in Training
                    </p>
                    <p className="mr-[20px] font-thin text-right tracking-widest text-xs text-gray-800">
                        Bron 1990 in ChiangMai
                    </p>
                    <p className="mt-[50px] mr-[45px] flex justify-center font-thin text-right tracking-widest text-lx text-black">
                        Educate
                    </p>
                    <p className="px-[30px] content-centerflex-wrap-reverse flex flex-row  justify-between p-[20px] font-thin text-right tracking-widest text-xs text-gray-800">
                        2011
                        <span className=" font-thin text-right tracking-widest text-xs text-gray-600">
                            Information Science ChiangMai Rajabhat University
                        </span>
                    </p>

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

                </div>

            </div>
        </div>
    )
}

export default Cv;

