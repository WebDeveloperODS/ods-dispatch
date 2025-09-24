import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Mock components since the original imports aren't available
const P1 = ({ children, extraClass = "" }) => <p className={`text-lg ${extraClass}`}>{children}</p>;
const H2 = ({ children, extraCss = "" }) => <h2 className={`text-3xl font-bold ${extraCss}`}>{children}</h2>;

export default function TestimonialsDisplay(){
    const testimonials = [
        {
            text: "ODS Dispatch has been a game changer for my trucking business. They handle all the load bookings and broker calls so I can stay focused on driving. Professional, reliable, and worth every penny.",
            author: "Michael Johnson"
        },
        {
            text: "I've worked with several dispatch services, but ODS Dispatch stands above the rest. They always find me great paying loads and keep me rolling consistently. Highly recommended!",
            author: "Sarah Mitchell"
        },
        {
            text: "ODS Dispatch made everything simple from day one. No stress, no wasted time—just quality freight and smooth communication. Couldn't ask for better support.",
            author: "David Allen"
        },
        {
            text: "As an owner-operator, finding the right loads used to be stressful. With ODS Dispatch, I know I'm getting the best rates and routes. They've boosted both my income and peace of mind.",
            author: "Rebecca Hayes"
        },
        {
            text: "ODS Dispatch has been the most reliable partner for my hotshot business. They understand my needs and always deliver on time with excellent dispatching support.",
            author: "James Carter"
        },
        {
            text: "Working with ODS Dispatch feels like having a full support team behind me. They're always quick to respond, professional, and genuinely care about my success on the road.",
            author: "Emily Brooks"
        },
        {
            text: "ODS Dispatch has saved me so much time and hassle. Their dispatchers are sharp, proactive, and always negotiate top rates. I won't trust anyone else with my loads.",
            author: "Anthony Lopez"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const maxIndex = testimonials.length - 3;
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 10000); // Slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        const maxIndex = testimonials.length - 3;
        setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        const maxIndex = testimonials.length - 3;
        setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1);
    };

    // const goToSlide = (index) => {
    //     setCurrentIndex(index);
    // };

    return(
        <div className="container mx-auto py-24 px-4">
            <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto">
                <H2 extraCss={'uppercase text-center underline underline-offset-8 decoration-4 decoration-red-800 text-gray-800 mb-8'}>
                    Testimonials From Our Carriers
                </H2>
                
                <div 
                    className="relative w-full"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-6 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-neutral-50 hover:bg-white shadow-sm shadow-neutral-600 rounded-full p-3 transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute -right-6 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-neutral-50 hover:bg-white shadow-sm shadow-neutral-600 rounded-full p-3 transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>

                    {/* Testimonials Container */}
                    <div className="relative bg-gradient-to-br from-neutral-100 to-gray-100 rounded-2xl shadow-xl px-10 py-7">
                        <div className="overflow-x-hidden">
                            <div 
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                                    width: `${(testimonials.length * 100) / 3}%`
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-1/3 px-4 flex-shrink-0 my-1"
                                    >
                                        <div className=" bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 h-full border border-gray-100 relative">
                                            {/* Quote Icon */}
                                            <Quote className="h-8 w-8 text-red-500 mb-4 opacity-60" />
                                            
                                            {/* Testimonial Text */}
                                            <P1 extraClass="text-gray-700 leading-relaxed mb-6 italic">
                                                "{testimonial.text}"
                                            </P1>
                                            
                                            {/* Author */}
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                                                </div>
                                                <div>
                                                    <P1 extraClass="font-bold uppercase tracking-wide underline underline-offset-3 decoration-3 decoration-red-900">{testimonial.author}</P1>
                                                    {/* <p className="text-gray-500 text-sm">Verified Carrier</p> */}
                                                </div>
                                            </div>
                                            
                                            {/* Decorative element */}
                                            <div className="absolute top-4 right-4">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile View - Stack testimonials */}
                <div className="md:hidden w-full space-y-6">
                    {testimonials.slice(currentIndex, currentIndex + 1).map((testimonial, index) => (
                        <div key={currentIndex + index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                            <Quote className="h-6 w-6 text-red-500 mb-3 opacity-60" />
                            <P1 extraClass="text-gray-700 leading-relaxed mb-4 italic text-base">
                                "{testimonial.text}"
                            </P1>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}