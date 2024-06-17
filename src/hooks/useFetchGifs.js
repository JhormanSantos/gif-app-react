import { useEffect, useState } from "react"
import { sendGif } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const InfoImage = await sendGif(category)
        setImages(InfoImage)
        setIsLoading(false)
    }


    useEffect(() => {
        getImages()
        console.log(isLoading)
    }, [])
  return {
    Images
  }
}
