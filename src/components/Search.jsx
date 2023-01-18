import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Luxury Included Vacations</h2>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            ducimus assumenda quo. Incidunt commodi officia repellendus!
            Assumenda nisi voluptas laboriosam, facilis quam, obcaecati
            dignissimos veniam reprehenderit consequatur minima molestiae,
            maiores incidunt non nobis aut modi expedita exercitationem tempore
            distinctio culpa pariatur corrupti sapiente dolorem. Architecto
            ratione quis pariatur alias maiores dolorem possimus officiis,
            libero, dolores eaque deserunt suscipit dolore totam cupiditate
            tenetur ducimus beatae non eveniet. Ea maxime sunt qui minus vitae,
            laudantium nostrum sit? Sit veniam magni eligendi. Consequuntur
            quidem exercitationem possimus libero quis odio odit architecto
            cumque expedita atque, facere asperiores dolorum tenetur distinctio
            numquam dolores suscipit blanditiis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">All-Inclusive Company for 20 Years</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">All-Inclusive Company for 20 Years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border text-center">
          <p className="pt-2">Get an additional 10% off</p>
          <p className="py-4">12 Hours Left</p>
          <p className="bg-gray-800 text-gray-200 py-2">Book now and Save!</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="">Destination</label>
            <select className="border rounded-md p-2" name="" id="">
              <option value="">Grand Antigua</option>
              <option value="">Key West</option>
              <option value="">Maldives</option>
              <option value="">Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
