import "./productList.css";
import Product from "../product/Product";
import Rock from "../../img/rock.jpg";
import Arnold from "../../img/arnold.jpg";
import Jason from "../../img/jason.jpg";
import Pitt from "../../img/pitt.jpg";
import Shop from "../../img/Shop.png";
import Menu from "../../img/menu.jpg";

const products = [
  {
    id: 1,
    img: Shop,
    link: "https://redline111111.github.io/shop-project/",
  },
  {
    id: 2,
    img: Menu,
    link: "",
  },
  {
    id: 3,
    img: Pitt,
    link: "",
  },
  {
    id: 4,
    img: Jason,
    link: "",
  },
  {
    id: 5,
    img: Arnold,
    link: "",
  },
  {
    id: 6,
    img: Rock,
    link: "",
  },
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
