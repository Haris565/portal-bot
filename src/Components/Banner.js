import bgtitle from "../Images/bgtitle.svg"
function Banner() {
    return (
        <div className='relative h-screen bg-gray-800' >
            
            <div className='absolute top-20 ml-20'>
                <img src={bgtitle} alt="" />
                
            </div>
            <div className='absolute top-1/4 ml-20'>
                <h1 className='text-white text-3xl '>Logo will come here</h1>
            </div>
        </div>
    )
}

export default Banner
