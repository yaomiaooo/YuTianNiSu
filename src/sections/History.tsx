import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const timelineData = [
  {
    year: '清光绪年间',
    period: '1875-1908',
    title: '形成期',
    description: '玉田泥塑形成期，吴仪泰、吴乐庭等先驱者将戏曲人物、神话传说转化为立体形象，创造出《八仙过海》《麒麟送子》等作品。',
    highlight: '先驱诞生'
  },
  {
    year: '1949-1960年代',
    period: '兴盛普及期',
    title: '黄金时代',
    description: '新中国成立后，玉田泥塑迎来黄金时代。吴玉成、刘广田等第二代传人创新工艺，将年画色彩与泥塑造型结合，创造出反映新生活的作品。',
    highlight: '工艺创新'
  },
  {
    year: '1970-1980年代',
    period: '沉寂转型期',
    title: '艰难岁月',
    description: '随着塑料玩具的普及，传统泥塑市场急剧萎缩。但正是在这个低谷期，玉田泥塑完成了从"玩具"到"艺术品"的蜕变。',
    highlight: '艺术转型'
  },
  {
    year: '1987-至今',
    period: '抢救复苏期',
    title: '复兴发展',
    description: '1987年，吴玉成、刘广田在河北电视台的现场表演成为复兴转折点。政府设立专项保护基金，2008年列入国家级非物质文化遗产名录。',
    highlight: '非遗认定'
  },
];

const History = () => {
  return (
    <section id="history" className="section-padding bg-gradient-to-b from-primary-bg to-[#1f0808]">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              History
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              历史渊源
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              从清光绪年间至今，玉田泥塑经历了四个鲜明的发展阶段，
              每个阶段都烙印着时代的印记
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px 
                        bg-gradient-to-b from-primary-gold/50 via-primary-gold to-primary-gold/50 
                        md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <ScrollReveal 
                key={index} 
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <div className={`relative flex items-start md:items-center 
                              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 md:px-12 
                                ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#3d1515]/50 backdrop-blur-sm rounded-lg p-6 
                               border border-primary-gold/20 card-hover"
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 mb-3 
                                    ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold 
                                       text-sm font-medium rounded-full">
                          {item.year}
                        </span>
                        <span className="text-text-light/50 text-sm">
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-serif font-bold text-primary-gold mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-light/70 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlight Tag */}
                      <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="inline-block px-3 py-1 border border-primary-gold/40 
                                       text-primary-gold text-xs rounded">
                          {item.highlight}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 
                                -translate-x-1/2 md:-translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-primary-gold border-4 
                               border-primary-bg shadow-lg shadow-primary-gold/30"
                    />
                  </div>

                  {/* Empty Space for Other Side */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
