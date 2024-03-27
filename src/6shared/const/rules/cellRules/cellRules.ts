import type { Player } from 'src/5entities/SettingsPanel';

type CellRule = {
  rule1: string;

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
    rule1: 'GET READY Перед началом игры все игроки выпивают',
    img: new URL('/public/square-zero.jpg', import.meta.url).href,
  },
  1: {
    rule1: 'Все игроки пьют',
    img: new URL('/public/square1.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        cups: player.cups + 1,
        shotsHaveToDrink: 1,
      }));
    },
  },
  2: {
    rule1: 'Выбери того, кто будет пить',
    img: new URL('/public/square2.jpg', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  3: {
    rule1: 'Тебе повезло, выпей сам',
    img: new URL('/public/square3.jpg', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  4: {
    rule1: 'Игрок слева от тебя пьет',
    img: new URL('/public/square4.png', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  5: {
    rule1:
      'Укажи <em style="color: red"><strong>x2</strong></em>, кто будет пить',
    img: new URL('/public/square5.webp', import.meta.url).href,
    minSelected: 2,
    maxSelected: 2,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  6: {
    rule1: 'Все кроме тебя пьют',
    img: new URL('/public/square6.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === false) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  7: {
    rule1: 'Пьешь столько, сколько у тебя ушей',
    img: new URL('/public/square7.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 2,
            shotsHaveToDrink: 2,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  8: {
    rule1: 'Ничего не делаешь',
    img: new URL('/public/square8.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        shotsHaveToDrink: 0,
      }));
    },
  },
  9: {
    rule1:
      'Выпей и вернись на <em style="color: red"><strong>х7</strong></em> шагов',
    img: new URL('/public/square9.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
            position: player.position - 7,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  10: {
    rule1: 'Самый старший игрок пьет',
    img: new URL('/public/square10.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  11: {
    rule1: 'Все девушки пьют',
    img: new URL('/public/square11.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  12: {
    rule1: 'Все возвращаются на шаг назад и выпивают',
    img: new URL('/public/square12.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player) => ({
        ...player,
        cups: player.cups + 1,
        shotsHaveToDrink: 1,
        position: player.position - 1,
      }));
    },
  },
  13: {
    rule1: 'Пьют те, у кого нет девушки/парня',
    img: new URL('/public/square13.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  14: {
    rule1:
      'Выпей <em style="color: red"><strong>х3</strong></em> или возвращайся на клетку №8',
    optionOne: 'Выпить',
    optionTwo: 'Вернуться назад',
    img: new URL('/public/square14.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 3,
            shotsHaveToDrink: 3,
          };
        }
        if (selected === 2 && player.isActive === true) {
          return {
            ...player,
            position: player.position - 6,
            shotsHaveToDrink: 0,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  15: {
    rule1: 'Кинь кубик и выпей сколько выпадет',
    img: new URL('/public/square15.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.isActive === true && typeof selected === 'number') {
          return {
            ...player,
            cups: player.cups + selected,
            shotsHaveToDrink: selected,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  16: {
    rule1:
      'Укажи <em style="color: red"><strong>х3</strong></em>, кто будет пить',
    img: new URL('/public/square16.webp', import.meta.url).href,
    minSelected: 3,
    maxSelected: 3,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  17: {
    rule1: 'Пьют игроки, которые опережают тебя',
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
        shotsHaveToDrink: leadersId.includes(player.id) ? 1 : 0,
      }));
    },
  },
  18: {
    rule1: 'Все парни пьют',
    img: new URL('/public/square18.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  19: {
    rule1: 'Пьют игроки, у которых черные носки',
    img: new URL('/public/square19.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  20: {
    rule1:
      'Девушка, которую ты указал, пьет <em style="color: red"><strong>х3</strong></em>',
    img: new URL('/public/square20.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 3,
            shotsHaveToDrink: 3,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  21: {
    rule1: 'Назад на <em style="color: red"><strong>х9</strong></em> шагов',
    img: new URL('/public/square21.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            shotsHaveToDrink: 0,
            position: player.position - 9,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  22: {
    rule1: 'Все кидают кубик, у кого 6 - возвращаются НА СТАРТ',
    img: new URL('/public/square22.webp', import.meta.url).href,
    minSelected: 0,
    maxSelected: 16,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (Array.isArray(selected) && selected.includes(player.id)) {
          return {
            ...player,
            shotsHaveToDrink: 0,
            position: 0,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  23: {
    rule1: 'Игрок, который ближе всего к финишу, пьет',
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
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });

      return updatedPlayers;
    },
  },
  24: {
    rule1: 'Кинь монетку, орел - ты пьешь, решка - все остальные',
    img: new URL('/public/square24.webp', import.meta.url).href,
    optionOne: 'Орел',
    optionTwo: 'Решка',
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        if (selected === 2 && player.isActive === false) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  25: {
    rule1:
      'Выпей, кинь кубик и вернись на столько шагов назад, сколько выпадет',
    img: new URL('/public/square25.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.isActive === true && typeof selected === 'number') {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
            position: player.position - selected,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  26: {
    rule1:
      'Расскажи шутку или выпей <em style="color: red"><strong>х4</strong></em>',
    img: new URL('/public/square26.webp', import.meta.url).href,
    optionOne: 'Рассказать шутку',
    optionTwo: 'Выпить х4',
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (selected === 1 && player.isActive === true) {
          return {
            ...player,
            shotsHaveToDrink: 0,
          };
        }
        if (selected === 2 && player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 4,
            shotsHaveToDrink: 4,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  27: {
    rule1: 'Пьешь и пропускаешь ход',
    img: new URL('/public/square27.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
            skipRound: true,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  28: {
    rule1: 'Самый младший игрок пьет',
    img: new URL('/public/square28.webp', import.meta.url).href,
    cellFn: (players, selected) => {
      return players.map((player: Player) => {
        if (player.id === selected) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  29: {
    rule1:
      'Выпей <em style="color: red"><strong>х2</strong></em> и назад на <em style="color: red"><strong>х8</strong></em> шагов',
    img: new URL('/public/square29.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 2,
            shotsHaveToDrink: 2,
            position: player.position - 8,
          };
        }
        return { ...player, shotsHaveToDrink: 0 };
      });
    },
  },
  30: {
    rule1:
      'МОЛОДЦОМ! Все пьют с тобой и если ты все еще можешь это читать, то возвращайся НА СТАРТ',
    img: new URL('/public/square30.webp', import.meta.url).href,
    cellFn: (players) => {
      return players.map((player: Player) => {
        if (player.isActive === true) {
          return {
            ...player,
            cups: player.cups + 1,
            shotsHaveToDrink: 1,
            position: 0,
          };
        }
        return { ...player, cups: player.cups + 1, shotsHaveToDrink: 1 };
      });
    },
  },
  31: {
    rule1: '',
    img: new URL('/public/square31.webp', import.meta.url).href,
  },
};
