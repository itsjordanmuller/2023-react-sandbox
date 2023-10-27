import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center" style={{ marginTop: "2rem" }}>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
