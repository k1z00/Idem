import data from "../../../../json/data.json";

const ImagesInfo: React.FC = () => {
    const { images } = data
    const headImage = images[0];
    const bottomImages = images.slice(1)

    return (

        < div >
            <div className="image__haed">
                <img
                    src={headImage.src}
                    alt={headImage.alt}
                    className={headImage.className}
                />
            </div>
            <div className="images__bottom">
                {bottomImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                    />
                ))}
            </div>
        </div >

    )
}
export default ImagesInfo