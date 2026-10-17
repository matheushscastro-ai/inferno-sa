# 🎮 Roadmap de Desenvolvimento de Jogo

> **Status Atual:** 🟡 Fase 1 — Concepção & Visão Central  
> **Última Atualização:** 14/10/2026  
> **Pasta do Projeto:** `C:\Users\Matheus Castro\.gemini\antigravity\scratch\projeto-jogo`

---

## 🧭 Visão Geral das Etapas

| Fase | Descrição | Status |
| :--- | :--- | :---: |
| **Fase 1** | **Concepção & Visão Central (High Concept & Pilares)** | ✅ Concluída |
| **Fase 2** | **Game Design Document (GDD Essencial & Core Loop)** | ✅ Concluída |
| **Fase 3** | **Definição de Stack, Engine & Arquitetura** | ✅ Concluída |
| **Fase 4** | **Prototipagem Rápida (Greybox / "O Quadrado Divertido")** | ✅ Concluída |
| **Fase 5** | **Direção de Arte, Identidade Visual & Áudio** | 🟡 Em andamento |
| **Fase 6** | **Level Design, Inimigos & Conteúdo** | ⚪ Não iniciado |
| **Fase 7** | **Polimento ("Game Juice"), Balanceamento & Playtesting** | ⚪ Não iniciado |
| **Fase 8** | **Build, Empacotamento & Publicação** | ⚪ Não iniciado |

---

## 📌 Detalhamento de Cada Etapa

### ✅ Fase 1: Concepção & Visão Central (Concluída)
- [x] **Gênero & Estilo de Jogo:** Roguelite Deckbuilder (Combate por cartas e fusão, com progressão de salas estilo Hades).
- [x] **Plataforma-Alvo & Escopo:** Mobile Vertical (Portrait - jogável com uma mão). Demo inicial: 1 Inferno (6 a 8 salas + 1 Chefe).
- [x] **Tema & Atmosfera:** Fantasia sombria de aventura (capa e espada clássico teatral) com sátira farialimer/esquerda caviar.
- [x] **Protagonista:** **Luiz Phillipe de Beznol IV** — herdeiro riquíssimo, eco-chique (*"Outstanding!"*, *"Flawless!"*, *"Dealbreaker"*, *"Mindset"*).
- [x] **Ambientação & Mitologia:** Círculos de Dante (pecados burocráticos) + Submundo Grego (bênçãos dos deuses do Olimpo).
- [x] **O Gancho ("The Hook"):** Sistema de Fusão de Cartas (Yu-Gi-Oh style) combinando feitiços e duelos com bênçãos arcanas na mão.

---

### ✅ Fase 2: GDD Essencial & Core Loop (Concluída)
- [x] **Métricas Básicas:** Vida (HP), Créditos/Energia por turno (padrão 3), Escudo/Armadura.
- [x] **Sistema de Fusão:** Arrastar Bênção Divina sobre Feitiço/Ação Base para forjar nova carta potencializada.
- [x] **Fluxo de Turno Mobile:** Comprar 4 cartas -> Jogar/Fundir com toques e drags -> Inimigo telegrafa intenção -> Fim de turno.
- [x] **Estrutura de Salas:** Escolha entre 2 a 3 portas pós-combate (Bênção, Tesouro/Cofre, Descanso/Cafezinho, Loja).

---

### ✅ Fase 3: Stack Técnica & Arquitetura (Concluída)
- [x] **Tecnologia:** Web Mobile Moderna (HTML5, CSS3 Responsivo Mobile-First, Modular ES6+ JavaScript, Touch & Pointer API).
- [x] **Servidor Local:** Python 3 HTTP Server ativo e testável na rede local.
- [x] **Portabilidade:** Empacotável em APK Android nativo ou PWA com 1 clique.

---

### ✅ Fase 4: Prototipagem Rápida (Greybox) (Concluída & Refinada)
- [x] **Container Mobile Vertical:** Layout 9:16 responsivo para smartphone.
- [x] **Deck Inicial Enxuto do Personagem (6 Cartas):**
  - 2x *Toque Aristocrático*
  - 1x *Liminar Arcana*
  - 1x *Estocada Precisa* (Custo 0)
  - 1x *Retórica de Duelo*
  - 1x *Chamas de Hefesto* (Bênção inicial de fogo para fusão imediata)
