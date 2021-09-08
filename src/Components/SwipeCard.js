

const SwipeCard = ({image, text}) => {
    return (

            <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                <div className='relative h-80 w-80'>
                    <img src={image} layout='fill' className='rounded-xl'/>
                </div>
                <h3 className='text-2xl text-center absolute top-1/4 left-1/4 text-white'>{text}</h3>
                
            </div>
        )
    }
        
 

export default SwipeCard
