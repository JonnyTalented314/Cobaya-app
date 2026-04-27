import ImageBox from '../components/Image'

import IconHelp from '../assets/images/footer/icon-help.svg'
import IconPrivacy from '../assets/images/footer/icon-privacy.svg'
import IconSpeedometer from '../assets/images/footer/icon-speedometer.svg'
import IconPlant from '../assets/images/footer/icon-plant.svg'
import CarouselImage1 from '../assets/images/home/carousel-image-1.svg'
import ToolboxImage1 from '../assets/images/home/toolbox-img-1.svg'
import InteractionImage1 from '../assets/images/home/conversation-img.svg'
import IconPlantGreen from '../assets/images/icons/icon-plant-green.svg'
import IconTreeMedium from '../assets/images/icons/icon-tree-medium.svg'
import IconTreeLarge from '../assets/images/icons/icon-tree-large.svg'
import IconTreeNonProfit from '../assets/images/icons/icon-tree-non-profit.svg'
import SolutionCardImage from '../assets/images/solutions/solution-image.svg'
import IconTarget from '../assets/images/icons/icon-target.svg'
import IconNetworking from '../assets/images/icons/icon-networking.svg'
import IconResponsive from '../assets/images/icons/icon-responsive.svg'
import IconFlagFrance from '../assets/images/icons/icon-heart-france.svg'
import IconPlantBlue from '../assets/images/icons/icon-plant-blue.svg'
import IconPrivacyBlue from '../assets/images/icons/icon-privacy-blue.svg'
import ImageToolkitWorkspace from '../assets/images/home/toolkit/img-toolkit-workspace.svg'
import ImageToolkitGlance from '../assets/images/home/toolkit/img-toolkit-at-a-glance.svg'
import ImageToolkitTodoList from '../assets/images/home/toolkit/img-toolkit-todo-list.svg'
import ImageToolkitDecision from '../assets/images/home/toolkit/img-toolkit-decision.svg'
import ImageToolkitFeature from '../assets/images/home/toolkit/img-toolkit-features.svg'
import ImageToolkitSumUp from '../assets/images/home/toolkit/img-toolkit-sumUp.svg'
import ImageToolkitAchievement from '../assets/images/home/toolkit/img-toolkit-achievement.svg'
import ImageToolkitTicket from '../assets/images/home/toolkit-ticket-img-2.svg'
import ImageToolkitCalendar from '../assets/images/home/calendar-img.svg'
import ImageToolkitMap from '../assets/images/home/map-img.svg'
import ImageAchievementBg from '../assets/images/home/achievement-img.svg'
import ImageFilterDocuments from '../assets/images/home/image-documents-filter.svg'
import ImageInteractionConversation from '../assets/images/home/interactions/interaction-conversation-img.svg'
import ImageInteractionConversationMobile from '../assets/images/home/interactions/interaction-conversation-img-mobile.png'
import ImageInteractionDocument from '../assets/images/home/interactions/interaction-document-img.svg'

export const HEADER_MENU = [
  // {
  //   title: 'Functions',
  //   href: '/functions',
  //   isDropdown: true,
  // },
  // {
  //   title: 'Solutions',
  //   href: '/solutions',
  //   isDropdown: true,
  // },
  // {
  //   title: 'Pricing',
  //   href: '/pricing',
  //   isDropdown: false,
  // },
  {
    title: 'Contact Sales',
    isDropdown: false,
  },
];

export const HEADER_FUNCTIONS_DROPDOWN_DISCOVER_LIST = [
  {
    title: 'Workspace',
    description: 'The tool that reunites them all, making your everyday worklife much simpler.'
  },
  {
    title: 'At a Glance',
    description: 'All key indicators are available at a glance. You can share your performance with stakeholders and/or your team.'
  },
  {
    title: 'Achievements',
    description: 'Stay on track to achieve all types of targets that you aim to complete with your team.'
  },
  {
    title: 'Decisions',
    description: 'Keep your decision-makers on track and avoid them missing any key steps.'
  },
  {
    title: 'Features',
    description: 'Completely customizable set of forms to meet your needs and expectations to facilitate mobile-user data submissions.'
  },
  {
    title: 'To-Do Lists',
    description: 'Consolidate all to-do tasks for your projects and share them with your internal teams or suppliers and clients.'
  },
  {
    title: 'SumUp',
    description: 'New items come in everyday, changing your priorities and targets, Coyaba using AI will help you never to lose track.'
  },
];

export const HEADER_FUNCTIONS_DROPDOWN_INTERACTIONS_LIST = [
  {
    title: 'Conversations',
    description: 'All key indicators are available at a glance. You can share your performance with stakeholders and/or your team.'
  },
  {
    title: 'Documents',
    description: 'Keep your decision-makers on track and avoid them missing any key steps.'
  },
  {
    title: 'Located Notifications',
    description: 'Consolidate all to-do tasks for your projects and share them with your internal teams or suppliers and clients.'
  },
  {
    title: 'Connectors',
    description: 'Imagine a world where all IS Systems speak the same language, connect with and input all data from your existing systems.'
  }
]

