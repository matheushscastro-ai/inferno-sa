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
  },
  alavancagem_divina: {
    id: 'alavancagem_divina',
    name: 'Dividendos de Zeus',
    type: 'blessing',
    element: 'lightning',
    vfxType: 'lightning',
    cost: 1,
    icon: '⚡🪙',
    image: 'assets/cards/card_bencao_raio.png?v=29',
    desc: 'Causa 8 de dano, aplica 2 Choques e rende +15 Dracmas!',
    damage: 8,
    shield: 0,
    gainGold: 15,
    applyStatus: { type: 'shock', stacks: 2, icon: '⚡', name: 'Choque' },
    flavor: 'Liquidez imediata com garantia olímpica.'
  },
  blindagem_olimpica: {
    id: 'blindagem_olimpica',
    name: 'Hedge de Hefesto',
    type: 'blessing',
    element: 'fire',
    vfxType: 'fire',
    cost: 1,
    icon: '🛡️🔥',
    image: 'assets/cards/card_chamas_hefesto.png',
    desc: 'Gera 11 de Escudo e aplica 3 de Queimadura no inimigo.',
    damage: 0,
    shield: 11,
    applyStatus: { type: 'burn', stacks: 3, icon: '🔥', name: 'Queimadura' },
    flavor: 'Proteção patrimonial forjada no fogo.'
  },

  // CARTA DE BUROCRACIA / POLUIÇÃO DE DECK (INSERIDA PELOS CHEFES)
  protocolo_pendente: {
    id: 'protocolo_pendente',
    name: 'Formulário 9.999',
    type: 'curse',
    cost: 1,
    icon: '📑',
    image: 'assets/cards/card_liminar_arcana.png',
    desc: 'BUROCRACIA! Causa 4 de dano no fim do turno se continuar na mão. Jogue para incinerar.',
    damage: 0,
    shield: 0,
    exhaust: true,
    flavor: 'Faltou carimbo na terceira via autenticada.'
  }
};

// RECEITAS DE FUSÃO DA MATRIZ YU-GI-OH COM ARTES DEDICADAS E SÍNTESE UNIVERSAL
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
    desc: 'Causa 15 de dano e eletrifica com 3 Choques.',
    damage: 15,
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
    desc: 'Causa 16 de dano crítico e 5 Sangramento!',
    damage: 16,
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
    desc: 'Gera 14 de armadura, causa 8 de dano e 2 Choques.',
    damage: 8,
    shield: 14,
    applyStatus: { type: 'shock', stacks: 2, icon: '⚡', name: 'Choque' },
    catchphrase: 'Flawless!'
  },
  'corte_custos+bencao_velocidade': {
    id: 'layoff_relampago',
    name: 'Estocada Alada',
    type: 'fused',
    cost: 0,
    icon: '🪽🗡️',
    image: 'assets/cards/card_bencao_velocidade.png',
    desc: 'Custo 0! Causa 10 de dano, compra 2 cartas e +1 Ação!',
    damage: 10,
    shield: 0,
    drawCards: 2,
    bonusEnergy: 1,
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
    desc: 'Causa 14 de dano + dobro do dano sofrido + 5 de Sangramento!',
    damage: 14,
    isRetaliation: true,
    shield: 0,
    applyStatus: { type: 'bleed', stacks: 5, icon: '🩸', name: 'Sangramento' },
    catchphrase: 'Flawless!'
  }
};

// SINTETIZADOR UNIVERSAL DE FUSÃO (Permite fundir qualquer Ação + Bênção ou 2 Bênçãos!)
export function resolveCardDefinition(cardKey) {
  if (!cardKey) return null;
  if (CARD_DATABASE[cardKey]) return CARD_DATABASE[cardKey];
  if (FUSION_RECIPES[cardKey]) return FUSION_RECIPES[cardKey];

  if (cardKey.includes('+')) {
    const [k1, k2] = cardKey.split('+');
    const revKey = `${k2}+${k1}`;
    if (FUSION_RECIPES[revKey]) return FUSION_RECIPES[revKey];

    const c1 = CARD_DATABASE[k1];
    const c2 = CARD_DATABASE[k2];
    if (c1 && c2 && c1.type !== 'curse' && c2.type !== 'curse' && (c1.type === 'blessing' || c2.type === 'blessing')) {
      const blessing = c1.type === 'blessing' ? c1 : c2;
      const other = c1.type === 'blessing' ? c2 : c1;
      const dmg = (c1.damage || 0) + (c2.damage || 0) + 4;
      const shd = (c1.shield || 0) + (c2.shield || 0) + (c1.shield || c2.shield ? 3 : 0);
      const draw = (c1.drawCards || 0) + (c2.drawCards || 0);
      const energy = (c1.bonusEnergy || 0) + (c2.bonusEnergy || 0);
      const status = blessing.applyStatus ? {
        ...blessing.applyStatus,
        stacks: blessing.applyStatus.stacks ? blessing.applyStatus.stacks + 2 : undefined,
        duration: blessing.applyStatus.duration ? blessing.applyStatus.duration + 1 : undefined
      } : other.applyStatus;

      const parts = [];
      if (dmg > 0) parts.push(`${dmg} Dano`);
      if (shd > 0) parts.push(`+${shd} Escudo`);
      if (status) parts.push(`+${status.stacks || status.duration} ${status.name}`);
      if (draw > 0) parts.push(`Compra ${draw}`);

      const dynamicRecipe = {
        id: cardKey,
        name: `${other.name.split(' ')[0]} Divino`,
        type: 'fused',
        vfxType: blessing.vfxType || other.vfxType || 'lightning',
        cost: Math.min(1, Math.max(c1.cost, c2.cost)),
        icon: `${blessing.icon}${other.icon}`,
        image: blessing.image || other.image,
        desc: `Sinergia M&A: ${parts.join(', ')}.`,
        damage: dmg,
        shield: shd,
        drawCards: draw,
        bonusEnergy: energy,
        isRetaliation: c1.isRetaliation || c2.isRetaliation,
        applyStatus: status,
        catchphrase: 'Sinergia de Portfólio Impecável!'
      };
      FUSION_RECIPES[cardKey] = dynamicRecipe;
      return dynamicRecipe;
    }
  }
  return null;
}

