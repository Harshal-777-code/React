import tom_img from './image/car.jpg';

export function Image() {
    return <>
    
    <img src={Process.env.PUBLIC_URL + "/download.jpg"} alt="car" width ="200" />

    <img src={tom_img} alt="car"width="200" />
    
    </>
}