export const HEADER_SOLUTIONS_DROPDOWN_LIST = [
  {
    id: 'caseStudies',
    title: 'Case Studies',
    list: [
      'New SaaS application deployment',
      'Sales strategy follow-up',
      'Customer requests management',
      'Application maintenance',
      'Project management', 'Launch of a new product', 'Systems convergence', 'Remote Work', 'Personal'
    ]
  },
  {
    id: 'teams',
    title: 'Teams',
    list: [
      'Marketing',
      'Sales',
      'IT',
      'Finance',
      'Product Development',
      'Operations',
      'Human Resources',
      'Stakeholders'
    ]
  },
  {
    id: 'companyType',
    title: 'Company Type',
    list: [
      'Small',
      'Medium',
      'Large',
      'Non-Profit'
    ]
  }
]

export const FOOTER_LIST = [
  [
    {
      title: 'Free help and 24/7 support',
      icon: IconHelp
    },
    {
      title: 'Privacy and Security focused',
      icon: IconPrivacy
    },
    {
      title: 'Maximum availability',
      icon: IconSpeedometer
    },
    {
      title: 'Environmentally friendly',
      icon: IconPlant
    },
  ],
  [
    {
      title: 'Coyaba',
      hash: '#',
      list: [
        {
          title: 'About',
          href: '/peacekeepers'
        },
        {
          title: 'Certifications',
          href: '/privacy'
        },
        {
          title: 'Privacy and Security',
          href: '/privacy'
        },
        {
          title: 'Terms of Use',
          href: '/terms'
        },
      ]
    },
    {
      title: 'By Tool',
      hash: '#toolkit',
      list: [
        {
          title: 'At a Glance',
          href: '#'
        },
        {
          title: 'Decisions',
          href: '#'
        },
        {
          title: 'To Do Lists',
          href: '#'
        },
        {
          title: 'Achievements',
          href: '#'
        },
        {
          title: 'Features',
          href: '#'
        },
        {
          title: 'SumUp',
          href: '#'
        },
        {
          title: 'Conversations',
          href: '#'
        },
        {
          title: 'Documents',
          href: '#'
        },
        {
          title: 'More',
          href: '#'
        },
      ]
    },
    {
      title: 'By Team',
      hash: '#coyabaForAll',
      list: [
        {
          title: 'Marketing',
          href: '/teams/marketing'
        },
        {
          title: 'Sales',
          href: '/teams/sales'
        },
        {
          title: 'IT',
          href: '/teams/it'
        },
        {
          title: 'Finance',
          href: '/teams/finance'
        },
        {
          title: 'Product Development',
          href: '/teams/product-development'
        },
        {
          title: 'Operations',
          href: '/teams/operations'
        },
        {
          title: 'Human Resources',
          href: '/teams/human-resources'
        },
        {
          title: 'Stakeholders',
          href: '/teams/stakeholders'
        },
        {
          title: 'More',
          href: '/teams'
        },
      ]
    },
    {
      title: 'By Case Study',
      hash: '#caseStudies',
      list: [
        {
          title: 'New SaaS application deployment',
          href: '/solutions',
        },
        {
          title: 'Sales strategy follow-up',
          href: '/solutions',
        },
        {
          title: 'Customer requests management',
          href: '/solutions',
        },
        {
          title: 'Application maintenance',
          href: '/solutions',
        },
        {
          title: 'Project management',
          href: '/solutions',
        },
        {
          title: 'Decisions',
          href: '/solutions',
        },
        {
          title: 'Launch of a new product',
          href: '/solutions',
        },
        {
          title: 'Systems convergence',
          href: '/solutions',
        },
        {
          title: 'More',
          href: '/solutions',
        },
      ]
    },
    // {
    //   title: 'By Business',
    //   list: [
    //     {
    //       title: 'Small',
    //       href: '/solutions',
    //     },
    //     {
    //       title: 'Medium',
    //       href: '/solutions',
    //     },
    //     {
    //       title: 'Large',
    //       href: '/solutions',
    //     },
    //     {
    //       title: 'Non-Profit',
    //       href: '/solutions',
    //     },
    //   ]
    // }
  ],
  // [
  //   {
  //     title: 'Resources',
  //     list: [
  //       {
  //         title: 'Connectors',
  //         href: '#',
  //       },
  //       {
  //         title: 'API',
  //         href: '#',
  //       },
  //       {
  //         title: 'Help me',
  //         href: '#',
  //       },
  //     ]
  //   },
  // ]
]

