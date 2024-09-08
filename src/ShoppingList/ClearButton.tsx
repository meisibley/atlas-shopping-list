import { clearCompleted } from "@/slices/shoppingListSlice";
import { Button } from "../components/ui/button";
import { useAppDispatch } from "@/store";

export default function ClearButton() {
  const dispatch = useAppDispatch();
  const clear = () => {
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
