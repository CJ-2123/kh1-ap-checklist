const req = [
  {
    name: "Candle Puzzle Chest",
    items: "Blizzard",
  },
  {
    name: "Merlin Yellow Trinity",
    items: "Yellow Trinity AND Fire",
  },
  {
    name: "House Chest",
    items: "Monstro AND High Jump",
  },
  {
    name: "Item Workshop Right Chest",
    items: "Green Trinity",
  },
  {
    name: "Item Workshop Left Chest",
    items: "Green Trinity",
  },
  {
    name: "Merlin Glide Chest",
    items: "Glide AND Fire",
  },
  {
    name: "Queen Left Chest",
    items: "Evidence OR High Jump OR Glide",
  },
  {
    name: "Queen Right Blue Chest",
    items: "Evidence OR High Jump OR Glide",
  },
  {
    name: "Queen Right Red Chest",
    items: "Evidence OR High Jump OR Glide",
  },
  {
    name: "Thunder Flowers",
    items: "Evidence AND Thunder",
  },
  {
    name: "Painting Thunder Flowers",
    items: "Evidence AND Thunder",
  },
  {
    name: "Forest Glide Chest",
    items: "Glide",
  },
  {
    name: "Forest Corner Chest",
    items: "High Jump OR Glide",
  },
  {
    name: "Sideways Room Lamp Chest",
    items: "Evidence",
  },
  {
    name: "Above Lotus Forest Chests x2",
    items: "Glide",
  },
  {
    name: "Bear and Clock Puzzle Chest",
    items: "Evidence",
  },
  {
    name: "Across From Bizarre Room Chest",
    items: "Glide",
  },
  {
    name: "Forest White Trinity",
    items: "Evidence AND White Trinity",
  },
  {
    name: "Hippos Right Chest",
    items: "High Jump OR Glide",
  },
  {
    name: "Waterfall White Trinity",
    items: "Slides AND White Trinity",
  },
  {
    name: "Waterfall Chests (x4)",
    items: "Slides",
  },
  {
    name: "Boat Chest",
    items: "Glide",
  },
  {
    name: "Left Cliff Chest",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Right Tre Alcove Chest",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Giant Pot Chest",
    items: "4 Torn Pages",
  },
  {
    name: "Main Street High Palace Gates Chest",
    items: "High Jump OR Glide",
  },
  {
    name: "Palace Gates High Opposite to Palace Chest",
    items: "High Jump",
  },
  {
    name: "Palace Gates High Close to Palace Chest",
    items: "High Jump OR Glide",
  },
  {
    name: "Cave Entrance Tall Tower Chest",
    items: "Glide",
  },
  {
    name: "Bottomless Hall Pillar Chest",
    items: "High Jump OR Glide",
  },
  {
    name: "Hidden Room Chests (x2)",
    items: "Yellow Trinity OR High Jump",
  },
  {
    name: "Chamber 6 1st Platform Chest",
    items: "High Jump",
  },
  {
    name: "Chamber 6 2nd Platform Chest",
    items: "High Jump",
  },
  {
    name: "Chamber 6 Top Chest",
    items: "High Jump",
  },
  {
    name: "Ursula Lair Urchin Chest",
    items: "Fire",
  },
  {
    name: "Bridge Chests (x3)",
    items: "Jack in the Box",
  },
  {
    name: "Cemetary Chests (x4)",
    items: "Jack in the Box AND Fire",
  },
  {
    name: "Manor Chests (x5)",
    items: "Jack in the Box",
  },
  {
    name: "Manor Red Trinity Chest",
    items: "Jack in the Box AND Red Trinity",
  },
  {
    name: "High Tower Chest",
    items: "High Jump",
  },
  {
    name: "Pumpkin Mouth Chests (x2)",
    items: "High Jump AND Glide",
  },
  {
    name: "Blizzara Chest (MISSABLE)",
    items: "Blizzara",
  },
  {
    name: "Blizzaga Chest",
    items: "Blizzaga",
  },
  {
    name: "High Platform Boat Side",
    items: "High Jump OR Glide",
  },
  {
    name: "High Platform Across From Boat",
    items: "High Jump OR Glide",
  },
  {
    name: "Gepetto Ship Green Trinity",
    items: "Green Trinity AND High Jump OR Glide",
  },
  {
    name: "Chamber 5 Platform Chest",
    items: "High Jump",
  },
  {
    name: "Chamber 3 Platform Above 2 Chest",
    items: "High Jump",
  },
  {
    name: "Chamber 3 Platform Near 6 Chest",
    items: "High Jump",
  },
  {
    name: "Chamber 5 Barrel Chest",
    items: "High Jump",
  },
  {
    name: "Deck White Trinity",
    items: "Green Trinity AND White Trinity",
  },
  {
    name: "Deck Crow's Nest Chest",
    items: "Green Trinity",
  },
  {
    name: "Tinkerbell Cabin Chest",
    items: "Green Trinity",
  },
  {
    name: "Hold Rafters Chests (x2)",
    items: "Green Trinity",
  },
  {
    name: "Clock Tower Chest",
    items: "Green Trinity",
  },
  {
    name: "Captain's Cabin Chest",
    items: "Green Trinity",
  },
  {
    name: "2nd Section Underwater Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "Right Ice Platform Chest",
    items: "High Jump OR Glide OR Blizard",
  },
  {
    name: "Left Ice Platform Chest",
    items: "High Jump OR Glide OR Blizard",
  },
  {
    name: "Top Ice Platform Chest",
    items:
      "High Jump OR Glide OR Blizard AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Gravity Platform Chest",
    items:
      "Gravity AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Pillar Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "High Pillar Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "Great Crest Lower Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "Great Crest After Battle Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "High Tower 1st Gravity Chest",
    items:
      "Gravity AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "High Tower 2nd Gravity Chest",
    items:
      "Gravity AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "High Tower Above Sliding Blocks Chest",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder OR High Jump OR Glide",
  },
  {
    name: "Top of Bookshelf Carousel Chest",
    items: "Glide OR Green Trinity",
  },
  {
    name: "Bookshelf Chest",
    items: "Glide OR Green Trinity",
  },
  {
    name: "Lift Stop Library Node After Switch Chest",
    items:
      "Gravity AND Green Trinity AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Lift Stop Library Node Chest",
    items: "Gravity AND Green Trinity",
  },
  {
    name: "Lift Stop Under High Tower Chest",
    items:
      "Glide AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Lift Stop Outside Library Chest",
    items: "Gravity AND Green Trinity",
  },
  {
    name: "Lift Stop Heartless Door Gravity Chest",
    items:
      "Gravity AND Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Waterway Bubble Chest",
    items: "Blizzard AND High Jump",
  },
  {
    name: "Grand Hall Right Chest",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Grand Hall Left Chest",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Grand Hall Middle Chest",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Emblem Room Chest",
    items: "High Jump",
  },
  {
    name: "Highest Platform",
    items: "High Jump AND Glide",
  },
  {
    name: "Ledge Below Spawn Chest",
    items: "High Jump AND Glide",
  },
  {
    name: "Center of Room Chest",
    items: "High Jump AND Glide",
  },
  {
    name: "Ledge Across Spawn Chest",
    items: "High Jump AND Glide",
  },
  {
    name: "Agrabah",
    items: "High Jump",
  },
  {
    name: "Kairi Oathkeeper Check",
    items:
      "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder AND 5 Worlds",
  },
  {
    name: "Defeat Sabor Reward",
    items: "Slides",
  },
  {
    name: "Clayton Reward",
    items: "Slides",
  },
  {
    name: "DJ Seal Keyhole Reward (x2)",
    items: "Slides",
  },
  {
    name: "Trickmaster Reward x2",
    items: "Evidence",
  },
  {
    name: "Parasite Cage 2 Reward",
    items: "High Jump",
  },
  {
    name: "Ursula 1 Reward",
    items: "Fire OR Blizzard OR Thunder OR Gravity OR Stop",
  },
  {
    name: "Big Ursula Reward x2",
    items: "Mermaid Kick AND Fire OR Blizzard OR Thunder OR Gravity OR Stop",
  },
  {
    name: "AT Seal Keyhole Reward",
    items: "Mermaid Kick AND Fire OR Blizzard OR Thunder OR Gravity OR Stop",
  },
  {
    name: "Oogie Chamber Rewards x2",
    items: "Jack in the Box AND Fire",
  },
  {
    name: "Oogie Manor Reward",
    items: "Jack in the Box AND Fire",
  },
  {
    name: "HT Seal Keyhole Reward",
    items: "Jack in the Box AND Fire",
  },
  {
    name: "Anti Sora Reward",
    items: "Green Trinity",
  },
  {
    name: "Encounter Hook Reward",
    items: "Green Trinity",
  },
  {
    name: "NV Seal Keyhole Rewards (x3)",
    items: "Green Trinity",
  },
  {
    name: "Defeat Phantom",
    items:
      "Green Trinity AND Fira AND Blizzara AND Thundara AND Cura AND Aerora AND Graviga AND Stopra",
  },
  {
    name: "Defeat Hook Rewards (x2)",
    items: "Green Trinity",
  },
  {
    name: "Maleficent Rewards x2",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Dragon Mal Reward",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Riku 2 Reward",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Behemoth Reward",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Princesses Reward",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Opposite Armor Reward",
    items: "Red Trinity",
  },
  {
    name: "Undersea Gorge Blizzard Clam",
    items: "Blizzard",
  },
  {
    name: "Fire Clam",
    items: "Fire",
  },
  {
    name: "Triton's Palace Thunder Clam",
    items: "Thunder",
  },
  {
    name: "Hades 44 Yuffie",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades 40 Behemoth",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades 30 Cerberus",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades 20 Cloud Leon",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades 10 Hades",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades Cup",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades Cup Solo",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Hades Cup Time Trial",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Defeat Kurt Zisa",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Defeat Unknown",
    items: "Hollow Bastion AND Theon AND Red Trinity AND Fire AND Thunder",
  },
  {
    name: "Sephiroth",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "House Postcard",
    items: "Monstro AND High Jump",
  },
  {
    name: "Reward 1",
    items: "Monstro AND High Jump",
  },
  {
    name: "Reward 2",
    items: "Monstro AND High Jump",
  },
  {
    name: "Reward 3",
    items: "Monstro AND High Jump",
  },
  {
    name: "Reward 4",
    items: "Monstro AND High Jump",
  },
  {
    name: "Reward 5",
    items: "Monstro AND High Jump",
  },
  {
    name: "All Summons Reward",
    items: "Monstro AND High Jump AND All Summons",
  },
  {
    name: "Pinocchio Shooting Star",
    items: "Monstro AND High Jump",
  },
  {
    name: "Spellbinder Check",
    items: "All level 1 magic",
  },
  {
    name: "Dream Rod Check",
    items: "All level 3 magic",
  },
  {
    name: "Dream Shield Check",
    items: "All Arts",
  },
  {
    name: "Ice Titan",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Rare Nut 1",
    items: "4 Torn Pages",
  },
  {
    name: "Rare Nut 2",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Rare Nut 3",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Rare Nut 4",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Rare Nut 5",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Owl Cheer",
    items: "5 Torn Pages",
  },
  {
    name: "Start Fire",
    items: "3 Torn Pages",
  },
  {
    name: "Break Log",
    items: "4 Torn Pages",
  },
  {
    name: "Fall Through Top of Tree",
    items: "4 Torn Pages AND High Jump OR Glide",
  },
  {
    name: "Hi-Potion Experiment",
    items: "Fire",
  },
  {
    name: "Ether Experiment",
    items: "Blizzard",
  },
  {
    name: "Replication Experiment",
    items: "Blizzard",
  },
  {
    name: "Tree House Monkeys Reward",
    items: "Slides",
  },
  {
    name: "Bamboo Thicket Monkeys Reward",
    items: "Slides",
  },
  {
    name: "Cliff Monkeys Reward",
    items: "Slides",
  },
  {
    name: "Climbing Trees Monkeys Reward",
    items: "Slides",
  },
  {
    name: "Camp Monkeys Reward",
    items: "Slides",
  },
  {
    name: "Jungle Slider 10",
    items: "Slides",
  },
  {
    name: "Jungle Slider 20",
    items: "Slides",
  },
  {
    name: "Jungle Slider 30",
    items: "Slides",
  },
  {
    name: "Jungle Slider 40",
    items: "Slides",
  },
  {
    name: "Jungle Slider 50",
    items: "Slides",
  },
  {
    name: "Olympia Chest",
    items: "Phil Cup AND Pegasus Cup AND Herc Cup",
  },
  {
    name: "Read Book",
    items: "Evidence",
  },
];

export default req;