export const HOME_SIDEBAR_MENU = [
  {
    id: 'meaning',
    title: 'Meaning',
    bgColor: '#fff',
  },
  {
    id: 'toolbox',
    title: 'Toolbox',
    bgColor: '#fff',
  },
  {
    id: 'interactions',
    title: 'Interactions',
    bgColor: '#12274C',
  },
  {
    id: 'connectors',
    title: 'Connectors',
    bgColor: '#fff',
  },
  {
    id: 'buildForEveryOne',
    title: 'Built for everyone',
    bgColor: '#12274C',
  },
  {
    id: 'caseStudies',
    title: 'Case Studies',
    bgColor: '#fff',
  },
  {
    id: 'support',
    title: 'Support',
    bgColor: '#12274C',
  },
];

export const HOME_SIDEBAR_MENU_2 = [
  {
    id: 'toolkit',
    title: 'Toolkit',
    bgColor: '#12274C',
    height: '943px'
  },
  {
    id: 'connectors',
    title: 'Connectors',
    bgColor: '#fff',
    height: '700px'
  },
  {
    id: 'interactions',
    title: 'Interactions',
    bgColor: '#fff',
    height: '943px'
  },
  {
    id: 'coyabaForAll',
    title: 'Coyaba for all',
    bgColor: '#12274C',
    height: '900px'
  },
  {
    id: 'caseStudies',
    title: 'Case Studies',
    bgColor: '#fff',
    height: '900px'
  },
  {
    id: 'meaning',
    title: 'Meaning',
    bgColor: '#fff',
    height: '670px'
  },
  {
    id: 'support',
    title: 'Support',
    bgColor: '#12274C',
  },
];

export const HOME_MEANING_CAROUSEL_ITEMS = [
  {
    description: "Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.",
    image: <ImageBox src={CarouselImage1} style={{ width: '100%' }} alt='carousel-1' />
  },
  {
    description: "Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.",
    image: <ImageBox src={CarouselImage1} style={{ width: '100%' }} alt='carousel-1' />
  },
  {
    description: "Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.",
    image: <ImageBox src={CarouselImage1} style={{ width: '100%' }} alt='carousel-1' />
  },
];

export const HOME_MEANING_ITEMS = [
  {
    description: 'All tools are customizable to meet your needs and expectations',
    icon: IconTarget
  },
  {
    description: "Available not only for your company but also for your suppliers, partners and clients",
    icon: IconNetworking
  },
  {
    description: "Focused on Privacy and Security",
    icon: IconPrivacyBlue
  },
  {
    description: "Accessible on desktop and mobile",
    icon: IconResponsive
  },
  {
    description: "Environmentally conscious",
    icon: IconPlantBlue
  },
  {
    description: "French company",
    icon: IconFlagFrance
  },
];

export const HOME_TOOLBOX_MENU = [
  {
    title: 'Workspace',
    image: ImageToolkitTicket,
    description: "The tool that reunites them all, making your everyday worklife much simpler.",
    smallImg: {
      width: '310px',
      height: '150px',
      src: ImageToolkitWorkspace,
      align: 'flex-end'
    }
  },
  {
    title: 'At a Glance',
    image: ImageToolkitTicket,
    description: "All key indicators are available at a glance. You can share your performance with stakeholders and/or your team.",
    smallImg: {
      width: '377px',
      height: '250px',
      src: ImageToolkitGlance,
      align: 'flex-end'
    }
  },
  {
    title: 'Decisions',
    image: ImageToolkitTicket,
    description: "Keep your decision-makers on track and avoid them missing any key steps.",
    smallImg: {
      width: '500px',
      height: '200px',
      src: ImageToolkitDecision,
      align: 'flex-end'
    }
  },
  {
    title: 'To-Do Lists',
    image: ToolboxImage1,
    description: "Consolidate all to-do tasks for your projects and share them with your internal teams or suppliers and clients.",
    smallImg: {
      width: '286px',
      height: '200px',
      src: ImageToolkitTodoList,
      align: 'flex-end'
    }
  },
  {
    title: 'Achievements',
    image: ImageAchievementBg,
    subject: "",
    description: "Stay on track to achieve all types of targets that you aim to complete with your team.",
    smallImg: {
      width: '420px',
      height: '250px',
      src: ImageToolkitAchievement,
      align: 'flex-end'
    }
  },
  {
    title: 'Features',
    image: ImageToolkitMap,
    subject: "",
    description: "Get data from your field users, to be sure nothing is overlooked.",
    smallImg: {
      width: '800px',
      height: '80px',
      src: ImageToolkitFeature,
      align: 'center'
    }
  },
  {
    title: 'SumUp',
    image: ImageToolkitCalendar,
    subject: "",
    description: "New items come in everyday, changing your priorities and targets, Coyaba using AI will help you never to lose track.",
    smallImg: {
      width: '195px',
      height: '350px',
      src: ImageToolkitSumUp,
      align: 'flex-end'
    }
  },
];

