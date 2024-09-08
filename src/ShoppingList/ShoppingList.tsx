import { AddItemForm } from "./AddItemForm";
import ClearButton from "./ClearButton";
import { ShoppingListItem } from "./ShoppingListItem";

const items = [
  { id: "1", name: "Item 1", completed: false },
  { id: "2", name: "Item 2", completed: true },
];

export function ShoppingList() {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Shopping List</h1>
        <AddItemForm />
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <ShoppingListItem
            key={index}
            id={item.id}
            completed={item.completed}
            name={item.name}
          />
        ))}
      </ul>
      <ClearButton />
    </div>
  );
}
