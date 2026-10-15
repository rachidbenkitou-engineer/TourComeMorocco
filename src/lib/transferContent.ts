import type { Transfer } from "@/data/transfers";

export interface TransferFaq {
  question: string;
  answer: string;
}

export interface TransferContent {
  h1: string;
  intro: string[];
  includedTitle: string;
  included: string[];
  priceTitle: string;
  priceNote: string;
  faqTitle: string;
  faqs: TransferFaq[];
  labels: {
    distance: string;
    duration: string;
    from: string;
    perVehicle: string;
    sedan: string;
    van: string;
    luxuryVan: string;
    book: string;
    moreFrom: string;
    bookNow: string;
  };
}

export function getTransferContent(transfer: Transfer, locale: string): TransferContent {
  const isAirport = transfer.category === "airport";
  const km = transfer.distanceKm;
  const dur = transfer.duration;
  const sedanPrice = transfer.prices.sedan;
  const vanPrice = transfer.prices.van;
  const luxuryPrice = transfer.prices.luxuryVan;

  if (locale === "fr") {
    const dest = transfer.to.fr;
    return {
      h1: isAirport
        ? `Transfert privé de Marrakech à ${dest}`
        : `Transfert privé de Marrakech à ${dest}`,
      intro: [
        isAirport
          ? `Votre vol décollant de Marrakech vous emmène vers ${dest} ? Ou à l'inverse, vous atterrissez et devez rejoindre votre hôtel ? Avec Transfer Maroc, un chauffeur privé vous attend et vous conduit directement sur place — environ ${km} km, près de ${dur}, dans un véhicule récent et climatisé, sans arrêt partagé ni attente.`
          : `Voyagez de Marrakech à ${dest} en toute sérénité avec un chauffeur privé Transfer Maroc. La distance d'environ ${km} km se parcourt en près de ${dur} dans un véhicule récent et climatisé — sans arrêt partagé, sans compteur, sans surprise.`,
        `Votre chauffeur vous accueille à l'adresse de votre choix et vous conduit directement à destination. Le tarif est fixe et convenu à l'avance — à partir de ${sedanPrice} € — confirmé par WhatsApp en moins d'une heure.`,
        `Idéal pour les familles, les couples et les voyageurs d'affaires souhaitant un trajet Marrakech–${dest} confortable, ponctuel et discret. Disponible 24h/24, 7j/7.`,
      ],
      includedTitle: "Ce qui est inclus",
      included: [
        "Chauffeur privé professionnel et francophone/anglophone",
        "Véhicule récent et climatisé, eau offerte",
        isAirport ? "Suivi de vol et accueil personnalisé à l'arrivée" : "Prise en charge à votre adresse",
        "Prix fixe tout compris, sans frais cachés",
        "Siège enfant sur demande",
        "Assistance 24/7 sur WhatsApp",
      ],
      priceTitle: "Tarifs par véhicule",
      priceNote: `Tarifs indicatifs pour le trajet Marrakech → ${dest}. Confirmez votre prix exact sur WhatsApp.`,
      faqTitle: "Questions fréquentes",
      faqs: [
        {
          question: `Combien coûte un transfert de Marrakech à ${dest} ?`,
          answer: `Le tarif privé commence à ${sedanPrice} € en SUV 4×4 (Škoda Kodiaq). Comptez environ ${vanPrice} € pour un van (Ford Tourneo) et ${luxuryPrice} € pour un luxury van (Mercedes-Benz Vito). Le prix est fixe et confirmé avant le départ.`,
        },
        {
          question: `Combien de temps dure le trajet Marrakech – ${dest} ?`,
          answer: `Le trajet couvre environ ${km} km et dure généralement autour de ${dur}, selon la circulation et vos éventuels arrêts en route.`,
        },
        {
          question: isAirport ? "Le chauffeur suit-il mon vol ?" : "Où se fera la prise en charge ?",
          answer: isAirport
            ? "Oui. Nous suivons votre numéro de vol et ajustons l'heure de prise en charge en cas de retard, sans frais supplémentaire."
            : "Votre chauffeur vient vous chercher directement à l'adresse de votre choix — hôtel, riad, aéroport ou gare. Précisez l'adresse lors de votre réservation.",
        },
        {
          question: "Comment réserver ?",
          answer: "Remplissez le formulaire ci-contre ou envoyez-nous un message WhatsApp. Nous confirmons la disponibilité et le prix fixe en moins d'une heure.",
        },
      ],
      labels: {
        distance: "Distance",
        duration: "Durée",
        from: "À partir de",
        perVehicle: "par trajet",
        sedan: "SUV 4×4 (Škoda Kodiaq)",
        van: "Van (Ford Tourneo)",
        luxuryVan: "Luxury Van (Mercedes Vito)",
        book: "Réserver ce transfert",
        moreFrom: "Autres transferts depuis Marrakech",
        bookNow: "Réserver sur WhatsApp",
      },
    };
  }

  if (locale === "ar") {
    const dest = transfer.to.ar;
    return {
      h1: `نقل خاص من مراكش إلى ${dest}`,
      intro: [
        isAirport
          ? `هل تسافر من مراكش إلى ${dest} أو تصل وتحتاج للوصول إلى فندقك؟ مع Transfer Maroc، سائقك الخاص في انتظارك ويقلّك مباشرة إلى وجهتك — نحو ${km} كم، حوالي ${dur}، داخل سيارة حديثة ومكيّفة، دون توقفات مشتركة أو انتظار.`
          : `انتقل من مراكش إلى ${dest} براحة تامة مع سائق خاص من Transfer Maroc. تُقطع المسافة البالغة نحو ${km} كم في حوالي ${dur} داخل سيارة حديثة ومكيّفة، دون توقفات مشتركة أو انتظار.`,
        `يستقبلك سائقك في العنوان الذي تختاره ويقلّك مباشرة إلى وجهتك. السعر ثابت ومتفق عليه مسبقاً — يبدأ من ${sedanPrice} يورو — يُؤكَّد عبر واتساب في أقل من ساعة.`,
        `مثالي للعائلات والأزواج ومسافري الأعمال الباحثين عن رحلة مراكش–${dest} مريحة ودقيقة المواعيد. متاح 24 ساعة، 7 أيام.`,
      ],
      includedTitle: "ما يشمله السعر",
      included: [
        "سائق خاص محترف يتحدث الإنجليزية والعربية",
        "سيارة حديثة ومكيّفة مع مياه مجانية",
        isAirport ? "متابعة الرحلة الجوية واستقبال شخصي" : "الانطلاق من عنوانك",
        "سعر ثابت شامل دون رسوم خفية",
        "مقعد أطفال عند الطلب",
        "دعم على مدار الساعة عبر واتساب",
      ],
      priceTitle: "الأسعار حسب السيارة",
      priceNote: `أسعار إرشادية لرحلة مراكش ← ${dest}. أكّد سعرك النهائي عبر واتساب.`,
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        {
          question: `كم تكلفة النقل من مراكش إلى ${dest}؟`,
          answer: `يبدأ السعر الخاص من ${sedanPrice} يورو لسيارة SUV سكودا كودياك. أما فان فورد تورنيو فحوالي ${vanPrice} يورو، ومرسيدس فيتو ${luxuryPrice} يورو. السعر ثابت ويُؤكَّد قبل الانطلاق.`,
        },
        {
          question: `كم تستغرق رحلة مراكش – ${dest}؟`,
          answer: `تغطي الرحلة نحو ${km} كم وتستغرق عادةً حوالي ${dur}، حسب حركة المرور وتوقفاتك.`,
        },
        {
          question: isAirport ? "هل يتابع السائق رحلتي الجوية؟" : "من أين يكون الانطلاق؟",
          answer: isAirport
            ? "نعم، نتابع رقم رحلتك ونعدّل وقت الاستقبال في حال التأخير دون أي رسوم إضافية."
            : "سائقك يستقبلك في العنوان الذي تختاره — فندق، رياض، مطار أو محطة قطار. حدّد العنوان عند الحجز.",
        },
        {
          question: "كيف أحجز؟",
          answer: "أرسل لنا تواريخك وتفاصيلك عبر النموذج أو زر واتساب. نؤكّد التوفر والسعر الثابت في أقل من ساعة.",
        },
      ],
      labels: {
        distance: "المسافة",
        duration: "المدة",
        from: "يبدأ من",
        perVehicle: "للرحلة",
        sedan: "SUV رباعي الدفع (سكودا كودياك)",
        van: "فان (فورد تورنيو)",
        luxuryVan: "فان فاخر (مرسيدس فيتو)",
        book: "احجز هذا النقل",
        moreFrom: "نقلات أخرى من مراكش",
        bookNow: "احجز عبر واتساب",
      },
    };
  }

  if (locale === "it") {
    const dest = transfer.to.fr;
    return {
      h1: isAirport
        ? `Trasferimento privato da Marrakech a ${dest}`
        : `Trasferimento privato da Marrakech a ${dest}`,
      intro: [
        isAirport
          ? `Stai partendo da Marrakech verso ${dest}, o stai atterrando e hai bisogno di raggiungere il tuo hotel? Con Transfer Maroc, un autista privato ti aspetta e ti porta direttamente a destinazione — circa ${km} km, circa ${dur}, in un veicolo moderno e climatizzato, senza fermate condivise né attese.`
          : `Viaggia da Marrakech a ${dest} in tutta comodità con un autista privato Transfer Maroc. I circa ${km} km si percorrono in circa ${dur} a bordo di un veicolo moderno e climatizzato — senza fermate condivise, senza tassametro, senza sorprese.`,
        `Il tuo autista ti preleva all'indirizzo che scegli e ti porta direttamente a destinazione. Il prezzo è fisso e concordato in anticipo — a partire da €${sedanPrice} — confermato via WhatsApp entro un'ora.`,
        `Ideale per famiglie, coppie e viaggiatori d'affari che desiderano un trasferimento Marrakech–${dest} comodo, puntuale e discreto. Disponibile 24 ore su 24, 7 giorni su 7.`,
      ],
      includedTitle: "Cosa è incluso",
      included: [
        "Autista privato professionista di lingua inglese e francese",
        "Veicolo moderno e climatizzato con acqua in omaggio",
        isAirport ? "Monitoraggio del volo e accoglienza personalizzata" : "Prelievo al tuo indirizzo",
        "Prezzo fisso tutto incluso, senza costi nascosti",
        "Seggiolino per bambini su richiesta",
        "Assistenza 24/7 su WhatsApp",
      ],
      priceTitle: "Prezzi per veicolo",
      priceNote: `Prezzi indicativi per il percorso Marrakech → ${dest}. Conferma il tuo prezzo definitivo via WhatsApp.`,
      faqTitle: "Domande frequenti",
      faqs: [
        {
          question: `Quanto costa un trasferimento da Marrakech a ${dest}?`,
          answer: `Il prezzo privato parte da €${sedanPrice} per un SUV 4×4 (Škoda Kodiaq). Un van Ford Tourneo è circa €${vanPrice} e un luxury van Mercedes-Benz Vito €${luxuryPrice}. Il prezzo è fisso e confermato prima della partenza.`,
        },
        {
          question: `Quanto dura il viaggio da Marrakech a ${dest}?`,
          answer: `Il percorso copre circa ${km} km e richiede normalmente circa ${dur}, a seconda del traffico e delle eventuali soste.`,
        },
        {
          question: isAirport ? "L'autista seguirà il mio volo?" : "Da dove parte il trasferimento?",
          answer: isAirport
            ? "Sì. Monitoriamo il numero del tuo volo e adeguiamo l'orario di prelievo in caso di ritardo, senza costi aggiuntivi."
            : "Il tuo autista ti viene a prendere all'indirizzo che scegli — hotel, riad, aeroporto o stazione. Indica l'indirizzo al momento della prenotazione.",
        },
        {
          question: "Come prenoto?",
          answer: "Compila il modulo qui accanto oppure inviaci un messaggio su WhatsApp. Confermiamo disponibilità e prezzo fisso entro un'ora.",
        },
      ],
      labels: {
        distance: "Distanza",
        duration: "Durata",
        from: "A partire da",
        perVehicle: "per viaggio",
        sedan: "SUV 4×4 (Škoda Kodiaq)",
        van: "Van (Ford Tourneo)",
        luxuryVan: "Luxury Van (Mercedes-Benz Vito)",
        book: "Prenota questo trasferimento",
        moreFrom: "Altri trasferimenti da Marrakech",
        bookNow: "Prenota su WhatsApp",
      },
    };
  }

  // English (default)
  const dest = transfer.to.en;
  return {
    h1: `Private Transfer from Marrakech to ${dest}`,
    intro: [
      isAirport
        ? `Travelling between Marrakech and ${dest}? With Transfer Maroc, a dedicated private chauffeur meets you at your address and drives you straight there — roughly ${km} km, around ${dur}, in a late-model air-conditioned vehicle with no shared stops and no waiting.`
        : `Travel from Marrakech to ${dest} in complete comfort with a private Transfer Maroc chauffeur. The roughly ${km} km journey takes around ${dur} in a late-model, air-conditioned vehicle — no shared stops, no meter, no surprises.`,
      `Your chauffeur picks you up at any address of your choice and takes you directly to your destination. The price is fixed and agreed in advance — from €${sedanPrice} — confirmed via WhatsApp within the hour.`,
      `Ideal for families, couples and business travellers who want a Marrakech–${dest} transfer that is comfortable, punctual and discreet. Available 24/7.`,
    ],
    includedTitle: "What's included",
    included: [
      "Professional, English-speaking private chauffeur",
      "Late-model air-conditioned vehicle with complimentary water",
      isAirport ? "Flight tracking and personal meet & greet" : "Pick-up from your address",
      "Fixed all-inclusive price, no hidden fees",
      "Child seat on request",
      "24/7 support on WhatsApp",
    ],
    priceTitle: "Prices by vehicle",
    priceNote: `Indicative prices for the Marrakech → ${dest} route. Confirm your exact fare on WhatsApp.`,
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: `How much is a transfer from Marrakech to ${dest}?`,
        answer: `The private fare starts at €${sedanPrice} in an SUV 4×4 (Škoda Kodiaq). A Ford Tourneo van is around €${vanPrice} and a Mercedes-Benz Vito luxury van €${luxuryPrice}. The price is fixed and confirmed before you travel.`,
      },
      {
        question: `How long does the Marrakech to ${dest} journey take?`,
        answer: `The route covers about ${km} km and usually takes around ${dur}, depending on traffic and any stops you request along the way.`,
      },
      {
        question: isAirport ? "Will the driver track my flight?" : "Where will the pick-up be?",
        answer: isAirport
          ? "Yes. We track your flight number and adjust the pickup time if it is delayed, at no extra charge."
          : "Your chauffeur comes to any address you choose — hotel, riad, airport or train station. Specify the address when booking.",
      },
      {
        question: "How do I book?",
        answer: "Fill in the form alongside or send us a WhatsApp message. We confirm availability and a fixed price within the hour.",
      },
    ],
    labels: {
      distance: "Distance",
      duration: "Duration",
      from: "From",
      perVehicle: "per trip",
      sedan: "SUV 4×4 (Škoda Kodiaq)",
      van: "Van (Ford Tourneo)",
      luxuryVan: "Luxury Van (Mercedes-Benz Vito)",
      book: "Book this transfer",
      moreFrom: "More transfers from Marrakech",
      bookNow: "Book on WhatsApp",
    },
  };
}
