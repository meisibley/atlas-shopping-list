import { Button } from "../components/ui/button";
import { clearCompleted } from "./shoppingListSlice";
import { useAppDispatch } from "./store";

export default function ClearButton() {
  const dispatch = useAppDispatch();
  const clear = () => {
    // alert("Clear Completed");
    dispatch(clearCompleted());
  };

  return (
    <div className="mt-4 flex justify-end">
      <Button onClick={clear} variant="ghost" className="text-muted-foreground">
        Clear Completed
      </Button>
    </div>
  );
}
