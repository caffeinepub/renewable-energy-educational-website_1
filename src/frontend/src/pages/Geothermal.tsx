import { Flame, Zap, ThermometerSun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FactBox from '@/components/shared/FactBox';

export default function Geothermal() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Flame className="h-16 w-16 text-earth-brown mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Geothermal Energy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tapping into Earth's internal heat for clean, reliable, and constant renewable energy
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is Geothermal Energy?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Geothermal energy is heat derived from Earth's interior. The word "geothermal" comes from the Greek words 
              geo (earth) and therme (heat). This heat originates from the original formation of the planet, radioactive 
              decay of minerals, and solar energy absorbed at the surface. The temperature at Earth's core reaches over 
              5,000°C (9,000°F)—as hot as the sun's surface!
            </p>
            <p className="text-lg leading-relaxed">
              This immense heat continuously flows outward from Earth's core, heating underground reservoirs of water 
              and rock. We can tap into these reservoirs to generate electricity or provide direct heating. Unlike solar 
              and wind, geothermal energy is available 24/7, regardless of weather conditions, making it an excellent 
              baseload power source.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Geothermal Power Plants Work</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <img
              src="/assets/generated/geothermal-diagram.dim_800x600.png"
              alt="Cross-section diagram showing geothermal power plant with production well, injection well, underground reservoir, and power generation"
              className="w-full rounded-lg"
            />
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Geothermal power plants tap into underground reservoirs of hot water and steam, typically 1-3 kilometers 
                below the surface. Wells are drilled into these reservoirs, and the hot fluid is brought to the surface 
                where its heat energy is converted into electricity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-earth-brown">The Process</h3>
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>1. Extraction:</strong> Production wells bring hot water or steam from underground 
                      reservoirs to the surface.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>2. Power Generation:</strong> The hot fluid drives turbines connected to generators, 
                      producing electricity.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>3. Cooling:</strong> After passing through turbines, the fluid is cooled in condensers.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>4. Reinjection:</strong> Cooled water is pumped back into the reservoir through injection 
                      wells, maintaining pressure and sustainability.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-eco-green">Key Advantages</h3>
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Baseload Power:</strong> Operates 24/7 with 90%+ capacity factor, unlike intermittent 
                      solar and wind.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Small Footprint:</strong> Geothermal plants use less land per MW than any other renewable 
                      energy source.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Minimal Emissions:</strong> Produces 99% less CO₂ than fossil fuel plants of equivalent 
                      capacity.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Long Lifespan:</strong> Plants can operate for 30-50+ years with proper maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="Iceland generates 90% of its heating and hot water from geothermal energy and 25% of its electricity! The country sits on the Mid-Atlantic Ridge, giving it abundant geothermal resources."
        icon={<Flame className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Geothermal Power Plants</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-6 w-6 text-earth-brown" />
                Dry Steam Plants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                The oldest and simplest type, using steam directly from underground reservoirs. Steam is piped straight 
                from wells to turbines.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Characteristics:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Requires steam-dominated reservoirs (rare)</li>
                  <li>• Most efficient design</li>
                  <li>• Temperatures above 235°C (455°F)</li>
                  <li>• Example: The Geysers, California</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-eco-blue/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-eco-blue" />
                Flash Steam Plants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Most common type. High-pressure hot water from reservoirs is "flashed" into steam by reducing pressure 
                in a separator vessel.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Characteristics:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Uses water above 182°C (360°F)</li>
                  <li>• Can use single or double flash</li>
                  <li>• Most widely deployed technology</li>
                  <li>• Remaining water reinjected</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ThermometerSun className="h-6 w-6 text-eco-green" />
                Binary Cycle Plants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Uses moderate-temperature water to heat a secondary fluid with a lower boiling point. This fluid 
                vaporizes and drives turbines.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Characteristics:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Works with water as cool as 57°C (135°F)</li>
                  <li>• Closed-loop system, no emissions</li>
                  <li>• Enables use of lower-temperature resources</li>
                  <li>• Fastest-growing geothermal technology</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Direct Use Applications</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Beyond electricity generation, geothermal energy can be used directly for heating applications. This 
              "direct use" requires lower temperatures (50-150°C) and is highly efficient since no conversion to 
              electricity is needed.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <div className="text-3xl mb-2">🏠</div>
                <h4 className="font-semibold mb-1">District Heating</h4>
                <p className="text-xs text-muted-foreground">
                  Hot water piped to homes and buildings for space heating and hot water
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <div className="text-3xl mb-2">🌾</div>
                <h4 className="font-semibold mb-1">Greenhouse Heating</h4>
                <p className="text-xs text-muted-foreground">
                  Extends growing seasons and enables year-round cultivation in cold climates
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <div className="text-3xl mb-2">🐟</div>
                <h4 className="font-semibold mb-1">Aquaculture</h4>
                <p className="text-xs text-muted-foreground">
                  Maintains optimal water temperatures for fish farming and hatcheries
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <div className="text-3xl mb-2">🏭</div>
                <h4 className="font-semibold mb-1">Industrial Processes</h4>
                <p className="text-xs text-muted-foreground">
                  Food dehydration, lumber drying, and various manufacturing processes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="The world's largest geothermal power complex, The Geysers in California, has been producing electricity since 1960 and currently generates enough power for 725,000 homes!"
        icon={<Zap className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Global Geothermal Resources</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Geothermal resources are concentrated along tectonic plate boundaries, volcanic regions, and areas with 
              high heat flow. The "Ring of Fire" around the Pacific Ocean contains most of the world's geothermal 
              potential.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-earth-brown">Leading Countries</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">United States</span>
                    <span className="text-eco-green">3.7 GW</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Indonesia</span>
                    <span className="text-eco-green">2.3 GW</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Philippines</span>
                    <span className="text-eco-green">1.9 GW</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Turkey</span>
                    <span className="text-eco-green">1.7 GW</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">New Zealand</span>
                    <span className="text-eco-green">1.0 GW</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-eco-blue">Highest % of Electricity</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Kenya</span>
                    <span className="text-eco-green">45%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Iceland</span>
                    <span className="text-eco-green">25%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">El Salvador</span>
                    <span className="text-eco-green">22%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">New Zealand</span>
                    <span className="text-eco-green">18%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="font-semibold">Philippines</span>
                    <span className="text-eco-green">12%</span>
                  </div>
                </div>
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
                <li>• Reliable 24/7 baseload power (90%+ capacity factor)</li>
                <li>• Minimal land use—smallest footprint of any energy source</li>
                <li>• Near-zero emissions (99% less CO₂ than coal)</li>
                <li>• Not weather-dependent like solar and wind</li>
                <li>• Low operating costs after initial drilling</li>
                <li>• Long plant lifespan (30-50+ years)</li>
                <li>• Can provide both electricity and direct heating</li>
                <li>• Immune to fuel price volatility</li>
                <li>• Creates local jobs and economic development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Limited to geologically suitable locations</li>
                <li>• High upfront exploration and drilling costs</li>
                <li>• Risk of dry wells or insufficient temperatures</li>
                <li>• Potential for induced seismicity (minor earthquakes)</li>
                <li>• Some plants emit small amounts of gases (H₂S, CO₂)</li>
                <li>• Water usage for cooling in some plant types</li>
                <li>• Reservoir depletion if not properly managed</li>
                <li>• Long development timeline (5-10 years)</li>
                <li>• Requires specialized expertise and equipment</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Enhanced Geothermal Systems (EGS)</h2>
        <Card className="bg-gradient-to-br from-earth-brown/10 to-eco-green/10">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Enhanced Geothermal Systems (EGS) represent the future of geothermal energy. Unlike conventional 
              geothermal that requires naturally occurring hot water reservoirs, EGS creates artificial reservoirs by 
              fracturing hot dry rock and circulating water through it. This technology could unlock geothermal energy 
              in locations previously considered unsuitable.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl mb-2">🌍</div>
                <p className="font-semibold mb-1">Global Potential</p>
                <p className="text-sm text-muted-foreground">Could provide 100+ GW in the US alone</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl mb-2">🔬</div>
                <p className="font-semibold mb-1">Technology Status</p>
                <p className="text-sm text-muted-foreground">Pilot projects showing promise</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold mb-1">Cost Reduction</p>
                <p className="text-sm text-muted-foreground">Advancing drilling tech lowering costs</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              If EGS technology matures and costs decline, geothermal could become a major global energy source, 
              providing clean baseload power almost anywhere on Earth.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
