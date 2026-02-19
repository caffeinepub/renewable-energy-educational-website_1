import { Fuel, Truck, Leaf, Factory } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FactBox from '@/components/shared/FactBox';
import VideoEmbed from '@/components/shared/VideoEmbed';

export default function Biofuels() {
  return (
    <div className="container py-12 space-y-16">
      <section className="text-center space-y-4">
        <Fuel className="h-16 w-16 text-eco-green mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Biofuels</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Renewable liquid and gaseous fuels derived from organic materials for sustainable transportation
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What Are Biofuels?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Biofuels are liquid or gaseous fuels produced from renewable biological sources, primarily used for 
              transportation. Unlike fossil fuels derived from ancient organic matter, biofuels are made from recently 
              living organisms or their metabolic byproducts. They can be used in conventional engines with little or 
              no modification, making them a practical alternative to petroleum-based fuels.
            </p>
            <p className="text-lg leading-relaxed">
              Biofuels offer a pathway to reduce greenhouse gas emissions from the transportation sector, which accounts 
              for about 25% of global CO₂ emissions. When produced sustainably, biofuels can significantly lower the 
              carbon footprint of vehicles while utilizing existing fuel distribution infrastructure and vehicle technology.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Types of Biofuels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-6 w-6 text-eco-green" />
                Ethanol
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Alcohol-based fuel produced by fermenting sugars and starches from crops like corn, sugarcane, and wheat.
              </p>
              <h4 className="font-semibold">Characteristics:</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Used in gasoline engines</li>
                <li>• Common blends: E10 (10%), E85 (85%)</li>
                <li>• Higher octane than gasoline</li>
                <li>• Cleaner burning than petroleum</li>
                <li>• Most widely used biofuel globally</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-eco-blue/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-6 w-6 text-eco-blue" />
                Biodiesel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Diesel substitute made from vegetable oils, animal fats, or recycled cooking grease through transesterification.
              </p>
              <h4 className="font-semibold">Characteristics:</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Used in diesel engines</li>
                <li>• Common blends: B5 (5%), B20 (20%)</li>
                <li>• Better lubricity than petroleum diesel</li>
                <li>• Biodegradable and non-toxic</li>
                <li>• Reduces particulate emissions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-6 w-6 text-earth-brown" />
                Biogas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Methane-rich gas produced by anaerobic digestion of organic waste, manure, or energy crops.
              </p>
              <h4 className="font-semibold">Characteristics:</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Used in natural gas vehicles</li>
                <li>• Can be upgraded to biomethane</li>
                <li>• Reduces methane from landfills</li>
                <li>• Suitable for electricity generation</li>
                <li>• Digestate is valuable fertilizer</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <FactBox
        fact="Brazil is the world's second-largest ethanol producer and has been using ethanol fuel since the 1970s. Today, over 90% of new cars sold in Brazil are flex-fuel vehicles that can run on any ethanol-gasoline blend!"
        icon={<Leaf className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Biofuels Are Produced</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <img
              src="/assets/generated/biofuel-flowchart.dim_800x600.png"
              alt="Flowchart of biofuel production process from raw materials to end product with arrows showing conversion steps"
              className="w-full rounded-lg"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-green">Ethanol Production</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-green/20 text-eco-green font-semibold">
                      1
                    </span>
                    <span>
                      <strong>Feedstock Preparation:</strong> Corn, sugarcane, or other crops are harvested and processed 
                      to extract sugars or convert starches to sugars.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-green/20 text-eco-green font-semibold">
                      2
                    </span>
                    <span>
                      <strong>Fermentation:</strong> Yeast is added to convert sugars into ethanol and CO₂ through 
                      anaerobic fermentation (similar to beer brewing).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-green/20 text-eco-green font-semibold">
                      3
                    </span>
                    <span>
                      <strong>Distillation:</strong> The fermented mixture is heated to separate ethanol from water and 
                      other components, producing 95% pure ethanol.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-green/20 text-eco-green font-semibold">
                      4
                    </span>
                    <span>
                      <strong>Dehydration:</strong> Remaining water is removed to produce anhydrous (water-free) ethanol 
                      suitable for fuel use.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-eco-blue">Biodiesel Production</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-blue/20 text-eco-blue font-semibold">
                      1
                    </span>
                    <span>
                      <strong>Feedstock Collection:</strong> Vegetable oils (soybean, canola, palm), animal fats, or 
                      used cooking oil are collected and filtered.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-blue/20 text-eco-blue font-semibold">
                      2
                    </span>
                    <span>
                      <strong>Transesterification:</strong> Oil reacts with alcohol (methanol or ethanol) and a catalyst 
                      to produce biodiesel and glycerin.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-blue/20 text-eco-blue font-semibold">
                      3
                    </span>
                    <span>
                      <strong>Separation:</strong> Biodiesel and glycerin are separated. Glycerin is a valuable byproduct 
                      used in cosmetics and pharmaceuticals.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-eco-blue/20 text-eco-blue font-semibold">
                      4
                    </span>
                    <span>
                      <strong>Purification:</strong> Biodiesel is washed and dried to remove impurities, meeting fuel 
                      quality standards.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Use in Transportation</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Truck className="h-12 w-12 text-eco-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Light Vehicles</h4>
                <p className="text-sm text-muted-foreground">
                  Cars and light trucks use ethanol blends (E10, E15, E85) in gasoline engines or biodiesel blends in 
                  diesel engines.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Truck className="h-12 w-12 text-eco-blue mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Heavy Trucks</h4>
                <p className="text-sm text-muted-foreground">
                  Commercial trucks and buses increasingly use B20 biodiesel or renewable diesel for reduced emissions.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Factory className="h-12 w-12 text-earth-brown mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Aviation</h4>
                <p className="text-sm text-muted-foreground">
                  Sustainable aviation fuels (SAF) made from biofuels are being tested and deployed to reduce aviation 
                  emissions.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Fuel className="h-12 w-12 text-eco-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Marine</h4>
                <p className="text-sm text-muted-foreground">
                  Ships and boats can use biodiesel blends, with research ongoing for larger-scale marine biofuel 
                  applications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="The United States is the world's largest ethanol producer, generating over 15 billion gallons annually—enough to fuel 20 million vehicles! Most U.S. gasoline contains 10% ethanol (E10)."
        icon={<Fuel className="h-6 w-6" />}
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Pros and Cons of Biofuels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-eco-green/50">
            <CardHeader>
              <CardTitle className="text-eco-green">Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reduces greenhouse gas emissions (20-80% vs fossil fuels)</li>
                <li>• Renewable and domestically produced</li>
                <li>• Compatible with existing vehicles and infrastructure</li>
                <li>• Improves energy security and reduces oil imports</li>
                <li>• Creates agricultural and rural jobs</li>
                <li>• Biodegradable and less toxic than petroleum</li>
                <li>• Can utilize waste materials and byproducts</li>
                <li>• Reduces air pollutants in urban areas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50">
            <CardHeader>
              <CardTitle className="text-earth-brown">Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Food vs fuel debate (land use competition)</li>
                <li>• Lower energy density than petroleum fuels</li>
                <li>• Water-intensive crop production</li>
                <li>• Potential for indirect land use change emissions</li>
                <li>• Higher production costs for some biofuels</li>
                <li>• Monoculture impacts on biodiversity</li>
                <li>• Fertilizer and pesticide use in feedstock production</li>
                <li>• Infrastructure needs for higher blend levels</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Brazil: Ethanol Pioneer</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>Brazil</strong> is a global leader in biofuel production and use, particularly ethanol from 
              sugarcane. The country launched its ethanol program (Proálcool) in 1975 in response to the oil crisis, 
              making it one of the world's first large-scale biofuel initiatives.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Brazil produces over 8 billion gallons of ethanol annually, second only to the United States. 
              Brazilian sugarcane ethanol is highly efficient, with an energy balance of 8:1 (eight units of energy 
              produced for every unit consumed in production) and reduces greenhouse gas emissions by up to 90% compared 
              to gasoline.
            </p>
            <p className="text-lg leading-relaxed">
              The introduction of flex-fuel vehicles in 2003 revolutionized Brazil's automotive market. These vehicles 
              can run on any blend of gasoline and ethanol, giving consumers flexibility based on price and availability. 
              Today, flex-fuel vehicles account for over 90% of new car sales in Brazil, demonstrating the viability of 
              biofuels at a national scale.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-3xl font-bold text-eco-green mb-2">90%+</p>
                <p className="text-sm text-muted-foreground">New cars are flex-fuel</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-3xl font-bold text-eco-green mb-2">50%</p>
                <p className="text-sm text-muted-foreground">Of fuel is ethanol</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-3xl font-bold text-eco-green mb-2">8:1</p>
                <p className="text-sm text-muted-foreground">Energy balance ratio</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Future of Biofuels</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Advanced biofuels (second and third generation) are being developed to address the limitations of 
              first-generation biofuels. These include cellulosic ethanol from agricultural waste, algae-based fuels, 
              and synthetic biofuels that don't compete with food production.
            </p>
            <p className="text-lg leading-relaxed">
              Sustainable aviation fuel (SAF) represents a major growth area, with airlines committing to significant 
              SAF usage by 2030. Drop-in biofuels that are chemically identical to petroleum fuels are also being 
              developed, allowing 100% replacement without any engine modifications.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Learn More</h2>
        <VideoEmbed
          videoId="dQw4w9WgXcQ"
          title="Biofuels: Powering Sustainable Transportation"
          platform="youtube"
        />
      </section>
    </div>
  );
}
