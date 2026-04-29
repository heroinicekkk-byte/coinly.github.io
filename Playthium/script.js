const translations = {
  cs: {
    header: {
      balance: "Peněženka: {balance} Kč",
      login: "Přihlásit se"
    },
    nav: {
      home: "Domů",
      snake: "Had",
      casino: "Casino",
      hotel: "Hotel",
      crypto: "Krypto",
      clicker: "Hra na reflexi",
      guessing: "Hádání čísel",
      leaderboard: "Leaderboard"
    },
    login: {
      title: "Přihlášení",
      username: "Zadej uživatelské jméno",
      password: "Zadej heslo",
      confirmPassword: "Potvrď heslo",
      loginBtn: "Přihlásit se",
      registerBtn: "Registrovat se"
    },
    hero: {
      title: "Hraj a vydělávej herní peníze",
      play: "Hrát",
      visitCasino: "Navštívit casino"
    },
    features: {
      snake: {
        title: "Had",
        desc: "Rychlá arkáda s ovládáním šipkami i WASD."
      },
      casino: {
        title: "Casino",
        desc: "Riskuj sázky a získej výhry v ruletě nebo automatech."
      },
      hotel: {
        title: "Hotel",
        desc: "Kupuj pokoje a sbírej pasivní příjem za noc."
      },
      clicker: {
        title: "Reflexi",
        desc: "Testuj svou dobu reakce a získej bonusové peníze za rychlé reflexy."
      },
      guessing: {
        title: "Hádání čísel",
        desc: "Uhodni číslo od 1 do 100 a získej 500 Kč."
      }
    },
    snake: {
      title: "Had",
      money: "Peníze: {score} Kč",
      start: "Spustit hru",
      controls: "Ovládání: šipky nebo WASD"
    },
    casino: {
      title: "Casino",
      bet: "Sázka:",
      roulette: "Točit ruletu",
      slots: "Hrací automat"
    },
    hotel: {
      title: "Hotel",
      upgrades: "Upgrady",
      kitchen: "Kuchyně: {status} (úroveň {level})",
      buyKitchen: "Koupit kuchyni za 3000 Kč",
      upgradeKitchen: "Vylepšit kuchyni za 5000 Kč",
      cookbook: "Kuchařka: {status} (úroveň {level})",
      buyCookbook: "Koupit kuchařku za 1200 Kč",
      upgradeCookbook: "Vylepšit kuchařku za 2000 Kč",
      pool: "Bazén: {status} (úroveň {level})",
      buyPool: "Koupit bazén za 4000 Kč",
      upgradePool: "Vylepšit bazén za 6000 Kč",
      reception: "Recepce: {status} (úroveň {level})",
      buyReception: "Koupit recepci za 2500 Kč",
      upgradeReception: "Vylepšit recepci za 4000 Kč",
      wellness: "Wellness: {status} (úroveň {level})",
      buyWellness: "Koupit wellness za 6000 Kč",
      upgradeWellness: "Vylepšit wellness za 9000 Kč",
      parking: "Parkování: {status} (úroveň {level})",
      buyParking: "Koupit parkování za 2000 Kč",
      upgradeParking: "Vylepšit parkování za 3000 Kč",
      buyCleaner: "Koupit uklízečku za 1500 Kč",
      upgradeCleaner: "Vylepšit uklízečku za 2500 Kč",
      buyLargeHotel: "Koupit větší hotel za 20000 Kč",
      state: "Stav: {state}",
      income: "Příjem za noc: {income} Kč",
      buyBroken: "Koupit rozbitý hotel za 5000 Kč",
      repair: "Opravit hotel za 5000 Kč",
      nextNight: "Další noc",
      instruction: "Nejdříve musíš koupit rozbitý hotel, opravit ho a pak můžeš investovat do různých upgradů pro zvýšení příjmu.",
      states: {
        none: "Žádný hotel",
        broken: "Rozbitý hotel",
        repaired: "Opravený hotel",
        large: "Velký hotel"
      },
      yes: "ano",
      no: "ne"
    },
    crypto: {
      title: "Krypto",
      buy: "Koupit",
      sell: "Prodat"
    },
    clicker: {
      title: "Hra na reflexi",
      target: "Čekej na zelený box",
      waiting: "Čekej na zelený box...",
      start: "Spustit hru",
      clicks: "Poslední čas: {count} ms",
      value: "Nejlepší čas: {value} ms",
      upgrade: "Vylepšit hra za 100 Kč"
    },
    guessing: {
      title: "Hádání čísel",
      instruction: "Uhodni číslo od 1 do 100:",
      guess: "Hádat",
      attempts: "Pokusy: {attempts}",
      prize: "Výhra: 500 Kč za správný tip"
    },
    leaderboard: {
      title: "Leaderboard",
      snake: "Nejlepší skóre v Hadovi",
      balance: "Nejvyšší zůstatek"
    },
    errors: {
      enterUsernamePassword: "Zadej uživatelské jméno a heslo.",
      userNotExist: "Uživatel neexistuje. Registruj se.",
      wrongPassword: "Špatné heslo.",
      passwordMin6: "Heslo musí mít alespoň 6 znaků.",
      passwordsNotMatch: "Hesla se neshodují.",
      userExists: "Uživatel už existuje."
    },
    messages: {
      offlineIncome: "Byl jsi offline {hours} hodin. Hotel vydělal {income} Kč.",
      autoNight: "Automatická noc: hotel vydělal {income} Kč.",
      hotel: {
        noMoneyBroken: "Na rozbitý hotel nemáš dostatek peněz.",
        boughtBroken: "Koupil jsi rozbitý hotel. Teď ho musíš opravit.",
        needBroken: "Nejdřív musíš koupit rozbitý hotel.",
        noMoneyRepair: "Na opravu hotelu nemáš dostatek peněz.",
        repaired: "Hotel je opravený! Teď můžeš koupit kuchyni.",
        needRepaired: "Nejdřív musíš opravit hotel.",
        kitchenOwned: "Kuchyně už je koupena.",
        noMoneyKitchen: "Na kuchyni nemáš dostatek peněz.",
        boughtKitchen: "Koupil jsi kuchyni! Nyní můžeš koupit kuchařku.",
        needKitchen: "Nejdřív musíš koupit kuchyni.",
        noMoneyUpgradeKitchen: "Na vylepšení kuchyně nemáš dostatek peněz.",
        upgradedKitchen: "Kuchyně vylepšena na level {level}! Příjem zvýšen.",
        cookbookOwned: "Kuchařku už máš.",
        noMoneyCookbook: "Na kuchařku nemáš dostatek peněz.",
        boughtCookbook: "Koupil jsi kuchařku! Příjem hotelu je nyní vyšší.",
        needCookbook: "Nejdřív musíš koupit kuchařku.",
        noMoneyUpgradeCookbook: "Na vylepšení kuchařky nemáš dostatek peněz.",
        upgradedCookbook: "Kuchařka vylepšena na level {level}! Příjem zvýšen.",
        // Add more as needed
      }
    }
  },
  en: {
    header: {
      balance: "Wallet: {balance} CZK",
      login: "Log in"
    },
    nav: {
      home: "Home",
      snake: "Snake",
      casino: "Casino",
      hotel: "Hotel",
      crypto: "Crypto",
      clicker: "Clicker",
      guessing: "Number Guessing",
      leaderboard: "Leaderboard"
    },
    login: {
      title: "Login",
      username: "Enter username",
      password: "Enter password",
      confirmPassword: "Confirm password",
      loginBtn: "Log in",
      registerBtn: "Register"
    },
    hero: {
      title: "Play and earn game money",
      play: "Play",
      visitCasino: "Visit casino"
    },
    features: {
      snake: {
        title: "Snake",
        desc: "Fast arcade with arrow keys or WASD controls."
      },
      casino: {
        title: "Casino",
        desc: "Risk bets and get winnings in roulette or slots."
      },
      hotel: {
        title: "Hotel",
        desc: "Buy rooms and collect passive income per night."
      },
      clicker: {
        title: "Reaction Game",
        desc: "Test your reaction time and earn bonus money for fast reflexes."
      },
      guessing: {
        title: "Number Guessing",
        desc: "Guess a number from 1 to 100 and get 500 CZK."
      }
    },
    snake: {
      title: "Snake",
      money: "Money: {score} CZK",
      start: "Start game",
      controls: "Controls: arrows or WASD"
    },
    casino: {
      title: "Casino",
      bet: "Bet:",
      roulette: "Spin roulette",
      slots: "Slot machine"
    },
    hotel: {
      title: "Hotel",
      upgrades: "Upgrades",
      kitchen: "Kitchen: {status} (Level {level})",
      buyKitchen: "Buy kitchen for 3000 CZK",
      upgradeKitchen: "Upgrade kitchen for 5000 CZK",
      cookbook: "Cookbook: {status} (Level {level})",
      buyCookbook: "Buy cookbook for 1200 CZK",
      upgradeCookbook: "Upgrade cookbook for 2000 CZK",
      pool: "Pool: {status} (Level {level})",
      buyPool: "Buy pool for 4000 CZK",
      upgradePool: "Upgrade pool for 6000 CZK",
      reception: "Reception: {status} (Level {level})",
      buyReception: "Buy reception for 2500 CZK",
      upgradeReception: "Upgrade reception for 4000 CZK",
      wellness: "Wellness: {status} (Level {level})",
      buyWellness: "Buy wellness for 6000 CZK",
      upgradeWellness: "Upgrade wellness for 9000 CZK",
      parking: "Parking: {status} (Level {level})",
      buyParking: "Buy parking for 2000 CZK",
      upgradeParking: "Upgrade parking for 3000 CZK",
      buyCleaner: "Buy cleaner for 1500 CZK",
      upgradeCleaner: "Upgrade cleaner for 2500 CZK",
      buyLargeHotel: "Buy larger hotel for 20000 CZK",
      state: "State: {state}",
      income: "Income per night: {income} CZK",
      buyBroken: "Buy broken hotel for 5000 CZK",
      repair: "Repair hotel for 5000 CZK",
      nextNight: "Next night",
      instruction: "First you need to buy a broken hotel, repair it, and then you can invest in various upgrades to increase income.",
      states: {
        none: "No hotel",
        broken: "Broken hotel",
        repaired: "Repaired hotel",
        large: "Large hotel"
      },
      yes: "yes",
      no: "no"
    },
    crypto: {
      title: "Crypto",
      buy: "Buy",
      sell: "Sell"
    },
    clicker: {
      title: "Reaction Time Game",
      target: "Wait for green box",
      waiting: "Wait for the green box...",
      start: "Start game",
      clicks: "Last time: {count} ms",
      value: "Best time: {value} ms",
      upgrade: "Upgrade game for 100 CZK"
    },
    guessing: {
      title: "Number Guessing",
      instruction: "Guess a number from 1 to 100:",
      guess: "Guess",
      attempts: "Attempts: {attempts}",
      prize: "Prize: 500 CZK for correct guess"
    },
    leaderboard: {
      title: "Leaderboard",
      snake: "Best Snake scores",
      balance: "Highest balances"
    },
    errors: {
      enterUsernamePassword: "Enter username and password.",
      userNotExist: "User does not exist. Register.",
      wrongPassword: "Wrong password.",
      passwordMin6: "Password must be at least 6 characters.",
      passwordsNotMatch: "Passwords do not match.",
      userExists: "User already exists."
    },
    messages: {
      offlineIncome: "You were offline for {hours} hours. Hotel earned {income} CZK.",
      autoNight: "Automatic night: hotel earned {income} CZK."
    }
  },
  de: {
    header: {
      balance: "Geldbeutel: {balance} CZK",
      login: "Anmelden"
    },
    nav: {
      home: "Startseite",
      snake: "Snake",
      casino: "Casino",
      hotel: "Hotel",
      crypto: "Krypto",
      clicker: "Clicker",
      guessing: "Zahlen raten",
      leaderboard: "Bestenliste"
    },
    login: {
      title: "Anmeldung",
      username: "Benutzername eingeben",
      password: "Passwort eingeben",
      confirmPassword: "Passwort bestätigen",
      loginBtn: "Anmelden",
      registerBtn: "Registrieren"
    },
    hero: {
      title: "Spiele und verdiene Spielgeld",
      play: "Spielen",
      visitCasino: "Casino besuchen"
    },
    features: {
      snake: {
        title: "Snake",
        desc: "Schnelle Arcade mit Pfeiltasten oder WASD-Steuerung."
      },
      casino: {
        title: "Casino",
        desc: "Setze Einsätze und gewinne in Roulette oder Automaten."
      },
      hotel: {
        title: "Hotel",
        desc: "Kaufe Zimmer und sammle passives Einkommen pro Nacht."
      },
      clicker: {
        title: "Clicker",
        desc: "Klicke das Ziel an und verdiene Geld. Verbessere Klicks."
      },
      guessing: {
        title: "Zahlen raten",
        desc: "Rate eine Zahl von 1 bis 100 und erhalte 500 CZK."
      }
    },
    snake: {
      title: "Snake",
      money: "Geld: {score} CZK",
      start: "Spiel starten",
      controls: "Steuerung: Pfeile oder WASD"
    },
    casino: {
      title: "Casino",
      bet: "Einsatz:",
      roulette: "Roulette drehen",
      slots: "Spielautomat"
    },
    hotel: {
      title: "Hotel",
      upgrades: "Upgrades",
      kitchen: "Küche: {status} (Stufe {level})",
      buyKitchen: "Küche für 3000 CZK kaufen",
      upgradeKitchen: "Küche für 5000 CZK upgraden",
      cookbook: "Kochbuch: {status} (Stufe {level})",
      buyCookbook: "Kochbuch für 1200 CZK kaufen",
      upgradeCookbook: "Kochbuch für 2000 CZK upgraden",
      pool: "Pool: {status} (Stufe {level})",
      buyPool: "Pool für 4000 CZK kaufen",
      upgradePool: "Pool für 6000 CZK upgraden",
      reception: "Rezeption: {status} (Stufe {level})",
      buyReception: "Rezeption für 2500 CZK kaufen",
      upgradeReception: "Rezeption für 4000 CZK upgraden",
      wellness: "Wellness: {status} (Stufe {level})",
      buyWellness: "Wellness für 6000 CZK kaufen",
      upgradeWellness: "Wellness für 9000 CZK upgraden",
      parking: "Parkplatz: {status} (Stufe {level})",
      buyParking: "Parkplatz für 2000 CZK kaufen",
      upgradeParking: "Parkplatz für 3000 CZK upgraden",
      buyCleaner: "Reinigungskraft für 1500 CZK kaufen",
      upgradeCleaner: "Reinigungskraft für 2500 CZK upgraden",
      buyLargeHotel: "Größeres Hotel für 20000 CZK kaufen",
      state: "Status: {state}",
      income: "Einkommen pro Nacht: {income} CZK",
      buyBroken: "Kaputtes Hotel für 5000 CZK kaufen",
      repair: "Hotel für 5000 CZK reparieren",
      nextNight: "Nächste Nacht",
      instruction: "Zuerst musst du ein kaputtes Hotel kaufen, es reparieren und dann kannst du in verschiedene Upgrades investieren, um das Einkommen zu erhöhen.",
      states: {
        none: "Kein Hotel",
        broken: "Kaputtes Hotel",
        repaired: "Repariertes Hotel",
        large: "Großes Hotel"
      },
      yes: "ja",
      no: "nein"
    },
    crypto: {
      title: "Krypto",
      buy: "Kaufen",
      sell: "Verkaufen"
    },
    clicker: {
      title: "Reaktionsspiel",
      target: "Warte auf grüne Box",
      waiting: "Warte auf die grüne Box...",
      start: "Spiel starten",
      clicks: "Letzte Zeit: {count} ms",
      value: "Beste Zeit: {value} ms",
      upgrade: "Spiel für 100 CZK upgraden"
    },
    guessing: {
      title: "Zahlen raten",
      instruction: "Rate eine Zahl von 1 bis 100:",
      guess: "Raten",
      attempts: "Versuche: {attempts}",
      prize: "Preis: 500 CZK für richtige Schätzung"
    },
    leaderboard: {
      title: "Bestenliste",
      snake: "Beste Snake-Scores",
      balance: "Höchste Guthaben"
    },
    errors: {
      enterUsernamePassword: "Benutzername und Passwort eingeben.",
      userNotExist: "Benutzer existiert nicht. Registrieren.",
      wrongPassword: "Falsches Passwort.",
      passwordMin6: "Passwort muss mindestens 6 Zeichen lang sein.",
      passwordsNotMatch: "Passwörter stimmen nicht überein.",
      userExists: "Benutzer existiert bereits."
    },
    messages: {
      offlineIncome: "Du warst {hours} Stunden offline. Hotel verdiente {income} CZK.",
      autoNight: "Automatische Nacht: Hotel verdiente {income} CZK."
    }
  },
  sk: {
    header: {
      balance: "Peňaženka: {balance} Kč",
      login: "Prihlásiť sa"
    },
    nav: {
      home: "Domov",
      snake: "Had",
      casino: "Casino",
      hotel: "Hotel",
      crypto: "Krypto",
      clicker: "Hra na reflexy",
      guessing: "Hádanie čísel",
      leaderboard: "Rebríček"
    },
    login: {
      title: "Prihlásenie",
      username: "Zadaj používateľské meno",
      password: "Zadaj heslo",
      confirmPassword: "Potvrď heslo",
      loginBtn: "Prihlásiť sa",
      registerBtn: "Registrovať sa"
    },
    hero: {
      title: "Hraj a zarábaj herné peniaze",
      play: "Hrať",
      visitCasino: "Navštíviť casino"
    },
    features: {
      snake: {
        title: "Had",
        desc: "Rýchla arkáda s ovládaním šípkami alebo WASD."
      },
      casino: {
        title: "Casino",
        desc: "Riskuj stávky a získaj výhry v rulete alebo automatoch."
      },
      hotel: {
        title: "Hotel",
        desc: "Kúp izby a zbieraj pasívny príjem za noc."
      },
      clicker: {
        title: "Klikacia hra",
        desc: "Klikni na cieľ a zarábaj peniaze. Vylepšuj kliky."
      },
      guessing: {
        title: "Hádanie čísel",
        desc: "Uhádni číslo od 1 do 100 a získaj 500 Kč."
      }
    },
    snake: {
      title: "Had",
      money: "Peniaze: {score} Kč",
      start: "Spustiť hru",
      controls: "Ovládanie: šípky alebo WASD"
    },
    casino: {
      title: "Casino",
      bet: "Stávka:",
      roulette: "Točiť ruletu",
      slots: "Hrací automat"
    },
    hotel: {
      title: "Hotel",
      upgrades: "Upgrady",
      kitchen: "Kuchyňa: {status} (úroveň {level})",
      buyKitchen: "Kúpiť kuchyňu za 3000 Kč",
      upgradeKitchen: "Vylepšiť kuchyňu za 5000 Kč",
      cookbook: "Kuchárka: {status} (úroveň {level})",
      buyCookbook: "Kúpiť kuchárku za 1200 Kč",
      upgradeCookbook: "Vylepšiť kuchárku za 2000 Kč",
      pool: "Bazén: {status} (úroveň {level})",
      buyPool: "Kúpiť bazén za 4000 Kč",
      upgradePool: "Vylepšiť bazén za 6000 Kč",
      reception: "Recepcia: {status} (úroveň {level})",
      buyReception: "Kúpiť recepciu za 2500 Kč",
      upgradeReception: "Vylepšiť recepciu za 4000 Kč",
      wellness: "Wellness: {status} (úroveň {level})",
      buyWellness: "Kúpiť wellness za 6000 Kč",
      upgradeWellness: "Vylepšiť wellness za 9000 Kč",
      parking: "Parkovanie: {status} (úroveň {level})",
      buyParking: "Kúpiť parkovanie za 2000 Kč",
      upgradeParking: "Vylepšiť parkovanie za 3000 Kč",
      buyCleaner: "Kúpiť upratovačku za 1500 Kč",
      upgradeCleaner: "Vylepšiť upratovačku za 2500 Kč",
      buyLargeHotel: "Kúpiť väčší hotel za 20000 Kč",
      state: "Stav: {state}",
      income: "Príjem za noc: {income} Kč",
      buyBroken: "Kúpiť rozbitý hotel za 5000 Kč",
      repair: "Opraviť hotel za 5000 Kč",
      nextNight: "Ďalšia noc",
      instruction: "Najprv musíš kúpiť rozbitý hotel, opraviť ho a potom môžeš investovať do rôznych upgradov pre zvýšenie príjmu.",
      states: {
        none: "Žiadny hotel",
        broken: "Rozbitý hotel",
        repaired: "Opravený hotel",
        large: "Veľký hotel"
      },
      yes: "áno",
      no: "nie"
    },
    crypto: {
      title: "Krypto",
      buy: "Kúpiť",
      sell: "Predať"
    },
    clicker: {
      title: "Hra na reflexy",
      target: "Čakaj na zelenú krabicu",
      waiting: "Čakaj na zelenú krabicu...",
      start: "Spustiť hru",
      clicks: "Posledný čas: {count} ms",
      value: "Najlepší čas: {value} ms",
      upgrade: "Vylepšiť hru za 100 Kč"
    },
    guessing: {
      title: "Hádanie čísel",
      instruction: "Uhádni číslo od 1 do 100:",
      guess: "Hádať",
      attempts: "Pokusy: {attempts}",
      prize: "Výhra: 500 Kč za správny tip"
    },
    leaderboard: {
      title: "Rebríček",
      snake: "Najlepšie skóre v Hade",
      balance: "Najvyšší zostatok"
    },
    errors: {
      enterUsernamePassword: "Zadaj používateľské meno a heslo.",
      userNotExist: "Používateľ neexistuje. Registruj sa.",
      wrongPassword: "Nesprávne heslo.",
      passwordMin6: "Heslo musí mať aspoň 6 znakov.",
      passwordsNotMatch: "Heslá sa nezhodujú.",
      userExists: "Používateľ už existuje."
    },
    messages: {
      offlineIncome: "Bol si offline {hours} hodín. Hotel zarobil {income} Kč.",
      autoNight: "Automatická noc: hotel zarobil {income} Kč."
    }
  },
  ru: {
    header: {
      balance: "Кошелек: {balance} Kč",
      login: "Войти"
    },
    nav: {
      home: "Главная",
      snake: "Змейка",
      casino: "Казино",
      hotel: "Отель",
      crypto: "Крипто",
      clicker: "Кликер",
      guessing: "Угадывание чисел",
      leaderboard: "Таблица лидеров"
    },
    login: {
      title: "Вход",
      username: "Введите имя пользователя",
      password: "Введите пароль",
      confirmPassword: "Подтвердите пароль",
      loginBtn: "Войти",
      registerBtn: "Регистрация"
    },
    hero: {
      title: "Играй и зарабатывай игровые деньги",
      play: "Играть",
      visitCasino: "Посетить казино"
    },
    features: {
      snake: {
        title: "Змейка",
        desc: "Быстрая аркада с управлением стрелками или WASD."
      },
      casino: {
        title: "Казино",
        desc: "Рискуй ставками и получай выигрыши в рулетке или автоматах."
      },
      hotel: {
        title: "Отель",
        desc: "Покупай номера и собирай пассивный доход за ночь."
      },
      clicker: {
        title: "Кликер",
        desc: "Кликай по цели и зарабатывай деньги. Улучшай клики."
      },
      guessing: {
        title: "Угадывание чисел",
        desc: "Угадай число от 1 до 100 и получи 500 Kč."
      }
    },
    snake: {
      title: "Змейка",
      money: "Деньги: {score} Kč",
      start: "Начать игру",
      controls: "Управление: стрелки или WASD"
    },
    casino: {
      title: "Казино",
      bet: "Ставка:",
      roulette: "Крутить рулетку",
      slots: "Игровой автомат"
    },
    hotel: {
      title: "Отель",
      upgrades: "Улучшения",
      kitchen: "Кухня: {status} (Уровень {level})",
      buyKitchen: "Купить кухню за 3000 Kč",
      upgradeKitchen: "Улучшить кухню за 5000 Kč",
      cookbook: "Кулинарная книга: {status} (Уровень {level})",
      buyCookbook: "Купить кулинарную книгу за 1200 Kč",
      upgradeCookbook: "Улучшить кулинарную книгу за 2000 Kč",
      pool: "Бассейн: {status} (Уровень {level})",
      buyPool: "Купить бассейн за 4000 Kč",
      upgradePool: "Улучшить бассейн за 6000 Kč",
      reception: "Рецепция: {status} (Уровень {level})",
      buyReception: "Купить рецепцию за 2500 Kč",
      upgradeReception: "Улучшить рецепцию за 4000 Kč",
      wellness: "Велнес: {status} (Уровень {level})",
      buyWellness: "Купить велнес за 6000 Kč",
      upgradeWellness: "Улучшить велнес за 9000 Kč",
      parking: "Парковка: {status} (Уровень {level})",
      buyParking: "Купить парковку за 2000 Kč",
      upgradeParking: "Улучшить парковку за 3000 Kč",
      buyCleaner: "Купить уборщицу за 1500 Kč",
      upgradeCleaner: "Улучшить уборщицу за 2500 Kč",
      buyLargeHotel: "Купить больший отель за 20000 Kč",
      state: "Состояние: {state}",
      income: "Доход за ночь: {income} Kč",
      buyBroken: "Купить сломанный отель за 5000 Kč",
      repair: "Починить отель за 5000 Kč",
      nextNight: "Следующая ночь",
      instruction: "Сначала тебе нужно купить сломанный отель, починить его, а затем ты можешь инвестировать в различные улучшения для увеличения дохода.",
      states: {
        none: "Нет отеля",
        broken: "Сломанный отель",
        repaired: "Починенный отель",
        large: "Большой отель"
      },
      yes: "да",
      no: "нет"
    },
    crypto: {
      title: "Крипто",
      buy: "Купить",
      sell: "Продать"
    },
    clicker: {
      title: "Игра на реакцию",
      target: "Жди зелёный квадрат",
      waiting: "Жди зелёный квадрат...",
      start: "Начать игру",
      clicks: "Последнее время: {count} ms",
      value: "Лучшее время: {value} ms",
      upgrade: "Улучшить игру за 100 Kč"
    },
    guessing: {
      title: "Угадывание чисел",
      instruction: "Угадай число от 1 до 100:",
      guess: "Угадать",
      attempts: "Попытки: {attempts}",
      prize: "Приз: 500 Kč за правильный ответ"
    },
    leaderboard: {
      title: "Таблица лидеров",
      snake: "Лучшие результаты в Змейке",
      balance: "Самые высокие балансы"
    },
    errors: {
      enterUsernamePassword: "Введите имя пользователя и пароль.",
      userNotExist: "Пользователь не существует. Зарегистрируйтесь.",
      wrongPassword: "Неверный пароль.",
      passwordMin6: "Пароль должен быть не менее 6 символов.",
      passwordsNotMatch: "Пароли не совпадают.",
      userExists: "Пользователь уже существует."
    },
    messages: {
      offlineIncome: "Ты был оффлайн {hours} часов. Отель заработал {income} Kč.",
      autoNight: "Автоматическая ночь: отель заработал {income} Kč."
    }
  }
};

