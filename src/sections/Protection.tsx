import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Shield, GraduationCap, TrendingUp, Globe } from 'lucide-react';

const measures = [
  {
    title: '政策扶持',
    description: '设立年度专项基金，用于艺人补贴、模具更新和展览推广。2020年，县政府出台《玉田泥塑保护条例》，明确传承人权利与义务。',
    icon: Shield,
  },
  {
    title: '教育传承',
    description: '在玉田职教中心开设泥塑专业，形成"中职-高职-本科"贯通培养体系。泥塑课程进入中小学，成为青少年接触传统文化的重要窗口。',
    icon: GraduationCap,
  },
  {
    title: '产业创新',
    description: '开发"泥塑+文旅"模式，在玉田老街建设泥塑主题公园，游客可体验从取土到上色的全过程。2023年推出"AR泥塑"项目，吸引年轻群体。',
    icon: TrendingUp,
  },
  {
    title: '国际传播',
    description: '多次作为文化使者出国展览，2018年《八仙过海》系列被大英博物馆收藏。2024年计划在巴黎设立"中国泥塑艺术中心"。',
    icon: Globe,
  },
];

const achievements = [
  { year: '1994', event: '作品入选"中国民间艺术一绝大展"' },
  { year: '2008', event: '列入国家级非物质文化遗产名录' },
  { year: '2018', event: '《八仙过海》被大英博物馆收藏' },
  { year: '2020', event: '出台《玉田泥塑保护条例》' },
  { year: '2023', event: '推出AR泥塑项目' },
  { year: '2024', event: '计划在巴黎设立艺术中心' },
];

const Protection = () => {
  return (
    <section id="protection" className="section-padding bg-[#1f0808]">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              Protection & Development
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              保护与发展
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              政府主导、社会参与、市场运作
              <br />
              构建全方位的非遗保护体系
            </p>
          </div>
        </ScrollReveal>

        {/* Measures Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {measures.map((measure, index) => {
            const Icon = measure.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(201, 168, 108, 0.4)' }}
                  className="flex gap-4 p-6 bg-[#3d1515]/40 backdrop-blur-sm rounded-xl 
                           border border-primary-gold/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-gold/10 
                                flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-primary-gold mb-2">
                      {measure.title}
                    </h3>
                    <p className="text-text-light/60 text-sm leading-relaxed">
                      {measure.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline */}
        <ScrollReveal delay={0.2}>
          <div className="bg-[#3d1515]/30 backdrop-blur-sm rounded-xl p-8 
                        border border-primary-gold/20">
            <h3 className="text-xl font-serif font-bold text-primary-gold mb-8 text-center">
              发展历程
            </h3>
            
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px 
                            bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent 
                            -translate-y-1/2 hidden md:block" />
              
              {/* Timeline Items */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    {/* Dot */}
                    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 
                                  w-3 h-3 rounded-full bg-primary-gold border-2 
                                  border-[#1f0808] -translate-y-1/2" />
                    
                    {/* Content */}
                    <div className="md:pt-6">
                      <div className="text-2xl font-serif font-bold text-primary-gold mb-1">
                        {item.year}
                      </div>
                      <div className="text-text-light/60 text-xs leading-tight">
                        {item.event}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <blockquote className="text-xl sm:text-2xl font-serif text-primary-gold/80 italic max-w-3xl mx-auto">
              "玉田泥塑始终承载着质朴的乡土情怀，在传承创新中，
              <br className="hidden sm:block" />
              这份珍贵的民间技艺得以延续，焕发出新的时代光彩。"
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Protection;
