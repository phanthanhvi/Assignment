import style from "./Home.module.css"
import { Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
function Home() {

    const [data, setData] = useState([])
    async function fetchData() {
        const product = await axios.get("https://fakestoreapi.com/products?limit=5")
        setData(product.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className={style.content}>
            {
                data && data.length !== 0 ?
                    data.map((item, index)=>(
                        <div className={style.contentItem} key={index}>
                            <Image src={item.image} />
                            <div className={style.contentVertical}>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))
                : <h1>Loading...</h1>
            }
            </div>
        </>
    )
}

export default Home