let currentLang = 'cs';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value[k];
    }
    if (value) {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value[k];
    }
    if (value) {
      el.placeholder = value;
    }
  });

  // Update balance
  updateBalanceDisplay();

  // Update hotel state
  updateHotelStats();

  // Update crypto
  updateCryptoDisplay();

  // Update clicker
  updateClickerDisplay();

  // Update income timer
  updateIncomeTimer();

  // Update guessing
  updateGuessingDisplay();

  // Update snake score
  updateSnakeScore();

  // Store language in localStorage
  localStorage.setItem('language', lang);
}

function updateBalanceDisplay() {
  const balanceText = translations[currentLang].header.balance.replace('{balance}', balance);
  document.querySelector('.balance').textContent = balanceText;
}

function updateBalance(amount) {
  balance += amount;
  if (balance < 0) {
    balance = 0;
  }
  updateBalanceDisplay();
  if (currentUser) {
    saveUserData();
  }
}

function createMusicContext() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

function playNote(frequency, duration = 0.5, type = 'sine') {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  osc.connect(gain);
  gain.connect(audioContext.destination);
  gain.gain.setValueAtTime(0, audioContext.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  osc.start();
  osc.stop(audioContext.currentTime + duration + 0.05);
}

function playTrack(track) {
  if (!audioContext) return;
  if (trackNoteInterval) {
    clearInterval(trackNoteInterval);
    trackNoteInterval = null;
  }
  let noteIndex = 0;
  playNote(track.notes[noteIndex], track.duration, track.type || 'sine');
  trackNoteInterval = setInterval(() => {
    noteIndex = (noteIndex + 1) % track.notes.length;
    playNote(track.notes[noteIndex], track.duration, track.type || 'sine');
  }, track.interval);
}

function startBackgroundMusic() {
  if (musicPlaying) return;
  createMusicContext();
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  musicPlaying = true;
  musicTrackIndex = 0;
  playTrack(musicTracks[musicTrackIndex]);
  trackChangeInterval = setInterval(() => {
    musicTrackIndex = (musicTrackIndex + 1) % musicTracks.length;
    playTrack(musicTracks[musicTrackIndex]);
  }, 25000);
}

function stopBackgroundMusic() {
  musicPlaying = false;
  if (trackNoteInterval) {
    clearInterval(trackNoteInterval);
    trackNoteInterval = null;
  }
  if (trackChangeInterval) {
    clearInterval(trackChangeInterval);
    trackChangeInterval = null;
  }
}

function updateMusicState() {
  const enabled = musicToggle?.checked;
  localStorage.setItem('musicEnabled', enabled ? 'true' : 'false');
  if (enabled) {
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
}

function initMusicSetting() {
  const saved = localStorage.getItem('musicEnabled');
  const enabled = saved === 'true';
  if (musicToggle) {
    musicToggle.checked = enabled;
    musicToggle.addEventListener('change', updateMusicState);
    if (enabled) {
      document.body.addEventListener('click', () => {
        if (musicToggle.checked) {
          startBackgroundMusic();
        }
      }, { once: true });
    }
  }
}

function updateHotelDisplay() {
  updateHotelStats();
}

function updateIncomeTimer() {
  const now = Date.now();
  const timeLeft = Math.max(0, nextIncomeTime - now);
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const timerText = `Další příjem za: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('nextIncomeTimer').textContent = timerText;
}

function updateClickerDisplay() {
  // Reaction game display update - no longer needed as we update directly
}


function updateGuessingDisplay() {
  const t = translations[currentLang].guessing;
  document.querySelector('#guessing .guessing-panel p:nth-child(4)').textContent = t.attempts.replace('{attempts}', guessAttempts);
}

function updateSnakeScore() {
  const snakeMoneyElement = document.querySelector('#snake .snake-controls p');
  snakeMoneyElement.textContent = translations[currentLang].snake.money.replace('{score}', snakeScore * 10);
}

const balanceElement = document.getElementById("balance");
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll("nav button");
let balance = 1000;
let snakeInterval = null;
let snakeDirection = "right";
let snakePositions = [];
let snakeFood = null;
let snakeScore = 0;
let bestSnakeMoney = 0;
let totalCasinoWinnings = 0;
let hotelIncomeTotal = 0;
let totalGuessWins = 0;
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 16;
const tileCount = canvas.width / gridSize;

const hotelStateElement = document.getElementById("hotelState");
const hotelKitchenElement = document.getElementById("hotelKitchen");
const hotelCookbookElement = document.getElementById("hotelCookbook");
const hotelPoolElement = document.getElementById("hotelPool");
const hotelReceptionElement = document.getElementById("hotelReception");
const hotelWellnessElement = document.getElementById("hotelWellness");
const hotelParkingElement = document.getElementById("hotelParking");
const hotelCleanerElement = document.getElementById("hotelCleaner");
const hotelIncomeElement = document.getElementById("hotelIncome");
const hotelResult = document.getElementById("hotelResult");
const buyBrokenHotelButton = document.getElementById("buyBrokenHotel");
const repairHotelButton = document.getElementById("repairHotel");
const buyKitchenButton = document.getElementById("buyKitchen");
const buyCookbookButton = document.getElementById("buyCookbook");
const buyPoolButton = document.getElementById("buyPool");
const buyReceptionButton = document.getElementById("buyReception");
const buyWellnessButton = document.getElementById("buyWellness");
const buyParkingButton = document.getElementById("buyParking");
const buyCleanerButton = document.getElementById("buyCleaner");
const buyLargeHotelButton = document.getElementById("buyLargeHotel");
const upgradeKitchenButton = document.getElementById("upgradeKitchen");
const upgradeCookbookButton = document.getElementById("upgradeCookbook");
const upgradeCleanerButton = document.getElementById("upgradeCleaner");
const upgradePoolButton = document.getElementById("upgradePool");
const upgradeReceptionButton = document.getElementById("upgradeReception");
const upgradeWellnessButton = document.getElementById("upgradeWellness");
const upgradeParkingButton = document.getElementById("upgradeParking");
const kitchenLevelElement = document.getElementById("kitchenLevel");
const cookbookLevelElement = document.getElementById("cookbookLevel");
const poolLevelElement = document.getElementById("poolLevel");
const receptionLevelElement = document.getElementById("receptionLevel");
const wellnessLevelElement = document.getElementById("wellnessLevel");
const parkingLevelElement = document.getElementById("parkingLevel");
const cleanerLevelElement = document.getElementById("cleanerLevel");
let hotelState = "none";
let hasKitchen = false;
let hasCookbook = false;
let hasPool = false;
let hasReception = false;
let hasWellness = false;
let hasParking = false;
let hasCleaner = false;
let nextIncomeTime = Date.now() + 60 * 60 * 1000; // 1 hour from now
let kitchenLevel = 0;
let cookbookLevel = 0;
let poolLevel = 0;
let receptionLevel = 0;
let wellnessLevel = 0;
let parkingLevel = 0;
let cleanerLevel = 0;
let cryptoPrices = {
  BTC: 50000,
  ETH: 3000,
  LTC: 150,
  XRP: 0.5,
  ADA: 1.2,
  SOL: 100
};
const cryptoVolatility = {
  BTC: 0.006,
  ETH: 0.01,
  LTC: 0.015,
  XRP: 0.02,
  ADA: 0.025,
  SOL: 0.03
};
const cryptoMomentum = {
  BTC: 0,
  ETH: 0,
  LTC: 0,
  XRP: 0,
  ADA: 0,
  SOL: 0
};
let cryptoOwned = {
  BTC: 0,
  ETH: 0,
  LTC: 0,
  XRP: 0,
  ADA: 0,
  SOL: 0
};
let cryptoHistory = {
  BTC: [50000],
  ETH: [3000],
  LTC: [150],
  XRP: [0.5],
  ADA: [1.2],
  SOL: [100]
};
const cryptoResult = document.getElementById("cryptoResult");
const brokenHotelPrice = 5000;
const repairPrice = 5000;
const kitchenPrice = 3000;
const cookbookPrice = 1200;
const poolPrice = 4000;
const receptionPrice = 2500;
const wellnessPrice = 6000;
const parkingPrice = 2000;
const cleanerPrice = 1500;
const kitchenUpgradePrice = 5000;
const cookbookUpgradePrice = 2000;
const poolUpgradePrice = 6000;
const receptionUpgradePrice = 4000;
const wellnessUpgradePrice = 9000;
const parkingUpgradePrice = 3000;
const cleanerUpgradePrice = 2500;
const hotelBaseIncome = 150;
const kitchenIncome = 100;
const cookbookIncome = 80;
const poolIncome = 120;
const receptionIncome = 90;
const wellnessIncome = 200;
const parkingIncome = 70;
const cleanerIncome = 60;

// Login and save system
let currentUser = null;
const loginModal = document.getElementById("loginModal");
const settingsModal = document.getElementById("settingsModal");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const stayLoggedInCheckbox = document.getElementById("stayLoggedIn");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const closeLoginButton = document.getElementById("closeLogin");
const closeSettingsButton = document.getElementById("closeSettings");
const musicToggle = document.getElementById("musicToggle");
const loginError = document.getElementById("loginError");
const snakeLeaderboardElement = document.getElementById("snakeLeaderboard");
const casinoLeaderboardElement = document.getElementById("casinoLeaderboard");
const hotelLeaderboardElement = document.getElementById("hotelLeaderboard");
const cryptoLeaderboardElement = document.getElementById("cryptoLeaderboard");
const reflexiLeaderboardElement = document.getElementById("reflexiLeaderboard");
const guessingLeaderboardElement = document.getElementById("guessingLeaderboard");
const balanceLeaderboardElement = document.getElementById("balanceLeaderboard");
const heroPlayButton = document.getElementById("heroPlay");
const heroCasinoButton = document.getElementById("heroCasino");

function switchPage(pageId) {
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  navButtons.forEach(button => {
    if (button.dataset.target === pageId) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

let audioContext = null;
let musicTrackIndex = 0;
let trackNoteInterval = null;
let trackChangeInterval = null;
let musicPlaying = false;

const musicTracks = [
  {
    name: 'Chill Pad',
    notes: [130.81, 146.83, 164.81, 196.00],
    interval: 1200,
    duration: 0.9
  },
  {
    name: 'Soft Arp',
    notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00],
    interval: 550,
    duration: 0.4
  },
  {
    name: 'Dream Bell',
    notes: [392.00, 329.63, 293.66, 261.63, 220.00],
    interval: 1000,
    duration: 0.8
  }
];

// Reaction time game
let reactionTimes = [];
let bestReactionTime = Infinity;
let currentReactionTime = null;
let reactionTestStarted = false;
let reactionDelay = null;
let totalReactionReward = 0;
const reactionBox = document.getElementById("reactionBox");
const startReactionButton = document.getElementById("startReaction");
const reactionStatus = document.getElementById("reactionStatus");
const reactionTimeDisplay = document.getElementById("reactionTime");
const bestReactionDisplay = document.getElementById("bestReactionTime");
const reactionRewardDisplay = document.getElementById("reactionReward");

// Guessing game
let targetNumber = Math.floor(Math.random() * 100) + 1;
let guessAttempts = 0;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const guessResult = document.getElementById("guessResult");
const guessAttemptsElement = document.getElementById("guessAttempts");

function loadUserData() {
  if (!currentUser) return;
  const data = JSON.parse(localStorage.getItem(`gamebling_${currentUser}`) || '{}');
  balance = data.balance || 1000;
  hotelState = data.hotelState || "none";
  hasKitchen = data.hasKitchen || false;
  hasCookbook = data.hasCookbook || false;
  hasPool = data.hasPool || false;
  hasReception = data.hasReception || false;
  hasWellness = data.hasWellness || false;
  hasParking = data.hasParking || false;
  hasCleaner = data.hasCleaner || false;
  kitchenLevel = data.kitchenLevel || 0;
  cookbookLevel = data.cookbookLevel || 0;
  poolLevel = data.poolLevel || 0;
  receptionLevel = data.receptionLevel || 0;
  wellnessLevel = data.wellnessLevel || 0;
  parkingLevel = data.parkingLevel || 0;
  cleanerLevel = data.cleanerLevel || 0;
  cryptoPrices = data.cryptoPrices || {
    BTC: 50000,
    ETH: 3000,
    LTC: 150,
    XRP: 0.5,
    ADA: 1.2,
    SOL: 100
  };
  cryptoOwned = data.cryptoOwned || {
    BTC: 0,
    ETH: 0,
    LTC: 0,
    XRP: 0,
    ADA: 0,
    SOL: 0
  };
  cryptoHistory = data.cryptoHistory || {
    BTC: [50000],
    ETH: [3000],
    LTC: [150],
    XRP: [0.5],
    ADA: [1.2],
    SOL: [100]
  };
  bestReactionTime = data.bestReactionTime ?? Infinity;
  reactionTimes = data.reactionTimes || [];
  totalReactionReward = data.totalReactionReward || 0;
  bestSnakeMoney = data.bestSnakeMoney || 0;
  totalCasinoWinnings = data.totalCasinoWinnings || 0;
  hotelIncomeTotal = data.hotelIncomeTotal || 0;
  totalGuessWins = data.totalGuessWins || 0;
  nextIncomeTime = data.nextIncomeTime || (Date.now() + 60 * 60 * 1000);
  const lastVisit = data.lastVisit || Date.now();
  const now = Date.now();
  const hoursOffline = Math.floor((now - lastVisit) / (1000 * 60 * 60));
  if (hoursOffline > 0 && (hotelState === "repaired" || hotelState === "large")) {
    const offlineIncome = getHotelIncome() * hoursOffline;
    balance += offlineIncome;
    hotelIncomeTotal += offlineIncome;
    hotelResult.textContent = translations[currentLang].messages.offlineIncome.replace('{hours}', hoursOffline).replace('{income}', offlineIncome);
    updateLeaderboards();
  }
  updateBalance(0);
  updateHotelStats();
  updateCryptoDisplay();
  updateClicker();
}

function saveUserData() {
  if (!currentUser) return;
  const data = {
    balance,
    hotelState,
    hasKitchen,
    hasCookbook,
    hasPool,
    hasReception,
    hasWellness,
    hasParking,
    hasCleaner,
    kitchenLevel,
    cookbookLevel,
    poolLevel,
    receptionLevel,
    wellnessLevel,
    parkingLevel,
    cleanerLevel,
    cryptoPrices,
    cryptoOwned,
    cryptoHistory,
    bestReactionTime: isFinite(bestReactionTime) ? bestReactionTime : null,
    reactionTimes,
    totalReactionReward,
    bestSnakeMoney,
    totalCasinoWinnings,
    hotelIncomeTotal,
    totalGuessWins,
    nextIncomeTime,
    lastVisit: Date.now()
  };
  localStorage.setItem(`gamebling_${currentUser}`, JSON.stringify(data));
}

function updateLeaderboards() {
  const users = Object.keys(localStorage).filter(key => key.startsWith('gamebling_')).map(key => key.replace('gamebling_', ''));
  const userData = users.map(user => {
    const data = JSON.parse(localStorage.getItem(`gamebling_${user}`) || '{}');
    const cryptoPricesData = data.cryptoPrices || {
      BTC: 50000,
      ETH: 3000,
      LTC: 150,
      XRP: 0.5,
      ADA: 1.2,
      SOL: 100
    };
    const cryptoOwnedData = data.cryptoOwned || {
      BTC: 0,
      ETH: 0,
      LTC: 0,
      XRP: 0,
      ADA: 0,
      SOL: 0
    };
    const portfolioValue = Object.keys(cryptoOwnedData).reduce((sum, coin) => {
      return sum + (cryptoOwnedData[coin] || 0) * (cryptoPricesData[coin] || 0);
    }, 0);
    return {
      user,
      balance: data.balance || 0,
      snake: data.bestSnakeMoney || 0,
      casino: data.totalCasinoWinnings || 0,
      hotel: data.hotelIncomeTotal || 0,
      crypto: Math.round(portfolioValue),
      reflexi: data.bestReactionTime ?? Infinity,
      guessing: data.totalGuessWins || 0
    };
  });

  const topSnake = [...userData].sort((a, b) => b.snake - a.snake).slice(0, 10);
  const topCasino = [...userData].sort((a, b) => b.casino - a.casino).slice(0, 10);
  const topHotel = [...userData].sort((a, b) => b.hotel - a.hotel).slice(0, 10);
  const topCrypto = [...userData].sort((a, b) => b.crypto - a.crypto).slice(0, 10);
  const topReflexi = [...userData].filter(entry => entry.reflexi !== Infinity).sort((a, b) => a.reflexi - b.reflexi).slice(0, 10);
  const topGuessing = [...userData].sort((a, b) => b.guessing - a.guessing).slice(0, 10);

  snakeLeaderboardElement.innerHTML = topSnake.length
    ? topSnake.map(s => `<li>${s.user}: ${s.snake} Kč</li>`).join('')
    : '<li>Žádná data</li>';
  casinoLeaderboardElement.innerHTML = topCasino.length
    ? topCasino.map(s => `<li>${s.user}: ${s.casino} Kč</li>`).join('')
    : '<li>Žádná data</li>';
  hotelLeaderboardElement.innerHTML = topHotel.length
    ? topHotel.map(s => `<li>${s.user}: ${s.hotel} Kč</li>`).join('')
    : '<li>Žádná data</li>';
  cryptoLeaderboardElement.innerHTML = topCrypto.length
    ? topCrypto.map(s => `<li>${s.user}: ${s.crypto} Kč</li>`).join('')
    : '<li>Žádná data</li>';
  reflexiLeaderboardElement.innerHTML = topReflexi.length
    ? topReflexi.map(s => `<li>${s.user}: ${s.reflexi} ms</li>`).join('')
    : '<li>Žádná data</li>';
  guessingLeaderboardElement.innerHTML = topGuessing.length
    ? topGuessing.map(s => `<li>${s.user}: ${s.guessing}</li>`).join('')
    : '<li>Žádná data</li>';
  balanceLeaderboardElement.innerHTML = userData.sort((a, b) => b.balance - a.balance).slice(0, 10).map(s => `<li>${s.user}: ${s.balance} Kč</li>`).join('');
}

function login() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (!username || !password) {
    loginError.textContent = translations[currentLang].errors.enterUsernamePassword;
    return;
  }
  const storedPassword = localStorage.getItem(`password_${username}`);
  if (!storedPassword) {
    loginError.textContent = translations[currentLang].errors.userNotExist;
    return;
  }
  if (storedPassword !== password) {
    loginError.textContent = translations[currentLang].errors.wrongPassword;
    return;
  }
  currentUser = username;
  if (stayLoggedInCheckbox && stayLoggedInCheckbox.checked) {
    localStorage.setItem('currentUser', currentUser);
  } else {
    localStorage.removeItem('currentUser');
  }
  loginModal.classList.remove("show");
  loadUserData();
  updateLeaderboards();
}

function checkLogin() {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = savedUser;
    loadUserData();
    updateLeaderboards();
  }
}

function register() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (!username || !password) {
    loginError.textContent = translations[currentLang].errors.enterUsernamePassword;
    return;
  }
  if (password.length < 6) {
    loginError.textContent = translations[currentLang].errors.passwordMin6;
    return;
  }
  if (password !== confirmPassword) {
    loginError.textContent = translations[currentLang].errors.passwordsNotMatch;
    return;
  }
  if (localStorage.getItem(`password_${username}`)) {
    loginError.textContent = translations[currentLang].errors.userExists;
    return;
  }
  localStorage.setItem(`password_${username}`, password);
  login();
}

loginButton.addEventListener("click", login);
registerButton.addEventListener("click", () => {
  confirmPasswordInput.classList.remove("hidden");
  register();
});
usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") login();
});
passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") login();
});
confirmPasswordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") register();
});

closeLoginButton.addEventListener("click", () => {
  loginModal.classList.remove("show");
  loginError.textContent = "";
});

document.getElementById("loginBtn").addEventListener("click", () => {
  confirmPasswordInput.classList.add("hidden");
  stayLoggedInCheckbox.checked = false;
  loginModal.classList.add("show");
});

document.getElementById("registerHeaderBtn").addEventListener("click", () => {
  confirmPasswordInput.classList.remove("hidden");
  stayLoggedInCheckbox.checked = true;
  loginModal.classList.add("show");
});

document.getElementById("settingsBtn").addEventListener("click", () => {
  if (settingsModal) {
    settingsModal.classList.add("show");
  }
});

closeSettingsButton?.addEventListener("click", () => {
  settingsModal.classList.remove("show");
});

initMusicSetting();

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (target) {
      switchPage(target);
    }
  });
});

heroPlayButton?.addEventListener("click", () => {
  switchPage("snake");
  startSnake();
});
heroCasinoButton?.addEventListener("click", () => switchPage("casino"));

function resetSnake() {
  snakePositions = [ { x: 8, y: 8 } ];
  snakeDirection = "right";
  snakeScore = 0;
  snakeFood = spawnFood();
  document.getElementById("snakeScore").textContent = snakeScore * 10;
  drawSnake();
}

function spawnFood() {
  while (true) {
    const food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    if (!snakePositions.some(segment => segment.x === food.x && segment.y === food.y)) {
      return food;
    }
  }
}

function drawSnake() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  snakePositions.forEach(segment => ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1));
  ctx.fillStyle = "#f00";
  ctx.fillRect(snakeFood.x * gridSize, snakeFood.y * gridSize, gridSize - 1, gridSize - 1);
}

function gameOver() {
  clearInterval(snakeInterval);
  snakeInterval = null;
  const earned = snakeScore * 10;
  alert(`Konec hry! Získal jsi ${earned} Kč.`);
  bestSnakeMoney = Math.max(bestSnakeMoney, earned);
  updateBalance(earned);
  updateLeaderboards();
}

function moveSnake() {
  const head = { ...snakePositions[0] };
  if (snakeDirection === "left") head.x -= 1;
  if (snakeDirection === "right") head.x += 1;
  if (snakeDirection === "up") head.y -= 1;
  if (snakeDirection === "down") head.y += 1;
  if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
    return gameOver();
  }
  if (snakePositions.some(segment => segment.x === head.x && segment.y === head.y)) {
    return gameOver();
  }
  snakePositions.unshift(head);
  if (head.x === snakeFood.x && head.y === snakeFood.y) {
    snakeScore += 1;
    document.getElementById("snakeScore").textContent = snakeScore * 10;
    snakeFood = spawnFood();
  } else {
    snakePositions.pop();
  }
  drawSnake();
}

window.addEventListener("keydown", (event) => {
  const key = event.key;
  const navigationKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "W", "a", "A", "s", "S", "d", "D"];
  if (navigationKeys.includes(key)) {
    event.preventDefault();
  }
  if ((key === "ArrowUp" || key === "w" || key === "W") && snakeDirection !== "down") snakeDirection = "up";
  if ((key === "ArrowDown" || key === "s" || key === "S") && snakeDirection !== "up") snakeDirection = "down";
  if ((key === "ArrowLeft" || key === "a" || key === "A") && snakeDirection !== "right") snakeDirection = "left";
  if ((key === "ArrowRight" || key === "d" || key === "D") && snakeDirection !== "left") snakeDirection = "right";
});

function startSnake() {
  if (snakeInterval) {
    clearInterval(snakeInterval);
  }
  resetSnake();
  canvas.focus();
  snakeInterval = setInterval(moveSnake, 120);
}

document.getElementById("snakeStart").addEventListener("click", startSnake);

function casinoResult(text) {
  document.getElementById("casinoResult").textContent = text;
}

function playGame(multiplier, winText, loseText) {
  const betInput = document.getElementById("betAmount");
  const bet = Number(betInput.value);
  if (bet <= 0 || bet > balance) {
    casinoResult("Neplatná sázka. Zadej platnou částku.");
    return;
  }
  updateBalance(-bet);
  const chance = Math.random();
  if (chance < multiplier.chance) {
    const win = Math.floor(bet * multiplier.payout);
    totalCasinoWinnings += win;
    updateBalance(win);
    casinoResult(winText.replace("{amount}", win));
    updateLeaderboards();
  } else {
    casinoResult(loseText.replace("{bet}", bet));
  }
}

document.getElementById("playRoulette").addEventListener("click", () => {
  playGame({ chance: 0.45, payout: 1.8 }, "Ruleta vyhrála! Dostáváš {amount} Kč.", "Ruleta prohrála. Ztratil jsi {bet} Kč.");
});

document.getElementById("playSlots").addEventListener("click", () => {
  playGame({ chance: 0.33, payout: 2.5 }, "Výherní automat vyhrál! Dostáváš {amount} Kč.", "Výherní automat prohrál. Ztratil jsi {bet} Kč.");
});

function getHotelIncome() {
  if (hotelState === "none" || hotelState === "broken") return 0;
  let income = hotelBaseIncome;
  if (hasKitchen) income += kitchenIncome * (1 + kitchenLevel * 0.5);
  if (hasCookbook) income += cookbookIncome * (1 + cookbookLevel * 0.5);
  if (hasPool) income += poolIncome * (1 + poolLevel * 0.5);
  if (hasReception) income += receptionIncome * (1 + receptionLevel * 0.5);
  if (hasWellness) income += wellnessIncome * (1 + wellnessLevel * 0.5);
  if (hasParking) income += parkingIncome * (1 + parkingLevel * 0.5);
  if (hasCleaner) income += cleanerIncome * (1 + cleanerLevel * 0.5);
  return Math.floor(income);
}

function updateHotelButtons() {
  const activeState = hotelState === "repaired" || hotelState === "large";
  buyBrokenHotelButton.classList.toggle("hidden", hotelState !== "none");
  repairHotelButton.classList.toggle("hidden", hotelState !== "broken");
  buyKitchenButton.classList.toggle("hidden", !activeState || hasKitchen);
  upgradeKitchenButton.classList.toggle("hidden", !activeState || !hasKitchen);
  buyCookbookButton.classList.toggle("hidden", !activeState || !hasKitchen || hasCookbook);
  upgradeCookbookButton.classList.toggle("hidden", !activeState || !hasCookbook);
  buyPoolButton.classList.toggle("hidden", !activeState || hasPool);
  upgradePoolButton.classList.toggle("hidden", !activeState || !hasPool);
  buyReceptionButton.classList.toggle("hidden", !activeState || hasReception);
  upgradeReceptionButton.classList.toggle("hidden", !activeState || !hasReception);
  buyWellnessButton.classList.toggle("hidden", !activeState || hasWellness);
  upgradeWellnessButton.classList.toggle("hidden", !activeState || !hasWellness);
  buyParkingButton.classList.toggle("hidden", !activeState || hasParking);
  upgradeParkingButton.classList.toggle("hidden", !activeState || !hasParking);
  buyCleanerButton.classList.toggle("hidden", !activeState || hasCleaner);
  upgradeCleanerButton.classList.toggle("hidden", !activeState || !hasCleaner);
  buyLargeHotelButton.classList.toggle("hidden", hotelState !== "repaired");
}

function updateHotelStats() {
  const t = translations[currentLang].hotel;
  hotelStateElement.textContent = t.states[hotelState] || t.states.none;
  hotelKitchenElement.textContent = hasKitchen ? t.yes : t.no;
  hotelCookbookElement.textContent = hasCookbook ? t.yes : t.no;
  hotelPoolElement.textContent = hasPool ? t.yes : t.no;
  hotelReceptionElement.textContent = hasReception ? t.yes : t.no;
  hotelWellnessElement.textContent = hasWellness ? t.yes : t.no;
  hotelParkingElement.textContent = hasParking ? t.yes : t.no;
  hotelCleanerElement.textContent = hasCleaner ? t.yes : t.no;
  kitchenLevelElement.textContent = kitchenLevel;
  cookbookLevelElement.textContent = cookbookLevel;
  poolLevelElement.textContent = poolLevel;
  receptionLevelElement.textContent = receptionLevel;
  wellnessLevelElement.textContent = wellnessLevel;
  parkingLevelElement.textContent = parkingLevel;
  cleanerLevelElement.textContent = cleanerLevel;
  hotelIncomeElement.textContent = getHotelIncome();
  updateHotelButtons();
}

function updateCryptoDisplay() {
  document.getElementById('btcPrice').textContent = cryptoPrices.BTC;
  document.getElementById('ethPrice').textContent = cryptoPrices.ETH;
  document.getElementById('ltcPrice').textContent = cryptoPrices.LTC;
  document.getElementById('xrpPrice').textContent = cryptoPrices.XRP;
  document.getElementById('adaPrice').textContent = cryptoPrices.ADA;
  document.getElementById('solPrice').textContent = cryptoPrices.SOL;
  document.getElementById('btcOwned').textContent = cryptoOwned.BTC;
  document.getElementById('ethOwned').textContent = cryptoOwned.ETH;
  document.getElementById('ltcOwned').textContent = cryptoOwned.LTC;
  document.getElementById('xrpOwned').textContent = cryptoOwned.XRP;
  document.getElementById('adaOwned').textContent = cryptoOwned.ADA;
  document.getElementById('solOwned').textContent = cryptoOwned.SOL;

  // Draw charts
  for (const coin in cryptoHistory) {
    drawChart(coin, cryptoHistory[coin]);
  }
}

function buyCrypto(coin) {
  const amountInput = document.getElementById('buyAmount' + coin);
  const amount = parseInt(amountInput.value) || 1;
  const price = cryptoPrices[coin];
  const totalCost = price * amount;
  if (balance < totalCost) {
    cryptoResult.textContent = "Nemáš dost peněz na koupi " + amount + " " + coin + ".";
    return;
  }
  updateBalance(-totalCost);
  cryptoOwned[coin] += amount;
  cryptoResult.textContent = "Koupil jsi " + amount + " " + coin + " za " + totalCost + " Kč.";
  updateCryptoDisplay();
  if (currentUser) saveUserData();
}

function sellCrypto(coin) {
  const amountInput = document.getElementById('buyAmount' + coin); // Reuse buy input for simplicity
  const amount = parseInt(amountInput.value) || 1;
  if (cryptoOwned[coin] < amount) {
    cryptoResult.textContent = "Nemáš dost " + coin + " na prodej.";
    return;
  }
  const price = cryptoPrices[coin];
  const totalGain = price * amount;
  updateBalance(totalGain);
  cryptoOwned[coin] -= amount;
  cryptoResult.textContent = "Prodal jsi " + amount + " " + coin + " za " + totalGain + " Kč.";
  updateCryptoDisplay();
  if (currentUser) saveUserData();
}

function drawChart(coin, history) {
  const canvas = document.getElementById(coin.toLowerCase() + 'Chart');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  if (history.length < 2) return;

  const maxPrice = Math.max(...history);
  const minPrice = Math.min(...history);
  const priceRange = maxPrice - minPrice || 1;

  // Determine color based on trend
  const last = history[history.length - 1];
  const prev = history[history.length - 2];
  const color = last > prev ? '#00ff00' : last < prev ? '#ff0000' : '#ffffff';

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.shadowColor = color;
  ctx.shadowBlur = 5;
  ctx.beginPath();

  history.forEach((price, index) => {
    const x = (index / (history.length - 1)) * width;
    const y = height - ((price - minPrice) / priceRange) * height;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();
  ctx.shadowBlur = 0; // Reset shadow
}

function randomNormal() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function updateCryptoPrices() {
  for (const coin in cryptoPrices) {
    const volatility = cryptoVolatility[coin] || 0.01;
    const momentum = cryptoMomentum[coin] || 0;
    const shock = randomNormal() * volatility;
    const trend = momentum * 0.8 + shock * 0.2;

    cryptoMomentum[coin] = trend;
    let change = trend;

    // Occasional realistic news spike or dip
    if (Math.random() < 0.03) {
      const eventImpact = randomNormal() * volatility * 4;
      change += eventImpact;
    }

    cryptoPrices[coin] *= 1 + change;
    cryptoPrices[coin] = Math.max(0.01, cryptoPrices[coin]);
    cryptoPrices[coin] = Math.round(cryptoPrices[coin] * 100) / 100;

    // Keep very small coins from jumping too wildly when price is low
    if (cryptoPrices[coin] < 0.5) {
      cryptoPrices[coin] = Math.round(cryptoPrices[coin] * 1000) / 1000;
    }

    cryptoHistory[coin].push(cryptoPrices[coin]);
    if (cryptoHistory[coin].length > 20) {
      cryptoHistory[coin].shift();
    }

    drawChart(coin, cryptoHistory[coin]);
  }
  updateCryptoDisplay();
}

setInterval(updateCryptoPrices, 30000); // Update every 30 seconds

function buyBrokenHotel() {
  if (balance < brokenHotelPrice) {
    hotelResult.textContent = "Na rozbitý hotel nemáš dostatek peněz.";
    return;
  }
  updateBalance(-brokenHotelPrice);
  hotelState = "broken";
  hotelResult.textContent = "Koupil jsi rozbitý hotel. Teď ho musíš opravit.";
  updateHotelStats();
}

function repairHotel() {
  if (hotelState !== "broken") {
    hotelResult.textContent = "Nejdřív musíš koupit rozbitý hotel.";
    return;
  }
  if (balance < repairPrice) {
    hotelResult.textContent = "Na opravu hotelu nemáš dostatek peněz.";
    return;
  }
  updateBalance(-repairPrice);
  hotelState = "repaired";
  hotelResult.textContent = "Hotel je opravený! Teď můžeš koupit kuchyni.";
  updateHotelStats();
}

function buyKitchen() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasKitchen) {
    hotelResult.textContent = "Kuchyně už je koupena.";
    return;
  }
  if (balance < kitchenPrice) {
    hotelResult.textContent = "Na kuchyni nemáš dostatek peněz.";
    return;
  }
  updateBalance(-kitchenPrice);
  hasKitchen = true;
  kitchenLevel = 1;
  hotelResult.textContent = "Koupil jsi kuchyni! Nyní můžeš koupit kuchařku.";
  updateHotelStats();
}

function upgradeKitchen() {
  if (!hasKitchen) {
    hotelResult.textContent = "Nejdřív musíš koupit kuchyni.";
    return;
  }
  if (balance < kitchenUpgradePrice) {
    hotelResult.textContent = "Na vylepšení kuchyně nemáš dostatek peněz.";
    return;
  }
  updateBalance(-kitchenUpgradePrice);
  kitchenLevel += 1;
  hotelResult.textContent = `Kuchyně vylepšena na level ${kitchenLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyCookbook() {
  if (!hasKitchen) {
    hotelResult.textContent = "Nejdřív musíš koupit kuchyni.";
    return;
  }
  if (hasCookbook) {
    hotelResult.textContent = "Kuchařku už máš.";
    return;
  }
  if (balance < cookbookPrice) {
    hotelResult.textContent = "Na kuchařku nemáš dostatek peněz.";
    return;
  }
  updateBalance(-cookbookPrice);
  hasCookbook = true;
  cookbookLevel = 1;
  hotelResult.textContent = "Koupil jsi kuchařku! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradeCookbook() {
  if (!hasCookbook) {
    hotelResult.textContent = "Nejdřív musíš koupit kuchařku.";
    return;
  }
  if (balance < cookbookUpgradePrice) {
    hotelResult.textContent = "Na vylepšení kuchařky nemáš dostatek peněz.";
    return;
  }
  updateBalance(-cookbookUpgradePrice);
  cookbookLevel += 1;
  hotelResult.textContent = `Kuchařka vylepšena na level ${cookbookLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyPool() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasPool) {
    hotelResult.textContent = "Bazén už máš.";
    return;
  }
  if (balance < poolPrice) {
    hotelResult.textContent = "Na bazén nemáš dostatek peněz.";
    return;
  }
  updateBalance(-poolPrice);
  hasPool = true;
  poolLevel = 1;
  hotelResult.textContent = "Koupil jsi bazén! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradePool() {
  if (!hasPool) {
    hotelResult.textContent = "Nejdřív musíš koupit bazén.";
    return;
  }
  if (balance < poolUpgradePrice) {
    hotelResult.textContent = "Na vylepšení bazénu nemáš dostatek peněz.";
    return;
  }
  updateBalance(-poolUpgradePrice);
  poolLevel += 1;
  hotelResult.textContent = `Bazén vylepšen na level ${poolLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyReception() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasReception) {
    hotelResult.textContent = "Recepci už máš.";
    return;
  }
  if (balance < receptionPrice) {
    hotelResult.textContent = "Na recepci nemáš dostatek peněz.";
    return;
  }
  updateBalance(-receptionPrice);
  hasReception = true;
  receptionLevel = 1;
  hotelResult.textContent = "Koupil jsi recepci! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradeReception() {
  if (!hasReception) {
    hotelResult.textContent = "Nejdřív musíš koupit recepci.";
    return;
  }
  if (balance < receptionUpgradePrice) {
    hotelResult.textContent = "Na vylepšení recepce nemáš dostatek peněz.";
    return;
  }
  updateBalance(-receptionUpgradePrice);
  receptionLevel += 1;
  hotelResult.textContent = `Recepce vylepšena na level ${receptionLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyWellness() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasWellness) {
    hotelResult.textContent = "Wellness už máš.";
    return;
  }
  if (balance < wellnessPrice) {
    hotelResult.textContent = "Na wellness nemáš dostatek peněz.";
    return;
  }
  updateBalance(-wellnessPrice);
  hasWellness = true;
  wellnessLevel = 1;
  hotelResult.textContent = "Koupil jsi wellness! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradeWellness() {
  if (!hasWellness) {
    hotelResult.textContent = "Nejdřív musíš koupit wellness.";
    return;
  }
  if (balance < wellnessUpgradePrice) {
    hotelResult.textContent = "Na vylepšení wellness nemáš dostatek peněz.";
    return;
  }
  updateBalance(-wellnessUpgradePrice);
  wellnessLevel += 1;
  hotelResult.textContent = `Wellness vylepšeno na level ${wellnessLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyParking() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasParking) {
    hotelResult.textContent = "Parkování už máš.";
    return;
  }
  if (balance < parkingPrice) {
    hotelResult.textContent = "Na parkování nemáš dostatek peněz.";
    return;
  }
  updateBalance(-parkingPrice);
  hasParking = true;
  parkingLevel = 1;
  hotelResult.textContent = "Koupil jsi parkování! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradeParking() {
  if (!hasParking) {
    hotelResult.textContent = "Nejdřív musíš koupit parkování.";
    return;
  }
  if (balance < parkingUpgradePrice) {
    hotelResult.textContent = "Na vylepšení parkování nemáš dostatek peněz.";
    return;
  }
  updateBalance(-parkingUpgradePrice);
  parkingLevel += 1;
  hotelResult.textContent = `Parkování vylepšeno na level ${parkingLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyCleaner() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (hasCleaner) {
    hotelResult.textContent = "Uklízečku už máš.";
    return;
  }
  if (balance < cleanerPrice) {
    hotelResult.textContent = "Na uklízečku nemáš dostatek peněz.";
    return;
  }
  updateBalance(-cleanerPrice);
  hasCleaner = true;
  cleanerLevel = 1;
  hotelResult.textContent = "Koupil jsi uklízečku! Příjem hotelu je nyní vyšší.";
  updateHotelStats();
}

function upgradeCleaner() {
  if (!hasCleaner) {
    hotelResult.textContent = "Nejdřív musíš koupit uklízečku.";
    return;
  }
  if (balance < cleanerUpgradePrice) {
    hotelResult.textContent = "Na vylepšení uklízečky nemáš dostatek peněz.";
    return;
  }
  updateBalance(-cleanerUpgradePrice);
  cleanerLevel += 1;
  hotelResult.textContent = `Uklízečka vylepšena na level ${cleanerLevel}! Příjem zvýšen.`;
  updateHotelStats();
}

function buyLargeHotel() {
  if (hotelState !== "repaired") {
    hotelResult.textContent = "Nejdřív musíš opravit hotel.";
    return;
  }
  if (balance < 20000) {
    hotelResult.textContent = "Na větší hotel nemáš dostatek peněz.";
    return;
  }
  updateBalance(-20000);
  hotelState = "large";
  hotelResult.textContent = "Koupil jsi větší hotel! Nyní můžeš kupovat více věcí.";
  updateHotelStats();
}

document.getElementById("buyBrokenHotel").addEventListener("click", buyBrokenHotel);
document.getElementById("repairHotel").addEventListener("click", repairHotel);
document.getElementById("buyKitchen").addEventListener("click", buyKitchen);
document.getElementById("buyCookbook").addEventListener("click", buyCookbook);
document.getElementById("buyPool").addEventListener("click", buyPool);
document.getElementById("buyReception").addEventListener("click", buyReception);
document.getElementById("buyWellness").addEventListener("click", buyWellness);
document.getElementById("buyParking").addEventListener("click", buyParking);
document.getElementById("upgradeKitchen").addEventListener("click", upgradeKitchen);
document.getElementById("upgradeCookbook").addEventListener("click", upgradeCookbook);
document.getElementById("upgradePool").addEventListener("click", upgradePool);
document.getElementById("upgradeReception").addEventListener("click", upgradeReception);
document.getElementById("upgradeWellness").addEventListener("click", upgradeWellness);
document.getElementById("upgradeParking").addEventListener("click", upgradeParking);
document.getElementById("buyCleaner").addEventListener("click", buyCleaner);
document.getElementById("upgradeCleaner").addEventListener("click", upgradeCleaner);
document.getElementById("buyLargeHotel").addEventListener("click", buyLargeHotel);

document.getElementById("buyBTC").addEventListener("click", () => buyCrypto("BTC"));
document.getElementById("sellBTC").addEventListener("click", () => sellCrypto("BTC"));
document.getElementById("buyETH").addEventListener("click", () => buyCrypto("ETH"));
document.getElementById("sellETH").addEventListener("click", () => sellCrypto("ETH"));
document.getElementById("buyLTC").addEventListener("click", () => buyCrypto("LTC"));
document.getElementById("sellLTC").addEventListener("click", () => sellCrypto("LTC"));
document.getElementById("buyXRP").addEventListener("click", () => buyCrypto("XRP"));
document.getElementById("sellXRP").addEventListener("click", () => sellCrypto("XRP"));
document.getElementById("buyADA").addEventListener("click", () => buyCrypto("ADA"));
document.getElementById("sellADA").addEventListener("click", () => sellCrypto("ADA"));
document.getElementById("buySOL").addEventListener("click", () => buyCrypto("SOL"));
document.getElementById("sellSOL").addEventListener("click", () => sellCrypto("SOL"));

updateBalance(0);
updateHotelStats();
resetSnake();

// Reaction time game functions
function startReactionTest() {
  if (reactionTestStarted) return;
  
  reactionBox.classList.remove('active', 'missed');
  reactionBox.textContent = '';
  reactionStatus.textContent = translations[currentLang].clicker.waiting;
  reactionTestStarted = true;
  
  const delay = Math.random() * 3000 + 2000; // 2-5 seconds random delay
  reactionDelay = setTimeout(() => {
    reactionBox.classList.add('active');
    reactionStatus.textContent = 'KLIKNI TEĎ!';
    const testStart = Date.now();
    
    const handleClick = () => {
      if (!reactionTestStarted) return;
      
      const reactionTime = Date.now() - testStart;
      currentReactionTime = reactionTime;
      
      reactionBox.classList.remove('active');
      reactionBox.textContent = reactionTime + ' ms';
      reactionBox.removeEventListener('click', handleClick);
      
      reactionTimes.push(reactionTime);
      if (reactionTimes.length > 10) {
        reactionTimes.shift();
      }
      
      if (reactionTime < bestReactionTime) {
        bestReactionTime = reactionTime;
        bestReactionDisplay.textContent = Math.round(bestReactionTime);
      }
      
      reactionTimeDisplay.textContent = reactionTime;
      
      // Reward based on reaction time (faster = more reward)
      let reward = 0;
      if (reactionTime < 200) {
        reward = 100;
      } else if (reactionTime < 300) {
        reward = 75;
      } else if (reactionTime < 400) {
        reward = 50;
      } else if (reactionTime < 500) {
        reward = 25;
      } else {
        reward = 10;
      }
      
      updateBalance(reward);
      totalReactionReward += reward;
      reactionRewardDisplay.textContent = totalReactionReward;
      
      reactionStatus.textContent = `+${reward} Kč za reflexi!`;
      reactionTestStarted = false;
      
      if (currentUser) saveUserData();
    };
    
    reactionBox.addEventListener('click', handleClick);
  }, delay);
}

function resetReactionTest() {
  reactionTestStarted = false;
  if (reactionDelay) {
    clearTimeout(reactionDelay);
    reactionDelay = null;
  }
  reactionBox.classList.remove('active', 'missed');
  reactionBox.textContent = '';
  reactionStatus.textContent = translations[currentLang].clicker.waiting;
  reactionTimeDisplay.textContent = '-';
  if (bestReactionTime !== Infinity) {
    bestReactionDisplay.textContent = Math.round(bestReactionTime);
  }
  reactionRewardDisplay.textContent = totalReactionReward;
}

startReactionButton.addEventListener('click', () => {
  if (!reactionTestStarted) {
    startReactionTest();
  }
});

reactionBox.addEventListener('click', (e) => {
  if (reactionStatus.textContent === translations[currentLang].clicker.waiting || 
      reactionStatus.textContent.includes('ms')) {
    reactionBox.classList.add('missed');
    reactionStatus.textContent = 'Brzy! Čekej na zelený box.';
    reactionTestStarted = false;
    if (reactionDelay) clearTimeout(reactionDelay);
    setTimeout(() => {
      reactionBox.classList.remove('missed');
      reactionStatus.textContent = translations[currentLang].clicker.waiting;
    }, 500);
  }
  e.stopPropagation();
});

// Initialize reaction game display
resetReactionTest();

// Guessing game functions
function guessNumber() {
  const guess = Number(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    guessResult.textContent = "Zadej číslo od 1 do 100.";
    return;
  }
  guessAttempts += 1;
  guessAttemptsElement.textContent = guessAttempts;
  if (guess === targetNumber) {
    totalGuessWins += 1;
    updateBalance(500);
    guessResult.textContent = `Správně! Získal jsi 500 Kč za ${guessAttempts} pokusů.`;
    targetNumber = Math.floor(Math.random() * 100) + 1;
    guessAttempts = 0;
    guessAttemptsElement.textContent = guessAttempts;
    updateLeaderboards();
  } else if (guess < targetNumber) {
    guessResult.textContent = "Vyšší!";
  } else {
    guessResult.textContent = "Nižší!";
  }
  guessInput.value = "";
}

guessButton.addEventListener("click", guessNumber);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") guessNumber();
});

checkLogin();

// Automatické noc každou hodinu
setInterval(() => {
  if (hotelState === "repaired" || hotelState === "large") {
    const earned = getHotelIncome();
    hotelIncomeTotal += earned;
    updateBalance(earned);
    hotelResult.textContent = translations[currentLang].messages.autoNight.replace('{income}', earned);
    nextIncomeTime = Date.now() + 60 * 60 * 1000; // Reset timer
    updateLeaderboards();
    saveUserData();
  }
}, 60 * 60 * 1000); // 1 hodina

// Update income timer every second
setInterval(updateIncomeTimer, 1000);

// Language selector
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// Load saved language
const savedLang = localStorage.getItem('language') || 'cs';
languageSelect.value = savedLang;
setLanguage(savedLang);