export const HOME_INTERACTION_MENU = [
  {
    title: 'Conversations',
    image: InteractionImage1,
    mobileImage: ImageInteractionConversationMobile,
    smallImg: {
      width: { xs: '138px', md: '244px' },
      height: { xs: '226px', md: '400px' },
      src: ImageInteractionConversation
    },
    subject: "Create a workspace and discover all functions to increase your efficiency with your teams.",
    description: "Create chat groups, write direct messages, tag users and items available in Coyaba to facilitate interactions, increase efficiency and ensure all the team is on the same page and have it all in the same place.",
    expanded: true
  },
  {
    title: 'Documents',
    image: ImageFilterDocuments,
    mobileImage: ImageInteractionConversationMobile,
    smallImg: {
      width: { xs: '250px', md: '405px' },
      height: { xs: 'auto', md: '370px' },
      src: ImageInteractionDocument
    },
    subject: "Create a workspace and discover all functions to increase your efficiency with your teams.",
    description: "Some of your other tools in Coyaba may need related documents, or you just want to have it all in one place. You can add, manage and share documents that are in Coyaba within your Efficiency OS.",
    expanded: false
  },
  {
    title: 'Located Notifications',
    image: InteractionImage1,
    mobileImage: ImageInteractionConversationMobile,
    smallImg: null,
    subject: "Create a workspace and discover all functions to increase your efficiency with your teams.",
    description: "With Coyaba, using Beacons you can send messages to target geographically located users (or those on the move near by) to reduce risks and share the good news.",
    expanded: false
  },
  {
    title: 'Email/Agenda',
    image: InteractionImage1,
    mobileImage: ImageInteractionConversationMobile,
    smallImg: null,
    subject: "Create a workspace and discover all functions to increase your efficiency with your teams.",
    description: "Using Google SSO, you can have now access to your professional mailbox and agenda. You can now create tasks directly from your emails and have meetings created in Coyaba in your agenda.",
    expanded: false
  }
];

export const HOME_CASE_STUDIES_FOR_ALL = [
  {
    title: 'Strategy follow-up',
    description: [
      'Connectors will import and consolidate data',
      'To do lists using all data will allow you to create operational and strategic tasks',
      'At a glance will provide a real time overview',
      'Achievements will keep track of progress',
      'Workspace will allow you to share, create events, follow up',
      'Chat will allow you to communicate on related actions, targets, decisions'
    ]
  },
  {
    title: 'Customer requests management',
    description: [
      'Workspace will allow you to separate by project or group of projects',
      'To Do lists will breakdown into operational tasks and actions, related by story',
      'Automated task creation for direct requests in designated To Do list',
      'Workspace for sharing, Chat for communication, Achievements to keep track of your progress',
      'SumUp cor customer or internal overview'
    ]
  },
  {
    title: 'Launch of a new product',
    description: [
      'From conception to market launch and follow up, you’ll need a tool for managing it all and Coyaba is here just for that.',
      'One or more workspaces to ensure smooth end to end process',
      'To Do lists for operational and strategic tasks and actions',
      'Decisions, when senior vision is required',
      'Features to gather field data',
      'Conversations for quick communication and...',
      '...Workspaces for sharing & Sumup for KPI and progress'
    ]
  }
]

