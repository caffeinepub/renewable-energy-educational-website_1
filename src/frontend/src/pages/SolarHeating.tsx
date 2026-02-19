import { Sun, Home, Building2, ThermometerSun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FactBox from '@/components/shared/FactBox';

export default function SolarHeating() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Sun className="h-16 w-16 text-eco-green mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Solar Heating Systems</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Harnessing the sun's thermal energy to heat water and spaces efficiently and sustainably
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What Are Solar Heating Systems?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Solar heating systems, also known as solar thermal systems, capture the sun's heat energy and use it to warm 
              water or air for residential and commercial applications. Unlike photovoltaic (PV) systems that generate 
              electricity, solar thermal systems directly convert sunlight into heat, making them highly efficient for 
              heating purposes.
            </p>
            <p className="text-lg leading-relaxed">
              These systems can provide hot water for domestic use, space heating for buildings, and even heat for 
              industrial processes. Solar thermal technology is one of the most cost-effective renewable energy solutions, 
              with typical payback periods of 5-10 years and system lifespans exceeding 25 years.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Solar Thermal Heating Works</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <img
              src="/assets/generated/solar-heating-diagram.dim_800x600.png"
              alt="Diagram showing solar thermal system with collectors, heat transfer fluid, storage tank, and distribution"
              className="w-full rounded-lg"
            />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-eco-green">The Heat Transfer Process</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">1. Solar Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      Solar collectors (flat-plate or evacuated tubes) absorb sunlight and convert it into heat. The 
                      collector surface is designed to maximize absorption while minimizing heat loss.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">2. Heat Transfer</h4>
                    <p className="text-sm text-muted-foreground">
                      A heat transfer fluid (water or antifreeze mixture) circulates through the collectors, absorbing 
                      the captured heat. The heated fluid is then pumped to a storage tank or heat exchanger.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">3. Heat Storage</h4>
                    <p className="text-sm text-muted-foreground">
                      The hot fluid transfers its heat to water in an insulated storage tank. This stored hot water can 
                      be used immediately or saved for later use, even during cloudy periods or at night.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">4. Distribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Hot water is distributed to taps, showers, radiators, or underfloor heating systems. A backup 
                      heating system ensures hot water availability during extended cloudy periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="A typical solar water heating system can provide 50-80% of a household's hot water needs, reducing energy bills by hundreds of dollars annually while preventing tons of CO₂ emissions!"
        icon={<Sun className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Solar Heating Systems</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-eco-green" />
                Active Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Active systems use pumps and controls to circulate heat transfer fluids through the collectors and 
                into storage tanks. They are more efficient but require electricity to operate.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Direct Circulation Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Pumps circulate household water through collectors and into the home. Best for climates where 
                  freezing is rare.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Indirect Circulation Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Pumps circulate a non-freezing heat transfer fluid through collectors and a heat exchanger. Ideal 
                  for freezing climates.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-eco-blue/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ThermometerSun className="h-6 w-6 text-eco-blue" />
                Passive Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Passive systems rely on natural convection and gravity to circulate water. They are simpler, more 
                reliable, and require no electricity, but are generally less efficient.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Integral Collector-Storage Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Combines collector and storage in one unit. Water is heated in the collector and stored there 
                  until needed. Simple but less efficient.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Thermosiphon Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Hot water rises naturally from collectors to a storage tank mounted above. Reliable and efficient 
                  for sunny climates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Applications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Home className="h-12 w-12 text-eco-green mb-2" />
              <CardTitle>Residential Hot Water</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The most common application, providing hot water for showers, baths, dishwashing, and laundry. Can 
                meet 50-80% of household hot water needs in sunny climates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-12 w-12 text-eco-blue mb-2" />
              <CardTitle>Space Heating</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Solar thermal systems can heat buildings through radiant floor systems, baseboard radiators, or 
                forced-air systems, significantly reducing heating costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ThermometerSun className="h-12 w-12 text-earth-brown mb-2" />
              <CardTitle>Pool & Spa Heating</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Solar pool heaters extend swimming seasons by months and can pay for themselves in 2-4 years through 
                reduced conventional heating costs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FactBox
        fact="China leads the world in solar thermal capacity with over 70% of global installations, heating water for hundreds of millions of people daily!"
        icon={<Building2 className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Efficiency Comparison</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-eco-green/10 rounded-lg">
                  <div className="text-4xl font-bold text-eco-green mb-2">60-80%</div>
                  <p className="font-semibold mb-2">Solar Thermal</p>
                  <p className="text-sm text-muted-foreground">
                    Converts 60-80% of sunlight directly into usable heat energy
                  </p>
                </div>
                <div className="text-center p-6 bg-eco-blue/10 rounded-lg">
                  <div className="text-4xl font-bold text-eco-blue mb-2">15-22%</div>
                  <p className="font-semibold mb-2">Solar PV</p>
                  <p className="text-sm text-muted-foreground">
                    Converts 15-22% of sunlight into electricity (which can then heat water at ~95% efficiency)
                  </p>
                </div>
                <div className="text-center p-6 bg-earth-brown/10 rounded-lg">
                  <div className="text-4xl font-bold text-earth-brown mb-2">80-95%</div>
                  <p className="font-semibold mb-2">Gas/Electric</p>
                  <p className="text-sm text-muted-foreground">
                    Efficient at converting fuel to heat, but fuel costs and emissions are high
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Solar thermal systems are 3-4 times more efficient than solar PV for heating applications, making them 
                the most cost-effective solar technology for hot water and space heating.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Benefits and Considerations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="text-eco-green">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reduces energy bills by 50-80% for water heating</li>
                <li>• Low maintenance with 20-30 year lifespan</li>
                <li>• Reduces carbon footprint significantly</li>
                <li>• Increases property value</li>
                <li>• Works in most climates with proper design</li>
                <li>• Eligible for tax credits and rebates in many areas</li>
                <li>• Provides energy independence</li>
                <li>• Silent operation with no moving parts (passive systems)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Initial installation cost ($3,000-$7,000 typical)</li>
                <li>• Requires adequate roof space with good sun exposure</li>
                <li>• Backup heating system needed for cloudy periods</li>
                <li>• Performance varies with climate and season</li>
                <li>• May require building permits</li>
                <li>• Antifreeze systems need periodic fluid replacement</li>
                <li>• Professional installation recommended</li>
                <li>• Roof must be structurally sound to support collectors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
