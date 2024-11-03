// Planets, By Orlando Prugel-Bennett
const planets = [
  {
    name: 'Mercury',
    distance: 0.39,
    period: 0.24,
    size: 3,
    texture: [
      [[169, 169, 169], [128, 128, 128], [169, 169, 169]],
      [[128, 128, 128], [169, 169, 169], [128, 128, 128]],
      [[169, 169, 169], [128, 128, 128], [169, 169, 169]],
    ],
    baseAngle: 75 * (Math.PI / 180),
  },
  {
    name: 'Venus',
    distance: 0.72,
    period: 0.62,
    size: 5,
    texture: [
      [[0, 0, 0], [240, 230, 140], [237, 201, 175], [240, 230, 140], [0, 0, 0]],
      [[240, 230, 140], [255, 228, 181], [255, 215, 0], [255, 228, 181], [240, 230, 140]],
      [[237, 201, 175], [255, 215, 0], [218, 165, 32], [255, 215, 0], [237, 201, 175]],
      [[240, 230, 140], [255, 228, 181], [255, 215, 0], [255, 228, 181], [240, 230, 140]],
      [[0, 0, 0], [240, 230, 140], [237, 201, 175], [240, 230, 140], [0, 0, 0]],
    ],
    baseAngle: 45 * (Math.PI / 180),
  },
  {
    name: 'Earth',
    distance: 1.0,
    period: 1.0,
    size: 5,
    texture: [
      [[0, 0, 0], [0, 128, 0], [255, 255, 255], [0, 0, 255], [0, 0, 0]],
      [[0, 128, 0], [0, 128, 0], [0, 0, 255], [0, 128, 0], [0, 128, 0]],
      [[0, 128, 0], [0, 0, 255], [0, 0, 255], [0, 128, 0], [0, 128, 0]],
      [[0, 0, 255], [0, 128, 0], [0, 0, 255], [0, 128, 0], [0, 0, 255]],
      [[0, 0, 0], [0, 128, 0], [255, 255, 255], [0, 0, 255], [0, 0, 0]],
    ],
    baseAngle: -40 * (Math.PI / 180),
  },
  {
    name: 'Mars',
    distance: 1.52,
    period: 1.88,
    size: 3,
    texture: [
      [[205, 92, 92], [178, 34, 34], [205, 92, 92]],
      [[178, 34, 34], [205, 92, 92], [178, 34, 34]],
      [[205, 92, 92], [178, 34, 34], [205, 92, 92]],
    ],
    baseAngle: -80 * (Math.PI / 180),
  },
  {
    name: 'Jupiter',
    distance: 5.2,
    period: 11.86,
    size: 7,
    texture: [
      [[0, 0, 0], [220, 137, 90], [220, 137, 90], [220, 137, 90], [220, 137, 90], [220, 137, 90], [0, 0, 0]],
      [[185, 138, 135], [185, 138, 135], [185, 138, 135], [185, 138, 135], [185, 138, 135], [185, 138, 135], [185, 138, 135]],
      [[210, 180, 140], [210, 180, 140], [210, 180, 140], [210, 180, 140], [210, 180, 140], [210, 180, 140], [210, 180, 140]],
      [[179, 61, 83], [179, 61, 83], [179, 61, 83], [179, 61, 83], [179, 61, 83], [179, 61, 83], [179, 61, 83]],
      [[233, 235, 208], [165, 46, 78], [165, 46, 78], [233, 235, 208], [233, 235, 208], [233, 235, 208], [233, 235, 208]],
      [[194, 122, 88], [194, 122, 88], [194, 122, 88], [194, 122, 88], [194, 122, 88], [194, 122, 88], [194, 122, 88]],
      [[0, 0, 0], [91, 42, 86], [91, 42, 86], [91, 42, 86], [91, 42, 86], [91, 42, 86], [0, 0, 0]]
    ],
    baseAngle: -72 * (Math.PI / 180),
  },
  {
    name: 'Saturn',
    distance: 9.58,
    period: 29.46,
    size: 9,
    texture: [
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [225, 162, 122], [239, 172, 130], [225, 162, 122], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [233, 168, 124], [239, 172, 130], [233, 168, 124], [239, 172, 130], [233, 168, 124], [211, 210, 177], [229, 226, 191]],
      [[123, 122, 103], [88, 87, 74], [229, 226, 191], [211, 210, 177], [229, 226, 191], [211, 210, 177], [229, 226, 191], [88, 87, 74], [123, 122, 103]],
      [[229, 226, 191], [211, 210, 177], [233, 168, 124], [233, 168, 124], [239, 172, 130], [225, 162, 122], [239, 172, 130], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [225, 162, 122], [225, 162, 122], [225, 162, 122], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    ],
    baseAngle: 12 * (Math.PI / 180),
  },
  {
    name: 'Uranus',
    distance: 19.2,
    period: 84.02,
    size: 5,
    texture: [
      [[0, 0, 0], [173, 216, 230], [176, 224, 230], [173, 216, 230], [0, 0, 0]],
      [[173, 216, 230], [224, 255, 255], [176, 196, 222], [224, 255, 255], [173, 216, 230]],
      [[176, 224, 230], [176, 196, 222], [135, 206, 235], [176, 196, 222], [176, 224, 230]],
      [[173, 216, 230], [224, 255, 255], [176, 196, 222], [224, 255, 255], [173, 216, 230]],
      [[0, 0, 0], [173, 216, 230], [176, 224, 230], [173, 216, 230], [0, 0, 0]],
    ],
    baseAngle: -54 * (Math.PI / 180),
  },
  {
    name: 'Neptune',
    distance: 30.1,
    period: 164.79,
    size: 5,
    texture: [
      [[0, 0, 0], [0, 0, 205], [65, 105, 225], [0, 0, 205], [0, 0, 0]],
      [[0, 0, 205], [65, 105, 225], [100, 149, 237], [65, 105, 225], [0, 0, 205]],
      [[65, 105, 225], [100, 149, 237], [70, 130, 180], [100, 149, 237], [65, 105, 225]],
      [[0, 0, 205], [65, 105, 225], [100, 149, 237], [65, 105, 225], [0, 0, 205]],
      [[0, 0, 0], [0, 0, 205], [65, 105, 225], [0, 0, 205], [0, 0, 0]],
    ],
    baseAngle: 0,
  },
];

