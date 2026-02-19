import { Leaf, Recycle, Factory } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import FactBox from '@/components/shared/FactBox';

export default function Biomass() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Leaf className="h-16 w-16 text-eco-green mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Biomass Energy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Converting organic materials into renewable energy through sustainable processes
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is Biomass Energy?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Biomass energy is renewable energy derived from organic materials—plant and animal matter. This includes 
              wood and wood waste, agricultural crops and residues, food waste, animal manure, and even algae. When 
              these materials are burned or converted through various processes, they release stored chemical energy 
              that can be used for heating, electricity generation, or transportation fuels.
            </p>
            <p className="text-lg leading-relaxed">
              Biomass is unique among renewable energy sources because it stores solar energy in chemical form. Plants 
              capture sunlight through photosynthesis and convert it into chemical energy stored in their tissues. When 
              we use biomass for energy, we're essentially using stored solar energy. Biomass has been humanity's primary 
              energy source for most of history and remains crucial in many parts of the world today.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Sources of Biomass</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-eco-green" />
                Wood & Forest Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Firewood and wood chips</li>
                <li>• Sawdust and wood shavings</li>
                <li>• Bark and forest residues</li>
                <li>• Wood pellets</li>
                <li>• Paper mill waste</li>
                <li>• Construction wood waste</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-earth-brown" />
                Agricultural Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Corn stalks and husks</li>
                <li>• Wheat straw and rice husks</li>
                <li>• Sugarcane bagasse</li>
                <li>• Energy crops (switchgrass, miscanthus)</li>
                <li>• Crop processing residues</li>
                <li>• Animal manure</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-eco-blue/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-6 w-6 text-eco-blue" />
                Waste Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Municipal solid waste</li>
                <li>• Food processing waste</li>
                <li>• Sewage sludge</li>
                <li>• Landfill gas</li>
                <li>• Industrial organic waste</li>
                <li>• Yard and garden waste</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <FactBox
        fact="Biomass provides about 10% of global primary energy supply, making it the largest renewable energy source worldwide. In developing countries, it can account for up to 90% of energy consumption!"
        icon={<Leaf className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Biomass is Converted into Energy</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-green">Thermochemical Conversion</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Direct Combustion</h4>
                    <p className="text-sm text-muted-foreground">
                      Burning biomass to produce heat for space heating, water heating, or steam for electricity 
                      generation. Most common and oldest method.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Gasification</h4>
                    <p className="text-sm text-muted-foreground">
                      Heating biomass with limited oxygen to produce syngas (synthetic gas), which can be burned for 
                      electricity or converted into fuels.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Pyrolysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Heating biomass without oxygen to produce bio-oil, biochar, and gases. Bio-oil can be refined 
                      into transportation fuels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-blue">Biochemical Conversion</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Anaerobic Digestion</h4>
                    <p className="text-sm text-muted-foreground">
                      Microorganisms break down organic matter without oxygen, producing biogas (methane and CO₂) 
                      that can be used for heating or electricity.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Fermentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Microorganisms convert sugars and starches into ethanol, which can be used as a transportation 
                      fuel or fuel additive.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Transesterification</h4>
                    <p className="text-sm text-muted-foreground">
                      Chemical process that converts vegetable oils and animal fats into biodiesel for use in diesel 
                      engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Carbon Cycle</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <img
              src="/assets/generated/carbon-cycle-diagram.dim_800x600.png"
              alt="Carbon cycle diagram showing CO2 flow between plants, atmosphere, and biomass energy production"
              className="w-full rounded-lg"
            />
            <p className="text-lg leading-relaxed">
              Biomass energy is considered carbon-neutral when managed sustainably because it operates within the 
              natural carbon cycle. Plants absorb CO₂ from the atmosphere during photosynthesis, storing carbon in 
              their tissues. When biomass is burned or decomposed, it releases this CO₂ back into the atmosphere.
            </p>
            <p className="text-lg leading-relaxed">
              If new plants are grown to replace those used for energy, they absorb an equivalent amount of CO₂, 
              creating a closed carbon cycle. This is fundamentally different from fossil fuels, which release carbon 
              that has been locked underground for millions of years, adding new CO₂ to the atmosphere and contributing 
              to climate change.
            </p>
            <div className="grid md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4 bg-eco-green/10 rounded-lg">
                <div className="text-3xl mb-2">🌱</div>
                <p className="font-semibold">1. Growth</p>
                <p className="text-sm text-muted-foreground">Plants absorb CO₂</p>
              </div>
              <div className="text-center p-4 bg-eco-green/10 rounded-lg">
                <div className="text-3xl mb-2">🪓</div>
                <p className="font-semibold">2. Harvest</p>
                <p className="text-sm text-muted-foreground">Biomass collected</p>
              </div>
              <div className="text-center p-4 bg-eco-green/10 rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-semibold">3. Energy</p>
                <p className="text-sm text-muted-foreground">CO₂ released</p>
              </div>
              <div className="text-center p-4 bg-eco-green/10 rounded-lg">
                <div className="text-3xl mb-2">🔄</div>
                <p className="font-semibold">4. Regrowth</p>
                <p className="text-sm text-muted-foreground">Cycle repeats</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Advantages and Concerns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="text-eco-green">Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Renewable and sustainable when properly managed</li>
                <li>• Carbon-neutral in closed-loop systems</li>
                <li>• Reduces waste by using agricultural and forestry residues</li>
                <li>• Creates rural jobs and economic opportunities</li>
                <li>• Provides energy security and independence</li>
                <li>• Can be stored and used on demand (unlike solar/wind)</li>
                <li>• Existing infrastructure can often be adapted</li>
                <li>• Reduces methane emissions from landfills</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Concerns</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deforestation risk if not sustainably managed</li>
                <li>• Air pollution from combustion (particulates, NOx)</li>
                <li>• Lower energy density than fossil fuels</li>
                <li>• Competition with food production for land</li>
                <li>• Transportation costs can be high</li>
                <li>• Water usage for some energy crops</li>
                <li>• Biodiversity impacts from monoculture plantations</li>
                <li>• Not truly carbon-neutral if fossil fuels used in production</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <FactBox
        fact="Sweden generates 32% of its energy from biomass—the highest percentage in the EU! The country has successfully transitioned from oil heating to biomass district heating systems in most cities."
        icon={<Factory className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Comparison with Fossil Fuels</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Characteristic</TableHead>
                    <TableHead>Biomass Energy</TableHead>
                    <TableHead>Fossil Fuels</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Renewability</TableCell>
                    <TableCell className="text-eco-green">Renewable with sustainable management</TableCell>
                    <TableCell className="text-destructive">Non-renewable, finite resources</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Carbon Emissions</TableCell>
                    <TableCell className="text-eco-green">Carbon-neutral in closed loops</TableCell>
                    <TableCell className="text-destructive">High net CO₂ emissions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Energy Density</TableCell>
                    <TableCell className="text-earth-brown">Lower (10-20 MJ/kg)</TableCell>
                    <TableCell className="text-eco-green">Higher (30-50 MJ/kg)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Availability</TableCell>
                    <TableCell className="text-eco-green">Widely distributed, local production</TableCell>
                    <TableCell className="text-earth-brown">Concentrated in specific regions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Air Quality</TableCell>
                    <TableCell className="text-earth-brown">Some particulate emissions</TableCell>
                    <TableCell className="text-destructive">High SOx, NOx, particulates</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Economic Impact</TableCell>
                    <TableCell className="text-eco-green">Creates local jobs, rural development</TableCell>
                    <TableCell className="text-earth-brown">Centralized, fewer local benefits</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Storage</TableCell>
                    <TableCell className="text-eco-green">Easy to store and transport</TableCell>
                    <TableCell className="text-eco-green">Easy to store and transport</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