export const CASE_STUDIES_MENU = [
  {
    title: 'New SaaS application',
    description: [
      'To do lists will define and assign actions,',
      'Achievements will keep track of progress and timeline,',
      'Decisions will ensure stakeholders have their say when needed,',
      'Workspace will allow you to share, celebrate and alert if needed.',
      'To do lists and Documents will train and onboard as well as keep an eye on support needed.'
    ]
  },
  {
    title: 'Sales strategy follow-up',
    description: [
      'Connectors will import and consolidate data',
      'To do lists using all data will allow you to create operational and strategic tasks',
      'At a glance will provide a real time overview',
      'Achievements will keep track of progress',
      'Workspace will allow you to share, create events, follow up',
      'Chat will allow you to communicate on related actions, targets, decisions'
    ]
  },
  {
    title: 'Customer requests',
    description: [
      'Workspace will allow you to separate by project or group of projects',
      'To Do lists will breakdown into operational tasks and actions, related by story',
      'Automated task creation for direct requests in designated To Do list',
      'Workspace for sharing, Chat for communication, Achievements to keep track of your progress',
      'SumUp cor customer or internal overview'
    ]
  },
  {
    title: 'Application maintenance',
    description: [
      'Features will allow submissions from your users on the go',
      'Automatic task creation on To Do will allow your clients easy reporting',
      'To Do lists will help follow up',
      'At a glance will provide KPIs',
      'SumUp will make sharing with everyone easier'
    ]
  },
  {
    title: 'Project management',
    description: [
      'Whatever project you have under your belt, you’ll need to have a plan, actions and communicate - Coyaba is here to make all these easier.',
      'To do lists for each phase or global will create operational actions',
      'Achievements will enhance step and stage creation',
      'Workspace will keep it all in one place and make things more relaxing and sharing much easier',
      'At a Glance and SumUp will provide KPIs and material for check points'
    ]
  },
  {
    title: 'Launch of a new product',
    description: [
      'From conception to market launch and follow up, you’ll need a tool for managing it all and Coyaba is here just for that.',
      'One or more workspaces to ensure smooth end to end process',
      'To Do lists for operational and strategic tasks and actions',
      'Decisions, when senior vision is required',
      'Features to gather field data',
      'Conversations for quick communication and...',
      '...Workspaces for sharing & Sumup for KPI and progress'
    ]
  },
  {
    title: 'Remote Work',
    description: [
      'These days we don’t always work in the same place to ensure all advances, whether homeoffice or different country, Coyaba will increase cooperation and make your workday easier.',
      'Connectors will provide you with data from other sources not available on hand',
      'Chat will help you communicate on all items available on Coyaba',
      'Workspace will let you share all the good news, risks, decisions or meetings',
      'Achievements will keep track of progress',
      'At a glance and SumUp will allow you to manage and share'
    ]
  },
  {
    title: 'Personal',
    description: [
      'Whether you are working on your own or you have personal projects, most functions will come in handy.',
      'To Do lists will create a clear visibility of required actions',
      'Achievements will show your progress in obtaining them',
      'Documents will allow you to have all in one place',
      'Invite stakeholders (partners, suppliers, clients) when and where required'
    ]
  }
]

export const PRICING_YEARLY = [
  {
    title: 'BACKYARD GARDEN',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 15,
    link: '',
    workspaces: 2,
    favor: [
      'Unlimited tasks',
      'Unlimited decisions',
      'unlimited Achievements',
      '100MB storage',
      'Conversations',
      'Kanban View',
      'Map View',
      'Calendar View',
      'Two-factor authentification',
      'Unlimited members',
      '24/7 Support'
    ],
    color: '#D65140',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'SQUARE GARDEN',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 45,
    link: '',
    workspaces: 5,
    favor: [
      'EVERYTHING IN BACKYARD',
      'SumUp function',
      'Customers requests',
      '500MB storage',
      'Video meeting',
      'Features creator',
      'Connectors',
      'External members',
      '24/7 Support'
    ],
    color: '#4285F4',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'PARK',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 85,
    link: '',
    workspaces: 15,
    favor: [
      'EVERYTHING IN SQUARE',
      '10GO storage',
      'Teams (Users Groups)',
      'Enterprise API',
      'Google SSO',
      'Microsoft SSO',
      '24/7 Support',
      'Priority Support'
    ],
    color: '#34A853',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'FOREST',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 0,
    link: '',
    workspaces: 'Unlimited',
    favor: [
      'EVERYTHING IN PARK',
      'White Labelling',
      'Unlimited storage',
      'Single Sign-On (SSO)',
      'Live Onboarding Training',
      'Technical Support',
      'Self-managed Coyaba',
      'Customer Success Manager',
      '24/7 Support',
      'Priority Support'
    ],
    color: '#284C88',
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
    isBorderBottom: false
  }
]

export const PRICING_MONTHLY = [
  {
    title: 'BACKYARD GARDEN',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 19,
    link: '',
    workspaces: 2,
    favor: [
      'Unlimited tasks',
      'Unlimited decisions',
      'unlimited Achievements',
      '100MB storage',
      'Conversations',
      'Kanban View',
      'Map View',
      'Calendar View',
      'Two-factor authentification',
      'Unlimited members',
      '24/7 Support'
    ],
    color: '#D65140',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'SQUARE GARDEN',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 49,
    link: '',
    workspaces: 5,
    favor: [
      'EVERYTHING IN BACKYARD',
      'SumUp function',
      'Customers requests',
      '500MB storage',
      'Video meeting',
      'Features creator',
      'Connectors',
      'External members',
      '24/7 Support'
    ],
    color: '#4285F4',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'PARK',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 89,
    link: '',
    workspaces: 15,
    favor: [
      'EVERYTHING IN SQUARE',
      '10GO storage',
      'Teams (Users Groups)',
      'Enterprise API',
      'Google SSO',
      'Microsoft SSO',
      '24/7 Support',
      'Priority Support'
    ],
    color: '#34A853',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    isBorderBottom: true
  },
  {
    title: 'FOREST',
    description: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus.',
    price: 0,
    link: '',
    workspaces: 'Unlimited',
    favor: [
      'EVERYTHING IN PARK',
      'White Labelling',
      'Unlimited storage',
      'Single Sign-On (SSO)',
      'Live Onboarding Training',
      'Technical Support',
      'Self-managed Coyaba',
      'Customer Success Manager',
      '24/7 Support',
      'Priority Support'
    ],
    color: '#284C88',
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
    isBorderBottom: false
  }
]

