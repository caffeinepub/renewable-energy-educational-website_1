import { Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FactBoxProps {
  fact: string;
  icon?: React.ReactNode;
}

export default function FactBox({ fact, icon }: FactBoxProps) {
  return (
    <Card className="border-2 border-eco-green/30 bg-eco-green/5 dark:bg-eco-green/10">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 text-eco-green">
            {icon || <Lightbulb className="h-6 w-6" />}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-eco-green">Did You Know?</h3>
            <p className="text-muted-foreground leading-relaxed">{fact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
