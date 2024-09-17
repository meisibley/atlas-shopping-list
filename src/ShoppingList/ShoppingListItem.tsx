import { Checkbox } from "../components/ui/checkbox";
import { toggleCompleted } from "./shoppingListSlice";
import { useAppDispatch } from "./store";

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
    // alert(`Toggle ${name} completion`);
    dispatch(toggleCompleted(id));
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
