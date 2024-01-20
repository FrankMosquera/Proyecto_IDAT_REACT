import PropTypes from "prop-types";
const ProductList = ({title, products, onAdd}) => {
    return (
        <>
            <p className="tittle">{title}</p>
            {
                products.map((product, index) => {
                    return (
                        <div className="row-img col-lg-4 col-md-6 col-sm-12" key={index}>
                            <img src={product.image} alt="imagen arduino"/>
                            <p className="nom-pro">{product.name}</p>
                            <p className="precio">{product.price}</p>
                            <button className="agregar-carrito btn-3" onClick={() => onAdd(product)}>Añadir</button>
                        </div>
                    )
                })
            }
        </>
    );
}

ProductList.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
    onAdd: PropTypes.func
}

export default ProductList;