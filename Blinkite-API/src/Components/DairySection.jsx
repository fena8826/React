
import img1 from "../assets/image.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

const products = [
  {
    name: "Amul Gold Full Cream Milk",
    weight: "500 ml",
    price: 35,
    image: img1,
  },
  {
    name: "Amul Taaza Toned Milk",
    weight: "500 ml",
    price: 28,
    image: img2,
  },
  {
    name: "Amul Cheese Cubes",
    weight: "200 g",
    price: 127,
    oldPrice: 135,
    discount: "5% OFF",
    image: img3,
  },
  {
    name: "Amul Salted Butter",
    weight: "100 g",
    price: 62,
    image: img4,
  },
  {
    name: "Amul Masti Cup Curd",
    weight: "200 g",
    price: 24,
    image: img5,
  },
  {
    name: "Amul Masti Cup Cup Curd",
    weight: "400 g",
    price: 47,
    image: img6,
  },
  {
    name: "Extra Product Example",
    weight: "250 g",
    price: 55,
    image: img7,
  },
];

export default function DairySection() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Dairy, Bread & Eggs</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 flex flex-col items-center shadow-sm bg-white relative hover:shadow-md transition"
          >
            {product.discount && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="h-28 object-contain"
            />
            <h3 className="text-sm font-medium text-center mt-2">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs">{product.weight}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-semibold">₹{product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>
            <button className="mt-2 border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-500 hover:text-white transition">
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
