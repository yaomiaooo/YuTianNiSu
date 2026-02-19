import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Award, Star } from 'lucide-react';

const inheritors = [
  {
    name: '吴玉成',
    years: '1934-2019',
    generation: '第三代传人',
    title: '国家级非遗代表性传承人',
    nickname: '"泥人吴"',
    description: '从小随父亲吴乐庭学艺，后师从邻村戴家屯刘俊祥学习泥玩具制作工艺。其泥塑注重表现自然和社会生活，题材花样出新，造型和着色古朴典雅，散发着浓郁的乡土气息。',
    achievement: '代表作《骑毛驴走娘家》入选文化部"中国民间艺术一绝大展"',
    honor: '国家级传承人',
    image: '/YuTianNiSu/images/yutian-craftsman.jpg',
  },
  {
    name: '刘广田',
    years: '1942-2015',
    generation: '第三代传人',
    title: '创新工艺先驱',
    nickname: '"套模大师"',
    description: '创新"分层套模"工艺，使复杂造型的泥塑生产效率提高3倍。将年画色彩与泥塑造型完美结合，创造出反映新生活的作品。',
    achievement: '设计的《十二生肖》邮票成为中国邮政首套泥塑主题邮品',
    honor: '工艺创新奖',
    image: '/YuTianNiSu/images/yutian-process.jpg',
  },
  {
    name: '王振锋',
    generation: '第四代传人',
    title: '玉田泥人王工作室创始人',
    nickname: '"传承先锋"',
    description: '致力于泥塑进校园、社区推广，积极推介玉田泥塑。免费开放展馆，大力开展来馆体验活动，组织开展进社区、进校园、大学生研习等活动。',
    achievement: '与传承人一起提炼出玉田泥塑"艳、拙、活、趣、繁、广"六大特点',
    honor: '市级传承人',
    image: '/YuTianNiSu/images/yutian-making.jpg',
  },
  {
    name: '杨晓梅 / 魏艳华',
    generation: '第五代传人',
    title: '玉田泥人王工作室名师',
    nickname: '"新生代力量"',
    description: '在题材、技艺上都有所创新，既继承了传统艺术风格，又具有浓厚的现代生活气息。已自主研发玉田泥人产品300多种，涉及神话传说、戏曲、历史人物等各个方面。',
    achievement: '《双林寺塔》被北京紫竹院永久收藏，24件作品被天津市文化馆永久收藏',
    honor: '唐山市巧女',
    image: '/YuTianNiSu/images/yutian-works.jpg',
  },
];

const Inheritors = () => {
  return (
    <section id="inheritors" className="section-padding bg-gradient-to-b from-primary-bg to-[#1f0808]">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
              Inheritors
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                         text-primary-gold mb-4">
              传承谱系
            </h2>
            <p className="text-text-light/60 max-w-2xl mx-auto">
              五代传承，薪火相传
              <br />
              每一位传承人都是玉田泥塑历史的见证者和创造者
            </p>
          </div>
        </ScrollReveal>

        {/* Inheritors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {inheritors.map((inheritor, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#3d1515]/40 backdrop-blur-sm rounded-xl overflow-hidden 
                         border border-primary-gold/20 group
                         hover:border-primary-gold/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 aspect-square sm:aspect-auto">
                    <img
                      src={inheritor.image}
                      alt={inheritor.name}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-serif font-bold text-primary-gold">
                            {inheritor.name}
                          </h3>
                          {inheritor.years && (
                            <span className="text-text-light/50 text-sm">
                              {inheritor.years}
                            </span>
                          )}
                        </div>
                        <span className="px-2 py-1 bg-primary-gold/20 text-primary-gold 
                                       text-xs rounded">
                          {inheritor.generation}
                        </span>
                      </div>

                      {/* Title */}
                      <p className="text-text-light/80 text-sm mb-3">
                        {inheritor.title}
                      </p>

                      {/* Nickname */}
                      <p className="text-primary-gold/70 text-sm italic mb-4">
                        {inheritor.nickname}
                      </p>

                      {/* Description */}
                      <p className="text-text-light/60 text-sm leading-relaxed line-clamp-3">
                        {inheritor.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-primary-gold/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-primary-gold" />
                        <span className="text-text-light/70 text-xs">
                          {inheritor.achievement}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary-gold" />
                        <span className="text-primary-gold text-xs">
                          {inheritor.honor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5', label: '代传承' },
              { number: '300+', label: '产品种类' },
              { number: '24', label: '件作品被收藏' },
              { number: '100+', label: '年新形象' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-[#3d1515]/30 rounded-lg">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-primary-gold">
                  {stat.number}
                </div>
                <div className="text-text-light/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Inheritors;
