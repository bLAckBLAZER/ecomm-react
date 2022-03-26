import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { useUser } from "../../contexts/UserContext";
import { ProductCard } from "../../components/ProductCards/ProductCard";

export const Wishlist = () => {
  const { userState, userDispatch } = useUser();

  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex-1">
        <div className="container">
          <div className="h3 txt-center">My Wishlist</div>
          <hr />
          <div className="flex flex-wrap justify-center">
            {userState.userWishlist.length === 0 ? (
              <div className="width-100 mg-y-2 txt-center">
                No items added in wishlist...
              </div>
            ) : (
              userState.userWishlist.map((item) => (
                <ProductCard product={item} key={item._id} />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
