import { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"

function Item({p, size, cartAdd, setModalShow}) {
    const {id, name, img, prices, des} = p 
    const path = './assets/img/'
    const [olcu, setOlcu] = useState( Object.keys(prices)[0] ) 
    const [say, setSay] = useState( 1 ) 

    return (
        <Card>
            <Card.Img variant="top" src={path + img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{des}</Card.Text>
                <div className="d-flex"> 
                    <Form.Select size="sm" onChange={ (e) => setOlcu(e.target.value) }>
                        {Object.keys(prices).map( (s, i) => <option key={i} value={s}>{size[s]}</option> )}
                    </Form.Select>
                    <b className="ps-3 text-end"> {say * prices[olcu]}₼</b>
                </div>
                <div className="py-2">
                    <button onClick={ () => setSay( say > 1 ? say - 1 : say ) } className="btn btn-outline-primary mx-2">-</button>
                    <span>{say}</span>
                    <button onClick={ () => setSay( say + 1 ) } className="btn btn-outline-primary mx-2">+</button>
                </div>
                <Button onClick={ () => {
                    cartAdd(id, olcu, say)
                    setModalShow(true)
                } } variant="primary">Səbət</Button>
            </Card.Body>
        </Card>
    )
}

export default Item