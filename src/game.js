// ============================================================================
// INFERNO S/A: O Takeover de Louis Beznoir (Protótipo Mobile - Versão Calibrada)
// ============================================================================
import { sfx } from './audio.js';

// 1. BANCO DE CARTAS (Ações Arcanas de Capa & Espada, Bênçãos e Matriz de Fusão)

export const CARD_DATABASE = {
  // AÇÕES ARCANAS DE LUIZ (BASE DE DUELO)
  toque_aristocratico: {
    id: 'toque_aristocratico',
    name: 'Toque Nobre',
    type: 'action',
    cost: 1,
    icon: '✨',
    image: 'assets/cards/card_toque_aristocratico.png',
    desc: 'Causa 7 de dano arcano com um estalar de dedos pomposo.',
    damage: 7,
    shield: 0,
    flavor: 'A nobreza não se curva perante as sombras.'
  },
  liminar_judicial: {
    id: 'liminar_judicial',
    name: 'Liminar Arcana',
    type: 'action',
    cost: 1,
    icon: '📜',
    image: 'assets/cards/card_liminar_arcana.png',
    desc: 'Gera 8 de armadura invocando um pergaminho sagrado de proteção.',
    damage: 0,
    shield: 8,
    flavor: 'Minha família tem imunidade em qualquer plano.'
  },
  corte_custos: {
    id: 'corte_custos',
    name: 'Estocada Ágil',
    type: 'action',
    cost: 0,
    icon: '🗡️',
    image: 'assets/cards/card_estocada_precisa.png',
    desc: 'Custo 0! Golpe rápido de esgrima causando 4 de dano.',
    damage: 4,
    shield: 0,
    flavor: 'Velocidade e pontaria sem desperdício de energia.'
  },
  discurso_impacto: {
    id: 'discurso_impacto',
    name: 'Retórica Nobre',
    type: 'action',
    cost: 1,
    icon: '📜✨',
    image: 'assets/cards/card_retorica_duelo.png',
    desc: 'Causa 4 de dano e aplica Confusão (+50% de dano sofrido).',
    damage: 4,
    shield: 0,
    applyStatus: { type: 'daze', duration: 2, icon: '📢', name: 'Confusão' },
    flavor: 'Uma oratória tão arrogante que desestabiliza o oponente.'
  },
  blefe_mercado: {
    id: 'blefe_mercado',
    name: 'Finta Nobre',
    type: 'action',
    cost: 1,
    icon: '🎭',
    image: 'assets/cards/card_toque_aristocratico.png',
    desc: 'Gera 7 de armadura. Se o inimigo for atacar, compra 1 carta.',
    damage: 0,
    shield: 7,
    conditionalDraw: true,
    flavor: 'A arte clássica de esquivar rindo do adversário.'
  },
  acao_indenizatoria: {
    id: 'acao_indenizatoria',
    name: 'Contragolpe',
    type: 'action',
    cost: 1,
    icon: '⚖️',
    image: 'assets/cards/card_estocada_precisa.png',
    desc: 'Causa 6 de dano + o dobro do dano sofrido no último turno.',
    damage: 6,
    isRetaliation: true,
    shield: 0,
    flavor: 'Uma ofensa contra um Beznol nunca fica sem resposta.'
  },

  // BÊNÇÃOS DOS DEUSES DO OLIMPO
  bencao_fogo: {
    id: 'bencao_fogo',
    name: 'Fogo de Hefesto',
    type: 'blessing',
    element: 'fire',
    vfxType: 'fire',
    cost: 1,
    icon: '🔥',
    image: 'assets/cards/card_chamas_hefesto.png',
    desc: 'Hefesto: Aplica 4 de Queimadura no inimigo.',
    damage: 3,
    shield: 0,
    applyStatus: { type: 'burn', stacks: 4, icon: '🔥', name: 'Queimadura' },
    flavor: 'Fogo refinado das forjas divinas.'
  },
  bencao_raio: {
    id: 'bencao_raio',
    name: 'Raio de Zeus',
    type: 'blessing',
    element: 'lightning',
    vfxType: 'lightning',
    cost: 1,
    icon: '⚡',
    image: 'assets/cards/card_bencao_raio.png?v=29',
    desc: 'Zeus: Causa 6 de dano e aplica 2 Choques (detona dano extra).',
    damage: 6,
    shield: 0,
    applyStatus: { type: 'shock', stacks: 2, icon: '⚡', name: 'Choque' },
    flavor: 'A aprovação reluzente do Olimpo.'
  },
  bencao_guerra: {
    id: 'bencao_guerra',
    name: 'Fúria de Ares',
    type: 'blessing',
    element: 'blood',
    vfxType: 'blood',
    cost: 1,
    icon: '⚔️',
    image: 'assets/cards/card_bencao_guerra.png?v=29',
    desc: 'Ares: Causa 6 de dano e aplica 4 de Sangramento.',
    damage: 6,
    shield: 0,
    applyStatus: { type: 'bleed', stacks: 4, icon: '🩸', name: 'Sangramento' },
    flavor: 'Agressividade pura para resolver qualquer disputa.'
  },
  bencao_velocidade: {
    id: 'bencao_velocidade',
    name: 'Asas de Hermes',
    type: 'blessing',
    element: 'speed',
    cost: 0,
    icon: '🪽',
    image: 'assets/cards/card_bencao_velocidade.png',
    desc: 'Hermes: Custo 0! Compra 2 cartas e concede 1 Ação.',
    damage: 0,
    shield: 0,
    drawCards: 2,
    bonusEnergy: 1,
    flavor: 'Agilidade de quem não tem tempo a perder em filas.'
  }
};

// RECEITAS DE FUSÃO DA MATRIZ YU-GI-OH COM ARTES DEDICADAS
export const FUSION_RECIPES = {
  'toque_aristocratico+bencao_fogo': {
    id: 'combustao_gourmet',
    name: 'Chama de Hefesto',
    type: 'fused',
    vfxType: 'fire',
    cost: 1,
    icon: '🔥✨',
    image: 'assets/cards/card_combustao_gourmet.png',
    desc: 'Causa 14 de dano de fogo e aplica 5 de Queimadura.',
    damage: 14,
    shield: 0,
    applyStatus: { type: 'burn', stacks: 5, icon: '🔥', name: 'Queimadura' },
    catchphrase: 'Flawless blend!'
  },
  'toque_aristocratico+bencao_raio': {
    id: 'estalo_trovejante',
    name: 'Estalo de Zeus',
    type: 'fused',
    vfxType: 'lightning',
    cost: 1,
    icon: '⚡✨',
    image: 'assets/cards/card_estalo_zeus.png',
    desc: 'Causa 16 de dano e eletrifica com 3 Choques.',
    damage: 16,
    shield: 0,
    applyStatus: { type: 'shock', stacks: 3, icon: '⚡', name: 'Choque' },
    catchphrase: 'Flawless!'
  },
  'toque_aristocratico+bencao_guerra': {
    id: 'bravata_imperial',
    name: 'Golpe de Ares',
    type: 'fused',
    vfxType: 'blood',
    cost: 1,
    icon: '⚔️✨',
    image: 'assets/cards/card_bencao_guerra.png?v=29',
    desc: 'Causa 18 de dano crítico e 5 Sangramento!',
    damage: 18,
    shield: 0,
    applyStatus: { type: 'bleed', stacks: 5, icon: '🩸', name: 'Sangramento' },
    catchphrase: 'Flawless!'
  },
  'liminar_judicial+bencao_raio': {
    id: 'clausula_eletrizante',
    name: 'Égide de Zeus',
    type: 'fused',
    vfxType: 'lightning',
    cost: 1,
    icon: '⚡📜',
    image: 'assets/cards/card_estalo_zeus.png',
    desc: 'Gera 15 de armadura e reflete 8 de choque.',
    damage: 8,
    shield: 15,
    catchphrase: 'Flawless!'
  },
  'corte_custos+bencao_velocidade': {
    id: 'layoff_relampago',
    name: 'Estocada Alada',
    type: 'fused',
    cost: 0,
    icon: '🪽🗡️',
    image: 'assets/cards/card_bencao_velocidade.png',
    desc: 'Custo 0! Causa 12 de dano e compra 2 cartas imediatamente!',
    damage: 12,
    shield: 0,
    drawCards: 2,
    catchphrase: 'Flawless!'
  },
  'acao_indenizatoria+bencao_guerra': {
    id: 'litigio_sangrento',
    name: 'Vingança de Ares',
    type: 'fused',
    vfxType: 'blood',
    cost: 1,
    icon: '⚔️⚖️',
    image: 'assets/cards/card_bencao_guerra.png?v=29',
    desc: 'Causa 16 de dano + dobro do dano sofrido + 6 de Sangramento!',
    damage: 16,
    isRetaliation: true,
    shield: 0,
    applyStatus: { type: 'bleed', stacks: 6, icon: '🩸', name: 'Sangramento' },
    catchphrase: 'Flawless!'
  }
};

// 2. DIÁLOGOS DE LUIZ BEZNOL (Calibrados conforme solicitação)
const LUIZ_QUOTES = {
  start: [
    'Outstanding! Onde está seu manager? Quero uma audiência marcada com o próprio Hades.',
    'Minha certidão de óbito é um erro crasso. Onde fica o tribunal de Minos?',
    'Esse mármore do primeiro círculo definitivamente não é de Carrara...',
    'Preciso resolver esse mal-entendido com Hades antes do jantar.'
  ],
  playAction: [
    'Flawless! Apenas contemple a perfeição.',
    'Totalmente abaixo da minha classe ter que duelar com você.',
    'Isso deve doer... fisicamente e no seu orgulho.',
    'Aceita débito? Porque isso vai custar caro!',
    'Toque de Midas com juros compostos!'
  ],
  fuse: [
    'Flawless! Essa fusão tem o selo de qualidade Beznoir.'
  ],
  fuseFail: [
    'Os Deuses não trabalhariam com fórmulas tão desordenadas.',
    'Nem Minos aceitaria esse pacto mal redigido.',
    'Essa conjuração não tem a mínima elegância.'
  ],
  hurt: [
    'MEU LINHO EGÍPCIO! Você tem ideia de quanto custa isso?!',
    'VOCÊ SABE QUEM É MEU PAI?! Processo em três instâncias!',
    'Isso é agressão ao patrimônio! Onde está a ouvidoria deste lugar?',
    'Derramou meu vinho de 1800! Que selvageria inominável!',
    'Se essa capa de seda rasgar, Caronte vai ouvir poucas e boas!'
  ],
  win: [
    'Flawless victory! Onde está a próxima porta? Esse lugar cheira a mofo.',
    'Outstanding! Até Hades vai aplaudir a minha descida.'
  ]
};

