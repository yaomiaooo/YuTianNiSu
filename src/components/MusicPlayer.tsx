import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [autoPlayAttempted, setAutoPlayAttempted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicFile = './bgm/bg-miusic.mp3';
  const songName = '倒垂帘';
  const artist = '徐红';

  useEffect(() => {
    // 检测是否为移动设备
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    setIsMobile(checkIsMobile());

    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    // 移动端点击外部收起面板
    const handleDocumentClick = (e: MouseEvent) => {
      if (isMobile && isExpanded) {
        const playerElement = document.querySelector('[data-music-player]');
        if (playerElement && !playerElement.contains(e.target as Node)) {
          setIsExpanded(false);
        }
      }
    };

    // 移动端触摸外部收起面板
    const handleDocumentTouch = (e: TouchEvent) => {
      if (isMobile && isExpanded) {
        const playerElement = document.querySelector('[data-music-player]');
        if (playerElement && !playerElement.contains(e.target as Node)) {
          setIsExpanded(false);
        }
      }
    };

    // 智能自动播放策略
    const attemptAutoPlay = async () => {
      if (autoPlayAttempted) return;
      
      try {
        // 策略1: 静音播放（成功率最高）
        audio.muted = true;
        await audio.play();
        
        // 播放成功，取消静音并更新状态
        setTimeout(() => {
          audio.muted = false;
          setIsPlaying(true);
          setHasUserInteracted(true);
        }, 500);
        
      } catch (error) {
        console.log('静音自动播放失败，尝试其他策略:', error);
        
        // 策略2: 等待用户可能已经与页面交互
        // 检测页面是否已经获得焦点
        if (document.hasFocus()) {
          try {
            audio.muted = false;
            await audio.play();
            setIsPlaying(true);
            setHasUserInteracted(true);
          } catch (error2) {
            console.log('焦点自动播放失败:', error2);
          }
        }
      }
      
      setAutoPlayAttempted(true);
    };

    // 预加载音频
    audio.load();
    
    // 页面加载完成后尝试自动播放
    const timer = setTimeout(attemptAutoPlay, 500);
    
    // 添加页面点击事件监听，提高自动播放成功率
    const handleUserInteraction = () => {
      if (!hasUserInteracted && !isPlaying) {
        attemptAutoPlay();
      }
      document.removeEventListener('click', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentTouch);

    return () => {
      clearTimeout(timer);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentTouch);
    };
  }, [isMobile, isExpanded]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && hasUserInteracted) {
      audio.play().catch(error => {
        console.log('播放失败:', error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, hasUserInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // 如果音频已经加载但被暂停，直接播放
      if (audio.readyState >= 2) {
        audio.play().catch(error => {
          console.log('播放失败:', error);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } else {
        // 音频未加载，重新加载并播放
        audio.load();
        audio.play().catch(error => {
          console.log('播放失败:', error);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  const handleToggleExpand = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleTouchOutside = (e: React.TouchEvent) => {
    // 阻止事件冒泡，避免触发父元素的点击事件
    e.stopPropagation();
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    setVolume(volume > 0 ? 0 : 0.5);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // 根据设备类型决定是否显示展开状态
  const shouldShowExpanded = isMobile ? isExpanded : isHovered;
  const shouldShowCollapsed = isMobile ? !isExpanded : !isHovered;

  return (
    <>
      <audio ref={audioRef} src={musicFile} loop />
      
      <motion.div
        data-music-player="true"
        className="fixed bottom-6 left-6 z-50"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => {
          if (!hasUserInteracted) {
            togglePlay();
          }
          if (isMobile) {
            handleToggleExpand();
          }
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: shouldShowExpanded ? 1 : 0.8, 
          opacity: 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* 简约红棕复古样式 */}
        <motion.div
          className={`bg-gradient-to-br from-[#3a1a12] to-[#1a0a06] rounded-xl shadow-2xl border border-[#d4af37]/30 backdrop-blur-md ${
            shouldShowExpanded ? 'p-3 w-72 h-16' : 'p-3 w-14 h-14 rounded-full'
          } transition-all duration-300 overflow-hidden`}
        >
          {/* 缩小状态 - 圆形播放按钮 */}
          <AnimatePresence>
            {shouldShowCollapsed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center w-full h-full"
              >
                <button
                  onClick={togglePlay}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-lg ${
                    hasUserInteracted 
                      ? 'bg-[#d4af37] hover:bg-[#b8941f] text-[#1a0a06]' 
                      : 'bg-[#5a2a1f] hover:bg-[#7a3a2f] text-[#d4af37]'
                  }`}
                >
                  {hasUserInteracted ? (
                    isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />
                  ) : (
                    <Play size={14} className="ml-0.5" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 展开状态 - 简约复古播放器 */}
          <AnimatePresence>
            {shouldShowExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center h-full px-1"
              >
                {/* 播放按钮（居中突出） */}
                <div className="mr-3">
                  <button
                    onClick={togglePlay}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
                      hasUserInteracted 
                        ? 'bg-[#d4af37] hover:bg-[#b8941f] text-[#1a0a06]' 
                        : 'bg-[#5a2a1f] hover:bg-[#7a3a2f] text-[#d4af37]'
                    }`}
                  >
                    {hasUserInteracted ? (
                      isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />
                    ) : (
                      <Play size={16} className="ml-0.5" />
                    )}
                  </button>
                </div>

                {/* 主要内容区 */}
                <div className="flex-1">
                  {/* 歌曲信息 */}
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <p className="text-sm font-medium text-[#d4af37]" onTouchStart={handleTouchOutside}>{songName}</p>
                      <p className="text-xs text-[#b8946f]" onTouchStart={handleTouchOutside}>{artist}</p>
                    </div>
                    <button
                      onClick={toggleMute}
                      className="text-[#b8946f] hover:text-[#d4af37] transition-colors"
                      onTouchStart={handleTouchOutside}
                    >
                      {volume > 0 ? <Volume2 size={12} /> : <VolumeX size={12} />}
                    </button>
                  </div>
                  
                  {/* 进度条和时间 */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleTimeChange}
                      className="flex-1 h-1 bg-[#5a2a1f] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d4af37]"
                      onTouchStart={handleTouchOutside}
                    />
                    <span className="text-xs text-[#b8946f] w-12 text-right" onTouchStart={handleTouchOutside}>
                      {formatTime(currentTime)}/{formatTime(duration)}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;