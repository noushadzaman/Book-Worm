import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { news } from '../../../public/news';
import { Link } from 'react-router-dom';

const News = () => {

    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold mb-6">News</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    news.length > 0 && news.map(item =>
                        <SwiperSlide key={item._id} >
                            <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>

                                <div className='py-4'>
                                    {/* <Link to={`/news/${item._id}`}> */}
                                    <Link to={`/`}>
                                        <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                                    </Link>
                                    <div className='w-10 bg-primary h-[4px] mb-5' />
                                    <p className='text-sm text-gray-600'>{item.description}</p>
                                </div>

                                <div className='flex-shrink-0'>
                                    <img src={item.image} className='w-full object-cover' alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default News