import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Recommended = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>

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
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(14, 20).map(book =>
                        <SwiperSlide key={book._id} >
                            <BookCard book={book} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}

export default Recommended