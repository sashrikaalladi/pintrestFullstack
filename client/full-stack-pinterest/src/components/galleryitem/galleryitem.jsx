import './galleryitem.css';
const GalleryItem = ({item}) => {
    return (
        <div className="galleryitem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
            <img src={item.media} alt=""/>
        </div>
    )
}

export default GalleryItem