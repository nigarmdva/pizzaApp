import { useContext } from "react";
import { Button, Modal, Table } from "react-bootstrap"
import { FaRegTrashCan } from "react-icons/fa6";
import { CartContext } from "./App"

function Cart({show, onHide}) {
    const path = './assets/img/'
    const {data,cart,cartAdd,cartDel,cartUpd }= useContext(CartContext)
    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Sifariş</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quant</th>
                        <th>Sum</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( (item, i) => {
                        let p = data.pizza.find( p => p.id === item.id ) 
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img className="thumb" src={path + p.img} alt={p.name} /></td>
                                <td>{p.name}</td>
                                <td>{item.size}</td>
                                <td>{p.prices[item.size]}</td>
                                <td>{item.quant}</td>
                                <td>{item.quant * p.prices[item.size]}</td>
                                <td><FaRegTrashCan onClick={ () => cartDel(i) } /></td>
                            </tr>
                        ) }
                    )}
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default Cart