import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Zap className="h-8 w-8" />,
    value: 29,
    suffix: '%',
    label: 'Global Renewable Energy Share',
    color: 'text-eco-green',
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: 12,
    suffix: 'M+',
    label: 'Jobs in Renewable Energy',
    color: 'text-eco-blue',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: 85,
    suffix: '%',
    label: 'Cost Reduction Since 2010',
    color: 'text-earth-brown',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    value: 500,
    suffix: 'B+',
    label: 'Annual Investment (USD)',
    color: 'text-eco-green',
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Renewable Energy by the Numbers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center space-y-3">
              <div className={`${stat.color} flex justify-center`}>{stat.icon}</div>
              {isVisible ? (
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="text-4xl md:text-5xl font-bold">0{stat.suffix}</span>
              )}
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