- [x] **Convenção de Inimigos (Nome do Luiz + Subnome Real):**
  - Sala 1: **O Estagiário Preguiçoso** *(Sombra de Aqueronte)*
  - Sala 2: **A Recepcionista Histérica** *(Fúria Sentinela do Limbo)*
  - Sala 3: **O Segurança Truculento** *(Gárgula de Pedra do Cócito)*
  - Sala 4 (Chefe): **O Diretor Inflexível** *(Rei Minos, o Juiz Supremo)*
- [x] **Diálogos Calibrados do Luiz Beznol:**
  - *"Outstanding! Onde está seu manager? Quero uma audiência marcada com o próprio Hades."*
  - *"Minha certidão de óbito é um erro crasso. Onde fica o tribunal de Minos?"*
  - Falha de fusão: *"Os Deuses não trabalhariam com fórmulas tão desordenadas."* / *"Nem Minos aceitaria esse pacto mal redigido."*
  - Sucesso de fusão: *"Flawless!"*



---

### 🟡 Fase 5: Direção de Arte, Identidade Visual & Áudio (Em andamento)
- [x] **Cenário de Arena com Piso Térreo & Linha do Horizonte (`underworld_arena_ground.jpg`):**
  - Os 60% inferiores da tela são um chão térreo contínuo e plano de lajes de obsidiana rachada com runas ciano.
  - A linha do horizonte (balustrada de pedra clássica) separa a arena do abismo do Inferno com as colunas e névoa do Estige.
  - Brilho do fundo calibrado para separar e destacar a figura dos combatentes sem "engolir" as cores.
- [x] **Campo Gravitacional com Blur no Entorno da Plataforma:**
  - O blur foi removido da plataforma de pedra (que agora se mantém 100% nítida e detalhada).
  - Foi criado um **campo gravitacional translúcido (`.pedestal-gravitational-field`)** no entorno do pedestal com `backdrop-filter: blur(6px)` e brilho espectral ciano que distorce suavemente o chão ao redor.
- [x] **Destruturação de Camuflagem & Rim Lighting no Inimigo:**
  - Adicionado **Halo/Vinheta traseira escura (`.enemy-backlight-aura`)** e um **Rim Light esmeralda/ciano** na silhueta do Estagiário para descolá-lo completamente do fundo escuro da caverna.
- [x] **Escala Proporcional Ampliada dos Combatentes:**
  - Inimigo e plataforma aumentados em ~20% (Estagiário com 215px de altura e plataforma com 185px de largura).
  - Protagonista (Lucca) ampliado em ~18% (265px de altura) preenchendo o quadrante inferior esquerdo com postura imponente.
- [x] **Hierarquia de Layout: Inimigo e HUD abaixo das Mensagens de Diálogo:**
  - A linha superior de combate (`.top-battle-row`) foi reposicionada com margem dedicada (`margin-top: 86px`), garantindo que tanto a caixa de status do monstro (vida, nome, intenção) quanto o próprio sprite fiquem 100% livres de qualquer sobreposição quando as mensagens e falas de Lucca forem exibidas.
