import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Shapes, Palette, Music } from 'lucide-react';

const features = [
  {
    title: '造型语言',
    description: '融合唐代陶俑的夸张与民间剪纸的简练，人物多采用正面律，背面省略为光面，既节省材料又突出主体。如《阿福》系列，圆润的身躯与憨态可掬的表情，传递出"大巧若拙"的东方美学。',
    icon: Shapes,
    highlight: '大巧若拙',
  },
  {
    title: '色彩哲学',
    description: '以红、黄、绿为主色调，运用对比与互补原理。艺人借鉴杨柳青年画的"色阶层次"技法，通过点线面的组合，使单一色彩产生丰富变化。一件《麒麟送子》泥塑，仅绿色就分出三种层次。',
    icon: Palette,
    highlight: '三分塑七分彩',
  },
  {
    title: '声响美学',
    description: '内置苇笛的设计，使静态的泥塑产生动态的听觉效果。吹孔位置根据造型不同而变化：人物类在背部，动物类在侧部。当儿童吹动《小狮子滚绣球》时，发出的"呜呜"声与造型形成通感体验。',
    icon: Music,
    highlight: '会唱歌的泥人',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-[#1f0808] to-primary-bg">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              艺术特色
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              造型、色彩与声响的三重交响
              <br />
              体现玉田泥塑独特的美学价值
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-[#3d1515]/40 backdrop-blur-sm rounded-xl p-8 
                           border border-primary-gold/20 h-full group
                           hover:border-primary-gold/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary-gold/10 
                                flex items-center justify-center mb-6
                                group-hover:bg-primary-gold/20 group-hover:scale-110
                                transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary-gold" />
                  </div>

                  {/* Highlight Tag */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold 
                                   text-xs rounded-full">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-primary-gold mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                bg-primary-gold group-hover:w-1/2 transition-all duration-300" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Image */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 relative">
            <div className="aspect-[21/9] rounded-xl overflow-hidden">
              <img
                src="/YuTianNiSu/images/yutian-works.jpg"
                alt="玉田泥塑作品展示"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent" />
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-gold font-serif text-lg">
                玉田泥塑"艳、拙、活、趣、繁、广"六大特点
              </p>
              <p className="text-text-light/60 text-sm mt-1">
                色彩艳丽、形态稚拙、线条鲜活、意境幽趣、种类繁多、取材广泛
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
