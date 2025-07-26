import Drawer from "@/@components/core/Drawer/Drawer";
import Icon from "@/@components/core/Icon/Icon";

interface IShapingCartDrawer {
  isCartDrawer: boolean;
  setIsCartDrawer: (data: boolean) => void;
}

const MenuDrawer: React.FC<IShapingCartDrawer> = ({
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
          <div className="relative w-full">
            <div>
              <input
                type="text"
                placeholder="Search for products"
                className="p-2 w-full pr-10 border-none   focus:ring-0  focus:outline-none text-xl"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-1">
                <Icon name={"search"} variant="outlined" />
              </span>
            </div>
          </div>
        </Drawer.Header>

        <Drawer.Body className="mt-2 mb-5 overflow-y-scroll">
          <div>
            <h1>Menu Items Coming soon</h1>
          </div>
        </Drawer.Body>

        <Drawer.Footer className="flex items-end justify-end">
          <div></div>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
