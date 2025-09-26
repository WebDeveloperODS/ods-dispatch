import { P1 } from "../components/descriptions";
import { H2, H3, TagHead } from "../components/heading-1";

export default function WhoWeAre(){
    return(
        <div className="container mx-auto flex lg:grid lg:grid-cols-2 gap-6 py-24">
            <div className="relative">
                <img className="h-140 w-fit object-bottom" src={`${import.meta.env.VITE_IMAGES_SERVER}/images/home/5.jpg`} alt="Who we are - ODS Dispatch"/>
                <div className="flex gap-10 absolute bottom-8 left-40 mx-auto">
                    <div className="flex flex-col gap-2 bg-red-700 py-8 px-6 text-neutral-100">
                        <h2 className="text-5xl font-bold text-shadow-lg">10+ </h2>
                        <H3 extraCss="font-semibold tracking-wide uppercase text-shadow-lg">
                            Years In Dispatch
                        </H3>
                    </div>
                    <div className="flex flex-col gap-2 bg-blue-950 shadow-lg py-8 px-6 text-neutral-100">
                        <h2 className="text-5xl font-bold text-shadow-lg">24/7</h2>
                        <H3 extraCss="font-semibold tracking-wide uppercase text-shadow-lg">
                            Any Day Any Time
                        </H3>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-3">
                <TagHead extraCss={'underline underline-offset-3 decoration-2 decoration-red-800'}>Who we are</TagHead>
                <H2 className=''>Truck Dispatching Made Simple</H2>
                <P1 extraClass="capitalize tracking-wide">
                With <span className="font-extrabold! text-red-800">ODS Dispatch</span>, truck drivers and carriers gain access to reliable freight opportunities that pay well. We handle booking, negotiating, and planning while offering real-time support—helping you reduce downtime, increase revenue, and focus on delivering safely.
                </P1>
                <TagHead extraCss={'underline underline-offset-3 decoration-2 decoration-red-800'}>To get benify with business growth</TagHead>
                <form className="grid grid-cols-2 gap-x-5 gap-y-3">
                    <h4 className="col-span-full capitalize text-md xl:text-lg font-semibold">Share your details and we will reach back tou you.</h4>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Your name" className="bg-neutral-100 p-2 rounded-md shadow-md placeholder:italic placeholder:capitalize"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">E-Mail:</label>
                        <input type="text" name="email" id="email" placeholder="Your e-mail" className="bg-neutral-100 p-2 rounded-md shadow-md placeholder:italic placeholder:capitalize"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Contact:</label>
                        <input type="text" name="contact" id="contact" placeholder="Your contact" className="bg-neutral-100 p-2 rounded-md shadow-md placeholder:italic placeholder:capitalize"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Residential State:</label>
                        <input type="text" name="state" id="state" placeholder="Residential State" className="bg-neutral-100 p-2 rounded-md shadow-md placeholder:italic placeholder:capitalize"/>
                    </div>
                    <div className="col-span-full flex items-center justify-center mt-3">
                        <button className="font-semibold text-white bg-red-800 px-3 py-2 rounded-lg shadow-md cursor-pointer">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}