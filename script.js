// --- Estrutura Orientada a Objetos para o Dashboard ---
class MockDataService {
  constructor() {
    this.users = [
      {
        id: 1,
        nome: "Ana Silva",
        email: "ana.silva@example.com",
        cargo: "Desenvolvedora Front-end",
        status: "Ativo",
        ultimoAcesso: "2025-09-10T10:30:00Z",
        avatar: "https://i.pravatar.cc/150?u=1",
        produtividade: [10, 40, 25, 50, 30, 70, 60],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 61) + 20),
        projetosAtivos: 3,
        tarefasConcluidas: 112,
        roadmap: [
          { date: "2024-03-01", title: "Contratação", description: "Início como Desenvolvedor Front-end Jr.", status: "Concluído" },
          { date: "2024-09-15", title: "Treinamento React Avançado", description: "Conclusão do curso interno.", status: "Concluído" },
          { date: "2025-04-01", title: "Promoção para Pleno", description: "Revisão de performance e plano de desenvolvimento.", status: "Em Andamento" },
          { date: "2026-01-01", title: "Liderança Técnica", description: "Mentoria de novos desenvolvedores.", status: "Planejado" },
        ],
      },
      {
        id: 2,
        nome: "Bruno Costa",
        email: "bruno.costa@example.com",
        cargo: "Designer UX/UI",
        status: "Ativo",
        ultimoAcesso: "2025-09-10T09:00:00Z",
        avatar: "https://i.pravatar.cc/150?u=2",
        produtividade: [50, 45, 60, 55, 70, 75, 80],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 51) + 40),
        projetosAtivos: 5,
        tarefasConcluidas: 88,
        roadmap: [
          { date: "2023-11-10", title: "Contratação", description: "Início como Designer UX/UI Jr.", status: "Concluído" },
          { date: "2024-07-20", title: "Liderança de Projeto", description: 'Assumiu liderança de design no projeto "Novo App".', status: "Concluído" },
          { date: "2025-02-01", title: "Especialização em UX Research", description: "Início do curso de especialização.", status: "Em Andamento" },
          { date: "2025-10-01", title: "Promoção para Sênior", description: "Avaliação para cargo de Designer Sênior.", status: "Planejado" },
        ],
      },
      {
        id: 3,
        nome: "Carla Dias",
        email: "carla.dias@example.com",
        cargo: "Gerente de Projetos",
        status: "Inativo",
        ultimoAcesso: "2025-08-20T14:00:00Z",
        avatar: "https://i.pravatar.cc/150?u=3",
        produtividade: [30, 35, 20, 10, 0, 0, 0],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 41)),
        projetosAtivos: 1,
        tarefasConcluidas: 203,
        roadmap: [{ date: "2022-05-15", title: "Contratação", description: "Início como Gerente de Projetos.", status: "Concluído" }],
      },
      {
        id: 4,
        nome: "Daniel Martins",
        email: "daniel.martins@example.com",
        cargo: "Desenvolvedor Back-end",
        status: "Ativo",
        ultimoAcesso: "2025-09-09T18:45:00Z",
        avatar: "https://i.pravatar.cc/150?u=4",
        produtividade: [80, 85, 90, 88, 92, 95, 93],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 21) + 75),
        projetosAtivos: 4,
        tarefasConcluidas: 154,
        roadmap: [
          { date: "2024-01-20", title: "Contratação", description: "Início como Desenvolvedor Back-end Pleno.", status: "Concluído" },
          { date: "2025-08-01", title: "Certificação AWS", description: "Planejamento para obter certificação AWS Certified Developer.", status: "Planejado" },
        ],
      },
      {
        id: 5,
        nome: "Eduarda Ferreira",
        email: "eduarda.f@example.com",
        cargo: "Analista de QA",
        status: "Ativo",
        ultimoAcesso: "2025-09-10T11:00:00Z",
        avatar: "https://i.pravatar.cc/150?u=5",
        produtividade: [60, 62, 58, 65, 70, 68, 72],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 31) + 50),
        projetosAtivos: 6,
        tarefasConcluidas: 180,
        roadmap: [
          { date: "2024-06-01", title: "Contratação", description: "Início como Analista de QA.", status: "Concluído" },
          { date: "2025-01-15", title: "Automação de Testes", description: "Implementação de testes automatizados no projeto principal.", status: "Em Andamento" },
        ],
      },
      {
        id: 6,
        nome: "Fábio Souza",
        email: "fabio.s@example.com",
        cargo: "DevOps",
        status: "Ativo",
        ultimoAcesso: "2025-09-08T22:10:00Z",
        avatar: "https://i.pravatar.cc/150?u=6",
        produtividade: [40, 42, 50, 48, 55, 60, 50],
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 41) + 30),
        projetosAtivos: 2,
        tarefasConcluidas: 95,
        roadmap: [{ date: "2023-02-18", title: "Contratação", description: "Início como Analista DevOps.", status: "Concluído" }],
      },
    ];
    this.finance = {
      faturamento: 125400.5,
      custos: 78950.0,
      lucro: 46450.5,
      crescimento: 12,
      receitaDespesa: { labels: ["Abr", "Mai", "Jun", "Jul", "Ago", "Set"], receita: [80, 95, 110, 105, 120, 125], despesa: [50, 60, 65, 70, 75, 78] },
      distribuicaoCustos: { labels: ["Salários", "Marketing", "Infra", "Outros"], valores: [60, 20, 15, 5] },
    };
    this.projects = [
      { id: 1, nome: "Novo App Mobile", responsavel: "Ana Silva", prazo: "2025-10-30", status: "Em Progresso", departamento: "Tecnologia" },
      { id: 2, nome: "Campanha de Marketing Q4", responsavel: "Bruno Costa", prazo: "2025-12-15", status: "Planejado", departamento: "Marketing" },
      { id: 3, nome: "Migração de Servidor", responsavel: "Daniel Martins", prazo: "2025-09-25", status: "Concluído", departamento: "Tecnologia" },
      { id: 4, nome: "Pesquisa de Clima Org.", responsavel: "Isabela Santos", prazo: "2025-11-20", status: "Planejado", departamento: "RH" },
    ];
    this.reports = {
      nps: 78,
      turnover: 4.5,
      absenteismo: 1.2,
      horasTreinamento: 124,
      produtividadeDepto: { labels: ["Tecnologia", "Marketing", "RH", "Vendas"], valores: [85, 72, 68, 81] },
      npsHistory: { labels: ["Abr", "Mai", "Jun", "Jul", "Ago", "Set"], values: [72, 75, 74, 78, 77, 78] },
    };
    this.courses = [
      { id: 101, titulo: "React Avançado", categoria: "Tecnologia", duracao: "20h" },
      { id: 102, titulo: "Figma para UI Design", categoria: "Design", duracao: "15h" },
      { id: 103, titulo: "Gestão Ágil com Scrum", categoria: "Gestão", duracao: "25h" },
      { id: 104, titulo: "Node.js e APIs REST", categoria: "Tecnologia", duracao: "30h" },
      { id: 105, titulo: "Fundamentos de UX Research", categoria: "Design", duracao: "18h" },
    ];
    this.roleToCourseCategoryMap = {
      "Desenvolvedora Front-end": ["Tecnologia", "Design"],
      "Designer UX/UI": ["Design"],
      "Gerente de Projetos": ["Gestão"],
      "Desenvolvedor Back-end": ["Tecnologia"],
      "Analista de QA": ["Tecnologia", "Gestão"],
      DevOps: ["Tecnologia"],
    };
    this.supportTickets = [
      { id: "TKT-001", cliente: "SuperCorp", assunto: "API não responde", status: "Aberto", dataAbertura: "2025-09-10T09:15:00Z", dataResolucao: null },
      { id: "TKT-002", cliente: "InovaTech", assunto: "Erro no login", status: "Em Andamento", dataAbertura: "2025-09-09T14:30:00Z", dataResolucao: null },
      { id: "TKT-003", cliente: "Market Solutions", assunto: "Dúvida sobre fatura", status: "Resolvido", dataAbertura: "2025-09-08T11:00:00Z", dataResolucao: "2025-09-08T15:45:00Z" },
      { id: "TKT-004", cliente: "MegaEmpresa", assunto: "Lentidão no dashboard", status: "Aberto", dataAbertura: "2025-09-10T10:05:00Z", dataResolucao: null },
    ];
    this.sales = {
      newDeals: 42,
      conversionRate: 23.5,
      salesCycle: 34,
      salesFunnel: { labels: ["Visitantes", "Leads", "Oportunidades", "Clientes"], values: [1000, 450, 180, 42] },
    };
    this.marketing = {
      newLeads: 450,
      cpa: 25.5,
      roi: 350,
      leadGen: { labels: ["Abr", "Mai", "Jun", "Jul", "Ago", "Set"], values: [250, 310, 380, 350, 410, 450] },
      channelPerformance: { labels: ["Orgânico", "Pago", "Referência", "Social"], values: [40, 30, 15, 15] },
    };
    this.settings = { darkMode: true };
  }

  getUsers() {
    return this.users;
  }
  getFinanceData() {
    return this.finance;
  }
  getProjects() {
    return this.projects;
  }
  getReportsData() {
    return this.reports;
  }
  getCoursesData() {
    return { courses: this.courses, map: this.roleToCourseCategoryMap };
  }
  getSupportData() {
    return this.supportTickets;
  }
  getSalesData() {
    return this.sales;
  }
  getMarketingData() {
    return this.marketing;
  }
  getSettings() {
    return this.settings;
  }

  deleteUser(id) {
    this.users = this.users.filter((u) => u.id !== id);
    return true;
  }

  saveUser(userData) {
    const id = parseInt(userData.idUsuario);
    delete userData.idUsuario;
    if (id) {
      const index = this.users.findIndex((u) => u.id === id);
      if (index !== -1) Object.assign(this.users[index], userData);
    } else {
      const newId = this.users.length > 0 ? Math.max(...this.users.map((u) => u.id)) + 1 : 1;
      this.users.unshift({
        id: newId,
        ...userData,
        avatar: `https://i.pravatar.cc/150?u=${newId}`,
        ultimoAcesso: new Date().toISOString(),
        produtividade: Array(7)
          .fill(0)
          .map(() => Math.floor(Math.random() * 100)),
        produtividade30d: Array.from({ length: 30 }, () => Math.floor(Math.random() * 81) + 10),
        projetosAtivos: Math.floor(Math.random() * 5) + 1,
        tarefasConcluidas: Math.floor(Math.random() * 150) + 50,
        roadmap: [],
      });
    }
  }

  updateProjectStatus(projectId, newStatus) {
    const project = this.projects.find((p) => p.id === projectId);
    if (project) {
      project.status = newStatus;
    }
  }

  toggleDarkMode() {
    this.settings.darkMode = !this.settings.darkMode;
    return this.settings.darkMode;
  }
}