return class SolarSystemEffect {
  constructor(display) {
    this.display = display;
    this.centerX = Math.floor(display.width / 2);
    this.centerY = Math.floor(display.height / 2);
    this.scaleFactor = Math.min(this.centerX, this.centerY) / (Math.log(planets[planets.length - 1].distance + 1) + 0.5);
    this.referenceDate = Date.now();
    this.millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    this.animationPhase = 0;
    this.totalFramesInitialAnimation = 200;
    this.totalFramesHoldToday = 600;
    this.animationFrame = 0;
    this.animationStartDate = this.referenceDate - 10 * this.millisecondsPerYear;
    this.forwardAnimationEndDate = new Date('2099-12-31').getTime();
    this.forwardAnimationRate = this.millisecondsPerYear / 2;
    this.loopStartDate = new Date('2000-01-01').getTime();
    this.sunSize = 9;
    this.sunTexture = [
      [[0, 0, 0], [0, 0, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0], [0, 0, 0]],
      [[255, 223, 0], [255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0], [255, 223, 0]],
      [[255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 120, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0]],
      [[255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 120, 0], [255, 100, 0], [255, 120, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0]],
      [[255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 120, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0]],
      [[255, 223, 0], [255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0], [255, 223, 0]],
      [[0, 0, 0], [255, 200, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [255, 200, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [255, 180, 0], [255, 160, 0], [255, 140, 0], [255, 160, 0], [255, 180, 0], [0, 0, 0], [0, 0, 0]],
    ];
    this.digits = {
      '0': [
        ' ### ',
        '#   #',
        '#  ##',
        '# # #',
        '##  #',
        '#   #',
        ' ### ',
      ],
      '1': [
        '  #  ',
        ' ##  ',
        '# #  ',
        '  #  ',
        '  #  ',
        '  #  ',
        '#####',
      ],
      '2': [
        ' ### ',
        '#   #',
        '    #',
        '   # ',
        '  #  ',
        ' #   ',
        '#####',
      ],
      '3': [
        ' ### ',
        '#   #',
        '    #',
        '  ## ',
        '    #',
        '#   #',
        ' ### ',
      ],
      '4': [
        '   # ',
        '  ## ',
        ' # # ',
        '#  # ',
        '#####',
        '   # ',
        '   # ',
      ],
      '5': [
        '#####',
        '#    ',
        '#### ',
        '    #',
        '    #',
        '#   #',
        ' ### ',
      ],
      '6': [
        ' ### ',
        '#   #',
        '#    ',
        '#### ',
        '#   #',
        '#   #',
        ' ### ',
      ],
      '7': [
        '#####',
        '    #',
        '   # ',
        '  #  ',
        '  #  ',
        '  #  ',
        '  #  ',
      ],
      '8': [
        ' ### ',
        '#   #',
        '#   #',
        ' ### ',
        '#   #',
        '#   #',
        ' ### ',
      ],
      '9': [
        ' ### ',
        '#   #',
        '#   #',
        ' ####',
        '    #',
        '#   #',
        ' ### ',
      ],
      '.': [
        '     ',
        '     ',
        '     ',
        '     ',
        '     ',
        '  ## ',
        '  ## ',
      ],
      'T': [
        '#####',
        '  #  ',
        '  #  ',
        '  #  ',
        '  #  ',
        '  #  ',
        '  #  ',
      ],
      'O': [
        ' ### ',
        '#   #',
        '#   #',
        '#   #',
        '#   #',
        '#   #',
        ' ### ',
      ],
      'D': [
        '#### ',
        '#   #',
        '#   #',
        '#   #',
        '#   #',
        '#   #',
        '#### ',
      ],
      'A': [
        ' ### ',
        '#   #',
        '#   #',
        '#####',
        '#   #',
        '#   #',
        '#   #',
      ],
      'Y': [
        '#   #',
        '#   #',
        ' # # ',
        '  #  ',
        '  #  ',
        '  #  ',
        '  #  ',
      ],
    };
    this.digitWidth = 5;
    this.digitHeight = 7;
    this.clear();
  }

  clear() {
    for (let x = 0; x < this.display.width; x++) {
      for (let y = 0; y < this.display.height; y++) {
        this.display.setPixel(x, y, [0, 0, 0]);
      }
    }
    this.display.flush();
  }

  drawPlanetTexture(x, y, texture) {
    const height = texture.length;
    const width = texture[0].length;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const color = texture[i][j];
        const px = x + j - Math.floor(width / 2);
        const py = y + i - Math.floor(height / 2);
        if (color.some(c => c !== 0) && px >= 0 && px < this.display.width && py >= 0 && py < this.display.height) {
          this.display.setPixel(px, py, color);
        }
      }
    }
  }

  getAngle(planet, now) {
    const yearsSinceRef = (now - this.referenceDate) / this.millisecondsPerYear;
    return planet.baseAngle + ((2 * Math.PI * (yearsSinceRef % planet.period)) / planet.period);
  }

  drawText(text) {
    const xStart = 1;
    const yStart = this.display.height - this.digitHeight - 1;
    let xOffset = xStart;

    for (const char of text) {
      if (this.digits[char]) {
        const bitmap = this.digits[char];
        for (let y = 0; y < this.digitHeight; y++) {
          const row = bitmap[y];
          for (let x = 0; x < this.digitWidth; x++) {
            if (row[x] === '#') {
              const px = xOffset + x;
              const py = yStart + y;
              if (px >= 0 && px < this.display.width && py >= 0 && py < this.display.height) {
                this.display.setPixel(px, py, [255, 255, 255]);
              }
            }
          }
        }
        xOffset += this.digitWidth + 1;
      } else if (char === ' ') {
        xOffset += this.digitWidth + 1;
      }
    }
  }

  update() {
    this.clear();
    let now;

    if (this.animationPhase === 0) {
      now = this.animationStartDate + (this.animationFrame / this.totalFramesInitialAnimation) * 10 * this.millisecondsPerYear;
      this.animationFrame++;
      if (this.animationFrame >= this.totalFramesInitialAnimation) {
        this.animationPhase = 1;
        this.animationFrame = 0;
      }
    } else if (this.animationPhase === 1) {
      now = this.referenceDate;
      this.animationFrame++;
      if (this.animationFrame >= this.totalFramesHoldToday) {
        this.animationPhase = 2;
        this.animationFrame = 0;
        this.forwardAnimationStartTime = Date.now();
        this.forwardAnimationStartDate = this.referenceDate;
      }
    } else if (this.animationPhase === 2) {
      const elapsedTime = Date.now() - this.forwardAnimationStartTime;
      now = this.forwardAnimationStartDate + elapsedTime * (this.forwardAnimationRate / 1000);
      if (now >= this.forwardAnimationEndDate) {
        now = this.forwardAnimationEndDate;
        this.animationPhase = 3;
        this.loopAnimationStartDate = this.loopStartDate;
        this.forwardAnimationStartTime = Date.now();
        this.pausedAtToday = false;
      }
    } else if (this.animationPhase === 3) {
      const elapsedTime = Date.now() - this.forwardAnimationStartTime;
      now = this.loopAnimationStartDate + elapsedTime * (this.forwardAnimationRate / 1000);
      if (now >= this.referenceDate && !this.pausedAtToday) {
        now = this.referenceDate;
        this.pausedAtToday = true;
        this.pauseStartTime = Date.now();
      }
      if (this.pausedAtToday) {
        const pauseElapsed = Date.now() - this.pauseStartTime;
        if (pauseElapsed >= 30000) {
          this.pausedAtToday = false;
          this.forwardAnimationStartTime = Date.now();
          this.loopAnimationStartDate = this.referenceDate;
        } else {
          now = this.referenceDate;
        }
      }
      if (now >= this.forwardAnimationEndDate) {
        now = this.loopStartDate + (now - this.forwardAnimationEndDate);
        this.forwardAnimationStartTime = Date.now();
      }
    }

    this.drawPlanetTexture(this.centerX, this.centerY, this.sunTexture);

    planets.forEach(planet => {
      const logDistance = Math.log(planet.distance + 1) * this.scaleFactor + this.sunSize / 2;
      const angle = this.getAngle(planet, now);
      const x = this.centerX + Math.round(logDistance * Math.cos(angle));
      const y = this.centerY + Math.round(logDistance * Math.sin(angle));
      this.drawPlanetTexture(x, y, planet.texture);
    });

    if (this.animationPhase === 1 || (this.animationPhase === 3 && this.pausedAtToday)) {
      this.drawText('TODAY');
    } else {
      const date = new Date(now);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear() % 100).padStart(2, '0');
      const dateString = `${day}.${month}.${year}`;
      this.drawText(dateString);
    }

    this.display.flush();
  }
}
