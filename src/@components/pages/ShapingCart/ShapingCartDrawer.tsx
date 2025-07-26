import Button from "@/@components/core/Button/Button";
import Drawer from "@/@components/core/Drawer/Drawer";
import Icon from "@/@components/core/Icon/Icon";

interface IShapingCartDrawer {
  isCartDrawer: boolean;
  setIsCartDrawer: (data: boolean) => void;
}

const ShapingCartDrawer: React.FC<IShapingCartDrawer> = ({
  isCartDrawer,
  setIsCartDrawer,
}) => {
  return (
    <div>
      <Drawer
        isOpen={isCartDrawer}
        onClose={() => setIsCartDrawer(false)}
        className="lg:ps-4 xs:ps-3 py-5"
      >
        <Drawer.Header className="pr-2 flex items-center justify-between border-b pb-3 border-gray-200">
          <h3 className="text-lg font-bold">Shaping Cart</h3>
          <Icon
            onClick={() => setIsCartDrawer(false)}
            className="text-gray-600 hover:text-gray-800 cursor-pointer me-5"
            name={"close"}
          />
        </Drawer.Header>

        <Drawer.Body className="mt-2 mb-5 overflow-y-scroll">
          <div>
            <div className="flex mx-auto ">
              <Icon
                name={"shopping_cart"}
                className="flex mx-auto text-gray-300 mt-6"
                size={70}
                variant="outlined"
              />
            </div>
            <p className="text-center mt-4">No products in the cart.</p>
            <div className="flex mx-auto justify-center items-center mt-4">
              <Button className="bg-black  !text-sm">RETURN TO SHOP</Button>
            </div>
          </div>
        </Drawer.Body>

        <Drawer.Footer className="flex items-end justify-end">
          <div></div>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

export default ShapingCartDrawer;
