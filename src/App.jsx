
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
      <div className="flex gap-2 h-[40vh] mt-10 ">
        {/* Displaying Categories */}
        <div className="flex flex-col-reverse gap-2 overflow-scroll w-[20vw]">
          {
            categories.map((category) => {
              return (
                <a key={category.id} className="text-gray-500 w-full  hover:text-gray-800 cursor-pointer">
                  {category.name}
                </a>
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
      <div className="w-full h-32 my-5 rounded-md shadow-md bg-red-300">

      </div>

      {/* Manufactures Listings */}
      <ManufacutreCard />
      <ManufacutreCard />
      <ManufacutreCard />
      <ManufacutreCard />
      <ManufacutreCard />
      <ManufacutreCard />
      <ManufacutreCard />
    </>
  )
}

export default App