// BANCO DE RELÍQUIAS / ATIVOS DO MERCADO FINANCEIRO (JOKERS / PASSIVAS ROGUELIKE)
export const RELIC_DATABASE = {
  algoritmo_hermes: {
    id: 'algoritmo_hermes',
    name: 'Algoritmo HFT',
    icon: '📈',
    desc: 'Tese Quant: No Turno 1 de cada câmara, ganha +1 Ação e compra +1 Carta.'
  },
  alavancagem_ares: {
    id: 'alavancagem_ares',
    name: 'Alavancagem Hostil',
    icon: '🦅',
    desc: 'Private Equity: +3 de Dano em inimigos com status e +4 Dano se Louis tiver ≤50% HP.'
  },
  blindagem_patrimonial: {
    id: 'blindagem_patrimonial',
    name: 'Holding Blindada',
    icon: '🏛️',
    desc: 'Hedge Fund: Retém 50% do Escudo entre turnos e cartas de Escudo geram +3 🛡️.'
  },
  patek_olimpico: {
    id: 'patek_olimpico',
    name: 'Patek Olímpico',
    icon: '⌚',
    cost: 75,
    desc: 'O primeiro ataque de cada turno causa +4 de Dano e concede +3 de Escudo.'
  },
  cartao_centurion: {
    id: 'cartao_centurion',
    name: 'Amex Obsidiana',
    icon: '💳',
    cost: 75,
    desc: 'Juros Compostos: Seus ataques causam +1 de Dano extra para cada 35 Dracmas que você possui.'
  },
  trituradora_vip: {
    id: 'trituradora_vip',
    name: 'Compliance VIP',
    icon: '📎',
    cost: 65,
    desc: 'Imune ao dano de Formulário 9.999. Despachar Formulários custa 0 e compra 1 carta!'
  },
  safra_1800: {
    id: 'safra_1800',
    name: 'Bordeaux 1800',
    icon: '🍷',
    cost: 65,
    desc: 'Ao vencer uma Câmara, recupera +10 HP automaticamente e inicia lutas com +8 🛡️.'
  },
  fusao_perpetua: {
    id: 'fusao_perpetua',
    name: 'Contrato M&A',
    icon: '💎',
    cost: 90,
    desc: 'Cartas Fundidas NÃO se desfazem ao ir para o descarte nesta luta e causam +4 Dano!'
  }
};

