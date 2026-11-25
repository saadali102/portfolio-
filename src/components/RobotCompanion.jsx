import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SECTION_MESSAGES = {
  home: "Hey! Welcome to Saad's Portfolio.",
  about: 'Let me introduce you to Saad, a cybersecurity professional.',
  experience: "Here is Saad's professional experience, including his work at CareCloud.",
  skills: "Let's explore his cybersecurity, VAPT, GRC and AI Governance skills.",
  projects: 'Check out his security research and hands-on projects.',
  certifications: "Explore his cybersecurity certifications and learning journey.",
  contact: "Want to connect with Saad? Let's get in touch!",
};

const ROBOT_WIDTH = 112;
const ROBOT_HEIGHT = 132;

function RobotArt({ reducedMotion, sleeping, walking, jumping, happy, waving }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    if (reducedMotion) return undefined;
    let blinkTimer;
    let blinkCloseTimer;
    let active = true;
    const scheduleBlink = () => {
      blinkTimer = window.setTimeout(() => {
        if (!active) return;
        setBlink(true);
        blinkCloseTimer = window.setTimeout(() => setBlink(false), 130);
        scheduleBlink();
      }, 3000 + Math.random() * 3000);
    };
    scheduleBlink();
    return () => { active = false; window.clearTimeout(blinkTimer); window.clearTimeout(blinkCloseTimer); };
  }, [reducedMotion]);

  return (
    <motion.svg
      className={`robot-art${walking ? ' is-walking' : ''}${happy ? ' is-happy' : ''}${sleeping ? ' is-sleeping' : ''}`}
      viewBox="0 0 96 112"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Blue cloud headed robot companion"
      animate={reducedMotion ? undefined : jumping ? { y: [0, -17, 0], scale: [1, 1.04, 1] } : sleeping ? { y: [0, 2, 0], scale: [1, .99, 1] } : { y: walking ? [0, -1, 0] : [0, -4, 0], scale: walking ? [1, 1.01, 1] : [1, 1.012, 1], rotate: [0, .35, 0, -.35, 0] }}
      transition={reducedMotion ? undefined : jumping ? { duration: .52, ease: 'easeOut' } : { duration: sleeping ? 4 : walking ? .5 : 3.1, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="botShell" x1="0" y1="0" x2="0.22" y2="1"><stop stopColor="#c8f5ff"/><stop offset=".18" stopColor="#78d4ff"/><stop offset=".48" stopColor="#398ee8"/><stop offset=".78" stopColor="#2865c9"/><stop offset="1" stopColor="#19428d"/></linearGradient>
        <linearGradient id="botShellSide" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#70cbff"/><stop offset=".55" stopColor="#3578d2"/><stop offset="1" stopColor="#1b3e83"/></linearGradient>
        <linearGradient id="botBody" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#a9ecff"/><stop offset=".23" stopColor="#59bafa"/><stop offset=".62" stopColor="#347bd7"/><stop offset="1" stopColor="#1b478f"/></linearGradient>
        <linearGradient id="botLimb" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#a1e9ff"/><stop offset=".34" stopColor="#55b8f2"/><stop offset="1" stopColor="#2861b8"/></linearGradient>
        <linearGradient id="botBoot" x1="0" y1="0" x2=".5" y2="1"><stop stopColor="#f1fdff"/><stop offset=".35" stopColor="#9ce5ff"/><stop offset="1" stopColor="#438dd4"/></linearGradient>
        <linearGradient id="botScreen" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#122e50"/><stop offset=".4" stopColor="#08182c"/><stop offset="1" stopColor="#050d1d"/></linearGradient>
        <linearGradient id="botScreenGlint" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d9f7ff" stopOpacity=".46"/><stop offset=".65" stopColor="#9ddfff" stopOpacity=".05"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
        <radialGradient id="botEye"><stop stopColor="#f1ffff"/><stop offset=".3" stopColor="#94fff7"/><stop offset="1" stopColor="#32d6e8"/></radialGradient>
        <filter id="botPixelGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="1.1" result="soft"/><feMerge><feMergeNode in="soft"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <clipPath id="botCloudClip"><path d="M27 55h-5v-3h-4v-5h-3v-8h-2V31h3v-7h4v-5h6v-5h8v-4h10V6h14v3h9v4h7v6h6v8h3v9h-3v7h-4v6h-6v5h-6v3H32z"/></clipPath>
        <clipPath id="botScreenClip"><rect x="25" y="25" width="48" height="24" rx="8"/></clipPath>
      </defs>
      <motion.ellipse cx="48" cy="107" rx="16" ry="2" fill="#07152b" opacity=".26" animate={reducedMotion ? undefined : { rx: jumping ? [8, 11, 8] : [16, 14, 16] }} transition={reducedMotion ? undefined : { duration: jumping ? .52 : 3.1, repeat: jumping ? 0 : Infinity, ease: 'easeInOut' }} />
      <g transform="translate(-16.8 0) scale(1.35 1)">
      {/* Tiny pixel boots and legs */}
      <motion.g className="robot-legs" animate={reducedMotion || !walking ? undefined : { rotate: [0, -8, 8, 0] }} transition={{ duration: .42, repeat: Infinity }} style={{ transformOrigin: '48px 91px' }}>
        {jumping ? (
          <>
            <path d="M39 78c3-2 6-1 8 2l5 5-4 4-8-4c-4-2-4-5-1-7zM56 78c-3-2-6-1-8 2l-5 5 4 4 8-4c4-2 4-5 1-7z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M36 86c2-2 5-2 7 0l5 4-2 5-9-1c-4 0-5-5-1-8zM60 86c-2-2-5-2-7 0l-5 4 2 5 9-1c4 0 5-5 1-8z" fill="url(#botBoot)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M38 88q3-2 6 1m12-1q-3-2-6 1" fill="none" stroke="#f0ffff" strokeWidth="1.3" strokeLinecap="round" />
          </>
        ) : sleeping ? (
          <path d="M37 84c2-4 7-5 11-2l6 4c3 2 6 2 9 0v6H43c-5 0-8-4-6-8z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.4" />
        ) : (
          <>
            <path d="M39 80c3 0 6 2 6 5v9h-7v-5c-3-3-3-8 1-9zM55 80c-3 0-6 2-6 5v9h7v-5c3-3 3-8-1-9z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M35 92h11c3 0 5 2 5 5v3c0 3-2 4-5 4H34c-3 0-5-2-5-4v-2c0-3 2-5 6-6zM51 92h11c4 1 6 3 6 6v2c0 2-2 4-5 4H51c-3 0-5-1-5-4v-3c0-3 2-5 5-5z" fill="url(#botBoot)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M34 97h12m8 0h12" stroke="#effdff" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
      </motion.g>
      {walking && <path d="M17 96h3v2h-3zm58 0h3v2h-3z" fill="#69daf4" />}
      {jumping && <path d="M19 69h3v2h-3zm55 0h3v2h-3zM29 61h2v3h-2zm38 0h2v3h-2z" fill="#60eaf4" />}
      {/* Short pixel arms, little square gloves */}
      <motion.g className="robot-arm robot-arm-left" animate={reducedMotion || (!walking && !waving) ? undefined : waving ? { rotate: [0, -24, 5, -24, 0] } : { rotate: [0, 12, -12, 0] }} transition={{ duration: waving ? .7 : .42, repeat: waving ? 2 : Infinity }} style={{ transformOrigin: '30px 69px' }}>
        {happy || waving || jumping ? (
          <>
            <path d="M34 62c-3-2-6-1-8 2-2 3-4 8-5 12-1 3 1 6 4 7 3 1 5-1 6-4l6-10c2-3 1-6-3-7z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M33 64c-2 1-4 5-5 8" fill="none" stroke="#e1faff" strokeOpacity=".75" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="25" cy="82" r="4.8" fill="url(#botShell)" stroke="#173c78" strokeWidth="1.4" />
            <ellipse cx="23.8" cy="80.5" rx="1.5" ry=".9" fill="#efffff" opacity=".9" />
          </>
        ) : sleeping ? (
          <path d="M34 62c-4-2-7 1-7 5v6c0 4 3 6 7 5l7-3-2-5-5 1z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.4" />
        ) : (
          <>
            <path d="M34 62c-4-2-7 0-8 4l-5 11c-1 3 0 6 3 7 3 1 5-1 6-4l7-11c2-3 1-6-3-7z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M32 64c-2 1-4 5-5 8" fill="none" stroke="#e1faff" strokeOpacity=".75" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="25" cy="82" r="4.8" fill="url(#botShell)" stroke="#173c78" strokeWidth="1.4" />
            <ellipse cx="23.8" cy="80.5" rx="1.5" ry=".9" fill="#efffff" opacity=".9" />
          </>
        )}
      </motion.g>
      <motion.g className="robot-arm robot-arm-right" animate={reducedMotion || (!walking && !waving) ? undefined : { rotate: [0, -12, 12, 0] }} transition={{ duration: .42, repeat: Infinity }} style={{ transformOrigin: '66px 69px' }}>
        {happy || jumping ? (
          <>
            <path d="M60 62c3-2 6-1 8 2 2 3 4 8 5 12 1 3-1 6-4 7-3 1-5-1-6-4l-6-10c-2-3-1-6 3-7z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M61 64c2 1 4 5 5 8" fill="none" stroke="#e1faff" strokeOpacity=".75" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="71" cy="82" r="4.8" fill="url(#botShell)" stroke="#173c78" strokeWidth="1.4" />
            <ellipse cx="72.2" cy="80.5" rx="1.5" ry=".9" fill="#efffff" opacity=".9" />
          </>
        ) : sleeping ? (
          <path d="M60 62c4-2 7 1 7 5v6c0 4-3 6-7 5l-7-3 2-5 5 1z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.4" />
        ) : (
          <>
            <path d="M60 62c4-2 7 0 8 4l5 11c1 3 0 6-3 7-3 1-5-1-6-4l-7-11c-2-3-1-6 3-7z" fill="url(#botLimb)" stroke="#173c78" strokeWidth="1.5" />
            <path d="M62 64c2 1 4 5 5 8" fill="none" stroke="#e1faff" strokeOpacity=".75" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="71" cy="82" r="4.8" fill="url(#botShell)" stroke="#173c78" strokeWidth="1.4" />
            <ellipse cx="72.2" cy="80.5" rx="1.5" ry=".9" fill="#efffff" opacity=".9" />
          </>
        )}
      </motion.g>
      {waving && !happy && <path d="M18 27h2v-3h2v-2h3v2h-2v3h-2v3h-3zM13 30h3v2h-3z" fill="#55e8f2" />}
      {happy && <g fill="#f6ce65"><path d="M14 18h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/><path d="M79 21h2v2h2v2h-2v3h-2v-3h-2v-2h2z"/></g>}
      {/* Compact, rounded torso with blue enamel shading */}
      <g transform={sleeping ? 'translate(0 3)' : undefined}>
      <path d="M36 59c0-3 3-5 6-5h15c4 0 7 3 7 7v17c0 4-3 7-7 7H39c-4 0-7-3-7-7V64c0-2 1-4 4-5z" fill="#11285b" stroke="#0c1b3d" strokeWidth="1.5" />
      <path d="M37 59c0-2 2-4 5-4h14c4 0 6 2 6 6v16c0 4-2 6-6 6H39c-3 0-6-2-6-6V64c0-2 1-4 4-5z" fill="url(#botBody)" />
      <path d="M38 59c1-2 2-3 5-3h11" fill="none" stroke="#e5fbff" strokeOpacity=".8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M58 62v14c0 3-2 5-5 5h-9" fill="none" stroke="#17488f" strokeOpacity=".65" strokeWidth="2" strokeLinecap="round" />
      <rect x="40" y="65" width="18" height="13" rx="3.5" fill="#0b1d38" stroke="#8fdcf7" strokeOpacity=".8" strokeWidth="1.2" />
      <path d="M43 68h2l2 2-2 2h-2m5 1h4" fill="none" stroke="#59f0eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="59" r="1.2" fill="#c6fbff" />
      </g>
      {/* Pixel cloud shell with layered blue shading and a dark outline */}
      <path d="M27 55h-5v-3h-4v-5h-3v-8h-2V31h3v-7h4v-5h6v-5h8v-4h10V6h14v3h9v4h7v6h6v8h3v9h-3v7h-4v6h-6v5h-6v3H32z" transform="translate(0 2)" fill="#102657" opacity=".9" />
      <path d="M27 55h-5v-3h-4v-5h-3v-8h-2V31h3v-7h4v-5h6v-5h8v-4h10V6h14v3h9v4h7v6h6v8h3v9h-3v7h-4v6h-6v5h-6v3H32z" fill="url(#botShell)" stroke="#0c183e" strokeWidth="2.3" />
      <path d="M35 13h8v-4h12v3h8v4h6v5h-8v-3h-8v-2H43v3h-8z" fill="#b3dcff" opacity=".7" />
      <path d="M16 31h4v8h3v6h6v4h8v5H25v-4h-6v-5h-4v-7h-2v-6h3z" fill="#3859db" opacity=".72" />
      <path d="M69 51h6v-4h5v-5h4v6h-4v6h-7v3h-7v-4h3z" fill="#244bb9" opacity=".72" />
      <g clipPath="url(#botCloudClip)">
        <path d="M20 14h8V11h7v4h-6v4h-5v6h-4v7h-4v-9h4z" fill="#d9f4ff" opacity=".32" />
        <path d="M19 43h5v5h7v4h10v5H23v-4h-5v-5h-4v-8h5z" fill="#314bcb" opacity=".55" />
      </g>
      <path d="M29 15h7v-3h11v3h-6v2H34v4h-5z" fill="#d6f1ff" opacity=".7" />
      <path d="M17 31h3v7h-3zm64 2h3v7h-3z" fill="#85cfff" opacity=".65" />
      {/* Rounded glass face screen */}
      <rect x="24" y="25" width="49" height="24" rx="8" fill="#174d9c" stroke="#163b78" strokeWidth="1.5" />
      <rect x="26" y="27" width="45" height="20" rx="6.5" fill="url(#botScreen)" stroke="#07152c" strokeWidth="1.2" />
      <g clipPath="url(#botScreenClip)"><path d="M26 27h46v8c-14-4-30-4-46 1z" fill="url(#botScreenGlint)"/><path d="M31 29h13" stroke="#f3ffff" strokeOpacity=".28" strokeWidth="1.2" strokeLinecap="round"/></g>
      {sleeping || blink ? (
        <g fill="none" stroke="#7cfff5" strokeWidth="2" strokeLinecap="round" filter="url(#botPixelGlow)"><path d="M35 36q4 4 8 0m10 0q4 4 8 0" /></g>
      ) : jumping ? (
        <g filter="url(#botPixelGlow)"><ellipse cx="39" cy="35" rx="2.7" ry="4" fill="url(#botEye)"/><ellipse cx="58" cy="35" rx="2.7" ry="4" fill="url(#botEye)"/><circle cx="38" cy="33" r=".9" fill="#fff"/><circle cx="57" cy="33" r=".9" fill="#fff"/></g>
      ) : walking ? (
        <g fill="none" stroke="#77fff5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#botPixelGlow)"><path d="M35 34l4 4 4-4m10 0 4 4 4-4" /></g>
      ) : happy ? (
        <g fill="none" stroke="#7cfff5" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" filter="url(#botPixelGlow)"><path d="M43 33l-5 3.5 5 3.5m11-7 5 3.5-5 3.5" /></g>
      ) : (
        <g fill="none" stroke="#75fff5" strokeWidth="2" strokeLinecap="round" filter="url(#botPixelGlow)"><path d="M35 36q4 4 8 0m10 0q4 4 8 0" /></g>
      )}
      {jumping ? <path d="M44 41q4 4 8 0v3q-4 4-8 0z" fill="#65f7ed" filter="url(#botPixelGlow)" /> : happy ? <path d="M43 41q5 7 10 0" fill="none" stroke="#65f7ed" strokeWidth="2.2" strokeLinecap="round" filter="url(#botPixelGlow)" /> : <path d="M44 42h7" fill="none" stroke="#65f7ed" strokeWidth="2" strokeLinecap="round" filter="url(#botPixelGlow)" />}
      <ellipse cx="29.5" cy="43.5" rx="1.5" ry="1" fill="#63c9f3" opacity=".45" /><ellipse cx="66" cy="43.5" rx="1.5" ry="1" fill="#63c9f3" opacity=".45" />
      </g>
    </motion.svg>
  );
}

function getTargetPoint(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return { x: window.innerWidth - ROBOT_WIDTH - 20, y: window.innerHeight - ROBOT_HEIGHT - 20 };
  const heading = section.querySelector('h1, h2, h3') || section;
  const rect = heading.getBoundingClientRect();
  const gap = 18;
  let x = rect.right + gap;
  if (x + ROBOT_WIDTH > window.innerWidth - 12) x = rect.left - ROBOT_WIDTH - gap;
  x = Math.max(12, Math.min(x, window.innerWidth - ROBOT_WIDTH - 12));
  const y = Math.max(92, Math.min(rect.top - 12, window.innerHeight - ROBOT_HEIGHT - 16));
  return { x, y };
}

export default function RobotCompanion() {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState(() => ({ x: Math.max(12, window.innerWidth - ROBOT_WIDTH - 24), y: Math.max(80, window.innerHeight - ROBOT_HEIGHT - 25) }));
  const [visible, setVisible] = useState(true);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [message, setMessage] = useState(SECTION_MESSAGES.home);
  const [showMessage, setShowMessage] = useState(true);
  const [moving, setMoving] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [happy, setHappy] = useState(false);
  const [waving, setWaving] = useState(false);
  const [sleeping, setSleeping] = useState(false);
  const timerRef = useRef([]);
  const sleepTimerRef = useRef(null);
  const travelTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    timerRef.current.forEach(window.clearTimeout);
    timerRef.current = [];
    window.clearTimeout(travelTimerRef.current);
  }, []);

  const wake = useCallback(() => {
    setSleeping(false);
    window.clearTimeout(sleepTimerRef.current);
    sleepTimerRef.current = window.setTimeout(() => setSleeping(true), 45000);
  }, []);

  const navigateTo = useCallback((sectionId) => {
    const nextMessage = SECTION_MESSAGES[sectionId];
    if (!nextMessage) return;
    wake();
    clearTimers();
    setSleeping(false);
    setMessage(nextMessage);
    setShowMessage(speechEnabled);
    setMoving(false);
    setJumping(true);
    setHappy(false);
    setWaving(false);
    // Let the existing hash navigation and Lenis scroll settle, then park beside the heading.
    timerRef.current.push(window.setTimeout(() => setJumping(false), 520));
    timerRef.current.push(window.setTimeout(() => setMoving(true), 520));
    travelTimerRef.current = window.setTimeout(() => {
      setPosition(getTargetPoint(sectionId));
      timerRef.current.push(window.setTimeout(() => {
        setMoving(false);
        setHappy(true);
        setWaving(true);
        timerRef.current.push(window.setTimeout(() => setWaving(false), 1500));
        timerRef.current.push(window.setTimeout(() => setHappy(false), 2200));
        timerRef.current.push(window.setTimeout(() => setShowMessage(false), 6500));
      }, 900));
    }, 1500);
  }, [clearTimers, speechEnabled, wake]);

  useEffect(() => {
    wake();
    const handleNavigation = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1) || 'home';
      if (SECTION_MESSAGES[id]) navigateTo(id);
    };
    document.addEventListener('click', handleNavigation);
    const handleResize = () => setPosition((current) => ({ x: Math.min(current.x, window.innerWidth - ROBOT_WIDTH - 12), y: Math.min(current.y, window.innerHeight - ROBOT_HEIGHT - 12) }));
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('click', handleNavigation);
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(sleepTimerRef.current);
      clearTimers();
    };
  }, [clearTimers, navigateTo, wake]);

  const interact = () => {
    wake();
    setShowMessage((previous) => !previous);
    setWaving(true);
    timerRef.current.push(window.setTimeout(() => setWaving(false), 1500));
  };

  if (!visible) return <button type="button" className="robot-restore" onClick={() => { setVisible(true); wake(); }} aria-label="Show robot companion"><svg viewBox="0 0 24 24" shapeRendering="crispEdges" aria-hidden="true"><path d="M8 3h4v2h4v3h3v4h2v5h-3v2H6v-2H3v-5h2V9h3z" fill="#347fe0" stroke="#10285c" strokeWidth="1.5"/><path d="M7 10h10v5H7z" fill="#07182f"/><path d="M9 11h2v2H9zm5 0h2v2h-2zm-3 3h3v1h-3z" fill="#62fff2"/><path d="M10 18h4v2h-4zm-2 2h3v2H8zm5 0h3v2h-3z" fill="#72ceff"/></svg></button>;

  return (
    <motion.div
      className="robot-companion"
      initial={false}
      animate={{ left: position.x, top: position.y }}
      transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 52, damping: 18, mass: 1.1 }}
      onPointerMove={wake}
    >
      <AnimatePresence>
        {showMessage && speechEnabled && (
          <motion.div className="robot-speech" initial={{ opacity: 0, y: 8, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: .95 }} transition={{ duration: .2 }} role="status">
            {message}<span className="robot-speech-tail" />
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="robot-character" onClick={interact} aria-label="Interact with robot companion">
        <RobotArt reducedMotion={reducedMotion} sleeping={sleeping} walking={moving} jumping={jumping} happy={happy} waving={waving} />
        {sleeping && <svg className="robot-zzz" viewBox="0 0 20 14" shapeRendering="crispEdges" aria-hidden="true"><path d="M1 1h7v2L4 8h4v2H1V8l4-5H1zm10 0h7v2l-4 5h4v2h-7V8l4-5h-4z" fill="#55e8f2" /></svg>}
      </button>
      <div className="robot-controls" aria-label="Robot companion controls">
        <button type="button" onClick={() => { setSpeechEnabled((value) => !value); setShowMessage(false); }} aria-label={speechEnabled ? 'Mute robot speech bubbles' : 'Enable robot speech bubbles'} title={speechEnabled ? 'Mute speech bubbles' : 'Enable speech bubbles'}>{speechEnabled ? '···' : '×'}</button>
        <button type="button" onClick={() => setVisible(false)} aria-label="Hide robot companion" title="Hide companion">−</button>
      </div>
    </motion.div>
  );
}
