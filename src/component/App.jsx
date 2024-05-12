import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { createContext,  useState } from "react";
import Cart from "./Cart";

const data = {
  size: {
    xs: "Mini, 16sm",
    sm: "Kiçik, 23sm",
    md: "Orta, 30sm",
    bg: "Böyük, 36 sm",
    ny: "Ny Style, 40sm",
  },
  pizza: [
    {
      id: "1",
      name: "Çiken Parmezan",
      img: "chicken_parmesan_item.jpg",
      prices: { xs: 5.5, sm: 11, md: 16, bg: 22 },
      des: "Pizza sousu, Çiken Poppersləri, Sarımsaqlı parmesan sousu, Göbələk, İtalyan Ədviyyatları, Mozzarella ",
    },
    {
      id: "2",
      name: "Acılı Çiken Ranç",
      img: "Spicy-chicken-ranch.png",
      prices: { xs: 5.5, sm: 11, md: 16, bg: 22 },
      des: "Ranç Sousu, Qril Toyuğu, Göbələk,  Halapeno Bibəri, Pomidor, Mozzarella ",
    },
    {
      id: "3",
      name: "Qril Çiken Parmezan",
      img: "Grill-Ciken-Parmezan.png",
      prices: { xs: 5.5, sm: 11, md: 17, bg: 21 },
      des: "Pizza sousu, Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri.",
    },
    {
      id: "4",
      name: "Amerikan Hot",
      img: "american-hot.png",
      prices: { xs: 5.5, sm: 9, md: 14, bg: 19 },
      des: "Pizza Sousu, Mozzarella, Pepperoni, Halapeno Bibəri",
    },
    {
      id: "5",
      name: "Karnaval",
      img: "Karnaval.jpg",
      prices: { sm: 9, md: 14, bg: 19 },
      des: "Pizza Sousu, Göbələk, Qara Zeytun, Pepperoni, Mozzarella",
    },
    {
      id: "6",
      name: "NY Style Margarita (40 sm)",
      img: "New-York-Style-Margarita.jpg",
      prices: { ny: 20 },
      des: "Pizza Sousu, Mozzarella, Pomidor, Oreqano",
    },
    {
      id: "7",
      name: "NY Style Grill Chicken (40sm)",
      img: "New-York-Style-Grill-Chiken.jpg",
      prices: { ny: 26 },
      des: "Pizza Sousu, Qril Toyuğu, Mozzarella, Pomidor",
    },
    {
      id: "8",
      name: "NY Style Pepperoni (40 sm)",
      img: "New-York-Style-Pepperoni.jpg",
      prices: { ny: 23 },
      des: "Pizza Sousu, Pepperoni, Mozzarella",
    },
    {
      id: "9",
      name: "Çiken Ranç",
      img: "chicken_ranch.jpg",
      prices: { xs: 5.5, sm: 11, md: 16, bg: 22 },
      des: "Ranç sousu, Qril Toyuğu, Pomidor,  Mozzarella ",
    },
    {
      id: "10",
      name: "Cheddar Dabl Burger",
      img: "Cheddar-Dabl-Burger.png",
      prices: { sm: 12, md: 20, bg: 25 },
      des: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar",
    },
    {
      id: "11",
      name: "Acılı Vegetarian",
      img: "vegetarian-acili.png",
      prices: { xs: 5.5, sm: 9, md: 13, bg: 18 },
      des: "Pizza Sousu, Halapeno Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər, Mozzarella ",
    },
    {
      id: "12",
      name: "Papa Miks",
      img: "papamiks-sayt.png",
      prices: { ny: 20 },
      des: "Çiken Barbekyu, Hot&Spaysi, Marqarita, Klassik Pepperoni",
    },
    {
      id: "13",
      name: "Çiken Barbekyu",
      img: "chicken_barbekyu.jpg",
      prices: { xs: 5.5, sm: 1, md: 16, bg: 22 },
      des: "Pizza sousu, Qril Toyuğu, Göbələk, Barbekyu Sousu, Mozzarella ",
    },
    {
      id: "14",
      name: "Cheddar Çiken Club",
      img: "Cheddar-Ciken-Club.png",
      prices: { sm: 11, md: 18, bg: 22 },
      des: "Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
    },
    {
      id: "15",
      name: "4 Pendir",
      img: "4-pendir.png",
      prices: { sm: 11, md: 16, bg: 22 },
      des: "Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar Pendirləri",
    },
    {
      id: "16",
      name: "Meksika",
      img: "meksika.jpg",
      prices: { xs: 5.5, sm: 9, md: 15, bg: 20 },
      des: "Pizza sousu, Qril Toyuğu, Pomidor, Göbələk, Yaşıl Bibər, Halapeno Bibəri, Mozzarella",
    },
    {
      id: "17",
      name: "Super Papa",
      img: "super-papa.jpg",
      prices: { sm: 12, md: 18, bg: 23 },
      des: "Pizza sousu, Pepperoni, İtalyan Sosisi, Vetçina, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella",
    },
    {
      id: "18",
      name: "yunan",
      img: "yunan.jpg",
      prices: { sm: 8, md: 13, bg: 16 },
      des: "Pizza sousu, Pomidor, Pepperonçini, Qara Zeytun, Feta Pendiri, Oreqano, Mozzarella Pendiri",
    },
    {
      id: "19",
      name: "Çiken Çizburger",
      img: "chicken_cheeseburger.jpg",
      prices: { sm: 12, md: 19, bg: 23 },
      des: "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella ",
    },
    {
      id: "20",
      name: "Marqarita",
      img: "margarita.jpg",
      prices: { xs: 5.5, sm: 8, md: 13, bg: 16 },
      des: "Pizza sousu, Pomidor, Oreqano, Ekstra Mozzarella",
    },
    {
      id: "21",
      name: "Qarışıq Ət",
      img: "qarishiq_et.jpg",
      prices: { sm: 14, md: 22, bg: 28 },
      des: "Pizza sousu, Pepperoni, İtalyan Sosisi, Mal Əti, Vetçina, Mozzarella",
    },
    {
      id: "22",
      name: "Vegetarian",
      img: "vegetarian.jpg",
      prices: { xs: 5.5, sm: 9, md: 13, bg: 18 },
      des: "Pizza sousu, Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella",
    },
    {
      id: "23",
      name: "Spaysi İtalyan",
      img: "Spaysi-italyan.png",
      prices: { sm: 13, md: 21, bg: 27 },
      des: "Pizza sousu, İtalyan sosisi, Pepperoni, Pul bibər, Mozarella.",
    },
    {
      id: "24",
      name: "Rastik",
      img: "Rustik-320x220-px.png",
      prices: { xs: 5.5, sm: 10, md: 15, bg: 20 },
      des: "BBQ sousu, İtalyan sosisi, Pepperoni, Göbələk, Yaşıl bibər, Mozzarella",
    },
    {
      id: "25",
      name: "Qarışıq ət BBQ",
      img: "Qarishiq-et-BBQ-320x220-px.png",
      prices: { sm: 15, md: 23, bg: 29 },
      des: "BBQ sousu, İtalyan sosisi, Mal əti, Vetçina, Pepperoni, Mozzarella",
    },
    {
      id: "26",
      name: "Bonanza",
      img: "Bonanza-320x220-px.png",
      prices: { sm: 13, md: 20, bg: 25 },
      des: "BBQ sousu, Mal əti, Vetçina, Pomidor, Mozzarella, Halapeno Bibəri",
    },
    {
      id: "27",
      name: "Dabl Çizburger",
      img: "double_cheeseburger.jpg",
      prices: { sm: 12, md: 19, bg: 23 },
      des: "1000 ada sousu, Mal Əti, Turşu Xiyar, Pomidor, Mozzarella ",
    },
    {
      id: "28",
      name: "Havay",
      img: "havay.jpg",
      prices: { xs: 5.5, sm: 10, md: 18, bg: 23 },
      des: "Pizza sousu, Qril Toyuğu, Ananas, Ekstra Mozzarella",
    },
    {
      id: "29",
      name: "Vestern Barbekyu",
      img: "vestern_barbekyu.jpg",
      prices: { xs: 5.5, sm: 10, md: 16, bg: 22 },
      des: "Mal Əti, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
    },
    {
      id: "30",
      name: "Klassik Pepperoni",
      img: "klassik_pepperoni.jpg",
      prices: { xs: 5.5, sm: 9, md: 14, bg: 19 },
      des: "Pepperoni, Ekstra Mozzarella",
    },
    {
      id: "31",
      name: "Hot and Spaysiç",
      img: "hot_and_spaysi.jpg",
      prices: { xs: 5.5, sm: 10, md: 16, bg: 21 },
      des: "Ranç Sousu, Qril Toyuğu, Göbələk,  Halapeno Bibəri, Pomidor, Mozzarella ",
    },
    {
      id: "32",
      name: "Marinera",
      img: "Marinera.jpg",
      prices: { xs: 5.5, sm: 10, md: 18, bg: 22 },
      des: "Pizza sousu, Ton Balığı, Yaşıl Bibər, Qara Zeytun, Mozzarella ",
    },
    {
      id: "33",
      name: "Litl İtaliya",
      img: "little_italy.jpg",
      prices: { sm: 11, md: 17, bg: 22 },
      des: "Pizza sousu, Pepperoni, İtalyan Sosisi, Göbələk, Qara Zeytun, Oreqano, Mozzarella ",
    },
    {
      id: "34",
      name: "Çiken Baffalo",
      img: "chicken_buffalo.jpg",
      prices: { sm: 12, md: 18, bg: 23 },
      des: "Ranç sousu, Çiken Poppersləri, Vetçina, Baffalo Sousu, Mozzarella ",
    },
    {
      id: "35",
      name: "Nyu Orleans",
      img: "new_orleans_pizza.jpg",
      prices: { sm: 10, md: 15, bg: 21 },
      des: "Qarğıdalı, Qril Toyuq, Göbələk, Yaşıl Bibər, Sarımsaq Sousu, Mozzarella",
    },
    {
      id: "36",
      name: "Çiken Göbələk",
      img: "Mushroom 320x220 px.jpg",
      prices: { sm: 12, md: 19, bg: 23 },
      des: "Göbələk sousu, Qril toyuğu, Turşu xiyar, Göbələk, Mozzarella",
    },
  ],
};
export const CartContext = createContext( {} )
export const ModalContext = createContext( {} )

