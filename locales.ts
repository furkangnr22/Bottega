import { CakeShape, CakeFlavor, FrostingType, Topping } from './types';

export type Language = 'en' | 'tr';

interface TranslationData {
  meta: { title: string; subtitle: string };
  nav: { order: string; ai: string; menu: string; contact: string };
  hero: {
    tag: string;
    titleStart: string;
    titleEnd: string;
    description: string;
    startBtn: string;
    aiBtn: string;
    orders: string;
    rating: string;
    chefChoice: string;
    chefQuote: string;
  };
  builder: {
    title: string;
    steps: string[];
    shapeTitle: string;
    sizeTitle: string;
    serves: string;
    basePrice: string;
    multiplier: string;
    frostingType: string;
    palette: string;
    toppings: string;
    personalization: string;
    msgPlaceholder: string;
    instrPlaceholder: string;
    back: string;
    next: string;
    review: string;
  };
  ai: {
    title: string;
    desc: string;
    label: string;
    placeholder: string;
    btnDreaming: string;
    btnVisualize: string;
    error: string;
    connError: string;
    conceptTitle: string;
    useBtn: string;
    disclaimer: string;
    backHome: string;
  };
  summary: {
    receivedTitle: string;
    receivedDesc: string;
    orderNum: string;
    saveMsg: string;
    newOrder: string;
    creationTitle: string;
    edit: string;
    shapeSize: string;
    flavor: string;
    frosting: string;
    toppings: string;
    total: string;
    contactTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    addrLabel: string;
    addrPlaceholder: string;
    placeOrder: string;
    terms: string;
    backEdit: string;
  };
  data: {
    shapes: Record<string, string>;
    flavors: Record<string, { name: string; desc: string }>;
    frostings: Record<string, string>;
    toppings: Record<string, string>;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    meta: {
      title: "Bottega Cakes",
      subtitle: "Artisan Pâtisserie"
    },
    nav: {
      order: "Order Now",
      ai: "AI Visualizer",
      menu: "Menu",
      contact: "Contact"
    },
    hero: {
      tag: "Premium Pâtisserie",
      titleStart: "Sweet Dreams",
      titleEnd: "Baked Reality",
      description: "Craft your bespoke cake masterpiece online. From classic vanilla to avant-garde designs, we bring your sweet imagination to life.",
      startBtn: "Start Custom Order",
      aiBtn: "AI Cake Visualizer",
      orders: "Orders Delivered",
      rating: "Average Rating",
      chefChoice: "Chef's Choice",
      chefQuote: "The Lemon Elderflower with Swiss Buttercream is divine this season."
    },
    builder: {
        title: "Build Your Masterpiece",
        steps: ["Base", "Flavor", "Frosting", "Decor"],
        shapeTitle: "Choose Shape",
        sizeTitle: "Choose Size",
        serves: "Serves approx. {n} people",
        basePrice: "Standard Price",
        multiplier: "x{n} base price",
        frostingType: "Frosting Type",
        palette: "Palette",
        toppings: "Add Toppings",
        personalization: "Personalization",
        msgPlaceholder: "Message on cake (e.g., Happy Birthday Mom)",
        instrPlaceholder: "Any special instructions or allergies?",
        back: "Back",
        next: "Next Step",
        review: "Review Order"
    },
    ai: {
        title: "Dream Cake Visualizer",
        desc: "Describe your dream cake, and our AI will sketch a concept for you. Use this to inspire your custom order!",
        label: "Describe your vision",
        placeholder: "e.g., A three-tier wedding cake with navy blue fondant, gold geometric lines, and white orchids cascading down the side.",
        btnDreaming: "Dreaming...",
        btnVisualize: "Visualize Cake",
        error: "Could not generate an image. Please try again.",
        connError: "An error occurred while connecting to the design studio.",
        conceptTitle: "Your Concept",
        useBtn: "Use This Inspiration",
        disclaimer: "* This is an AI-generated concept. Actual cake design may vary based on structural integrity and ingredients.",
        backHome: "← Back to Home"
    },
    summary: {
        receivedTitle: "Order Received!",
        receivedDesc: "Thank you, {name}. Your dream cake is now in our queue. We will contact you at {phone} to confirm the pickup details.",
        orderNum: "Order #",
        saveMsg: "Please save this number for your records.",
        newOrder: "Start New Order",
        creationTitle: "Your Creation",
        edit: "Edit",
        shapeSize: "Shape & Size",
        flavor: "Flavor",
        frosting: "Frosting",
        toppings: "Toppings",
        total: "Estimated Total",
        contactTitle: "Contact Details",
        nameLabel: "Full Name",
        namePlaceholder: "Jane Doe",
        phoneLabel: "Phone Number",
        phonePlaceholder: "(555) 123-4567",
        addrLabel: "Delivery/Pickup Address",
        addrPlaceholder: "123 Bakery Lane...",
        placeOrder: "Place Order",
        terms: "By placing this order, you agree to our sweet terms and conditions.",
        backEdit: "← Back to Editing"
    },
    data: {
        shapes: {
            round: "Classic Round",
            square: "Modern Square",
            heart: "Heart Shape",
            tiered: "Two Tier"
        },
        flavors: {
            vanilla: { name: "Madagascan Vanilla", desc: "Light, fluffy sponge with real vanilla bean." },
            chocolate: { name: "Belgian Chocolate", desc: "Rich, moist dark chocolate fudge cake." },
            red_velvet: { name: "Red Velvet", desc: "Classic crimson cocoa cake with buttermilk." },
            lemon: { name: "Zesty Lemon", desc: "Fresh lemon zest sponge with poppy seeds." },
            carrot: { name: "Spiced Carrot", desc: "Moist carrot cake with walnuts and cinnamon." }
        },
        frostings: {
            buttercream: "Swiss Meringue Buttercream",
            fondant: "Smooth Fondant Finish",
            ganache: "Dark Chocolate Ganache",
            naked: "Semi-Naked (Rustic)"
        },
        toppings: {
            berries: "Fresh Berries",
            macarons: "French Macarons",
            gold_leaf: "24k Gold Leaf",
            sprinkles_rainbow: "Rainbow Sprinkles",
            sprinkles_pearl: "Sugar Pearls",
            flowers: "Edible Flowers",
            drip: "Chocolate Drip"
        }
    }
  },
  tr: {
    meta: {
      title: "Bottega Cakes",
      subtitle: "Artisan Pastane"
    },
    nav: {
      order: "Sipariş Ver",
      ai: "Yapay Zeka Tasarım",
      menu: "Menü",
      contact: "İletişim"
    },
    hero: {
      tag: "Premium Pastane",
      titleStart: "Tatlı Rüyalar",
      titleEnd: "Gerçek Lezzetler",
      description: "Özel pasta şaheserinizi çevrimiçi tasarlayın. Klasik vanilyadan avangart tasarımlara, tatlı hayallerinizi hayata geçiriyoruz.",
      startBtn: "Sipariş Oluştur",
      aiBtn: "AI Pasta Tasarımcısı",
      orders: "Teslim Edilen",
      rating: "Ortalama Puan",
      chefChoice: "Şefin Seçimi",
      chefQuote: "İsviçre Kremalı Limonlu Mürver Çiçeği bu sezon muazzam."
    },
    builder: {
        title: "Şaheserinizi Yaratın",
        steps: ["Taban", "Aroma", "Kreman", "Dekor"],
        shapeTitle: "Şekil Seçin",
        sizeTitle: "Boyut Seçin",
        serves: "Yaklaşık {n} kişilik",
        basePrice: "Standart Fiyat",
        multiplier: "x{n} taban fiyat",
        frostingType: "Kreman Tipi",
        palette: "Renk Paleti",
        toppings: "Süsleme Ekle",
        personalization: "Kişiselleştirme",
        msgPlaceholder: "Pasta üzerindeki mesaj (örn. İyi ki Doğdun Anne)",
        instrPlaceholder: "Özel talimatlar veya alerjiler?",
        back: "Geri",
        next: "Sonraki",
        review: "Özeti İncele"
    },
    ai: {
        title: "Hayal Pasta Tasarımcısı",
        desc: "Hayalinizdeki pastayı tarif edin, yapay zeka sizin için tasarlasın. Bunu özel siparişiniz için ilham olarak kullanın!",
        label: "Hayalinizi tarif edin",
        placeholder: "örn. Lacivert şeker hamurlu, altın geometrik çizgili ve yanından sarkan beyaz orkideli üç katlı düğün pastası.",
        btnDreaming: "Hayal ediliyor...",
        btnVisualize: "Pastayı Tasarla",
        error: "Görüntü oluşturulamadı. Lütfen tekrar deneyin.",
        connError: "Tasarım stüdyosuna bağlanırken bir hata oluştu.",
        conceptTitle: "Konseptiniz",
        useBtn: "Bu Tasarımı Kullan",
        disclaimer: "* Bu yapay zeka tarafından oluşturulmuş bir konsepttir. Gerçek pasta tasarımı yapısal bütünlüğe ve malzemelere göre değişebilir.",
        backHome: "← Ana Sayfaya Dön"
    },
    summary: {
        receivedTitle: "Sipariş Alındı!",
        receivedDesc: "Teşekkürler, {name}. Hayalinizdeki pasta sıraya alındı. Teslimat detaylarını onaylamak için sizinle {phone} numarasından iletişime geçeceğiz.",
        orderNum: "Sipariş #",
        saveMsg: "Lütfen kayıtlarınız için bu numarayı saklayın.",
        newOrder: "Yeni Sipariş Başlat",
        creationTitle: "Tasarımınız",
        edit: "Düzenle",
        shapeSize: "Şekil & Boyut",
        flavor: "Aroma",
        frosting: "Kreman",
        toppings: "Süslemeler",
        total: "Tahmini Toplam",
        contactTitle: "İletişim Bilgileri",
        nameLabel: "Ad Soyad",
        namePlaceholder: "Ad Soyad",
        phoneLabel: "Telefon Numarası",
        phonePlaceholder: "0555 123 4567",
        addrLabel: "Teslimat/Alım Adresi",
        addrPlaceholder: "Pastane Sokak No:123...",
        placeOrder: "Siparişi Tamamla",
        terms: "Sipariş vererek tatlı şartlarımızı kabul etmiş olursunuz.",
        backEdit: "← Düzenlemeye Dön"
    },
    data: {
        shapes: {
            round: "Klasik Yuvarlak",
            square: "Modern Kare",
            heart: "Kalp Şekli",
            tiered: "İki Katlı"
        },
        flavors: {
            vanilla: { name: "Madagaskar Vanilyası", desc: "Gerçek vanilya çubuklu hafif sünger kek." },
            chocolate: { name: "Belçika Çikolatası", desc: "Zengin, nemli bitter çikolatalı kek." },
            red_velvet: { name: "Kırmızı Kadife", desc: "Klasik kırmızı kakao ve tereyağlı kek." },
            lemon: { name: "Limonlu", desc: "Haşhaş tohumlu taze limon kabuğu rendeli kek." },
            carrot: { name: "Baharatlı Havuç", desc: "Ceviz ve tarçınlı nemli havuçlu kek." }
        },
        frostings: {
            buttercream: "İsviçre Mereng Kreması",
            fondant: "Pürüzsüz Şeker Hamuru",
            ganache: "Bitter Çikolata Ganaj",
            naked: "Yarı Çıplak (Rustik)"
        },
        toppings: {
            berries: "Taze Meyveler",
            macarons: "Fransız Makaronları",
            gold_leaf: "24 Ayar Altın Yaprak",
            sprinkles_rainbow: "Gökkuşağı Şekerlemeleri",
            sprinkles_pearl: "Şeker İnciler",
            flowers: "Yenebilir Çiçekler",
            drip: "Çikolata Sosu"
        }
    }
  }
};
