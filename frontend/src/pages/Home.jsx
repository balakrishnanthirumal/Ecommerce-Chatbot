import ProductModal from "./products/ProductModal";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="h-auto">
        <section className="bg-gray-800 w-[85%] lg:h-[500px] mt-[50px] mx-auto rounded-lg lg:flex lg:items-center lg:gap-[100px] justify-center md:flex md:h-[300px]:md:gap-6 sm:[30px] ">
          <div className="flex flex-col  sm: w-[50%] sm: mx-auto sm:items-center">
            <div className="text-black font-extrabold text-[3rem] bg-white w-[200px]">
              Let'S
            </div>
            <div className="text-white font-extrabold text-[3rem] w-[70px]">
              Explore
            </div>
            <div className="text-black font-extrabold text-[3rem] bg-[#E6C744] w-[250px] rotate-[-3deg]">
              Unique
            </div>

            <div className="text-white font-extrabold text-[3rem]">Items.</div>
          </div>

          <img
            src="src/assets/images/sectionsImages/home-img.png"
            className="bg-contain bg-no-repeat lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px]  rounded-lg"
            alt=""
          />
        </section>

        <main className="bg-[#EBD96B]  h-auto mx-auto mt-[80px] rounded-lg flex items-center lg:gap-[50px]  flex-wrap gap-[50px] justify-center py-[10px]">
          <img
            src="src/assets/logos/Rectangle 36.png"
            className="bg-transparent"
            alt=""
          />
          <img
            src="src/assets/logos/Rectangle 38.png"
            className="bg-transparent"
            alt=""
          />
          <img
            src="src/assets/logos/Rectangle 41.png"
            className="bg-transparent"
            alt=""
          />
          <img
            src="src/assets/logos/Rectangle 42.png"
            className="bg-transparent"
            alt=""
          />
          <img
            src="src/assets/logos/Rectangle 43.png"
            className="bg-transparent"
            alt=""
          />
          <img
            src="src/assets/logos/Rectangle 44.png"
            className="bg-transparent"
            alt=""
          />
          <img src="src/assets/logos/Rectangle 45.png" className="" alt="" />
        </main>

        <aside className="mt-[100px] lg:ml-[100px] ">
          <div className=" text-[#E6C744] font-extrabold text-[50px]">
            <p className="md:text-[30px] lg:text-[50px] text-[30px] text-center lg:text-left md:text-left">
              Featured Products
            </p>
          </div>
          <div className="flex flex-wrap gap-[50px] mt-[50px] ml-[100px]">
            <ProductModal />
            <ProductModal />
            <ProductModal />
          </div>
        </aside>

        <div className="text-[50px] font-semibold text-white ml-[100px] mt-[50px]">
          New Arrivals
        </div>

        <article className="flex flex-col lg:flex-row rounded-lg gap-[30px] mt-[50px] ml-[100px] lg:ml-[0]">
          <div className="flex-1 rounded-lg">
            <img
              src="src/assets/images/sectionsImages/Rectangle 20.png"
              className="w-full h-[600px] object-cover"
              alt=""
            />
            <div className="flex items-center justify-between bg-[#020817] p-[20px]">
              <div>
                <p className="text-[30px] font-semibold">Sports & Outdoors</p>
                <p className="text-[20px]">Explore now</p>
              </div>
              <div>
                <FaArrowRightLong color="white" size={30} />
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg">
            <img
              src="src/assets/images/sectionsImages/Rectangle 22.png"
              className="w-full h-[600px] object-cover"
              alt=""
            />
            <div className="flex items-center justify-between bg-[#020817] p-[20px]">
              <div>
                <p className="text-[30px] font-semibold">Sports & Outdoors</p>
                <p className="text-[20px]">Explore now</p>
              </div>
              <div>
                <FaArrowRightLong color="white" size={30} />
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg w-full">
            <img
              src="src/assets/images/sectionsImages/Rectangle 21.png"
              className="w-full lg:h-[600px] object-cover"
              alt=""
            />
            <div className="flex items-center justify-between bg-[#020817] p-[20px]">
              <div>
                <p className="text-[30px] font-semibold">Sports & Outdoors</p>
                <p className="text-[20px]">Explore now</p>
              </div>
              <div>
                <FaArrowRightLong color="white" size={30} />
              </div>
            </div>
          </div>
        </article>

        <div className="bg-[#E0C340] w-full h-[500px] mt-[30px] flex items-center  gap-[100px] rounded-lg">
          <img
            src="src/assets/images/sectionsImages/Rectangle 50.png"
            alt=""
            className="oj-object-cover hidden  lg:h-full lg:block rounded-lg"
          />

          <div className="flex flex-col  justify-center w-[80%] mx-auto rounded-lg md:items-center md:align-middle sm:align-middle">
            <p className="text-[50px] bg-white w-[250px] h-[80px] text-black text-center font-extrabold">
              PAYDAY
            </p>
            <p className="text-[50px] text-black  font-extrabold ">SALE NOW</p>
            <p className="text-[20px] w-[70%] text-black ">
              Spend minimal Rs:100 get 30% off voucher code for your next
              purchase
            </p>

            <button className="bg-black text-white w-[100px] font-semibold text-[15px] p-3 rounded-lg mt-[20px]">
              Shop Now
            </button>
          </div>
        </div>

        <footer className="flex flex-col items-start justify-start  lg:flex-row lg:justify-evenly  md:flex-col  md:justify-evenly py-6 pl-[3rem]">
          <div className="text-white text-[50px] mb-4 lg:mb-0">UNITY</div>
          <div className="lg:ml-8 mb-4 lg:mb-0">
            <div className="text-white text-[20px] mb-[10px]">Company</div>
            <p className="text-[15px] text-gray-300 mb-[5px]">New Arrivals</p>
            <p className="text-[15px] text-gray-300 mb-[5px]">Discount</p>
            <p className="text-[15px] text-gray-300 mb-[5px]">Mobile App</p>
            <p className="text-[15px] text-gray-300 mb-[5px]">
              Young's Favourite
            </p>
          </div>
          <div className="lg:ml-8 mb-4 lg:mb-0">
            <div className="text-white text-[20px] mb-[10px]">Quick Links</div>
            <p className="text-[15px] text-gray-300 mb-[5px]">Products</p>
            <p className="text-[15px] text-gray-300 mb-[5px]">Brand</p>
            <p className="text-[15px] text-gray-300 mb-[5px]">Community</p>
          </div>
          <div className="lg:ml-8">
            <div className="text-white text-[20px] mb-[10px]">Legal</div>
            <p className="text-[15px] text-gray-300 mb-[5px]">
              Terms & Conditions
            </p>
            <p className="text-[15px] text-gray-300 mb-[5px]">Privacy Policy</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;
