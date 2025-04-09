import { useParams } from "react-router-dom"

export default function TourPage () {

    const { slug } = useParams();

    return (

        <>
        
            <h1>Paquete: {slug}</h1>

        </>

    )

}