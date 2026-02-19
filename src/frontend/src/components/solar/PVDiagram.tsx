import { Card, CardContent } from '@/components/ui/card';

export default function PVDiagram() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative bg-gradient-to-br from-eco-green/10 to-eco-blue/10 rounded-lg p-8 overflow-hidden">
          <div className="space-y-8">
            {/* Sunlight */}
            <div className="flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-transparent animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="font-semibold text-lg">Sunlight (Photons)</p>
              </div>
            </div>

            {/* Solar Cell */}
            <div className="relative">
              <div className="bg-gradient-to-b from-blue-500/20 to-blue-700/20 border-2 border-blue-500 rounded-lg p-6">
                <div className="text-center space-y-4">
                  <p className="font-semibold text-lg">Solar Cell (Silicon Semiconductor)</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-500/10 p-3 rounded">
                      <p className="font-medium">N-Type Layer</p>
                      <p className="text-xs text-muted-foreground">Excess electrons</p>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded">
                      <p className="font-medium">P-Type Layer</p>
                      <p className="text-xs text-muted-foreground">Electron holes</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-eco-green rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.5s' }}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium">Electrons flowing →</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Electric Current */}
            <div className="flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green animate-pulse" />
                </div>
                <p className="font-semibold text-lg">Electric Current (DC)</p>
                <p className="text-sm text-muted-foreground">Ready to power your home!</p>
              </div>
            </div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-eco-green rounded-full animate-ping"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
