import Arduino1 from "../../assets/img/arduino-1.jpg"
import Arduino2 from "../../assets/img/arduino-2.jpg"
import Arduino3 from "../../assets/img/arduino-3.jpg"
import Arduino4 from "../../assets/img/arduino-4.jpg"
import Arduino5 from "../../assets/img/arduino-5.jpg"

import Esp1 from "../../assets/img/esp-1.jpg"
import Esp2 from "../../assets/img/esp-2.jpg"
import Esp3 from "../../assets/img/esp-3.jpg"
import Esp4 from "../../assets/img/esp-4.jpg"
import Esp5 from "../../assets/img/esp-5.webp"
import Esp6 from "../../assets/img/esp-6.jpg"

import Pantalla1 from "../../assets/img/pantalla-1.jpg"
import Pantalla2 from "../../assets/img/ptantalla-2.jpg"
import Pantalla3 from "../../assets/img/pantalla-3.jpg"
import Pantalla4 from "../../assets/img/pantalla-4.jpg"
import Pantalla5 from "../../assets/img/pantalla-5.jpg"

import CC from "../../assets/img/Control-de-calidad-Edimar.jpg"
import Background from "../../assets/img/arduino-fondo.jpg";
import ProductList from "../../components/ProductList/Index.jsx";
import {useContext, useState} from "react";
import {StoreContext} from "../../App.jsx";

const products = [
    {
        id: "1",
        image: Arduino1,
        name: "Arduino UNO Chip CH340",
        price: "S/ 28.00",
        type: "arduino"
    },
    {
        id: "2",
        image: Arduino2,
        name: "Arduino Pro Mini",
        price: "S/ 16.00",
        type: "arduino"
    },
    {
        id: "3",
        image: Arduino3,
        name: "Arduino Pro Micro",
        price: "S/28.00",
        type: "arduino"
    },
    {
        id: "4",
        image: Arduino4,
        name: "Arduino UNO Chip Original",
        price: "S/ 54.00",
        type: "arduino"
    },
    {
        id: "5",
        image: Arduino5,
        name: "Arduino TTL PL2303HX",
        price: "S/ 5.00",
        type: "arduino"
    },
    {
        id: "6",
        image: Esp1,
        name: "Wroom Socket",
        price: "S/ 35.00",
        type: "esp32"
    },
    {
        id: "7",
        image: Esp2,
        name: "Wroom Socket",
        price: "S/ 35.00",
        type: "esp32"
    },
    {
        id: "8",
        image: Esp3,
        name: "ESP 32 - Wrover(-B 16MB)",
        price: "S/ 30.00",
        type: "esp32"
    },
    {
        id: "9",
        image: Esp4,
        name: "ESP32 Wroom 38 - Pines",
        price: "S/ 34.00",
        type: "esp32"
    },
    {
        id: "10",
        image: Esp5,
        name: "Wroom - 32D(16MB)",
        price: "S/ 22.00",
        type: "esp32"
    },
    {
        id: "11",
        image: Esp6,
        name: "ESP32 Cam Wrover",
        price: "S/ 52.00",
        type: "esp32"
    },
    {
        id: "12",
        image: Pantalla1,
        name: "Pantalla Oled 0,91¨ Blue I2C(SSD1306)",
        price: "S/ 9.00",
        type: "pantallas"
    },
    {
        id: "13",
        image: Pantalla2,
        name: "Pantalla Oled 1,54'' Blue I2C(SSD1306-SSD1309)",
        price: "S/ 32.00",
        type: "pantallas"
    },
    {
        id: "14",
        image: Pantalla3,
        name: "Pantalla LCD 1602 Blue + I2C",
        price: "S/ 16.00",
        type: "pantallas"
    },
    {
        id: "15",
        image: Pantalla4,
        name: "Pantalla LCD 2004 Blue + I2C",
        price: "S/ 30.00",
        type: "pantallas"
    },
    {
        id: "16",
        image: Pantalla5,
        name: "Pantalla LCD TFT Táctil SPI(3,5¨ ILI9488) + Lápiz",
        price: "S/ 70.00",
        type: "pantallas"
    },
]

const Home = () => {

    const {cart, setCart} = useContext(StoreContext)
    const [searchValue, setSearchValue] = useState("")

    const addToCart = (product) => {
        const exists = cart.find(i => i.id === product.id)

        if (exists) {
            alert("Ya existe en el carrito")
            return;
        }

        setCart([...cart, product])
    }

    return (
        <>
            <section className="banner" style={{backgroundImage: `url(${Background})`}}>
                <div className="content-banner">
                    <h1>TULIO ELECTRÓNICA</h1>
                    <p>Venta de aparatos Electrónicos</p>
                </div>
            </section>
            <div className={"row w-100"}>
                <div className={"col-12 col-md-6 "}>
                    <input type="text" placeholder={"Buscar producto"} className={"form-control form-control-lg"}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
            </div>

            {
                searchValue !== "" ?
                    <section className="productos container" id="lista-1">
                        <div className="container">
                            <div className="row">
                                <h2>Resultados de la Busqueda</h2>
                                <ProductList
                                    products={products.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase()))}
                                    title={""}
                                    onAdd={addToCart}
                                ></ProductList>
                            </div>
                        </div>
                    </section>
                    : <>
                        <section className="productos container" id="lista-1">
                            <div className="container">
                                <div className="row">
                                    <h2>Nuestros Productos</h2>
                                    <ProductList
                                        products={products.filter(i => i.type === "arduino")}
                                        title={"Arduino-1"}
                                        onAdd={addToCart}
                                    ></ProductList>
                                </div>
                            </div>
                        </section>

                        <hr/>

                        <section className="productos container" id="lista-2">
                            <div className="container">
                                <div className="row">
                                    <ProductList
                                        products={products.filter(i => i.type === "esp32")}
                                        title={"ESP32"}
                                        onAdd={addToCart}
                                    ></ProductList>
                                </div>
                            </div>
                        </section>

                        <hr/>

                        <section className="productos container" id="lista-3">
                            <div className="container">
                                <div className="row">
                                    <ProductList
                                        products={products.filter(i => i.type === "pantallas")}
                                        title={"Pantallas"}
                                        onAdd={addToCart}
                                    ></ProductList>
                                </div>
                            </div>
                        </section>

                        <div className="container nosotros shadow" id="nosotros">
                            <h2>Nosotros</h2>
                            <p>Somos una empresa del rubro de la electrónica. Tenemos como visión ser una empresa líder en
                                la venta y
                                distribución de sistemas embebidos.
                                Tulio Electrónica EIRL fue fundada el 08 de setiembre del 2017 con Testimonio de
                                Constitución de la empresa N°
                                5679-2017 y con partida electrónica N° 11326572 del Registro de Personas Jurídicas de la
                                Oficina Registral de
                                Trujillo el día 25 de setiembre del 2017. La empresa esta legalmente constituida en la SUNAT
                                con RUC: 20602458815.
                                Vendemos y distribuimos módulos y dispositivos electrónicos con estándares de calidad.
                                Dictamos cursos virtuales
                                de capacitación orientado a sistemas embebidos, microcontroladores, FPGA y Robótica
                                Industrial.
                            </p>
                            <img className="img-nosotros" src={CC} alt="Imagen de Electronica"/>
                        </div>
                    </>
            }
        </>
    );
}

export default Home;