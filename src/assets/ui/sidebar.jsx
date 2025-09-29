import { useState } from 'react'
import { Menu, ChevronRight, ChevronRightCircle, Mail, X, Smartphone } from 'lucide-react'
import { HeaderMenu } from '../../lib/headerMenu'
const SideBar = ({removeWhite}) => {
    const [open, setOpen] = useState(false)
    const [hover, setHover]= useState(-1)
    const [childsCalled, setChildCalled]= useState(-1)
    const [childHover, setChildHover]= useState(-1)
    // Mock router - replace with actual useLocation() hook
    const router = { pathname: '/', hash: '' }
    
    return (
    <>
        <div onClick={() => setOpen(true)} className={`block lg:hidden border-2 p-1 ${removeWhite ? 'border-red-700 hover:border-transparent': 'border-neutral-100'} rounded-xl cursor-pointer hover:bg-red-700 transition-all ease-in-out duration-300 hover:scale-[1.05] hover:border-transparent`}>
            <Menu className={`h-5 w-auto ${removeWhite ? 'text-red-900! hover:text-neutral-100' : 'text-neutral-100'} stroke-2`}/>
        </div>
        <div className={`fixed top-0 left-0 bg-neutral-800/60 w-screen h-screen z-50 transition-all ease-in-out duration-500 ${open ? 'translate-x-0':'-translate-x-full'}`}>
            <div className={`fixed w-80 h-screen bg-neutral-100 flex flex-col transition-all ease-in-out duration-700 ${open ? 'translate-x-0':'-translate-x-full'}`}>
                <div onClick={() => setOpen(false)} className='absolute top-3 -right-12 border-white border-2 p-1 rounded-xl cursor-pointer'>
                    <X className='text-white stroke-[3]'/>
                </div>
                <img className='h-44 w-auto mx-auto my-5' src='/images/logo-3.png' alt='Logo'/>
                <ul className='flex flex-col px-10 gap-3'>
                    {
                        HeaderMenu.map((item,index) => 
                            <li key={index}>
                                <a href={item.childPages ? null : item.link} 
                                onClick={() => (childsCalled === -1 && item.childPages && setChildCalled(index)) || (childsCalled === index && item.childPages && setChildCalled(-1))} 
                                onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(-1)} 
                                className={`flex items-center capitalize tracking-wide font-semibold justify-between border-b pb-2 px-2 cursor-pointer ${hover === index ||childsCalled===index ? 'border-red-700':'border-neutral-300'} 
                                ${router.pathname === item.link ? 'border-red-700 text-red-700':''}`}>
                                    {item.title} <ChevronRightCircle className={`h-5 w-auto ${hover === index ? 'text-red-700':''} ${childsCalled===index ? 'text-red-700 rotate-90':''}`}/>
                                </a>
                                {
                                    childsCalled === index && item.childPages ? <div className='flex flex-col px-4 gap-2 mt-3'>
                                        {
                                            item.childPages.map((child,index) => <a href={child.link} key={index} 
                                            onMouseEnter={() => setChildHover(index)} onMouseLeave={() => setChildHover(-1)} 
                                            className={`flex items-center capitalize tracking-wide text-sm font-semibold justify-between border-b pb-2 px-2 
                                            ${childHover === index ? 'border-red-700':'border-neutral-300'} 
                                            ${router.hash.split('#')[1]?.toLowerCase() === child.link.split('#')[1]?.toLowerCase() ? 'border-red-700 text-red-700':''}`}>
                                                {child.title} <ChevronRight className={`h-5 w-auto ${childHover === index ? 'text-red-700':''}`}/>
                                            </a>)
                                        }
                                    </div>:null
                                }
                            </li>
                        )
                    }
                </ul>
                <div className='fixed flex flex-col px-10 gap-3 bottom-10 left-0 right-0'>
                    <a className="flex items-center tracking-wide font-semibold justify-between rounded-xl px-3 py-2 cursor-pointer text-white bg-blue-900 hover:bg-slate-900"
                        href='tel:+19714727066'>
                        (971) 472 7066
                        <Smartphone className="h-5 w-auto" /> 
                    </a>
                    <a className="flex items-center tracking-wide font-semibold justify-between rounded-xl px-3 py-2 cursor-pointer text-white bg-red-700 hover:bg-red-950"
                        href='mailto:info@odsdispatch.com'>
                        info@odsdispatch.com
                        <Mail className="h-5 w-auto" /> 
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar