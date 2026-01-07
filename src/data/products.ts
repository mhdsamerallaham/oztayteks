export interface ProductDetail {
    id: string;
    nameKey: string;
    descKey: string;
    image: string;
    specs: {
        grammage: string;
        width: string;
        composition: string;
        minOrder: string;
        leadTime: string;
    };
    category: 'weft' | 'functional' | 'warp' | 'classic' | 'specialty' | 'luxury' | 'utility' | 'modern';
    usageAreas: string[];
    advantages: string[];
}

export const KNITTED_PRODUCTS: ProductDetail[] = [
    // Weft
    {
        id: 'suprem',
        nameKey: 'products.knitted_fabrics.items.suprem.name',
        descKey: 'products.knitted_fabrics.items.suprem.desc',
        image: "/images/ürünler/Süprem (Single Jersey) örme.jpg",
        category: 'weft',
        specs: {
            grammage: '120 - 200 gsm',
            width: '150 - 180 cm',
            composition: '%100 Pamuk veya Pamuk/Viskon Karışımları',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['T-shirt', 'İç Giyim', 'Bebek Giyim', 'Pijama', 'Ev Giyim'],
        advantages: ['Yumuşak ve Rahat', 'Nefes Alabilir', 'Kolay Bakım', 'Ekonomik', 'Çok Yönlü Kullanım']
    },
    {
        id: 'lycra_suprem',
        nameKey: 'products.knitted_fabrics.items.lycra_suprem.name',
        descKey: 'products.knitted_fabrics.items.lycra_suprem.desc',
        image: "/images/ürünler/likrali-suprem-orme.jpg",
        category: 'weft',
        specs: {
            grammage: '160 - 240 gsm',
            width: '160 - 190 cm',
            composition: '%95 Pamuk %5 Elastan',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Spor Giyim', 'Tayt', 'Body', 'Dar Kesim Giysiler', 'Aktif Giyim'],
        advantages: ['Mükemmel Esneklik', 'Vücut Hatlarına Uyum', 'Şekil Koruma', 'Dayanıklı', 'Konforlu']
    },
    {
        id: 'rib',
        nameKey: 'products.knitted_fabrics.items.rib.name',
        descKey: 'products.knitted_fabrics.items.rib.desc',
        image: "/images/ürünler/rib-ribana-orme.jpg",
        category: 'weft',
        specs: {
            grammage: '180 - 300 gsm',
            width: '100 - 120 cm (Tüp)',
            composition: '%100 Pamuk / Pamuk-Elastan',
            minOrder: '200 kg',
            leadTime: '7 - 10 Gün'
        },
        usageAreas: ['Yaka ve Manşet', 'Bel Lastikleri', 'İç Giyim', 'Bere', 'Atkı'],
        advantages: ['Yüksek Esneklik', 'Şekil Hafızası', 'Dayanıklı', 'Çift Yönlü Streç', 'Çok Amaçlı']
    },
    {
        id: 'kaşkorse',
        nameKey: 'products.knitted_fabrics.items.kaşkorse.name',
        descKey: 'products.knitted_fabrics.items.kaşkorse.desc',
        image: "/images/ürünler/kaskorse-2x2-rib-orme.jpg",
        category: 'weft',
        specs: {
            grammage: '200 - 350 gsm',
            width: '110 - 130 cm',
            composition: 'Pamuk / Viskon / Polyester Karışımları',
            minOrder: '200 kg',
            leadTime: '7 - 10 Gün'
        },
        usageAreas: ['Sweatshirt', 'Eşofman', 'Spor Giyim', 'Kazak', 'Kapüşonlu Giysiler'],
        advantages: ['Kalın ve Sıcak', 'Hacimli Görünüm', 'Yüksek Dayanıklılık', 'Şık Doku', 'Mevsimlik']
    },
    {
        id: 'interlok',
        nameKey: 'products.knitted_fabrics.items.interlok.name',
        descKey: 'products.knitted_fabrics.items.interlok.desc',
        image: "/images/ürünler/interlok-orme.jpg",
        category: 'weft',
        specs: {
            grammage: '200 - 280 gsm',
            width: '150 - 180 cm',
            composition: '%100 Pamuk',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Polo T-shirt', 'Günlük Giyim', 'Çocuk Giyim', 'İş Kıyafetleri', 'Ev Tekstili'],
        advantages: ['Çift Yüzlü Yapı', 'Yumuşak Tuşe', 'Boyut Stabilitesi', 'Dayanıklı', 'Premium Görünüm']
    },
    {
        id: 'pike',
        nameKey: 'products.knitted_fabrics.items.pike.name',
        descKey: 'products.knitted_fabrics.items.pike.desc',
        image: "/images/ürünler/pike-orme.jpg",
        category: 'weft',
        specs: {
            grammage: '170 - 250 gsm',
            width: '170 - 200 cm',
            composition: '%100 Pamuk / Lakost Örgü',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Polo Yaka T-shirt', 'Spor Giyim', 'Günlük Giyim', 'Okul Üniformaları', 'Kurumsal Giyim'],
        advantages: ['Klasik Pike Dokusu', 'Hava Geçirgenliği', 'Şık Görünüm', 'Kolay Ütüleme', 'Uzun Ömürlü']
    },
    // Functional
    {
        id: 'french_terry',
        nameKey: 'products.knitted_fabrics.items.french_terry.name',
        descKey: 'products.knitted_fabrics.items.french_terry.desc',
        image: "/images/ürünler/french-terry-uc-ipik-orme.jpg",
        category: 'functional',
        specs: {
            grammage: '200 - 280 gsm',
            width: '170 - 190 cm',
            composition: 'Pamuk / Polyester Karışımları',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Sweatshirt', 'Eşofman', 'Kapüşonlu Giysiler', 'Spor Giyim', 'Günlük Giyim'],
        advantages: ['Yumuşak İç Yüzey', 'Sıcak Tutucu', 'Ter Emici', 'Rahat', 'Çok Yönlü']
    },
    {
        id: 'two_thread',
        nameKey: 'products.knitted_fabrics.items.two_thread.name',
        descKey: 'products.knitted_fabrics.items.two_thread.desc',
        image: "/images/ürünler/iki-ipik-orme.jpg",
        category: 'functional',
        specs: {
            grammage: '280 - 380 gsm',
            width: '180 - 200 cm',
            composition: 'Pamuk / Polyester / Şardon Opsiyonlu',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Kış Sweatshirt', 'Kalın Eşofman', 'Outdoor Giyim', 'Kapüşonlu Ceketler', 'Spor Giyim'],
        advantages: ['Ekstra Kalın', 'Yüksek Sıcaklık İzolasyonu', 'Şardon Opsiyonu', 'Dayanıklı', 'Premium Kalite']
    },
    {
        id: 'polar',
        nameKey: 'products.knitted_fabrics.items.polar.name',
        descKey: 'products.knitted_fabrics.items.polar.desc',
        image: "/images/ürünler/polar-orme.jpg",
        category: 'functional',
        specs: {
            grammage: '220 - 350 gsm',
            width: '150 - 180 cm',
            composition: '%100 Polyester (Mikro)',
            minOrder: '500 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Mont Astarı', 'Polar Ceketler', 'Battaniye', 'Outdoor Giyim', 'Kış Aksesuarları'],
        advantages: ['Yüksek Isı Yalıtımı', 'Hafif', 'Hızlı Kuruyan', 'Anti-Pilling', 'Ekonomik']
    },
    {
        id: 'scuba',
        nameKey: 'products.knitted_fabrics.items.scuba.name',
        descKey: 'products.knitted_fabrics.items.scuba.desc',
        image: "/images/ürünler/scuba-dalgic-kumas-orme.jpeg",
        category: 'functional',
        specs: {
            grammage: '250 - 450 gsm',
            width: '150 - 160 cm',
            composition: 'Polyester / Elastan Karışımı',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Elbise', 'Etek', 'Ceket', 'Pantolon', 'Spor Giyim'],
        advantages: ['Kalın ve Sağlam Yapı', 'Mükemmel Şekil Tutma', 'Kırışmaz', 'Esneklik', 'Modern Görünüm']
    },
    {
        id: 'punto_roma',
        nameKey: 'products.knitted_fabrics.items.punto_roma.name',
        descKey: 'products.knitted_fabrics.items.punto_roma.desc',
        image: "/images/ürünler/punto-roma-orme.jpeg",
        category: 'functional',
        specs: {
            grammage: '280 - 400 gsm',
            width: '150 - 170 cm',
            composition: 'Viskon / Naylon / Elastan',
            minOrder: '300 kg',
            leadTime: '14 Gün'
        },
        usageAreas: ['Elbise', 'Pantolon', 'Ceket', 'Etek', 'Ofis Giyim'],
        advantages: ['Premium Kalite', 'Mükemmel Drapaj', 'Kırışmaz', 'Şık ve Zarif', 'Çift Yönlü Streç']
    },
    // Warp
    {
        id: 'raschel',
        nameKey: 'products.knitted_fabrics.items.raschel.name',
        descKey: 'products.knitted_fabrics.items.raschel.desc',
        image: "/images/ürünler/rashel-orme.jpg",
        category: 'warp',
        specs: {
            grammage: '80 - 250 gsm',
            width: '150 - 300 cm',
            composition: '%100 Polyester / File Örgü',
            minOrder: '500 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Dantel', 'Tül', 'Perde', 'Dekoratif Tekstil', 'Özel Tasarım Giysiler'],
        advantages: ['Hafif ve Havadar', 'Geniş Desen Seçenekleri', 'Dayanıklı', 'Dekoratif', 'Çok Amaçlı']
    },
    {
        id: 'tricot',
        nameKey: 'products.knitted_fabrics.items.tricot.name',
        descKey: 'products.knitted_fabrics.items.tricot.desc',
        image: "/images/ürünler/trikot-orme.jpg",
        category: 'warp',
        specs: {
            grammage: '150 - 400 gsm',
            width: '150 - 180 cm',
            composition: 'Akrilik / Yün / Pamuk Karışımları',
            minOrder: '200 kg',
            leadTime: '14 Gün'
        },
        usageAreas: ['Kazak', 'Hırka', 'Atkı', 'Bere', 'Kış Giyim'],
        advantages: ['Yumuşak Tuşe', 'Sıcak Tutucu', 'Yün Görünümü', 'Ekonomik', 'Kolay Bakım']
    }
];

// Available images from the ürünler folder
const AVAILABLE_IMAGES = [
    "/images/ürünler/french-terry-uc-ipik-orme.jpg",
    "/images/ürünler/kaskorse-2x2-rib-orme.jpg",
    "/images/ürünler/likrali-suprem-orme.jpg",
    "/images/ürünler/pike-orme.jpg",
    "/images/ürünler/punto-roma-orme.jpeg",
    "/images/ürünler/rashel-orme.jpg",
    "/images/ürünler/rib-ribana-orme.jpg",
];

// Function to get random image for woven products
function getRandomImage(): string {
    return AVAILABLE_IMAGES[Math.floor(Math.random() * AVAILABLE_IMAGES.length)];
}

export const WOVEN_PRODUCTS: ProductDetail[] = [
    // Classic Weaves
    {
        id: 'poplin',
        nameKey: 'products.woven_fabrics.items.poplin.name',
        descKey: 'products.woven_fabrics.items.poplin.desc',
        image: getRandomImage(),
        category: 'classic',
        specs: {
            grammage: '80 - 140 gsm',
            width: '140 - 160 cm',
            composition: '%100 Pamuk / Pamuk Karışımları',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Gömlek', 'Elbise', 'Bluz', 'Çocuk Giyim', 'Ev Tekstili'],
        advantages: ['İnce ve Sık Dokulu', 'Nefes Alabilir', 'Kolay Ütülenir', 'Dayanıklı', 'Çok Yönlü']
    },
    {
        id: 'gabardin',
        nameKey: 'products.woven_fabrics.items.gabardin.name',
        descKey: 'products.woven_fabrics.items.gabardin.desc',
        image: getRandomImage(),
        category: 'classic',
        specs: {
            grammage: '200 - 350 gsm',
            width: '140 - 160 cm',
            composition: 'Pamuk / Polyester / Yün Karışımları',
            minOrder: '300 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Pantolon', 'Ceket', 'İş Kıyafetleri', 'Üniforma', 'Resmi Giyim'],
        advantages: ['Diyagonal Dokulu', 'Dayanıklı ve Tok', 'Kırışmaya Dayanıklı', 'Profesyonel Görünüm', 'Uzun Ömürlü']
    },
    {
        id: 'twill',
        nameKey: 'products.woven_fabrics.items.twill.name',
        descKey: 'products.woven_fabrics.items.twill.desc',
        image: getRandomImage(),
        category: 'classic',
        specs: {
            grammage: '180 - 300 gsm',
            width: '140 - 160 cm',
            composition: 'Pamuk / Pamuk-Polyester Karışımı',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Pantolon', 'Mont', 'Üniforma', 'İş Elbiseleri', 'Outdoor Giyim'],
        advantages: ['Çapraz Örgü', 'Kırışmaya Dayanıklı', 'Sağlam Yapı', 'Kolay Bakım', 'Çok Amaçlı']
    },
    {
        id: 'saten',
        nameKey: 'products.woven_fabrics.items.saten.name',
        descKey: 'products.woven_fabrics.items.saten.desc',
        image: getRandomImage(),
        category: 'luxury',
        specs: {
            grammage: '90 - 150 gsm',
            width: '140 - 150 cm',
            composition: 'Polyester / Viskon / İpek Karışımları',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Abiye', 'Elbise', 'Astar', 'Gece Kıyafetleri', 'Dekoratif Tekstil'],
        advantages: ['Pürüzsüz ve Parlak', 'Lüks Görünüm', 'Akışkan Drapaj', 'Zarif', 'Premium Hissiyat']
    },
    {
        id: 'oxford',
        nameKey: 'products.woven_fabrics.items.oxford.name',
        descKey: 'products.woven_fabrics.items.oxford.desc',
        image: getRandomImage(),
        category: 'classic',
        specs: {
            grammage: '120 - 180 gsm',
            width: '140 - 160 cm',
            composition: '%100 Pamuk / Pamuk-Polyester',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Gömlek', 'Günlük Giyim', 'İş Kıyafetleri', 'Okul Üniforması', 'Casual Wear'],
        advantages: ['Sepet Dokuma', 'Dayanıklı', 'Nefes Alabilir', 'Klasik Görünüm', 'Kolay Bakım']
    },
    // Specialty
    {
        id: 'vual',
        nameKey: 'products.woven_fabrics.items.vual.name',
        descKey: 'products.woven_fabrics.items.vual.desc',
        image: getRandomImage(),
        category: 'specialty',
        specs: {
            grammage: '60 - 100 gsm',
            width: '140 - 150 cm',
            composition: 'Pamuk / Viskon / Polyester',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Yazlık Gömlek', 'Bluz', 'Elbise', 'Fular', 'Hafif Giysiler'],
        advantages: ['Çok Hafif', 'Nefes Alabilir', 'İnce Dokuma', 'Şeffaf Görünüm', 'Serin Tutar']
    },
    {
        id: 'denim',
        nameKey: 'products.woven_fabrics.items.denim.name',
        descKey: 'products.woven_fabrics.items.denim.desc',
        image: getRandomImage(),
        category: 'specialty',
        specs: {
            grammage: '280 - 450 gsm',
            width: '140 - 160 cm',
            composition: '%100 Pamuk / Pamuk-Elastan',
            minOrder: '500 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Kot Pantolon', 'Ceket', 'Gömlek', 'Etek', 'Çanta'],
        advantages: ['Kalın ve Dayanıklı', 'İndigo Boyalı', 'Klasik Stil', 'Uzun Ömürlü', 'Çok Popüler']
    },
    {
        id: 'flanel',
        nameKey: 'products.woven_fabrics.items.flanel.name',
        descKey: 'products.woven_fabrics.items.flanel.desc',
        image: getRandomImage(),
        category: 'specialty',
        specs: {
            grammage: '150 - 220 gsm',
            width: '140 - 160 cm',
            composition: 'Pamuk / Pamuk Karışımları',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Gömlek', 'Pijama', 'Ev Giyim', 'Çocuk Giyim', 'Kış Giysileri'],
        advantages: ['Yumuşak', 'Hafif Tüylü', 'Sıcak Tutar', 'Konforlu', 'Rahat']
    },
    {
        id: 'keten',
        nameKey: 'products.woven_fabrics.items.keten.name',
        descKey: 'products.woven_fabrics.items.keten.desc',
        image: getRandomImage(),
        category: 'specialty',
        specs: {
            grammage: '120 - 250 gsm',
            width: '140 - 150 cm',
            composition: '%100 Keten / Keten Karışımları',
            minOrder: '200 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Yazlık Giyim', 'Elbise', 'Pantolon', 'Gömlek', 'Ev Tekstili'],
        advantages: ['Doğal Lif', 'Nefes Alabilir', 'Serin Tutar', 'Çevre Dostu', 'Premium Kalite']
    },
    {
        id: 'sifon',
        nameKey: 'products.woven_fabrics.items.sifon.name',
        descKey: 'products.woven_fabrics.items.sifon.desc',
        image: getRandomImage(),
        category: 'luxury',
        specs: {
            grammage: '50 - 80 gsm',
            width: '140 - 150 cm',
            composition: 'Polyester / İpek / Viskon',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Elbise', 'Bluz', 'Fular', 'Abiye', 'Şal'],
        advantages: ['İnce ve Şeffaf', 'Akışkan', 'Zarif Drapaj', 'Hafif', 'Şık Görünüm']
    },
    // Luxury
    {
        id: 'tafta',
        nameKey: 'products.woven_fabrics.items.tafta.name',
        descKey: 'products.woven_fabrics.items.tafta.desc',
        image: getRandomImage(),
        category: 'luxury',
        specs: {
            grammage: '100 - 150 gsm',
            width: '140 - 150 cm',
            composition: 'Polyester / İpek / Viskon',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Abiye', 'Gece Kıyafetleri', 'Dekoratif Tekstil', 'Özel Günler', 'Düğün'],
        advantages: ['Sert ve Parlak', 'Tok Duruş', 'Lüks Hissiyat', 'Hacimli Görünüm', 'Premium']
    },
    {
        id: 'kadife',
        nameKey: 'products.woven_fabrics.items.kadife.name',
        descKey: 'products.woven_fabrics.items.kadife.desc',
        image: getRandomImage(),
        category: 'luxury',
        specs: {
            grammage: '200 - 400 gsm',
            width: '140 - 150 cm',
            composition: 'Pamuk / Polyester / Viskon',
            minOrder: '300 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Ceket', 'Elbise', 'Döşemelik', 'Perde', 'Lüks Giyim'],
        advantages: ['Havlı Yüzey', 'Yumuşak ve Lüks', 'Zengin Görünüm', 'Sıcak Tutar', 'Premium Kalite']
    },
    {
        id: 'krep',
        nameKey: 'products.woven_fabrics.items.krep.name',
        descKey: 'products.woven_fabrics.items.krep.desc',
        image: getRandomImage(),
        category: 'luxury',
        specs: {
            grammage: '90 - 150 gsm',
            width: '140 - 150 cm',
            composition: 'Polyester / Viskon / İpek Karışımları',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Elbise', 'Tunik', 'Bluz', 'Etek', 'Şık Giyim'],
        advantages: ['Hafif Buruşuk Yüzey', 'Akışkan', 'Zarif', 'Kolay Drapaj', 'Şık']
    },
    // Utility
    {
        id: 'panama',
        nameKey: 'products.woven_fabrics.items.panama.name',
        descKey: 'products.woven_fabrics.items.panama.desc',
        image: getRandomImage(),
        category: 'utility',
        specs: {
            grammage: '250 - 400 gsm',
            width: '140 - 160 cm',
            composition: 'Pamuk / Polyester / Keten Karışımları',
            minOrder: '300 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Ceket', 'Döşemelik', 'Çanta', 'Ev Tekstili', 'Dekoratif'],
        advantages: ['Kalın ve Açık Dokuma', 'Dayanıklı', 'Sağlam Yapı', 'Çok Amaçlı', 'Uzun Ömürlü']
    },
    {
        id: 'kanvas',
        nameKey: 'products.woven_fabrics.items.kanvas.name',
        descKey: 'products.woven_fabrics.items.kanvas.desc',
        image: getRandomImage(),
        category: 'utility',
        specs: {
            grammage: '300 - 600 gsm',
            width: '140 - 160 cm',
            composition: '%100 Pamuk / Pamuk-Polyester',
            minOrder: '500 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Çanta', 'İş Kıyafeti', 'Outdoor', 'Ayakkabı', 'Endüstriyel Kullanım'],
        advantages: ['Çok Dayanıklı', 'Kalın Dokuma', 'Yıpranmaya Karşı Dirençli', 'Sağlam', 'Ağır Hizmet']
    },
    {
        id: 'sambre',
        nameKey: 'products.woven_fabrics.items.sambre.name',
        descKey: 'products.woven_fabrics.items.sambre.desc',
        image: getRandomImage(),
        category: 'classic',
        specs: {
            grammage: '100 - 150 gsm',
            width: '140 - 160 cm',
            composition: '%100 Pamuk',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Günlük Giyim', 'Gömlek', 'Elbise', 'Çocuk Giyim', 'Casual Wear'],
        advantages: ['Denim Benzeri', 'Hafif', 'Rahat', 'Nefes Alabilir', 'Günlük Kullanım']
    },
    // Modern
    {
        id: 'tencel',
        nameKey: 'products.woven_fabrics.items.tencel.name',
        descKey: 'products.woven_fabrics.items.tencel.desc',
        image: getRandomImage(),
        category: 'modern',
        specs: {
            grammage: '100 - 180 gsm',
            width: '140 - 150 cm',
            composition: '%100 Tencel / Tencel Karışımları',
            minOrder: '200 kg',
            leadTime: '14 - 21 Gün'
        },
        usageAreas: ['Premium Giyim', 'Elbise', 'Gömlek', 'Bluz', 'Lüks Casual'],
        advantages: ['Doğal ve Çevreci', 'Yumuşak Yüzey', 'Nefes Alabilir', 'Sürdürülebilir', 'Premium Kalite']
    },
    {
        id: 'viskon',
        nameKey: 'products.woven_fabrics.items.viskon.name',
        descKey: 'products.woven_fabrics.items.viskon.desc',
        image: getRandomImage(),
        category: 'modern',
        specs: {
            grammage: '90 - 160 gsm',
            width: '140 - 150 cm',
            composition: '%100 Viskon / Viskon Karışımları',
            minOrder: '200 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Elbise', 'Bluz', 'Etek', 'Tunik', 'Yazlık Giyim'],
        advantages: ['Akışkan', 'Serin Tutar', 'Yumuşak Tuşe', 'Parlak Görünüm', 'Rahat']
    },
    {
        id: 'polyester',
        nameKey: 'products.woven_fabrics.items.polyester.name',
        descKey: 'products.woven_fabrics.items.polyester.desc',
        image: getRandomImage(),
        category: 'modern',
        specs: {
            grammage: '100 - 250 gsm',
            width: '140 - 160 cm',
            composition: '%100 Polyester / Polyester Karışımları',
            minOrder: '300 kg',
            leadTime: '10 - 14 Gün'
        },
        usageAreas: ['Üniforma', 'İş Kıyafeti', 'Spor Giyim', 'Outdoor', 'Fonksiyonel Giyim'],
        advantages: ['Kırışmaya Dayanıklı', 'Kolay Bakım', 'Hızlı Kuruyan', 'Ekonomik', 'Dayanıklı']
    },
    {
        id: 'astar',
        nameKey: 'products.woven_fabrics.items.astar.name',
        descKey: 'products.woven_fabrics.items.astar.desc',
        image: getRandomImage(),
        category: 'modern',
        specs: {
            grammage: '60 - 100 gsm',
            width: '140 - 150 cm',
            composition: 'Polyester / Viskon / Asetatlı',
            minOrder: '200 kg',
            leadTime: '7 - 10 Gün'
        },
        usageAreas: ['Ceket Astarı', 'Mont', 'Elbise İç Yüzey', 'Takım Elbise', 'Resmi Giyim'],
        advantages: ['İnce ve Kaygan', 'Kolay Giyilir', 'Dayanıklı', 'Ekonomik', 'Çok Amaçlı']
    }
];
