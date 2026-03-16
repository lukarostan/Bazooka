import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import { DeviceWidthContextProvider } from '@/context/DeviceWidthContext';

export default function Home() {
  return (
    <main>
      <DeviceWidthContextProvider>
        <Hero />
      </DeviceWidthContextProvider>
      <AnimatedBackground />
    </main>
  );
}
