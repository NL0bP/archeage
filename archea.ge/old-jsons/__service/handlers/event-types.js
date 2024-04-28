// [{"id":1,"name":"Instances","icon":"instance","color":"RED","startMessage":"$0 is now available for $1.","reminderMessage":"$0 will be available in $1 for $2."},{"id":2,"name":"Rifts","icon":"torch","color":"GREEN","startMessage":"The $0 has opened.","reminderMessage":"The $0 will open in $1."},{"id":3,"name":"World Bosses","icon":"boss","color":"BLUE","startMessage":"$0 has spawned.","reminderMessage":"$0 will spawn in $1."},{"id":4,"name":"PvP Events","icon":"pvp","color":"GOLD","startMessage":"$0 has started.","reminderMessage":"$0 will start in $1."},{"id":5,"name":"Other Events","icon":"flag","color":"PURPLE","startMessage":"$0 has started.","reminderMessage":"$0 will start in $1."},{"id":6,"name":"Zone War","icon":"war","color":"ORANGE","startMessage":"$0 has fallen into a state of war for $2.","reminderMessage":"$0 will fall into a state of war in $1."}]

const eventTypes = [
  {
      "id": 1,
      "name": "Instances",
      "icon": "instance",
      "color": "RED",
      "startMessage": "$0 is now available for $1.",
      "reminderMessage": "$0 will be available in $1 for $2."
  },
  {
      "id": 2,
      "name": "Rifts",
      "icon": "torch",
      "color": "GREEN",
      "startMessage": "The $0 has opened.",
      "reminderMessage": "The $0 will open in $1."
  },
  {
      "id": 3,
      "name": "World Bosses",
      "icon": "boss",
      "color": "BLUE",
      "startMessage": "$0 has spawned.",
      "reminderMessage": "$0 will spawn in $1."
  },
  {
      "id": 4,
      "name": "PvP Events",
      "icon": "pvp",
      "color": "GOLD",
      "startMessage": "$0 has started.",
      "reminderMessage": "$0 will start in $1."
  },
  {
      "id": 5,
      "name": "Other Events",
      "icon": "flag",
      "color": "PURPLE",
      "startMessage": "$0 has started.",
      "reminderMessage": "$0 will start in $1."
  },
  {
      "id": 6,
      "name": "Zone War",
      "icon": "war",
      "color": "ORANGE",
      "startMessage": "$0 has fallen into a state of war for $2.",
      "reminderMessage": "$0 will fall into a state of war in $1."
  },
  {
      "id": 7,
      "name": "Arena",
      "icon": "pvp",
      "color": "GRAY",
      "startMessage": "$0 is now available for $1.",
      "reminderMessage": "$0 will be available in $1 for $2."
  }
]

module.exports = (req, res) => {
  res.send(eventTypes)
}
