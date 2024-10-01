import React from 'react'

const HeadlineCards = () => {
  return <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        {/*overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun's Out,BOGO's Out{" "}
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white  text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className=" max-h-[160px] w-full object-cover md:max-h-[200px] rounded-xl" src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="fg" />
      </div>
      <div className="rounded-xl relative">
        {/*overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants </p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white  text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className=" max-h-[160px] w-full object-cover md:max-h-[200px] rounded-xl" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="fg" />
      </div>
      <div className="rounded-xl relative">
        {/*overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We Delivered Desserts{" "}
          </p>
          <p className="px-2">Tasty</p>
          <button className="border-white bg-white  text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img className=" max-h-[160px] w-full object-cover md:max-h-[200px] rounded-xl" src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="fg" />
      </div>
    </div>;
}

export default HeadlineCards
