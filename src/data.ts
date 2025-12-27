export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
  logo?: string;
  isHighlight?: boolean;
  specialColor?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ProfileData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  highlights: string[];
  experiences: Experience[];
  education: Education[];
  personalSummary: string[];
  labels: {
    workHistory: string;
    contact: string;
    education: string;
    industryExp: string;
    years: string;
    proFile: string;
    highlights: string;
  };
}

export const translations: Record<string, ProfileData> = {
  zh: {
    name: "王宇",
    title: "西南区域总经理 | 百度大模型运营部 (BMO)",
    contact: {
      email: "e13760@gmail.com",
      phone: "+86-186-1131-3200",
      linkedin: "https://www.linkedin.com/in/view2future/",
    },
    summary:
      "经验丰富的领导者，在 AI、Web3、元宇宙、区块链、物联网、智能芯片、车联网、信息技术和软件服务行业有 20 年的工作经验。致力于利用百度尖端的 AI 和 LLM（大语言模型）技术来实现变革性的业务解决方案。",
    highlights: ["20年+ 行业深耕", "大模型运营部 (BMO)", "文心大模型 (ERNIE)", "飞桨 (PaddlePaddle)", "ToB 数字化专家", "车联网先行者"],
    experiences: [
      {
        title: "西南区域总经理",
        company: "百度 - 大模型运营部 (BMO)",
        period: "2023年12月 — 至今",
        location: "北京/成都",
        isHighlight: true,
        logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/baidu.svg",
        tags: ["AI技术生态", "大模型落地", "业务发展", "文心一言", "飞桨"],
        description: [
          "负责百度 AI 技术平台 (AIT) 下的大模型运营部 (BMO) 西南区域业务。",
          "致力于促进与企业、大学、研究机构以及个人开发者的合作，推动文心大模型与飞桨生态的深度融合。",
          "技术采用：推动客户采用百度前沿的 AI 和 LLM，提升客户在人工智能时代的业务能力。",
          "协同创新：基于文心大模型 (ERNIE) 的能力，积极寻求与外部合作伙伴共同创造创新产品的机会。",
        ],
      },
      {
        title: "解决方案架构师",
        company: "百度智能云事业群",
        period: "2021年4月 — 2023年11月",
        location: "北京/成都",
        isHighlight: true,
        logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/baidu.svg",
        tags: ["元宇宙", "Web3", "物联网", "智能芯片", "ARM云"],
        description: [
          "深入了解百度 AI、元宇宙、Web3、物联网等服务 and 产品能力。",
          "针对垂直行业痛点，形成具有百度优势与特点的行业解决方案。",
          "与销售团队协作，进行售前交流，掌握客户需求并针对性提出解决方案，合作完成项目签约。",
        ],
      },
      {
        title: "CEO",
        company: "上海钛捷信息科技有限公司",
        period: "2017年4月 — 2021年4月",
        location: "上海",
        specialColor: "bg-[var(--brutal-yellow)]", // 换个底色
        tags: ["数字化转型", "ToB", "汽车分时租赁", "订阅制服务"],
        description: [
          "为企业客户 (ToB) 提供数字化解决方案，服务于一汽-大众、香港环亚机场服务管理集团等头部客户。",
          "打造“摩捷出行”产品，实现班车运营成本降低 15% 以上。",
          "为环亚机场提供全球 46 个国家机场的贵宾服务系统建设和运维。",
        ],
      },
      {
        title: "产品总监 / 产品经理",
        company: "京联云 / 钛马信息",
        period: "2011年12月 — 2017年3月",
        location: "成都",
        tags: ["移动互联网", "车联网", "教育行业", "产品定义"],
        description: [
          "在车联网和教育行业担任产品领导职务。",
          "开发国内第一代车联网后装产品“粤行者”TSP。",
          "2013 年实现微信信号与车载导航结合，获得专利 CN105407126A。",
        ],
      },
      {
        title: "高级开发主任 / 高级软件工程师",
        company: "INQ 移动 / 摩托罗拉",
        period: "2005年1月 — 2011年12月",
        location: "北京",
        tags: ["移动通信", "Android/ROM", "UI/UX", "国际化"],
        description: [
          "在摩托罗拉和 INQ 移动领导手机产品的本地化、国际化与 UI/UX 研发。",
          "专注于社交手机研发与 ROM 生态打造。",
        ],
      },
      {
        title: "软件工程师",
        company: "汉王科技 / 天津通广三星",
        period: "2003年7月 — 2005年1月",
        location: "北京/天津",
        tags: ["嵌入式开发", "RTP协议", "彩电本地化"],
        description: ["负责宽带电话 RTP 协议开发及三星彩电本地化软件开发。"],
      },
    ],
    education: [
      {
        degree: "学士, 计算机科学与技术",
        school: "西安交通大学",
        period: "1999年9月 — 2003年7月",
      },
    ],
    personalSummary: [
      "追求卓越，对技术和产品有天生的热情。",
      "具有从技术到产品、从产品到管理的跨领域经验。",
      "善于以价值驱动获取客户信任，帮助客户成功。",
      "持续思考产品的核心价值与商业前景，并积极推动革新。",
    ],
    labels: {
      workHistory: "工作经历",
      contact: "联系方式",
      education: "教育背景",
      industryExp: "行业经验",
      years: "20年+",
      proFile: "个人档案",
      highlights: "核心亮点",
    },
  },
  en: {
    name: "Wang Yu",
    title: "GM of Southwest Region | Baidu BMO",
    contact: {
      email: "e13760@gmail.com",
      phone: "+86-186-1131-3200",
      linkedin: "https://www.linkedin.com/in/view2future/",
    },
    summary:
      "Experienced leader with 20 years of experience in AI, Web3, Metaverse, Blockchain, IoT, and Software Services. Focused on leveraging Baidu's cutting-edge AI & LLM technologies.",
    highlights: ["20+ Years Experience", "Big Model Ops (BMO)", "ERNIE LLM", "PaddlePaddle", "ToB Digitalization", "Telematics Expert"],
    experiences: [
      {
        title: "GM of Southwest Region",
        company: "Baidu - Big Model Operations (BMO)",
        period: "Dec 2023 — Present",
        location: "Beijing/Chengdu",
        isHighlight: true,
        logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/baidu.svg",
        tags: ["AI Ecosystem", "LLM Implementation", "Business Dev", "ERNIE", "PaddlePaddle"],
        description: [
          "In charge of BMO Southwest business under Baidu's AI Technology Platform (AIT).",
          "Promoting cooperation with enterprises and universities to leverage Baidu's AI/LLM technologies.",
          "Seeking opportunities to co-create innovative products based on ERNIE advances.",
        ],
      },
      {
        title: "Solution Architect",
        company: "Baidu Cloud Group (ACG)",
        period: "Apr 2021 — Nov 2023",
        location: "Beijing/Chengdu",
        isHighlight: true,
        logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/baidu.svg",
        tags: ["Metaverse", "Web3", "IoT", "Smart Chip", "ARM Cloud"],
        description: [
          "Deep dive into Baidu AI, Metaverse, Web3, and IoT product capabilities.",
          "Formulated industry solutions with Baidu's advantages for vertical industry pain points.",
        ],
      },
      {
        title: "CEO",
        company: "Taijie Technology",
        period: "Apr 2017 — Apr 2021",
        location: "Shanghai",
        specialColor: "bg-[var(--brutal-yellow)]",
        tags: ["Digitalization", "ToB", "Car Sharing", "Subscription"],
        description: [
          "Provided digital solutions for ToB clients like FAW-Volkswagen and Plaza Premium Group.",
          "Built car-sharing platform 'Moji' reducing shuttle costs by 15%+.",
        ],
      },
      {
        title: "Product Director / Manager",
        company: "Jianlian / Tima",
        period: "Dec 2011 — Mar 2017",
        location: "Chengdu",
        tags: ["Mobile Internet", "Telematics", "Education", "Product"],
        description: [
          "Product leadership roles in Telematics and Education industries.",
          "Developed 'Yue Xing Zhe' TSP, the first generation of telematics products in China.",
        ],
      },
      {
        title: "Senior Development Lead / Engineer",
        company: "INQ Mobile / Motorola",
        period: "Jan 2005 — Dec 2011",
        location: "Beijing",
        tags: ["Mobile", "Android/ROM", "UI/UX", "I18n"],
        description: [
          "Led software product delivery for Motorola mobile phones.",
          "Focused on social mobile phone R&D and ROM ecosystem.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Hanwang / Samsung",
        period: "Jul 2003 — Jan 2005",
        location: "Beijing/Tianjin",
        tags: ["Embedded", "RTP", "TV Localization"],
        description: ["Embedded application development for broadband phones and Samsung TV."],
      },
    ],
    education: [
      {
        degree: "Bachelor, Computer Science",
        school: "Xi'an Jiaotong University",
        period: "Sep 1999 — Jul 2003",
      },
    ],
    personalSummary: [
      "Passion for technology and products.",
      "Cross-domain experience from tech to product to management.",
      "Value-driven approach to win customer trust.",
    ],
    labels: {
      workHistory: "WORK HISTORY",
      contact: "CONTACT",
      education: "EDUCATION",
      industryExp: "INDUSTRY EXP",
      years: "20+ YEARS",
      proFile: "PRO FILE",
      highlights: "HIGHLIGHTS",
    },
  },
};
