import type { Player } from 'src/5entities/SettingsPanel';

type CellRule = {
  rule: string;
  img: string;
  minSelected?: number;
  maxSelected?: number;
  optionOne?: string;
  optionTwo?: string;
  cellFn?: (
    players: Array<Player>,
    selected?: number[] | number
  ) => Array<Player>;
};

type CellRulesType = Record<number, CellRule>;

export const cellRules: CellRulesType = {
  0: {
    rule: 'GET READY Перед началом игры все игроки выпивают',
    img: new URL('/public/square-zero.jpg', import.meta.url).href,
  },
  1: {
    rule: 'Все игроки пьют',
    img: new URL('/public/square1.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  2: {
    rule: 'Выбери того, кто будет пить',
    img: new URL('/public/square2.jpg', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  3: {
    rule: 'Тебе повезло, выпей сам',
    img: new URL('/public/square3.jpg', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  4: {
    rule: 'Игрок слева от тебя пьет',
    img: new URL('/public/square4.png', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  5: {
    rule: 'Укажи х2, кто будет пить',
    img: new URL('/public/square5.webp', import.meta.url).href,
    minSelected: 2,
    maxSelected: 2,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  6: {
    rule: 'Все кроме тебя пьют',
    img: new URL('/public/square6.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === false) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  7: {
    rule: 'Пьешь столько, сколько у тебя ушей',
    img: new URL('/public/square7.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 2,
          };
        }
        return { ...player };
      });
    },
  },
  8: {
    rule: 'Ничего не делаешь',
    img: new URL('/public/square8.webp', import.meta.url).href,
  },
  9: {
    rule: 'Выпей и вернись на х7 шагов',
    img: new URL('/public/square9.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            position: player.position - 7,
          };
        }
        return { ...player };
      });
    },
  },
  10: {
    rule: 'Самый старший игрок пьет',
    img: new URL('/public/square10.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  11: {
    rule: 'Все девушки пьют',
    img: new URL('/public/square11.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  12: {
    rule: 'Все возвращаются на шаг назад и выпивают',
    img: new URL('/public/square12.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        cups: player.cups + 1,
        position: player.position - 1,
      }));
    },
  },
  13: {
    rule: 'Пьют те, у кого нет девушки/парня',
    img: new URL('/public/square13.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  14: {
    rule: 'Выпей х3 или возвращайся на клетку №8',
    optionOne: 'Выпить',
    optionTwo: 'Вернуться назад',
    img: new URL('/public/square14.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 3,
          };
        }
        if (selected === 2 && player.isActive === true) {
          return {
            ...player,
            position: player.position - 6,
          };
        }
        return { ...player };
      });
    },
  },
  15: {
    rule: 'Кинь кубик и выпей сколько выпадет',
    img: new URL('/public/square15.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.isActive === true && typeof selected === 'number') {
          return {
            ...player,
            cups: player.cups + selected,
          };
        }
        return { ...player };
      });
    },
  },
  16: {
    rule: 'Укажи х3, кто будет пить',
    img: new URL('/public/square16.webp', import.meta.url).href,
    minSelected: 3,
    maxSelected: 3,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  17: {
    rule: 'Пьют игроки, которые опережают тебя',
    img: new URL('/public/square17.webp', import.meta.url).href,
    cellFn: (players) => {
      const leadersId: number[] = [];
      for (let i = 0; i < players.length; i++) {
        if (players[i].position > 17) {
          leadersId.push(players[i].id);
        }
      }
      return players.map((player) => ({
        ...player,
        cups: leadersId.includes(player.id) ? player.cups + 1 : player.cups,
      }));
    },
  },
  18: {
    rule: 'Все парни пьют',
    img: new URL('/public/square18.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  19: {
    rule: 'Пьют игроки, у которых черные носки',
    img: new URL('/public/square19.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  20: {
    rule: 'Девушка, которую ты указал, пьет х3',
    img: new URL('/public/square20.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 3,
          };
        }
        return { ...player };
      });
    },
  },
  21: {
    rule: 'Назад на х9 шагов',
    img: new URL('/public/square21.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            position: player.position - 9,
          };
        }
        return { ...player };
      });
    },
  },
  22: {
    rule: 'Все кидают кубик, у кого 6 - возвращаются НА СТАРТ',
    img: new URL('/public/square22.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            position: 0,
          };
        }
        return { ...player };
      });
    },
  },
  23: {
    rule: 'Игрок, который ближе всего к финишу, пьет',
    img: new URL('/public/square23.webp', import.meta.url).href,
    cellFn: (players) => {
      const highestPosition = Math.max(
        ...players.map((player) => player.position)
      );

      const closestToFinish = players.filter(
        (player) => player.position === highestPosition
      );

      const updatedPlayers = players.map((player) => {
        if (closestToFinish.some((closest) => closest.id === player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return player;
      });

      return updatedPlayers;
    },
  },
  24: {
    rule: 'Кинь монетку, орел - ты пьешь, решка - все остальные',
    img: new URL('/public/square24.webp', import.meta.url).href,
    optionOne: 'Орел',
    optionTwo: 'Решка',
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        if (selected === 2 && player.isActive === false) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  25: {
    rule: 'Выпей, кинь кубик и вернись на столько шагов назад, сколько выпадет',
    img: new URL('/public/square25.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.isActive === true && typeof selected === 'number') {
          return {
            ...player,
            cups: player.cups + 1,
            position: player.position - selected,
          };
        }
        return { ...player };
      });
    },
  },
  26: {
    rule: 'Расскажи шутку или выпей х4  ',
    img: new URL('/public/square26.webp', import.meta.url).href,
    optionOne: 'Рассказать шутку',
    optionTwo: 'Выпить х4',
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
          };
        }
        if (selected === 2 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 4,
          };
        }
        return { ...player };
      });
    },
  },
  27: {
    rule: 'Пьешь и пропускаешь ход',
    img: new URL('/public/square27.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            skipRound: true,
          };
        }
        return { ...player };
      });
    },
  },
  28: {
    rule: 'Самый младший игрок пьет',
    img: new URL('/public/square28.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
          };
        }
        return { ...player };
      });
    },
  },
  29: {
    rule: 'Выпей х2 и назад на х8 шагов',
    img: new URL('/public/square29.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 2,
            position: player.position - 8,
          };
        }
        return { ...player };
      });
    },
  },
  30: {
    rule: 'МОЛОДЦОМ! Все пьют с тобой и если ты все еще можешь это читать, то возвращайся НА СТАРТ',
    img: new URL('/public/square30.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            position: 0,
          };
        }
        return { ...player, cups: player.cups + 1 };
      });
    },
  },
  31: {
    rule: 'final',
    img: new URL('/public/square31.webp', import.meta.url).href,
  },
};
