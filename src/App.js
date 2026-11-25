import React, { useCallback, useEffect, useState, Suspense, lazy } from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { LazyMotion, domAnimation, AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import AnimatedBackground from './components/AnimatedBackground';
import RobotCompanion from './components/RobotCompanion';
import SmoothScrollProvider, { useLenis } from './components/SmoothScrollProvider';
import { DarkModeProvider } from './hooks/useDarkMode';
const Projects = lazy(() => import('./components/Projects'));
const TechStackCarousel = lazy(() => import('./components/TechStackCarousel'));
const Links = lazy(() => import('./components/Links'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-12">Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

function App() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error('Failed to load particles:', error);
    }
  }, []);

  const [showOverlay, setShowOverlay] = useState(false);
  const lenisRef = useLenis();

  useEffect(() => {
    const handleHashChange = () => {
      setShowOverlay(true);
      setTimeout(() => {
        if (lenisRef?.current) {
          const hash = window.location.hash;
          if (hash) {
            const el = document.querySelector(hash);
            if (el) {
              lenisRef.current.scrollTo(el, { offset: -32, duration: 1.2 });
            }
          }
        }
        setTimeout(() => setShowOverlay(false), 900);
      }, 200);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [lenisRef]);

  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <LazyMotion features={domAnimation}>
          <SmoothScrollProvider>
            <div className="portfolio-theme relative min-h-screen text-[#14263d] dark:text-gray-100">
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    key="section-overlay"
                    className="fixed inset-0 z-50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      background: 'rgba(255,255,255,0.12)',
                    }}
                  />
                )}
              </AnimatePresence>
              
              <ErrorBoundary>
                <AnimatedBackground />
              </ErrorBoundary>

              <ErrorBoundary>
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  className="fixed inset-0 pointer-events-none z-10"
                  options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    particles: {
                      color: { value: "#0f766e" },
                      links: {
                        color: "#0f766e",
                        distance: 180,
                        enable: true,
                        opacity: 0.08,
                        width: 0.8
                      },
                      move: {
                        enable: true,
                        speed: 0.25
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 800
                        },
                        value: 20
                      },
                      opacity: {
                        value: 0.16
                      },
                      size: {
                        value: { min: 1, max: 2 }
                      }
                    },
                    detectRetina: true
                  }}
                />
              </ErrorBoundary>

              <div className="relative z-20">
                <ErrorBoundary>
                  <Hero />
                </ErrorBoundary>
                
                <ErrorBoundary>
                  <About />
                </ErrorBoundary>

                <ErrorBoundary>
                  <Experience />
                </ErrorBoundary>

                <ErrorBoundary>
                  <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[200px]">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                    </div>
                  }>
                    <TechStackCarousel />
                    <Projects />
                    <Links />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <RobotCompanion />
            </div>
          </SmoothScrollProvider>
        </LazyMotion>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
