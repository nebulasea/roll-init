var Backgrounds = [
  {
    Acolyte: {
      id: "AcolyteBackground",
      def: [
        "You have spent your life in the service of a temple to a specific god or pantheo" +
            "n of gods.",
        "You act as an intermediary between the realm of the holy and the mortal world, p" +
            "erforming sacred rites and offering sacrifices in order to conduct worshipers in" +
            "to the presence of the divine. You are not necessarily a cleric-performing sacre" +
            "d rites is not the same thing as channeling divine power.",
        "Choose a god, a pantheon of gods, or some other quasi-divine being from among th" +
            "ose listed in appendix B or those specified by your DM, and work with your DM to" +
            " detail the nature of your religious service.",
        "Were you a lesser functionary in a temple, raised from childhood to assist the p" +
            "riests in the sacred rites? Or were you a high priest who suddenly experienced a" +
            " call to serve your god in a different way? Perhaps you were the leader of a sma" +
            "ll cult outside of any established temple structure, or even an occult group tha" +
            "t served a fiendish master that you now deny."
      ],
      skillProf: [
        "Insight", "Religion"
      ],
      languages: 2,
      toolProf: null,
      equipment: [
        "A holy symbol (a gift to you when you entered the priesthood)", "a prayer book or prayer wheel", "5 sticks of incense", "vestments, a set of common clothes", "a belt pouch containing 15 gp"
      ],
      special: null,
      feature: {
        title: "Shelter of the Faithful",
        def: [
          "As an acolyte, you command the respect of those who share your faith, and you ca" +
              "n perform the religious ceremonies of your deity. You and your adventuring compa" +
              "nions can expect to receive free healing and care at a temple, shrine, or other " +
              "established presence of your faith, though you must provide any material compone" +
              "nts needed for spells. Those w ho share your religion will support you (but only" +
              " you) at a modest lifestyle.",
          "You might also have ties to a specific temple dedicated to your chosen deity or " +
              "pantheon, and you have a residence there. This could be the temple where you use" +
              "d to serve, if you remain on good terms with it, or a temple where you have foun" +
              "d a new home. While near your temple, you can call upon the priests for assistan" +
              "ce, provided the assistance you ask for is not hazardous and you remain in good " +
              "standing with your temple."
        ]
      },
      suggestedCharacteristics: "Acolytes are shaped by their experience in temples or other religious communitie" +
        "s. Their study of the history and tenets of their faith and their relationships " +
        "to temples, shrines, or hierarchies affect their mannerisms and ideals. Their fl" +
        "aws might be some hidden hypocrisy or heretical idea, or an ideal or bond taken " +
        "to an extreme.",
      personalityTraits: {
        dice: 8,
        options: [
          "I idolize a particular hero of my faith, and constantly refer to that person’s d" +
              "eeds and example.",
          "I can find common ground between the fiercest of enemies, empathizing with them " +
              "and always working toward peace.",
          "I see omens in every event and action. The gods try to speak to us, we just need" +
              " to listen",
          "Nothing can shake my optimistic attitude.",
          "I quote (or misquote) sacred texts and proverbs in almost every situation.",
          "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worsh" +
              "ip of other gods.",
          "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough l" +
              "iving grates on me.",
          "I’ve spent so long in the temple that I have little practical experience dealing" +
              " with people in the outside world."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Tradition. The ancient traditions of worship and sacrifice must be preserved and" +
              " upheld. (Lawful)",
          "Charity. I always try to help those in need, no matter what the personal cost. (" +
              "Good)",
          "Change. We must help bring about the changes the gods are constantly working in " +
              "the world. (Chaotic)",
          "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Law" +
              "ful)",
          "Faith. I trust that my deity will guide my actions, I have faith that if I work " +
              "hard, things will go well. (Lawful)",
          "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actio" +
              "ns against his or her teachings. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I would die to recover an ancient relic of my faith that was lost long ago.", "I will someday get revenge on the corrupt temple hierarchy who branded me a here" +
              "tic.",
          "I owe my life to the priest who took me in when my parents died.",
          "Everything I do is for the common people.",
          "I will do anything to protect the temple where I served.",
          "I seek to preserve a sacred text that my enemies consider heretical and seek to " +
              "destroy."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I judge others harshly, and myself even more severely.",
          "I put too much trust in those who wield power within my temple’s hierarchy.",
          "My piety sometimes leads me to blindly trust those that profess faith in my god.",
          "I am inflexible in my thinking.",
          "I am suspicious of strangers and expect the worst of them.",
          "Once I pick a goal, I become obsessed with it to the detriment of everything els" +
              "e in my life."
        ]
      },
      variant: null
    },
    Charlatan: {
      id: "CharlatanBackground",
      def: [
        "You have always had a way with people. You know what makes them tick, you can te" +
            "ase out their hearts' desires after a few minutes of conversation, and with a fe" +
            "w leading questions you can read them like they were children's books. It’s a us" +
            "eful talent, and one that you’re perfectly willing to use for your advantage.",
        "You know what people want and you deliver, or rather, you promise to deliver. Co" +
            "mmon sense should steer people away from things that sound too good to be true, " +
            "but common sense seems to be in short supply when you’re around. The bottle of p" +
            "ink-colored liquid will surely cure that unseemly rash, this ointment—nothing mo" +
            "re than a bit of fat with a sprinkle of silver dust—can restore youth and vigor," +
            " and there’s a bridge in the city that just happens to be for sale. These marvel" +
            "s sound implausible, but you make them sound like the real deal."
      ],
      skillProf: [
        "Deception", "Sleight of Hand"
      ],
      languages: null,
      toolProf: [
        "Disguise kit", "forgery kit"
      ],
      equipment: [
        "A set of fine clothes", "A disguise kit", "tools of the con of your choice (ten stoppered bottles filled with colored liqui" +
            "d, a set of weighted dice, a deck of marked cards or a signet ring of an imagina" +
            "ry duke)",
        "a belt pouch containing 15 gp"
      ],
      special: {
        title: "Favorite Scheme",
        def: ["Every charlatan has an angle he or she uses in preference to other schemes. Choo" +
            "se a favorite scam."],
        options: [
          "I cheat at games of chance.", "I shave coins or forge documents.", "I insinuate myself into people’s lives to prey on their weakness and secure thei" +
              "r fortunes.",
          "I put on new identities like clothes.",
          "I run sleight-of-hand cons on street corners.",
          "I convince people that worthless junk is worth their hard-earned money."
        ]
      },
      feature: {
        title: "False Identity",
        def: [
          "You have created a second identity that includes documentation, established acqu" +
              "aintances, and disguises that allow you to assume that persona.",
          "Additionally, you can forge documents including official papers and personal let" +
              "ters, as long as you have seen an example of the kind of document or the handwri" +
              "ting you are trying to copy."
        ]
      },
      suggestedCharacteristics: "Charlatans are colorful characters w ho conceal their true selves behind the mas" +
        "ks they construct. They reflect what people want to see, what they want to belie" +
        "ve, and how they see the world. But their true selves are sometimes plagued by a" +
        "n uneasy conscience, an old enemy, or deep-seated trust issues.",
      personalityTraits: {
        dice: 8,
        options: [
          "I fall in and out of love easily, and am always pursuing someone.", "I have a joke for every occasion, especially occasions where humor is inappropri" +
              "ate.",
          "Flattery is my preferred trick for getting what I want.",
          "I’m a born gambler who can't resist taking a risk for a potential payoff.",
          "I lie about almost everything, even when there’s no good reason to.",
          "Sarcasm and insults are my weapons of choice.",
          "I keep multiple holy symbols on me and invoke whatever deity might come in usefu" +
              "l at any given moment.",
          "I pocket anything I see that might have some value."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Independence. I am a free spirit— no one tells me what to do. (Chaotic)", "Fairness. I never target people who can’t afford to lose a few coins. (Lawful)", "Charity. I distribute the money I acquire to the people who really need it. (Goo" +
              "d)",
          "Creativity. I never run the same con twice. (Chaotic)",
          "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
          "Aspiration. I’m determined to make something of myself. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I fleeced the wrong person and must work to ensure that this individual never cr" +
              "osses paths with me or those I care about.",
          "I owe everything to my mentor—a horrible person who’s probably rotting in jail s" +
              "omewhere.",
          "Somewhere out there, I have a child who doesn't know me. I’m making the world be" +
              "tter for him or her.",
          "I come from a noble family, and one day I’ll reclaim my lands and title from tho" +
              "se who stole them from me.",
          "A powerful person killed someone I love. Some day soon, I’ll have my revenge.",
          "I swindled and ruined a person who didn't deserve it. I seek to atone for my mis" +
              "deeds but might never be able to forgive myself."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I can’t resist a pretty face.", "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than" +
              " I bring them in.",
          "I’m convinced that no one could ever fool me the way I fool others.",
          "I’m too greedy for my own good. I can’t resist taking a risk if there’s money in" +
              "volved.",
          "I can’t resist swindling people who are more powerful than me.",
          "I hate to admit it and will hate myself for it, but I'll run and preserve my own" +
              " hide if the going gets tough."
        ]
      },
      variant: null
    },
    Criminal: {
      id: "CriminalBackground",
      def: ["You are an experienced criminal with a history of breaking the law. You have spe" +
          "nt a lot of time among other criminals and still have contacts within the crimin" +
          "al underworld. You’re far closer than m ost people to the world of murder, theft" +
          ", and violence that pervades the underbelly of civilization, and you have surviv" +
          "ed up to this point by flouting the rules and regulations of society."],
      skillProf: [
        "Deception", "Stealth"
      ],
      languages: null,
      toolProf: ["One type of gaming set, thieves’ tools"],
      equipment: [
        "A crowbar", "A set of dark common clothes including a hood", "a belt pouch containing 15 gp"
      ],
      special: {
        title: "Criminal Specialty",
        def: ["There are many kinds of criminals, and within a thieves’ guild or similar crimin" +
            "al organization, individual members have particular specialties. Even criminals " +
            "who operate outside of such organizations have strong preferences for certain ki" +
            "nds of crimes over others. Choose the role you played in your criminal life."],
        options: [
          "Blackmailer",
          "Highway robber",
          "Burglar",
          "Hired killer",
          "Enforcer",
          "Pickpocket",
          "Fence",
          "Smuggler"
        ]
      },
      feature: {
        title: "Criminal Contact",
        def: ["You have a reliable and trustworthy contact w ho acts as your liaison to a netwo" +
            "rk of other criminals. You know how to get messages to and from your contact, ev" +
            "en over great distances; specifically, you know the local messengers, corrupt ca" +
            "ravan masters, and seedy sailors who can deliver messages for you."]
      },
      suggestedCharacteristics: "Criminals might seem like villains on the surface, and many of them are villaino" +
        "us to the core. But some have an abundance of endearing, if not redeeming, chara" +
        "cteristics. There might be honor among thieves, but criminals rarely show any re" +
        "spect for law or authority.",
      personalityTraits: {
        dice: 8,
        options: [
          "I always have a plan for what to do when things go wrong.", "I am always calm, no matter what the situation. I never raise my voice or let my" +
              " emotions control.",
          "The first thing I do in a new place is note the locations of everything valuable" +
              " or where such things could be hidden.",
          "I would rather make a new friend than a new enemy",
          "I am incredibly slow to trust. Those who seem the fairest often have the most to" +
              " hide.",
          "I don't pay attention to the risks in a situation. Never tell me the odds",
          "The best way to get me to do something is to tell me I can't do it.",
          "I blow up at the slightest insult."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Honor. I don’t steal from others in the trade. (Lawful)", "Freedom. Chains are meant to be broken, as are those who would forge them. (Chao" +
              "tic)",
          "Charity. I steal from the wealthy so that I can help people in need. (Good)",
          "Greed. I will do whatever it takes to become wealthy. (Evil)",
          "People. I’m loyal to my friends, not to any ideals, and everyone else can take a" +
              " trip down the Styx for all I care. (Neutral)",
          "Redemption. There's a spark of good in everyone."
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I’m trying to pay off an old debt I owe to a generous benefactor.",
          "My ill-gotten gains go to support my family.",
          "Something important was taken from me, and I aim to steal it back.",
          "I will become the greatest thief that ever lived.",
          "I’m guilty of a terrible crime. I hope I can redeem myself for it.",
          "Someone I loved died because of a mistake I made. That will never happen again."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "When I see something valuable, I can’t think about anything but how to steal it.", "When faced with a choice between money and my friends, I usually choose the mone" +
              "y.",
          "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.",
          "I have a “tell” that reveals when I'm lying.",
          "I turn tail and run when things look bad.",
          "An innocent person is in prison for a crime that I committed. I’m okay with that" +
              "."
        ]
      },
      variant: {
        title: "Spy",
        def: ["Although your capabilities are not much different from those of a burglar or smu" +
            "ggler, you learned and practiced them in a very different context: as an espiona" +
            "ge agent. You might have been an officially sanctioned agent of the crown, or pe" +
            "rhaps you sold the secrets you uncovered to the highest bidder."]
      }
    },
    Entertainer: {
      id: "EntertainerBackground",
      def: ["You thrive in front of an audience. You know how to entrance them, entertain the" +
          "m, and even inspire them. Your poetics can stir the hearts of those who hear you" +
          ", awakening grief or joy, laughter or anger. Your music raises their spirits or " +
          "captures their sorrow. Your dance steps captivate, your humor cuts to the quick." +
          " Whatever techniques you use, your art is your life."],
      skillProf: [
        "Acrobatics", "Performance"
      ],
      languages: null,
      toolProf: [
        "Disguise kit", "One type of musical instrument"
      ],
      equipment: [
        "A musical instrument (one of your choice)", "The favor of an admirer (love letter, lock of hair, or trinket)", "a costume", "a belt pouch containing 15 gp"
      ],
      special: {
        title: "Entertainer Routines",
        def: ["A good entertainer is versatile, spicing up every performance with a variety of " +
            "different routines. Choose one to three routines or roll on the table below to d" +
            "efine your expertise as an entertainer."],
        option: [
          "Actor",
          "Instrumentalist",
          "Dancer",
          "Poet",
          "Fire-eater",
          "Singer",
          "Jester",
          "Storyteller",
          "Juggler",
          "Tumbler"
        ]
      },
      feature: {
        title: "By Popular Demand",
        def: ["You can always find a place to perform, usually in an inn or tavern but possibly" +
            " with a circus, at a theater, or even in a noble’s court. At such a place, you r" +
            "eceive free lodging and food of a modest or comfortable standard (depending on t" +
            "he quality of the establishment), as long as you perform each night. In addition" +
            ", your performance makes you something of a local figure. When strangers recogni" +
            "ze you in a town where you have performed, they typically take a liking to you."]
      },
      suggestedCharacteristics: "Successful entertainers have to be able to capture and hold an audience’s attent" +
        "ion, so they tend to have flamboyant or forceful personalities. They’re inclined" +
        " toward the romantic and often cling to high-minded ideals about the practice of" +
        " art and the appreciation of beauty.",
      personalityTraits: {
        dice: 8,
        options: [
          "I know a story relevant to almost every situation.", "Whenever I come to a new place, I collect local rumors and spread gossip.", "I’m a hopeless romantic, always searching for that 'special someone'.", "Nobody stays angry at me or around me for long, since I can defuse any amount of" +
              " tension.",
          "I love a good insult, even one directed at me.",
          "I get bitter if I’m not the center of attention.",
          "I’ll settle for nothing less than perfection.",
          "I change my mood or my mind as quickly as I change key in a song."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Beauty. When I perform, I make the world better than it was. (Good)", "Tradition. The stories, legends, and songs of the past must never be forgotten, " +
              "for they teach us who we are. (Lawful)",
          "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
          "Greed. I’m only in it for the money and fame. (Evil)",
          "People. I like seeing the smiles on people’s faces when I perform. That’s all th" +
              "at matters. (Neutral)",
          "Honesty. Art should reflect the soul; it should come from within and reveal who " +
              "we really are. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "My instrument is my most treasured possession, and it reminds me of someone I lo" +
              "ve.",
          "Someone stole my precious instrument, and someday I’ll get it back.",
          "I want to be famous, whatever it takes.",
          "I idolize a hero of the old tales and measure my deeds against that person’s.",
          "I will do anything to prove myself superior to my hated rival.",
          "I would do anything for the other members of my old troupe."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I’ll do anything to win fame and renown.", "I’m a sucker for a pretty face.", "A scandal prevents me from ever going home again. That kind of trouble seems to " +
              "follow me around.",
          "I once satirized a noble who still wants my head. It was a mistake that I will l" +
              "ikely repeat.",
          "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trou" +
              "ble.",
          "Despite my best efforts, I am unreliable to my friends."
        ]
      },
      variant: {
        title: "Gladiator",
        def: ["A gladiator is as much an entertainer as any minstrel or circus performer, train" +
            "ed to make the arts of combat into a spectacle the crowd can enjoy. This kind of" +
            " flashy combat is your entertainer routine, though you might also have some skil" +
            "ls as a tumbler or actor. Using your By Popular Demand feature, you can find a p" +
            "lace to perform in any place that features combat for entertainment—perhaps a gl" +
            "adiatorial arena or secret pit fighting club. You can replace the musical instru" +
            "ment in your equipment package with an inexpensive but unusual weapon, such as a" +
            " trident or net."]
      }
    },
    "Folk Hero": {
      id: "FolkHeroBackground",
      def: ["You come from a humble social rank, but you are destined for so much more. Alrea" +
          "dy the people of your home village regard you as their champion, and your destin" +
          "y calls you to stand against the tyrants and monsters that threaten the common f" +
          "olk everywhere."],
      skillProf: [
        "Animal Handling", "Survival"
      ],
      languages: null,
      toolProf: [
        "Disguise kit", "One type of musical instrument"
      ],
      equipment: [
        "A set of artisan’s tools (one of your choice)", "A shovel", "An iron pot", "A set of common clothes", "A belt pouch containing 10 gp"
      ],
      special: {
        title: "Defining Event",
        def: ["You previously pursued a simple profession among the peasantry, perhaps as a far" +
            "mer, miner, servant, shepherd, woodcutter, or gravedigger. But something happene" +
            "d that set you on a different path and marked you for greater things. Choose or " +
            "randomly determine a defining event that marked you as a hero of the people."],
        options: [
          "I stood up to a tyrant’s agents.",
          "I saved people during a natural disaster.",
          "I stood alone against a terrible monster.",
          "I stole from a corrupt merchant to help the poor.",
          "I led a militia to fight off an invading army.",
          "I broke into a tyrant’s castle and stole weapons to arm the people.",
          "I trained the peasantry to use farm implements as weapons against a tyrant’s sol" +
              "diers.",
          "A lord rescinded an unpopular decree after I led a symbolic act of protect again" +
              "st it.",
          "A celestial, fey, or similar creature gave me a blessing or revealed my secret o" +
              "rigin.",
          "Recruited into a lord’s army, I rose to leadership and was commended for my hero" +
              "ism."
        ]
      },
      feature: {
        title: "Rustic Hospitality",
        def: ["Since you come from the ranks of the common folk, you fit in among them with eas" +
            "e. You can find a place\ to hide, rest, or recuperate among other commoners, unl" +
            "ess you have shown yourself to be a danger to them. They will shield you from th" +
            "e law or anyone else searching for you, though they will not risk their lives fo" +
            "r you."]
      },
      suggestedCharacteristics: "A folk hero is one of the common people, for better or for worse. Most folk hero" +
        "es look on their humble origins as a virtue, not a shortcoming, and their home c" +
        "ommunities remain very important to them.",
      personalityTraits: {
        dice: 8,
        options: [
          "I judge people by their actions, not their words.", "If someone is in trouble, I’m always ready to lend help.", "When I set my mind to something, I follow through no matter what gets in my way.", "I have a strong sense of fair play and always try to find the most equitable sol" +
              "ution to arguments.",
          "I’m confident in my own abilities and do what I can to instill confidence in oth" +
              "ers.",
          "Thinking is for other people. I prefer action.",
          "I misuse long words in an attempt to sound smarter.",
          "I get bored easily. When am I going to get on with my destiny?"
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Respect. People deserve to be treated with dignity and respect. (Good)", "Fairness. No one should get preferential treatment before the law, and no one is" +
              " above the law. (Lawful)",
          "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
          "Might. If I become strong, I can take what I want— what I deserve. (Evil)",
          "Sincerity. There’s no good in pretending to be something I’m not. (Neutral)",
          "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I have a family, but I have no idea where they are. One day, I hope to see them " +
              "again.",
          "I worked the land, I love the land, and I will protect the land.",
          "A proud noble once gave me a horrible beating, and I will take my revenge on any" +
              " bully I encounter.",
          "My tools are symbols of my past life, and I carry them so that I will never forg" +
              "et my roots.",
          "I protect those who cannot protect themselves.",
          "I wish my childhood sweetheart had come with me to pursue my destiny."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "The tyrant who rules my land will stop at nothing to see me killed.", "I’m convinced of the significance of my destiny, and blind to my shortcomings an" +
              "d the risk of failure.",
          "The people who knew me when I was young know my shameful secret, so I can never " +
              "go home again.",
          "I have a weakness for the vices of the city, especially hard drink.",
          "Secretly, I believe that things would be better if I were a tyrant lording over " +
              "the land.",
          "I have trouble trusting in my allies."
        ]
      },
      variant: null
    },
    "Guild Artisan": {
      id: "GuildArtisanBackground",
      def: ["You are a member of an artisan’s guild, skilled in a particular field and closel" +
          "y associated with other artisans. You are a well-established part of the mercant" +
          "ile world, freed by talent and wealth from the constraints of a feudal social or" +
          "der. You learned your skills as an apprentice to a master artisan, under the spo" +
          "nsorship of your guild, until you became a master in your own right."],
      skillProf: [
        "Insight", "Persuasion"
      ],
      languages: 1,
      toolProf: ["One type of artisan’s tools"],
      equipment: [
        "A set of artisan’s tools (one of your choice)", "A letter of introduction from your guild", "A set of traveler’s clothes", "A belt pouch containing 15 gp"
      ],
      special: {
        title: "Guild Business",
        def: [
          "Guilds are generally found in cities large enough to support several artisans pr" +
              "acticing the same trade. However, your guild might instead be a loose network of" +
              " artisans w ho each work in a different village within a larger realm. Work with" +
              " your DM to determine the nature of your guild. You can select your guild busine" +
              "ss from the Guild Business table or roll randomly.",
          "As a member of your guild, you know the skills needed to create finished items f" +
              "rom raw materials (reflected in your proficiency with a certain kind of artisan’" +
              "s tools), as w ell as the principles of trade and good business practices. The q" +
              "uestion now is whether you abandon your trade for adventure, or take on the extr" +
              "a effort to weave adventuring and trade together."
        ],
        options: [
          "Alchemists and apothecaries",
          "Armorers, locksmiths, and fine-smiths",
          "Brewers, distillers, and vintners",
          "Calligraphers, scribes, and scriveners",
          "Carpenters, roofers, and plasterers",
          "Cartographers, surveyors, and chart-makers",
          "Cobblers and shoemakers",
          "Cooks and bakers",
          "Glassblowers and glaziers",
          "Jewelers and gem-cutters",
          "Leather-workers, skinners, and tanners",
          "Masons and stone-cutters",
          "Painters, limners, and sign-makers",
          "Potters and tile-makers",
          "Shipwrights and sail-makers",
          "Smiths and metal-forgers",
          "Tinkers, pewterers, and casters",
          "Wagon-makers and wheelwrights",
          "Weavers and dyers",
          "Woodcarvers, coopers, and bowyers"
        ]
      },
      feature: {
        title: "Guild Membership",
        def: [
          "As an established and respected member of a guild, you can rely on certain benef" +
              "its that membership provides.",
          "Your fellow guild members will provide you with lodging and food if necessary, a" +
              "nd pay for your funeral if needed. In some cities and towns, a guildhall offers " +
              "a central place to meet other members of your profession, which can be a good pl" +
              "ace to meet potential patrons, allies, or hirelings.",
          "Guilds often wield tremendous political power. If you are accused of a crime, yo" +
              "ur guild w ill support you if a good case can be made for your innocence or the " +
              "crime is justifiable. You can also gain access to powerful political figures thr" +
              "ough the guild, if you are a member in good standing. Such connections might req" +
              "uire the donation of money or magic items to the guild’s coffers. You must pay d" +
              "ues of 5 gp per month to the guild. If you miss payments, you must make up back " +
              "dues to remain in the guild’s good graces."
        ]
      },
      suggestedCharacteristics: "Guild artisans are among the most ordinary people in the world—until they set do" +
        "wn their tools and take up an adventuring career. They understand the value of h" +
        "ard work and the importance of community, but they’re vulnerable to sins of gree" +
        "d and covetousness.",
      personalityTraits: {
        dice: 8,
        options: [
          "I believe that anything worth doing is worth doing right. I can’t help it— I’m a" +
              " perfectionist.",
          "I’m a snob who looks down on those who can’t appreciate fine art.",
          "I always want to know how things work and what makes people tick.",
          "I’m full of witty aphorisms and have a proverb for every occasion.",
          "I’m rude to people who lack my commitment to hard work and fair play.",
          "I like to talk at length about my profession.",
          "I don’t part with my money easily and will haggle tirelessly to get the best dea" +
              "l possible.",
          "I’m well known for my work, and I want to make sure everyone appreciates it. I'm" +
              " always taken aback when people haven’t heard of me."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Community. It is the duty of all civilized people to strengthen the bonds of com" +
              "munity and the security of civilization. (Lawful)",
          "Generosity. My talents were given to me so that I could use them to benefit the " +
              "world. (Good)",
          "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
          "Greed. I’m only in it for the money. (Evil)",
          "People. I’m committed to the people I care about, not to ideals. (Neutral)",
          "Aspiration. I work hard to be the best there is at my craft."
        ]
      },

      bond: {
        dice: 6,
        options: [
          "The workshop where I learned my trade is the most important place in the world t" +
              "o me.",
          "I created a great work for someone, and then found them unworthy to receive it. " +
              "I’m still looking for someone worthy.",
          "I owe my guild a great debt for forging me into the person I am today.",
          "I pursue wealth to secure someone’s love.",
          "One day I will return to my guild and prove that I am the greatest artisan of th" +
              "em all.",
          "I will get revenge on the evil forces that destroyed my place of business and ru" +
              "ined my livelihood."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I’ll do anything to get my hands on something rare or priceless.",
          "I’m quick to assume that someone is trying to cheat me.",
          "No one must ever learn that I once stole money from guild coffers.",
          "I’m never satisfied with what I have— I always want more.",
          "I would kill to acquire a noble title.",
          "I’m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I" +
              "’m surrounded by rivals."
        ]
      },
      variant: {
        title: "Guild Merchant",
        def: [
          "Instead of an artisans’ guild, you might belong to a guild of traders, caravan m" +
              "asters, or shopkeepers. You don’t craft items yourself but earn a living by buyi" +
              "ng and selling the works of others (or the raw materials artisans need to practi" +
              "ce their craft). Your guild might be a large merchant consortium (or family) wit" +
              "h interests across the region. Perhaps you transported goods from one place to a" +
              "nother, by ship, wagon, or caravan, or bought them from traveling traders and so" +
              "ld them in your own little shop. In some ways, the traveling merchant’s life len" +
              "ds itself to adventure far more than the life of an artisan.",
          "Rather than proficiency with artisan’s tools, you might be proficient with navig" +
              "ator’s tools or an additional language. And instead of artisan’s tools, you can " +
              "start with a mule and a cart."
        ]
      }
    },
    Hermit: {
      id: "HermitBackground",
      def: ["You lived in seclusion—either in a sheltered community such as a monastery, or e" +
          "ntirely a lone—for a formative part of your life. In your time apart from the cl" +
          "amor of society, you found quiet, solitude, and perhaps some of the answers you " +
          "were looking for."],
      skillProf: [
        "Medicine", "Religion"
      ],
      languages: 1,
      toolProf: ["Herbalism kit"],
      equipment: [
        "A scroll case stuffed full of notes from your studies or prayers", "A winter blanket", "A set of common clothes", "An herbalism kit", "5 gp"
      ],
      special: {
        title: "Life of Seclusion",
        def: ["What w as the reason for your isolation, and what changed to allow you to end yo" +
            "ur solitude? You can w ork with your DM to determine the exact nature of your se" +
            "clusion, or you can choose or roll on the table below to determine the reason be" +
            "hind your seclusion."],
        options: [
          "I was searching for spiritual enlightenment.", "I was partaking of communal living in accordance with the dictates of a religiou" +
              "s order.",
          "I was exiled for a crime I didn't commit.",
          "I retreated from society after a life-altering event.",
          "I needed a quiet place to work on my art, literature, music, or manifesto.",
          "I needed to commune with nature, far from civilization.",
          "I was the caretaker of an ancient ruin or relic.",
          "I was a pilgrim in search of a person, place, or relic of spiritual significance" +
              "."
        ]
      },
      feature: {
        title: "Discovery",
        def: [
          "The quiet seclusion of your extended hermitage gave you access to a unique and p" +
              "owerful discovery. The exact nature of this revelation depends on the nature of " +
              "your seclusion. It might be a great truth about the cosmos, the deities, the pow" +
              "erful beings of the outer planes, or the forces of nature. It could be a site th" +
              "at no one else has ever seen. You might have uncovered a fact that has long been" +
              " forgotten, or unearthed some relic of the past that could rewrite history. It m" +
              "ight be information that would be damaging to the people w ho or consigned you t" +
              "o exile, and hence the reason for your return to society.",
          "Work with your DM to determine the details of your discovery and its impact on t" +
              "he campaign."
        ]
      },
      suggestedCharacteristics: "Some hermits are w ell suited to a life of seclusion, whereas others chafe again" +
        "st it and long for company. Whether they embrace solitude or long to escape it, " +
        "the solitary life shapes their attitudes and ideals. A few are driven slightly m" +
        "ad by their years apart from society.",
      personalityTraits: {
        dice: 8,
        options: [
          "I’ve been isolated for so long that I rarely speak, preferring gestures and the " +
              "occasional grunt.",
          "I am utterly serene, even in the face of disaster.",
          "The leader of my community had something wise to say on every topic, and I am ea" +
              "ger to share that wisdom.",
          "I feel tremendous empathy for all who suffer.",
          "I’m oblivious to etiquette and social expectations.",
          "I connect everything that happens to me to a grand, cosmic plan.",
          "I often get lost in my own thoughts and contemplation, becoming oblivious to my " +
              "surroundings.",
          "I am working on a grand philosophical theory and love sharing my ideas."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Greater Good. My gifts are meant to be shared with all, not used for my own bene" +
              "fit. (Good)",
          "Logic. Emotions must not cloud our sense of what is right and true, or our logic" +
              "al thinking. (Lawful)",
          "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
          "Power. Solitude and contemplation are paths toward mystical or magical power. (E" +
              "vil)",
          "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutr" +
              "al)",
          "Self-Knowledge. If you know yourself, there’s nothing left to know. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "Nothing is more important than the other members of my hermitage, order, or asso" +
              "ciation.",
          "I entered seclusion to hide from the ones who might still be hunting me. I must " +
              "someday confront them.",
          "I’m still seeking the enlightenment I pursued in my seclusion, and it still elud" +
              "es me.",
          "I entered seclusion because I loved someone I could not have.",
          "Should my discovery come to light, it could bring ruin to the world.",
          "My isolation gave me great insight into a great evil that only I can destroy."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "Now that I've returned to the world, I enjoy its delights a little too much.", "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to " +
              "quell.",
          "I am dogmatic in my thoughts and philosophy.",
          "I let my need to win arguments overshadow friendships and harmony.",
          "I’d risk too much to uncover a lost bit of knowledge.",
          "I like keeping secrets and won’t share them with anyone."
        ]
      },
      variant: {
        title: "Other Hermits",
        def: ["This hermit background assumes a contemplative sort of seclusion that allows roo" +
            "m for study and prayer. If you want to play a rugged wilderness recluse who live" +
            "s off the land while shunning the company of other people, look at the outlander" +
            " background. On the other hand, if you want to go in a more religious direction," +
            " the acolyte might b e what you’re looking for. Or you could even be a charlatan" +
            ", posing as a wise and holy person and letting pious fools support you."]
      }
    },
    Noble: {
      id: "NobleBackground",
      def: [
        "You understand wealth, power, and privilege. You carry a noble title, and your f" +
            "amily owns land, collects taxes, and wields significant political influence. You" +
            " might be a pampered aristocrat unfamiliar with work or discomfort, a former mer" +
            "chant just elevated to the nobility, or a disinherited scoundrel with a dispropo" +
            "rtionate sense of entitlement. Or you could be an honest, hard-working landowner" +
            " who cares deeply about the people who live and w ork on your land, keenly aware" +
            " of your responsibility to them.",
        "Work with your DM to come up with an appropriate title and determine how much au" +
            "thority that title carries. A noble title doesn't stand on its own—it’s connecte" +
            "d to an entire family, and whatever title you hold, you will pass it down to you" +
            "r own children. Not only do you need to determine your noble title, but you shou" +
            "ld also work with the DM to describe your family and their influence on you.",
        "Is your family old and established, or was your title only recently bestowed? Ho" +
            "w much influence do they wield, and over what area? What kind of reputation does" +
            " your family have among the other aristocrats of the region? How do the common p" +
            "eople regard them? What’s your position in the family? Are you the heir to the h" +
            "ead of the family? Have you already inherited the title? Are you in your family’" +
            "s good graces, or shunned by the rest of your family? Does your family have a co" +
            "at of arms? An insignia you might w ear on a signet ring? Particular colors you " +
            "w ear all the time? An animal you regard as a symbol?",
        "These details help establish your family and your title as features of the world" +
            " of the campaign."
      ],
      skillProf: [
        "History", "Persuasion"
      ],
      languages: 1,
      toolProf: ["One type of gaming set"],
      equipment: [
        "A set of fine clothes", "A signet ring", "A scroll of pedigree", "A purse containing 25 gp"
      ],
      special: null,
      feature: {
        title: "Position of Privilege",
        def: ["Thanks to your noble birth, people are inclined to think the best of you. You ar" +
            "e welcome in high society, and people assume you have the right to be wherever y" +
            "ou are. The common folk make every effort to accommodate you and avoid your disp" +
            "leasure, and other people of high birth treat you as a member of the same social" +
            " sphere. You can secure an audience with a local noble if you need to."]
      },
      suggestedCharacteristics: "Nobles are born and raised to a very different lifestyle than most people ever e" +
        "xperience, and their personalities reflect that upbringing. A noble title comes " +
        "with a plethora of bonds—responsibilities to family, to other nobles (including " +
        "the sovereign), to the people entrusted to the family’s care, or even to the tit" +
        "le itself. But this responsibility is often a good way to undermine a noble.",
      personalityTraits: {
        dice: 8,
        options: [
          "My eloquent flattery makes everyone I talk to feel like the most wonderful and i" +
              "mportant person in the world.",
          "The common folk love me for my kindness and generosity.",
          "No one could doubt by looking at my regal bearing that I am a cut above the unwa" +
              "shed masses.",
          "I take great pains to always look my best and follow the latest fashions.",
          "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable acc" +
              "ommodations.",
          "Despite my noble birth, I do not place myself above other folk. We all have the " +
              "same blood.",
          "My favor, once lost, is lost forever.",
          "If you do me an injury, I will crush you, ruin your name, and salt your fields."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Respect. Respect is due to me because of my position, but all people regardless " +
              "of station deserve to be treated with dignity. (Good)",
          "Responsibility. It is my duty to respect the authority of those above me, just a" +
              "s those below me must respect mine. (Lawful)",
          "Independence. I must prove that I can handle myself without the coddling of my f" +
              "amily. (Chaotic)",
          "Power. If I can attain more power, no one will tell me what to do. (Evil)",
          "Family. Blood runs thicker than water. (Any)",
          "Noble Obligation. It is my duty to protect and care for the people beneath me. (" +
              "Good)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I will face any challenge to win the approval of my family.",
          "My house’s alliance with another noble family must be sustained at all costs.",
          "Nothing is more important than the other members of my family.",
          "I am in love with the heir of a family that my family despises.",
          "My loyalty to my sovereign is unwavering.",
          "The common folk must see me as a hero of the people."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I secretly believe that everyone is beneath me.", "I hide a truly scandalous secret that could ruin my family forever.", "I too often hear veiled insults and threats in every word addressed to me, and I" +
              "’m quick to anger.",
          "I have an insatiable desire for carnal pleasures.",
          "In fact, the world does revolve around me.",
          "By my words and actions, I often bring shame to my family."
        ]
      },
      variant: {
        title: "Knight",
        def: [
          "A knighthood is among the lowest noble titles in most societies, but it can be a" +
              " path to higher status. If you wish to be a knight, choose the Retainers feature" +
              " instead of the Position of Privilege feature.",
          "One of your commoner retainers is replaced by a noble who serves as your squire," +
              " aiding you in exchange for training on his or her own path to knighthood. Your " +
              "two remaining retainers might include a groom to care for your horse and a serva" +
              "nt who polishes your armor (and even helps you put it on).",
          "As an emblem of chivalry and the ideals of courtly love, you might include among" +
              " your equipment a banner or other token from a noble lord or lady to w hom you h" +
              "ave given your heart—in a chaste sort of devotion. (This person could be your bo" +
              "nd.)"
        ],
        feature: {
          title: "Retainers",
          def: [
            "If your character has a noble background, you may select this background feature" +
                " instead of Position of Privilege. You have the service of three retainers loyal" +
                " to your family.",
            "These retainers can be attendants or messengers, and one might be a majordomo. Y" +
                "our retainers are commoners who can perform mundane tasks for you, but they do n" +
                "ot fight for you, will not follow you into obviously dangerous areas (such as du" +
                "ngeons), and will leave if they are frequently endangered or abused."
          ]
        }
      }
    },
    Outlander: {
      id: "OutlanderBackground",
      def: ["You grew up in the wilds, far from civilization and the comforts of town and tec" +
          "hnology. You’ve witnessed the migration of herds larger than forests, survived w" +
          "eather more extreme than any city-dweller could comprehend, and enjoyed the soli" +
          "tude of being the only thinking creature for miles in any direction. The wilds a" +
          "re in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gat" +
          "herer, or even a marauder. Even in places where you don’t know the specific feat" +
          "ures of the terrain, you know the ways of the wild."],
      skillProf: [
        "Athletics", "Survival"
      ],
      languages: 1,
      toolProf: ["One type of musical instrument"],
      equipment: [
        "A staff", "A hunting trap", "A trophy from an animal you killed", "A set of traveler’s clothes", "A belt pouch containing 10 gp"
      ],
      special: {
        title: "Origin",
        def: ["You've been to strange places and seen things that others cannot begin to fathom" +
            ". Consider some of the distant lands you have visited, and how they impacted you" +
            ". You can roll on the following table to determine your occupation during your t" +
            "ime in the wild, or choose one that best fits your character."],
        options: [
          "Forester",
          "Bounty hunter",
          "Trapper",
          "Pilgrim",
          "Homesteader",
          "Tribal nomad",
          "Guide",
          "Hunter-gatherer",
          "Exile or outcast",
          "Tribal marauder"
        ]
      },
      feature: {
        title: "Wanderer",
        def: ["You have an excellent memory for maps and geography, and you can always recall t" +
            "he general layout of terrain, settlements, and other features around you. In add" +
            "ition, you can find food and fresh water for yourself and up to five other peopl" +
            "e each day, provided that the land offers berries, small game, water, and sofort" +
            "h."]
      },
      suggestedCharacteristics: "Often considered rude and uncouth among civilized folk, outlanders have little r" +
        "espect for the niceties of life in the cities. The ties of tribe, clan, family, " +
        "and the natural world of which they are a part are the most important bonds to m" +
        "ost outlanders.",
      personalityTraits: {
        dice: 8,
        options: [
          "I’m driven by a wanderlust that led me away from home.", "I watch over my friends as if they were a litter of newborn pups.", "I once ran twenty-five miles without stopping to warn to my clan of an approachi" +
              "ng orc horde. I’d do it again if I had to.",
          "I have a lesson for every situation, drawn from observing nature.",
          "I place no stock in wealthy or well-mannered folk. Money and manners won’t save " +
              "you from a hungry owlbear.",
          "I’m always picking things up, absently fiddling with them, and sometimes acciden" +
              "tally breaking them.",
          "I feel far more comfortable around animals than people.",
          "I was, in fact, raised by wolves."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Change. Life is like the seasons, in constant change, and we must change with it" +
              ". (Chaotic)",
          "Greater Good. It is each person’s responsibility to make the most happiness for " +
              "the whole tribe. (Good)",
          "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
          "Might. The strongest are meant to rule. (Evil)",
          "Nature. The natural world is more important than all the constructs of civilizat" +
              "ion. (Neutral)",
          "Glory. I must earn glory in battle, for myself and my clan. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "My family, clan, or tribe is the most important thing in my life, even when they" +
              " are far from me.",
          "An injury to the unspoiled wilderness of my home is an injury to me.",
          "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
          "I am the last of my tribe, and it is up to me to ensure their names enter legend" +
              ".",
          "I suffer awful visions of a coming disaster and will do anything to prevent it.",
          "It is my duty to provide children to sustain my tribe."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I am too enamored of ale, wine, and other intoxicants.", "There’s no room for caution in a life lived to the fullest.", "I remember every insult I’ve received and nurse a silent resentment toward anyon" +
              "e who’s ever wronged me.",
          "I am slow to trust members of other races, tribes, and societies.",
          "Violence is my answer to almost any challenge.",
          "Don’t expect me to save those who can’t save themselves. It is nature’s way that" +
              " the strong thrive and the weak perish."
        ]
      },
      variant: null
    },
    Sage: {
      id: "SageBackground",
      def: ["You spent years learning the lore of the multiverse. You scoured manuscripts, st" +
          "udied scrolls, and listened to the greatest experts on the subjects that interes" +
          "t you. Your"],
      skillProf: [
        "Arcana", "History"
      ],
      languages: 2,
      toolProf: null,
      equipment: [
        "A bottle of black ink", "A quill", "A small knife", "A letter from a dead colleague posing a question you have not yet been able to a" +
            "nswer",
        "A set of common clothes",
        "A belt pouch containing 10 gp"
      ],
      special: {
        title: "Specialty",
        def: ["To determine the nature of your scholarly training, roll a d8 or choose from the" +
            " options in the table below."],
        options: [
          "Alchemist",
          "Professor",
          "Astronomer",
          "Librarian",
          "Researcher",
          "Discredited",
          "Academic",
          "Wizard’s apprentice",
          "Scribe"
        ]
      },
      feature: {
        title: "Researcher",
        def: ["When you attempt to learn or recall a piece of lore, if you do not know that inf" +
            "ormation, you often know where and from w hom you can obtain it. Usually, this i" +
            "nformation comes from a library, scriptorium, university, or a sage or other lea" +
            "rned person or creature. Your DM might rule that the knowledge you seek is secre" +
            "ted away in an almost inaccessible place, or that it simply cannot be found. Une" +
            "arthing the deepest secrets of the multiverse can require an adventure or even a" +
            " whole campaign."]
      },
      suggestedCharacteristics: "Sages are defined by their extensive studies, and their characteristics reflect " +
        "this life of study. Devoted to scholarly pursuits, a sage values knowledge highl" +
        "y— sometimes in its own right, sometimes as a means toward other ideals.",
      personalityTraits: {
        dice: 8,
        options: [
          "I use polysyllabic words that convey the impression of great erudition.", "I've read every book in the world’s greatest libraries— or I like to boast that " +
              "I have.",
          "I'm used to helping out those who aren't as smart as I am, and I patiently expla" +
              "in anything and everything to others.",
          "There’s nothing I like more than a good mystery.",
          "I’m willing to listen to every side of an argument before I make my own judgment" +
              ".",
          "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . ." +
              " almost . . . everyone . . . is . . . compared . . . to me.",
          "I am horribly, horribly awkward in social situations.",
          "I’m convinced that people are always trying to steal my secrets."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Knowledge. The path to power and self-improvement is through knowledge. (Neutral" +
              ")",
          "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
          "Logic. Emotions must not cloud our logical thinking. (Lawful)",
          "No Limits. Nothing should fetter the infinite possibility inherent in all existe" +
              "nce. (Chaotic)",
          "Power. Knowledge is the path to power and domination. (Evil)",
          "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any" +
              ")"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "It is my duty to protect my students.", "I have an ancient text that holds terrible secrets that must not fall into the w" +
              "rong hands.",
          "I work to preserve a library, university, scriptorium, or monastery.",
          "My life’s work is a series of tomes related to a specific field of lore.",
          "I've been searching my whole life for the answer to a certain question.",
          "I sold my soul for knowledge. I hope to do great deeds and win it back."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I am easily distracted by the promise of information.", "Most people scream and run when they see a demon. I stop and take notes on its a" +
              "natomy.",
          "Unlocking an ancient mystery is worth the price of a civilization.",
          "I overlook obvious solutions in favor of complicated ones.",
          "I speak without really thinking through my words, invariably insulting others.",
          "I can’t keep a secret to save my life, or anyone else’s."
        ]
      },
      variant: null
    },
    Sailor: {
      id: "SailorBackground",
      def: [
        "You sailed on a seagoing vessel for years. In that time, you faced down mighty s" +
            "torms, monsters of the deep, and those who wanted to sink your craft to the bott" +
            "omless depths. Your first love is the distant line of the horizon, but the time " +
            "has come to try your hand at something new.",
        "Discuss the nature of the ship you previously sailed with your Dungeon Master. W" +
            "as it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? Ho" +
            "w famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is " +
            "it missing and presumed lost with all hands?",
        "What w ere your duties on board—boatswain, captain, navigator, cook, or some oth" +
            "er position? W ho were the captain and first mate? Did you leave your ship on go" +
            "od terms with your fellows, or on the run?"
      ],
      skillProf: ["Athletics, Perception"],
      languages: null,
      toolProf: "Navigator’s tools, vehicles (water)",
      equipment: [
        "A belaying pin (club)", "50 feet of silk rope", "A lucky charm such as a rabbit foot or a small stone with a hole in the center", "A set of common clothes", "A belt pouch containing 10 gp"
      ],
      special: null,
      feature: {
        title: "Ship’s Passage",
        def: ["When you need to, you can secure free passage on a sailing ship for yourself and" +
            " your adventuring companions. You might sail on the ship you served on, or anoth" +
            "er ship you have good relations with. Because you’re calling in a favor, you can" +
            "’t be certain of a schedule or route that w ill meet your every need. Your Dunge" +
            "on Master will determine how long it takes to get where you need to go. In retur" +
            "n for your free passage, you and your companions are expected to assist the crew" +
            " during the voyage."]
      },
      suggestedCharacteristics: "Sailors can be a rough lot, but the responsibilities of life on a ship make them" +
        " generally reliable as well. Life aboard a ship shapes their outlook and forms t" +
        "heir most important attachments.",
      personalityTraits: {
        dice: 8,
        options: [
          "My friends know they can rely on me, no matter what.",
          "I work hard so that I can play hard when the work is done.",
          "I enjoy sailing into new ports and making new friends over a flagon of ale.",
          "I stretch the truth for the sake of a good story.",
          "To me, a tavern brawl is a nice way to get to know a new city.",
          "I never pass up a friendly wager.",
          "My language is as foul as an otyugh nest.",
          "I like a job well done, especially if I can convince someone else to do it."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Respect. The thing that keeps a ship together is mutual respect between captain " +
              "and crew. (Good)",
          "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
          "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic" +
              ")",
          "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
          "People. I’m committed to my crew mates, not to ideals. (Neutral)",
          "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I’m loyal to my captain first, everything else second.",
          "The ship is most important, crew mates and captains come and go.",
          "I’ll always remember my first ship.",
          "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
          "I was cheated out of my fair share of the profits, and I want to get my due.",
          "Ruthless pirates murdered my captain and crew mates, plundered our ship, and lef" +
              "t me to die. Vengeance will be mine."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "I follow orders, even if I think they’re wrong.", "I’ll say anything to avoid having to do extra work.", "Once someone questions my courage, I never back down no matter how dangerous the" +
              " situation.",
          "Once I start drinking, it’s hard for me to stop.",
          "I can’t help but pocket loose coins and other trinkets I come across.",
          "My pride will probably lead to my destruction."
        ]
      },
      variant: {
        title: "Pirate",
        def: [
          "You spent your youth under the sway of a dread pirate, a ruthless cutthroat w ho" +
              " taught you how to survive in a world of sharks and savages. You’ve indulged in " +
              "larceny on the high seas and sent more than one deserving soul to a briny grave." +
              " Fear and bloodshed are no strangers to you, and you’ve garnered a somewhat unsa" +
              "vory reputation in many a port town.",
          "If you decide that your sailing career involved piracy, you can choose the Bad R" +
              "eputation feature (see sidebar) instead of the Ship’s Passage feature."
        ],
        feature: [
          "If your character has a sailor background, you may select this background featur" +
              "e instead of Ship’s Passage.",
          "No matter where you go, people are afraid of you due to your reputation. When yo" +
              "u are in a civilized settlement, you can get away with minor criminal offenses, " +
              "such as refusing to pay for food at a tavern or breaking down doors at a local s" +
              "hop, since most people will not report your activity to the authorities."
        ]
      }

    },
    Soldier: {
      id: "SoldierBackground",
      def: [
        "War has been your life for as long as you care to remember. You trained as a you" +
            "th, studied the use of weapons and armor, learned basic survival techniques, inc" +
            "luding how to stay alive on the battlefield. You might have been part of a stand" +
            "ing national army or a mercenary company, or perhaps a member of a local militia" +
            " w ho rose to prominence during a recent war.",
        "When you choose this background, work with your DM to determine which military o" +
            "rganization you w ere a part of, how far through its ranks you progressed, and w" +
            "hat kind of experiences you had during your military career. Was it a standing a" +
            "rmy, a town guard, or a village militia? Or it might have been a noble’s or merc" +
            "hant’s private army, or a mercenary company."
      ],
      skillProf: [
        "Athletics", "Intimidation"
      ],
      languages: null,
      toolProf: ["One type of gaming set, vehicles (land)"],
      equipment: [
        "An insignia of rank", "A trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner" +
            ")",
        "A set of bone dice or deck of cards",
        "A set of common clothes",
        "A belt pouch containing 10 gp"
      ],
      special: {
        title: "Specialty",
        def: ["During your time as a soldier, you had a specific role to play in your unit or a" +
            "rmy."],
        options: [
          "Officer",
          "Quartermaster",
          "Scout",
          "Standard bearer",
          "Infantry",
          "Support staff",
          "Cavalry",
          "Healer"
        ]
      },
      feature: {
        title: "Military Rank",
        def: ["You have a military rank from your career as a soldier. Soldiers loyal to your f" +
            "ormer military organization still recognize your authority and influence, and th" +
            "ey defer to you if they are of a lower rank. You can invoke your rank to exert i" +
            "nfluence over other soldiers and requisition simple equipment or horses for temp" +
            "orary use. You can also usually gain access to friendly military encampments"]
      },
      suggestedCharacteristics: "The horrors of war combined with the rigid discipline of military service leave " +
        "their mark on all soldiers, shaping their ideals, creating strong bonds, and oft" +
        "en leaving them scarred and vulnerable to fear, shame, and hatred.",
      personalityTraits: {
        dice: 8,
        options: [
          "I'm always polite and respectful.", "I’m haunted by memories of war. I can’t get the images of violence out of my min" +
              "d.",
          "I’ve lost too many friends, and I’m slow to make new ones.",
          "I’m full of inspiring and cautionary tales from my military experience relevant " +
              "to almost every combat situation.",
          "I can stare down a hell hound without flinching.",
          "I enjoy being strong and like breaking things.",
          "I have a crude sense of humor.",
          "I face problems head-on. A simple, direct solution is the best path to success."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Greater Good. Our lot is to lay down our lives in defense of others. (Good)", "Responsibility. I do what I must and obey just authority. (Lawful)", "Independence. When people follow orders blindly, they embrace a kind of tyranny." +
              " (Chaotic)",
          "Might. In life as in war, the stronger force wins. (Evil)",
          "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutra" +
              "l)",
          "Nation. My city, nation, or people are all that matter. (Any)"
        ]
      },
      bond: {
        dice: 6,
        options: [
          "I would still lay down my life for the people I served with.", "Someone saved my life on the battlefield. To this day, I will never leave a frie" +
              "nd behind.",
          "My honor is my life.",
          "I’ll never forget the crushing defeat my company suffered or the enemies who dea" +
              "lt it.",
          "Those who fight beside me are those worth dying for.",
          "I fight for those who cannot fight for themselves."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "The monstrous enemy we faced in battle still leaves me quivering with fear.", "I have little respect for anyone who is not a proven warrior.", "I made a terrible mistake in battle cost many lives— and I would do anything to " +
              "keep that mistake secret.",
          "My hatred of my enemies is blind and unreasoning.",
          "I obey the law, even if the law causes misery.",
          "I’d rather eat my armor than admit when I’m wrong."
        ]
      },
      variant: null
    },
    Urchin: {
      id: "UrchinBackground",
      def: [
        "You grew up on the streets alone, orphaned, and poor. You had no one to watch ov" +
            "er you or to provide for you, so you learned to provide for yourself. You fought" +
            " fiercely over food and kept a constant watch out for other desperate souls w ho" +
            " might steal from you. You slept on rooftops and in alleyways, exposed to the el" +
            "ements, and endured sickness without the advantage of medicine or a place to rec" +
            "uperate. You’ve survived despite all odds, and did so through cunning, strength," +
            " speed, or some combination of each.",
        "You begin your adventuring career with enough money to live modestly but securel" +
            "y for at least ten days. How did you come by that money? What allowed you to bre" +
            "ak free of your desperate circumstances and embark on a better life?"
      ],
      skillProf: [
        "Sleight of Hand", "Stealth"
      ],
      languages: null,
      toolProf: [
        "Disguise kit", "thieves’ tools"
      ],
      equipment: [
        "A small knife", "A map of the city you grew up in, a pet mouse", "A token to remember your parents by", "A set of common clothes", "A belt pouch containing 10 gp"
      ],
      special: null,
      feature: {
        title: "City Secrets",
        def: ["You know the secret patterns and flow to cities and can find passages through th" +
            "e urban sprawl that others would miss. When you are not in combat, you (and comp" +
            "anions you lead) can travel between any two locations in the city twice as fast " +
            "as your speed would normally allow."]
      },
      suggestedCharacteristics: "Urchins are shaped by lives of desperate poverty, for good and for ill. They ten" +
        "d to be driven either by a commitment to the people with whom they shared life o" +
        "n the street or by a burning desire to find a better life— and maybe get some pa" +
        "yback on all the rich people who treated them badly.",
      personalityTraits: {
        dice: 8,
        options: [
          "I hide scraps of food and trinkets away in my pockets.", "I ask a lot of questions.", "I like to squeeze into small places where no one else can get to me.", "I sleep with my back to a wall or tree, with everything I own wrapped in a bundl" +
              "e in my arms.",
          "I eat like a pig and have bad manners.",
          "I think anyone who’s nice to me is hiding evil intent.",
          "I don’t like to bathe.",
          "I bluntly say what other people are hinting at or hiding."
        ]
      },
      ideal: {
        dice: 6,
        options: [
          "Respect. All people, rich or poor, deserve respect. (Good)", "Community. We have to take care of each other, because no one else is going to d" +
              "o it. (Lawful)",
          "Change. The low are lifted up, and the high and mighty are brought down. Change " +
              "is the nature of things. (Chaotic)",
          "Retribution. The rich need to be shown what life and death are like in the gutte" +
              "rs. (Evil)",
          "People. I help the people who help me—that’s what keeps us alive. (Neutral)",
          "Aspiration. I'm going to prove that I'm worthy of a better life."
        ]
      },
      bond: {
        dice: 6,
        options: [
          "My town or city is my home, and I’ll fight to defend it.", "I sponsor an orphanage to keep others from enduring what I was forced to endure.", "I owe my survival to another urchin who taught me to live on the streets.", "I owe a debt I can never repay to the person who took pity on me.", "I escaped my life of poverty by robbing an important person, and I’m wanted for " +
              "it.",
          "No one else should have to endure the hardships I’ve been through."
        ]
      },
      flaw: {
        dice: 6,
        options: [
          "If I'm outnumbered, I will run away from a fight.", "Gold seems like a lot of money to me, and I’ll do just about anything for more o" +
              "f it.",
          "I will never fully trust anyone other than myself.",
          "I’d rather kill someone in their sleep then fight fair.",
          "It’s not stealing if I need it more than someone else.",
          "People who can't take care of themselves get what they deserve."
        ]
      },
      variant: null

    }
  }
]

module.exports = Backgrounds;