// ============================================================================
// SISTEMA DE ÁUDIO PROCEDURAL (Web Audio API - Sem dependências externas)
// ============================================================================

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Som de arrastar/jogar carta (Swish rápido)
  playCard() {
    this.init();
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  // Som de comprar carta / virar página (Folha rápida)
  cardDraw() {
    this.playCard();
  }

  // Som de ataque de espada / estocada (Slash metálico)
  swordSlash() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    // Ruído branco filtrado para o corte de ar
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.15);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start();
    whiteNoise.stop(this.ctx.currentTime + 0.15);
  }

  // Som de armadura / escudo (Thud de proteção)
  shield() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  // Som de Fusão Mágica Épica (Acorde cintilante)
  fusion() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C maior brilhante
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.05 + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.05);
      osc.stop(this.ctx.currentTime + idx * 0.05 + 0.5);
    });
  }

  // Som de Fanfarra de Vitória da Sala
  victory() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const notes = [
      { f: 392.00, d: 0.15 }, // G
      { f: 523.25, d: 0.15 }, // C
      { f: 659.25, d: 0.25 }  // E
    ];

    let t = this.ctx.currentTime;
    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, t);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + n.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + n.d);
      t += n.d;
    });
  }

  // Som de dano sofrido padrão
  hurt() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  // Som cômico de ataque ostentador (Estalo de dedos estalado + tilintar de ouro)
  snobAttack() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    // Estalo de dedos (impulso percussivo agudo)
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(950, this.ctx.currentTime);
    snapOsc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.05);

    snapGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    snapGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    snapOsc.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snapOsc.start();
    snapOsc.stop(this.ctx.currentTime + 0.05);

    // Chuva cintilante de dracmas de ouro (Arpeggio rápido estéreo)
    const goldNotes = [1046.50, 1318.51, 1567.98, 2093.00, 2637.02];
    goldNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + 0.02 + idx * 0.035);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + 0.02 + idx * 0.035);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02 + idx * 0.035 + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + 0.02 + idx * 0.035);
      osc.stop(this.ctx.currentTime + 0.02 + idx * 0.035 + 0.22);
    });
  }

  // Som cômico de choque/escândalo do herdeiro (Gasp histérico + taça virando)
  aristocratGasp() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    // Slide cartoon descendente de susto
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(540, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.26);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.26);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.26);

    // Taça de ouro caindo/vibrando
    const glassOsc = this.ctx.createOscillator();
    const glassGain = this.ctx.createGain();
    glassOsc.type = 'sine';
    glassOsc.frequency.setValueAtTime(2200, this.ctx.currentTime + 0.06);
    glassOsc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.32);

    glassGain.gain.setValueAtTime(0.2, this.ctx.currentTime + 0.06);
    glassGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.32);

    glassOsc.connect(glassGain);
    glassGain.connect(this.ctx.destination);
    glassOsc.start(this.ctx.currentTime + 0.06);
    glassOsc.stop(this.ctx.currentTime + 0.32);
  }

  // Som cômico de ataque do Estagiário (Splash de café tóxico + chiado ácido)
  enemyCoffeeSplash() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    // Splash borbulhante
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);

    // Chiado ácido
    const bufSize = this.ctx.sampleRate * 0.18;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2500, this.ctx.currentTime);
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    nGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
    noise.connect(filter);
    filter.connect(nGain);
    nGain.connect(this.ctx.destination);
    noise.start();
    noise.stop(this.ctx.currentTime + 0.18);
  }

  // Som cômico de dano do Estagiário (Papéis e prancheta voando + baque)
  enemyPaperDrop() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    // Woosh de folhas de papel voando
    const bufSize = this.ctx.sampleRate * 0.2;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.2);
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    nGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
    noise.connect(filter);
    filter.connect(nGain);
    nGain.connect(this.ctx.destination);
    noise.start();
    noise.stop(this.ctx.currentTime + 0.2);
  }

  // Som Celestial de Encontro com Deus Olímpico (Harpa / Acorde Místico)
  godBoonOffer() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const freqs = [440, 554.37, 659.25, 880, 1108.73]; // A Maior Arpeggiado
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.7);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.7);
    });
  }

  // Som de Bênção Divina Escolhida (Sino de Ouro e Eco Celestial)
  boonAcquired() {
    this.init();
    if (!this.enabled || !this.ctx) return;

    const bellFreqs = [523.25, 783.99, 1046.50, 1567.98];
    bellFreqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + idx * 0.04);

      gain.gain.setValueAtTime(0.22, this.ctx.currentTime + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.04 + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.04);
      osc.stop(this.ctx.currentTime + idx * 0.04 + 0.9);
    });
  }
}

export const sfx = new SoundFX();
