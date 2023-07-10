import { About, Header, Projects } from '@/containers';
import { Navbar } from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <About />
    </>
    )
}
