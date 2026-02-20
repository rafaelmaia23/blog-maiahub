import { Button } from "@/components/ui/button";

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  current,
  total,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 my-8">
      <Button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      >
        Anterior
      </Button>

      <span className="px-3 py-1 bg-muted text-muted-foreground rounded transition-colors">
        {current} / {total}
      </span>

      <Button
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
      >
        Próximo
      </Button>
    </div>
  );
}
