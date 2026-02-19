import { Sun, Zap, Battery } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import FactBox from '@/components/shared/FactBox';
import PVDiagram from '@/components/solar/PVDiagram';

export default function SolarCells() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Zap className="h-16 w-16 text-eco-green mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Solar Cells & Photovoltaics</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Converting sunlight directly into electricity through the photoelectric effect
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What Are Solar Cells?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Solar cells, also called photovoltaic (PV) cells, are semiconductor devices that convert sunlight directly 
              into electricity through the photoelectric effect. When photons from sunlight strike the solar cell, they 
              knock electrons loose from atoms in the semiconductor material, creating an electric current that can be 
              captured and used to power electrical devices.
            </p>
            <p className="text-lg leading-relaxed">
              Multiple solar cells are connected together to form solar panels, and multiple panels form solar arrays. 
              This modular design allows PV systems to scale from small applications like calculators and watches to 
              massive solar farms generating hundreds of megawatts of electricity.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Photoelectric Effect</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <PVDiagram />
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                The photoelectric effect, discovered by Heinrich Hertz in 1887 and explained by Albert Einstein in 1905 
                (earning him the Nobel Prize), is the fundamental principle behind solar cells. When light hits a material, 
                it can transfer energy to electrons, causing them to be ejected from the material's surface.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-eco-green">How It Works in Solar Cells</h3>
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>1. Photon Absorption:</strong> Sunlight photons strike the solar cell's semiconductor surface.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>2. Electron Excitation:</strong> Photons with sufficient energy knock electrons loose from 
                      atoms, creating electron-hole pairs.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>3. Charge Separation:</strong> The cell's internal electric field separates electrons and 
                      holes, preventing them from recombining.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>4. Current Flow:</strong> Electrons flow through an external circuit, creating usable 
                      electricity, before returning to fill the holes.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-eco-blue">Key Requirements</h3>
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Semiconductor Material:</strong> Usually silicon, which has the right properties to absorb 
                      light and conduct electricity.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>P-N Junction:</strong> Two layers of silicon doped with different impurities create an 
                      internal electric field.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Electrical Contacts:</strong> Metal contacts on top and bottom collect and conduct the 
                      generated electricity.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Anti-Reflective Coating:</strong> Reduces light reflection to maximize photon absorption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="The efficiency of solar cells has improved dramatically—from 6% in 1954 to over 26% for commercial silicon cells today, with laboratory cells exceeding 47% efficiency!"
        icon={<Zap className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Silicon: The Semiconductor Material</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Silicon is the second most abundant element in Earth's crust and the primary material used in solar cells. 
              Pure silicon is a poor conductor, but when "doped" with small amounts of other elements, it becomes an 
              excellent semiconductor—able to conduct electricity under certain conditions while blocking it under others.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-eco-green/10 rounded-lg space-y-2">
                <h3 className="text-lg font-semibold text-eco-green">N-Type Silicon (Negative)</h3>
                <p className="text-sm text-muted-foreground">
                  Silicon doped with phosphorus (which has 5 valence electrons). The extra electron is free to move, 
                  creating negative charge carriers. This layer has an excess of electrons.
                </p>
              </div>
              <div className="p-4 bg-eco-blue/10 rounded-lg space-y-2">
                <h3 className="text-lg font-semibold text-eco-blue">P-Type Silicon (Positive)</h3>
                <p className="text-sm text-muted-foreground">
                  Silicon doped with boron (which has 3 valence electrons). The missing electron creates a "hole" that 
                  can accept electrons, creating positive charge carriers. This layer has an excess of holes.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              When these two types of silicon are joined, they form a P-N junction. Electrons from the N-type side 
              diffuse to the P-type side, and holes move in the opposite direction, creating an electric field at the 
              junction. This field is what separates the electron-hole pairs created by sunlight, generating electricity.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Solar Cells</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Type</TableHead>
                    <TableHead>Efficiency</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Characteristics</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Monocrystalline Silicon</TableCell>
                    <TableCell className="text-eco-green">20-26%</TableCell>
                    <TableCell className="text-earth-brown">High</TableCell>
                    <TableCell>Most efficient, uniform black appearance, long lifespan (25-30 years)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Polycrystalline Silicon</TableCell>
                    <TableCell className="text-eco-blue">15-20%</TableCell>
                    <TableCell className="text-eco-green">Medium</TableCell>
                    <TableCell>Good efficiency, blue speckled appearance, slightly shorter lifespan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Thin-Film (CdTe, CIGS)</TableCell>
                    <TableCell className="text-earth-brown">11-13%</TableCell>
                    <TableCell className="text-eco-green">Low</TableCell>
                    <TableCell>Flexible, lightweight, performs better in low light and high temperatures</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Perovskite</TableCell>
                    <TableCell className="text-eco-green">25%+</TableCell>
                    <TableCell className="text-eco-blue">Low (emerging)</TableCell>
                    <TableCell>Rapidly improving efficiency, low-cost production, durability challenges</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Multi-Junction</TableCell>
                    <TableCell className="text-eco-green">40-47%</TableCell>
                    <TableCell className="text-destructive">Very High</TableCell>
                    <TableCell>Multiple layers capture different wavelengths, used in space and concentrators</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="Solar PV is now the cheapest source of electricity in history! In sunny regions, new solar farms can generate electricity for less than 2 cents per kilowatt-hour."
        icon={<Sun className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">System Components</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Sun className="h-12 w-12 text-eco-green mb-2" />
              <CardTitle>Solar Panels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Multiple solar cells connected in series and parallel, encapsulated in weatherproof materials. Typical 
                residential panels produce 300-400 watts and last 25-30 years.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-eco-blue mb-2" />
              <CardTitle>Inverters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Convert DC electricity from panels into AC electricity used by homes and the grid. Modern inverters also 
                optimize power output and provide system monitoring.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Battery className="h-12 w-12 text-earth-brown mb-2" />
              <CardTitle>Battery Storage (Optional)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stores excess solar energy for use at night or during outages. Lithium-ion batteries are most common, 
                with capacities ranging from 5-20 kWh for homes.
              </p>
            </CardContent>
          </Card>
        </div>
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
                <li>• Dramatically reduces or eliminates electricity bills</li>
                <li>• Increases property value by 3-4%</li>
                <li>• 25-30 year lifespan with minimal maintenance</li>
                <li>• Eligible for federal tax credits and local incentives</li>
                <li>• Reduces carbon footprint significantly</li>
                <li>• Provides energy independence</li>
                <li>• Silent operation with no moving parts</li>
                <li>• Can sell excess power back to the grid (net metering)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Initial cost ($15,000-$25,000 typical residential system)</li>
                <li>• Requires adequate roof space with good sun exposure</li>
                <li>• Production varies with weather and season</li>
                <li>• May require roof repairs before installation</li>
                <li>• Inverters typically need replacement after 10-15 years</li>
                <li>• Local regulations and HOA restrictions may apply</li>
                <li>• Battery storage adds significant cost</li>
                <li>• Shading from trees or buildings reduces efficiency</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
