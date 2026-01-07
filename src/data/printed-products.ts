export interface PrintedProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  specs: {
    grammage: string;
    width: string;
    composition: string;
    minOrder: string;
    leadTime: string;
  };
  usageAreas: string[];
  highlights: string[];
}

export const PRINTED_PRODUCTS: PrintedProduct[] = [
  {
    id: 'dijital-baskili-kumaslar',
    title: 'Dijital Baskılı Kumaşlar',
    description: 'Yüksek çözünürlüklü desenler ve esnek metraj seçenekleri.',
    image: '/images/printed-fabric-new.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Pamuk / Polyester / Karışımlar',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Moda ve özel koleksiyonlar'],
    highlights: ['Yüksek çözünürlüklü desenler', 'Küçük ve büyük metrajlara uygun', 'Moda ve özel koleksiyonlar'],
  },
  {
    id: 'reaktif-baskili-pamuk-kumaslar',
    title: 'Reaktif Baskılı Pamuk Kumaşlar',
    description: 'Canlı ve kalıcı renkler ile yumuşak tuşe sunar.',
    image: '/images/printing-service.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: '%100 Pamuk',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Günlük ve premium giyim'],
    highlights: ['Canlı ve kalıcı renkler', 'Yumuşak tuşe', 'Günlük ve premium giyim'],
  },
  {
    id: 'pigment-baskili-kumaslar',
    title: 'Pigment Baskılı Kumaşlar',
    description: 'Ekonomik, mat yüzeyli ve seri üretime uygun baskılar.',
    image: '/images/woven-fabric.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Pamuk / Karışımlar',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Seri üretim'],
    highlights: ['Ekonomik üretim', 'Mat yüzey', 'Seri üretime uygun'],
  },
  {
    id: 'dispers-baskili-polyester-kumaslar',
    title: 'Dispers Baskılı Polyester Kumaşlar',
    description: 'Yüksek yıkama dayanımı ile spor/aktif giyim için ideal.',
    image: '/images/knitted-fabric.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: '%100 Polyester',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Spor ve aktif giyim'],
    highlights: ['Yüksek yıkama dayanımı', 'Spor ve aktif giyim', 'Sentetik bazlı ürünler'],
  },
  {
    id: 'transfer-baskili-kumaslar',
    title: 'Transfer Baskılı Kumaşlar',
    description: 'Isı transfer teknolojisi ile net ve detaylı desenler.',
    image: '/images/hero-factory.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Moda ve promosyon ürünleri'],
    highlights: ['Net ve detaylı desen', 'Isı transfer teknolojisi', 'Moda ve promosyon ürünleri'],
  },
  {
    id: 'sublimasyon-baskili-kumaslar',
    title: 'Sublimasyon Baskılı Kumaşlar',
    description: 'Renklerin kumaşın içine işlendiği, solmaya dayanıklı baskı.',
    image: '/images/hero-bg.png',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Polyester bazlı',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Spor giyim ve teknik tekstil'],
    highlights: ['Renkler kumaşın içine işler', 'Solma yapmaz', 'Spor giyim ve teknik tekstil'],
  },
  {
    id: 'metraj-baskili-kumaslar',
    title: 'Metraj Baskılı Kumaşlar',
    description: 'Marka bazlı ve koleksiyon üretimine uygun özel metraj baskılar.',
    image: '/images/printed-fabric-new.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Koleksiyon üretimi'],
    highlights: ['Özel desen çalışmaları', 'Marka bazlı üretim', 'Koleksiyon üretimi'],
  },
  {
    id: 'ozel-tasarim-baskili-kumaslar',
    title: 'Özel Tasarım Baskılı Kumaşlar',
    description: 'Müşteriye özel desenlerle düşük adet-yüksek kalite üretim.',
    image: '/images/printing-service.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Düşük adet – projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Marka kimliğine uygun üretim'],
    highlights: ['Müşteriye özel desen', 'Düşük adet – yüksek kalite', 'Marka kimliğine uygun üretim'],
  },
  {
    id: 'logo-kurumsal-baskili-kumaslar',
    title: 'Logo & Kurumsal Baskılı Kumaşlar',
    description: 'Firma logolu üretimler ve kurumsal tekstil çözümleri.',
    image: '/images/woven-fabric.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Kurumsal tekstil çözümleri'],
    highlights: ['Firma logolu üretim', 'Üniforma ve iş kıyafeti', 'Kurumsal tekstil çözümleri'],
  },
  {
    id: 'desenli-orme-baskili-kumaslar',
    title: 'Desenli Örme Baskılı Kumaşlar',
    description: 'Süprem/interlock/rib bazlı, esnek yapıda desenli baskılar.',
    image: '/images/knitted-fabric.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Örme bazlı (projeye göre)',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Günlük ve spor giyim'],
    highlights: ['Süprem, interlock, rib bazlı', 'Esnek yapı', 'Günlük ve spor giyim'],
  },
  {
    id: 'desenli-dokuma-baskili-kumaslar',
    title: 'Desenli Dokuma Baskılı Kumaşlar',
    description: 'Poplin/saten/vual bazlı, akışkan ve şık görünümlü baskılar.',
    image: '/images/woven-fabric.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Dokuma bazlı (projeye göre)',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Elbise ve gömleklik'],
    highlights: ['Poplin, saten, vual bazlı', 'Akışkan ve şık görünüm', 'Elbise ve gömleklik'],
  },
  {
    id: 'cocuk-bebek-baskili-kumaslar',
    title: 'Çocuk & Bebek Baskılı Kumaşlar',
    description: 'Sağlığa uygun boyalar ve yumuşak dokulu güvenli üretim.',
    image: '/images/printed-fabric-new.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Pamuk / Karışımlar',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Çocuk ve bebek koleksiyonları'],
    highlights: ['Sağlığa uygun boyalar', 'Yumuşak dokulu', 'Güvenli üretim'],
  },
  {
    id: 'sezonluk-koleksiyon-baskilari',
    title: 'Sezonluk Koleksiyon Baskıları',
    description: 'Trend odaklı desenlerle sezon bazlı hızlı üretim.',
    image: '/images/hero-factory.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: 'Hızlı üretim',
    },
    usageAreas: ['İlkbahar / Yaz – Sonbahar / Kış'],
    highlights: ['Trend odaklı desenler', 'İlkbahar / Yaz – Sonbahar / Kış', 'Hızlı üretim'],
  },
  {
    id: 'etnik-geleneksel-desen-baskilari',
    title: 'Etnik & Geleneksel Desen Baskıları',
    description: 'Kültürel motifler ve özgün tasarımlar ile özel koleksiyonlar.',
    image: '/images/printing-service.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Özel koleksiyonlar'],
    highlights: ['Kültürel motifler', 'Özgün tasarımlar', 'Özel koleksiyonlar'],
  },
  {
    id: 'minimal-geometrik-desen-baskilari',
    title: 'Minimal & Geometrik Desen Baskıları',
    description: 'Modern tasarım dili ve zamansız desenler ile premium koleksiyonlar.',
    image: '/images/printed-fabric-new.jpg',
    specs: {
      grammage: 'Projeye göre',
      width: 'Projeye göre',
      composition: 'Projeye göre',
      minOrder: 'Projeye göre',
      leadTime: '7 - 14 Gün',
    },
    usageAreas: ['Premium markalar için'],
    highlights: ['Modern tasarım dili', 'Zamansız desenler', 'Premium markalar için'],
  },
];
