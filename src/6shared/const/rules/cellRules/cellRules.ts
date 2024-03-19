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
    img: '/src/6shared/assets/square-zero.jpg',
  },
  1: {
    rule: 'Все игроки пьют',
    img: '/src/6shared/assets/square1.webp',
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        cups: player.cups + 1,
      }));
    },
  },
  2: {
    rule: 'Выбери того, кто будет пить',
    img: '/src/6shared/assets/square2.jpg',
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
    img: '/src/6shared/assets/square3.jpg',
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
    img: '/src/6shared/assets/square4.png',
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
    img: '/src/6shared/assets/square5.webp',
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
    img: '/src/6shared/assets/square6.webp',
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
    img: '/src/6shared/assets/square7.webp',
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
    img: '/src/6shared/assets/square8.webp',
  },
  9: {
    rule: 'Выпей и вернись на х7 шагов',
    img: '/src/6shared/assets/square9.webp',
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
    img: '/src/6shared/assets/square10.webp',
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
    img: '/src/6shared/assets/square11.webp',
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
    img: '/src/6shared/assets/square12.webp',
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
    img: '/src/6shared/assets/square13.webp',
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
    img: '/src/6shared/assets/square14.webp',
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
    img: '/src/6shared/assets/square15.webp',
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
    img: '/src/6shared/assets/square16.webp',
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
    img: '/src/6shared/assets/square17.webp',
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
    img: '/src/6shared/assets/square18.webp',
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
    img: '/src/6shared/assets/square19.webp',
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
    img: '/src/6shared/assets/square20.webp',
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
    img: '/src/6shared/assets/square21.webp',
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
    img: '/src/6shared/assets/square22.webp',
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
    img: '/src/6shared/assets/square23.webp',
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
    img: '/src/6shared/assets/square24.webp',
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
    img: '/src/6shared/assets/square25.webp',
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
    img: '/src/6shared/assets/square26.webp',
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
    img: '/src/6shared/assets/square27.webp',
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
    img: '/src/6shared/assets/square28.webp',
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
    img: '/src/6shared/assets/square29.webp',
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
    img: '/src/6shared/assets/square30.webp',
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
    img: '/src/6shared/assets/square31.webp',
  },
};
