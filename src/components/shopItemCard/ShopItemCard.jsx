import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../button/Button"
import { faCartPlus, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import placeHolderImg from "../../images/esdermaLogo.png"
import { Link } from "react-router-dom"

function ShopItemCard({ cardData, ...props } ) {
    return (
        <Link to={cardData?.link || ""} {...props}>
            <div className="h-110 w-65 rounded-xl border border-1 overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white flex flex-col">
                <img src={cardData?.imgsrc || placeHolderImg} alt={cardData?.title || "Item"} className="w-full h-[12.5rem] object-cover" onError={(e) => {
                    e.target.onerror = null; // prevent infinite fallback loop
                    e.target.src = placeHolderImg;
                }} />
                <div className="p-4 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
                        <h2 className="text-lg font-bold text-[#2f4c0c] truncate">{cardData?.title || "Untitled Item"}</h2>
                        <p className="text-sm text-gray-600 line-clamp-2">{cardData?.description || "No description available."}</p>
                        <p className="text-[#569d03] font-semibold text-md">₦{cardData?.price || "0.00"}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-24 h-5 overflow-hidden" aria-label={`Rating: ${Math.round((cardData?.rating.ratingPercent || 5 / 100) * 5)} out of 5 stars`}>
                            <div className="flex text-gray-300">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </div>
                            <div className="flex absolute top-0 left-0 text-[#d68043] overflow-hidden whitespace-nowrap" style={{ width: `${cardData?.rating.ratingPercent}%` }}>
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </div>

                        </div>
                        <div><div>
                            {cardData?.rating?.numberOfRates || 0} people rated
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button className="hover:bg-transparent bg-[#2f4c0c] border-[#2f4c0c] hover:border-[#569d03] border-2 rounded text-[#EEE5E9] font-bold transition duration-400 hover:scale-105 hover:text-[#569d03] px-4 py-2 relative flex h-10 w-[min-content] group items-center" value={
                            <div className="flex h-5 items-center gap-1">
                                <FontAwesomeIcon icon={faCartPlus} />
                                <span className="w-0 opacity-0 overflow-hidden transition-all duration-400 group-hover:w-22 group-hover:opacity-100 whitespace-nowrap text-sm">
                                    Add to Cart
                                </span>
                            </div>
                        } />
                        <Button className="hover:bg-black bg-[#2f4c0c] border-[#2f4c0c] hover:border-[#569d03] border-2 rounded text-[#EEE5E9] font-bold transition duration-400 hover:scale-105 hover:text-[#569d03] px-4 py-2 relative flex h-10 w-[min-content] group items-center" value={
                            <div className="flex h-5 items-center gap-1">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="w-0 opacity-0 overflow-hidden transition-all duration-400 group-hover:w-22 group-hover:opacity-100 whitespace-nowrap text-sm">
                                    Add to Saved
                                </span>
                            </div>
                        } />
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default ShopItemCard
