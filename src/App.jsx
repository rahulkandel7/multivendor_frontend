
import { Link } from "react-router-dom";
import ManufacutreCard from "./wholeseller/components/manufacture/ManufacutreCard";
import SlideShow from "./wholeseller/components/SlideShow";

function App() {
  //map of category id and category name
  const categories = [
    {
      "id": "1",
      "name": "Electronics"
    },
    {
      "id": "2",
      "name": "Fashion"
    },
    {
      "id": "3",
      "name": "Home & Kitchen"
    },
    {
      "id": "4",
      "name": "Sports & Outdoors"
    },
    {
      "id": "5",
      "name": "Toys & Baby"
    },
    {
      "id": "6",
      "name": "Grocery & Gourmet"
    },
    {
      "id": "8",
      "name": "Beauty & Personal Care"
    },
    {
      "id": "9",
      "name": "Automotive"
    },
    {
      "id": "1",
      "name": "Electronics"
    },
    {
      "id": "2",
      "name": "Fashion"
    },
    {
      "id": "3",
      "name": "Home & Kitchen"
    },
    {
      "id": "4",
      "name": "Sports & Outdoors"
    },
    {
      "id": "5",
      "name": "Toys & Baby"
    },
    {
      "id": "6",
      "name": "Grocery & Gourmet"
    },
    {
      "id": "8",
      "name": "Beauty & Personal Care"
    },
    {
      "id": "9",
      "name": "Automotive"
    },
  ];

  return (
    <>
      {/* Flex box for categories and slideshow */}
      <div className="flex gap-2 h-[20vh] md:h-[40vh] mt-5 md:mt-10 ">
        {/* Displaying Categories */}
        <div className="hidden md:flex flex-col-reverse gap-2 overflow-scroll w-[20vw]">
          {
            categories.map((category) => {
              return (
                <Link to="/category" key={category.id} className="text-gray-500 w-full  hover:text-gray-800 cursor-pointer">
                  {category.name}
                </Link>
              )
            })
          }
        </div>
        {/* Displaying Slideshow */}
        <div className="w-full rounded-md">
          <SlideShow />
        </div>
      </div>
      {/* First ADS */}
      <div className="w-full h-20 md:h-32 my-5 rounded-md shadow-md bg-red-300">

      </div>

      {/* Manufactures Listings */}
      {
        [...Array(10)].map((_) => {
          return <ManufacutreCard />
        })
      }
    </>
  )
}

export default App
