import type { Player } from './../../../../5entities/SettingsPanel/model/types/settings';
type CellRule = {
  rule: string;
  img: string;
  actionFn: (arg: Player[]) => Player[];
};

type CellRulesType = Record<number, CellRule>;

export const cellRules: CellRulesType = {
  0: {
    rule: 'GET READY Перед началом игры все игроки выпивают',
    img: '/src/6shared/assets/square-zero.jpg',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
      }));
    },
  },
  1: {
    rule: 'Все игроки пьют',
    img: '/src/6shared/assets/square1.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  2: {
    rule: 'Выбери того, кто будет пить',
    img: '/src/6shared/assets/square2.jpg',
    actionFn: (arg) => {
      const options = arg.map((player, index) => ({
        label: player.name,
        value: index,
      }));
      const selectedOption = window.prompt(
        'Выбери того, кто будет пить:',
        options[0].label
      );
      const id = Number(selectedOption);

      return arg.map((player, index) => {
        if (index === id) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return {
          ...player,
        };
      });
    },
  },
  3: {
    rule: 'Тебе повезло, выпей сам',
    img: '/src/6shared/assets/square3.jpg',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  4: {
    rule: 'Игрок слева от тебя пьет',
    img: '/src/6shared/assets/square4.png',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  5: {
    rule: 'Укажи х2, кто будет пить',
    img: '/src/6shared/assets/square5.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  6: {
    rule: 'Все кроме тебя пьют',
    img: '/src/6shared/assets/square6.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  7: {
    rule: 'Пьешь столько, сколько у тебя ушей',
    img: '/src/6shared/assets/square7.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  8: {
    rule: 'Ничего не делаешь',
    img: '/src/6shared/assets/square8.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  9: {
    rule: 'Выпей и вернись на х7 шагов',
    img: '/src/6shared/assets/square9.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  10: {
    rule: 'Самый старший игрок пьет',
    img: '/src/6shared/assets/square10.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  11: {
    rule: 'Все девушки пьют',
    img: '/src/6shared/assets/square11.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  12: {
    rule: 'Все возвращаются на шаг назад и выпивают',
    img: '/src/6shared/assets/square12.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  13: {
    rule: 'Пьют те, у кого нет девушки/парня',
    img: '/src/6shared/assets/square13.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  14: {
    rule: 'Выпей х3 или возвращайся на клетку №8',
    img: '/src/6shared/assets/square14.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  15: {
    rule: 'Кинь кубик и выпей сколько выпадет',
    img: '/src/6shared/assets/square15.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  16: {
    rule: 'Укажи х3, кто будет пить',
    img: '/src/6shared/assets/square16.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  17: {
    rule: 'Пьют игроки, которые опережают тебя',
    img: '/src/6shared/assets/square17.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  18: {
    rule: 'Все парни пьют',
    img: '/src/6shared/assets/square18.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  19: {
    rule: 'Пьют игроки, у которых черные носки',
    img: '/src/6shared/assets/square19.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  20: {
    rule: 'Девушка, которую ты указал, пьет х3',
    img: '/src/6shared/assets/square20.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  21: {
    rule: 'Назад на х9 шагов',
    img: '/src/6shared/assets/square21.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  22: {
    rule: 'Все кидают кубик, у кого 6 - возвращаются НА СТАРТ',
    img: '/src/6shared/assets/square22.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  23: {
    rule: 'Игрок, который ближе всего к финишу, пьет',
    img: '/src/6shared/assets/square23.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  24: {
    rule: 'Кинь монетку, орел - ты пьешь, решка - все остальные',
    img: '/src/6shared/assets/square24.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  25: {
    rule: 'Выпей, кинь кубик и вернись на столько шагов назад, сколько выпадет',
    img: '/src/6shared/assets/square25.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  26: {
    rule: 'Расскажи шутку или выпей х4  ',
    img: '/src/6shared/assets/square26.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  27: {
    rule: 'Пьешь и пропускаешь ход',
    img: '/src/6shared/assets/square27.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  28: {
    rule: 'Самый младший игрок пьет',
    img: '/src/6shared/assets/square28.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  29: {
    rule: 'Выпей х2 и назад на х8 шагов',
    img: '/src/6shared/assets/square29.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  30: {
    rule: 'МОЛОДЦОМ! Все пьют с тобой и если ты все еще можешь это читать, то возвращайся НА СТАРТ ',
    img: '/src/6shared/assets/square30.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  31: {
    rule: 'final',
    img: '/src/6shared/assets/square31.webp',
    actionFn: (arg) => {
      return arg.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
};
