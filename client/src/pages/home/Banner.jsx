import bannerImg from '../../assets/banner.png'

const Banner = () => {

    return (
        <section className='flex flex-col md:flex-row py-16 justify-between items-center gap-12'>

            <div className='md:w-1/2 w-full flex items-center md:justify-end '>
                <img src={bannerImg} alt="" />
            </div>


            <div className='md:w-1/2 w-full '>
                <h1 className="md:text-5xl text-2xl font-medium mb-7">Lorem ipsum dolor sit amet o</h1>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati pariatur, ad omnis asperiores temporibus.
                </p>
                <button className="btn-primary">Subscribe</button>
            </div>


        </section>
    )
}

export default Banner