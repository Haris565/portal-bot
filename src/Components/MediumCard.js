const MediumCard = ({image, text}) => {
    return (
        <div className='relative' style={{backgroundColor:"#483950"}}>
        <img src={image} alt="" className="" />
        <div className='absolute top-1/2 left-1/4 '>
             <h1 className='text-white text-2xl font-light'>
                 {text}
             </h1>
        </div>
     </div>
    )
}

export default MediumCard
