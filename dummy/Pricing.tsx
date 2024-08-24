import React from 'react';
import { MessageCircle, Radio, Send, Users, FileText, RefreshCw } from 'lucide-react'; // Import the icons from Lucide React

export const pricingPlans = [
  {
    title: "Starter",
    description: "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
    price: "Gratis",
    annualPrice: null,
    buttonText: "Start Now",
    highlight: false, // Not recommended
    features: [
      {
        name: "Auto reply",
        value: "100",
        icon: <MessageCircle className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Broadcast",
        value: "100",
        icon: <Radio className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Campaign",
        value: "10",
        icon: <Send className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Contacts",
        value: "50",
        icon: <Users className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Excel / CSV Contact Import",
    
        icon: <FileText className="w-5 h-5 inline-block mr-2 text-gray-400" />
      },
      {
        name: "Google Contact Sync",
   
        icon: <RefreshCw className="w-5 h-5 inline-block mr-2 text-gray-400" />
      }
    ],
    buttonColor: "bg-blue-600",
  },
  {
    title: "Basic",
    description: "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    price: "Rp. 65,000 / bulan",
    annualPrice: "Rp. 600,000 / tahun",
    buttonText: "Get Started",
    highlight: true, // Recommended
    features: [
      {
        name: "Auto reply",
        value: "100",
        icon: <MessageCircle className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Broadcast",
        value: "500",
        icon: <Radio className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Campaign",
        value: "50",
        icon: <Send className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Contacts",
        value: "500",
        icon: <Users className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Excel / CSV Contact Import",

        icon: <FileText className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Google Contact Sync",
 
        icon: <RefreshCw className="w-5 h-5 inline-block mr-2 text-gray-400" />
      }
    ],
    buttonColor: "bg-yellow-500",
  },
  {
    title: "Premium",
    description: "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    price: "Rp. 76,000 / bulan",
    annualPrice: "Rp. 800,000 / tahun",
    buttonText: "Get Started",
    highlight: false,
    features: [
      {
        name: "Auto reply",
        value: "200",
        icon: <MessageCircle className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Broadcast",
        value: "1000",
        icon: <Radio className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Campaign",
        value: "100",
        icon: <Send className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Contacts",
        value: "1000",
        icon: <Users className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Excel / CSV Contact Import",
     
        icon: <FileText className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Google Contact Sync",
   
        icon: <RefreshCw className="w-5 h-5 inline-block mr-2 text-blue-500" />
      }
    ],
    buttonColor: "bg-blue-600",
  },
  {
    title: "Pro",
    description: "Jelajahi lebih lanjut dengan paket Pro. Ideal untuk organisasi besar dengan kebutuhan komunikasi yang luas. Manfaatkan fitur otomatisasi lanjutan dan integrasi menyeluruh dengan Google dan WhatsApp.",
    price: "Rp. 86,000 / bulan",
    annualPrice: "Rp. 900,000 / tahun",
    buttonText: "Get Started",
    highlight: false, // Not recommended
    features: [
      {
        name: "Auto reply",
        value: "Unlimited",
        icon: <MessageCircle className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Broadcast",
        value: "Unlimited",
        icon: <Radio className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Campaign",
        value: "200",
        icon: <Send className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Contacts",
        value: "Unlimited",
        icon: <Users className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Excel / CSV Contact Import",
 
        icon: <FileText className="w-5 h-5 inline-block mr-2 text-blue-500" />
      },
      {
        name: "Google Contact Sync",
   
        icon: <RefreshCw className="w-5 h-5 inline-block mr-2 text-blue-500" />
      }
    ],
    buttonColor: "bg-green-500",
  }
];
