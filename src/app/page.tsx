import Banner from "@/@components/pages/Home/Banner";
import BestOffers from "@/@components/pages/Home/BestOffers";
import CustomerReview from "@/@components/pages/Home/CustomerReview";
import NewProduct from "@/@components/pages/Home/NewProduct";
import PopularProduct from "@/@components/pages/Home/PopularProduct";

export default function Home() {
  return (
    <div>
      <Banner />
      <BestOffers />
      <PopularProduct />
      <CustomerReview />
      <NewProduct />
    </div>
  );
}
