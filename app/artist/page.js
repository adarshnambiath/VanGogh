import React from 'react'
import Card from '@/components/Card'
import a from "../../public/img/bedroominarles.jpeg";
import b from "../../public/img/sunflowers.jpeg";
import c from "../../public/img/bandage.jpeg";
import d from "../../public/img/remy.jpeg";
const y=[{image1:a,title1:"Arles",
content1:"Ill from drink and suffering from smoker's cough, in February 1888 Van Gogh sought refuge in Arles. Arles appeared exotic. In a letter, he described it as a foreign country: 'The Zouaves, the brothels, the adorable little Arlésienne going to her First Communion, the priest in his surplice, who looks like a dangerous rhinoceros, the people drinking absinthe, all seem to me creatures from another world.' The portrayals of Arles are informed by his Dutch upbringing; the patchworks of fields and avenues are flat and lacking perspective, but excel in their use of colour. On 7 May, Van Gogh moved from the Hôtel Carrel to the Café de la Gare, having befriended the proprietors, Joseph and Marie Ginoux. The Yellow House had to be furnished before he could fully move in, but he was able to use it as a studio. He wanted a gallery to display his work and started a series of paintings that eventually included Van Gogh's Chair (1888), Bedroom in Arles (1888), The Night Café (1888), Café Terrace at Night (September 1888), Starry Night Over the Rhone (1888), and Still Life: Vase with Twelve Sunflowers (1888), all intended for the decoration for the Yellow House. When he visited Saintes-Maries-de-la-Mer, he painted boats on the sea and the village."
,
x:true},
{image1:b,title1:"Gauguin's visit",
content1:"When Gauguin agreed to visit Arles in 1888, Van Gogh hoped for friendship and to realize his idea of an artists' collective. Van Gogh prepared for Gauguin's arrival by painting four versions of Sunflowers in one week. 'In the hope of living in a studio of our own with Gauguin,' he wrote in a letter to Theo, 'I'd like to do a decoration for the studio. Nothing but large Sunflowers.' In preparation for Gauguin's visit, Van Gogh bought two beds on advice from the station's postal supervisor Joseph Roulin, whose portrait he painted. On 17 September, he spent his first night in the still sparsely furnished Yellow House. After much pleading from Van Gogh, Gauguin arrived in Arles on 23 October and, in November, the two painted together. Gauguin depicted Van Gogh in his The Painter of Sunflowers; Van Gogh painted pictures from memory, following Gauguin's suggestion. Among these 'imaginative' paintings is Memory of the Garden at Etten. Their first joint outdoor venture was at the Alyscamps, when they produced the pendants Les Alyscamps. The single painting Gauguin completed during his visit was his portrait of Van Gogh. Their relationship began to deteriorate; Van Gogh admired Gauguin and wanted to be treated as his equal, but Gauguin was arrogant and domineering, which frustrated Van Gogh."
,
x:true},
{image1:c,title1:"Hospital in Arles",
content1:"The exact sequence that led to the mutilation of van Gogh's ear is not known. Gauguin said, fifteen years later, that the night followed several instances of physically threatening behaviour. It seems likely that Vincent realised that Gauguin was planning to leave. Gauguin recalled that Van Gogh followed him after he left for a walk and 'rushed towards me, an open razor in his hand.' After an altercation on the evening of 23 December 1888, Van Gogh returned to his room where he seemingly heard voices and either wholly or in part severed his left ear with a razor causing severe bleeding. Van Gogh had no recollection of the event, suggesting that he may have suffered an acute mental breakdown.[160] The hospital diagnosis was 'acute mania with generalised delirium.' Van Gogh recovered and returned to the Yellow House on 7 January 1889. He spent the following month between hospital and home, suffering from hallucinations and delusions of poisoning. Two months later, he left Arles and voluntarily entered an asylum in Saint-Rémy-de-Provence. Around this time, he wrote, 'Sometimes moods of indescribable anguish, sometimes moments when the veil of time and fatality of circumstances seemed to be torn apart for an instant.'"
,
x:true},
{image1:d,title1:"Saint-Rémy",
content1:"Van Gogh entered the Saint-Paul-de-Mausole asylum on 8 May 1889. Saint-Paul was a former monastery in Saint-Rémy, located less than 30 kilometres from Arles. The clinic and its garden became the main subjects of his paintings. He made several studies of the hospital's interiors, such as Vestibule of the Asylum and Saint-Rémy (September 1889), and its gardens, such as Lilacs (May 1889). Some of his works from this time are characterised by swirls, such as The Starry Night. He was allowed short supervised walks, during which time he painted cypresses and olive trees, including Valley with Ploughman Seen from Above, Olive Trees with the Alpilles in the Background 1889, Cypresses 1889, Cornfield with Cypresses (1889), Country road in Provence by Night (1890). In September 1889, he produced two further versions of Bedroom in Arles and The Gardener. Between February and April 1890, Van Gogh suffered a severe relapse. Depressed and unable to bring himself to write, he was still able to paint and draw a little during this time. Van Gogh asked his mother and his brother to send him drawings and rough work he had done in the early 1880s so he could work on new paintings from his old sketches. His late paintings show an artist at the height of his abilities."
,
x:true},
];
for(let i=0;i<y.length;i++){
  if(i%2==0){
    y[i].x1=true;
  }
  else{
    y[i].x1=false;
  }
}
function page() {
  return (
    <body className='bg-neutral-900 font-extralight'>
      <div className='w-screen h-[500px] bg-cover mr-6 rounded-md flex justify-center items-center' 
      style={{
        backgroundImage: `url('img/starrynight.png')`, height:"430px",}}>
      <div className='bg-[#46588a00] h-1/3 w-2/3 flex justify-center items-center text-white rounded-md text-7xl tracking-widest font-extralight'>An Artistic Explosion</div>
      </div>
      <div className='py-6 font-extralight'>
      {y.map((card) => (
          <Card
          key={card.title1}
          image={card.image1}
        title={card.title1}
        content={card.content1}
        x={card.x1}
          />
        ))}
        </div>
    </body>
  )
}

export default page