// BALÕES DE GRITO CÔMICO INSTANTÂNEO (Pop-ups de Reação Cartoon)
const COMIC_CALLOUTS = {
  attack: [
    'TOQUE DE MIDAS! ✨',
    'ACEITA DÉBITO?! 💳',
    'FLAWLESS! 🪙',
    'CHIQUE DEMAIS! 🍷',
    'COM JUROS! ⚡'
  ],
  hurt: [
    'MEU LINHO EGÍPCIO! 😱',
    'PROCESSO EM 3 INSTÂNCIAS! ⚖️',
    'VOCÊ SABE QUEM É MEU PAI?! 📢',
    'CUSTOU 50 MIL DRACMAS! 🍷',
    'QUE SELVAGERIA! 💔',
    'AGRESSÃO AO PATRIMÔNIO! 🏛️'
  ]
};

// BALÕES CÔMICOS DE REAÇÃO DO INIMIGO (Estagiário Preguiçoso)
const ENEMY_COMIC_CALLOUTS = {
  attack: [
    'HORA EXTRA NÃO! ☕',
    'SEM ADICIONAL NOTURNO?! 📜',
    'PROTOCOLO REJEITADO! ❌',
    'CAFÉ TÓXICO FERVENDO! 💥',
    'CADÊ O REAJUSTE?! 📢'
  ],
  hurt: [
    'MEUS FORMULÁRIOS! 😱',
    'CARÊNCIA DO PLANO! 📄',
    'CADÊ O SINDICATO?! 📢',
    'BURNOUT TOTAL! 💀',
    'ATÉ AMANHÃ ÀS 8H! 💔'
  ]
};

// 3. INIMIGOS MITOLÓGICOS DO 1º CÍRCULO (Nome do Luiz + Subnome Real + Fundo de Fase)
const DUNGEON_ENEMIES = [
  {
    luizName: 'O Estagiário Preguiçoso',
    realName: 'Sombra de Aqueronte',
    avatar: '👤',
    portrait: 'assets/ui/map_node_1.png?v=30',
    image: 'assets/characters/estagiario_fullbody.png',
    background: 'assets/backgrounds/ground_horizon_planted.png',
    bgTitle: 'CÂMARA I: MARGENS DO AQUERONTE',
    bgDesc: 'Onde as almas recém-chegadas aguardam atendimento perpétuo...',
    maxHp: 38,
    hp: 38,
    callouts: {
      attack: ['HORA EXTRA NÃO! ☕', 'SEM ADICIONAL NOTURNO?! 📜', 'CAFÉ TÓXICO FERVENDO! 💥', 'CADÊ O REAJUSTE?! 📢'],
      hurt: ['MEUS FORMULÁRIOS! 😱', 'CARÊNCIA DO PLANO! 📄', 'CADÊ O SINDICATO?! 📢', 'BURNOUT TOTAL! 💀']
    },
    intents: [
      { type: 'attack', value: 7, icon: '🗡️', desc: '7 Dano (Lamúria Cansada)' },
      { type: 'shield', value: 8, icon: '🛡️', desc: '+8 Escudo do Desânimo' },
      { type: 'attack', value: 11, icon: '💥', desc: '11 Dano (Colapso de Burnout)' }
    ]
  },
  {
    luizName: 'A Recepcionista Histérica',
    realName: 'Fúria Sentinela do Limbo',
    avatar: '🦅',
    portrait: 'assets/ui/map_node_2.png?v=30',
    image: 'assets/characters/recepcionista_fullbody.png?v=30',
    background: 'assets/backgrounds/underworld_arena_staircase.jpg',
    bgTitle: 'CÂMARA II: CARTÓRIO DO LIMBO',
    bgDesc: 'A fúria de mil processos não arquivados e almas em protesto...',
    maxHp: 48,
    hp: 48,
    callouts: {
      attack: ['SENHA 9.999! 📢', 'SEM AGENDAMENTO! 🔥', 'FALTOU CARIMBO! 💢', 'PREENCHA A VIA AZUL! 📜'],
      hurt: ['MEU BALCÃO! 😱', 'PROCESSO EXTRAVIADO! 📄', 'DESACATO NO GUICHÊ! 💢', 'SISTEMA FORA DO AR! 💥']
    },
    intents: [
      { type: 'attack', value: 10, icon: '🗡️', desc: '10 Dano (Ataque de Pânico)' },
      { type: 'attack', value: 14, icon: '💥', desc: '14 Dano (Grito Estridente)' },
      { type: 'shield', value: 12, icon: '🛡️', desc: '+12 Proteção Barulhenta' }
    ]
  },
  {
    luizName: 'O Segurança Truculento',
    realName: 'Gárgula de Pedra do Cócito',
    avatar: '🗿',
    portrait: 'assets/ui/map_node_3.png?v=30',
    image: 'assets/characters/gargula_fullbody.png?v=30',
    background: 'assets/backgrounds/underworld_arena_paths.jpg',
    bgTitle: 'CÂMARA III: PORTÕES DO CÓCITO',
    bgDesc: 'Onde nenhum recurso judicial tem efeito suspensivo...',
    maxHp: 56,
    hp: 56,
    callouts: {
      attack: ['ACESSO NEGADO! 🗿', 'REVISTA OBRIGATÓRIA! 🛡️', 'PROTOCOLO ABSOLUTO! ❄️', 'FORA DA CATRACA! 💥'],
      hurt: ['RACHARAM MEU GRANITO! 💥', 'MÁRMORE TRINCADO! 😱', 'CÓDIGO VERMELHO! 🚨', 'CHAMEM O REFORÇO! 🛡️']
    },
    intents: [
      { type: 'shield', value: 15, icon: '🛡️', desc: '+15 Casca Intransigente' },
      { type: 'attack', value: 12, icon: '🗡️', desc: '12 Dano (Empurrão Bruto)' },
      { type: 'attack', value: 16, icon: '💥', desc: '16 Dano Esmagador' }
    ]
  },
  {
    luizName: 'O Diretor Inflexível',
    realName: 'Rei Minos, o Juiz Supremo',
    avatar: '👑',
    portrait: 'assets/ui/map_node_4.png?v=31',
    image: 'assets/characters/minos_fullbody.png?v=31',
    background: 'assets/backgrounds/underworld_arena.jpg',
    bgTitle: 'CÂMARA IV: TRIBUNAL DE MINOS',
    bgDesc: 'A audiência final antes do abismo eterno...',
    maxHp: 75,
    hp: 75,
    callouts: {
      attack: ['RECURSO INDEFERIDO! ⚖️', 'DESACATO À CORTE! 🔨', 'LITIGÂNCIA DE MÁ-FÉ! 📜', 'SENTENÇA IMEDIATA! 💥'],
      hurt: ['OBJEÇÃO NEGADA! 💢', 'MINHA TOGA IMPERIAL! 😱', 'QUEBRA DE DECORO! ⚖️', 'ANULEM ESSA PROVA! 📜']
    },
    intents: [
      { type: 'attack', value: 15, icon: '⚖️', desc: '15 Dano (Veredito Arbitrário)' },
      { type: 'shield', value: 16, icon: '🛡️', desc: '+16 Escudo Burocrático' },
      { type: 'attack', value: 20, icon: '💥', desc: '20 Dano (O Malhete do Juízo)' }
    ]
  },
  {
    luizName: 'O Lorde e CEO do Submundo',
    realName: 'Hades, o Rei do Tártaro',
    avatar: '🔱',
    portrait: 'assets/ui/map_node_5.png?v=31',
    image: 'assets/characters/hades_fullbody.png?v=31',
    background: 'assets/backgrounds/underworld_arena.jpg',
    bgTitle: 'CÂMARA V: GABINETE EXECUTIVO DE HADES',
    bgDesc: 'O embate definitivo pelo controle acionário e reestruturação do Submundo...',
    maxHp: 110,
    hp: 110,
    callouts: {
      attack: ['ESTORNO NEGADO! 🔱', 'DEMISSÃO SUMÁRIA! 🔥', 'EU SOU O CONSELHO! 👑', 'LIQUIDAÇÃO DE ALMA! 💥'],
      hurt: ['MEU BALANÇO ANUAL! 😱', 'QUEBRA DE CONTRATO?! 🔥', 'INSOLÊNCIA MORTAL! 💢', 'MEU FUNDO SOBERANO! 🔱']
    },
    intents: [
      { type: 'attack', value: 18, icon: '🔱', desc: '18 Dano (Bidente Sombrio)' },
      { type: 'shield', value: 22, icon: '🛡️', desc: '+22 Sangue do Tártaro' },
      { type: 'attack', value: 26, icon: '💥', desc: '26 Dano (Sentença de Morte)' }
    ]
  }
];

// 4. ESTADO DO JOGO COM PROGRESSÃO DE DECK E SALAS
class GameState {
  constructor() {
    this.player = {
      name: 'Louis Beznoir IV',
      maxHp: 65,
      hp: 65,
      shield: 0,
      energy: 3,
      maxEnergy: 3,
      gold: 100,
      lastDamageTaken: 0
    };

    this.enemyIndex = 0;
    this.enemy = this.createEnemy(0);

    // DECK INICIAL ENXUTO (6 cartas)
    this.deck = [
      'toque_aristocratico',
      'toque_aristocratico',
      'liminar_judicial',
      'corte_custos',
      'discurso_impacto',
      'bencao_fogo' // 1 Bênção inicial para permitir fusão imediata
    ];

    this.drawPile = [];
    this.discardPile = [];
    this.hand = [];
    
    this.roomNumber = 1;
    this.maxUnlockedRoom = 1;
    this.hasBeatenGame = false;
    this.selectedCardIndex = null;
    this.isDragging = false;
    this.draggedCardIndex = null;
    this.dragHoverCardIndex = null;
  }

  createEnemy(idx) {
    const data = DUNGEON_ENEMIES[Math.min(idx, DUNGEON_ENEMIES.length - 1)];
    return {
      luizName: data.luizName,
      realName: data.realName,
      avatar: data.avatar,
      portrait: data.portrait || null,
      image: data.image || null,
      background: data.background || 'assets/backgrounds/ground_horizon_planted.png',
      bgTitle: data.bgTitle || `Círculo I: Sala ${this.roomNumber}`,
      bgDesc: data.bgDesc || 'Um novo desafio no submundo...',
      maxHp: data.maxHp,
      hp: data.maxHp,
      shield: 0,
      callouts: data.callouts || ENEMY_COMIC_CALLOUTS,
      intents: data.intents,
      intent: data.intents[0],
      statuses: {}
    };
  }

  init() {
    this.drawPile = [...this.deck].sort(() => Math.random() - 0.5);
    this.discardPile = [];
    this.startTurn();
    this.speak(this.getRandomQuote(LUIZ_QUOTES.start));
  }