class DashboardApp {
  constructor(config) {
    this.config = {
      linhasPorPagina: config.linhasPorPagina || 5,
      corGrafico: getComputedStyle(document.documentElement).getPropertyValue("--cor-primaria").trim() || "#f59e0b",
      corGraficoSecundaria: "#ef4444",
      corBordaSuave: getComputedStyle(document.documentElement).getPropertyValue("--cor-borda-suave").trim() || "#e5e7eb",
      corTextoSecundario: getComputedStyle(document.documentElement).getPropertyValue("--cor-texto-secundario").trim() || "#6b7280",
    };

    this.dataService = new MockDataService();
    this.chartInstances = {};

    this.state = {
      activeScreen: "dashboard",
      users: { currentPage: 1, sortColumn: "nome", sortDirection: "asc", searchTerm: "" },
      projects: { departmentFilter: "todos" },
      courses: { selectedUserId: null },
      modal: { formOpen: false, confirmOpen: false, userDetailsOpen: false, userIdToView: null, userIdToEdit: null, userIdToDelete: null },
    };

    this.cacheDomElements();
    this.bindEvents();
    this.initDarkMode();
  }

  init() {
    this.render();
  }

  cacheDomElements() {
    this.dom = {
      html: document.documentElement,
      navLinks: document.querySelectorAll(".nav-link"),
      contentScreens: document.querySelectorAll(".tela-conteudo"),
      userTableBody: document.getElementById("corpoTabela"),
      searchInput: document.getElementById("campoBusca"),
      prevPageBtn: document.getElementById("btnPaginaAnterior"),
      nextPageBtn: document.getElementById("btnPaginaProxima"),
      pageInfo: document.getElementById("infoPagina"),
      entryInfo: { initial: document.getElementById("entradaInicial"), final: document.getElementById("entradaFinal"), total: document.getElementById("totalEntradas") },
      noResultsDiv: document.getElementById("semResultados"),
      userTableHeader: document.querySelector("#tela-usuarios thead"),
      projectScreen: document.getElementById("tela-projetos"),
      projectDepartmentFilter: document.getElementById("filtro-departamento"),
      projectColumns: { planned: document.getElementById("coluna-planejado"), progress: document.getElementById("coluna-progresso"), completed: document.getElementById("coluna-concluido") },
      courseEmployeeSelector: document.getElementById("selecao-colaborador"),
      courseRecommendedContainer: document.getElementById("container-cursos-recomendados"),
      courseRecommendedList: document.getElementById("lista-cursos-recomendados"),
      courseCatalog: document.getElementById("catalogo-cursos"),
      supportTableBody: document.getElementById("corpoTabelaSuporte"),
      darkModeToggle: document.getElementById("darkModeToggle"),
      formModal: document.getElementById("modalFormulario"),
      confirmModal: document.getElementById("modalConfirmacao"),
      userDetailsModal: document.getElementById("modalDetalhesUsuario"),
      userDetailsContent: document.getElementById("conteudoModalDetalhes"),
      userForm: document.getElementById("formularioUsuario"),
      modalTitle: document.getElementById("tituloModal"),
      notificationContainer: document.getElementById("containerNotificacao"),
    };
  }

