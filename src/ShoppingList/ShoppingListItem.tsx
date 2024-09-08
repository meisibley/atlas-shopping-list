import { useAppDispatch } from "../store";
import { Checkbox } from "../components/ui/checkbox";
import { toggleItem } from "../slices/shoppingListSlice";

type ShoppingListItemProps = {
  id: string;
  completed: boolean;
  name: string;
};

export function ShoppingListItem({
  id,
  completed,
  name,
}: ShoppingListItemProps) {
  const dispatch = useAppDispatch();
  const toggleItemCompletion = () => {
    dispatch(toggleItem(id));
  };
  return (
    <li
      className={`flex items-center bg-muted rounded-md px-3 py-2 ${
        completed ? "opacity-50" : ""
      }`}
    >
      <Checkbox
        checked={completed}
        onCheckedChange={() => toggleItemCompletion()}
        className="mr-2"
      />
      <span className={`flex-1 ${completed ? "line-through" : ""}`}>
        {name}
      </span>
    </li>
  );
}
