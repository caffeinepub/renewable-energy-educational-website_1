import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    question: 'What is the difference between renewable and non-renewable energy?',
    answer: 'Renewable energy comes from sources that naturally replenish themselves, such as sunlight, wind, and water. Non-renewable energy comes from finite sources like coal, oil, and natural gas that take millions of years to form and will eventually run out.',
  },
  {
    question: 'How efficient are solar panels?',
    answer: 'Modern solar panels typically convert 15-22% of sunlight into electricity, with some high-efficiency models reaching up to 25%. While this may seem low, solar panels are highly effective because sunlight is abundant and free. Efficiency continues to improve with advancing technology.',
  },
  {
    question: 'Can renewable energy power the entire world?',
    answer: 'Yes! Studies show that renewable energy sources have the technical potential to meet global energy demand many times over. The main challenges are building the necessary infrastructure, developing better energy storage solutions, and transitioning existing systems to renewable sources.',
  },
  {
    question: 'What happens when the sun is not shining or the wind is not blowing?',
    answer: 'This is addressed through energy storage systems (like batteries), grid interconnections that balance supply across regions, and a diverse mix of renewable sources. Hydropower and geothermal provide consistent baseload power, while solar and wind are complemented by storage technologies.',
  },
  {
    question: 'Are renewable energy sources expensive?',
    answer: 'Renewable energy costs have dropped dramatically. Solar and wind are now the cheapest sources of new electricity generation in most parts of the world. While initial installation costs can be significant, the long-term savings and environmental benefits make renewables highly cost-effective.',
  },
  {
    question: 'How do renewable energy sources help fight climate change?',
    answer: 'Renewable energy produces little to no greenhouse gas emissions during operation, unlike fossil fuels which release large amounts of CO₂. By replacing fossil fuels with renewables, we can significantly reduce global emissions and slow climate change.',
  },
  {
    question: 'What is the most promising renewable energy source?',
    answer: 'Each renewable source has unique advantages. Solar and wind are experiencing the fastest growth due to declining costs and scalability. However, a diverse energy mix including hydropower, geothermal, and biomass is ideal for ensuring reliable, sustainable energy supply.',
  },
  {
    question: 'Can I use renewable energy at home?',
    answer: 'Absolutely! Homeowners can install solar panels, small wind turbines, or geothermal heat pumps. Many utility companies also offer green energy programs where you can choose to power your home with renewable electricity from the grid.',
  },
];

export default function FAQSection() {
  return (
    <section className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
