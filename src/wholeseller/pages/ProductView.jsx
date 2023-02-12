import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductViewSlider from "../components/productview/ProductViewSlider";
import ReactPanzoom from "../components/ReactPanZoom";

export default function ProductView() {
    const imageRef = useRef();
    const [index, setIndex] = useState(0);

    const images = [
        {
            id: 1,
            image: "./ads.jpeg",
        },
        {
            id: 2,
            image: "./ads1.jpeg",
        },
        {
            id: 3,
            image: "./ads2.jpeg",
        }
    ];
    //* For Displaying images
    function selectimage(id) {
        let images = imageRef.current.children;
        setIndex(id);
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace(
                "border-gray-500",
                ""
            );
        }
        images[id].className = "w-20 object-contain h-20 rounded-md p-2 border m-2 border-gray-500";
    }

    return (
        <div className="mt-10 mb-4">
            <div className="grid grid-cols-3 gap-5">
                {/* Image Slider Section */}
                <div className="">
                    <div>
                        <ReactPanzoom src={images[index].image} alt="AC" className=" h-full" />


                        <div className="flex" ref={imageRef}>
                            {images.map((imge, index) => {
                                return imge !== null ? (
                                    <img
                                        src={imge.image}
                                        alt={index}
                                        key={index}
                                        className="w-20 h-20 object-contain rounded-md p-2 border m-2"
                                        onClick={() => selectimage(index)}
                                    />
                                ) : (
                                    <></>
                                );
                            })}
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 col-span-2">
                    {/* Product Info Section */}
                    <div className="col-span-2">
                        <h2 className="">
                            Agricultural greenhouses evaporate cooling pad / full brown 7090 wet curtain / chicken house pad and fan cooling system
                        </h2>
                        <hr className="my-3" />
                        <p className="">
                            $80.00 - $150.00 / cubic meter <span className="text-gray-600 text-sm">| 60 cubic meter/cubic meters(Min. order)</span>
                        </p>
                        <hr className="my-3" />
                    </div>
                    {/* Extra info Card */}
                    <div>
                        <p className="px-1 py-2 text-gray-800 text-sm">
                            For more detailed information including pricing, customization, and shipping
                        </p>
                        {/* Contact Supplier Button */}
                        <button className="block px-4 py-1 text-sm rounded-full shadow bg-gray-600 hover:bg-gray-500 text-white my-3" >
                            Contact Supplier
                        </button>

                        {/* Chat Now Button */}
                        <button className="block px-4 py-1 text-sm rounded-full border border-gray-500 shadow hover:bg-gray-500 hover:text-white mb-3" >
                            Chat Now
                        </button>

                        {/* Profile Card */}
                        <Link>
                            <div className="border mt-3 border-gray-50 shadow-md rounded-md hover:shadow-lg">
                                <div className="flex items-center justify-center">
                                    <img src="./mloog.png" alt="Company Logo" className="w-12 h-12 rounded-full shadow-sm" />
                                </div>
                                <h1 className="my-2 text-gray-700 text-sm text-center font-bold">
                                    Company Name PVT. LTD.
                                </h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Supplier Popular Product From Seller */}
            <div className="my-3">
                <p className="text-xl font-bold">
                    Supplier's popular products
                </p>
                <div className="my-5">
                    <ProductViewSlider />
                </div>
            </div>
            {/* Product Description  */}
            <div>
                <p className="text-2xl font-bold text-gray-800">
                    Product Description
                </p>
                <hr className="my-2" />
                <div className="text-gray-800 text-sm">
                    <p className="my-2">
                        Agricultural greenhouses evaporate cooling pad / full brown 7090 wet curtain / chicken house pad and fan cooling system Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur atque neque architecto quidem! Repellat repudiandae quo velit sunt maxime odit ipsam neque molestias impedit possimus, cumque enim laboriosam omnis voluptatibus?
                    </p>

                    <p className="my-2">
                        urtain / chicken house pad and fan cooling system Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur atque neque architecto quidem! Repellat repudiandae quo velit sunt maxime odit ipsam neque molestias impedit possimus, cumque enim laboriosam omnis voluptatibus?
                    </p>

                    <p className="my-2">
                        urtain / chicken house pad and fan cooling system Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur atque neque architecto quidem! Repellat repudiandae quo velit sunt maxime odit ipsam neque molestias impedit possimus, cumque enim laboriosam omnis voluptatibus?
                    </p>

                    <p className="my-2">
                        urtain / chicken house pad and fan cooling system Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur atque neque architecto quidem! Repellat repudiandae quo velit sunt maxime odit ipsam neque molestias impedit possimus, cumque enim laboriosam omnis voluptatibus?
                    </p>
                </div>

            </div>
            <hr className="my-2" />
            {/* Quatation Box or Form */}
            <div className="my-7">
                <p className="text-xl capitalize font-bold" >
                    send your inquiry directly to this supplier
                </p>
                {/* Quatation Form */}
                <div className="px-4 mt-6">
                    <div>
                        <label htmlFor="to" className="text-gray-600">To: </label>
                        <input type="text" name="to" id="to" value="Compaany Name" className="text-gray-800" readOnly />
                    </div>

                    <div className="my-2">
                        <label htmlFor="message" className=" text-gray-600">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500"></textarea>
                    </div>

                    <div className="my-2">
                        <label htmlFor="to" className="text-gray-600">Quantity: </label>
                        <input type="text" name="to" id="to" className=" border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500" />
                    </div>
                    <button className="bg-gray-500 text-white rounded-lg shadow-md px-6 py-2 hover:bg-gray-700">
                        Send
                    </button>
                </div>
            </div>

            <hr className="my-3" />

            {/* Similar Products */}
            <div div className="my-3" >
                <p className="text-xl font-bold">
                    Similar Products
                </p>
                <div className="my-5">
                    <ProductViewSlider />
                </div>
            </div >
        </div >
    )
}