// ARQUÉTIPOS INICIAIS (TESES DE INVESTIMENTO)
export const ARCHETYPES = {
  quant: {
    id: 'quant',
    name: 'Fundo Quantitativo (HFT)',
    icon: '📈⚡',
    subtitle: 'Velocidade & Choques em Cadeia (Hermes / Zeus)',
    relic: 'algoritmo_hermes',
    deck: [
      'toque_aristocratico',
      'toque_aristocratico',
      'corte_custos',
      'corte_custos',
      'liminar_judicial',
      'liminar_judicial',
      'blefe_mercado',
      'bencao_raio'
    ]
  },
  private_equity: {
    id: 'private_equity',
    name: 'Private Equity Hostil',
    icon: '🦅🔥',
    subtitle: 'Dano Agressivo, Sangria & Queimadura (Ares / Hefesto)',
    relic: 'alavancagem_ares',
    deck: [
      'toque_aristocratico',
      'toque_aristocratico',
      'acao_indenizatoria',
      'discurso_impacto',
      'liminar_judicial',
      'liminar_judicial',
      'corte_custos',
      'bencao_fogo'
    ]
  },
  hedge_fund: {
    id: 'hedge_fund',
    name: 'Holding Blindada (Hedge)',
    icon: '🏛️🛡️',
    subtitle: 'Retenção de Escudo & Contragolpe (Atena / Ares)',
    relic: 'blindagem_patrimonial',
    deck: [
      'liminar_judicial',
      'liminar_judicial',
      'liminar_judicial',
      'blefe_mercado',
      'acao_indenizatoria',
      'toque_aristocratico',
      'discurso_impacto',
      'bencao_guerra'
    ]
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

// 3. INIMIGOS MITOLÓGICOS DO SUBMUNDO COM MECÂNICAS ÚNICAS (BOSS GIMMICKS)
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
    maxHp: 46,
    hp: 46,
    passiveId: 'corpo_mole',
    passiveText: '☕ Corpo Mole: Ganha +3 🛡️ ao sofrer ataque direto',
    callouts: {
      attack: ['HORA EXTRA NÃO! ☕', 'SEM ADICIONAL NOTURNO?! 📜', 'CAFÉ TÓXICO FERVENDO! 💥', 'TOMA PAPELADA! 📑'],
      hurt: ['MEUS FORMULÁRIOS! 😱', 'CARÊNCIA DO PLANO! 📄', 'CADÊ O SINDICATO?! 📢', 'BURNOUT TOTAL! 💀']
    },
    intents: [
      { type: 'attack', value: 9, icon: '🗡️', desc: '9 Dano (Café Tóxico)' },
      { type: 'curse_attack', value: 7, curses: 1, icon: '📑', desc: '7 Dano + 1 Formulário 9.999' },
      { type: 'shield', value: 10, icon: '🛡️', desc: '+10 Escudo do Desânimo' },
      { type: 'attack', value: 13, icon: '💥', desc: '13 Dano (Colapso de Burnout)' }
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
    maxHp: 64,
    hp: 64,
    initialShield: 8,
    passiveId: 'burocracia_histerica',
    passiveText: '📑 Senha 9.999: Embaralha Burocracia no seu Deck!',
    callouts: {
      attack: ['SENHA 9.999! 📢', 'SEM AGENDAMENTO! 🔥', 'FALTOU CARIMBO! 💢', 'PREENCHA A VIA AZUL! 📜'],
      hurt: ['MEU BALCÃO! 😱', 'PROCESSO EXTRAVIADO! 📄', 'DESACATO NO GUICHÊ! 💢', 'SISTEMA FORA DO AR! 💥']
    },
    intents: [
      { type: 'curse_attack', value: 11, curses: 1, icon: '📑', desc: '11 Dano + 1 Formulário 9.999' },
      { type: 'attack', value: 15, icon: '💥', desc: '15 Dano (Grito Estridente)' },
      { type: 'shield_curse', value: 12, curses: 1, icon: '🛡️📑', desc: '+12 🛡️ e +1 Formulário no Deck' }
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
    maxHp: 82,
    hp: 82,
    initialShield: 12,
    thorns: 3,
    passiveId: 'pele_granito',
    passiveText: '🗿 Pele de Granito: Reflete 3 de Dano em ataques diretos!',
    callouts: {
      attack: ['ACESSO NEGADO! 🗿', 'REVISTA OBRIGATÓRIA! 🛡️', 'PROTOCOLO ABSOLUTO! ❄️', 'FORA DA CATRACA! 💥'],
      hurt: ['RACHARAM MEU GRANITO! 💥', 'MÁRMORE TRINCADO! 😱', 'CÓDIGO VERMELHO! 🚨', 'CHAMEM O REFORÇO! 🛡️']
    },
    intents: [
      { type: 'attack', value: 14, icon: '🗡️', desc: '14 Dano (Empurrão Bruto)' },
      { type: 'shield', value: 16, icon: '🛡️', desc: '+16 Muralha do Cócito' },
      { type: 'attack', value: 19, icon: '💥', desc: '19 Dano Esmagador' }
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
    maxHp: 102,
    hp: 102,
    initialShield: 10,
    passiveId: 'juros_mora',
    passiveText: '⚖️ Juros de Mora: Ganha +2 de Força a cada turno!',
    callouts: {
      attack: ['RECURSO INDEFERIDO! ⚖️', 'DESACATO À CORTE! 🔨', 'LITIGÂNCIA DE MÁ-FÉ! 📜', 'SENTENÇA IMEDIATA! 💥'],
      hurt: ['OBJEÇÃO NEGADA! 💢', 'MINHA TOGA IMPERIAL! 😱', 'QUEBRA DE DECORO! ⚖️', 'ANULEM ESSA PROVA! 📜']
    },
    intents: [
      { type: 'curse_attack', value: 16, curses: 1, icon: '⚖️📑', desc: '16 Dano + Sentença (Formulário)' },
      { type: 'shield', value: 18, icon: '🛡️', desc: '+18 Jurisprudência Blindada' },
      { type: 'attack', value: 22, icon: '💥', desc: '22 Dano (O Malhete do Juízo)' }
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
    maxHp: 140,
    hp: 140,
    initialShield: 15,
    passiveId: 'monopolio_tartaro',
    passiveText: '🔱 Monopólio: +2 Força/turno e Fase 2 com 50% HP!',
    callouts: {
      attack: ['ESTORNO NEGADO! 🔱', 'DEMISSÃO SUMÁRIA! 🔥', 'EU SOU O CONSELHO! 👑', 'LIQUIDAÇÃO DE ALMA! 💥'],
      hurt: ['MEU BALANÇO ANUAL! 😱', 'QUEBRA DE CONTRATO?! 🔥', 'INSOLÊNCIA MORTAL! 💢', 'MEU FUNDO SOBERANO! 🔱']
    },
    intents: [
      { type: 'attack', value: 19, icon: '🔱', desc: '19 Dano (Bidente Sombrio)' },
      { type: 'curse_attack', value: 17, curses: 2, icon: '🔥📑', desc: '17 Dano + 2 Passivos (Formulários)' },
      { type: 'shield', value: 22, icon: '🛡️', desc: '+22 Blindagem Soberana' },
      { type: 'attack', value: 26, icon: '💥', desc: '26 Dano (Liquidação de Alma)' }
    ]
  }
];

// 4. ESTADO DO JOGO COM PROGRESSÃO DE DECK, RELÍQUIAS, ARQUÉTIPOS E SALAS
class GameState {
  constructor() {
    this.player = {
      name: 'Louis Beznoir IV',
      maxHp: 65,
      hp: 65,
      shield: 0,
      energy: 3,
      maxEnergy: 3,
      gold: 90,
      lastDamageTaken: 0
    };

    this.archetype = 'private_equity';
    this.relics = ['alavancagem_ares'];
    this.turnNumber = 1;
    this.attacksPlayedThisTurn = 0;

    this.enemyIndex = 0;
    this.enemy = this.createEnemy(0);

    // DECK INICIAL (8 cartas do Arquétipo escolhido)
    this.deck = [...ARCHETYPES.private_equity.deck];

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

  hasRelic(relicId) {
    return this.relics && this.relics.includes(relicId);
  }

  addRelic(relicId) {
    if (!this.hasRelic(relicId) && RELIC_DATABASE[relicId]) {
      this.relics.push(relicId);
      this.updateUI();
    }
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
      shield: data.initialShield || 0,
      thorns: data.thorns || 0,
      passiveId: data.passiveId || null,
      passiveText: data.passiveText || '',
      bonusDamage: 0,
      phase2Triggered: false,
      callouts: data.callouts || ENEMY_COMIC_CALLOUTS,
      intents: data.intents,
      intent: data.intents[0],
      statuses: {}
    };
  }

  init() {
    this.turnNumber = 1;
    this.attacksPlayedThisTurn = 0;
    this.player.shield = this.hasRelic('safra_1800') ? 8 : 0;
    this.drawPile = [...this.deck].sort(() => Math.random() - 0.5);
    this.discardPile = [];
    this.hand = [];
    this.startTurn();
    this.speak(this.getRandomQuote(LUIZ_QUOTES.start));
  }

  openArchetypeModal() {
    const modal = document.getElementById('archetype-modal');
    const container = document.getElementById('archetype-choices');
    if (!modal || !container) return;

    container.innerHTML = '';
    Object.values(ARCHETYPES).forEach(arch => {
      const relic = RELIC_DATABASE[arch.relic];
      const cardEl = document.createElement('div');
      cardEl.className = 'door-card';
      cardEl.innerHTML = `
        <div class="door-icon">${arch.icon}</div>
        <div class="door-info">
          <strong>${arch.name}</strong>
          <small style="color:#ffd700;display:block;margin-bottom:2px;">${arch.subtitle}</small>
          <small><strong>Ativo Inicial (${relic.name}):</strong> ${relic.desc}</small>
        </div>
      `;
      const pick = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        this.selectArchetype(arch.id);
      };
      cardEl.addEventListener('click', pick);
      cardEl.addEventListener('touchend', pick);
      container.appendChild(cardEl);
    });

    modal.classList.remove('hidden');
  }

  selectArchetype(archId) {
    const arch = ARCHETYPES[archId] || ARCHETYPES.private_equity;
    this.archetype = arch.id;
    this.relics = [arch.relic];
    this.deck = [...arch.deck];
    this.player.maxHp = arch.id === 'hedge_fund' ? 72 : arch.id === 'quant' ? 60 : 65;
    this.player.hp = this.player.maxHp;
    this.player.gold = arch.id === 'quant' ? 110 : 90;
    this.roomNumber = 1;
    this.enemyIndex = 0;
    this.isVictoryHandled = false;
    this.isVictoryInProgress = false;
    this.enemy = this.createEnemy(0);

    const modal = document.getElementById('archetype-modal');
    if (modal) modal.classList.add('hidden');

    sfx.boonAcquired();
    this.init();
    this.speak(`Tese "${arch.name}" aprovada pelo comitê! Vamos iniciar o takeover.`);
  }

  startTurn() {
    this.attacksPlayedThisTurn = 0;

    // 1. Expiração do Escudo do Jogador (Retém 50% apenas se tiver Holding Blindada)
    if (this.turnNumber > 1) {
      if (this.hasRelic('blindagem_patrimonial') && this.player.shield > 0) {
        this.player.shield = Math.floor(this.player.shield * 0.5);
      } else {
        this.player.shield = 0;
      }
    }

    // 2. Energia Base + Bônus de Turno 1 do Algoritmo HFT
    this.player.energy = this.player.maxEnergy;
    let cardsToDraw = 4;

    if (this.turnNumber === 1) {
      if (this.hasRelic('algoritmo_hermes')) {
        this.player.energy += 1;
        cardsToDraw += 1;
      }
      // Passiva da Recepcionista (Câmara II): Embaralha 1 Formulário 9.999 logo na abertura!
      if (this.enemy.passiveId === 'burocracia_histerica') {
        this.drawPile.push('protocolo_pendente');
        this.drawPile.sort(() => Math.random() - 0.5);
      }
    }

    // 3. Queimadura no Inimigo
    if (this.enemy.statuses.burn > 0) {
      const burnDmg = this.enemy.statuses.burn;
      this.damageEnemy(burnDmg, false, true);
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

    this.drawCards(cardsToDraw);
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

  pushCardToDiscard(cardKey) {
    // Se for uma carta fundida, ela se desfaz em suas 2 componentes no descarte (a menos que tenha Contrato M&A)
    if (cardKey && cardKey.includes('+') && !this.hasRelic('fusao_perpetua')) {
      const [k1, k2] = cardKey.split('+');
      if (CARD_DATABASE[k1]) this.discardPile.push(k1);
      if (CARD_DATABASE[k2]) this.discardPile.push(k2);
    } else {
      this.discardPile.push(cardKey);
    }
  }

  playCard(index) {
    const cardKey = this.hand[index];
    const card = resolveCardDefinition(cardKey);
    if (!card) return;

    // Relíquia Compliance VIP torna Formulário 9.999 custo 0!
    const effectiveCost = (card.type === 'curse' && this.hasRelic('trituradora_vip')) ? 0 : card.cost;

    if (this.player.energy < effectiveCost) {
      this.speak('Minha energia arcana está exaurida no momento!');
      return;
    }

    this.selectedCardIndex = null;
    this.player.energy -= effectiveCost;
    sfx.playCard();

    // Tratamento Especial: Despachar Carta de Burocracia (Formulário 9.999)
    if (card.type === 'curse') {
      const playerEl = document.getElementById('player-bust-frame');
      this.spawnFloatingText(playerEl, '📑 INCINERADO!', '#ffd700');
      this.hand.splice(index, 1);
      if (this.hasRelic('trituradora_vip')) {
        this.drawCards(1);
        this.speak('Meu jurídico despachou essa papelada e ainda tirou proveito!');
      } else {
        this.speak('Burocracia ridícula! Incinerem esse formulário imediatamente!');
      }
      this.updateUI();
      return;
    }

    // Dispara Animação Visual de Combate (VFX)
    this.triggerCardCombatVFX(card);

    let totalDmg = card.damage || 0;
    if (card.isRetaliation && this.player.lastDamageTaken > 0) {
      totalDmg += this.player.lastDamageTaken * 2;
    }

    // Sinergia de Relíquias Ofensivas
    if (totalDmg > 0) {
      this.attacksPlayedThisTurn++;

      // Alavancagem Hostil (Private Equity)
      if (this.hasRelic('alavancagem_ares')) {
        const hasStatus = Object.values(this.enemy.statuses).some(v => v > 0);
        if (hasStatus) totalDmg += 3;
        if (this.player.hp <= this.player.maxHp * 0.5) totalDmg += 4;
      }
      // Patek Olímpico (1º ataque do turno)
      if (this.hasRelic('patek_olimpico') && this.attacksPlayedThisTurn === 1) {
        totalDmg += 4;
        this.player.shield += 3;
      }
      // Amex Obsidiana (Juros Compostos por Dracmas)
      if (this.hasRelic('cartao_centurion')) {
        totalDmg += Math.floor(this.player.gold / 35);
      }
      // Contrato M&A (+4 Dano em cartas fundidas)
      if (card.type === 'fused' && this.hasRelic('fusao_perpetua')) {
        totalDmg += 4;
      }

      if (this.enemy.statuses.daze > 0) {
        totalDmg = Math.floor(totalDmg * 1.5);
      }

      if (this.enemy.statuses.shock > 0) {
        totalDmg += this.enemy.statuses.shock * 4;
        delete this.enemy.statuses.shock;
      }
    }

    // Ganho de Escudo ANTES do reflexo de espinhos para recompensar cartas híbridas
    if (card.shield > 0) {
      sfx.shield();
      const bonusShield = this.hasRelic('blindagem_patrimonial') ? 3 : 0;
      const finalShield = card.shield + bonusShield;
      this.player.shield += finalShield;
      const playerEl = document.getElementById('player-bust-frame');
      this.spawnFloatingText(playerEl, `+${finalShield} 🛡️`, '#70a1ff');
    }

    if (totalDmg > 0) {
      sfx.swordSlash();
      sfx.snobAttack();
      this.playPlayerAttack();
      this.damageEnemy(totalDmg, true, false);
    }

    if (card.gainGold) {
      this.player.gold += card.gainGold;
      const playerEl = document.getElementById('player-bust-frame');
      this.spawnFloatingText(playerEl, `+${card.gainGold} 🪙`, '#ffd700');
    }

    if (card.drawCards) {
      this.drawCards(card.drawCards);
    }

    if (card.conditionalDraw && (this.enemy.intent.type === 'attack' || this.enemy.intent.type === 'curse_attack')) {
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
    if (!card.exhaust) {
      this.pushCardToDiscard(cardKey);
    }

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

    // Não permite fundir cartas já fundidas ou formulários de burocracia
    if (!sourceKey || !targetKey || sourceKey.includes('+') || targetKey.includes('+')) {
      this.speak(this.getRandomQuote(LUIZ_QUOTES.fuseFail));
      return false;
    }

    const recipeKey1 = `${sourceKey}+${targetKey}`;
    const recipeKey2 = `${targetKey}+${sourceKey}`;
    const recipe = FUSION_RECIPES[recipeKey1] || FUSION_RECIPES[recipeKey2] || resolveCardDefinition(recipeKey1);

    if (!recipe) {
      this.speak(this.getRandomQuote(LUIZ_QUOTES.fuseFail));
      return false;
    }

    const allCardEls = Array.from(document.querySelectorAll('.game-card'));
    const sourceEl = allCardEls.find(el => parseInt(el.dataset.index) === indexSource);
    const targetEl = allCardEls.find(el => parseInt(el.dataset.index) === indexTarget);

    if (sourceEl) sourceEl.classList.add('fusion-colliding-source');
    if (targetEl) targetEl.classList.add('fusion-colliding-target');

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

  setPlayerSpriteState(state) {
    const idleEl = document.getElementById('player-sprite-idle');
    const attackEl = document.getElementById('player-sprite-attack');
    const hurtEl = document.getElementById('player-sprite-hurt');
    if (!idleEl || !attackEl || !hurtEl) return;

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

  damagePlayer(rawDmg, customLabel = null) {
    let unmitigatedDmg = rawDmg;
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
    this.player.lastDamageTaken += unmitigatedDmg;

    if (unmitigatedDmg > 0) {
      sfx.hurt();
      this.playPlayerHurt();
      if (playerEl) {
        this.spawnFloatingText(playerEl, customLabel ? `${customLabel} -${unmitigatedDmg}` : `-${unmitigatedDmg}`, '#ff4757');
      }
    }
    if (this.player.hp <= 0) {
      setTimeout(() => this.handleGameOver(), 350);
    }
  }

  damageEnemy(dmg, triggerAnim = true, isPassiveDot = false) {
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

    // Passivas de Reação dos Chefes (Apenas contra ataques diretos e se o chefe sobreviveu)
    if (!isPassiveDot && this.enemy.hp > 0) {
      // Câmara I (Estagiário): Ganha +3 Escudo de Corpo Mole após sofrer ataque
      if (this.enemy.passiveId === 'corpo_mole') {
        this.enemy.shield += 3;
        this.spawnFloatingText(enemyEl, '+3 🛡️ Corpo Mole', '#70a1ff');
      }
      // Câmara III (Gárgula): Pele de Granito reflete 3 de Dano em Louis!
      if (this.enemy.thorns > 0) {
        this.damagePlayer(this.enemy.thorns, '🗿 Espinhos');
      }
    }

    // Fase 2 de Hades (Liquidação Hostil aos 50% de HP!)
    if (this.enemy.passiveId === 'monopolio_tartaro' && !this.enemy.phase2Triggered && this.enemy.hp > 0 && this.enemy.hp <= this.enemy.maxHp * 0.5) {
      this.enemy.phase2Triggered = true;
      this.enemy.shield += 22;
      this.enemy.bonusDamage += 4;
      this.enemy.passiveText = '🔥 FASE 2: LIQUIDAÇÃO TOTAL (+6 Força!)';
      this.discardPile.push('protocolo_pendente');
      this.spawnFloatingText(enemyEl, '🔱 FASE 2: +22 🛡️!', '#ffd700');
      const calloutEl = document.getElementById('enemy-comic-callout');
      if (calloutEl) {
        calloutEl.textContent = 'LIQUIDAÇÃO HOSTIL ATIVADA! 🔱🔥';
        calloutEl.classList.remove('hidden');
      }
    }

    // GATILHO UNIVERSAL DE VITÓRIA
    if (this.enemy.hp <= 0 && !this.isVictoryHandled) {
      this.isVictoryHandled = true;
      setTimeout(() => {
        this.handleVictory();
      }, 400);
    }
  }

  endTurn() {
    this.player.lastDamageTaken = 0;

    // 1. Penalidade de Burocracia: Formulários 9.999 que ficaram na mão causam 4 de dano cada!
    const cursesInHand = this.hand.filter(k => k === 'protocolo_pendente').length;
    if (cursesInHand > 0 && !this.hasRelic('trituradora_vip')) {
      const curseDmg = cursesInHand * 4;
      this.damagePlayer(curseDmg, '📑 Multa');
      if (this.player.hp <= 0) return;
    }

    // 2. Decaimento parcial do escudo do inimigo no início do turno dele
    if (this.enemy.shield > 0) {
      this.enemy.shield = Math.floor(this.enemy.shield * 0.5);
    }

    const intentType = this.enemy.intent.type;
    const enemyEl = document.getElementById('enemy-sprite');

    if (intentType === 'attack' || intentType === 'curse_attack') {
      sfx.enemyCoffeeSplash();
      this.playEnemyAttack();
      let dmg = (this.enemy.intent.value || 0) + (this.enemy.bonusDamage || 0);

      if (this.enemy.statuses.chill > 0) dmg = Math.floor(dmg * 0.7);
      if (this.enemy.statuses.charm > 0) dmg = Math.floor(dmg * 0.5);

      if (this.enemy.statuses.bleed > 0) {
        const bleedDmg = this.enemy.statuses.bleed;
        this.damageEnemy(bleedDmg, true, true);
        this.enemy.statuses.bleed = Math.max(0, this.enemy.statuses.bleed - 1);
        if (this.enemy.statuses.bleed === 0) delete this.enemy.statuses.bleed;
        if (this.enemy.hp <= 0) return;
      }

      this.damagePlayer(dmg);
      if (this.player.lastDamageTaken > 0) {
        sfx.aristocratGasp();
        this.speak(this.getRandomQuote(LUIZ_QUOTES.hurt));
        if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
      }

      if (intentType === 'curse_attack' && this.enemy.intent.curses) {
        for (let c = 0; c < this.enemy.intent.curses; c++) {
          this.discardPile.push('protocolo_pendente');
        }
        const playerEl = document.getElementById('player-bust-frame');
        this.spawnFloatingText(playerEl, `+${this.enemy.intent.curses} 📑 Burocracia!`, '#ff6b81');
      }
    } else if (intentType === 'shield' || intentType === 'shield_curse') {
      this.enemy.shield += this.enemy.intent.value;
      this.spawnFloatingText(enemyEl, `+${this.enemy.intent.value} 🛡️`, '#70a1ff');
      if (intentType === 'shield_curse' && this.enemy.intent.curses) {
        for (let c = 0; c < this.enemy.intent.curses; c++) {
          this.drawPile.push('protocolo_pendente');
        }
        this.drawPile.sort(() => Math.random() - 0.5);
        const playerEl = document.getElementById('player-bust-frame');
        this.spawnFloatingText(playerEl, `+${this.enemy.intent.curses} 📑 no Deck!`, '#ff6b81');
      }
    }

    // 3. Escalada de Poder (Juros de Mora / Monopólio) de Minos e Hades no fim do turno
    if (this.enemy.passiveId === 'juros_mora' || this.enemy.passiveId === 'monopolio_tartaro') {
      this.enemy.bonusDamage = (this.enemy.bonusDamage || 0) + 2;
      this.spawnFloatingText(enemyEl, '+2 ⚔️ Juros!', '#ffd700');
    }

    // 4. Descarta a mão (desfazendo cartas fundidas de volta às originais, salvo Contrato M&A)
    this.hand.forEach(cardKey => this.pushCardToDiscard(cardKey));
    this.hand = [];

    if (this.player.hp <= 0) {
      this.handleGameOver();
      return;
    }

    if (this.enemy.hp <= 0) {
      this.handleVictory();
      return;
    }

    this.turnNumber++;
    this.startTurn();
  }

  rollEnemyIntent() {
    const list = this.enemy.intents || [
      { type: 'attack', value: 8, icon: '🗡️', desc: '8 Dano' },
      { type: 'shield', value: 10, icon: '🛡️', desc: '+10 Escudo' }
    ];
    const base = list[Math.floor(Math.random() * list.length)];
    const bonus = this.enemy.bonusDamage || 0;
    if ((base.type === 'attack' || base.type === 'curse_attack') && bonus > 0) {
      const boostedVal = base.value + bonus;
      this.enemy.intent = {
        ...base,
        desc: base.desc.replace(`${base.value}`, `${boostedVal}`)
      };
    } else {
      this.enemy.intent = { ...base };
    }
  }

  handleVictory() {
    if (this.isVictoryInProgress) return;
    this.isVictoryInProgress = true;
    this.isVictoryHandled = true;

    sfx.victory();
    this.speak(this.getRandomQuote(LUIZ_QUOTES.win));
    const rewardGold = 45 + (this.roomNumber * 10);
    this.player.gold += rewardGold;

    // Relíquia Bordeaux 1800: cura +10 HP ao vencer cada câmara
    if (this.hasRelic('safra_1800')) {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 10);
    }

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

  showGodBoonEncounter(isReroll = false) {
    if (!isReroll) sfx.godBoonOffer();
    const modal = document.getElementById('god-boon-modal');
    const godImg = document.getElementById('boon-god-img');
    const godTitle = document.getElementById('boon-god-title');
    const godName = document.getElementById('boon-god-name');
    const godQuote = document.getElementById('boon-god-quote');
    const cardsContainer = document.getElementById('boon-cards-container');
    const rerollBtn = document.getElementById('btn-reroll-boon');

    const isHermes = this.roomNumber % 2 !== 0;
    if (isHermes) {
      godTitle.textContent = 'BÊNÇÃO DE HERMES';
      godName.textContent = 'Hermes, o Mensageiro';
      godImg.src = 'assets/characters/god_hermes.png';
      godQuote.textContent = '"E aí, primo rico! O mercado no Tártaro está volátil hoje! Escolha um ativo divino para alavancar seu deck — ou pague 25 Dracmas se quiser que eu busque novas ofertas!"';
    } else {
      godTitle.textContent = 'BÊNÇÃO DE ZEUS';
      godName.textContent = 'Zeus, o Rei do Olimpo';
      godImg.src = 'assets/characters/god_zeus.png';
      godQuote.textContent = '"Jovem Louis! Sua tentativa de aquisição hostil contra meu irmão Hades diverte todo o Olimpo! Escolha uma centelha divina para fundir às suas ações!"';
    }

    const pool = [
      'bencao_velocidade',
      'bencao_raio',
      'bencao_guerra',
      'bencao_fogo',
      'alavancagem_divina',
      'blindagem_olimpica',
      'acao_indenizatoria',
      'discurso_impacto'
    ];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const boonChoices = shuffled.slice(0, 3);

    if (rerollBtn) {
      rerollBtn.disabled = this.player.gold < 25;
      rerollBtn.textContent = `🎲 Subornar Olimpo: Trocar Ofertas (-25 🪙 | Saldo: ${this.player.gold} 🪙)`;
      rerollBtn.onclick = () => {
        if (this.player.gold >= 25) {
          this.player.gold -= 25;
          sfx.cardDraw();
          this.updateUI();
          this.showGodBoonEncounter(true);
        }
      };
    }

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
        <div class="card-type-tag">${card.type === 'blessing' ? 'BÊNÇÃO' : 'AÇÃO'}</div>
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

    this.updateUI();
    this.speak(`Excelente aquisição de portfólio! Agora vamos decidir a alocação de recursos antes da próxima Câmara.`);

    setTimeout(() => {
      // Abre o Hub Estratégico de Risco vs. Recompensa & Mercado de Caronte!
      this.showRoomChoice();
    }, 420);
  }

  showRoomChoice() {
    const modal = document.getElementById('room-choice-modal');
    const doorsContainer = document.getElementById('doors-container');
    const statusBar = document.getElementById('room-choice-status-bar');

    if (statusBar) {
      statusBar.innerHTML = `❤️ <strong>${this.player.hp}/${this.player.maxHp} HP</strong> &nbsp;|&nbsp; 🪙 <strong>${this.player.gold} Dracmas</strong> &nbsp;|&nbsp; 📚 <strong>${this.deck.length} Cartas</strong>`;
    }

    // Seleciona uma Relíquia ainda não comprada para ofertar no Mercado de Caronte
    const shopRelics = ['patek_olimpico', 'cartao_centurion', 'trituradora_vip', 'safra_1800', 'fusao_perpetua']
      .filter(id => !this.hasRelic(id));
    const offeredRelicId = shopRelics.length > 0 ? shopRelics[this.roomNumber % shopRelics.length] : null;
    const offeredRelic = offeredRelicId ? RELIC_DATABASE[offeredRelicId] : null;
    const canAffordRelic = offeredRelic && this.player.gold >= offeredRelic.cost;
    const canAffordTrim = this.player.gold >= 50 && this.deck.length > 5;

    const relicHtml = offeredRelic ? `
      <div class="door-card ${canAffordRelic ? '' : 'disabled-door'}" onclick="window.game.nextRoom('buy_relic', '${offeredRelic.id}')">
        <div class="door-icon">${offeredRelic.icon}</div>
        <div class="door-info">
          <strong>Mercado de Caronte: ${offeredRelic.name} <span class="door-cost-tag">-${offeredRelic.cost} 🪙</span></strong>
          <small>${offeredRelic.desc}</small>
        </div>
      </div>
    ` : '';

    doorsContainer.innerHTML = `
      <div class="door-card" onclick="window.game.nextRoom('heal')">
        <div class="door-icon">🍷</div>
        <div class="door-info">
          <strong>Lounge VIP do Estige <span class="door-cost-tag">GRÁTIS</span></strong>
          <small>Descanso Executivo: Recupera <strong>+26 de HP</strong> antes da próxima Câmara.</small>
        </div>
      </div>
      ${relicHtml}
      <div class="door-card ${canAffordTrim ? '' : 'disabled-door'}" onclick="window.game.nextRoom('trim_deck')">
        <div class="door-icon">🔥</div>
        <div class="door-info">
          <strong>Reestruturação Lean (Enxugar Deck) <span class="door-cost-tag">-50 🪙</span></strong>
          <small>Remove 1 carta básica do deck (compras mais rápidas) e ganha <strong>+10 HP Máx</strong>!</small>
        </div>
      </div>
      <div class="door-card" onclick="window.game.nextRoom('dividend_rush')">
        <div class="door-icon">💰</div>
        <div class="door-info">
          <strong>Alavancagem Agressiva (Risco Alto) <span class="door-cost-tag">+65 🪙</span></strong>
          <small>Avança sem descansar, mas fatura <strong>+65 Dracmas</strong> imediatos em dividendos!</small>
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

  nextRoom(choice, param = null) {
    const choiceModal = document.getElementById('room-choice-modal');
    if (choiceModal) choiceModal.classList.add('hidden');

    if (choice === 'heal') {
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 26);
    } else if (choice === 'buy_relic' && param && RELIC_DATABASE[param]) {
      const relic = RELIC_DATABASE[param];
      if (this.player.gold >= relic.cost) {
        this.player.gold -= relic.cost;
        this.addRelic(param);
        sfx.boonAcquired();
      }
    } else if (choice === 'trim_deck') {
      if (this.player.gold >= 50) {
        this.player.gold -= 50;
        const basicPriority = ['corte_custos', 'toque_aristocratico', 'liminar_judicial'];
        for (const basicKey of basicPriority) {
          const idx = this.deck.indexOf(basicKey);
          if (idx !== -1 && this.deck.length > 5) {
            this.deck.splice(idx, 1);
            break;
          }
        }
        this.player.maxHp += 10;
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + 10);
        sfx.boonAcquired();
      }
    } else if (choice === 'dividend_rush') {
      this.player.gold += 65;
      sfx.cardDraw();
    }

    this.roomNumber++;
    this.maxUnlockedRoom = Math.max(this.maxUnlockedRoom || 1, this.roomNumber);
    this.enemyIndex++;
    this.isVictoryHandled = false;
    this.isVictoryInProgress = false;

    this.enemy = this.createEnemy(this.enemyIndex);
    this.updateUI();
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

    // Reseta contadores de combate da nova câmara
    this.turnNumber = 1;
    this.attacksPlayedThisTurn = 0;
    this.player.shield = this.hasRelic('safra_1800') ? 8 : 0;

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
      if (btnText) btnText.textContent = 'NOVA TESE / RECOMEÇAR';
      gameOverModal.classList.remove('hidden');
    }
  }

  restart() {
    document.getElementById('game-over-modal').classList.add('hidden');
    document.getElementById('room-choice-modal').classList.add('hidden');
    this.closeUnderworldMap();
    const interModal = document.getElementById('interstitial-comic-modal');
    if (interModal) interModal.classList.add('hidden');

    const roomNameEl = document.getElementById('room-name');
    if (roomNameEl) roomNameEl.textContent = DUNGEON_ENEMIES[0].bgTitle;
    const bgLayer = document.getElementById('arena-bg-layer');
    if (bgLayer) bgLayer.style.backgroundImage = `url("${DUNGEON_ENEMIES[0].background}")`;

    this.openArchetypeModal();
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

  renderRelicsBar() {
    const bar = document.getElementById('relics-bar');
    if (!bar) return;
    bar.innerHTML = `<span class="relics-label">ATIVOS:</span>`;
    (this.relics || []).forEach(relicId => {
      const r = RELIC_DATABASE[relicId];
      if (!r) return;
      const pill = document.createElement('span');
      pill.className = 'relic-pill';
      pill.title = `${r.name}: ${r.desc}`;
      pill.innerHTML = `${r.icon} <span>${r.name}</span>`;
      pill.addEventListener('click', () => {
        this.speak(`${r.name}: ${r.desc}`);
      });
      bar.appendChild(pill);
    });
  }

  updateUI() {
    document.getElementById('player-name').textContent = this.player.name;
    document.getElementById('player-hp-fill').style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
    document.getElementById('player-hp-text').textContent = `${this.player.hp} / ${this.player.maxHp}`;
    document.getElementById('energy-current').textContent = this.player.energy;
    document.getElementById('energy-max').textContent = this.player.maxEnergy;
    document.getElementById('player-gold').textContent = this.player.gold;

    this.renderRelicsBar();

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

    const passiveBadge = document.getElementById('enemy-passive-badge');
    if (passiveBadge) {
      if (this.enemy.passiveText) {
        passiveBadge.textContent = this.enemy.passiveText;
        passiveBadge.classList.toggle('phase2-enrage', !!this.enemy.phase2Triggered);
        passiveBadge.classList.remove('hidden');
      } else {
        passiveBadge.classList.add('hidden');
      }
    }

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
    const intentDescEl = document.getElementById('intent-desc');
    if (intentDescEl) intentDescEl.textContent = this.enemy.intent.desc;

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
      daze: { icon: 'assets/ui/status_confusao.svg', label: 'Confusão Mental', desc: 'Ataques do inimigo sofrem +50% de dano adicional.', class: 'status-daze' },
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
      const card = resolveCardDefinition(cardKey);
      if (!card) return;

      const isSelected = this.selectedCardIndex === index;
      const cardEl = document.createElement('div');
      cardEl.className = `game-card ${card.type === 'blessing' ? 'blessing-card' : ''} ${card.type === 'fused' ? 'fused-card' : ''} ${card.type === 'curse' ? 'curse-card' : ''} ${isSelected ? 'is-selected' : ''}`;
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

      const effectiveCost = (card.type === 'curse' && this.hasRelic('trituradora_vip')) ? 0 : card.cost;
      const tagLabel = card.type === 'blessing' ? 'Bênção' : card.type === 'fused' ? 'Fusão' : card.type === 'curse' ? 'Burocracia' : 'Ação';

      cardEl.innerHTML = `
        <div class="card-art-container">
          ${illustrationHtml}
        </div>
        <img class="card-frame-overlay" src="assets/ui/card_frame_action_cutout.png?v=3" alt="Frame" />
        <div class="card-cost">${effectiveCost}</div>
        <div class="card-header">${card.name}</div>
        <div class="card-desc">${card.desc}</div>
        <div class="card-type-tag">${tagLabel}</div>
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
  // TELA INICIAL (TITLE SCREEN) -> ABRE SELEÇÃO DE TESE DE INVESTIMENTO
  // =========================================================================
  const titleModal = document.getElementById('title-screen-modal');
  const btnStartGame = document.getElementById('btn-start-game');
  const btnTitlePrologue = document.getElementById('btn-title-prologue');

  if (btnStartGame && titleModal) {
    const startGameHandler = (e) => {
      if (e && e.type === 'touchend') e.preventDefault();
      titleModal.classList.add('hidden');
      sfx.swordSlash();
      game.openArchetypeModal();
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
