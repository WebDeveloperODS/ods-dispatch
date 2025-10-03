import { Signature } from "lucide-react";
import { P2 } from "../components/descriptions";
import { H2, H3 } from "../components/heading-1";
import { FolderSymlink } from "lucide-react";
import { Headset } from "lucide-react";
import { Truck } from "lucide-react";
import { FunctionButton, PageButton } from "../components/buttons";

export default function GettingStartedWithODS(){
    const Steps = [
        {
            icons: <Signature className="text-white h-10 w-auto" />,
            title: 'Sign an agreement',
            tagline: 'Complete a quick and simple service agreement to get started.'
        },{
            icons: <FolderSymlink className="text-white h-10 w-auto" />,
            title: 'Submit your documents',
            tagline: 'Provide MC Authority, W-9, and insurance for verification.'
        },{
            icons: <Headset className="text-white h-10 w-auto" />,
            title: 'Connect with dispatcher',
            tagline: 'Get introduced to your dedicated ODS dispatcher who will handle your loads.'
        },{
            icons: <Truck className="text-white h-10 w-auto" />,
            title: 'Start hauling loads',
            tagline: 'We begin dispatching immediately so you can stay on the road earning.'
        }
    ]
    return(
        <>
            <div className="container py-12 lg:py-24 flex flex-col items-center justify-center">
                <H2 extraCss={'uppercase underline underline-offset-5 decoration-3 decoration-red-800'}>Getting Started With ODS</H2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 mt-8">
                    {
                        Steps.map((step,index) => <div key={index} className="flex flex-col gap-2 items-center bg-neutral-200 p-3 lg:px-5 lg:py-8 rounded-xl shadow-md text-center">
                            <div className="bg-blue-800 w-fit p-3 lg:p-5 rounded-full shadow-md shadow-neutral-500 mb-3">{step.icons}</div>
                            <H3 extraCss={'uppercase font-bold tracking-wide'}>{step.title}</H3>
                            <P2 extraClass="capitalize tracking-wide">{step.tagline}</P2>
                        </div>
                        )
                    }
                </div>
                <PageButton addressLink={'/carriers-setup'} extraClass={'border-2 text-blue-800 font-bold hover:border-transparent hover:text-neutral-100 hover:bg-blue-800 mt-10'}>Apply now</PageButton>
            </div>
            <div className="w-full text-center py-8 px-2 lg:px-0 lg:py-14 flex items-center justify-center bg-red-700">
                <H3 extraCss={'font-bold capitalize tracking-wider text-neutral-100'}>Professional Dispatch Solutions for Owner-Operators and Trucking Fleets</H3>
            </div>
        </>
    )
}