# BeeDASH
Dashboard de Gestão Integrada

📖 Sobre o Projeto

Este é um painel de controle (dashboard) completo para gestão empresarial, desenvolvido como uma Aplicação de Página Única (SPA) com uma arquitetura robusta e moderna. A interface, construída com HTML5, Tailwind CSS e JavaScript puro (ES6+), oferece uma visão 360º da empresa, consolidando dados de múltiplos departamentos em um ambiente interativo, responsivo e visualmente coeso.

O projeto foi estruturado utilizando princípios de Programação Orientada a Objetos (OOP) para garantir escalabilidade, manutenibilidade e uma clara separação de responsabilidades, demonstrando a construção de uma aplicação web complexa sem a necessidade de frameworks.

✨ Funcionalidades Principais

O dashboard é modularizado em painéis, cada um com funcionalidades específicas para diferentes áreas da empresa:

1. 🏠 Dashboard Geral

Visão Executiva: Apresenta KPIs consolidados das áreas mais críticas (Usuários, Financeiro, Projetos, Suporte) para uma análise rápida do status da empresa.
Gráfico de Resumo: Visualização da performance financeira geral ao longo dos últimos seis meses.

2. 👥 Gestão de Usuários

CRUD Completo: Adicione, edite e exclua usuários através de modais interativos.
Busca e Ordenação: Filtre a lista em tempo real e ordene a tabela dinamicamente por qualquer coluna.
Paginação Inteligente: Navegue facilmente por grandes volumes de dados.
Modal de Detalhes: Visualize um perfil completo do usuário, incluindo um gráfico de produtividade e um roadmap de carreira visual.

3. 💰 Dashboard Financeiro

KPIs em Destaque: Cards com resumo de Faturamento, Custos, Lucro Líquido e Crescimento.
Gráficos Detalhados: Análise de Receita vs. Despesa e Distribuição de Custos.

4. 📋 Quadro de Projetos Interativo

Kanban com Arrastar e Soltar (Drag and Drop): Organize e atualize o status dos projetos de forma intuitiva, movendo os cartões entre as colunas "Planejado", "Em Progresso" e "Concluído".
Filtro por Departamento: Visualize projetos específicos de cada área da empresa.

5. 📈 Painéis de Vendas e Marketing

Funil de Vendas: Acompanhe as etapas do processo de vendas, desde visitantes até clientes.
Métricas de Marketing: Monitore a geração de leads, Custo por Aquisição (CPA), ROI e desempenho por canal.

6. 📊 Relatórios e RH

Indicadores de RH: Acompanhe métricas como NPS Interno, Taxa de Turnover e Absenteísmo.
Gráficos Comparativos: Análise de produtividade por departamento e histórico de satisfação dos colaboradores.

7. 🎓 Plataforma de Cursos

Recomendação Inteligente: Selecione um colaborador para visualizar os cursos mais adequados ao seu cargo.
Catálogo Completo: Explore todos os treinamentos disponíveis na empresa.

8. 📞 Helpdesk e Suporte

Métricas de Atendimento: Cards com o status dos tickets (Abertos, Resolvidos) e Tempo Médio de Resposta.
Tabela de Chamados: Acompanhe os tickets recentes.

9. ⚙️ Configurações

Tema Escuro (Dark Mode): Alterne entre os temas claro e escuro para uma melhor experiência visual.

🛠️ Tecnologias Utilizadas

HTML5: Estrutura semântica e acessível.

Tailwind CSS: Framework CSS utilitário para um design rápido, responsivo e personalizável.

JavaScript (ES6+): Toda a lógica de interatividade, manipulação do DOM e gerenciamento de estado, estruturada em Classes (OOP).

Chart.js: Biblioteca para a criação de gráficos dinâmicos e interativos.

🏛️ Arquitetura do Código

O código JavaScript foi refatorado de um script procedural para uma arquitetura orientada a objetos, contida em uma única tag <script>.
MockDataService (Classe): Funciona como uma camada de serviço, responsável por fornecer e manipular todos os dados fictícios da aplicação. Em um projeto real, esta classe seria substituída por chamadas a uma API REST.
DashboardApp (Classe): É o controlador principal da aplicação. Suas responsabilidades incluem:
constructor: Inicializa o estado, faz o cache dos elementos do DOM e registra todos os event listeners.
Gerenciamento de Estado: Mantém um objeto state que centraliza todas as informações dinâmicas (página ativa, filtros, ordenação, etc.).
Renderização Reativa: Um método render() principal é chamado sempre que o estado muda, garantindo que a UI seja sempre um reflexo fiel dos dados atuais.
Separação de Métodos: Funções claramente divididas por responsabilidade (manipulação de eventos, renderização de componentes, funções utilitárias).

🎨 Personalização

Logo: Para alterar a logo, substitua a <img> e o <span> dentro da tag <aside> pelo seu próprio arquivo de imagem ou componente.

Cores: A paleta de cores pode ser facilmente modificada alterando as variáveis

OBRIGADOOOOOOOOOOOOOOOOOOOOOOOO !
