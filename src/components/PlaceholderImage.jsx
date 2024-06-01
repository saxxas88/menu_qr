import '../PlaceholderImage.css'

export default function PlaceholderImage({src,positionClass,...props}){
    
    return(
        <>
            <div className={`placeholder_image ${positionClass}`}>
                <img src={src} alt="" />
            </div>
        </>
    )
}