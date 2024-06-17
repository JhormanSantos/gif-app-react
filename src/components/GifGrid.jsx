
import { GridsCards } from "./gridsCards"
import { useFetchGifs } from "../hooks/useFetchGifs"
export const GifGrid = ({category}) => {


  const {Images} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
            {Images.map(img=>(
              <GridsCards key={img.id} {... img}/>
            ))}
        </div>
    </>
    
  )
}
