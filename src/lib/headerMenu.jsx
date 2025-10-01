export const HeaderMenu=[
    {
        title: 'Home',
        link: '/',
        active: false,
    },
    {
        title: 'About us',
        link: '/about-ods-dispatch',
        active: false,
    },
    {
        title: 'Truck',
        link: '/truck-types',
        active: false,
        childPages: [
            {
                title: 'Dry vans',
                link: '/truck-types#dry-vans',
                active: false,
            },        
            {
                title: 'Straight box',
                link: '/truck-types#straight-box',
                active: false,
            },        
            {
                title: 'Flatbed',
                link: '/truck-types#flatbed',
                active: false,
            },        
            {
                title: 'Hotshot',
                link: '/truck-types#hotshot',
                active: false,
            },        
            {
                title: 'Reefer',
                link: '/truck-types#reefer',
                active: false,
            },        
            {
                title: 'Step deck',
                link: '/truck-types#step-deck',
                active: false,
            }, 
            {
                title: 'RGN & Heavy haul',
                link: '/truck-types#rgn-heavy-haul',
                active: false,
            },{
                title: 'Power only',
                link: '/truck-types#power-only',
                active: false,
            }
        ]
    },
    {
        title: 'Services',
        link: null,
        active: false,
        childPages: [
            {
                title: 'Social Media Management',
                link: '/services-by-ods/social-media-management',
                active: false,
            },        
            {
                title: 'Business Web Developments',
                link: '/services-by-ods/business-web-development',
                active: false,
            },
            {
                title: 'Dispatch',
                link: '/services-by-ods/dispatch-and-brokerage',
                active: false,
            }        
        ]
    },
    // {
    //     title: 'Carriers Setup',
    //     link: '/carriers-setup',
    //     active: false,
    // },
    // {
    //     title: 'Blog',
    //     link: '/',
    //     active: false,
    // },
    {
        title: 'Contact Us',
        link: '/to-contact-ods-dispatch',
        active: false,
    },
]