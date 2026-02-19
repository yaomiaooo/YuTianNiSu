import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: '首页', href: '#hero' },
  { label: '项目简介', href: '#introduction' },
  { label: '历史渊源', href: '#history' },
  { label: '制作工艺', href: '#craftsmanship' },
  { label: '代表作品', href: '#gallery' },
  { label: '传承人', href: '#inheritors' },
];

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#1a0505] border-t border-primary-gold/20">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary-gold mb-4">
              玉田泥塑
            </h3>
            <p className="text-text-light/60 text-sm leading-relaxed mb-6">
              玉田泥塑数字档案 - 记录和传承国家级非物质文化遗产。
              从清光绪年间至今，这门泥土艺术已传承百年，
              是燕赵文化的重要组成部分。
            </p>
            <div className="flex items-center gap-2 text-text-light/50 text-sm">
              <MapPin className="w-4 h-4 text-primary-gold" />
              <span>河北省唐山市玉田县</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary-gold mb-4">
              快速链接
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-light/60 text-sm hover:text-primary-gold 
                             transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 
                                           transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-primary-gold mb-4">
              相关信息
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-gold/10 
                              flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary-gold" />
                </div>
                <div>
                  <p className="text-text-light/80 text-sm">非遗名录编号</p>
                  <p className="text-primary-gold text-sm">Ⅶ-47</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-gold/10 
                              flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-gold" />
                </div>
                <div>
                  <p className="text-text-light/80 text-sm">列入时间</p>
                  <p className="text-primary-gold text-sm">2008年（第二批）</p>
                </div>
              </div>

              <div className="pt-4 border-t border-primary-gold/10">
                <p className="text-text-light/50 text-xs">
                  参考资料：中国非物质文化遗产网、玉田县文化馆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-gold/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light/40 text-sm text-center md:text-left">
              © 2025 玉田泥塑数字档案 | 唐山文化传承实践作业
            </p>
            <p className="text-text-light/40 text-xs">
              用躬亲实践追寻家乡文化之根，传播唐山文化之音
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full 
                 bg-primary-gold/20 backdrop-blur-sm
                 flex items-center justify-center
                 hover:bg-primary-gold/40 transition-colors
                 border border-primary-gold/30 z-40"
        aria-label="回到顶部"
      >
        <svg 
          className="w-5 h-5 text-primary-gold" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
