import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Mountain, 
  Hand, 
  Box, 
  Wind, 
  Sun, 
  Paintbrush, 
  Droplets, 
  Palette 
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: '取土和泥',
    description: '选用玉田特有的"胶泥"，这种沉积于河道底层的黏土，经晾晒、碾碎、水浸后，达到"手握成团，落地即散"的完美状态。',
    icon: Mountain,
  },
  {
    number: '02',
    title: '捏塑泥胎',
    description: '艺人以指为笔，在湿润的泥块上勾勒轮廓。这个过程需"胸有成竹"，因为泥胎干燥后难以修改。',
    icon: Hand,
  },
  {
    number: '03',
    title: '制作泥模',
    description: '将泥胎包裹黏土，剖成两半烧制成陶模。每副模具仅能使用百次左右，体现了"器以载道"的局限美。',
    icon: Box,
  },
  {
    number: '04',
    title: '合模装笛',
    description: '在两瓣泥模中压入黏土，底部嵌入苇笛。笛孔的位置与大小直接影响发音，老艺人通过"听声辨质"确保音质清亮。',
    icon: Wind,
  },
  {
    number: '05',
    title: '修整晾晒',
    description: '阴干过程需持续一周，期间要防止开裂与变形。艺人会在泥坯旁放置水盆，通过调节湿度实现"自然定型"。',
    icon: Sun,
  },
  {
    number: '06',
    title: '铺白打底',
    description: '用天然土子粉调制底漆，涂抹后形成细腻的白色基底。这一步如同画家铺陈画布，为后续上色奠定基础。',
    icon: Paintbrush,
  },
  {
    number: '07',
    title: '颜色调胶',
    description: '采用桃红、槐黄、艳绿等矿物颜料，以明胶调和。调胶比例全凭经验，浓了易裂，稀了褪色。',
    icon: Droplets,
  },
  {
    number: '08',
    title: '描绘敷彩',
    description: '以铁线笔勾勒轮廓，再分层填色。艺人运用"软靠白、硬压软"的技法，使色彩产生自然过渡。',
    icon: Palette,
  },
];

const Craftsmanship = () => {
  return (
    <section id="craftsmanship" className="section-padding bg-primary-bg">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              制作工艺
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              八道工序，环环相扣
              <br />
              从取土到成品，每一步都蕴含着东方智慧
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8, borderColor: 'rgba(201, 168, 108, 0.5)' }}
                  className="bg-[#3d1515]/30 backdrop-blur-sm rounded-lg p-6 
                           border border-primary-gold/20 h-full
                           transition-all duration-300 group"
                >
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-serif font-bold text-primary-gold/30 
                                   group-hover:text-primary-gold/50 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-primary-gold/10 
                                  flex items-center justify-center
                                  group-hover:bg-primary-gold/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary-gold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-primary-gold mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <blockquote className="text-xl sm:text-2xl font-serif text-primary-gold/80 italic">
              "泥性如人性，急不得也慢不得"
            </blockquote>
            <cite className="text-text-light/50 text-sm mt-2 block">
              —— 玉田泥塑老艺人
            </cite>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Craftsmanship;
