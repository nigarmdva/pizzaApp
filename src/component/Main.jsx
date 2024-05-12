import { Col, Row } from "react-bootstrap"
import Item from "./Item"
import { useOutletContext } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./App"

function Main() {
  const [setModalShow] = useOutletContext()
  const {data, cart, cartAdd, cartDel, cartUpd} = useContext(CartContext)

  return (
    <>
      <h2>Pizza</h2>
      <Row xs={1} md={2} lg={4} >
        {data.pizza.map( p => (
          <Col key={p.id} className="py-3">
            <Item cartAdd={cartAdd} p={p} size={data.size} setModalShow={setModalShow} />
          </Col>) 
        )}
      </Row>
    </>
  )
}

export default Main