- [x] **Animação Pokémon de Derrota:** Ao zerar o HP, o monstro e a plataforma sofrem impacto e afundam juntos na névoa do abismo (`defeat-exit`).
- [x] **Ajuste da Mão de Cartas & Barra de Vida:** Barra de vida limpa (`XX / XX`) e cartas compactas (`63px x 104px`).
- [x] **Juice de Combate & Benchmark:** Floating combat text dinâmico e vibração tátil (Vibration API).
- [ ] **Efeitos Sonoros & Identidade de Áudio (Aguardando Revisão):** Efeitos sonoros procedurais ativos como rascunho temporário; serão revisitados e refinados com calma na Fase 5 com assets de áudio definitivos.
- [x] **Agente de Revisão de Arte & Model Sheet Canônico:**
  - Subagente especializado `art-director` criado e ativo no pipeline com o guia [`STYLE_GUIDE.md`](file:///C:/Users/Matheus%20Castro/.gemini/antigravity/scratch/projeto-jogo/STYLE_GUIDE.md).
  - Garante fidelidade 100% de figurino, corte de cabelo e paleta de cores contra o modelo canônico mestre (`luiz_bust.png`).
- [x] **Sprites de Ação & Animações Cômicas dos Combatentes (Auditados pelo Art Director):**
  - [x] **Lucca Beznoir IV (Protagonista - 3 Estados 100% Coerentes):**
    - **Idle**: Túnica grega branca com louros dourados, capa carmesim, cálice de ouro e olhar de deboche.
    - **Attack**: Exato mesmo cabelo nobre e túnica, estalo de dedos explosivo com dracmas de ouro e taça de ouro na outra mão.
    - **Hurt**: Exato mesmo cabelo e túnica manchada pelo impacto, choque histérico, lágrimas e vinho espirrando no ar.
  - [x] **O Estagiário Preguiçoso (Inimigo - 3 Estados 100% Coerentes):**
    - **Idle**: Parado na plataforma com xícara de café fumegante e prancheta de almas.
    - **Attack**: Fúria cômica de burnout! Arremessa uma onda de café tóxico verde borbulhante com a caneca rachada.
    - **Hurt**: Colapso burocrático! Tropeça em pânico, papéis e formulários "Soul-Audit" voando no ar e café espirrando para trás.
- [x] **Geração das Ilustrações Canônicas das Cartas (Supervisão do Art Director):**
  - [x] *Toque Aristocrático* (`card_toque_aristocratico.png` - Mão nobre com estalo de faíscas arcanas e dracmas reluzentes)
  - [x] *Liminar Arcana* (`card_liminar_arcana.png` - Pergaminho judicial com selo de cera carmesim em redoma mágica dourada)
  - [x] *Estocada Precisa* (`card_estocada_precisa.png` - Florete aristocrático com guarda dourada e rastro de corte ciano)
  - [x] *Chamas de Hefesto* (`card_chamas_hefesto.png` - Bigorna de ferro e bronze grega explodindo fogo divino das forjas)






- [x] **Frames & Bordas Nobres nas Cartas:**
  - Molduras com chanfro dourado, detalhes de relevo metálico e estilos distintos para Ação (Obsidiana e Ouro), Bênção (Âmbar e Fogo) e Fusão (Ouro Lendário com pulso de luz).
  - Medalhão de custo em alto-relevo tridimensional com gema de rubi lapidada.
- [x] **Mão de Cartas em Formato de Leque (*Hearthstone / Slay the Spire Style*):**
  - Cartas dispostas em arco dinâmico com rotação suave (`--card-rot`), curvatura vertical (`--card-y`) e sobreposição horizontal (`margin-left: -24px`).
  - Economiza mais de 80px de largura horizontal na tela, conferindo estética de card game de alto padrão.
  - Ao inspecionar/selecionar, a carta desfaz o leque (`rotate(0deg)`), salta para o topo (`z-index: 9999`) e ganha zoom ampliado de **1.75x** para leitura imediata sem obstrução.
- [x] **Protagonista Ampliado & Mais Imponente (+23% Maior):**
  - Graças ao espaço horizontal liberado pelo leque de cartas, a coluna do Lucca foi ampliada de 100px para 130px, com o busto saltando para **240px** de altura e HUD expandido para 125px.
- [x] **Elevação Vertical & Ajuste de Safe-Area no Mobile (Botão 100% Visível):**
  - Suporte a `100dvh` (Dynamic Viewport Height) para telas de smartphones com barra de navegação/URL ativa.
  - Elevação do quadrante inferior (`margin-bottom: 14px` e padding de safe-area) e redução do topo da arena, garantindo que o baralho, o contador de deck e o botão "finalizar turno" nunca sejam cortados na base da tela do celular.
- [x] **Correção e Enquadramento do Botão "Finalizar Turno":**
  - Ajuste de padding (`padding-left: 36px`) para contornar a ampulheta alada em relevo.
  - Tipografia em linha única (`white-space: nowrap`), evitando que o texto dobre em duas linhas ou vaze para fora da placa de pedra.

---

### ⚪ Fase 2: GDD Essencial & Core Loop
- [ ] **Ciclo Central (Core Loop):** O que o jogador faz a cada 10 segundos, 1 minuto e 10 minutos.
- [ ] **Mecânicas Principais:** Controles, movimentação, ações e interações.
- [ ] **Condições de Vitória e Derrota:** Como se perde e como se progride.
- [ ] **Estrutura de Progressão:** Itens, upgrades, habilidades ou pontuação.

---

### ⚪ Fase 3: Engine & Stack Técnica
- [ ] **Escolha da Engine:** (ex.: Godot, Unity, Pygame, Phaser, Raylib, etc.)
- [ ] **Setup do Projeto & Repositório:** Configuração de diretórios, convenções de código e controle de versão.
- [ ] **Pipelines de Assets:** Formatos suportados (PNG, Aseprite, GLTF, WAV/OGG).

---

### ⚪ Fase 4: Prototipagem Rápida (Greybox)
- [ ] **Física e Movimento:** Input responsivo e "game feel" básico.
- [ ] **Mecânica Principal Implementada:** Sem arte final (apenas formas geométricas).
- [ ] **Teste de Diversão:** Validar se o loop básico já é satisfatório antes de desenhar sprites/modelos.

---

### ⚪ Fase 5: Arte & Identidade Audiovisual
- [ ] **Estilo Gráfico:** 2D Cel-shading / Comic Art estilizado no estilo Jen Zee / Hades.
- [ ] **Criação/Aquisição de Sprites/Modelos:** Personagem, cenário, inimigos e interface (UI).
- [ ] **Revisão Completa de Efeitos Sonoros (SFX) & Trilha:** Substituir sintetizadores procedurais de rascunho por sound design definitivo de alta qualidade (lâminas reais, taça, magias arcanas, feedback de cartas e trilha dinâmica).

---

### ⚪ Fase 6: Level Design & Conteúdo
- [ ] **Criação de Fases/Salas/Mapas:** Curva de aprendizado e introdução gradual de desafios.
- [ ] **Inimigos & Comportamento (IA):** Padrões de ataque e perigos no cenário.
- [ ] **Sistemas de Apoio:** Menus, pause, checkpoints, salvamento (Save/Load).

---

### ⚪ Fase 7: Polimento ("Game Juice") & Testes
- [ ] **Feedback Visual & Cinestésica:** Screen shake, partículas, transições de tela, pausas de impacto (hit-stop).
- [ ] **Balanceamento:** Ajuste de curvas de dano, vida, velocidade e recompensas.
- [ ] **Playtesting & Correção de Bugs:** Coleta de feedback e refinamento.

---

### ⚪ Fase 8: Build & Lançamento
- [ ] **Builds Executáveis:** Exportação para Windows/Web (HTML5/Itch.io).
- [ ] **Página de Apresentação:** Screenshots, trailer/GIFs e descrição.

---

## 📝 Diário de Decisões & Ideias Acumuladas
- **Tema & Atmosfera:** Fantasia sombria bem-humorada, capa e espada com magia (estilo Terry Pratchett / Medievil / Hades).
- **Plataforma-Alvo:** Mobile (Smartphones - toque na tela).
- **Estrutura de Fases:** Progressão por salas com escolhas de recompensas (estilo Hades).
- **Gênero em Avaliação (Decisão Atual):**
  - Opção A: *Action Roguelite Top-Down* (Diablo/Hades mobile, combate em tempo real com controle simplificado).
  - Opção B: *Deckbuilder / Roguelite de Cartas* (Slay the Spire com roupagem estética de Hades, 100% nativo para touch).
- **Ponto Crítico Identificado:** Pipeline de assets com IA (evitar frustração de spritesheets desalinhados).

