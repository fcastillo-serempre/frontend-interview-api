import data from '../../../lib/data.json'
import image from '../../../public/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser.png'

export default function handler(req, res) {
  const {id} = req.query
  let itemData = data.find(x => String(x.id) === String(id))

  if(itemData) {
    itemData = {
      ...itemData,
      img: image
    }
    res.status(200).json(itemData)
  } else {
    res.status(404).end()
  }


}
