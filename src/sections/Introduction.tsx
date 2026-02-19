import ScrollReveal from '../components/ScrollReveal';

const Introduction = () => {
  return (
    <section id="introduction" className="section-padding bg-primary-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-primary-gold text-sm tracking-widest uppercase mb-4 block">
                Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold 
                           text-primary-gold mb-8">
                项目简介
              </h2>
              
              <div className="space-y-6 text-text-light/80 leading-relaxed">
                <p>
                  <span className="text-primary-gold font-medium">玉田泥塑</span>，
                  2008年入选第二批国家级非物质文化遗产名录（编号Ⅶ-47），
                  形成于清代光绪年间，至今已有一百多年的历史。
                </p>
                
                <p>
                  玉田县因古人种玉的传说而得名，位于河北省东部，地处燕山余脉南麓，
                  正当京、津、唐之间。玉田泥塑以历史人物、神话故事、田园动物等为题材，
                  用泥土捏塑形象，经彩绘后成为泥埙，供少儿把玩。
                </p>
                
                <p>
                  其造型一般为椭形体，单纯简练，<span className="text-primary-gold">半塑半画，以画为主</span>，
                  内镶苇笛，外部用白色作底，敷以红、黄、绿、黑各色，色彩强烈而协调，
                  散发出浓郁的乡土气息。
                </p>
                
                <p>
                  玉田泥塑独具一格，在河北泥塑中首屈一指，在我国民间泥塑领域也占有一席之地，
                  是燕赵地域文化和民间泥塑史研究的重要对象。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-primary-gold/20">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-primary-gold">
                    150+
                  </div>
                  <div className="text-sm text-text-light/60 mt-1">年历史</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-primary-gold">
                    2008
                  </div>
                  <div className="text-sm text-text-light/60 mt-1">列入非遗</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-primary-gold">
                    8
                  </div>
                  <div className="text-sm text-text-light/60 mt-1">制作工序</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/YuTianNiSu/images/yutian-rooster.webp"
                  alt="玉田泥塑大公鸡"
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 
                            border-primary-gold/30 rounded-lg -z-10" />
              
              {/* Caption */}
              <div className="absolute -bottom-4 left-4 right-4 bg-primary-bg/90 
                            backdrop-blur-sm p-4 rounded-lg border border-primary-gold/20">
                <p className="text-primary-gold text-sm font-medium">
                  玉田泥塑代表作 · 大公鸡
                </p>
                <p className="text-text-light/60 text-xs mt-1">
                  色彩艳丽，造型生动，是最具代表性的作品之一
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
