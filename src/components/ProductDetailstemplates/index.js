import { useEffect, useState } from 'react'
import GlassesTryOn from '../GlassesTryOn'
import { PiCameraSlash } from "react-icons/pi";
import {
  Productdetailsimgcont,
  ProductTemplatescont,
  Productimg,
  ProductTemplateimg,
  Productli,
  ProductimgCont,
  Tryonicon
} from './styledComponent'

const ProductDetailstemplates = (props) => {
  const { product } = props
  const { imageUrls = [] ,transparentimgUrl} = product

  const updatedImageList = imageUrls.map((each, index) => ({
    id: index + 1,
    url: each,
    isActive:index===0
  }))

  const [imagesList, setImageList] = useState([])
  const [activeImg, setActiveImg] = useState('')
  const [isTrying,setIstrying] = useState(false)

  useEffect(() => {
    setImageList(updatedImageList)
    if (updatedImageList.length > 0) {
      setActiveImg(updatedImageList[0].url)
    }
  }, [product]) // update when product changes

  const handleActiveImage = (id) => {
    const updated = imagesList.map((each) => ({
        ...each,
        isActive: each.id === id,
      }))
      setImageList(updated)
    const selected = imagesList.find((each) => each.id === id)
    if (selected) {
      setActiveImg(selected.url)
      console.log(selected.url)
    }
  }

  return (
    <Productdetailsimgcont>
      <ProductTemplatescont>
        {imagesList.map((each) => (
          <Productli key={each.id} onClick={() => handleActiveImage(each.id)} active={each.isActive} >
            <ProductTemplateimg src={each.url} alt={`template-${each.id}`} />
          </Productli>
        ))}
      </ProductTemplatescont>
        <ProductimgCont>
        {!isTrying&&<Productimg src={activeImg} alt="Main Product" />}
        {isTrying&&<GlassesTryOn imageUrl={transparentimgUrl}/>}
        <Tryonicon onClick={()=>setIstrying(prev=>!prev)}>
            {!isTrying && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>}
            {isTrying&& <PiCameraSlash size={25}/>}
        </Tryonicon>
      </ProductimgCont>
    </Productdetailsimgcont>
  )
}

export default ProductDetailstemplates
