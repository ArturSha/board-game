type CellRule = {
  rule: string;
  img: string;
};

type CellRulesType = Record<number, CellRule>;

export const cellRules: CellRulesType = {
  0: {
    rule: 'GET READY Перед началом игры все игроки выпивают',
    img: '/src/6shared/assets/square-zero.jpg',
  },
  1: {
    rule: 'Все игроки пьют',
    img: '/src/6shared/assets/square1.webp',
  },
  2: {
    rule: 'Выбери того, кто будет пить',
    img: '/src/6shared/assets/square2.jpg',
  },
  3: {
    rule: 'Тебе повезло, выпей сам',
    img: '/src/6shared/assets/square3.jpg',
  },
  4: {
    rule: 'Игрок слева от тебя пьет',
    img: '/src/6shared/assets/square4.png',
  },
  5: {
    rule: 'Укажи х2, кто будет пить',
    img: '/src/6shared/assets/square5.webp',
  },
  6: {
    rule: 'Все кроме тебя пьют',
    img: '/src/6shared/assets/square6.webp',
  },
  7: {
    rule: 'Пьешь столько, сколько у тебя ушей',
    img: '/src/6shared/assets/square7.webp',
  },
  8: {
    rule: 'Ничего не делаешь',
    img: '/src/6shared/assets/square8.webp',
  },
  9: {
    rule: 'Выпей и вернись на х7 шагов',
    img: '/src/6shared/assets/square9.webp',
  },
  10: {
    rule: 'Самый старший игрок пьет',
    img: '/src/6shared/assets/square10.webp',
  },
  11: {
    rule: 'Все девушки пьют',
    img: '/src/6shared/assets/square11.webp',
  },
  12: {
    rule: 'Все возвращаются на шаг назад и выпивают',
    img: '/src/6shared/assets/square12.webp',
  },
  13: {
    rule: 'Пьют те, у кого нет девушки/парня',
    img: '/src/6shared/assets/square13.webp',
  },
  14: {
    rule: 'Выпей х3 или возвращайся на клетку №8',
    img: '/src/6shared/assets/square14.webp',
  },
  15: {
    rule: 'Кинь кубик и выпей сколько выпадет',
    img: '/src/6shared/assets/square15.webp',
  },
  16: {
    rule: 'Укажи х3, кто будет пить',
    img: '/src/6shared/assets/square16.webp',
  },
  17: {
    rule: 'Пьют игроки, которые опережают тебя',
    img: '/src/6shared/assets/square17.webp',
  },
  18: {
    rule: 'Все парни пьют',
    img: '/src/6shared/assets/square18.webp',
  },
  19: {
    rule: 'Пьют игроки, у которых черные носки',
    img: '/src/6shared/assets/square19.webp',
  },
  20: {
    rule: 'Девушка, которую ты указал, пьет х3',
    img: '/src/6shared/assets/square20.webp',
  },
  21: {
    rule: 'Назад на х9 шагов',
    img: '/src/6shared/assets/square21.webp',
  },
  22: {
    rule: 'Все кидают кубик, у кого 6 - возвращаются НА СТАРТ',
    img: '/src/6shared/assets/square22.webp',
  },
  23: {
    rule: 'Игрок, который ближе всего к финишу, пьет',
    img: '/src/6shared/assets/square23.webp',
  },
  24: {
    rule: 'Кинь монетку, орел - ты пьешь, решка - все остальные',
    img: '/src/6shared/assets/square24.webp',
  },
  25: {
    rule: 'Выпей, кинь кубик и вернись на столько шагов назад, сколько выпадет',
    img: '/src/6shared/assets/square25.webp',
  },
  26: {
    rule: 'Расскажи шутку или выпей х4  ',
    img: '/src/6shared/assets/square26.webp',
  },
  27: {
    rule: 'Пьешь и пропускаешь ход',
    img: '/src/6shared/assets/square27.webp',
  },
  28: {
    rule: 'Самый младший игрок пьет',
    img: '/src/6shared/assets/square28.webp',
  },
  29: {
    rule: 'Выпей х2 и назад на х8 шагов',
    img: '/src/6shared/assets/square29.webp',
  },
  30: {
    rule: 'МОЛОДЦОМ! Все пьют с тобой и если ты все еще можешь это читать, то возвращайся НА СТАРТ ',
    img: '/src/6shared/assets/square30.webp',
  },
  31: {
    rule: 'final',
    img: '/src/6shared/assets/square31.webp',
  },
};
