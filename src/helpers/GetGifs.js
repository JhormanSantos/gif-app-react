export const sendGif = async(category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=O7tXldpdlxPEArWsMAjmnBS72c3YEj9l&q=${category}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifsInformation = data.map(({id,title,images})=>({
        id: id,
        title: title,
        url: images.downsized_medium.url
      })
    )
    return gifsInformation
  }
  