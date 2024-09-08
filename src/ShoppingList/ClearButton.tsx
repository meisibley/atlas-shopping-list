import { Button } from "../components/ui/button";

export default function ClearButton() {
  const clear = () => {
    alert("Clear Completed");
  };

  return (
    <div className="mt-4 flex justify-end">
      <Button onClick={clear} variant="ghost" className="text-muted-foreground">
        Clear Completed
      </Button>
    </div>
  );
}