export const PRICING_PLANS = [
  {
    title: 'Yearly'
  },
  {
    title: 'Monthly'
  },
];

export const PRICING_TOOLBOX_FEATURES = [
  {
    title: 'Workspaces',
    backyard: 2,
    square: 5,
    park: 15,
    forest: 'Unlimited'
  },
  {
    title: 'At A Glance',
    backyard: 2,
    square: 10,
    park: 30,
    forest: 'Unlimited'
  },
  {
    title: 'Decisions',
    backyard: 'closed',
    square: 'Unlimited',
    park: 'Unlimited',
    forest: 'Unlimited'
  },
  {
    title: 'To-Do Lists/Tasks',
    backyard: 'Unlimited',
    square: 'Unlimited',
    park: 'Unlimited',
    forest: 'Unlimited'
  },
  {
    title: 'Achievements/Targets',
    backyard: 'Unlimited',
    square: 'Unlimited',
    park: 'Unlimited',
    forest: 'Unlimited'
  },
  {
    title: 'Features',
    backyard: 'closed',
    square: 'Unlimited',
    park: 'Unlimited',
    forest: 'Unlimited'
  },
];

export const PRICING_INTERACTIONS_FEATURES = [
  {
    title: 'Conversations',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Video Meeting',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Update Sharing',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Meeting Schedule',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Documents',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Form',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Tasks Generator',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
];

export const PRICING_WELL_FITTED_FEATURES = [
  {
    title: 'Custom Status',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Tasks Forms',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Features Creator',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Clients Request Site',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Connectors',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Assets Datamodels Creator',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Site/Equipments Integration',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
];

export const PRICING_COLLABORATION_FEATURES = [
  {
    title: 'Teams',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Clients/Suppliers Users',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Notifications Restriction',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Automatic Tasks Allocation',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Workspaces Permissions',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Assign Comments',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Read Notification',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
];

export const PRICING_CONNECTORS_FEATURES = [
  {
    title: 'Connectors Library',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Connectors Generator',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Automatic Update',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Coyaba API',
    backyard: 'closed',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Enterprise API',
    backyard: 'closed',
    square: 'closed',
    park: 'closed',
    forest: 'checked'
  },
];

export const PRICING_SECURITY_FEATURES = [
  {
    title: 'Two-Factor Authentication',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Google & Microsoft SSO',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom SSO',
    backyard: 'closed',
    square: 'closed',
    park: 'closed',
    forest: 'checked'
  },
];

export const PRICING_SUPPORT_FEATURES = [
  {
    title: '24/7 Support',
    backyard: 'checked',
    square: 'checked',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Solution In Less 4 Hours',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Priority Support',
    backyard: 'closed',
    square: 'closed',
    park: 'checked',
    forest: 'checked'
  },
  {
    title: 'Custom Success Manager',
    backyard: 'closed',
    square: 'closed',
    park: 'closed',
    forest: 'checked'
  },
];

export const PRICING_FAQ_LIST = [
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus?',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus 1?',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus 2?',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus 3?',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus 4?',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
  {
    title: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus? 5',
    description: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates.',
    expanded: false
  },
];

export const SOLUTIONS_MENU = [
  {
    id: 'company-type',
    title: 'Company Type'
  },
  {
    id: 'teams',
    title: 'Teams'
  },
  {
    id: 'case-studies',
    title: 'Case Studies'
  },
]

export const COMPANY_TYPES = [
  {
    title: 'small',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    link: '',
    icon: IconPlantGreen,
    buttonColor: '#12274C',
    image: SolutionCardImage,
    color: '#12274C',
    iconWidth: '40px',
    iconHeight: '40px'
  },
  {
    title: 'medium',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    link: '',
    icon: IconTreeMedium,
    buttonColor: '#12274C',
    image: SolutionCardImage,
    color: '#12274C',
    iconWidth: '75px',
    iconHeight: '75px'
  },
  {
    title: 'large',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    link: '',
    icon: IconTreeLarge,
    buttonColor: '#12274C',
    image: SolutionCardImage,
    color: '#12274C',
    iconWidth: '90px',
    iconHeight: '90px'
  },
  {
    title: 'non-profit',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    link: '',
    icon: IconTreeNonProfit,
    buttonColor: '#34A853',
    image: SolutionCardImage,
    color: '#34A853',
    iconWidth: '90px',
    iconHeight: '90px'
  },
];

export const SOLUTIONS_SIDEBAR_MENU = [
  {
    id: 'companyType',
    title: 'Company Type',
    bgColor: '#12274C',
  },
  {
    id: 'teams',
    title: 'Teams',
    bgColor: '#fff',
  },
  {
    id: 'caseStudies',
    title: 'Case Studies',
    bgColor: '#fff',
  },
  {
    id: 'support',
    title: 'Support',
    bgColor: '#12274C',
  },
];

export const SOLUTIONS_TEAMS = [
  {
    id: 'marketing',
    href: '/teams/marketing',
    title: 'Marketing',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#DD5C70',
    image: SolutionCardImage
  },
  {
    id: 'sales',
    href: '/teams/sales',
    title: 'Sales',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#4285F4',
    image: SolutionCardImage
  },
  {
    id: 'operations',
    href: '/teams/operations',
    title: 'Operations',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#34A853',
    image: SolutionCardImage
  },
  {
    id: 'it',
    href: '/teams/it',
    title: 'IT',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#F6B646',
    image: SolutionCardImage
  },
  {
    id: 'finance',
    href: '/teams/finance',
    title: 'Finance',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#D65140',
    image: SolutionCardImage
  },
  {
    id: 'product',
    href: '/teams/product',
    title: 'Product',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#8254A9',
    image: SolutionCardImage
  },
  {
    id: 'stakeholders',
    href: '/teams/stakeholders',
    title: 'Stakeholders',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#285246',
    image: SolutionCardImage
  },
  {
    id: 'design-media',
    href: '/teams/design-media',
    title: 'Design/Media',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#FB74C4',
    image: SolutionCardImage
  },
  {
    id: 'education',
    href: '/teams/education',
    title: 'Education',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#284C88',
    image: SolutionCardImage
  },
  {
    id: 'construction',
    href: '/teams/construction',
    title: 'Construction/Real Estate',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#30C3EF',
    image: SolutionCardImage
  },
  {
    id: 'legal-hr',
    href: '/teams/customer-service',
    title: 'Legal/HR',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#528E61',
    image: SolutionCardImage
  },
  {
    id: 'customer-service',
    href: '/teams/customer-service',
    title: 'Customer Service',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#F37A86',
    image: SolutionCardImage
  }
]

export const SOLUTIONS_CASE_STUDIES = [
  {
    title: 'Saas Deployment',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#DD5C70',
    image: SolutionCardImage
  },
  {
    title: 'Sales Strategy/Follow-Up',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#4285F4',
    image: SolutionCardImage
  },
  {
    title: 'Customer Requests',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#34A853',
    image: SolutionCardImage
  },
  {
    title: 'Application Maintenance',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#F6B646',
    image: SolutionCardImage
  },
  {
    title: 'Project Management',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#D65140',
    image: SolutionCardImage
  },
  {
    title: 'Remote Work',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#8254A9',
    image: SolutionCardImage
  },
  {
    title: 'Launch New Product',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#285246',
    image: SolutionCardImage
  },
  {
    title: 'Systems Convergence',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#FB74C4',
    image: SolutionCardImage
  },
  {
    title: 'Personal',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#284C88',
    image: SolutionCardImage
  }
]

export const HOME_TEAMS_MENU_FOR_ALL = [
  {
    id: 'marketing',
    href: '/teams/marketing',
    title: 'Marketing',
    description: "You have multiple initiatives, offers and target groups. Coyaba will bring your a bit of structure and help you break it down into straightforward tasks, targets and decisions. As ever, sharing, communicating and working together will be ever easier. so that you'll have all done quicker and more smoothly.",
    color: '#DD5C70',
    image: SolutionCardImage
  },
  {
    id: 'sales',
    href: '/teams/sales',
    title: 'Sales',
    description: 'It may not be your CRM tool but will help you to create strategic plans and operational follow up, team management and collaboration to enhance your efficiency and help you surpass your goals.',
    color: '#4285F4',
    image: SolutionCardImage
  },
  {
    id: 'it',
    href: '/teams/it',
    title: 'IT',
    description: 'You have multiple ongoing projects on the IS side, IT installations with your external teams and suppliers - tight deadlines that rarely depend on you Coyaba will help you follow up, organize and manage workforce. Whether it is a project conception, development, deployment or support phase, the toolbox will help you gain time and be on spot when needed.',
    color: '#F6B646',
    image: SolutionCardImage
  },
  {
    id: 'finance',
    href: '/teams/finance',
    title: 'Finance',
    description: "Strict fiscal deadlines, repeated tasks and cycles, verifications and decision making can be quite a challenge especially given possible consequences of a mistake. Coyaba will help you not forget any of the important tiny details, help teams share work and take over. Decision making will be facilitated by the tool, so that you have it all on time and won't have to stay later than necessary.",
    color: '#D65140',
    image: SolutionCardImage
  },
  {
    id: 'product-development',
    href: '/teams/product-development',
    title: 'Product Development',
    description: 'You have many stages between product conception and deployment on the market. It can be quite challenging as it may involve many different teams, checks, approvals and a lot of going back and forth. Coyaba will keep track of each step, helping you only share with teams what is useful for them, sharing news with everyone involved, structuring operational processes and having decisions made on time. As it an exciting and stressful time, Coyaba will gain you time so you can enjoy it more!',
    color: '#8254A9',
    image: SolutionCardImage
  },
  {
    id: 'operations',
    href: '/teams/operations',
    title: 'Operations',
    description: 'Daily operations are vital to have your company running. Employee engagement, identifying risks and avoiding issues, keeping costs and timelines in order is a multitude of aspects that come under the belt and Coyaba will help you with each of them. Coyaba will facilitate gathering field data, raising risks and avoiding issues, communicating and sharing, keeping regular and random check ups in place, and provide you with time gain for more strategic and creative tasks or just that cup of coffee with your team.',
    color: '#34A853',
    image: SolutionCardImage
  },
  {
    id: 'human-resources',
    href: '/teams/human-resources',
    title: 'Human Resources',
    description: 'Keeping and onboarding great talent is your key goal. Coyaba will help you get closer to it, via generating feedback from your teams, onboarding new joiners and creating clear processes, generating and managing individual or team goals will all be much easier with Coyaba, so you have more time to nurture the human contact.',
    color: '#FB74C4',
    image: SolutionCardImage
  },
  {
    id: 'stakeholders',
    href: '/teams/stakeholders',
    title: 'Stakeholders',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#285246',
    image: SolutionCardImage
  },
  // {
  //   id: 'executive Suite',
  //   title: 'Executive Suite',
  //   description: 'All you need is an up to date overview of what is important, good news and issues pointed on time, having all the details to make decisions on your own time. Coyaba will do all that for you and more, and even here will not waste your precious time more.',
  //   color: '#F37A86',
  //   image: SolutionCardImage
  // }
]

export const HOME_BUILD_FOR_EVERYONE_MENU = [
  {
    title: 'Company Type',
    subMenu: [
      {
        title: 'Small',
        description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
        link: '',
        icon: IconPlantGreen,
        image: SolutionCardImage,
        color: '#4285F4',
        href: '/getstarted',
      },
      {
        title: 'Medium',
        description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
        link: '',
        icon: IconTreeMedium,
        image: SolutionCardImage,
        color: '#4285F4',
        href: '/getstarted',
      },
      {
        title: 'Large',
        description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
        link: '',
        icon: IconTreeLarge,
        image: SolutionCardImage,
        color: '#4285F4',
        href: '/getstarted',
      },
      {
        title: 'Non-Profit',
        description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
        link: '',
        icon: IconTreeNonProfit,
        image: SolutionCardImage,
        href: '/getstarted',
        color: '#4285F4',
      },
    ]
  },
  {
    title: 'Teams',
    subMenu: [
      ...HOME_TEAMS_MENU_FOR_ALL,
      {
        href: 'all',
        title: 'All Teams',
        description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
        color: '#F37A86',
        image: SolutionCardImage
      }
    ]
  }
]

export const TEAMS_CASE_STUDIES = [
  {
    title: 'Project Management',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#D65140',
    image: SolutionCardImage
  },
  {
    title: 'Launch New Product',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#285246',
    image: SolutionCardImage
  },
  {
    title: 'Customer Requests',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#34A853',
    image: SolutionCardImage
  },
  {
    title: 'Application Maintenance',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#F6B646',
    image: SolutionCardImage
  },
  {
    title: 'Saas Deployment',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#DD5C70',
    image: SolutionCardImage
  },
  {
    title: 'Remote Work',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#8254A9',
    image: SolutionCardImage
  },
  {
    title: 'Sales Strategy/Follow-Up',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#4285F4',
    image: SolutionCardImage
  },
  {
    title: 'Systems Convergence',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#FB74C4',
    image: SolutionCardImage
  },
  {
    title: 'Personal',
    description: 'Whatever industry you are, if you are a small and/family run company, Coyaba can replace most of your other applications.',
    color: '#284C88',
    image: SolutionCardImage
  }
]

export const TEAMS_SIDEBAR_MENU = [
  {
    id: 'goals',
    title: 'Goals',
    bgColor: '#12274C',
  },
  {
    id: 'toolkit',
    title: 'Toolkit',
    bgColor: '#fff',
  },
  {
    id: 'caseStudies',
    title: 'Case Studies',
    bgColor: '#fff',
  },
  {
    id: 'request-demo',
    title: 'Request a demo',
    bgColor: '#12274C',
  },
];