  startTurn() {
    this.player.energy = this.player.maxEnergy;

    if (this.enemy.statuses.burn > 0) {
      const burnDmg = this.enemy.statuses.burn;
      this.damageEnemy(burnDmg, false);
      this.enemy.statuses.burn = Math.max(0, this.enemy.statuses.burn - 1);
      if (this.enemy.statuses.burn === 0) delete this.enemy.statuses.burn;
      if (this.enemy.hp <= 0) {
        this.handleVictory();
        return;
      }
    }

    ['chill', 'daze', 'charm'].forEach(st => {
      if (this.enemy.statuses[st] > 0) {
        this.enemy.statuses[st]--;
        if (this.enemy.statuses[st] === 0) delete this.enemy.statuses[st];
      }
    });

    this.drawCards(4);
    this.rollEnemyIntent();
    this.updateUI();
  }

  drawCards(amount) {
    for (let i = 0; i < amount; i++) {
      if (this.drawPile.length === 0) {
        if (this.discardPile.length === 0) break;
        this.drawPile = [...this.discardPile].sort(() => Math.random() - 0.5);
        this.discardPile = [];
      }
      this.hand.push(this.drawPile.pop());
    }
  }

  playCard(index) {
    const cardKey = this.hand[index];
    const card = CARD_DATABASE[cardKey] || FUSION_RECIPES[cardKey];
    if (!card) return;

    if (this.player.energy < card.cost) {
      this.speak('Minha energia arcana está exaurida no momento!');
      return;
    }

    this.selectedCardIndex = null;
    this.player.energy -= card.cost;
    sfx.playCard();

    // Dispara Animação Visual de Combate (VFX) para Raio de Zeus, Fúria de Ares, Fogo de Hefesto, etc.
    this.triggerCardCombatVFX(card);

    let totalDmg = card.damage || 0;
    if (card.isRetaliation && this.player.lastDamageTaken > 0) {
      totalDmg += this.player.lastDamageTaken * 2;
    }

    if (totalDmg > 0 && this.enemy.statuses.daze > 0) {
      totalDmg = Math.floor(totalDmg * 1.5);
    }

    if (totalDmg > 0 && this.enemy.statuses.shock > 0) {
      totalDmg += this.enemy.statuses.shock * 4;
      delete this.enemy.statuses.shock;
    }

    if (totalDmg > 0) {
      sfx.swordSlash();
      sfx.snobAttack();
      this.playPlayerAttack();
      this.damageEnemy(totalDmg);
    }

    if (card.shield > 0) {
      sfx.shield();
      this.player.shield += card.shield;
      const playerEl = document.getElementById('player-bust-frame');
      this.spawnFloatingText(playerEl, `+${card.shield} 🛡️`, '#70a1ff');
    }

    if (card.drawCards) {
      this.drawCards(card.drawCards);
    }

    if (card.conditionalDraw && this.enemy.intent.type === 'attack') {
      this.drawCards(1);
    }

    if (card.bonusEnergy) {
      this.player.energy += card.bonusEnergy;
    }

    if (card.applyStatus) {
      const st = card.applyStatus;
      if (st.stacks) {
        this.enemy.statuses[st.type] = (this.enemy.statuses[st.type] || 0) + st.stacks;
      } else if (st.duration) {
        this.enemy.statuses[st.type] = Math.max(this.enemy.statuses[st.type] || 0, st.duration);
      }
    }

    if (card.cancelEnemyTurn) {
      this.enemy.intent = { type: 'stun', value: 0, icon: '❄️', desc: 'Ação Cancelada!' };
    }

    this.hand.splice(index, 1);
    this.discardPile.push(cardKey);

    this.speak(card.catchphrase || this.getRandomQuote(LUIZ_QUOTES.playAction));
    this.updateUI();
  }

  triggerCardCombatVFX(card) {
    const station = document.getElementById('enemy-battle-station');
    const arena = document.getElementById('battle-arena');
    if (!station || !arena) return;

    const vfxType = card.vfxType || card.element || (card.applyStatus && card.applyStatus.type);
    if (!vfxType) return;

    const overlay = document.createElement('div');
    overlay.className = 'combat-vfx-overlay';

    let flashClass = '';
    if (vfxType === 'lightning' || vfxType === 'shock') {
      flashClass = 'flash-lightning';
      overlay.innerHTML = `
        <div class="vfx-shockwave-ring"></div>
        <svg class="vfx-zeus-bolt-svg" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="105,4 42,102 86,106 24,214 124,96 76,90" fill="#ffd700" stroke="#080612" stroke-width="6" stroke-linejoin="round"/>
          <polygon points="98,16 52,98 84,102 38,192 112,100 74,94" fill="#e0ffff"/>
          <polyline points="42,102 12,84 4,104" stroke="#00f2fe" stroke-width="4" stroke-linecap="round"/>
          <polyline points="112,100 144,120 154,108" stroke="#00f2fe" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `;
    } else if (vfxType === 'blood' || vfxType === 'bleed') {
      flashClass = 'flash-blood';
      overlay.innerHTML = `
        <div class="vfx-blood-burst-ring"></div>
        <svg class="vfx-ares-slash-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18,22 Q100,92 184,180 Q92,108 18,22 Z" fill="#ff1e42" stroke="#0b0408" stroke-width="6"/>
          <path d="M26,28 Q100,96 174,172" stroke="#ffeaa7" stroke-width="4" stroke-linecap="round"/>
          <path d="M182,22 Q100,92 16,180 Q108,108 182,22 Z" fill="#ff1e42" stroke="#0b0408" stroke-width="6"/>
          <path d="M174,28 Q100,96 26,172" stroke="#ffeaa7" stroke-width="4" stroke-linecap="round"/>
          <circle cx="100" cy="100" r="14" fill="#ffd700" stroke="#0b0408" stroke-width="4"/>
          <circle cx="100" cy="100" r="7" fill="#ff1e42"/>
        </svg>
      `;
    } else if (vfxType === 'fire' || vfxType === 'burn') {
      flashClass = 'flash-fire';
      overlay.innerHTML = `
        <svg class="vfx-fire-burst-svg" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90,12 C125,65 155,105 135,165 C120,190 60,190 45,165 C25,105 55,65 90,12 Z" fill="#ff4500" stroke="#0b0408" stroke-width="6"/>
          <path d="M90,42 C112,82 132,115 118,160 C108,178 72,178 62,160 C48,115 68,82 90,42 Z" fill="#ffa502"/>
          <path d="M90,78 C102,105 112,128 104,156 C96,168 84,168 76,156 C68,128 78,105 90,78 Z" fill="#fff9e6"/>
        </svg>
      `;
    } else {
      return;
    }

    station.appendChild(overlay);
    setTimeout(() => overlay.remove(), 700);

    if (flashClass) {
      const flashEl = document.createElement('div');
      flashEl.className = `arena-vfx-flash ${flashClass}`;
      arena.appendChild(flashEl);
      setTimeout(() => flashEl.remove(), 480);
    }

    arena.classList.add('arena-shake');
    setTimeout(() => arena.classList.remove('arena-shake'), 380);
  }

  fuseCards(indexSource, indexTarget) {
    const sourceKey = this.hand[indexSource];
    const targetKey = this.hand[indexTarget];

    const recipeKey1 = `${sourceKey}+${targetKey}`;
    const recipeKey2 = `${targetKey}+${sourceKey}`;
    const recipe = FUSION_RECIPES[recipeKey1] || FUSION_RECIPES[recipeKey2];

    if (!recipe) {
      this.speak(this.getRandomQuote(LUIZ_QUOTES.fuseFail));
      return false;
    }

    // Identifica os elementos DOM das cartas para animar a colisão
    const allCardEls = Array.from(document.querySelectorAll('.game-card'));
    const sourceEl = allCardEls.find(el => parseInt(el.dataset.index) === indexSource);
    const targetEl = allCardEls.find(el => parseInt(el.dataset.index) === indexTarget);

    if (sourceEl) sourceEl.classList.add('fusion-colliding-source');
    if (targetEl) targetEl.classList.add('fusion-colliding-target');

    // Efeito de Flash na Tela e Tremor na Arena
    const viewport = document.getElementById('mobile-viewport');
    if (viewport) {
      const flash = document.createElement('div');
      flash.className = 'fusion-screen-flash';
      viewport.appendChild(flash);
      setTimeout(() => flash.remove(), 550);
    }
    const arena = document.getElementById('battle-arena');
    if (arena) {
      arena.classList.add('arena-shake');
      setTimeout(() => arena.classList.remove('arena-shake'), 450);
    }

    sfx.fusion();
    if (navigator.vibrate) navigator.vibrate([40, 30, 80]);

    // Clímax da fusão após colisão
    setTimeout(() => {
      const higherIndex = Math.max(indexSource, indexTarget);
      const lowerIndex = Math.min(indexSource, indexTarget);
      this.hand.splice(higherIndex, 1);
      this.hand.splice(lowerIndex, 1);

      const fusedKey = recipeKey1 in FUSION_RECIPES ? recipeKey1 : recipeKey2;
      this.hand.push(fusedKey);

      this.showFusionBanner(recipe);
      this.speak(recipe.catchphrase || 'Flawless! Essa fusão tem o selo de qualidade Beznoir.');
      this.updateUI();
    }, 280);

    return true;
  }

