import Beranda from './components/Beranda/index';
import Tentang from './components/Tentang/index';
import FAQ from './components/FAQ/index';
import Bph from './components/Bph/index';
import Gabung from './components/Gabung/index';
import Galery from './components/Galery/index';
import Proker from './components/Proker/index';
import Articles from './components/Articles/index';
import Saran from './components/Saran/index';
import Insta from './components/Insta/index';


export default function Home() {
  return (
    <main>
      <Beranda />
      <Tentang />
      <FAQ />

      <Bph />
      <Gabung />
      <Articles />
      <Galery />
      <Proker />
      <Saran />
      <Insta />
    </main>
  )
}