  bindEvents() {
    this.dom.navLinks.forEach((link) => link.addEventListener("click", this.handleNavClick.bind(this)));
    this.dom.searchInput.addEventListener("input", this.handleSearch.bind(this));
    this.dom.userTableHeader.addEventListener("click", this.handleSort.bind(this));
    this.dom.prevPageBtn.addEventListener("click", () => this.changePage(-1));
    this.dom.nextPageBtn.addEventListener("click", () => this.changePage(1));
    this.dom.projectDepartmentFilter.addEventListener("change", this.handleProjectFilter.bind(this));
    this.dom.courseEmployeeSelector.addEventListener("change", this.handleCourseFilter.bind(this));
    this.dom.darkModeToggle.addEventListener("change", this.handleDarkModeToggle.bind(this));
    document.body.addEventListener("click", this.handleGlobalClick.bind(this));
    this.dom.userForm.addEventListener("submit", this.handleFormSubmit.bind(this));

    // Eventos de Arrastar e Soltar
    this.dom.projectScreen.addEventListener("dragstart", this.handleDragStart.bind(this));
    this.dom.projectScreen.addEventListener("dragover", this.handleDragOver.bind(this));
    this.dom.projectScreen.addEventListener("dragleave", this.handleDragLeave.bind(this));
    this.dom.projectScreen.addEventListener("drop", this.handleDrop.bind(this));
    this.dom.projectScreen.addEventListener("dragend", this.handleDragEnd.bind(this));
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  handleNavClick(e) {
    e.preventDefault();
    this.setState({ activeScreen: e.currentTarget.dataset.tela });
  }
  handleSearch(e) {
    this.state.users.searchTerm = e.target.value.toLowerCase();
    this.state.users.currentPage = 1;
    this.render();
  }
  handleProjectFilter(e) {
    this.state.projects.departmentFilter = e.target.value;
    this.render();
  }
  handleCourseFilter(e) {
    this.state.courses.selectedUserId = parseInt(e.target.value) || null;
    this.render();
  }
  handleDarkModeToggle() {
    const isDarkMode = this.dataService.toggleDarkMode();
    this.dom.html.classList.toggle("dark", isDarkMode);
  }

  initDarkMode() {
    const isDarkMode = this.dataService.getSettings().darkMode;
    this.dom.html.classList.toggle("dark", isDarkMode);
    this.dom.darkModeToggle.checked = isDarkMode;
  }

  handleSort(e) {
    const th = e.target.closest("th[data-ordenacao]");
    if (!th) return;
    const column = th.dataset.ordenacao;
    const { sortColumn, sortDirection } = this.state.users;
    this.state.users.sortColumn = column;
    this.state.users.sortDirection = column === sortColumn && sortDirection === "asc" ? "desc" : "asc";
    this.render();
  }

  handleGlobalClick(e) {
    const target = e.target.closest("[data-id], button, a");
    if (!target) return;

    if (target.id === "btnAdicionarUsuario") this.openFormModal();
    else if (target.classList.contains("btn-editar")) this.openFormModal(parseInt(target.dataset.id));
    else if (target.classList.contains("btn-detalhes")) this.openUserDetailsModal(parseInt(target.dataset.id));
    else if (target.classList.contains("btn-excluir")) this.openConfirmModal(parseInt(target.dataset.id));
    else if (target.id === "btnFecharModal" || target.id === "btnCancelar" || e.target === this.dom.formModal) this.closeFormModal();
    else if (target.id === "btnFecharModalDetalhes" || e.target === this.dom.userDetailsModal) this.closeUserDetailsModal();
    else if (target.id === "btnCancelarExclusao" || e.target === this.dom.confirmModal) this.closeConfirmModal();
    else if (target.id === "btnConfirmarExclusao") this.handleDeleteConfirm();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target).entries());
    this.dataService.saveUser(userData);
    this.showNotification(`Usuário ${userData.idUsuario ? "atualizado" : "adicionado"} com sucesso!`);
    this.closeFormModal();
    this.render();
  }

  handleDeleteConfirm() {
    this.dataService.deleteUser(this.state.modal.userIdToDelete);
    this.showNotification("Usuário excluído com sucesso.", "erro");
    this.closeConfirmModal();
    this.render();
  }

  // --- Métodos de Arrastar e Soltar (Drag and Drop) ---
  handleDragStart(e) {
    if (e.target.classList.contains("project-card")) {
      e.dataTransfer.setData("text/plain", e.target.dataset.projectId);
      setTimeout(() => e.target.classList.add("dragging"), 0);
    }
  }

  handleDragOver(e) {
    e.preventDefault();
    const column = e.target.closest(".kanban-column");
    if (column) {
      column.classList.add("drag-over");
    }
  }

  handleDragLeave(e) {
    const column = e.target.closest(".kanban-column");
    if (column) {
      column.classList.remove("drag-over");
    }
  }

  handleDrop(e) {
    e.preventDefault();
    const column = e.target.closest(".kanban-column");
    if (column) {
      column.classList.remove("drag-over");
      const projectId = parseInt(e.dataTransfer.getData("text/plain"));
      const newStatus = column.dataset.status;
      this.dataService.updateProjectStatus(projectId, newStatus);
      this.showNotification(`Projeto #${projectId} movido para "${newStatus}"!`);
      this.render();
    }
  }

  handleDragEnd(e) {
    if (e.target.classList.contains("project-card")) {
      e.target.classList.remove("dragging");
    }
  }

  changePage(direction) {
    const newPage = this.state.users.currentPage + direction;
    if (newPage >= 1 && newPage <= this.calculateTotalPages()) {
      this.state.users.currentPage = newPage;
      this.render();
    }
  }

  render() {
    this.renderActiveScreen();
    if (this.state.activeScreen === "dashboard") this.renderDashboard();
    if (this.state.activeScreen === "usuarios") this.renderUsers();
    if (this.state.activeScreen === "financeiro") this.renderFinance();
    if (this.state.activeScreen === "projetos") this.renderProjects();
    if (this.state.activeScreen === "vendas") this.renderSales();
    if (this.state.activeScreen === "marketing") this.renderMarketing();
    if (this.state.activeScreen === "relatorios") this.renderReports();
    if (this.state.activeScreen === "cursos") this.renderCourses();
    if (this.state.activeScreen === "suporte") this.renderSupport();
    if (this.state.activeScreen === "configuracoes") this.renderSettings();
    this.renderModals();
  }

  renderActiveScreen() {
    this.dom.contentScreens.forEach((screen) => screen.classList.add("hidden"));
    document.getElementById(`tela-${this.state.activeScreen}`).classList.remove("hidden");
    this.dom.navLinks.forEach((link) => link.classList.toggle("nav-link-ativo", link.dataset.tela === this.state.activeScreen));
  }

  renderDashboard() {
    const users = this.dataService.getUsers();
    const finance = this.dataService.getFinanceData();
    const projects = this.dataService.getProjects();
    const tickets = this.dataService.getSupportData();

    document.getElementById("kpi-usuarios-ativos").textContent = users.filter((u) => u.status === "Ativo").length;
    document.getElementById("kpi-lucro-liquido").textContent = this.formatCurrency(finance.lucro);
    document.getElementById("kpi-projetos-andamento").textContent = projects.filter((p) => p.status === "Em Progresso").length;
    document.getElementById("kpi-tickets-abertos").textContent = tickets.filter((t) => t.status === "Aberto" || t.status === "Em Andamento").length;

    this.createOrUpdateChart(
      "grafico-resumo-financeiro",
      "line",
      {
        labels: finance.receitaDespesa.labels,
        datasets: [
          { label: "Receita (k)", data: finance.receitaDespesa.receita, borderColor: this.config.corGrafico, backgroundColor: "rgba(245, 158, 11, 0.1)", fill: true, tension: 0.4 },
          { label: "Lucro (k)", data: finance.receitaDespesa.receita.map((r, i) => r - finance.receitaDespesa.despesa[i]), borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.1)", fill: true, tension: 0.4 },
        ],
      },
      { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() }, scales: { y: { grid: { color: this.config.corBordaSuave } } } }
    );
  }

  renderUsers() {
    const users = this.getProcessedUsers();
    this.dom.userTableBody.innerHTML = users.map((user) => this.createUserRowHtml(user)).join("");
    this.dom.noResultsDiv.classList.toggle("hidden", users.length > 0);
    this.updatePaginationUI();
    this.updateSortArrows();
  }

  renderFinance() {
    const data = this.dataService.getFinanceData();
    document.getElementById("card-faturamento").textContent = this.formatCurrency(data.faturamento);
    document.getElementById("card-custos").textContent = this.formatCurrency(data.custos);
    document.getElementById("card-lucro").textContent = this.formatCurrency(data.lucro);
    document.getElementById("card-crescimento").textContent = `+${data.crescimento}%`;

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() },
      scales: {
        y: { grid: { color: this.config.corBordaSuave }, ticks: { color: this.config.corTextoSecundario } },
        x: { grid: { display: false }, ticks: { color: this.config.corTextoSecundario } },
      },
    };

    this.createOrUpdateChart(
      "grafico-receita-despesa",
      "line",
      {
        labels: data.receitaDespesa.labels,
        datasets: [
          { label: "Receita (k)", data: data.receitaDespesa.receita, borderColor: this.config.corGrafico, backgroundColor: "rgba(245, 158, 11, 0.1)", fill: true, tension: 0.4 },
          { label: "Despesa (k)", data: data.receitaDespesa.despesa, borderColor: this.config.corGraficoSecundaria, backgroundColor: "rgba(239, 68, 68, 0.1)", fill: true, tension: 0.4 },
        ],
      },
      chartOptions
    );

    this.createOrUpdateChart(
      "grafico-distribuicao-custos",
      "doughnut",
      {
        labels: data.distribuicaoCustos.labels,
        datasets: [{ data: data.distribuicaoCustos.valores, backgroundColor: [this.config.corGrafico, "#34d399", "#3b82f6", "#9ca3af"], borderWidth: 0 }],
      },
      { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { color: this.config.corTextoSecundario } }, tooltip: this.getChartTooltipOptions() } }
    );
  }

  renderProjects() {
    const { planned, progress, completed } = this.dom.projectColumns;
    planned.innerHTML = progress.innerHTML = completed.innerHTML = "";
    const projects = this.dataService.getProjects().filter((p) => this.state.projects.departmentFilter === "todos" || p.departamento === this.state.projects.departmentFilter);
    projects.forEach((p) => {
      const cardHtml = `<div class="project-card bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-600 cursor-grab" draggable="true" data-project-id="${p.id}"><p class="font-bold text-gray-800 dark:text-neutral-100 pointer-events-none">${
        p.nome
      }</p><p class="text-sm text-gray-500 dark:text-neutral-400 pointer-events-none">${p.responsavel}</p><p class="text-sm mt-2 pointer-events-none">Prazo: ${this.formatDate(p.prazo, { dateStyle: "short" })}</p></div>`;
      const column = p.status === "Planejado" ? planned : p.status === "Em Progresso" ? progress : completed;
      column.innerHTML += cardHtml;
    });
  }

  renderSales() {
    const data = this.dataService.getSalesData();
    document.getElementById("kpi-novos-negocios").textContent = data.newDeals;
    document.getElementById("kpi-taxa-conversao").textContent = `${data.conversionRate}%`;
    document.getElementById("kpi-ciclo-vendas").textContent = data.salesCycle;

    this.createOrUpdateChart(
      "grafico-funil-vendas",
      "bar",
      {
        labels: data.salesFunnel.labels,
        datasets: [
          {
            label: "Contagem",
            data: data.salesFunnel.values,
            backgroundColor: [this.config.corGrafico, "#fbbf24", "#fcd34d", "#fde68a"],
            borderRadius: 4,
          },
        ],
      },
      {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() },
        scales: { x: { grid: { color: this.config.corBordaSuave } } },
      }
    );
  }

  renderMarketing() {
    const data = this.dataService.getMarketingData();
    document.getElementById("kpi-novos-leads").textContent = data.newLeads;
    document.getElementById("kpi-cpa").textContent = this.formatCurrency(data.cpa);
    document.getElementById("kpi-roi").textContent = `${data.roi}%`;

    this.createOrUpdateChart(
      "grafico-geracao-leads",
      "line",
      {
        labels: data.leadGen.labels,
        datasets: [
          {
            label: "Leads",
            data: data.leadGen.values,
            borderColor: this.config.corGrafico,
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() }, scales: { y: { grid: { color: this.config.corBordaSuave } } } }
    );

    this.createOrUpdateChart(
      "grafico-desempenho-canal",
      "pie",
      {
        labels: data.channelPerformance.labels,
        datasets: [
          {
            data: data.channelPerformance.values,
            backgroundColor: [this.config.corGrafico, "#34d399", "#3b82f6", "#9ca3af"],
            borderWidth: 0,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { color: this.config.corTextoSecundario } }, tooltip: this.getChartTooltipOptions() } }
    );
  }

  renderReports() {
    const data = this.dataService.getReportsData();
    document.getElementById("indicador-nps").textContent = data.nps;
    document.getElementById("indicador-turnover").textContent = `${data.turnover}%`;
    document.getElementById("indicador-absenteismo").textContent = `${data.absenteismo}%`;
    document.getElementById("indicador-treinamento").textContent = `${data.horasTreinamento}h`;

    this.createOrUpdateChart(
      "grafico-produtividade-depto",
      "doughnut",
      {
        labels: data.produtividadeDepto.labels,
        datasets: [
          {
            label: "Produtividade Média",
            data: data.produtividadeDepto.valores,
            backgroundColor: [this.config.corGrafico, "#10b981", "#ef4444", "#3b82f6"],
            borderWidth: 0,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: this.config.corTextoSecundario },
          },
          tooltip: this.getChartTooltipOptions(),
        },
      }
    );

    this.createOrUpdateChart(
      "grafico-nps-historico",
      "line",
      {
        labels: data.npsHistory.labels,
        datasets: [
          {
            label: "NPS",
            data: data.npsHistory.values,
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() },
        scales: {
          y: { beginAtZero: false, grid: { color: this.config.corBordaSuave }, ticks: { color: this.config.corTextoSecundario } },
          x: { grid: { display: false }, ticks: { color: this.config.corTextoSecundario } },
        },
      }
    );
  }

  renderCourses() {
    const { courses, map } = this.dataService.getCoursesData();
    const users = this.dataService.getUsers();

    this.dom.courseEmployeeSelector.innerHTML = `<option value="">Selecione...</option>` + users.map((u) => `<option value="${u.id}">${u.nome}</option>`).join("");
    this.dom.courseEmployeeSelector.value = this.state.courses.selectedUserId || "";

    this.dom.courseCatalog.innerHTML = courses
      .map(
        (course) => `
            <div class="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700">
                <h3 class="font-bold text-gray-800 dark:text-neutral-100">${course.titulo}</h3>
                <p class="text-sm text-gray-500 dark:text-neutral-400">${course.categoria} - ${course.duracao}</p>
            </div>`
      )
      .join("");

    if (this.state.courses.selectedUserId) {
      const user = users.find((u) => u.id === this.state.courses.selectedUserId);
      const recommendedCategories = map[user.cargo] || [];
      const recommendedCourses = courses.filter((c) => recommendedCategories.includes(c.categoria));

      this.dom.courseRecommendedList.innerHTML = recommendedCourses
        .map(
          (course) => `
                <div class="bg-amber-50 dark:bg-amber-900/50 border-l-4 border-amber-500 p-4 rounded-lg">
                    <h3 class="font-bold text-amber-800 dark:text-amber-200">${course.titulo}</h3>
                    <p class="text-sm text-amber-600 dark:text-amber-300">${course.categoria} - ${course.duracao}</p>
                </div>`
        )
        .join("");
      this.dom.courseRecommendedContainer.classList.remove("hidden");
    } else {
      this.dom.courseRecommendedContainer.classList.add("hidden");
    }
  }

  renderSupport() {
    const tickets = this.dataService.getSupportData();
    const openTickets = tickets.filter((t) => t.status === "Aberto" || t.status === "Em Andamento").length;
    const resolvedTickets = tickets.filter((t) => t.status === "Resolvido").length;

    const responseTimes = tickets.filter((t) => t.dataResolucao).map((t) => new Date(t.dataResolucao) - new Date(t.dataAbertura));
    const avgTimeMs = responseTimes.length > 0 ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length : 0;
    const hours = Math.floor(avgTimeMs / 3600000);
    const minutes = Math.round((avgTimeMs % 3600000) / 60000);

    document.getElementById("card-tickets-abertos").textContent = openTickets;
    document.getElementById("card-tickets-resolvidos").textContent = resolvedTickets;
    document.getElementById("card-tempo-resposta").textContent = `${hours}h ${minutes}m`;

    this.dom.supportTableBody.innerHTML = tickets
      .map(
        (ticket) => `
            <tr class="hover:bg-gray-50 dark:hover:bg-neutral-700/50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-neutral-200">${ticket.id}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${ticket.cliente}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${ticket.assunto}</td>
                <td class="px-6 py-4 whitespace-nowrap"><span class="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${this.getSupportStatusBadge(ticket.status)}">${ticket.status}</span></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${this.formatDate(ticket.dataAbertura)}</td>
            </tr>
        `
      )
      .join("");
  }

  renderSettings() {
    // A lógica de renderização para as configurações é principalmente para garantir
    // que o estado do toggle corresponda ao estado dos dados.
    this.dom.darkModeToggle.checked = this.dataService.getSettings().darkMode;
  }

  renderModals() {
    this.dom.formModal.classList.toggle("flex", this.state.modal.formOpen);
    this.dom.formModal.classList.toggle("hidden", !this.state.modal.formOpen);
    this.dom.confirmModal.classList.toggle("flex", this.state.modal.confirmOpen);
    this.dom.confirmModal.classList.toggle("hidden", !this.state.modal.confirmOpen);
    this.dom.userDetailsModal.classList.toggle("flex", this.state.modal.userDetailsOpen);
    this.dom.userDetailsModal.classList.toggle("hidden", !this.state.modal.userDetailsOpen);
  }

  getProcessedUsers() {
    const { searchTerm, sortColumn, sortDirection, currentPage } = this.state.users;
    const filtered = this.dataService.getUsers().filter((item) => Object.values(item).some((val) => String(val).toLowerCase().includes(searchTerm)));
    filtered.sort((a, b) => {
      const valA = a[sortColumn],
        valB = b[sortColumn];
      return (sortDirection === "asc" ? 1 : -1) * (typeof valA === "string" ? valA.localeCompare(valB) : new Date(valA) - new Date(valB));
    });
    this.filteredUserCount = filtered.length;
    return filtered.slice((currentPage - 1) * this.config.linhasPorPagina, currentPage * this.config.linhasPorPagina);
  }

  calculateTotalPages() {
    return Math.ceil(this.filteredUserCount / this.config.linhasPorPagina) || 1;
  }

  openFormModal(userId = null) {
    this.dom.userForm.reset();
    this.dom.modalTitle.textContent = userId ? "Editar Usuário" : "Adicionar Usuário";
    this.dom.userForm.idUsuario.value = userId || "";
    if (userId) {
      const user = this.dataService.getUsers().find((u) => u.id === userId);
      if (user)
        Object.keys(user).forEach((key) => {
          if (this.dom.userForm[key]) this.dom.userForm[key].value = user[key];
        });
    }
    this.state.modal.formOpen = true;
    this.renderModals();
  }

  closeFormModal() {
    this.state.modal.formOpen = false;
    this.renderModals();
  }
  openConfirmModal(userId) {
    this.state.modal.userIdToDelete = userId;
    this.state.modal.confirmOpen = true;
    this.renderModals();
  }
  closeConfirmModal() {
    this.state.modal.confirmOpen = false;
    this.renderModals();
  }

  getRoadmapStatusStyles(status) {
    switch (status) {
      case "Concluído":
        return {
          icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`,
          color: "bg-green-500 text-white",
          borderColor: "border-green-500",
        };
      case "Em Andamento":
        return {
          icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.72 6 7.142 6 8.5c0 1.102.379 2.135 1.002 2.943a1 1 0 11-1.498 1.342A8.006 8.006 0 004 8.5c0-.993.31-1.928.872-2.734.11.33.224.654.36 1.261zM10 4.332a6.012 6.012 0 012.706 1.912c-.23-.29-.487-.546-.764-.764A6.012 6.012 0 0110 4.332z" clip-rule="evenodd"></path></svg>`,
          color: "bg-blue-500 text-white",
          borderColor: "border-blue-500",
        };
      case "Planejado":
      default:
        return {
          icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C3.732 4.943 9.522 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-9.062 7-9.542 7S3.732 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>`,
          color: "bg-gray-400 dark:bg-neutral-500 text-white",
          borderColor: "border-gray-400 dark:border-neutral-500",
        };
    }
  }

  openUserDetailsModal(userId) {
    const user = this.dataService.getUsers().find((u) => u.id === userId);
    if (!user) return;
    this.dom.userDetailsContent.innerHTML = `
            <div>
                <div class="flex flex-col sm:flex-row gap-6 border-b border-gray-200 dark:border-neutral-700 pb-6 mb-6">
                    <div class="flex-shrink-0 text-center sm:text-left">
                        <img src="${user.avatar}" class="h-24 w-24 rounded-full mx-auto sm:mx-0">
                        <h4 class="text-lg font-bold mt-2 text-gray-800 dark:text-neutral-100">${user.nome}</h4>
                        <p class="text-gray-500 dark:text-neutral-400">${user.cargo}</p>
                        <span class="mt-2 px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${this.getStatusBadge(user.status)}">${user.status}</span>
                    </div>
                    <div class="flex-1">
                        <div class="grid grid-cols-2 gap-4 text-center mb-4">
                            <div class="bg-gray-100 dark:bg-neutral-700 p-3 rounded-lg"><p class="text-sm text-gray-500 dark:text-neutral-400">Projetos Ativos</p><p class="text-xl font-bold text-gray-800 dark:text-neutral-100">${user.projetosAtivos}</p></div>
                            <div class="bg-gray-100 dark:bg-neutral-700 p-3 rounded-lg"><p class="text-sm text-gray-500 dark:text-neutral-400">Tarefas Concluídas</p><p class="text-xl font-bold text-gray-800 dark:text-neutral-100">${user.tarefasConcluidas}</p></div>
                        </div>
                        <div class="h-48"><canvas id="grafico-detalhes-produtividade"></canvas></div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-neutral-100 mb-4">Roadmap de Carreira</h3>
                    <div class="relative pl-4">
                        <!-- Vertical line -->
                        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-600"></div>
                        
                        ${user.roadmap
                          .map((item) => {
                            const styles = this.getRoadmapStatusStyles(item.status);
                            return `
                            <div class="relative mb-8">
                                <div class="absolute left-6 -translate-x-1/2 top-1 w-5 h-5 rounded-full flex items-center justify-center ${styles.color}">
                                    ${styles.icon}
                                </div>
                                <div class="ml-10">
                                    <div class="p-4 bg-gray-50 dark:bg-neutral-700/50 rounded-lg border border-gray-200 dark:border-neutral-700">
                                        <div class="flex justify-between items-center">
                                            <h4 class="font-bold text-gray-800 dark:text-neutral-100">${item.title}</h4>
                                            <span class="text-xs text-gray-500 dark:text-neutral-400">${this.formatDate(item.date, { dateStyle: "medium" })}</span>
                                        </div>
                                        <p class="text-sm text-gray-600 dark:text-neutral-300 mt-1">${item.description}</p>
                                    </div>
                                </div>
                            </div>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
            </div>
        `;
    this.state.modal.userDetailsOpen = true;
    this.renderModals();

    // Renderiza o gráfico APÓS o modal estar visível
    setTimeout(() => {
      const labels = Array.from({ length: 30 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (29 - i));
        return d;
      });
      this.createOrUpdateChart(
        "grafico-detalhes-produtividade",
        "line",
        {
          labels,
          datasets: [
            {
              label: "Produtividade",
              data: user.produtividade30d,
              borderColor: this.config.corGrafico,
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: this.getChartTooltipOptions() }, scales: { y: { beginAtZero: true }, x: { type: "time", time: { unit: "day" } } } }
      );
    }, 50);
  }
  closeUserDetailsModal() {
    this.state.modal.userDetailsOpen = false;
    this.renderModals();
  }

  showNotification(message, type = "sucesso") {
    const colors = type === "sucesso" ? "bg-green-500 border-green-600" : "bg-red-500 border-red-600";
    const notification = Object.assign(document.createElement("div"), {
      className: `p-4 text-white rounded-lg shadow-md border-l-4 ${colors} animacao-notificacao-entrada`,
      textContent: message,
    });
    this.dom.notificationContainer.appendChild(notification);
    setTimeout(() => {
      notification.classList.replace("animacao-notificacao-entrada", "animacao-notificacao-saida");
      notification.addEventListener("animationend", () => notification.remove());
    }, 3000);
  }

  createUserRowHtml(item) {
    return `
            <tr class="hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors duration-200">
                <td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="flex-shrink-0 h-10 w-10"><img class="h-10 w-10 rounded-full" src="${item.avatar}" alt=""></div><div class="ml-4"><div class="text-sm font-semibold text-gray-900 dark:text-neutral-100">${
      item.nome
    }</div><div class="text-sm text-gray-500 dark:text-neutral-400">${item.email}</div></div></div></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${item.cargo}</td>
                <td class="px-6 py-4 whitespace-nowrap"><span class="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${this.getStatusBadge(item.status)}">${item.status}</span></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${this.createSparkline(item.produtividade)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-neutral-400">${this.formatDate(item.ultimoAcesso)}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"><div class="flex items-center gap-2">
                    <a href="#" data-id="${item.id}" class="btn-detalhes text-amber-600 hover:text-amber-800 font-medium transition-colors">Detalhes</a>
                    <button data-id="${
                      item.id
                    }" class="btn-editar text-gray-400 hover:text-amber-600 transition-colors p-1"><svg class="w-5 h-5 pointer-events-none" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg></button>
                    <button data-id="${
                      item.id
                    }" class="btn-excluir text-gray-400 hover:text-red-600 transition-colors p-1"><svg class="w-5 h-5 pointer-events-none" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg></button>
                </div></td>
            </tr>`;
  }

  updatePaginationUI() {
    const { currentPage } = this.state.users;
    const total = this.filteredUserCount,
      totalPages = this.calculateTotalPages();
    this.dom.pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    this.dom.prevPageBtn.disabled = currentPage === 1;
    this.dom.nextPageBtn.disabled = currentPage === totalPages;
    this.dom.entryInfo.initial.textContent = total > 0 ? (currentPage - 1) * this.config.linhasPorPagina + 1 : 0;
    this.dom.entryInfo.final.textContent = Math.min(currentPage * this.config.linhasPorPagina, total);
    this.dom.entryInfo.total.textContent = total;
  }

  updateSortArrows() {
    const { sortColumn, sortDirection } = this.state.users;
    document.querySelectorAll(".seta-ordenacao").forEach((arrow) => {
      arrow.innerHTML = "";
      arrow.classList.remove("ativo");
    });
    const activeArrow = document.querySelector(`[data-seta-ordenacao="${sortColumn}"]`);
    if (activeArrow) {
      activeArrow.innerHTML = sortDirection === "asc" ? "&#9650;" : "&#9660;";
      activeArrow.classList.add("ativo");
    }
  }

  createOrUpdateChart(id, type, data, options) {
    if (this.chartInstances[id]) this.chartInstances[id].destroy();
    const ctx = document.getElementById(id);
    if (ctx) {
      this.chartInstances[id] = new Chart(ctx.getContext("2d"), { type, data, options });
    }
  }

  formatDate(d, opts = { dateStyle: "short", timeStyle: "short" }) {
    return new Intl.DateTimeFormat("pt-BR", opts).format(new Date(d));
  }
  formatCurrency(v) {
    return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  getStatusBadge(s) {
    return { Ativo: "bg-green-100 text-green-800", Inativo: "bg-red-100 text-red-800", Férias: "bg-yellow-100 text-yellow-800" }[s] || "bg-gray-100";
  }
  getSupportStatusBadge(s) {
    return { Aberto: "bg-yellow-100 text-yellow-800", "Em Andamento": "bg-blue-100 text-blue-800", Resolvido: "bg-green-100 text-green-800" }[s] || "bg-gray-100";
  }
  createSparkline(d = []) {
    if (d.length < 2) return "";
    const w = 120,
      h = 30,
      l = 2,
      max = Math.max(...d),
      min = Math.min(...d),
      range = max - min || 1;
    const points = d.map((p, i) => `${(i / (d.length - 1)) * w},${h - ((p - min) / range) * (h - l * 2) + l}`).join(" ");
    return `<svg viewBox="0 0 ${w} ${h}" class="w-24 h-8" preserveAspectRatio="none"><polyline points="${points}" fill="none" stroke="${this.config.corGrafico}" stroke-width="${l}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  getChartTooltipOptions() {
    const getOrCreateTooltip = (chart) => {
      let tooltipEl = chart.canvas.parentNode.querySelector("div.chartjs-tooltip");
      if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.className = "chartjs-tooltip";
        chart.canvas.parentNode.appendChild(tooltipEl);
      }
      return tooltipEl;
    };

    return {
      enabled: false,
      external: (context) => {
        const { chart, tooltip } = context;
        const tooltipEl = getOrCreateTooltip(chart);
        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        const titleLines = tooltip.title || [];
        let innerHtml = "<div>";
        if (titleLines.length > 0) {
          innerHtml += `<div class="font-bold mb-1">${titleLines[0]}</div>`;
        }
        const bodyLines = tooltip.body.map((b) => b.lines);
        bodyLines.forEach((body, i) => {
          const colors = tooltip.labelColors[i];
          innerHtml += `<div class="tooltip-body-item"><span class="tooltip-color-box" style="background:${colors.backgroundColor}; border: 1px solid ${colors.borderColor}"></span> ${body}</div>`;
        });
        innerHtml += "</div>";
        tooltipEl.innerHTML = innerHtml;
        const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = positionX + tooltip.caretX + "px";
        tooltipEl.style.top = positionY + tooltip.caretY + "px";
      },
    };
  }
}

// --- EXECUÇÃO INICIAL ---
document.addEventListener("DOMContentLoaded", () => {
  const app = new DashboardApp({
    linhasPorPagina: 5,
  });
  app.init();
});
