import KitchenFoodList from "./KitchenFoodList";

export default function KitchenFoodsPage() {
  return (
    <div>
      {" "}
      <div className="h1_akm pad_akm">My Food List</div>
      <div className="p-0 m-0 divider"></div>
      <KitchenFoodList
        kitchenId={1}
        loginToken="324sdf1182acbf84cc9d0ea3e69feb97a77f66223f43652477e4c33128"
      />
    </div>
  );
}