function App() { 
  const [modalShow, setModalShow] = useState(false)
  const [cart, setCart] = useState([
    { id: "3", size: 'md', quant: 2 },
    { id: "26", size: 'bg', quant: 1 },
    { id: "7", size: 'ny', quant: 1 }
  ])

  function cartDel(ind) {
    setCart( cart.filter( (item, i) => i !== ind ) )
  }

  function cartUpd(i, q) {
    let arr = [...cart]
    if( arr[i].quant + q < 1 ) {
      cartDel(i)
      return
    }
    arr[i].quant += q
    setCart( arr )
  }

  function cartAdd(id, size, quant) {
    let ind = cart.findIndex( p => p.id === id && p.size === size ) 
    if(ind >= 0) {
      let newAdd = cart[ind]
      newAdd.quant += quant
      setCart( [...cart.filter( (elm, i) => i !== ind), newAdd] )

    } else setCart( [...cart, {id, size, quant} ] )
  }

  return (
    <CartContext.Provider value={ {data, cart, cartAdd, cartDel, cartUpd} }>
    <ModalContext.Provider value={ {} }>
      <Header setModalShow={setModalShow} />
      <main className="py-3">
        <Container>
          <Outlet context={[setModalShow]} />
        </Container>
      </main>
      <Footer />
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </ModalContext.Provider>
    </CartContext.Provider>
  )
}

export default App;