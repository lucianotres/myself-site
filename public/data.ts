export const dataAbout = [
  {
    title: "ERP para provedor de internet",
    paragraph: "Manutenção e atualizações em sistema legado de empresa de internet. O software foi desenvolvido internamente pela equipe da empresa e conforme o seu crescimento necessitou de melhorias e novas funcionalidades. Trata-se de um software ERP para cadastros, controles administrativos, ordens de serviço, estoque, financeiro e faturamento. Abrange todas as áreas da empresa e voltado para seu uso exclusivo.",
    arraySkills: ["Delphi", "XML", "PostgreSQL", "Radius", "Mikrotik API"],
    image: "/images/erp1.png",
    link: "",
    sizeImg: {
      width: 830,
      height: 646,
    },
    aspectRatio: "",
    sizeImg2: {
      width: 830,
      height: 613,
    },
    aspectRatio2: "",
    moreDetails: {
      image: "/images/erp2.png",
      titles: ["Manutenção", "Atualizações", "Benefícios adquiridos"],
      texts: [
        "Garantir o funcionamento do sistema, correção de problemas conhecidos, gerenciamento de backups, atualizações fiscais e integrações contábeis. Apesar de ser um software legado desenvolvido em Delphi, estava diretamente integrado com a operação da empresa, sendo de extremo valor para ela.",
        "Na medida que o negócio foi evoluindo, a empresa necessitou de novos cadastros, melhorias nos atuais e diversas ferramentas gerenciais para análise de resultados. A forma mais rápida para o momento foi dar continuidade ao desenvolvimento na mesma plataforma.",
        "Tanto a empresa se beneficiou com meu trabalho prestado sob este sistema quanto eu mesmo. Este foi um período de muito aprendizado em relação ao mundo de redes de computadores e como isto se aplica para o funcionamento da internet. Bem como solidou muito meu conhecimento na linguagem Delphi e em banco de dados relacional PostgreSQL. ",
      ],
    },
  },
  {
    title: "Migração do ERP para Web",
    paragraph: "Com avanço das operações da empresa de internet, houve a necessidade de migrar o sistema para web. Isso se dava, pois, a operação estava distribuída e precisava de um acesso rápido e dinâmico, sem a dependência do sistema operacional Windows. Para cumprir esta missão foi escolhido a plataforma .NET e assim implementando boa parte do sistema em HTML5 / CSS3 com recursos como Blazor (WASM) e Javascript para integrações como o Google Maps.",
    arraySkills: ["HTML 5", "CSS 3", "C#", "Blazor", "Razor", "Javascript", "ASP.net", "PostgreSQL"],
    image: "/images/isp-tela1.png",
    link: "",
    sizeImg: {
      width: 1230,
      height: 916
    },
    aspectRatio: "",
    sizeImg2: {
      width: 1150,
      height: 892
    },
    aspectRatio2: "",
    moreDetails: {
      image: "/images/isp-tela2.png",
      titles: ["Novos desafios", "Reformulação de processos", "Integrações com aplicativos externos"],
      texts: [
        "No início a GUI do sistema web estava sendo desenvolvida em Razor, mas surgia uma nova opção chamada Blazor, prometendo uma interface muito mais conectada e dinâmica, tirando proveito de recursos como WebSockets e WASM. Necessitou novo aprendizado, mas tornou-se certeiro a escolha, devolvendo o prometido e se tornando o carro chefe do projeto. Cliente final (usuários da empresa) aprovaram categoricamente a nova usabilidade, melhorando consideravelmente a produtividade.",
        "A nova interface possibilitou a redefinição de processos. Participei junto com as equipes da empresa em reuniões em que discutimos formas de melhorar os procedimentos atuais e torná-los mais simples e eficientes. Agora o sistema permite agregar melhor os modelos e abre mais possibilidades de acessos especializados com toda a dinâmica de recursos na WEB.",
        "Foi incluído também recursos externos como API do Google Maps para gerenciar localizações de ativos da empresa em rua, bem como identificação de clientes e outros para agilizar o atendimento. Em se tratando de empresa de rede de computadores, muitos equipamentos oferecem APIs para administração, estas que foram também aproveitadas no sistema."
      ]
    }
  },
  {
    title: "Microsserviços e Docker",
    paragraph: "O sistema ERP migrado para Web estava ficando maior, demandando novas funcionalidades. Muitas destas funcionalidades não eram apenas visuais, mas sim funcionais executadas em segundo plano. Para melhor atender estas necessidades, optei por migrar o sistema para containers Docker, separando-o em módulos e aplicando padrões de microsserviços.",
    arraySkills: ["Docker", "Linux", "Microservices", "API", "NET Core", "MongoDB"],
    image: "/images/docker1.png",
    link: "",
    sizeImg: {
      width: 930,
      height: 669
    },
    aspectRatio: "",
    sizeImg2: {
      width: 700,
      height: 439
    },
    aspectRatio2: "",
    moreDetails: {
      image: "/images/Microservices-Architecture.png",
      titles: ["O desafio", "Benefícios"],
      texts: [
        "Foi necessário aprender uma nova arquitetura de desenvolvimento, readaptar o sistema para esta e integrar de forma a trabalhar em harmonia. Isto trouxe grande aprendizado, principalmente em operações em sistema Linux, que já era de meu conhecimento, mas que foi aprofundado.",
        "O fato de separar funcionalidades em serviços específicos, permitiu agilizar a integração de outros sistemas e facilitou imensamente o reparo de problemas detectados. Afinal, o downtime fica reduzido apenas ao serviço afetado e não mais ao sistema todo. Outro ganho foi a possibilidade de escalar conforme a demanda, recursos mais utilizados podem ser facilmente aumentados."
      ]
    }
  },
  {
    title: "App para smartphone",
    paragraph: "Hoje em dia todo o serviço ofertado ao público demanda a existência de um aplicativo para smartphone. Dentro da tecnologia .NET dei inicio ao desenvolvimento de um app multiplataforma em Xamarin, mas com a evolução da tecnologia atualizei o mesmo para MAUI. Trata-se de um app ao cliente final para acesso ao seu cadastro e controle financeiro e também um app para uso na área de suporte técnico em rua com dados de ordens de serviço.",
    arraySkills: ["C#", "MAUI", "Android", "iOS", "API"],
    image: "/images/app-mobile1.png",
    link: "",
    sizeImg: {
      width: 818,
      height: 1090
    },
    aspectRatio: "2/3",
    sizeImg2: {
      width: 604,
      height: 1090
    },
    aspectRatio2: "2/4",
    moreDetails: {
      image: "/images/app-mobile2.png",
      titles: ["Por que MAUI?", "Desenvolvimento nativo", "Integração com ERP"],
      texts: [
        "Tanto o Xamarin quanto o MAUI foram escolhidos por serem da plataforma .NET, o que reduziu a curva de aprendizagem, mas também por oferecerem suporte as duas maiores plataformas do mercado, Android e iOS. Essa facilidade agilizou o desenvolvimento e manutenção do app, fornecendo rapidamente o valor esperado pelo cliente.",
        "Apesar de usar MAUI para o desenvolvimento do app, tive de realizar desenvolvimento nativo em Android para ter acesso a APIs mais especificas no app de ordem de serviços. Foi necessário integrar recursos de acesso à rede, principalmente via Wi-Fi, para facilitar configuração de equipamentos através do app. Outros acessos pontais como localização GPS e coleta de assinatura digital via toque em tela, semelhante aos apps de entregas de encomendas.",
        "Claramente os apps desenvolvidos demandavam de dados armazenados nos sistemas já existentes. Para isso desenvolvi uma API para comunicação dos dados e também o armazenamento de partes no smartphone para operação mesmo em situações offline."
      ]
    }
  }
];