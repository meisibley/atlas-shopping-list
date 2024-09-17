import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useAppDispatch } from "./store";
import { addItem } from "./shoppingListSlice";

export function AddItemForm() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (newItem.trim() !== "") {
      // alert(`Add: ${newItem} to the list`);
      dispatch(addItem(newItem));
      setNewItem("");
    }
  };

  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="Add a new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        className="flex-1 mr-2 bg-muted text-foreground rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Button
        onClick={handleSubmit}
        className="bg-primary text-primary-foreground rounded-md px-3 py-2"
      >
        Add
      </Button>
    </div>
  );
}