  spawnFloatingText(targetEl, text, color = '#ff4757') {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const arena = document.getElementById('battle-arena');
    if (!arena) return;
    const arenaRect = arena.getBoundingClientRect();

    const floatEl = document.createElement('div');
    floatEl.className = 'floating-text';
    floatEl.textContent = text;
    floatEl.style.color = color;

    const left = (rect.left + rect.width / 2) - arenaRect.left;
    const top = (rect.top + rect.height * 0.25) - arenaRect.top;

    floatEl.style.left = `${left}px`;
    floatEl.style.top = `${top}px`;

    arena.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 850);
  }

  // CONTROLE DE ESTADOS DO SPRITE DO PROTAGONISTA (Idle, Attack, Hurt)
  setPlayerSpriteState(state) {
    const idleEl = document.getElementById('player-sprite-idle');
    const attackEl = document.getElementById('player-sprite-attack');
    const hurtEl = document.getElementById('player-sprite-hurt');
    if (!idleEl || !attackEl || !hurtEl) return;

    // Reseta visibilidade
    idleEl.className = 'player-bust-sprite hidden-sprite';
    attackEl.className = 'player-bust-sprite hidden-sprite';
    hurtEl.className = 'player-bust-sprite hidden-sprite';

    if (state === 'attack') {
      attackEl.className = 'player-bust-sprite active-attack';
    } else if (state === 'hurt') {
      hurtEl.className = 'player-bust-sprite active-hurt';
    } else {
      idleEl.className = 'player-bust-sprite active-idle';
    }
  }

  playPlayerAttack() {
    this.setPlayerSpriteState('attack');
    this.showComicCallout('attack');
    clearTimeout(this.playerStateTimer);
    this.playerStateTimer = setTimeout(() => {
      this.setPlayerSpriteState('idle');
    }, 650);
  }

  playPlayerHurt() {
    this.setPlayerSpriteState('hurt');
    this.showComicCallout('hurt');
    clearTimeout(this.playerStateTimer);
    this.playerStateTimer = setTimeout(() => {
      this.setPlayerSpriteState('idle');
    }, 850);
  }

  showComicCallout(type) {
    const calloutEl = document.getElementById('player-comic-callout');
    if (!calloutEl) return;
    const quotes = COMIC_CALLOUTS[type] || [];
    if (!quotes.length) return;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    calloutEl.textContent = quote;
    calloutEl.className = `comic-callout ${type === 'attack' ? 'attack-callout' : ''}`;
    calloutEl.classList.remove('hidden');

    clearTimeout(this.calloutTimer);
    this.calloutTimer = setTimeout(() => {
      calloutEl.classList.add('hidden');
    }, 900);
  }

  // CONTROLE DE ESTADOS DO SPRITE DO INIMIGO (Idle, Attack, Hurt)
  setEnemySpriteState(state) {
    const idleEl = document.getElementById('enemy-sprite-idle');
    const attackEl = document.getElementById('enemy-sprite-attack');
    const hurtEl = document.getElementById('enemy-sprite-hurt');
    if (!idleEl || !attackEl || !hurtEl) return;

    idleEl.className = 'enemy-fullbody-sprite hidden-sprite';
    attackEl.className = 'enemy-fullbody-sprite hidden-sprite';
    hurtEl.className = 'enemy-fullbody-sprite hidden-sprite';

    if (state === 'attack') {
      attackEl.className = 'enemy-fullbody-sprite active-enemy-attack';
    } else if (state === 'hurt') {
      hurtEl.className = 'enemy-fullbody-sprite active-enemy-hurt';
    } else {
      idleEl.className = 'enemy-fullbody-sprite active-enemy-idle';
    }
  }

  playEnemyAttack() {
    this.setEnemySpriteState('attack');
    this.showEnemyComicCallout('attack');
    clearTimeout(this.enemyStateTimer);
    this.enemyStateTimer = setTimeout(() => {
      this.setEnemySpriteState('idle');
    }, 650);
  }

  playEnemyHurt() {
    this.setEnemySpriteState('hurt');
    this.showEnemyComicCallout('hurt');
    clearTimeout(this.enemyStateTimer);
    this.enemyStateTimer = setTimeout(() => {
      this.setEnemySpriteState('idle');
    }, 850);
  }

  showEnemyComicCallout(type) {
    const calloutEl = document.getElementById('enemy-comic-callout');
    if (!calloutEl) return;
    const quotes = (this.enemy && this.enemy.callouts && this.enemy.callouts[type]) || ENEMY_COMIC_CALLOUTS[type] || [];
    if (!quotes.length) return;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    calloutEl.textContent = quote;
    calloutEl.className = 'enemy-comic-callout';
    calloutEl.classList.remove('hidden');

    clearTimeout(this.enemyCalloutTimer);
    this.enemyCalloutTimer = setTimeout(() => {
      calloutEl.classList.add('hidden');
    }, 900);
  }

  damageEnemy(dmg, triggerAnim = true) {
    let finalDmg = dmg;
    const enemyEl = document.getElementById('enemy-sprite');
    if (this.enemy.shield > 0) {
      if (finalDmg <= this.enemy.shield) {
        this.enemy.shield -= finalDmg;
        this.spawnFloatingText(enemyEl, `🛡️ -${finalDmg}`, '#70a1ff');
        finalDmg = 0;
      } else {
        const blocked = this.enemy.shield;
        finalDmg -= this.enemy.shield;
        this.enemy.shield = 0;
        this.spawnFloatingText(enemyEl, `🛡️ -${blocked}`, '#70a1ff');
      }
    }
    this.enemy.hp = Math.max(0, this.enemy.hp - finalDmg);

    if (finalDmg > 0) {
      sfx.enemyPaperDrop();
      this.playEnemyHurt();
      this.spawnFloatingText(enemyEl, `-${finalDmg}`, '#ff4757');
      if (navigator.vibrate) navigator.vibrate(30);
    }

    // GATILHO UNIVERSAL DE VITÓRIA (Independente do tipo de dano: ataque, queimadura, choque, sangramento)
    if (this.enemy.hp <= 0 && !this.isVictoryHandled) {
      this.isVictoryHandled = true;
      setTimeout(() => {
        this.handleVictory();
      }, 400);
    }
  }

  endTurn() {
    this.player.lastDamageTaken = 0;

    if (this.enemy.intent.type === 'attack') {
      sfx.enemyCoffeeSplash();
      this.playEnemyAttack();
      let dmg = this.enemy.intent.value;

      if (this.enemy.statuses.chill > 0) dmg = Math.floor(dmg * 0.7);
      if (this.enemy.statuses.charm > 0) dmg = Math.floor(dmg * 0.5);

      if (this.enemy.statuses.bleed > 0) {
        const bleedDmg = this.enemy.statuses.bleed;
        this.damageEnemy(bleedDmg, true);
        this.enemy.statuses.bleed = Math.max(0, this.enemy.statuses.bleed - 1);
        if (this.enemy.statuses.bleed === 0) delete this.enemy.statuses.bleed;
      }

      let unmitigatedDmg = dmg;
      const playerEl = document.getElementById('player-bust-frame');
      if (this.player.shield > 0) {
        if (unmitigatedDmg <= this.player.shield) {
          this.player.shield -= unmitigatedDmg;
          this.spawnFloatingText(playerEl, `🛡️ -${unmitigatedDmg}`, '#70a1ff');
          unmitigatedDmg = 0;
        } else {
          const blocked = this.player.shield;
          unmitigatedDmg -= this.player.shield;
          this.player.shield = 0;
          this.spawnFloatingText(playerEl, `🛡️ -${blocked}`, '#70a1ff');
        }
      }
      this.player.hp = Math.max(0, this.player.hp - unmitigatedDmg);
      this.player.lastDamageTaken = unmitigatedDmg;

      if (unmitigatedDmg > 0) {
        sfx.hurt();
        sfx.aristocratGasp();
        this.playPlayerHurt();
        this.speak(this.getRandomQuote(LUIZ_QUOTES.hurt));
        if (playerEl) {
          this.spawnFloatingText(playerEl, `-${unmitigatedDmg}`, '#ff4757');
        }
        if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
      }
    } else if (this.enemy.intent.type === 'shield') {
      this.enemy.shield += this.enemy.intent.value;
      const enemyEl = document.getElementById('enemy-sprite');
      this.spawnFloatingText(enemyEl, `+${this.enemy.intent.value} 🛡️`, '#70a1ff');
    }

    this.discardPile.push(...this.hand);
    this.hand = [];

    if (this.player.hp <= 0) {
      this.handleGameOver();
      return;
    }

    if (this.enemy.hp <= 0) {
      this.handleVictory();
      return;
    }

    this.startTurn();
  }

  rollEnemyIntent() {
    const list = this.enemy.intents || [
      { type: 'attack', value: 8, icon: '🗡️', desc: '8 Dano' },
      { type: 'shield', value: 10, icon: '🛡️', desc: '+10 Escudo' }
    ];
    this.enemy.intent = list[Math.floor(Math.random() * list.length)];
  }

  handleVictory() {
    if (this.isVictoryInProgress) return;
    this.isVictoryInProgress = true;
    this.isVictoryHandled = true;

    sfx.victory();
    this.speak(this.getRandomQuote(LUIZ_QUOTES.win));
    this.player.gold += 50;

    const station = document.getElementById('enemy-battle-station');
    if (station) {
      station.classList.add('defeat-exit');
    }

    if (this.roomNumber >= 5) {
      this.hasBeatenGame = true;
      this.maxUnlockedRoom = 5;
      setTimeout(() => {
        const gameOverModal = document.getElementById('game-over-modal');
        if (gameOverModal) {
          const box = gameOverModal.querySelector('.game-over-box');
          const tag = gameOverModal.querySelector('.death-tag');
          const artWrap = document.getElementById('game-over-art-wrap');
          const h2 = gameOverModal.querySelector('h2');
          const p = gameOverModal.querySelector('p');
          const btnText = document.getElementById('btn-restart-text') || document.getElementById('btn-restart');
          if (box) box.classList.add('victory-mode');
          if (tag) {
            tag.textContent = '✨ AQUISIÇÃO HOSTIL CONCLUÍDA! ✨';
            tag.classList.add('victory-tag-style');
          }
          if (artWrap) artWrap.classList.remove('hidden');
          if (h2) h2.textContent = '"Flawless acquisition! A Inferno S/A agora pertence à Holding Beznoir!"';
          if (p) p.textContent = 'Louis Beznoir IV destituiu Hades, assumiu o Trono Executivo do Tártaro e rebaixou o antigo Lorde do Submundo!';
          if (btnText) btnText.textContent = 'NOVA OPERAÇÃO';
          gameOverModal.classList.remove('hidden');
        }
      }, 900);
      return;
    }

    setTimeout(() => {
      this.showGodBoonEncounter();
    }, 750);
  }

  showGodBoonEncounter() {
    sfx.godBoonOffer();
    const modal = document.getElementById('god-boon-modal');
    const godImg = document.getElementById('boon-god-img');
    const godTitle = document.getElementById('boon-god-title');
    const godName = document.getElementById('boon-god-name');
    const godQuote = document.getElementById('boon-god-quote');
    const cardsContainer = document.getElementById('boon-cards-container');

    const isHermes = this.roomNumber % 2 !== 0;
    if (isHermes) {
      godTitle.textContent = 'BÊNÇÃO DE HERMES';
      godName.textContent = 'Hermes, o Mensageiro';
      godImg.src = 'assets/characters/god_hermes.png';
      godQuote.textContent = '"E aí, primo rico! Soube que você engasgou com uma ostra de 4.000 euros na Côte d\'Azur? Hahaha! O Caronte queria te jogar no fosso, mas eu vi potencial nessa sua pose insuportável. Escolha uma bênção dos céus antes que o chefe perceba que estou aqui."';
    } else {
      godTitle.textContent = 'BÊNÇÃO DE ZEUS';
      godName.textContent = 'Zeus, o Rei do Olimpo';
      godImg.src = 'assets/characters/god_zeus.png';
      godQuote.textContent = '"Jovem Louis! Suas exigências estridentes ecoaram pelo Tártaro até o Olimpo. Uma audácia de respeito... aceite esta centelha divina e mostre a Hades quem realmente manda!"';
    }

    const boonChoices = isHermes
      ? ['bencao_velocidade', 'bencao_raio', 'bencao_guerra']
      : ['bencao_raio', 'bencao_fogo', 'blefe_mercado'];

    cardsContainer.innerHTML = '';
    boonChoices.forEach(cardKey => {
      const card = CARD_DATABASE[cardKey];
      if (!card) return;

      const cardEl = document.createElement('div');
      cardEl.className = 'boon-card-choice';
      
      let boonChosen = false;
      const chooseBoon = (e) => {
        if (e && e.type === 'touchend') {
          e.preventDefault();
        }
        if (boonChosen) return;
        boonChosen = true;
        this.claimBoon(cardKey);
      };

      cardEl.addEventListener('click', chooseBoon);
      cardEl.addEventListener('touchend', chooseBoon);

      const illustrationHtml = card.image
        ? `<img src="${card.image}" class="card-art-img" alt="${card.name}" onerror="this.outerHTML='<span class=\\'card-art-fallback\\'>${card.icon}</span>'"/>`
        : `<span class="card-art-fallback">${card.icon}</span>`;

      cardEl.innerHTML = `
        <div class="card-art-container">
          ${illustrationHtml}
        </div>
        <img class="card-frame-overlay" src="assets/ui/card_frame_action_cutout.png?v=3" alt="Frame" />
        <div class="card-cost">${card.cost}</div>
        <div class="card-header">${card.name}</div>
        <div class="card-desc">${card.desc}</div>
        <div class="card-type-tag">BÊNÇÃO</div>
      `;
      cardsContainer.appendChild(cardEl);
    });

    modal.classList.remove('hidden');
  }

  claimBoon(cardKey) {
    const card = CARD_DATABASE[cardKey];
    if (!card) return;

    this.deck.push(cardKey);
    sfx.boonAcquired();

    const boonModal = document.getElementById('god-boon-modal');
    if (boonModal) {
      boonModal.classList.add('hidden');
    }

    this.speak(`Excelente aquisição de portfólio. Mantenha os deuses na minha folha de pagamento!`);
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + 15);

    setTimeout(() => {
      // Avança diretamente para a progressão no mapa do submundo!
      this.nextRoom('combat');
    }, 500);
  }

  showRoomChoice() {
    const modal = document.getElementById('room-choice-modal');
    const doorsContainer = document.getElementById('doors-container');

    const nextEnemy = DUNGEON_ENEMIES[Math.min(this.enemyIndex + 1, DUNGEON_ENEMIES.length - 1)];
    const portraitHtml = nextEnemy.portrait
      ? `<img src="${nextEnemy.portrait}" alt="${nextEnemy.luizName}" style="width:42px;height:42px;border-radius:50%;border:1.5px solid #ffd700;object-fit:cover;">`
      : nextEnemy.avatar;

    doorsContainer.innerHTML = `
      <div class="door-card" onclick="window.game.nextRoom('combat')">
        <div class="door-icon">${portraitHtml}</div>
        <div class="door-info">
          <strong>Avançar para Sala ${this.roomNumber + 1}: ${nextEnemy.luizName}</strong>
          <small>Desafio: Enquadrar ${nextEnemy.realName} no Roadmap e avançar</small>
        </div>
      </div>
      <div class="door-card" onclick="window.game.nextRoom('heal')">
        <div class="door-icon">🍷</div>
        <div class="door-info">
          <strong>Fonte Restauradora do Estige</strong>
          <small>Descanso Nobre: Recupera +25 de HP e reorganiza o baralho</small>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
  }

  openUnderworldMap(inTransition = false) {
    const mapModal = document.getElementById('map-modal');
    if (!mapModal) return;

    const CHAMBER_COORDS = {
      1: { top: '88%', left: '54%', title: 'Câmara I: Margens do Aqueronte', desc: 'Onde as almas recém-chegadas aguardam atendimento perpétuo às margens do rio cinzento...' },
      2: { top: '71%', left: '68%', title: 'Câmara II: Cartório do Limbo', desc: 'A fúria de mil processos não arquivados e a Recepcionista Histérica em chamas...' },
      3: { top: '55%', left: '50%', title: 'Câmara III: Portões do Cócito', desc: 'Onde nenhum recurso judicial tem efeito suspensivo perante os guardas de pedra...' },
      4: { top: '42%', left: '50%', title: 'Câmara IV: Tribunal Supremo de Minos', desc: 'Audiência arbitrária e julgamento sumário sob a balança divina do submundo...' },
      5: { top: '24%', left: '50%', title: 'Câmara V: Gabinete Executivo de Hades', desc: 'O CEO do Submundo aguarda o pitch final de aquisição hostil...' }
    };

    const currentChamber = Math.min(Math.max(this.roomNumber, 1), 5);
    const chamberInfo = CHAMBER_COORDS[currentChamber];

    // Atualiza classes dos nós do mapa
    const nodes = document.querySelectorAll('.map-node');
    nodes.forEach(node => {
      const chamberNum = parseInt(node.dataset.chamber);
      node.classList.remove('active-node', 'completed-node', 'locked-node');
      if (chamberNum < currentChamber) {
        node.classList.add('completed-node');
      } else if (chamberNum === currentChamber) {
        node.classList.add('active-node');
      } else {
        node.classList.add('locked-node');
      }
    });

    // Atualiza a posição do pino de Louis com transição suave
    const pin = document.getElementById('map-player-pin');
    if (pin && chamberInfo) {
      pin.style.top = chamberInfo.top;
      pin.style.left = chamberInfo.left;
    }

    // Atualiza cartão de detalhes da câmara com Selo Grego Cinzelado (sem foguete emoji)
    const cardStatus = document.getElementById('map-card-status');
    const cardTitle = document.getElementById('map-card-title');
    const cardDesc = document.getElementById('map-card-desc');

    if (cardStatus) {
      cardStatus.className = 'chamber-status-tag status-current';
      const greekEmblemSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="#ffd700" stroke="#12091c" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="#ff1e42"/></svg>`;
      cardStatus.innerHTML = inTransition
        ? `${greekEmblemSvg}<span>PRÓXIMA META DO ROADMAP</span>`
        : `${greekEmblemSvg}<span>CÂMARA ATUAL</span>`;
    }
    if (cardTitle && chamberInfo) cardTitle.textContent = chamberInfo.title;
    if (cardDesc && chamberInfo) cardDesc.textContent = `"${chamberInfo.desc}"`;

    // Botões de ação no rodapé e cabeçalho
    const btnProceed = document.getElementById('map-btn-proceed');
    const btnCloseBottom = document.getElementById('map-btn-close-bottom');
    const btnCloseHeader = document.getElementById('btn-close-map');

    this.isMapInTransition = inTransition;

    if (inTransition) {
      if (btnProceed) {
        btnProceed.textContent = `AVANÇAR PARA CÂMARA ${currentChamber}`;
        btnProceed.classList.remove('hidden');
      }
      if (btnCloseBottom) btnCloseBottom.classList.add('hidden');
      if (btnCloseHeader) btnCloseHeader.classList.add('hidden');
    } else {
      if (btnProceed) btnProceed.classList.add('hidden');
      if (btnCloseBottom) btnCloseBottom.classList.remove('hidden');
      if (btnCloseHeader) btnCloseHeader.classList.remove('hidden');
    }

    mapModal.classList.remove('hidden');
    sfx.swordSlash();
  }

  closeUnderworldMap() {
    const mapModal = document.getElementById('map-modal');
    if (mapModal) mapModal.classList.add('hidden');
    this.isMapInTransition = false;
  }

  openInterstitialComic(transitionKey) {
    const comicModal = document.getElementById('interstitial-comic-modal');
    if (!comicModal) return;

    this.interstitialSlideIndex = 0;
    this.interstitialTransitionKey = transitionKey;
    this.renderInterstitialSlide();

    comicModal.classList.remove('hidden');
    sfx.godBoonOffer();
  }

  renderInterstitialSlide() {
    const titleEl = document.getElementById('interstitial-title');
    const imgEl = document.getElementById('interstitial-img');
    const captionEl = document.getElementById('interstitial-caption-text');
    const btnTextEl = document.getElementById('btn-interstitial-text') || document.querySelector('#btn-interstitial-continue span');
    const dots = document.querySelectorAll('#interstitial-dots .comic-dot');

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.interstitialSlideIndex);
    });

    if (this.interstitialTransitionKey === '1_2') {
      if (titleEl) titleEl.textContent = 'TRANSIÇÃO: RUMO AO CARTÓRIO DO LIMBO';
      if (this.interstitialSlideIndex === 0) {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_1_2_panel1.png?v=30';
        if (captionEl) captionEl.textContent = '"Louis achou que podia dar gorjeta na catraca do submundo: \'Cobrem da conta do meu pai, gentileza...\'"';
        if (btnTextEl) btnTextEl.textContent = 'PRÓXIMO QUADRO';
      } else {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_1_2_panel2.png?v=30';
        if (captionEl) captionEl.textContent = '"O Choque Burocrático! A Recepcionista do Limbo atira uma montanha de processos em chamas: \'NÃO ATENDEMOS SEM AGENDAMENTO! SENHA 9.999!\'"';
        if (btnTextEl) btnTextEl.textContent = 'ENTRAR EM COMBATE';
      }
    } else if (this.interstitialTransitionKey === '2_3') {
      if (titleEl) titleEl.textContent = 'TRANSIÇÃO: OS PORTÕES DO CÓCITO';
      if (this.interstitialSlideIndex === 0) {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_2_3_panel1.png?v=30';
        if (captionEl) captionEl.textContent = '"Louis tentando furar a fila do controle de acesso: \'Liberem a catraca VIP. Meu pai é acionista majoritário desta dimensão.\'"';
        if (btnTextEl) btnTextEl.textContent = 'PRÓXIMO QUADRO';
      } else {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_2_3_panel2.png?v=30';
        if (captionEl) captionEl.textContent = '"A Barreira Intransigente! O Gárgula colossal bloqueia o caminho: \'O PROTOCOLO É ABSOLUTO. SEM EXCEÇÕES.\'"';
        if (btnTextEl) btnTextEl.textContent = 'ENTRAR EM COMBATE';
      }
    } else if (this.interstitialTransitionKey === '3_4') {
      if (titleEl) titleEl.textContent = 'TRANSIÇÃO: TRIBUNAL SUPREMO DE MINOS';
      if (this.interstitialSlideIndex === 0) {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_3_4_panel1.png?v=30';
        if (captionEl) captionEl.textContent = '"Louis adentra o salão do Tribunal de Minos cheio de confiança: \'OUTSTANDING! Meus advogados resolvem isso em 5 minutos!\'"';
        if (btnTextEl) btnTextEl.textContent = 'PRÓXIMO QUADRO';
      } else {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_3_4_panel2.png?v=30';
        if (captionEl) captionEl.textContent = '"O Veredito Implacável! Rei Minos bate o malhete de ouro: \'RECURSO INDEFERIDO! MULTA POR LITIGÂNCIA DE MÁ-FÉ!\'"';
        if (btnTextEl) btnTextEl.textContent = 'ENTRAR EM COMBATE';
      }
    } else if (this.interstitialTransitionKey === '4_5') {
      if (titleEl) titleEl.textContent = 'TRANSIÇÃO FINAL: O GABINETE DE HADES';
      if (this.interstitialSlideIndex === 0) {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_4_5_panel1.png?v=30';
        if (captionEl) captionEl.textContent = '"Louis escancara as portas duplas da presidência: \'FINALLY! Vim exigir o estorno imediato da minha morte!\'"';
        if (btnTextEl) btnTextEl.textContent = 'PRÓXIMO QUADRO';
      } else {
        if (imgEl) imgEl.src = 'assets/comic/comic_transition_4_5_panel2.png?v=30';
        if (captionEl) captionEl.textContent = '"Choque com o CEO! Hades ergue seu Bidente em chamas: \'ESTORNO NEGADO, GAROTO! AQUI VOCÊ É SÓ MAIS UM PASSIVO NO MEU BALANÇO!\'"';
        if (btnTextEl) btnTextEl.textContent = 'ENFRENTAR HADES';
      }
    }
  }

  advanceInterstitialSlide() {
    if (this.interstitialSlideIndex === 0) {
      this.interstitialSlideIndex = 1;
      this.renderInterstitialSlide();
      sfx.cardDraw();
    } else {
      this.closeInterstitialComic();
    }
  }

  closeInterstitialComic() {
    const comicModal = document.getElementById('interstitial-comic-modal');
    if (comicModal) comicModal.classList.add('hidden');
    this.triggerPhaseTransition();
  }

  nextRoom(choice) {
    const choiceModal = document.getElementById('room-choice-modal');
    if (choiceModal) choiceModal.classList.add('hidden');

    this.roomNumber++;
    this.maxUnlockedRoom = Math.max(this.maxUnlockedRoom || 1, this.roomNumber);
    this.enemyIndex++;
    this.isVictoryHandled = false;
    this.isVictoryInProgress = false;

    if (choice === 'heal') {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 25);
    }

    this.enemy = this.createEnemy(this.enemyIndex);
    // Exibe o mapa com o avanço da jornada até a próxima câmara
    this.openUnderworldMap(true);
  }

  triggerPhaseTransition() {
    const overlay = document.getElementById('phase-transition-overlay');
    const titleEl = document.getElementById('phase-title');
    const descEl = document.getElementById('phase-desc');
    const subEl = document.getElementById('phase-sub');
    const bgLayer = document.getElementById('arena-bg-layer');

    if (titleEl) titleEl.textContent = this.enemy.bgTitle;
    if (descEl) descEl.textContent = `"${this.enemy.bgDesc}"`;
    if (subEl) subEl.textContent = `OPERAÇÃO SUBMUNDO — CÂMARA ${this.roomNumber}`;

    if (overlay) overlay.classList.remove('hidden');

    // Troca o cenário de fundo da arena
    if (bgLayer && this.enemy.background) {
      bgLayer.style.backgroundImage = `url("${this.enemy.background}")`;
      bgLayer.style.backgroundSize = 'cover';
      bgLayer.style.backgroundPosition = 'center';
    }

    // Atualiza Top HUD com o novo círculo/câmara
    const roomNameEl = document.getElementById('room-name');
    if (roomNameEl) roomNameEl.textContent = this.enemy.bgTitle;

    // Atualiza o sprite e status do novo monstro
    this.updateUI();

    const station = document.getElementById('enemy-battle-station');
    if (station) {
      station.classList.remove('defeat-exit');
      station.style.animation = 'none';
      void station.offsetWidth; // Reflow
      station.style.animation = '';
      station.classList.add('enter-station');
    }

    sfx.swordSlash();

    setTimeout(() => {
      if (overlay) overlay.classList.add('hidden');
      if (station) setTimeout(() => station.classList.remove('enter-station'), 500);

      this.speak(this.getRandomQuote([
        'Outstanding! Que recepção calorosa... onde fica o atendimento VIP?',
        'Mais burocracia? Pelo visto meu advogado terá muito trabalho.',
        'Esse ambiente é totalmente hostil a investidores.',
        'Minha presença aqui é meramente protocolar.'
      ]));

      this.drawPile = [...this.deck].sort(() => Math.random() - 0.5);
      this.discardPile = [];
      this.hand = [];
      this.startTurn();
    }, 1600);
  }

  handleGameOver() {
    const gameOverModal = document.getElementById('game-over-modal');
    if (gameOverModal) {
      const box = gameOverModal.querySelector('.game-over-box');
      const tag = gameOverModal.querySelector('.death-tag');
      const artWrap = document.getElementById('game-over-art-wrap');
      const h2 = gameOverModal.querySelector('h2');
      const p = gameOverModal.querySelector('p');
      const btnText = document.getElementById('btn-restart-text') || document.getElementById('btn-restart');
      if (box) box.classList.remove('victory-mode');
      if (tag) {
        tag.textContent = '💀 OPERAÇÃO LIQUIDADA 💀';
        tag.classList.remove('victory-tag-style');
      }
      if (artWrap) artWrap.classList.add('hidden');
      if (h2) h2.textContent = '"Isso é um dealbreaker total..."';
      if (p) p.textContent = `Louis entrou em colapso nas chamas de ${this.enemy ? this.enemy.bgTitle : 'Câmara I'}.`;
      if (btnText) btnText.textContent = 'TENTAR NOVAMENTE';
      gameOverModal.classList.remove('hidden');
    }
  }

  restart() {
    document.getElementById('game-over-modal').classList.add('hidden');
    document.getElementById('room-choice-modal').classList.add('hidden');
    this.closeUnderworldMap();
    const interModal = document.getElementById('interstitial-comic-modal');
    if (interModal) interModal.classList.add('hidden');

    this.player.hp = this.player.maxHp;
    this.player.gold = 100;
    this.player.lastDamageTaken = 0;
    this.roomNumber = 1;
    this.enemyIndex = 0;
    this.isVictoryHandled = false;
    this.isVictoryInProgress = false;
    this.enemy = this.createEnemy(0);

    this.deck = [
      'toque_aristocratico',
      'toque_aristocratico',
      'liminar_judicial',
      'corte_custos',
      'discurso_impacto',
      'bencao_fogo'
    ];
    this.init();
  }

  speak(text) {
    const bubble = document.getElementById('luiz-dialogue-bubble');
    const dialogue = document.getElementById('dialogue-text');
    dialogue.textContent = `"${text}"`;
    bubble.classList.remove('hidden');
    clearTimeout(this.dialogueTimer);
    this.dialogueTimer = setTimeout(() => {
      bubble.classList.add('hidden');
    }, 2600);
  }

  getRandomQuote(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  showFusionBanner(recipe) {
    const banner = document.getElementById('fusion-banner');
    const nameEl = document.getElementById('fusion-card-name');
    const previewImg = document.getElementById('fusion-preview-img');
    const previewCost = document.getElementById('fusion-preview-cost');
    const previewHeader = document.getElementById('fusion-preview-header');
    const previewDesc = document.getElementById('fusion-preview-desc');

    const cardName = recipe.name || 'FUSÃO ARCANA';
    nameEl.textContent = cardName.toUpperCase();

    if (previewImg && recipe.image) {
      previewImg.src = recipe.image;
    }
    if (previewCost) previewCost.textContent = recipe.cost ?? 1;
    if (previewHeader) previewHeader.textContent = cardName;
    if (previewDesc) previewDesc.textContent = recipe.desc || '';

    banner.classList.remove('hidden');
    clearTimeout(this.fusionBannerTimer);
    this.fusionBannerTimer = setTimeout(() => {
      banner.classList.add('hidden');
    }, 2400);
  }

  updateUI() {
    document.getElementById('player-name').textContent = this.player.name;
    document.getElementById('player-hp-fill').style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
    document.getElementById('player-hp-text').textContent = `${this.player.hp} / ${this.player.maxHp}`;
    document.getElementById('energy-current').textContent = this.player.energy;
    document.getElementById('energy-max').textContent = this.player.maxEnergy;
    document.getElementById('player-gold').textContent = this.player.gold;

    const pShield = document.getElementById('player-shield');
    if (this.player.shield > 0) {
      pShield.classList.remove('hidden');
      document.getElementById('player-shield-val').textContent = this.player.shield;
    } else {
      pShield.classList.add('hidden');
    }

    // Atualização com Nome do Luiz + Subnome Real
    document.getElementById('enemy-name').textContent = this.enemy.luizName;
    document.getElementById('enemy-subname').textContent = `(${this.enemy.realName})`;

    const enemyImg = document.getElementById('enemy-sprite-idle') || document.getElementById('enemy-avatar-img');
    const enemyAttackImg = document.getElementById('enemy-sprite-attack');
    const enemyHurtImg = document.getElementById('enemy-sprite-hurt');
    const enemyFallback = document.getElementById('enemy-avatar-fallback');
    if (enemyImg && this.enemy.image) {
      enemyImg.src = this.enemy.image;
      if (enemyAttackImg) enemyAttackImg.src = this.enemy.image;
      if (enemyHurtImg) enemyHurtImg.src = this.enemy.image;
      if (enemyFallback) enemyFallback.style.display = 'none';
      enemyImg.style.display = 'block';
    } else if (enemyFallback) {
      if (enemyImg) enemyImg.style.display = 'none';
      enemyFallback.textContent = this.enemy.avatar;
      enemyFallback.style.display = 'block';
    }

    document.getElementById('enemy-hp-fill').style.width = `${(this.enemy.hp / this.enemy.maxHp) * 100}%`;
    document.getElementById('enemy-hp-text').textContent = `${this.enemy.hp} / ${this.enemy.maxHp}`;
    document.getElementById('intent-icon').textContent = this.enemy.intent.icon;
    const hintEl = document.getElementById('enemy-incoming-hint');
    if (hintEl) hintEl.textContent = `Recebendo ${this.enemy.intent.desc}`;

    const eShield = document.getElementById('enemy-shield');
    if (this.enemy.shield > 0) {
      eShield.classList.remove('hidden');
      document.getElementById('enemy-shield-val').textContent = this.enemy.shield;
    } else {
      eShield.classList.add('hidden');
    }

    this.renderStatusBadges();

    document.getElementById('draw-pile-count').textContent = this.drawPile.length;
    document.getElementById('discard-pile-count').textContent = this.discardPile.length;

    this.renderHand();
  }

  renderStatusBadges() {
    const container = document.getElementById('enemy-status-container');
    const tooltip = document.getElementById('status-tooltip');
    if (!container) return;
    container.innerHTML = '';

    const stMap = {
      burn: { icon: 'assets/ui/status_fogo.svg', label: 'Queimadura', desc: 'Causa dano de fogo contínuo no início do turno (reduz em 1 a cada turno).', class: 'status-burn' },
      shock: { icon: 'assets/ui/status_raio.svg', label: 'Choque Elétrico', desc: 'Causa dano elétrico bônus devastador no próximo ataque sofrido.', class: 'status-shock' },
      chill: { icon: 'assets/ui/status_gelo.svg', label: 'Congelamento', desc: 'O inimigo fica entorpecido pelo frio e causa 30% a menos de dano.', class: 'status-chill' },
      bleed: { icon: 'assets/ui/status_sangria.svg', label: 'Sangria', desc: 'Sofre dano físico adicional acumulativo a cada ação realizada.', class: 'status-bleed' },
      daze: { icon: 'assets/ui/status_confusao.svg', label: 'Confusão Mental', desc: 'Ataques do inimigo têm chance de falhar e sofrer atordoamento.', class: 'status-daze' },
      charm: { icon: 'assets/ui/status_charme.svg', label: 'Charme Nobre', desc: 'O inimigo hesita perante o carisma e tem seu dano reduzido em 50%.', class: 'status-charm' }
    };

    for (const [key, val] of Object.entries(this.enemy.statuses)) {
      if (val > 0 && stMap[key]) {
        const info = stMap[key];
        const badge = document.createElement('span');
        badge.className = `status-badge ${info.class}`;
        badge.title = `${info.label} (${val})`;
        badge.innerHTML = `<img src="${info.icon}" class="status-badge-art" alt="${info.label}"/><span class="status-badge-val">${val}</span>`;
        
        badge.addEventListener('click', (e) => {
          e.stopPropagation();
          if (!tooltip) return;
          if (!tooltip.classList.contains('hidden') && tooltip.dataset.currentKey === key) {
            tooltip.classList.add('hidden');
          } else {
            tooltip.dataset.currentKey = key;
            tooltip.innerHTML = `<div class="tooltip-header"><img src="${info.icon}" class="status-tooltip-art" alt="${info.label}"/><strong>${info.label} ${val}</strong></div><p>${info.desc}</p>`;
            tooltip.classList.remove('hidden');
          }
        });

        container.appendChild(badge);
      }
    }
  }

  renderHand() {
    const container = document.getElementById('cards-hand');
    container.innerHTML = '';

    this.hand.forEach((cardKey, index) => {
      const card = CARD_DATABASE[cardKey] || FUSION_RECIPES[cardKey];
      if (!card) return;

      const isSelected = this.selectedCardIndex === index;
      const cardEl = document.createElement('div');
      cardEl.className = `game-card ${card.type === 'blessing' ? 'blessing-card' : ''} ${card.type === 'fused' ? 'fused-card' : ''} ${isSelected ? 'is-selected' : ''}`;
      cardEl.dataset.index = index;

      // Geometria de Leque Estilo Hearthstone (Fan Arc)
      const total = this.hand.length;
      const center = (total - 1) / 2;
      const diff = index - center;
      const rot = (diff * 5.2).toFixed(1);
      const offsetY = (Math.abs(diff) * 4.2).toFixed(1);
      cardEl.style.setProperty('--card-rot', `${rot}deg`);
      cardEl.style.setProperty('--card-y', `${offsetY}px`);
      cardEl.style.setProperty('--card-z', index + 1);

      const illustrationHtml = card.image
        ? `<img src="${card.image}" class="card-art-img" alt="${card.name}" onerror="this.outerHTML='<span class=\\'card-art-fallback\\'>${card.icon}</span>'"/>`
        : `<span class="card-art-fallback">${card.icon}</span>`;

      cardEl.innerHTML = `
        <div class="card-art-container">
          ${illustrationHtml}
        </div>
        <img class="card-frame-overlay" src="assets/ui/card_frame_action_cutout.png?v=3" alt="Frame" />
        <div class="card-cost">${card.cost}</div>
        <div class="card-header">${card.name}</div>
        <div class="card-desc">${card.desc}</div>
        <div class="card-type-tag">${card.type === 'blessing' ? 'Bênção' : card.type === 'fused' ? 'Fusão' : 'Ação'}</div>
      `;

      this.bindCardEvents(cardEl, index);
      container.appendChild(cardEl);
    });
  }

  bindCardEvents(cardEl, index) {
    let startX = 0, startY = 0;
    let hasMoved = false;

    const onPointerDown = (e) => {
      startX = e.clientX;
      startY = e.clientY;
      hasMoved = false;
      this.isDragging = true;
      this.draggedCardIndex = index;
      cardEl.classList.add('active-touch');
      try {
        cardEl.setPointerCapture(e.pointerId);
      } catch (err) {}
    };

    const onPointerMove = (e) => {
      if (!this.isDragging || this.draggedCardIndex !== index) return;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      if (Math.abs(deltaY) > 10 || Math.abs(deltaX) > 10) {
        hasMoved = true;
      }

      // Detecção Geométrica de Alvo de Fusão (Imune a sobreposição de ponteiro no mobile)
      const allCardEls = Array.from(document.querySelectorAll('.game-card'));
      let foundTargetIndex = null;

      for (const otherEl of allCardEls) {
        const otherIndex = parseInt(otherEl.dataset.index);
        if (otherIndex === index) continue;

        const rect = otherEl.getBoundingClientRect();
        // Margem de tolerância generosa para facilitar arrastar sobre a carta vizinha no touch
        if (
          e.clientX >= rect.left - 12 &&
          e.clientX <= rect.right + 12 &&
          e.clientY >= rect.top - 20 &&
          e.clientY <= rect.bottom + 25
        ) {
          foundTargetIndex = otherIndex;
          otherEl.classList.add('fusion-target-highlight');
        } else {
          otherEl.classList.remove('fusion-target-highlight');
        }
      }

      this.dragHoverCardIndex = foundTargetIndex;
    };

    const onPointerUp = (e) => {
      if (!this.isDragging || this.draggedCardIndex !== index) return;
      this.isDragging = false;
      cardEl.classList.remove('active-touch');
      try {
        cardEl.releasePointerCapture(e.pointerId);
      } catch (err) {}

      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('fusion-target-highlight'));

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      // 1. Fusão via Arraste (soltou sobre outra carta detectada)
      if (this.dragHoverCardIndex !== null && this.dragHoverCardIndex !== index) {
        this.fuseCards(index, this.dragHoverCardIndex);
        this.selectedCardIndex = null;
      }
      // 2. Jogar via Swipe para Cima intencional (requer subida expressiva em direção à arena)
      else if (hasMoved && deltaY < -75 && Math.abs(deltaY) > Math.abs(deltaX) * 1.25) {
        this.playCard(index);
      }
      // 3. Toque (sem arrastar)
      else if (!hasMoved) {
        // Tap-to-Fuse: se o jogador já tinha uma carta selecionada e tocou em OUTRA, tenta fundir!
        if (this.selectedCardIndex !== null && this.selectedCardIndex !== index) {
          const fused = this.fuseCards(this.selectedCardIndex, index);
          if (fused) {
            this.selectedCardIndex = null;
            return;
          }
        }

        if (this.selectedCardIndex === index) {
          // Segundo toque na mesma carta já ampliada -> Joga a carta!
          this.playCard(index);
        } else {
          // Primeiro toque -> Seleciona com ZOOM de leitura e leque focado!
          this.selectedCardIndex = index;
          this.renderHand();
        }
      }

      this.draggedCardIndex = null;
      this.dragHoverCardIndex = null;
    };

    cardEl.addEventListener('pointerdown', onPointerDown);
    cardEl.addEventListener('pointermove', onPointerMove);
    cardEl.addEventListener('pointerup', onPointerUp);
    cardEl.addEventListener('pointercancel', onPointerUp);
  }
}

