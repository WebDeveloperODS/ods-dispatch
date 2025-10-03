import { PageButton } from "../components/buttons";
import { P1, P2 } from "../components/descriptions";
import { H2, H3 } from "../components/heading-1";

export default function BenefitsbyODS() {
  const dataToShow = [
    {
      Head: 'More Loads & Contracts',
      Desc: 'Shippers are more likely to hire a trucking company with a professional online presence.'
    },
    {
      Head: 'Stronger Reputation',
      Desc: 'Showcase reviews, success stories, and customer feedback.'
    },
    {
      Head: 'Recruitment Made Easy',
      Desc: 'Reach out to qualified drivers quickly through ads.'
    },
    {
      Head: <>Consistent <br className="hidden lg:block" />Growth</>,
      Desc: 'Marketing works while you\'re on the road, keeping your brand active 24/7.'
    },
    {
      Head: <>Cost <br className="hidden lg:block" />Effective</>,
      Desc: 'Cheaper and more targeted than old-school advertising.'
    }
  ];

  return (
    <div 
      className="container w-full bg-cover bg-fixed bg-no-repeat bg-center rounded-xl shadow-lg min-h-[600px] shadow-neutral-600 mb-24!" 
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200)"
      }}
    >
      <div className="w-full h-full flex flex-col gap-6 md:gap-8 items-center justify-center bg-neutral-600/50 rounded-xl text-center px-4 py-12 md:py-16">
        
        {/* Heading */}
        <H2 extraCss="tracking-wider uppercase font-bold text-neutral-100 drop-shadow-lg underline lg:underline-offset-8 decoration-4 decoration-red-700 px-4">
          Benefits of Social Media <br className="hidden lg:block" />
          Marketing for Trucking Companies
        </H2>
        
        {/* Subheading */}
        <P1 extraClass="text-neutral-100 capitalize tracking-wider text-base md:text-lg font-bold drop-shadow-md max-w-3xl px-4">
          Drive more loads, build trust, and grow your trucking business online.
        </P1>
        
        {/* Benefits Grid - RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-8 mt-4">
          {dataToShow.map((data, index) => (
            <div 
              key={index} 
              className="bg-neutral-100/90 backdrop-blur-sm flex flex-col gap-3 p-5 md:p-6 rounded-xl shadow-lg shadow-neutral-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <H3 extraCss="text-red-600 tracking-wide font-bold leading-tight min-h-[3rem] flex items-center justify-center">
                {data.Head}
              </H3>
              <P2 extraClass="text-neutral-700 font-semibold text-sm md:text-base tracking-wide leading-relaxed">
                {data.Desc}
              </P2>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <PageButton 
          addressLink="/carriers-setup" 
          extraClass="w-fit mt-4 text-neutral-100 border-2 bg-red-800 border-transparent transition-all ease-in-out duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl"
        >
          Let's Get Started
        </PageButton>
      </div>
    </div>
  );
}