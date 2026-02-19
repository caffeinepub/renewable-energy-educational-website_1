import { Wind, Zap, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FactBox from '@/components/shared/FactBox';
import AnimatedTurbine from '@/components/wind/AnimatedTurbine';

export default function WindPower() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Wind className="h-16 w-16 text-eco-blue mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Wind Power</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Capturing the kinetic energy of wind to generate clean, renewable electricity
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is Wind Power?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Wind power harnesses the kinetic energy of moving air to generate electricity. Wind turbines convert the 
              wind's kinetic energy into mechanical power through rotating blades, which then drive a generator to produce 
              electricity. Wind is created by the uneven heating of Earth's surface by the sun, making it an indirect form 
              of solar energy and a truly renewable resource.
            </p>
            <p className="text-lg leading-relaxed">
              Modern wind turbines are marvels of engineering, with the largest models standing over 260 meters tall 
              (taller than the Statue of Liberty) and featuring blades longer than a football field. A single large 
              turbine can generate enough electricity to power 1,500 homes. Wind power is now one of the fastest-growing 
              renewable energy sources worldwide.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Wind Turbines Work</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="flex justify-center">
              <AnimatedTurbine />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-blue">The Energy Conversion Process</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Wind Capture</h4>
                    <p className="text-sm text-muted-foreground">
                      Wind flows over the aerodynamically designed blades, creating lift (similar to airplane wings) 
                      and causing them to rotate.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Mechanical Rotation</h4>
                    <p className="text-sm text-muted-foreground">
                      The rotating blades turn a low-speed shaft connected to a gearbox, which increases the rotation 
                      speed to levels suitable for electricity generation.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Electricity Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      The high-speed shaft drives a generator that converts the mechanical energy into electrical energy 
                      through electromagnetic induction.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">4. Power Transmission</h4>
                    <p className="text-sm text-muted-foreground">
                      Electricity travels down the tower through cables, is converted to the appropriate voltage by 
                      transformers, and sent to the power grid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-green">Key Components</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Rotor Blades</h4>
                    <p className="text-xs text-muted-foreground">
                      Aerodynamic blades (typically 3) made of fiberglass or carbon fiber, 40-80 meters long on large 
                      turbines
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Nacelle</h4>
                    <p className="text-xs text-muted-foreground">
                      Housing atop the tower containing the gearbox, generator, and control systems
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Tower</h4>
                    <p className="text-xs text-muted-foreground">
                      Steel or concrete structure 80-120 meters tall, supporting the nacelle and rotor
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Gearbox</h4>
                    <p className="text-xs text-muted-foreground">
                      Increases rotation speed from ~15 RPM (blades) to ~1,500 RPM (generator)
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Generator</h4>
                    <p className="text-xs text-muted-foreground">
                      Converts mechanical rotation into electrical energy, typically 2-15 MW capacity
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Yaw System</h4>
                    <p className="text-xs text-muted-foreground">
                      Rotates the nacelle to keep the rotor facing into the wind for maximum efficiency
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-sm">Pitch Control</h4>
                    <p className="text-xs text-muted-foreground">
                      Adjusts blade angle to optimize performance and protect turbine in high winds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="Wind power capacity has grown 75-fold in the past two decades! From just 17 GW globally in 2000 to over 1,000 GW today, enough to power 300 million homes."
        icon={<Wind className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Wind Turbines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-blue/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-6 w-6 text-eco-blue" />
                Onshore Wind Turbines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Located on land, typically in rural areas, mountain passes, or coastal regions with consistent winds. 
                These are the most common and cost-effective wind installations.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Characteristics:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Capacity: 2-5 MW per turbine (typical)</li>
                  <li>• Height: 80-120 meters</li>
                  <li>• Blade length: 40-60 meters</li>
                  <li>• Easier and cheaper to install and maintain</li>
                  <li>• Lower wind speeds than offshore</li>
                  <li>• May face local opposition (visual, noise)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-eco-green" />
                Offshore Wind Turbines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Installed in bodies of water, typically on continental shelves. Offshore winds are stronger and more 
                consistent than onshore, allowing for larger turbines and higher capacity factors.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Characteristics:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Capacity: 8-15 MW per turbine (and growing)</li>
                  <li>• Height: 100-260+ meters</li>
                  <li>• Blade length: 80-120 meters</li>
                  <li>• Higher and more consistent wind speeds</li>
                  <li>• Higher installation and maintenance costs</li>
                  <li>• Less visual and noise impact on communities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Offshore Wind: The Future of Wind Power</h2>
        <Card className="bg-gradient-to-br from-eco-blue/10 to-eco-green/10">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Offshore wind is experiencing explosive growth, with capacity expected to increase 15-fold by 2040. The 
              world's largest offshore wind farms now exceed 1,000 MW capacity—equivalent to a nuclear power plant. 
              Floating offshore wind technology is opening up deep-water locations with even stronger winds.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl font-bold text-eco-blue mb-2">40-50%</div>
                <p className="font-semibold mb-1">Capacity Factor</p>
                <p className="text-sm text-muted-foreground">vs 25-35% onshore</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl font-bold text-eco-green mb-2">15 MW</div>
                <p className="font-semibold mb-1">Largest Turbines</p>
                <p className="text-sm text-muted-foreground">Powers 20,000 homes</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl font-bold text-earth-brown mb-2">235 GW</div>
                <p className="font-semibold mb-1">Global Capacity</p>
                <p className="text-sm text-muted-foreground">Growing rapidly</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="Denmark generates over 50% of its electricity from wind power—the highest percentage in the world! On particularly windy days, wind can provide over 100% of the country's electricity needs."
        icon={<MapPin className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Best Locations for Wind Power</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <img
              src="/assets/generated/wind-regions-map.dim_1000x600.png"
              alt="World map showing wind power potential with highlighted regions including Great Plains, North Sea, Patagonia, and coastal areas"
              className="w-full rounded-lg"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-eco-blue">Ideal Wind Conditions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Average wind speeds above 6-7 m/s (13-16 mph)</li>
                  <li>• Consistent winds throughout the year</li>
                  <li>• Open terrain with minimal obstructions</li>
                  <li>• Coastal areas and offshore locations</li>
                  <li>• Mountain passes and ridgelines</li>
                  <li>• Great Plains and prairie regions</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-eco-green">Top Wind Regions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• North Sea (Europe's offshore wind hub)</li>
                  <li>• Great Plains (USA's "wind belt")</li>
                  <li>• Patagonia (Argentina/Chile)</li>
                  <li>• Northern China and Mongolia</li>
                  <li>• Australian coastlines</li>
                  <li>• North African coasts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Benefits and Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="text-eco-green">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Zero emissions during operation</li>
                <li>• Fuel is free and inexhaustible</li>
                <li>• Low operating costs after installation</li>
                <li>• Land beneath turbines can still be used (farming, grazing)</li>
                <li>• Creates jobs in manufacturing, installation, and maintenance</li>
                <li>• Quick to build (6-12 months per turbine)</li>
                <li>• Provides rural income through land leases</li>
                <li>• Costs have dropped 70% in the past decade</li>
                <li>• Scalable from single turbines to massive wind farms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Intermittent power generation (wind variability)</li>
                <li>• Requires energy storage or backup power</li>
                <li>• Visual impact on landscapes</li>
                <li>• Noise concerns for nearby residents</li>
                <li>• Bird and bat mortality (though improving with design)</li>
                <li>• Requires transmission infrastructure to remote locations</li>
                <li>• High upfront capital costs</li>
                <li>• Weather-dependent maintenance windows</li>
                <li>• Local opposition in some communities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