// Inicialização Global
window.addEventListener('DOMContentLoaded', () => {
  const game = new GameState();
  window.game = game;
  game.init();

  // =========================================================================
  // TELA INICIAL (TITLE SCREEN)
  // =========================================================================
  const titleModal = document.getElementById('title-screen-modal');
  const btnStartGame = document.getElementById('btn-start-game');
  const btnTitlePrologue = document.getElementById('btn-title-prologue');

  if (btnStartGame && titleModal) {
    const startGameHandler = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      titleModal.classList.add('hidden');
      sfx.swordSlash();
      game.speak('Outstanding! Onde está seu manager? Quero uma audiência marcada com o próprio Hades.');
    };
    btnStartGame.addEventListener('click', startGameHandler);
    btnStartGame.addEventListener('touchend', startGameHandler);
  }

  document.getElementById('btn-end-turn').addEventListener('click', () => {
    game.selectedCardIndex = null;
    game.endTurn();
  });

  document.getElementById('btn-restart').addEventListener('click', () => {
    game.restart();
  });

  // Toque fora das cartas desseleciona a carta ampliada
  document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('#cards-hand') && window.game && window.game.selectedCardIndex !== null) {
      window.game.selectedCardIndex = null;
      window.game.renderHand();
    }
  });

  // =========================================================================
  // SISTEMA DE LEITOR DE HQ (COMIC VIEWER — DESBLOQUEIO PROGRESSIVO)
  // =========================================================================
  const ALL_COMIC_CHAPTERS = [
    {
      title: 'Prólogo — Cena I: A Riviera Francesa',
      caption: '"Louis desfrutava de seu espumante biodinâmico de 4.000 euros, discutindo acaloradamente sobre a temperatura ideal das ostras da Normandia..."',
      image: 'assets/comic/comic_prologue_panel_1.png',
      minRoom: 1
    },
    {
      title: 'Prólogo — Cena II: O Incidente de Compliance',
      caption: '"Um segundo de distração... um engasgo fútil e estúpido! O champanhe voou pelo ar, encerrando uma carreira bilionária de networking."',
      image: 'assets/comic/comic_prologue_panel_2.png',
      minRoom: 1
    },
    {
      title: 'Prólogo — Cena III: O Despertar no Inferno',
      caption: '"Acordando nas pedras cinzentas do Aqueronte, Louis ficou chocado: suas roupas italianas sumiram, substituídas por uma túnica grega! \'Onde fica o RH disso aqui?!\'"',
      image: 'assets/comic/comic_prologue_panel_3.png',
      minRoom: 1
    },
    {
      title: 'Câmara II — Parte 1: A Catraca do Limbo',
      caption: '"Louis achou que podia dar gorjeta na catraca do submundo: \'Cobrem da conta do meu pai, gentileza...\'"',
      image: 'assets/comic/comic_transition_1_2_panel1.png?v=32',
      minRoom: 2
    },
    {
      title: 'Câmara II — Parte 2: O Choque Burocrático',
      caption: '"A Recepcionista do Limbo atira uma montanha de processos em chamas: \'NÃO ATENDEMOS SEM AGENDAMENTO! SENHA 9.999!\'"',
      image: 'assets/comic/comic_transition_1_2_panel2.png?v=32',
      minRoom: 2
    },
    {
      title: 'Câmara III — Parte 1: Os Portões do Cócito',
      caption: '"Louis tentando furar a fila do controle de acesso: \'Liberem a catraca VIP. Meu pai é acionista majoritário desta dimensão.\'"',
      image: 'assets/comic/comic_transition_2_3_panel1.png?v=32',
      minRoom: 3
    },
    {
      title: 'Câmara III — Parte 2: A Barreira Intransigente',
      caption: '"O Gárgula colossal bloqueia o caminho: \'O PROTOCOLO É ABSOLUTO. SEM EXCEÇÕES.\'"',
      image: 'assets/comic/comic_transition_2_3_panel2.png?v=32',
      minRoom: 3
    },
    {
      title: 'Câmara IV — Parte 1: O Tribunal de Minos',
      caption: '"Louis adentra o salão do Tribunal de Minos cheio de confiança: \'OUTSTANDING! Meus advogados resolvem isso em 5 minutos!\'"',
      image: 'assets/comic/comic_transition_3_4_panel1.png?v=32',
      minRoom: 4
    },
    {
      title: 'Câmara IV — Parte 2: O Veredito Implacável',
      caption: '"Rei Minos bate o malhete de ouro: \'RECURSO INDEFERIDO! MULTA POR LITIGÂNCIA DE MÁ-FÉ!\'"',
      image: 'assets/comic/comic_transition_3_4_panel2.png?v=32',
      minRoom: 4
    },
    {
      title: 'Câmara V — Parte 1: O Gabinete Executivo',
      caption: '"Louis escancara as portas duplas da presidência: \'FINALLY! Vim exigir o estorno imediato da minha morte!\'"',
      image: 'assets/comic/comic_transition_4_5_panel1.png?v=32',
      minRoom: 5
    },
    {
      title: 'Câmara V — Parte 2: O Confronto com Hades',
      caption: '"Hades ergue seu Bidente em chamas: \'ESTORNO NEGADO, GAROTO! AQUI VOCÊ É SÓ MAIS UM PASSIVO NO MEU BALANÇO!\'"',
      image: 'assets/comic/comic_transition_4_5_panel2.png?v=32',
      minRoom: 5
    },
    {
      title: 'Epílogo — O Novo CEO do Submundo',
      caption: '"Flawless acquisition! Louis Beznoir IV assume o Trono de Obsidiana enquanto os deuses riem da derrota de Hades!"',
      image: 'assets/comic/ending_victory_throne.png?v=32',
      minRoom: 5,
      requiresVictory: true,
      isVertical: true
    }
  ];

  function getUnlockedComics() {
    if (game.hasBeatenGame) {
      return ALL_COMIC_CHAPTERS;
    }
    const maxRoom = game.maxUnlockedRoom || 1;
    return ALL_COMIC_CHAPTERS.filter(ch => !ch.requiresVictory && ch.minRoom <= maxRoom);
  }

  let currentComicIndex = 0;
  const comicModal = document.getElementById('comic-modal');
  const comicPanelContainer = document.getElementById('comic-panel-container');
  const comicImg = document.getElementById('comic-panel-img');
  const comicTitle = document.getElementById('comic-caption-title');
  const comicText = document.getElementById('comic-caption-text');
  const comicDotsBar = document.getElementById('comic-dots-bar');
  const comicHeaderTag = document.querySelector('#comic-modal .comic-chapter-tag');
  const prevBtn = document.getElementById('comic-prev-btn');
  const nextBtn = document.getElementById('comic-next-btn');

  function renderComicDots() {
    const unlocked = getUnlockedComics();
    comicDotsBar.innerHTML = '';
    unlocked.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `comic-dot ${idx === currentComicIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => showComicSlide(idx));
      comicDotsBar.appendChild(dot);
    });
  }

  function showComicSlide(idx) {
    const unlocked = getUnlockedComics();
    if (idx < 0 || idx >= unlocked.length) return;
    currentComicIndex = idx;
    const slide = unlocked[idx];

    if (comicHeaderTag) {
      comicHeaderTag.textContent = `📖 MEMÓRIAS DE LOUIS (${idx + 1}/${unlocked.length})`;
    }

    if (comicPanelContainer) {
      comicPanelContainer.classList.toggle('vertical-epilogue-panel', !!slide.isVertical);
    }

    comicImg.style.opacity = '0';
    setTimeout(() => {
      comicImg.src = slide.image;
      comicImg.style.opacity = '1';
    }, 150);

    comicTitle.textContent = slide.title;
    comicText.textContent = slide.caption;

    prevBtn.disabled = currentComicIndex === 0;
    nextBtn.textContent = currentComicIndex === unlocked.length - 1 ? 'Concluir ✓' : 'Próximo ▶';

    renderComicDots();
  }

  function openComicViewer() {
    comicModal.classList.remove('hidden');
    showComicSlide(0);
  }

  function closeComicViewer() {
    comicModal.classList.add('hidden');
  }

  const openBtn = document.getElementById('btn-open-comic');
  const closeBtn = document.getElementById('btn-close-comic');

  if (openBtn) {
    const handleOpen = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      openComicViewer();
    };
    openBtn.addEventListener('click', handleOpen);
    openBtn.addEventListener('touchend', handleOpen);
  }

  if (btnTitlePrologue) {
    const handleTitlePrologue = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      openComicViewer();
    };
    btnTitlePrologue.addEventListener('click', handleTitlePrologue);
    btnTitlePrologue.addEventListener('touchend', handleTitlePrologue);
  }

  if (closeBtn) {
    const handleClose = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      closeComicViewer();
    };
    closeBtn.addEventListener('click', handleClose);
    closeBtn.addEventListener('touchend', handleClose);
  }

  prevBtn.addEventListener('click', () => {
    if (currentComicIndex > 0) showComicSlide(currentComicIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    const unlocked = getUnlockedComics();
    if (currentComicIndex < unlocked.length - 1) {
      showComicSlide(currentComicIndex + 1);
    } else {
      closeComicViewer();
    }
  });

  // Swipe touch navigation na HQ
  let comicTouchStartX = 0;
  comicModal.addEventListener('touchstart', (e) => {
    comicTouchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  comicModal.addEventListener('touchend', (e) => {
    const unlocked = getUnlockedComics();
    const deltaX = e.changedTouches[0].clientX - comicTouchStartX;
    if (deltaX < -50 && currentComicIndex < unlocked.length - 1) {
      showComicSlide(currentComicIndex + 1);
    } else if (deltaX > 50 && currentComicIndex > 0) {
      showComicSlide(currentComicIndex - 1);
    }
  }, { passive: true });

  // =========================================================================
  // SISTEMA DO MAPA DE AUDITORIA DO SUBMUNDO (UNDERWORLD MAP)
  // =========================================================================
  const btnOpenMap = document.getElementById('btn-open-map');
  const btnCloseMap = document.getElementById('btn-close-map');
  const mapBtnCloseBottom = document.getElementById('map-btn-close-bottom');
  const mapBtnProceed = document.getElementById('map-btn-proceed');

  function routeRoomTransition() {
    if (game.roomNumber === 2) {
      game.openInterstitialComic('1_2');
    } else if (game.roomNumber === 3) {
      game.openInterstitialComic('2_3');
    } else if (game.roomNumber === 4) {
      game.openInterstitialComic('3_4');
    } else if (game.roomNumber === 5) {
      game.openInterstitialComic('4_5');
    } else {
      game.triggerPhaseTransition();
    }
  }

  if (btnOpenMap) {
    const handleOpenMap = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      game.openUnderworldMap(false);
    };
    btnOpenMap.addEventListener('click', handleOpenMap);
    btnOpenMap.addEventListener('touchend', handleOpenMap);
  }

  if (btnCloseMap) {
    const handleCloseMap = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      if (game.isMapInTransition) {
        game.closeUnderworldMap();
        routeRoomTransition();
      } else {
        game.closeUnderworldMap();
      }
    };
    btnCloseMap.addEventListener('click', handleCloseMap);
    btnCloseMap.addEventListener('touchend', handleCloseMap);
  }

  if (mapBtnCloseBottom) {
    const handleCloseBottom = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      if (game.isMapInTransition) {
        game.closeUnderworldMap();
        routeRoomTransition();
      } else {
        game.closeUnderworldMap();
      }
    };
    mapBtnCloseBottom.addEventListener('click', handleCloseBottom);
    mapBtnCloseBottom.addEventListener('touchend', handleCloseBottom);
  }

  if (mapBtnProceed) {
    let proceedLocked = false;
    const handleProceed = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      if (proceedLocked) return;
      proceedLocked = true;
      setTimeout(() => { proceedLocked = false; }, 600);

      game.closeUnderworldMap();
      routeRoomTransition();
    };
    mapBtnProceed.addEventListener('click', handleProceed);
    mapBtnProceed.addEventListener('touchend', handleProceed);
  }

  // =========================================================================
  // SISTEMA DE TIRINHA CÔMICA INTERSTICIAL (ENTRE FASES - 2 SLIDES)
  // =========================================================================
  const btnInterstitialContinue = document.getElementById('btn-interstitial-continue');
  if (btnInterstitialContinue) {
    let continueLocked = false;
    const handleContinue = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      if (continueLocked) return;
      continueLocked = true;
      setTimeout(() => { continueLocked = false; }, 400);

      game.advanceInterstitialSlide();
    };
    btnInterstitialContinue.addEventListener('click', handleContinue);
    btnInterstitialContinue.addEventListener('touchend', handleContinue);
  }

  const interstitialDots = document.querySelectorAll('#interstitial-dots .comic-dot');
  interstitialDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      game.interstitialSlideIndex = idx;
      game.renderInterstitialSlide();
    });
  });

  // Fechamento de tooltip de status ao clicar fora
  document.addEventListener('click', (e) => {
    const tooltip = document.getElementById('status-tooltip');
    if (tooltip && !e.target.closest('#enemy-status-container')) {
      tooltip.classList.add('hidden');
    }
  });

  // Toque ou clique no overlay de transição para pular imediatamente caso desejado
  const phaseOverlay = document.getElementById('phase-transition-overlay');
  if (phaseOverlay) {
    phaseOverlay.addEventListener('click', () => {
      phaseOverlay.classList.add('hidden');
    });
  }
});
