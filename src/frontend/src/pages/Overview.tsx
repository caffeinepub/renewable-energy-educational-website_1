import { Sun, Wind, Droplets, Flame, Leaf, Factory, TrendingUp, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AnimatedStats from '@/components/overview/AnimatedStats';
import FAQSection from '@/components/faq/FAQSection';
import FactBox from '@/components/shared/FactBox';

export default function Overview() {
  return (
    <div className="container py-12 space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-eco-blue/20 to-earth-brown/20" />
        <img
          src="/assets/generated/hero-renewable.dim_1920x800.png"
          alt="Renewable energy landscape with solar panels and wind turbines"
          className="w-full h-[400px] object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              The Future is Renewable
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover how clean energy is transforming our world and securing a sustainable future for generations to come
            </p>
          </div>
        </div>
      </section>

      {/* What is Renewable Energy */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What is Renewable Energy?</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. 
              Unlike fossil fuels, which take millions of years to form, renewable energy sources like sunlight, wind, rain, tides, 
              waves, and geothermal heat are naturally and continuously replenished.
            </p>
            <p className="text-lg leading-relaxed">
              These clean energy sources offer a sustainable alternative to traditional fossil fuels, helping to reduce greenhouse 
              gas emissions, combat climate change, and create a healthier planet for future generations.
            </p>
          </CardContent>
        </Card>
      </section>

      <FactBox
        fact="The sun provides more energy to Earth in one hour than humanity uses in an entire year! Harnessing just a fraction of this power could meet all our energy needs."
        icon={<Sun className="h-6 w-6" />}
      />

      {/* Why It Matters for Climate Change */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Renewable Energy Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-eco-green/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-12 w-12 text-eco-green mb-2" />
              <CardTitle>Climate Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Renewable energy produces little to no greenhouse gas emissions, making it essential in the fight against 
                climate change and global warming.
              </p>
            </CardContent>
          </Card>

          <Card className="border-eco-blue/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="h-12 w-12 text-eco-blue mb-2" />
              <CardTitle>Environmental Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Clean energy reduces air and water pollution, protects ecosystems, and preserves natural resources for 
                future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-earth-brown/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-earth-brown mb-2" />
              <CardTitle>Economic Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The renewable energy sector creates millions of jobs worldwide and drives innovation in technology and 
                infrastructure development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Animated Statistics */}
      <AnimatedStats />

      {/* Renewable vs Fossil Fuels Comparison */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Renewable vs Fossil Fuels</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Aspect</TableHead>
                    <TableHead>Renewable Energy</TableHead>
                    <TableHead>Fossil Fuels</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Availability</TableCell>
                    <TableCell className="text-eco-green">Infinite and naturally replenished</TableCell>
                    <TableCell className="text-destructive">Finite and depleting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Environmental Impact</TableCell>
                    <TableCell className="text-eco-green">Minimal emissions, clean</TableCell>
                    <TableCell className="text-destructive">High CO₂ emissions, pollution</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cost Trend</TableCell>
                    <TableCell className="text-eco-green">Decreasing rapidly</TableCell>
                    <TableCell className="text-destructive">Volatile and increasing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Energy Security</TableCell>
                    <TableCell className="text-eco-green">Locally available, independent</TableCell>
                    <TableCell className="text-destructive">Import dependent, geopolitical risks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Job Creation</TableCell>
                    <TableCell className="text-eco-green">Growing sector, millions of jobs</TableCell>
                    <TableCell className="text-destructive">Declining employment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Health Impact</TableCell>
                    <TableCell className="text-eco-green">Improved air quality, fewer health issues</TableCell>
                    <TableCell className="text-destructive">Air pollution, respiratory diseases</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Infographic */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Energy Sources Comparison</h2>
        <Card>
          <CardContent className="pt-6">
            <img
              src="/assets/generated/renewable-comparison.dim_1200x600.png"
              alt="Infographic comparing renewable energy sources (solar, wind, hydro, geothermal, biomass) with non-renewable sources (coal, oil, gas)"
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </section>

      {/* Benefits Section */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Benefits of Renewable Energy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-eco-green" />
                Environmental Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reduces greenhouse gas emissions and air pollution</li>
                <li>• Minimizes water usage compared to fossil fuel plants</li>
                <li>• Protects ecosystems and biodiversity</li>
                <li>• Reduces dependence on finite natural resources</li>
                <li>• Mitigates climate change impacts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-eco-blue" />
                Economic Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Creates millions of jobs in manufacturing and installation</li>
                <li>• Reduces energy costs over time</li>
                <li>• Stimulates local economic development</li>
                <li>• Decreases reliance on imported fuels</li>
                <li>• Drives technological innovation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-earth-brown" />
                Social Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Improves public health through cleaner air</li>
                <li>• Provides energy access to remote communities</li>
                <li>• Enhances energy security and independence</li>
                <li>• Creates educational and training opportunities</li>
                <li>• Promotes sustainable development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="h-6 w-6 text-eco-green" />
                Technological Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Drives innovation in energy storage solutions</li>
                <li>• Improves grid reliability and resilience</li>
                <li>• Enables distributed energy generation</li>
                <li>• Advances smart grid technologies</li>
                <li>• Reduces transmission losses</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <FactBox
        fact="Renewable energy jobs have grown by over 5 million globally in the past decade, with solar and wind sectors leading the way in employment opportunities."
        icon={<Users className="h-6 w-6" />}
      />

      {/* Global Perspective */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Global Perspective</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="h-6 w-6 text-eco-blue" />
                International Renewable Energy Agency (IRENA)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                IRENA is an intergovernmental organization supporting countries in their transition to a sustainable energy 
                future. With 168 member countries, IRENA promotes the widespread adoption and sustainable use of all forms 
                of renewable energy. The agency provides data, analysis, and policy advice to help nations achieve their 
                renewable energy goals and meet international climate commitments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="h-6 w-6 text-eco-green" />
                United Nations Sustainable Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The United Nations has made affordable and clean energy (SDG 7) one of its 17 Sustainable Development Goals. 
                The UN recognizes that expanding infrastructure and upgrading technology to provide clean energy in all 
                developing countries is crucial for achieving sustainable development. Through various programs and initiatives, 
                the UN works to ensure universal access to affordable, reliable, and modern energy services by 2030.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Future of Renewable Energy */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">The Future of Renewable Energy</h2>
        <Card className="bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-earth-brown/10">
          <CardContent className="pt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              The future of renewable energy is incredibly promising. As technology advances and costs continue to decline, 
              renewable energy is becoming the most economical choice for new power generation worldwide. Innovations in 
              energy storage, smart grids, and artificial intelligence are making renewable energy more reliable and efficient 
              than ever before.
            </p>
            <p className="text-lg leading-relaxed">
              By 2050, renewable energy could power 90% of the global electricity system. This transition will not only help 
              us combat climate change but also create millions of jobs, improve public health, and ensure energy security 
              for all nations. The renewable energy revolution is not just about technology—it's about building a sustainable, 
              equitable, and prosperous future for everyone.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Sun className="h-8 w-8 text-eco-green mx-auto mb-2" />
                <p className="font-semibold">Solar Power</p>
                <p className="text-sm text-muted-foreground">Leading growth</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Wind className="h-8 w-8 text-eco-blue mx-auto mb-2" />
                <p className="font-semibold">Wind Energy</p>
                <p className="text-sm text-muted-foreground">Expanding rapidly</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Droplets className="h-8 w-8 text-eco-blue mx-auto mb-2" />
                <p className="font-semibold">Hydropower</p>
                <p className="text-sm text-muted-foreground">Reliable baseload</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <Flame className="h-8 w-8 text-earth-brown mx-auto mb-2" />
                <p className="font-semibold">Geothermal</p>
                <p className="text-sm text-muted-foreground">Untapped potential</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
