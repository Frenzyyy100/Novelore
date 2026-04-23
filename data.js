/*
Copyright © 2026 Frenzyyy. All Rights Reserved.

This source code is proprietary and confidential. Unauthorized copying, redistribution, or use of this code, in whole or in part, is strictly prohibited.
*/

/* CONTENT */
// Hero slides (max 5) — leave empty to show the "coming soon" panel
// Fields: { tag, title, description, bg, readHref, coverImg? }
//   coverImg — URL to book cover image (https://... or relative path). Omit to show the title's first letter.
// Example:
// { tag:'Featured', title:'Your Title Here', description:'Your description.', bg:'linear-gradient(135deg,#3B1A08 0%,#5A2510 55%,#C44B1A 100%)', readHref:'#', coverImg:'https://example.com/cover.jpg' },
const heroSlides = [
  {
    tag:         'Featured',
    title:       'The Lantern Pact: Prologue',
    description: 'Three mismatched members of the Kaihon Light Pact navigate missions, secrets, and something far bigger moving in the shadows.',
    bg:          'linear-gradient(135deg,#2C1206 0%,#5A1A08 55%,#C44B1A 100%)',
    novelId:     'lantern',
    coverImg:    'https://i.imgur.com/iQMtLH9.png',
  },
  {
    tag:         'New Chapter',
    title:       'The Lantern Pact: Prologue',
    description: 'The Lantern Pact: Prologue has dropped a new chapter. Go check it out and read the latest chapter! Stay tuned for more updates!',
    bg:          'linear-gradient(135deg,#060D2C 0%,#0F2A5A 55%,#1A6BC4 100%)',
    novelId:     'lantern',
    coverImg:    'https://i.imgur.com/iQMtLH9.png',
    bookmark:    false,
  },
  {
    tag:         'In Progress',
    title:       'Bunny is working!',
    description: 'Thank you for visiting Novélore! I am trying my very best to build this website to its fullest. Build with love and carrot by Frenzyyy.',
    bg:          'linear-gradient(135deg,#0D0620 0%,#1E0A4A 55%,#3A1A8C 100%)',
  },
];

// Novel cards — { title, novelId, emoji, bg, rating, genre, status, coverImg? }

// Trending tab
const trendingData  = []; 
// Hot Picks tab
const hotPicksData  = []; 
// Frenzyyy's Work tab
const frenzyyyData  = [
  { title:'The Lantern Pact: Prologue', novelId:'lantern', emoji:'L', bg:'linear-gradient(160deg,#C44B1A 0%,#3B1A08 100%)', rating:3.9, genre:'Dark Fantasy', status:'Ongoing', coverImg:'https://i.imgur.com/iQMtLH9.png' },
];

//OTHER CREATOR'S WORK TAB HERE SOON TO MADE

// What's New — { title, novelId, emoji, bg, description, genre, status, rating, isNew, coverImg? }
const novelsNew = [
  { title:'The Lantern Pact: Prologue', novelId:'lantern', emoji:'L', bg:'linear-gradient(160deg,#C44B1A 0%,#3B1A08 100%)', description:'Three unlikely teammates navigate missions, secrets, and something far bigger moving behind the scenes. Volume 1: False Summer Arc — ongoing.', genre:'Dark Fantasy', status:'Ongoing', rating:5.0, isNew:true, coverImg:'https://i.imgur.com/iQMtLH9.png' },
];

// Book updates — { novelId, novelTitle, emoji, bookTitle, description, time }
const bookUpdatesData = [
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', bookTitle:'The Lantern Pact: Prologue', description:'Now live — free to read. Dark Fantasy · Action · Adventure.', time:'Jan 17, 2026' },
];

// Volume updates — { novelId, novelTitle, emoji, volumeNumber, volumeTitle, description, time }
const volumeUpdatesData = [
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', volumeNumber:1, volumeTitle:'False Summer Arc', description:'Vol. 1 is underway — new chapters dropping regularly.', time:'Jan 17, 2026' },
];

// Chapter updates — { novelId, novelTitle, emoji, chapter, chapterTitle, time }
const updatesData = [
{ novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:9, chapterTitle:'Vol. 1 Ch. 9 — What We Carry',              time:'Apr 9, 2026'  },
{ novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:8, chapterTitle:'Vol. 1 Ch. 8 — Daylight',              time:'Mar 30, 2026'  },
{ novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:7, chapterTitle:'Vol. 1 Ch. 7 — A New Hand',           time:'Mar 20, 2026'  },
 { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:6, chapterTitle:'Vol. 1 Ch. 6 — White Leopard',           time:'Feb 24, 2026'  },
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:5, chapterTitle:'Vol. 1 Ch. 5 — Reminisce',           time:'Jan 24, 2026'  },
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:4, chapterTitle:'Vol. 1 Ch. 4 — Our Separate Ways',   time:'Jan 20, 2026'  },
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:3, chapterTitle:'Vol. 1 Ch. 3 — Chaotic Result',      time:'Jan 18, 2026'  },
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:2, chapterTitle:'Vol. 1 Ch. 2 — Compromise',          time:'Jan 17, 2026'  },
  { novelId:'lantern', novelTitle:'The Lantern Pact: Prologue', emoji:'L', chapter:1, chapterTitle:'Vol. 1 Ch. 1 — Rescue Mission',      time:'Jan 17, 2026'  },
];

// Announcements — { title, body, type, date, novelId? }  type: new | event | system
const announcementsData = [
{ title:'Ch. 9 is Live — What We Carry',              body:'Chapter 9 of The Lantern Pact: Prologue is now available. Secrets uncovered and mutual promises.',              type:'new',   date:'April 9, 2026',   novelId:'lantern' },
{ title:'Ch. 8 is Live — Daylight',              body:'Chapter 8 of The Lantern Pact: Prologue is now available. The team takes a breather in the city — but stillness never lasts long.',              type:'new',   date:'March 30, 2026',   novelId:'lantern' },
{ title:'Ch. 7 is Live — A New Hand',        body:'Chapter 7 of The Lantern Pact: Prologue is now available. False Summer Arc continues, the duo has finally got their third teammate but in a twist.',   type:'new',   date:'March 20, 2026', novelId:'lantern' },
{ title:'Ch. 6 is Live — White Leopard',        body:'Chapter 6 of The Lantern Pact: Prologue is now available. False Summer Arc continues, the prologue villain is here.',   type:'new',   date:'February 24, 2026', novelId:'lantern' },
{ title:'Ch. 5 is Live — Reminisce',            body:'Chapter 5 of The Lantern Pact: Prologue is now available. The team slows down — and something from the past resurfaces.',                          type:'new',   date:'January 24, 2026',  novelId:'lantern' },
{ title:'Ch. 4 is Live — Our Separate Ways',    body:'Chapter 4 of The Lantern Pact: Prologue is now available. Tensions fracture the team as everyone starts pulling in different directions.',          type:'new',   date:'January 20, 2026',  novelId:'lantern' },
{ title:'Ch. 3 is Live — Chaotic Result',       body:'Chapter 3 of The Lantern Pact: Prologue is now available. Nothing went according to plan — and now they have to deal with the fallout.',           type:'new',   date:'January 18, 2026',  novelId:'lantern' },
{ title:'Ch. 2 is Live — Compromise',           body:'Chapter 2 of The Lantern Pact: Prologue is now available. Not everyone agrees on how to handle things — but they press forward anyway.',           type:'new',   date:'January 17, 2026',  novelId:'lantern' },
{ title:'Ch. 1 is Live — Rescue Mission',       body:'Chapter 1 of The Lantern Pact: Prologue is now available. The first true field mission begins — and there\'s no room for failure.',               type:'new',   date:'January 17, 2026',  novelId:'lantern' },
  { title:'Vol. 1 Has Begun — False Summer Arc', body:'The Lantern Pact: Prologue is officially live. New chapters dropping regularly — free to read.', type:'event', date:'January 17, 2026', novelId:'lantern' },
];

// Notifications — { id, msg, time, read }
// IMPORTANT: always give each entry a unique stable `id` string.
// If you add a new notification, prepend it with a new unique id (e.g. 'notif-ch8').
// Never reuse an id — the read-state is persisted by id, so reusing one will
// cause the new notification to appear already-read for returning visitors.
const notificationsData = [
{ id:'notif-ch9lanternprologue',      msg:'Ch. 9 is live — "What We Carry"! They carry something both should not have noticed.',                  time:'Apr 9, 2026',   read:false },
{ id:'notif-ch8lanternprologue',      msg:'Ch. 8 is live — "Daylight"! The team catches their breath — but the city has other plans.',                  time:'Mar 30, 2026',   read:false },
{ id:'notif-ch7lanternprologue',      msg:'Ch. 7 is live — "A New Hand"! The reassignment to take the spot is here.',           time:'Mar 20, 2026',   read:false },
  { id:'notif-ch6lanternprologue',    msg:'Ch. 6 is live — "White Leopard"! The predator is now hunting for prey soon.',           time:'Feb 24, 2026',   read:false },
  { id:'notif-ch5lanternprologue',    msg:'Ch. 5 is live — "Reminisce"! Something from the past has resurfaced.',                  time:'Jan 24, 2026',   read:false },
  { id:'notif-ch4lanternprologue',    msg:'Ch. 4 is live — "Our Separate Ways"! The team starts pulling apart at the seams.',      time:'Jan 20, 2026',   read:false },
  { id:'notif-ch3lanternprologue',    msg:'Ch. 3 is live — "Chaotic Result"! Nothing went to plan. Time to deal with it.',         time:'Jan 18, 2026',   read:false },
  { id:'notif-ch2lanternprologue',    msg:'Ch. 2 is live — "Compromise"! Not everyone agrees — but the mission goes on.',          time:'Jan 17, 2026',   read:false },
  { id:'notif-ch1lanternprologue',    msg:'Ch. 1 is live — "Rescue Mission"! The Lantern Pact\'s first field mission begins.',     time:'Jan 17, 2026',   read:false },
  { id:'notif-welcome',msg:'Welcome to NovéLore! Tap any novel card to start reading.',                    time:'Jan 17, 2026',   read:false  },
];

// Bookmarks — { title, novelId, emoji, bg, genre, href, coverImg? }
const bookmarksData = [];


const novelDetails = {
  'lantern': {
    id: 'lantern',
    title: 'The Lantern Pact: Prologue',
    author: 'Frenzyyy & Botaks',
    bg: 'linear-gradient(160deg,#C44B1A 0%,#3B1A08 100%)',
    emoji: 'L',
    coverImg: 'https://i.imgur.com/iQMtLH9.png',
    genres: ['Dark Fantasy', 'Action', 'Adventure'],
    status: 'Ongoing',
    rating: 3.9,
    datePublished: 'January 17, 2026',
    synopsis: `In Kaihon, most people live their lives unaware of the dangers around them. When things go wrong, the Kaihon Light Pact handles it quietly.
    
Moon 'Sean' Mochizuki, Takeshi Kurotsuki, and Olivia Violetshade weren’t supposed to end up on the same team. Sean is reckless and hard to control. Takeshi tries to keep everything in order. Olivia, despite being their leader, keeps more to herself than either of them can figure out.

Their missions start simple enough—rescue operations, protection jobs, dealing with threats before they get out of hand. But as they spend more time working together, the cracks start to show. Mistakes happen. Secrets surface. And not everything can be solved by strength alone.

Something bigger is moving behind the scenes. And whether they’re ready or not, it’s already starting to involve them.`,
    volumes: [
      {
        number: 1,
        title: 'False Summer Arc',
        chapters: [
          {
            number: 1,
            title: 'Rescue Mission',
            date: 'Jan 17, 2026',
            volTitle: 'False Summer Arc',
            content: `Somewhere in Kaihon, Year 760 AC, 4:30AM. 


A group of armed men with a ski-mask patrol around the forest with their guns ready and loaded, keeping a lookout to their surroundings as they were guarding a place. They weren't just any armed men—they were kidnappers, guarding the hostages they kept in one place. This group has a connection with the Tundra Dragon, associating with a dangerous organization that has been existing for over a hundred years, but they tend to act independently as their own because they aren't part of Tundra Dragon organization but rather an affiliated group.


Kidnapping and human trafficking. That's their work.


An armed man patrols into the woods while his other colleagues are busy guarding behind. He grabs his cigarette and inhales before gradually taking his time blowing the smoke out. After patrolling further more in the woods, he stops and looks around, eyes peeling sharp and alert.


There was nothing unusual he detected… not yet it seems.


He put his hand on the cigarette in his mouth and was about to smoke when suddenly a bush fluttered in his right, causing him to get alerted and point his gun into that direction. He cocks his gun and turns on his flashlight, investigating the disturbance, slowly taking his step.


Whoosh!


A dart flew from behind and struck the man in the back of his neck. He winced and reached out behind, but before he could make a sound, a hand shot out from the foliage and dragged him in.


Crack. His neck snapped.


A few seconds later, after the silence, a young man with a black fox ear emerges from the shadow, holding a blow dart. He looks awkward and concerned rather than being mysterious and vigilant, his red eyes looking at the bush in front while mouth slacking.


“Was that really necessary?” He muttered.


The bush rustles. Moments later, a figure steps into view.


A pale-skinned young woman emerges, her sharp, snake-yellow eyes scanning the areas. Long, messy white hair spills down her back, contrasting with the magenta staff strapped behind her—its tip adorned with softly clinking golden rings.


Her name is Sarelia Bai, a 16-year-old hybrid born with the blood and power of a serpent. She is one of the members of the Kaihon Light Pact.


“Just making sure he's fast asleep, Takeshi,” she said in monotone.


‘I don't think he's waking up soon… Also, what's the point of this blowdart…’ the fox man thought.


Takeshi Kurotsuki, also sixteen, is a fox man from the Kurotsuki Clan, a linear known for its mastery of artifacts and scroll magic. Like Sarelia, he is a member of the Kaihon Light Pact.


Sarelia crouches low and peers into the distance, her snake familiar slithering silently ahead, its tongue flicking as it relayed what it senses. Her perception swept the area—every shadow, every unnatural stillness.


“East,” she whispered, pointing. “We should be able to infiltrate their base without being detected.”


Takeshi gave a deliberate nod and followed her lead, both of them sneaking into the shadows as they moved.


This was the place.


For over a decade, the armed group operating here had abducted innocent people—women and children—selling them into enslavement. Disappearances had risen steadily over the years, yet no force had been able to put an end to it.


The Kaihon Light Pact had tried.


Eight months of planning, scouting, and failed attempts had drained their resources. Too few members. Too many obstacles. The mission was almost abandoned—until new recruits joined the pact.


After completing smaller operations, they were finally entrusted with this one.


Infiltrate the enemy base. Eliminate the threat. Rescue the hostages.


For Sarelia and Takeshi, this was their first true field mission—and there would be no room for failure this time, for sure.


Sarelia and Takeshi halted and hid into the forest’s shadows, holding their breath as an enemy guard walked past them, unaware of their presence. Footsteps faded into the distance.


The moment the guard was far enough, both dashed forward, swift and silent, until they reached the structure ahead.


It was an old Japanese-style building, meticulously maintained by the armed men occupying it. Wide terraces lined its exterior, and a large open field lay at the center, surrounding a spacious lobby.


Sarelia tilted her head upward and spotted an open window on the fourth floor. She glances at Takeshi and subtly signals.


He nodded.


Reaching for a talisman at his waist, Takeshi activated it. Blue light flared softly as a grappling hook formed in his hand. He aimed upward and hurled it towards the window. The hook firmly caught perfectly.


He signaled.


Sarelia grabbed the rope and climbed swiftly. Takeshi followed moments later, vanishing into the darkness above.


Sarelia peered through the window, scanning the room for any sign of movement. Silence. No presence. Satisfied, she pulled herself up and stepped onto the wooden floor, landing lightly without a sound.


It was a quarter room.


She moves forward at a slow, measured pace. Moments later, Takeshi followed, placing his foot onto the floor—


Creak.


Sarelia pauses and glances back.


Takeshi clenched his teeth, his breath caught in his throat. The tension in his posture betrayed his panic.


Seconds passed.


No voices. No footsteps.


The creak went unnoticed. Takeshi let out a silent sigh of relief, Sarelia smiled faintly, as if she had expected the mistake all along.


She moved again, soundless, and soon noticed a door left slightly ajar. A thin line of light slipped through the narrow gap. Sarelia approached and peered through it.


On the other side, armed men patrol the lobby, standing watch like sentinels. The place was guarded like a fortress. The opening was too narrow to give her a clear count, but she could tell there were many.


Sarelia places her right hand on her shoulder. And then, a small white snake emerges from her hair, its body coiling gently around her fingers.


She lowered her hand to the floor and released it. The snake slipped through the narrow gap beneath the door and slithered into the lobby.


It glided between the guards’ boots, unnoticed by most. A few glances down, briefly acknowledging its presence—then dismissed it as nothing more than a harmless little creature.


None of them realized it was a familiar, silently mapping their defenses.


Meanwhile, Takeshi scanned the quarter room and noticed a framed map hanging on the wall. He approaches it and studies the markings. It was a printed layout of the base—rooms, hallways, and corridors carefully outlined.


His eyes narrowed.


One room on the map was marked with a red circle, roughly scribbled over the layout. When he traced its position, his gaze shifted around the room.


It matched their location.


Takeshi follows the mark’s position and stops in front of a cabinet. At first glance, nothing seemed unusual. But then he noticed the dust on the floor—disturbed, uneven, as if the cabinet had been moved recently.


He tapped the floor lightly.


Hollow.


Carefully, Takeshi pushed the cabinet aside. Beneath it lay a concealed trapdoor, its outline barely visible against the floorboards.


He turned and softly called Sarelia. She lifts her head and looks toward him.


Takeshi signals quietly.


He had found a way.

`,
          },
          {
            number: 2,
            title: 'Compromise',
            date: 'Jan 17, 2026',
            volTitle: 'False Summer Arc',
            content: `---


Sarelia was already inside the tunnel when Takeshi dropped through the trapdoor and pulled it shut above him.


They stood in a dimly lit, narrow hallway hidden beneath the structure.


The enemy base was built with secret tunnels spread throughout the compound. The trapdoor beneath the cabinet was just one of many, used for escape or to hide things meant to remain unseen. All of them were connected to an underground chamber buried beneath the building.


Sarelia gave Takeshi a small thumbs-up. “You've got a good perception, Takeshi.”


Takeshi scratches the back of his head. “I was just lucky to discover this.”


The two of them moved slowly through the tunnel, careful with each step. The walls were made of thin wood, and even the slightest noise could give them away. Muffled voices echoed from the other side of the walls—enemy guards speaking in low tones.


“Where is this heading?” Sarelia whispers to her back.


“If I remember correctly, it leads underground,” Takeshi replied.


Sarelia nodded. “My snakes already scouted the outside. It looks like the hostages are being kept somewhere hidden. There's only one room we haven't explored yet.”


Takeshi frowned. “But what if it's a trap? If they're keeping the hostages underground, they'd expect us to look there.”


Sarelia pauses for a moment. “Hmm. We'll see.”


After walking for some time, they reached the end of the tunnel, where a ladder descended into darkness. Sarelia went down first, with Takeshi following soon after.


Sarelia moved ahead while Takeshi paused, carefully observing their surroundings. Chains and metal collars lay scattered along the walls and floor. His stomach twisted at the sight. Disgust crossed his face, and he clenched his fist.


‘We’ll save them,’ he told himself, shaking his head before catching up to Sarelia.


Sarelia scanned the area and noticed a narrow gap in the wall to her left. Light spilled through it, shadows shifting beyond. She leaned closer and peered through.


Inside was a room resembling an office.


A man sat back in a chair, drinking liquor, while a woman stood nearby, collecting used glasses and placing them on a tray. He lit a cigarette, took another drink—


Crash.


A glass slipped from the tray and shattered on the floor.


The man rose abruptly, shouting at her as if he was going to smack her. He ordered her to clean it up immediately, threatening her with a cigarette burn if she didn't. The woman froze in fear, then hurried to obey.


Sarelia watched the scene unfold, her expression unreadable.


Takeshi saw it too.


Fury burned through him as he leaned against the wall beside the gap, teeth clenched.


“Those bastards…” he muttered.


Sarelia turned towards him, eyes sharp. She understood the anger—she felt it too—but this was a mission. Emotion could get them to compromise.


“Let's keep going, Tak—”


Suddenly—


The wall panel Takeshi was leaning against flipped inward, dragging him through before he could react.


‘Shi—!’


Sarelia immediately tries to catch him, but it is too late to react.


Thud.


Takeshi hit the floor hard. He pushed himself up quickly and looked around.


He was inside of the office.


A sharp click sounded to his right.


Takeshi turned his head slowly. The man from earlier stood there now, pistol raised, smoke drifting from his lips as he stared coldly at Takeshi.


The woman ducked down and covered her head as soon as she heard the gun click.


“Who are you?” he said, pointing his gun.


‘Crap… I messed up. I never thought that wall was a secret entrance either. I didn't notice until it was already too late. I'm sorry, Sarelia. I compromised our mission by my own idiocy.’ Takeshi frustratingly thought.


The man studied Takeshi closely, his gaze stopping at a silver, slim bracelet on Takeshi’s wrist—etched with gray patterns. Recognition flashed across his face. He knew exactly what it meant.


“You're from the Pact, huh?” the man said with a sneer. “You've got some nerve invading my base.”


Takeshi clenched his teeth and scoffed. “Yeah. I'm here for something pretty obvious. I'm here to rescue the hostages you Tundras have been kidnapping for years.”


Slowly, Takeshi reached behind his waist and grasped a talisman. Blue light flared as a sword materializing in his hand. He draws it and fixes his gaze on the man, steady and defiant.


“You've got some guts saying that, you Pact scum!” the man shouted. He raised his pistol, finger tightening on the trigger—


Crash!


The wall to his left exploded inward, wood splintering across the room.


Sarelia burst through the opening, kicking off the broken panel. She rolled across the floor, spun her staff in a swift arc, and struck the man's arm. The pistol flew from his grip and skidded across the floor.


In one motion, Sarelia seized the woman and pulled her out of reach from the man, moving quickly to Takeshi's side.


“Takeshi,” she said firmly, “protect the woman. I'll take care of this. I will also scold you later after this.”


‘I-I’m sorry…’ Takeshi thought awkwardly.


The man clutches his arm, pain flaring where the staff had struck him. He glared at Sarelia, teeth clenching in seething rage.


“You b*tch,” he sneered. “I'll make you pay for this!”


Sarelia and Takeshi readied themselves to confront him—when suddenly, an alarm blared throughout the building.


The man glanced at the alarm panel on the wall and broke into a confident grin. He knew reinforcements were already on the way.


“Perfect timing,” he said mockingly. “You Pacts are finished!”


“Crap—they already found us!” Takeshi said, panic creeping into his voice.


Sarelia paused, thinking. “Hmm… I guess they found the guy in the bushes?”


‘Is that really the best reason you can come up with?!’ Takeshi screamed internally.


The man grabbed a sword resting beside the table and drew it forward, a confident smile spreading across his face.


“It's all over for the two of you,” he sneered.


The tension in the room thickened.


Suddenly, the door behind them burst open. A guard stumbled into the doorway, hunched over and gasping for breath.


Takeshi spun around immediately, stepping forward to guard their flank as he raised his sword.


“Huff… huff… B-Bernard! Intruder—!” the guard gasped.


“I know!” the man whose name is Bernard snapped. “They're right here, you idiot! Now get them!”


The guard hesitated and looked past him.


He saw Sarelia facing Bernard head-on, staff ready, Takeshi stood between him and the woman, sword drawn, shielding her with his body.


Confusion crossed the guard's face.


“W-What the-?!” he shouted. “Bernard—there’s another intruder outside! I repeat—there’s a rabbit intruder!”


The room fell silent.


Sarelia and Takeshi froze for a split second.


Rabbit.


They both knew exactly who that meant—another member of the Kaihon Light Pact, and one of the strongest new recruits in its history.


But what is he doing here? He's not part of this mission.


Sarelia’s snake familiar reacted instantly, sending a sharp warning through her senses.


“Take cover!” she shouted.


WHAM! CRASH! BOOM!


Something smashed through the roof.


A body came crashing down into the room—it was one of the guards from outside, all beaten up. The structure groaned as cracks spread along the ceiling.


Crack.


Sarelia didn't wait for a moment.


She charges forward, spinning her staff in a swift arc and striking at Bernard. He blocked with his sword, but the impact locked their weapons together.


Meanwhile, Takeshi seized the opening.


He dashed toward the guard in the doorway, slashing diagonally and sending him flying aside. Without slowing, Takeshi grabbed the woman's hand.


“Let's go!”


They ran from the room as the structure began collapsing around them, wood splintering and debris falling bit by bit.


Takeshi ran down the hallway with the woman close behind him. At the far end, two armed men appeared, already alerted by the chaos.


Takeshi clenched his teeth. “Out of our way!”


He ripped a talisman from his waist and hurled it forward. An invisible barrier formed around him and the woman, moving with them as they advanced.


The armed men raised their rifles and opened fire.


Bullets struck the barrier and dropped harmlessly to the floor. The barrier blocked projectiles—but not people.


Takeshi saw the flaw and took advantage.


He drew his sword and dashed forward, slicing through the two men in swift, precise strikes before they could react.


More armed men poured in from both sides of the hallway, guns raised.


Too many.


Without hesitation, Takeshi scooped the woman into his arms and turned left. A large window stood wide open, overlooking the lobby below.


He leapt.


The fall should have been brutal—but it wasn't.


A strange force caught them midair. Takeshi felt his body slow, suspended by an unseen gravity. He descended gently and landed safely, the woman still clinging to him.


‘This power…’ Takeshi knew exactly where it came from.


Suddenly, bodies were flying.


Armed men were hurled into the walls and slammed onto the ground one after another. Takeshi looked up and saw chaos rippling through the lobby—guards trying desperately to retaliate against a single figure standing calmly and lazily at the center.


Rabbit.


A pale young man with rabbit ears stood among the fallen, wearing a black shade and a black scarf fastened with a swirling silver pin. His eyes glowed in faint purple, shaped like crescent moons.


One guard rushed him head-on.


In an instant, the guard was blasted backward, crashing into a distant wall.


Another tried to flank him—only to be intercepted mid-strike. The rabbit seized him, yanked him forward, and kicked him aside.


Gunfire erupted.


The bullets stopped midair, halted by an invisible barrier surrounding him.


The rabbit grinned.


He dropped the barrier. The bullets fell harmlessly to the ground, stripped of their force.


Raising both hands, faint blue light shimmered around his palms.


Two guards on either side were suddenly dragged towards him by an unseen force.


He flicked his wrist inward.


WHAM!


They collided face-first in front of him.


In the next instant, he vanished—leaving behind a purple afterimage—and reappeared in front of another foe, delivering a single punch that sent the man skidding across the floor toward Takeshi.


Takeshi stood frozen for a moment, watching.


“Seriously? This is it?” the rabbit laughed. “You guys talk big, but that's all you've got? Wow… I almost thought this might be fun, but it looks like this is just full of bullsh*t. So weak and kinda embarrassing!”


He mockingly said, fixing his shade in a lazy posture.


Moon Mochizuki—also known as Sean— is a member of the Kaihon Light Pact. Sixteen years old. A new recruit, and one of the strongest the Pact had ever seen. He was born from a clan infamous for its moon-based legacy power.`,
          },
          {
            number: 3,
            title: 'Chaotic Result',
            date: 'Jan 18, 2026',
            volTitle: 'False Summer Arc',
            content: `Sun rising in the distance horizon, orange sky shading gradually. It's sunrise now, 5:15AM.


“Hey, Sean! Don’t destroy their base!” Takeshi shouted. “The hostages are still somewhere inside—we have to get them out without any harm!”


“Huh!?” Sean replied, turning his head slowly. His mouth hung open in an exaggerated, almost offended expression.


“Do I even care about your frickin’ hostages? I’m here to have fun with these scumbags, not to play hero on some rescue trip.”


Takeshi froze. “…W–What???” His eyes twitched. “You idiot, this is a mission! Aren’t you our backup?!”


Before Sean could answer, a guard rushed in from his flank.


Thwack!


Sean lazily flicked the back of his hand without even looking. The guard crumpled to the floor instantly.


Sean didn’t move from his spot. He just slowly turned back to Takeshi, staring at him with the straightest, dumbest expression imaginable.


“…There’s a mission?”


‘ARE YOU FOR REAL?!’ Takeshi screamed internally.


Sean was immediately surrounded by armed men, weapons raised—guns aimed, blades gleaming under the lights. He slowly scanned the circle around him, mouth slightly open, eyes half-lidded like he was bored out of his mind.


“…Well,” he said at last, shrugging. “Guess it doesn’t matter that I didn’t know about your precious mission.” His grin widened. “All that matters is beating up these stupid monkeys.”


He cracked his neck and glanced over at Takeshi.


“And if you’re just gonna stand there gawking while holding a woman in your arms, I suggest you move already and do your job.”


Takeshi grit his teeth. “I will do my job, alright?! Just—don’t wreck havoc anymore!”


“Tch. No promises,” Sean replied lazily.


Without waiting, Takeshi dashed off to a safer area, carefully setting the woman down before turning back toward the chaos—Sean already standing in the middle of it, surrounded, smiling like he was right where he wanted to be.


The building rumbled violently as deep cracks echoed through the structure. Wooden pillars groaned under the strain, splintering inch by inch, while roof tiles broke loose and crashed down from above. Any more destruction, and the entire place would collapse into rubble.


Takeshi’s fox ears twitched sharply at the sound.


‘I should go help Sarelia and get the hostages out—now,’ he thought. ‘But I can’t do that if I’m still protecting someone.’


He glanced back at the woman, trembling where he left her.


‘And if Sean keeps yanking bodies around inside this building… it’ll only speed things up.’


Another violent tremor shook the floor beneath his feet.


‘Tch. Damn it… This is bad. Too many risks. Too many things to think about. If I make the wrong move here, people are going to die.’


His grip on his sword tightened.


‘Tch… What should I do…?!’


Suddenly—CRASH!


A body came flying from behind and slammed across the floor, skidding violently past Takeshi before stopping right at Sean’s feet. The man lay there unmoving, battered beyond recognition.


Bernard.


Metal clinked from the shattered wall as golden rings glinted faintly in the dim light. From the opening stepped Sarelia, her staff split into segmented parts like a retractable weapon. With a smooth motion, she retracted it back into a single straight staff, then swung it behind her and secured it against her back—calm, composed, victorious.


“Sarelia…!” Takeshi shouted.


Sarelia heard him, dusting off her left shoulder. “Don't worry, Takeshi, I'm fine. That creep was nothing but a bug.”


Sean didn’t hesitate.


He stomped down on Bernard’s face, the impact echoing through the hall. A triumphant grin spread across his face, arrogance practically pouring off him. The armed men surrounding him froze, hesitation rippling through their ranks as they watched their leader get crushed so effortlessly.


“B-Bernard is defeated! This is not good!” one of them said.


“Quick! We have to seize them and call Tundra for reinforcement!” one of them added.


The group was immensely pressured by the chaotic results, hesitation and tension amongst them.


Sarelia walked over and stopped beside Takeshi.


“The hostages are in the basement,” she said coolly. “Just like you predicted.”


“Then let’s move,” Takeshi replied immediately.


“Not yet.” Sarelia stopped him with a hand and continued, “We have to eliminate the threat first before heading to the next course of action.”


Then raised her voice toward the chaos ahead.


“Sean. Handle the enemies for us. Once you’re done, we’ll proceed with the rescue. Don't overdo it.”


Sean tilted his head, adjusting his shades as his grin widened—dangerous, eager.


“Heh. You don’t need to tell me twice,” he said, cracking his knuckles.


“I’m gonna beat the crap out of them so bad they won’t even remember what just happened to them.”


His crescent-shaped eyes glowed faint purple beneath his shades.


Sean extended his right hand. Blue light gathered in his palm, humming with pressure—and then the world tilted.


“Calling the First: Azure Moon… Attraction!”


Gravity shifted.


The guards on his right suddenly skidded backward, boots screeching against the floor as an unseen force dragged them toward him. Shock flashed across their faces as they fought to stay upright.


Sean flicked his wrist to the left.


The pulled guards were violently dragged across the ground, slamming into others who were rushing in. Before they could react, the attraction intensified—snaring everyone around him. Sean rotated in place, arm outstretched.


The air warped.


Enemies were ripped off their feet, dragged in a wide arc around him before being hurled outward. Bodies crashed into walls, trees, pillars—some even blasted back through shattered openings into the building itself.


The fight was over before it truly began.


Every single guard lay defeated, broken by a single overwhelming display of power.


Sean relaxed, letting the glow fade as his eyes returned to normal. He rolled his shoulders and grinned.


“Oh yeah,” he said smugly. “Too easy!”


Takeshi watches him in the distance, astonished by Sean's power. There's nothing else he can say other than being intrigued and astounded.


“And he did that with a single flick…” Takeshi muttered.


Sarelia stepped over the scattered unconscious bodies, moving casually through the mess as she approached Sean. Takeshi followed close behind, the woman staying near his side.


“Good work, Sean,” Sarelia said calmly. “You handled it.”


Sean nudged his nose with a finger, grinning.


“Piece of cake.”


“But—”


She stopped directly in front of him and placed her palm on his shoulder, gripping it firmly.


Sean stiffened slightly, confusion flickering across his face as he looked at her.


Sarelia smiled—sweet on the surface, sharp underneath.


“What did I tell you about not overdoing it?”


Right on cue, the building behind them let out a deep, groaning crack.


Wooden beams snapped. Walls buckled and the building began collapsing piece by piece, debris raining down in a deafening tone.


Takeshi flinched at the sound and spun around, eyes wide. The woman hurried closer, half-hiding behind him as the dust rose into the air.


“I-It collapsed…” Takeshi muttered.


Sean blinked once, watching the destruction unfold.


Then he adjusted his shades and smiled back at Sarelia.


“Relax,” he said lightly. “Everything’s fine.”`,
          },
          {
            number: 4,
            title: 'Our Separate Ways',
            date: 'Jan 20, 2026',
            volTitle: 'False Summer Arc',
            content: `---


“Everything's not fine.” A voice of an adult man said.


It's 3:40PM in the afternoon after the mission. Back on the Kaihon Light Pact base somewhere west of the Kaihon region.


Sarelia, Sean, and Takeshi stand firm inside the room as they were called in front of a senior member.


A tall man with black fox ears stood behind the desk, arms crossed as he regarded his junior members with a deliberate, unreadable gaze. He stood at six-foot-two, his presence imposing, crimson eyes sharp beneath a calm exterior.


He belonged to the same clan as Takeshi—so much so that many mistook him for an older version of the young fox at first glance.


His name was Yoruma Kurotsuki, twenty-six years old, a senior operative of the Kaihon Light Pact.


“Who's responsible for the destruction and compromising the confidentiality of the mission?” The adult fox man, Yoruma, asked.


Sarelia and Takeshi did not waste a moment and immediately pointed their fingers on Sean as he is in the middle.


“Him.” Both of them said.


Sean raised his right hand and replied, “In my defense, I didn't even know there's a mission in the first place!”


“So it was you, Sean…” Yoruma grabs a long wooden stick and—


SMACK!


Smacks it to Sean's head, comically giving him a bump on the head.


Sean grimaced with exaggerated expression, holding his head as he slouched on the floor.


“It hurts! I wanna cry!” Sean shouted.


‘Serves you right, jackass,’ Takeshi silently thought while smiling in satisfaction.


“The mission was about rescue, not making a showdown in front of the enemy. Because of your action, the procedure is compromised and the mission is practically unsuccessful,” Yoruma said, smacking his ruler on his palm.


He looks at Takeshi and continues. “For you, Takeshi, you let your guard down and your emotion betrayed your awareness. Because of that, the first step on the mission—infiltrating the enemy's base in stealth—has failed.”


Takeshi looks down in frustration, knowing that fact Yoruma said to him.


He looks at Sarelia and continues. “For you, Sarelia, you knew Sean's capabilities and temperament were volatile, yet you chose to let him do it anyway. That wasn't a strategy—that was a gamble. Because of that, the base has collapsed and the hostages are at high risk.”


“I’m sorry, Mr. Yoruma,” Sarelia apologizes and bows down politely.


Yoruma observes the three, seeing their different reaction from getting called out on their mistakes. He sighs and smacks the ruler once on his palm.


“Well, either way, the mission was already a failure in the first place,” he said. “The hostages were already moved from another place before you three arrived. Only one left and that was the woman Takeshi saved earlier. Our intel said that they were moving towards the north-northwest with carriages and horses. To be frank, this mission was planned poorly due to lack of credibility and we only trusted on estimation.”


The three paused for a moment, realizing Yoruma’s statement.


Sean immediately stands up and acts normally again.


“So, so, the mission was already puffed out! The Pact really didn't do a good job this time, huh?” Sean casually said.


“This is not entirely the Pact's fault! I will remind you that you're also part of this!” Takeshi shouted.


“Huh? Did you really say I'm the fault here? Look at yourself. You already jeopardize your mission in the first place because you let your emotions out like a baby. Bleh!” Sean replied arrogantly.


“What did you just say…!” Takashi clenched his teeth, annoyed.


“Can't hear ya, sucker! If you're picking up a fight, maybe we should already do this outside right now.” Sean provoked.


Takeshi turns towards Sean, same for the rabbit, and looks at each other with confrontation.


“Then let's—”


Fortunately—


SMACK!


SMACK!


Both the rabbit and the fox got smacked by Yoruma with the ruler.


“Quit fighting, you two.” Yoruma calmly said.


“It hurts…!” Sean muttered in pain, holding his head.


Takeshi grimaced silently, also holding his head.


Yoruma continues, “There's no one at fault for this. This is just a big mistake from the faction itself, not individually, so there's no consequences you will face. I'm not angry, I'm disappointed—and that's worse. The Kaihon Police Force has already conducted their investigation on the site, so there should be no problem. However, the Force didn't like us Pacts to vigilantly move on our mission as they deemed us as “communists”. So from now on, let's move more discreetly with our mission.”


Takeshi raises his head, still holding it with pain.


“Is this how they treat us after doing many good deeds?” he muttered.


“Heh. They all talked like ignorants,” Sean replied, slicking his ears up. “This is why I hate babysitting a bunch of weaklings. They can't even stand up to themselves. And when we are doing our jobs to protect them, they complain because of how we operate? Such a bunch of hypocrites. I even feel pity for the MRCI for doing their extreme jobs—let alone us.”


Takeshi looks at Sean, bothered by his comment.


“Not all of them are essentially useless…” Takeshi said. “It's true that they are weak, but that doesn't mean every single one of them is useless. The Kaihon Light Pact was made to bat—”


“Yeah, yeah, I know. To battle the evil essence of this country. To resist tyranny and protect the people. Altruism ideology, blah-blah-blah. I've been hearing that all day from here and there—it’s getting boring!” Sean rolled up his eyes, both hands inserted in his pocket.


“...Why are you being so difficult?” Takeshi muttered, still bothered by Sean's statement.


Yoruma crosses his arms and looks at them deliberately.


“Stop this nonsense and let's already move on to our next discussion.”


Sean and Takeshi briefly look at each other before turning away. Takeshi stood straight while Sean lazily rested his hands in his pocket.


“Now, for our next discussion of this last moment of meeting…” Yoruma pauses for a moment.


“Come on, what's the hold-up, Mr. Yoruma? It's getting late, y'know,” Sean said nonchalantly.


“Just let Senior Yoruma talk, you loudmouth rabbit,” Takeshi commented.


Yoruma looks at Sarelia, locking eyes with her as she meets his gaze. Sarelia closes her eyes and crosses her arms, nodding at her senior.


“You can announce it here, Mr. Yoruma. It's okay,“ she said.


Yoruma nods and reaches to his waist, grabbing a meticulous folded paper with a brown seal of the Pact. He opens the paper and reads the content with his eyes, closing his eyes after reading it and looks at his juniors with seriousness.


“Today, I'm going to announce that Sarelia's resignation letter has been approved by the leader of Kaihon Light Pact and she will be effectively dismissed this afternoon. Your service was a great contribution to our faction and we are grateful for your effort. Sarelia Bai is now officially withdrawn.”


Takeshi and Sean froze in their position, shocked to hear the announcement Yoruma stated recently. Takeshi twitched his eyes in complete disbelief, and couldn't believe what he just heard.


But sadly, it was all real.


“No way…” Takeshi muttered.


Sean didn't laugh.


For once, he didn't say anything at all.


He looked at Sean and saw his reaction. This is the first time Takeshi sees the rabbit's expression more frustrated than being a cocky person.


Sarelia was silent at the moment, still crossing her arms and looking straightforward. But she can already tell the disbelief of both her teammates on her side, and she had already anticipated this.


Especially for Sean.


---


5:00PM in the afternoon, hallway of the Pact base.


The sun was setting behind the Pact base, washing the stone halls in the bright sunset. Long shadows stretched across the floor, bending around pillars and doors that Sarelia had passed through countless times in the past six months.


She walked alone.


A single black bag hung from her left hand. Her staff rested against her shoulder, lighter than it used to feel. Each step echoed softly, steady, unhurried—like she had already made peace with this moment.


Footsteps suddenly rang out behind her.


“Sarelia—wait!”


Sean’s voice cut through the hall, sharper than usual.


She stopped.


For a brief second, she didn’t turn. Then she slowly looked over her shoulder, pale hair shifting as she met his gaze.


“What is it, Sean?” she asked calmly. “You look upset.”


Sean clenched his jaw. His rabbit ears twitched above his head.


“What is this supposed to be?” he demanded. “You’re just leaving? Like that?”


“I told you,” Sarelia replied. “I have something I need to do about my origin.”


“That’s not an answer.” His voice cracked with irritation—and something else underneath it. “You said we’d stay. You said we’d get through this together.”


She was quiet for a moment.


“I meant it,” she said softly. “At the time.”


Sean scoffed, stepping closer. “You can look for your ‘origin’ here. You don’t need to run off like you’re following Shen’s footsteps or something.”


“I’m not running,” Sarelia said.


Her voice was calm—but firm.


“If I stay,” she continued, “this power will decide who I become. I won’t let that happen.”


Sean’s hands curled into fists.


“So that’s it?” he snapped. “You just walk away and leave everything behind?”

Sarelia met his eyes fully now.


“No,” she said. “I’m taking responsibility—for myself.”


She turned her body toward the exit.


“If you want to stop me,” she added, “you can try.”


Sean froze.


She paused, then spoke one last time—quiet, sincere.


“Goodbye, Moon Mochizuki. I hope we meet again someday as the wind guide us through this world.”


And then she walked away.


Her footsteps faded down the left corridor, each one softer than the last.


Sean didn’t move.


He stood there, staring at the empty hallway. His usual grin never came back. Slowly, his shoulders dropped. His ears lowered. The shade hid his eyes—but not the way his hands trembled before he shoved them into his pockets.


Somewhere behind him, Takeshi watched. He wanted to say something.


But there was nothing he could say.

So he stayed silent—just like Sean—as Sarelia disappeared from sight.`,
          },
          {
            number: 5,
            title: 'Reminisce',
            date: 'Jan 24, 2026',
            volTitle: 'False Summer Arc',
            content: `---


7:14PM in the night. A town somewhere in Kaihon.


Lanterns glowing along the roadside as vendors advertise their skewers, sweets, and drinks to the crowd. Dancers moved through the streets, their colorful sleeves fluttering as families and people gathered to spectate. The town was preparing for the fireworks show later that night.

 

A small ramen stall sat at the edge of the road. The owner cooks in the kitchen while his assistant is serving their customers at the table. The aroma of the ramen has attracted customers from around.


Sean sat alone at one of the wooden tables.


His head resting on his arm, cheek pressing against the cool surface. His mouth slacks slightly, brows furrowed. His rabbit ears drooped low—far from his usual self. In front of him, a bowl of ramen sat untouched, thin wisps of steam slowly fading as the broth lost its heat.


He barely noticed.


He couldn't stop pondering about it earlier. Her words still echo in his head. Her calm expression. The way she had walked away without looking back.


The flavor of the ramen was already gone.


A customer came into the stall, calling the owner to serve him a ramen, and sat on the table where Sean is.


It was Takeshi Kurotsuki.


“Why didn't you stop her, Sean?” Takeshi said quietly.


Sean let out a slow breath through his nose, his palm covering his mouth as his eyes shut.


“Is that really the first thing you ask?” he muttered.


Silence stretches between them, filled only by distant noise and the clink of bowls.


Takeshi lowered his head. “I’m sorry. I shouldn't ask you that.”


Another pause.


Sean slightly raises his head, looking at Takeshi.


“What do you think our duty is as Pact members, Takeshi?” Sean asked.


Takeshi pauses for a moment before answering.


“To help, save, and protect people from evil. That's what made us Pact members.”


Sean shifts his posture as he leans to the side and rests his head against his hand.


“I was abandoned as a kid,” he said. “Left in Raitera Valley, living in the slum. It wasn't a safe place.”


His tone was flat.


A faint scoff escaped him. “I was a troubled kid back then. I thought I was stronger than everyone else at that place.”


“It didn't matter to me—people, missions, ideals. None of it did.”


Sean's voice lowered.


“Then I met Sarelia. And Shen.”


He fell silent.


“...I see.” Takeshi muttered.


The festival lights flickered across the rabbit's face, but the usual arrogance was gone—replaced by something raw and unresolved.


A ramen was served and set down in front of Takeshi. Steam curls upward as the rich aroma fills the space between them.


Takeshi picks up his chopsticks on the table, splits them apart, and lifts a few strands of noodles. He took a bite, then nodded softly.


“It's good,” he said. After a brief pause, he glances at Sean.


“You should eat yours too. It's getting cold.”


Sean looked at him, then let out a soft scoff, a faint smile forming beneath his shade.


“You’re awfully blunt,” Sean said.


Takeshi slurped the noodles and swallowed, then met Sean’s gaze with a straight face.


“I don’t really know what to say,” he admitted. “So I figured I’d at least tell you the ramen’s good.”


Takeshi stares at his ramen bowl, then looks at Sean again.


“Why did you join the Pact?” Takeshi asked.


Sean looks up while his head resting on his hand, pondering for a moment.


“It was just for fun,” Sean said. “I didn't really want to join so that I can use my power to help the weak. But, Sarelia insisted that I join because she also wanted to join the Pact.”


Takeshi’s mouth slacks a bit. “You really are a selfish guy, you know that?”


Sean scoffs. “Not that I care about it. I was born to be stronger. Babysitting the weak is not my style. People that are born weak are below my expectations to those who are equal to me.”


“And yet, you chose to stay here regardless of your point of view. You're ambiguous, Sean,” Takeshi replied, lifting a strand of noodles and eating it.


“Takeshi, I'm going to smack you,” Sean muttered, gesturing a flick on his left hand.


They both paused for a moment.


Sean finally fixed his posture, fixing his shade and looking at Takeshi.


“How about you, Takeshi? Why did you join the Pact?” Sean asked.


Takeshi puts down his chopsticks on the bowl, thinking about what to answer.


“Hmm… Senior Yoruma was really popular in my clan. He's the best version of every Kurotsuki could ask for—having to inherit the Shikigami Call and Shadow Inventory. I joined because I wanted to learn the techniques my clan has passed through generations from Senior Yoruma.”


“Oh? Is he really that strong?” Sean wonders.


Takeshi continues. “He's not just strong—he’s everything that I don't have. He joined the Pact because he wants to use his power to help people, so I follow his path because I also want to help people.”


“Does it bother you?” Sean asked. “Mr. Yoruma can use the infamous techniques of Kurotsuki Clan while you can only use basic talismans.”


Takeshi exhales, smiling slightly in content.


“Not much,” he replied. “Not every Kurotsuki can wield basic talismans and shikigamis, so I'm one of the specials.”


“Step up, man,” Sean said with a sly smile.


Sean continues. “Well, you don't need to worry about it. I'm the strongest teammate that you'll ever have.”


Takeshi sighs in slight exasperation.


“Huh? What's wrong?” Sean noticed.


“It's just…” Takeshi muttered, rubbing his eyes before looking at Sean. “I don't think you understand what it means to be the strongest.”


“Huh?!” Sean loudly reacts.


“Being the strongest isn't about overwhelming everyone,” Takeshi said. “It’s being the one who stays standing when things go wrong and doesn't lose control when it matters most. The one people can trust—not fear.”


Sean scoffs. “I don't want that.”


“Come on, dude, at least be humble for once. What if the other seniors will see you like that? They would dislike you very much,” Takeshi tries to convince.


Sean scoffs again, giving a sly smile.


“Heh. Let them have problems with it. It's such a boring day if I don't even let my confidence out for once!”


‘You mean arrogance?’ Takeshi thought to himself.


Takeshi sighs. “Why am I stuck with you…”


“Huh? What are you whining about?”


“Nothing.”


Sean reaches to the bowl of ramen in his front, sips the broth slightly. He tastes the ramen flat and cold, making a dissatisfied expression.


“Flat.” Sean bluntly said.


Takeshi put his hand to the table as he rested his head.


“You left it cold. Blaming you for that,” he said.


Sean raises his right hand along with his ears perking up, calling the owner of the stall.


“Old man, give me another bowl! Takeshi will pay my tab, he said,” Sean said.


“WHAT!?” Takeshi reacts.


Sean’s hand was still raised when a distant boom echoed through the night.


Both of them paused.


Above the rooftops, the first firework bloomed—light spilling across the sky in streaks of red and gold. The crowd down the road erupted into cheers, laughter rising with the smoke.


The colors reflected briefly in Takeshi’s bowl… then in Sean’s half-lidded eyes.


Another firework followed. Then another.


For a moment, neither of them spoke.


The festival had begun.`,
          },
          {
            number: 6,
            title: 'White Leopard',
            date: 'Feb 24, 2026',
            volTitle: 'False Summer Arc',
            content: `---
            
            A cloudy afternoon hung over a small town in Kaihon.

Inside a ramen shop, a television played a horse race. A few customers watched while eating, caught up in the excitement as their chosen horse surged forward toward the finish line.


At one table, a man lifted the last strand of noodles and quickly slurped it up. He glanced at his empty bowl, then back at the screen.


Not wanting to miss the ending, he stood and hurried toward the counter.


He wasn’t paying attention.


He collided with someone.


SHATTER!


The bowl slipped from his hands and shattered across the wooden floor.


“I’m sorry,” he said immediately.


The woman didn’t answer.


She stood still for a moment.


A snow leopard hybrid—middle-aged, long white unkept hair, sharp eyes.


She looked at him.


Then scoffed.


“Use both your eyes next time, idiot.”

Before he could respond, she stepped forward and deliberately bumped into him.


Hard.


He stumbled and fell to the floor with a thud.


His expression twisted in anger.


“Hey—what’s your problem? I already apologized!”


She didn’t react right away.


Instead, she turned back.


Then slowly crouched in front of him.


Her eyes locked onto his.


The atmosphere shifted.


It wasn’t loud.


But it was heavy.


Her gaze pressed down on him—sharp, cold, and dangerous. Something about it felt wrong. Not just anger… something deeper. Something that didn’t belong in a place like this.


The man’s breathing tightened.


Instinct told him to move.


But he didn’t.


He couldn’t.


After a moment, she straightened up and walked away like nothing had happened.

She returned to a table at the back and sat down beside a man wearing a mask.


The table was already filled with food—ramen, sushi, teriyaki, and a glass of juice.


“Took you long enough, Naomi,” the masked man said.


Naomi Hakutora leaned back in her chair.

“I had something to take care of.”


“Oh?” he replied. “Something important?”


She reached into her pocket and pulled out a stack of betting tickets, placing them on the table.


“Horse betting.”


The man scoffed lightly. “You’re still wasting time on that?”


Naomi didn’t deny it.


“Not a waste if I win.”


“Do you?”


The commentator’s voice peaked—


“Heaven in Dreams surges forward—! It’s neck and neck—!”


The shop held its breath.


“…and Heaven in Dream takes the win—!”

Noise exploded.


Cheers. Groans.


She glanced at the tickets, then toward the television.


“…Today didn’t go as planned.”


A pause.


The masked man smirked. “So you lost.”

Naomi didn’t respond.


“Thought so.”


“Alright,” he said, leaning forward slightly. “Let’s move on to why I’m here.”


Naomi’s expression flattened.


“Get to the point.”


He placed a folder on the table and slid it toward her.


“I represent the Tundra Dragon, like as always I do whenever we meet in the past. We have a contract for you. This time—you’ll never ignore it.”


Naomi didn’t touch the folder.


“I don’t take blind contracts.”


“That’s why I brought details.”


She exhaled slowly, still uninterested.


“Then explain it.”


The man opened the folder and turned it toward her.


Photos. Reports. Intelligence.


Stamped clearly across the first page: ASSASSINATION: DEAD ONLY


Naomi’s eyes shifted.


The name beneath the photo:


“Olivia Violetshade. The leader of the Kaihon Light Pact,” he said.


Naomi finally looked at the file properly.


Not impressed.


“What is it for me? Assassinate her?.”


“Yes.”


She leaned back.


“That’s not a contract. That’s a suicide request.”


The man didn’t argue.


Naomi continued, more measured now.


“You’re asking me to walk into a fortified organization, eliminate their leader, and walk out without triggering a full response.”


“Correct.”


“Heh. That’s not how things work.”


“Then you adjust.”


Naomi gave a short, dry laugh.


“You’re underestimating what she’s protected by. Even if I get close, the moment she’s threatened, everything tightens. I won’t get a second chance. I'm not stupid like you and your little pouty evil organization that is obsessed with an absurd ideology.”


The masked man was calm.


“I didn’t say it would be easy.”


“Then you’re not listening.”


She tapped the table lightly.


“You don’t aim for the head first. You weaken everything around it. Remove support. Create openings. Let the others exhaust them before letting me do my job.”


A beat.


“Your approach is sloppy.”


The masked man picked up his chopsticks and snapped them clean in half.


“I’m aware of your methods.”


Naomi’s eyes narrowed slightly.


“You know nothing about my methods, dumbass.”


“I know enough.”


His voice lowered slightly.


“You wiped out your entire clan in one night. Hundreds, was it?”


Silence followed.


Naomi didn’t respond.


But the air around her shifted.


“The comparison differs a lot,” she said calmly.


“Oh? What's the difference?”


She picked up a piece of teriyaki.


“That was open ground. Controlled chaos. This—” she gestured slightly toward the folder “—is a fortified target.”


“And yet,” he said, “you’re still here.”


Naomi took a bite.


“Because you haven’t said anything worth accepting.”


The masked man flipped to another page.


“That might change your mind.”


Naomi didn’t look immediately.


“I doubt it.”


“Look anyway.”


After a brief pause, she did.


Her eyes landed on the photo.


A white rabbit hybrid.


Dark scarf. Silver pin. Crescent iris.

Naomi’s expression shifted—subtle, but noticeable.


Recognizing.


Not surprised.


Just… aware.


The masked man watched her carefully.


“You know what that means.”


Naomi leaned forward slightly, studying the image.


A faint pause.


Her lips curled faintly.


“A bunny.”


Her gaze lingered on the image.


“My clan failed to exterminate them completely, I see.”


The masked man spoke again.


“He's one of the newest recruits on the Kaihon Light a while back. The Tundra have been struggling to fight back the lost equilibrium after his first presence.”


Naomi finally leaned back.


“Heh. I've seen a strong one, but not him for sure.”


That was the first real shift in her tone.


“If he’s involved, then this won’t be just another job.”


She looked at him now.


Focused.


“Which means I need more than just money.”


“So,” he asked, “what’s your price?”


Naomi didn’t hesitate.


“400 million gelta.”


“And?”


“Leave the folder.”


He considered it.


Then nodded once.


“Done.”


As he stood, he added, almost casually:


“Don’t waste it.”


A pause.


“You might want to consider doing something more stable after this. Gambling isn’t exactly a career.”


Naomi exhaled lightly.


“Don’t lecture me.”


He walked toward the exit.


Then stopped.


“Oh, one more thing.”


Naomi didn’t look up.


“Your daughter. Fuyumi. She’ll be sold next year. A client that owns a circus show wants to buy her in the slavery through auction. Leaving your only child like that—you sure are heartless and pathetic.”


Silence.


Naomi set her chopsticks down.


Slowly.


Her posture didn’t change.


She thought. Not long, but carefully.


Then finally—she looked up.


Calm.


Empty.


“Who?”`
          },
          { number: 7,
          title: 'A New Hand',
          date: 'Mar 20, 2026',
          content: `---
          The morning was the kind that didn't ask anything of you.

Sun spread across the wide concrete ground of the Pact base, catching the edges of leaves on the decorative trees that lined the stone path in clean, unhurried light. Somewhere past the east wall, a bird was making noise. Everything else was quiet.

Sean sat on the stairway steps with his arms draped loose over his knees, head tilted back, staring at the sky like he was waiting for it to do something interesting. His shades were pushed down slightly. His rabbit ears hung relaxed.

He looked like someone who had decided boredom was beneath him and was now reconsidering.

Footsteps approached from behind — steady, familiar.

Takeshi stopped at the top of the steps, glanced down at him, and said nothing for a moment.

"You're up early," he finally said.

"Didn't sleep."

"Oh." Takeshi sat down one step above him. "Are you okay?"

"Obviously."

"Right."

He didn't push it. He set his elbows on his knees and looked out across the path. The bird past the east wall kept going.

A stretch of quiet passed between them — not awkward, just present.

"We're down to two," Takeshi said.

"Careful, Takeshi. That almost sounded like a feeling."

"I'm being practical."

"You're being sentimental and dressing it up."

Takeshi looked at him. Sean was still watching the sky, expression unreadable behind his shades.

"…Does it bother you?" Takeshi asked. "Moving forward without her."

Sean was quiet for a moment.

"It doesn't change anything," he said. "Mission's still the mission. We're still here."

He said it like it was the end of the conversation.

Takeshi turned back toward the path.

*He's bothered,* he thought. *He just doesn't have a word for it he likes.*

Three sets of footsteps came down the path.

Takeshi raised his head. Sean's ears shifted forward — subtle, automatic.

The first person walking toward them moved like she'd already assessed the area and decided it wasn't a threat. Confident stride, shoulders easy, eyes scanning anyway out of habit. Dark hair pulled back. A bruise on her forearm she hadn't bothered to cover — old enough to not hurt, recent enough to still be visible. She was dressed light, practical, nothing on her that didn't have a use.

Behind her came someone shorter, quieter, with a notebook tucked under one arm and the look of a person who was always half-listening to something no one else could hear. Careful steps. Aware eyes. The kind of person who noticed things and wrote them down before deciding what to do about them.

The third was tall and broad, hands in his pockets, pace unhurried. He wore a small device near his collar. He didn't sweep the area with his eyes the way a nervous person does — he just looked, steadily, and filed it away.

The first one raised a hand when she spotted them.

"A fox and a rabbit." Not a greeting so much as a confirmation.

"Dalia Hartman," Takeshi said, recognizing her.

"Yeah." She stopped at the base of the steps. "Chinoya Soranagi. Dmitri Alekseyevich Morozov." She nodded to each of them in turn. "We've been briefed on your unit."

Sean, still seated, tilted his head back toward them.

"Briefed on what, exactly?" he said.

"The Chapters one through three disasters." Dalia said it plainly, without malice. "The failed infiltration, the compromised stealth, the collapsed building."

"Ah." Sean smiled. "The highlight reel. Something I was very proud of."

"Yeah. Something like that."

Chinoya stepped forward slightly, adjusting the notebook under her arm. "For what it's worth — the extraction of the one hostage was still a successful outcome, given the circumstances." She paused. "I thought that was worth saying."

"It is," Takeshi said. "Thank you."

Chinoya paused before smiling softly.

Dmitri had been looking at Sean with a calm, evaluating expression. He moved his hands — short, deliberate.

Takeshi watched, uncertain.

Chinoya translated without looking up from her notebook. "He's asking if you're always like this."

Sean looked at Dmitri. "Like what?"

Dmitri signed again.

"Sitting down while everyone else is standing."

Sean considered this with complete seriousness.

"Yes," he said.

Dmitri nodded once, as if that was a sufficient answer, and looked away.

The conversation moved to missions — naturally, the way it does when people in the same line of work end up in the same place. Dalia talked with the kind of bluntness that came from not seeing the point of softening operational facts. Chinoya added detail where Dalia skipped it, precise and careful. Dmitri contributed through her when he had something worth adding, which wasn't often, but when he did it tended to reframe things slightly.

Takeshi found himself following the rhythm of it easily.

Sean leaned back on his palms and mostly didn't participate, though his ears stayed angled forward the whole time, which Takeshi had learned to read as interest.

Eventually Dalia checked her watch.

"We've got a briefing." She looked between them. "We'll see you around."

"Probably," Takeshi said.

She gave a short nod, turned, and headed back up the path.

“We'll see you sometime again, Takeshi,” Chinoya said and bowed quickly toward both of them — small, earnest — and followed.

Dmitri paused.

He looked at Sean for a moment, then signed something brief, and turned to go.

Sean watched him.

"What did he say?" Takeshi asked.

"I don't know. He was gone before *Chiyono* could translate."

Takeshi looked down the path at the three of them. "I think I like them, and it's Chinoya."

"That silent guy was interesting," Sean said, which from him was a significant statement.

"High praise."

"Don't push it."

Heavier footsteps came from the entrance behind them.

Takeshi recognized the sound and stood without thinking about it.

Yoruma stepped out from the base, arms folded behind his back, crimson eyes moving across the two of them in one sweep — Sean seated, Takeshi standing — and said nothing about the difference.

"Good. Both of you are here."

"Were we expected somewhere else?" Sean asked.

"Please don't start," Takeshi muttered.

Yoruma stopped a few feet from the steps and pulled a document from the folder tucked under his arm. He reviewed it once, briefly, then looked up.

"Team composition," he said. "As of today, your unit has a third member to fill the vacancy."

Sean's ears moved. Barely.

Takeshi straightened slightly. "A new recruit?"

"No." A pause — brief, deliberate. "A reassignment."

He turned slightly toward the entrance.

"She's already here."

Even steps came from inside.

A young woman walked out in the morning. Violet hair, worn loose. Eyes a deep, calm purple — the kind that moved across a space the way water levels itself, adjusting without rushing. She wore the Pact's insignia on her collar, same as anyone else, nothing about it announcing itself.

But Takeshi recognized the face.

"That's—"

"Olivia Violetshade," Yoruma said. "Leader of the Kaihon Light Pact."

Silence followed that sentence.

Takeshi stared at her, then at Yoruma, then back at her.

"The— the leader."

"Yes."

"Is joining our unit."

"That is what I said."

"Why?"

"She requested it."

Takeshi opened his mouth. Closed it. Looked at Olivia.

Olivia looked back at him with an expression of complete, patient calm.

"A Kurotsuki," she said, with an easy nod. ”It's nice to see a younger version of Yoruma.”

Then her gaze moved to Sean.

Sean had been watching her since she walked out. He looked her over from behind his shades the way he looked at most things — like he was deciding whether it was worth his attention.

Then he leaned back on his palms and said, "Huh."

Olivia waited.

"So they send the head of the Pact down to run errands with us," he said. "Didn't know the Pact was that short-staffed."

Olivia tilted her head — just slightly.

"And I didn't know the famous Moon *Sean* Mochizuki sat down for every conversation," she replied, pleasantly. "Is that a strategic choice, or just a habit?"

Sean blinked.

"…What?"

"Sitting," she said. "You've been on those steps since before we arrived. I assumed it was intentional. Controlling the sightline from a lower position — making people talk down to you so you can read their posture." She paused. "Or you just prefer it. Either way."

A beat of silence.

Sean stared at her.

Takeshi carefully turned his face forty-five degrees to the left and looked at a nearby tree.

Sean pushed his shades up slowly.

"I just prefer it," he said.

"Of course," Olivia agreed, and looked back at Yoruma. "What's the mission?"

*She didn't even blink,* Takeshi thought, pressing his mouth flat. *She just walked up and immediately made him feel like a specimen.*

He was extremely happy.

Yoruma opened the folder and turned it toward the three of them.

A photograph. A name. A route marked in red across a regional map.

"There's a VIP requiring protection and escort. Political significance — full details at departure briefing. Current intelligence indicates there are parties with a strong interest in making sure this person doesn't arrive at their destination."

"How solid is the intel?" Olivia asked.

"Solid enough that I'm not sending a standard detail."

She studied the route. "Bottleneck here," she said, pointing at a narrow section marked along the road. "If anyone's planning an interception, that's where."

"That's our assessment too," Yoruma said.

Takeshi leaned in and looked at the route. "Departure time?"

"East gate. Two o'clock this afternoon."

Takeshi nodded, committing it.

Sean had stood up at some point in the last thirty seconds — quietly, without announcement. He was looking at the photograph with his hands in his pockets.

"Who else has access to the route information?" he asked.

The question landed cleanly. Yoruma looked at him.

"Limited. You'll be told what you need before you leave."

Sean's expression didn't change. He just looked at the photo a moment longer, then stepped back.

Yoruma closed the folder, tucked it away, and regarded the three of them one last time.

"Don't complicate this," he said.

Then he turned and walked back inside.

---

Quiet settled over the three of them.

Olivia looked toward the east gate, orienting herself. Then she looked back at the path without any particular hurry, like she was just letting the morning exist for a moment.

Sean stood slightly to the side, hands in his pockets, watching her in his peripheral vision with an expression that hadn't quite decided what it wanted to be.

Takeshi glanced between them.

"So," he said. "How long have you been planning to join a field unit?"

"A while," Olivia said. "It's hard to make good decisions about operations you've never been inside of."

"That's…" Takeshi nodded slowly. "That's a fair point, actually."

"I'm full of those," she said, without arrogance. Just plainly.

Sean made a short sound — not quite a scoff. Not quite a laugh.

Olivia looked at him.

"Something wrong?" she asked.

"No," Sean said. "Just figuring you out."

"Let me know when you're done," she said. "I'll be doing the same."

She said it the same way she said everything else — calm, even, without weight behind it. Which somehow made it land heavier than if she'd meant it as a challenge.

Sean looked at her for a moment.

Then he looked away, a faint smile pulling at the corner of his mouth.

*Huh,* he thought. Not out loud. Just internally.

*Interesting.*

Takeshi fell into step beside Sean as Olivia moved slightly ahead to study the east gate.

"You're quiet," Takeshi murmured.

"I'm always quiet."

"You're never quiet."

Sean tilted his head in something that might have been a concession.

"She's sharp," he said, low enough that it wasn't for anyone else.

Takeshi looked at Olivia — standing at the edge of the path now, reviewing the route in her head from memory, probably already three steps into planning.

"Yeah," Takeshi agreed.

"Annoying," Sean added.

"You think everyone who keeps up with you is annoying."

"Because they usually aren't trying to. She is."

Takeshi considered that.

"Is that a problem?"

Sean was quiet for a beat.

"Ask me after the mission," he said.

He rolled his shoulders, for long.
         `},
         {
         number: 8,
         title: 'Daylight',
         date: 'Mar 30, 2026',
          content: `The city moved the way cities do in the middle of the afternoon — without asking permission, without slowing down.


Traffic pushed through the wide roads in steady waves. Shop fronts spilled music onto the sidewalks. People crossed at lights, ducked into convenience stores, sat outside cafés with their drinks sweating in the heat. A normal day in a modern city doing what normal days do.


In the park at the center of it all, three people sat on a bench beneath a row of trees.


One of them was horizontal.


Sean had his legs stretched across the full length of the bench, ankles crossed, one arm folded under his head and the other resting across his stomach. His shades were on. His soda can balanced on his chest, rising and falling with his breathing. His rabbit ears drooped flat against the top of his head.


He looked like he was on vacation.


Olivia sat on a separate bench across from him, one leg crossed over the other, soda in hand, watching the foot traffic with her usual measured calm. Her wooden sword — requested from Takeshi before departure, now leaning against the bench beside her — drew the occasional glance from passersby who then thought better of asking.


Takeshi stood a few feet away from either of them, arms folded, eyes moving steadily across the park. His fox ears rotated in small, frequent adjustments, catching sounds and filing them. He hadn't touched his soda since Olivia handed it to him forty minutes ago. It was warm by now.


"Update," he said, not looking at them.


"Nothing from my end," Olivia said.


"Bench is comfortable," Sean said.


Takeshi exhaled through his nose.


The VIP — a woman of political significance whose full briefing they'd received that morning — was currently two blocks away inside a mid-rise office building, attending a private client meeting. Expected duration: ninety minutes. Sixty had already passed.


Takeshi had placed wards across the perimeter before they settled in. Seven of them — thin, invisible markers anchored to doorframes, lampposts, and the underside of a drainage cover near the building's service entrance. They didn't do anything on their own. They just told him when something entered the area that shouldn't be there.


So far, nothing had tripped them.


He kept watching anyway.


Sean's soda can shifted as he tilted it up, found it empty, and set it back down on his chest with a soft metallic sound.


He stared at the sky above the tree canopy. A cloud drifted through it going nowhere fast.


"Thirty more minutes," he announced.


"Of what?" Olivia asked.


"Of this." He gestured vaguely at the park. The city. The bench. Existence in general.


"We're on a mission," Takeshi said.


"I know. I've been on this mission for an hour. It was interesting for the first four minutes."


Olivia tilted her soda, checking how much was left. "What happened in the first four minutes?"


"Found a good position on the bench."


She considered this. "That's fair, actually. This bench is good."


Sean pointed at her without looking over. "See. She gets it."


"Don't use me as a reference point," Olivia said.


"You just agreed with me."


"I agreed about the bench. That's not a philosophical alliance."


Sean was quiet for a moment. A pigeon landed near the base of the bench, looked at him, and left.


"Do you want to go find food?" he said.


"We're on a mission," Takeshi repeated, with the patience of someone who had already used up most of it.


"There's a place that does grilled skewers about two minutes from here. I saw it on the way in. The smoke smelled good."


"Sean."


"Olivia." Sean turned his head toward her. "Skewers."


Olivia looked toward the street in the direction he was pointing, visibly calculating whether it was logistically feasible.


Takeshi looked at her.


"Don't," he said.


She looked back at her soda.


"…They do sound good," she admitted.


"Olivia."


"I said they sound good. I didn't say we should go." She paused. "We probably shouldn't go."


"Probably," Sean echoed, like the word was doing a lot of work on its own.


"Nobody is leaving," Takeshi said firmly, turning back to scan the building. "Thirty more minutes and we're done. You two can get your skewers after. Just—"


He stopped.


His ears snapped upright.


"Takeshi?" Olivia said, already reading him.


"Ward three," he said, voice dropping. "It's gone."


Not tripped. Not triggered.


Gone. Destroyed.


"Which entrance?" Olivia was on her feet before he finished the sentence, wooden sword in hand.


"Service side. East." Takeshi pulled a talisman from his waist, running a read on the remaining wards. "Ward six is flickering. Something's moving fast along the perimeter — deliberately avoiding the main entrance."


"They've scouted it," Olivia said. "They knew the layout before they came in." She turned to him fully. "I'll take the lobby. If they're moving along the east side this fast, they either have someone inside already or they're about to create a distraction at the front to cover the east entry. You take the stairwell between floors two and three — natural choke point for a snatch-and-go." She glanced at Sean. "Sean—"


She turned.


The bench was empty.


The soda can sat perfectly upright on the ground where he'd been lying, like he'd taken the time to set it down neatly before disappearing entirely.


Takeshi stared at it.


"He didn't wait," he said.


"No." Olivia was already moving. "Go. Trust the strategy."


Takeshi pulled another talisman and ran.


Olivia gripped her wooden sword and moved toward the building — measured, reading the street, watching the windows.


*If I were running this,* she thought, *I'd have sent the distraction already.*


Right on cue —


A deep, pressurized boom rolled through the city block. Not just sound — the kind you feel come up through the pavement, through the soles of your feet. Black smoke curled from the east face of the building, second floor up. Glass blew outward and rained across the road. Car alarms triggered down the block in a chain reaction. The crowd froze for half a second, then moved — fast, away, the way crowds do when something stops being background noise.


Olivia ran.


---


Sean had found the stairwell on instinct and cleared it in seconds.


The smoke hit him on the second floor — thick, fast, spreading from the east corridor. Fire suppressors kicked on overhead, throwing water across the floor in wide, sweeping arcs. Voices rose in the stairwell below him, tangled and urgent.


He pushed through the smoke and came out into the hallway.


There she was.


The VIP — mid-forties, dark suit, the kind of face built for composed rooms — was being wrestled forward by two men in tactical masks. One had her arm wrenched behind her back. The other was looping a coarse rope around her wrists, a sack ready in his other hand.


They heard Sean step into the hall.


Both looked up.


Sean stood in the middle of the corridor, hands in his pockets, water dripping from the suppressors onto his shoulders, shades slightly fogged from the smoke.


He looked at them. They looked at him.


"Rough day?" Sean said.


Neither of them answered.


"I'm going to take that as a yes." He tilted his head slightly. "You can let her go now, by the way. Save us all some time."


The man with the rope shoved the woman toward his partner and bolted.


"Yeah, I figured," Sean said, already moving.


The second man yanked the woman forward and ran after his partner, dragging her stumbling behind him. She fought against the grip — short, sharp resistance, refusing to just be pulled.


Sean followed at a run, closing the gap fast down the corridor.


"You know," he called after them, "for guys who planned this whole thing out — the ward-sweeping, the timed explosion, all of it — the exit strategy is pretty embarrassing."


They hit the service door at the end of the hall and crashed through it.


Sean came out right behind them.


---


The minivan was idling at the far end of the alley, side door already open. The first man reached it and dove in. The second shoved the woman through the door after him, rope half-tied, and jumped in. The van lurched forward before the door was fully shut.


Sean came out of the service exit and watched it pull away down the side road.


He started running.


"Seriously," he muttered, "a van. They brought a van."


He burned a thread of moon energy into his legs — felt the afternoon sun sitting on it like pressure, like trying to run uphill — and pushed through it anyway, closing the distance as the van swung wide around a corner.


He grabbed the rear handle and held on.


The van surged. His boots dragged along the road, sparking.


Someone inside noticed. The side door slid open and a masked man leaned out, arm cocked back.


Sean looked up at him from the back of the moving van.


"Hi," he said.


The man swung.


Sean ducked, released the handle, hit the road in a roll, and came up running.


"Okay!" he shouted after it. "Rude!"


He pushed harder, closing the gap again — and then an idea landed.


*Blood Moon.*


If he could get it off cleanly — just once, just enough to flip the van or blast it into the wall — this would be done in two seconds. He knew it was there. He could feel it the way you feel pressure behind a door you haven't figured out how to open yet. He'd tried it before. It had worked. Sort of. In a forest. On some trees that definitely deserved it.


This was basically the same thing.


He raised his right hand while running, fingers spread, the crescent glow in his eyes flickering unevenly.


Crimson light began churning in his palm — raw and restless, nothing like the clean blue of Azure Moon. This was angrier. More unpredictable. The kind of thing that wanted out more than he knew how to let it.


"Calling the Second—" he started.


The light surged.


"—Blood Moon—"


It scattered.


Broke apart like smoke in wind, dissolving into nothing before it became anything real. Just his empty hand and the afternoon sun still pressing down on his shoulders like it was making a point.


Sean clicked his tongue.


*Again.*


"Calling the Second," he said again, lower this time, more focused, one eye on the van and one eye on whatever was happening in his palm. "Blood Moon— Repul—"


The pressure built in his eyes, hot and sharp, climbing fast — and then the shape of it collapsed again, leaking out through his fingers before he could lock it into anything.


"—sion," he finished, to absolutely nothing.


He stared at his hand while running.


"…Come on," he muttered.


The van cut left down a narrow street — too narrow, badly misjudged — and clipped a stack of crates outside a loading bay. The front end lurched, overcorrected hard, and the van went sideways into a parked delivery truck with a grinding, heavy crash that echoed off the alley walls.


Sean rounded the corner, chest heaving slightly.


*Well,* he thought. *That works too.*


The side door wrenched open and both men scrambled out, one hauling the woman behind him by the rope. She hit the ground on her knees, caught herself, and immediately started working her wrists against the rope. It held.


Sean came around the corner measuring what he had left — the failed attempts had burned through more than a clean technique would have. He could feel it, the reserve sitting lower than he liked. He let the second moon go and dropped back to physical.


*Stop wasting it on something you can't finish,* he told himself.


The men spotted him and split — one dragging the woman deeper into the alley, the other turning to intercept.


The one turning came in fast and low, going straight for Sean's center.


Sean sidestepped, let the momentum carry the man past him, and put him into the alley wall with one short, clean strike. No power. Just hands.


The man went down and stayed there.


"You really ran at me," Sean said, looking down at him. "Bold choice."


He turned.


The second man was twenty meters deep in the alley, the woman stumbling hard behind him on the uneven ground. Sean went after them, pushing what was left in his legs. His vision pulsed once at the edges — the crescent glow thin and muted, barely lit.


He was ten meters back when his hand rose again.


Not a decision. More like a reflex — the power reaching for the second moon one more time because some part of him still thought he could catch it if he was just fast enough about it.


"Calling the Second," he said under his breath, teeth together, crimson light sputtering back into his palm. "Blood Moon… Repulsion—"


This time it held.


For a full second it actually held — the pressure surging up through his arm, the crimson steadying into something real, and for one genuine moment he thought: *I've got it—*


It slipped.


Not a fizzle this time.


The other kind.


The repulsion released — not forward, not aimed, not remotely close to what he'd intended — just *out*, wild and directionless, a burst that cracked the alley wall to his left and sent a section of loose brick scattering across the ground like it had been hit by something considerably larger than one person.


Sean stumbled sideways from the recoil, catching himself against the opposite wall.


Dust settled.


He stood there for a second, one hand braced against the brick, staring at the dent he'd just put in a wall that was supposed to be a van-flipping technique sixty seconds ago.


"...Hm," he said.


Not to anyone. Just to himself and the alley.


Ahead of him, the man with the woman had stopped and was staring back at the destruction with the expression of someone rapidly reassessing several life decisions.


Sean straightened up and pointed at him.


"That," he said, completely calmly, "was on purpose."


The man turned and ran faster.


Sean exhaled and went after him, the second moon already folded back down somewhere beneath the surface where he couldn't quite get his hands on it.


*One day,* he thought. *One day I'll actually work out how that's supposed to go.*


He pushed his legs harder.


A sharp whistle cut through the alley from above.


The man with the woman spun.


Olivia dropped from the fire escape.


She landed clean — both feet, no stumble — wooden sword already in motion, and swept it hard across the back of the man's knees. His legs buckled. She followed through with a firm strike across his shoulders that drove him flat into the ground, and he stayed there, face-down, finished.


She straightened up and looked at the woman.


"Are you hurt?"


The woman stared at her, chest heaving, wrists still bound.


"…No," she managed.


Olivia nodded and crouched to work the rope loose.


Sean stopped a few meters back. He stood there, breathing, and looked at the man on the ground, then at Olivia, then — briefly — at the chunk of wall he'd taken out halfway down the alley.


"Where were you ten minutes ago?" he said.


"Lobby." She didn't look up from the rope. "There was a third one waiting at the front entrance. He's not a problem anymore."


"And the sword worked?"


"It always works." She stood, rope in hand, and looked at him properly — eyes moving past him to the cracked wall, the scattered brick, the general shape of something that had gone off in the wrong direction, then back to his face.


"Was that you?" she asked.


Sean looked at the wall. Then back at her.


"The structural integrity in this city is genuinely concerning," he said.


Olivia held his gaze for a moment with her usual expression — calm, reading, giving nothing away.


She let it go.


She turned to the woman. "We're with the Kaihon Light Pact. You're safe. Can you walk?"


The woman straightened, composing herself with a visible, practiced effort. "Yes."


"Good. We're moving in a moment."


"Olivia."


She looked at Sean.


He had his hands back in his pockets, posture easy, like the last ten minutes hadn't happened. But he wasn't quite meeting her eyes.


"Good timing," he said.


It came out flat. Casual. The kind of thing he might say about anything.


But she heard it.


"You're welcome," she said simply.


---


Takeshi appeared at the far end of the alley a minute later, slightly out of breath, a talisman still warm in his hand. He took in the scene — two men down, the van wrecked and steaming at the alley mouth, the woman standing, Sean upright.


Then his eyes found the destroyed section of wall.


He looked at it for a moment.


Then at Sean.


"Daytime," Sean said, before Takeshi could open his mouth.


"That's not what—"


"Daytime," Sean said again.


Takeshi closed his mouth. He looked at the wall once more — the caved-in brick, the scatter radius, the particular shape of something that had released without any real direction — and made a quiet, private decision not to finish that sentence.


"Anyone hurt?" he called toward Olivia instead.


"No," she said.


He walked in, deactivating the talisman, and fell into step beside the woman. "We'll get you out through the west side. There's a secure route — I'll walk you through it."


She nodded once, firm. Whatever fear had been on her face in the alley was already folding itself back behind something practiced and controlled.


Takeshi glanced at Sean as he passed, dropping his voice.


"You tried the second moon."


It wasn't a question.


Sean said nothing for a beat.


"It almost worked," he said.


"The wall—"


"Almost," Sean repeated, with complete conviction.


Takeshi looked at him for a long moment.


Then he sighed quietly and kept walking.


Olivia fell into step beside Sean as the group moved toward the alley entrance. The city noise came back around them gradually — traffic, people, the ordinary sound of an afternoon that had no idea what had just happened behind the mid-rise.


After a moment, quiet enough that it wasn't for anyone else:


"The second moon," she said. "You called it three times."


"I don't know what you're talking about."


"I heard you from the fire escape. Twice it dispersed mid-callout. The third one took out a section of wall."


"Wind," Sean said.


"Sean."


"Strong wind. Localized."


She looked at him sideways and said nothing. Just waited.


Sean rolled his shoulders.


"It keeps dispersing," he said, after a moment. Quiet. Matter-of-fact, like noting a technical problem he wasn't particularly bothered by — except that he was, slightly, in a way he wasn't going to name out loud. "I can feel exactly where it is. I can call it. I just can't get a clean hold on it before it either falls apart mid-call or—" he tilted his head toward the ruined wall, "—does that."


"Has it ever actually worked?" Olivia asked.


A pause.


"Once," he said. "Sort of."


"What does sort of mean?"


"It means it went off." He glanced at her. "Just not in the right direction. Or the right size."


"How wrong a size?"


"There were trees involved."


"Were the trees okay?"


"The trees were not okay," he said.


Olivia looked ahead, pressing her lips together in a way that was clearly not a smile and also clearly was.


"Next time you're going to call it," she said, "say something first."


"I'll figure it out on my own."


"I know you will." A beat. "Say something first anyway."


He looked at her sideways.


"Don't make it weird," he said.


"I'm not making anything weird."


"You're being reasonable about something that doesn't need to be reasonable. It's weird."


She said nothing.


But she filed it away — the wall, the three attempts, the callouts that went nowhere, the one that went wrong in a forest somewhere — and kept walking.


Sean reached up and adjusted his shades. The afternoon sat flat and bright across the street ahead, the kind of light that didn't ask whether you were ready for it.


"I hate daytime missions," he said.


"Noted," Olivia said.


"Write it down."


"I'll remember it."


"Write it down anyway."


She didn't answer.


But somewhere behind the calm exterior, she almost smiled again.


Almost.`
         },
         {
         number: 9,
         title: 'What We Carry',
         date: 'Apr 9, 2026',
          content: `The car was already waiting when they came out of the side street.


A black sedan, engine idling, driver standing at the rear door with his hands folded in front of him. The afternoon had softened slightly — the sun dropping a few degrees, the city noise settling into its later rhythm. People were heading home now, or toward dinner, or wherever the end of a Tuesday took them.


The VIP walked toward the car with the same composure she'd pulled together in the alley — quick, deliberate, like she'd decided somewhere between the rope and the road that she wasn't going to let the afternoon define her. Her suit was scuffed at the knee. She hadn't mentioned it once.


She stopped in front of the three of them before getting in.


"I want to thank you," she said. Her voice was steady, unhurried. The kind of person who meant what she said and didn't feel the need to decorate it. "All three of you. I understand this is your duty — but duty and doing it well aren't the same thing, and you did it well."


Takeshi bowed slightly. "We're glad you're safe. That's what matters."


"It is," she agreed. Then, with something that wasn't quite a smile but was close: "Your colleague chased a moving vehicle."


"He does that," Takeshi said.


She looked toward Sean.


Sean was standing a few feet apart from the other two, slightly turned away, two fingers resting at the corner of his eye just beneath his shades. Not pressing. Just touching. Like confirming something quietly, privately, in a way he thought nobody was clocking.


"Thank you," she said toward him.


Sean dropped his hand.


"Didn't really break a sweat," he said, still not fully turning. "You were fine."


She looked at him for a moment — the particular look of someone who understood they weren't getting more than that — and nodded once. The kind of nod that carried more than it showed. Then she got in.


The driver closed the door. The sedan pulled out of the car park and merged into the street and was gone.


Takeshi let out a slow breath and rolled his shoulder, already running through the post-mission inventory in his head — wards to retrieve, a report to file, the blown-out ward three to account for, the section of alley wall he was trying very hard not to think about.


"I'll start pulling the wards," he said. "Ward six needs a manual check — it was still flickering when I last read it."


"I'll come," Olivia said.


"You don't have to—"


"I want to understand the ward placement. For next time."


Takeshi looked at her, then nodded. He turned to Sean. "Sean, we're—"


"I need to pee," Sean said.


A pause.


"…What?"


"Bathroom." He was already walking, one hand raised lazily behind him in a vague gesture of farewell. "Public one's around the corner. Go do your ward thing. I'll catch up."


Takeshi watched him go.


Then he looked at Olivia with the expression of someone deciding how much energy to spend on a thought.


"He's fine," he said. Mostly to himself.


Olivia watched Sean's back as he rounded the corner — the hand that had drifted back up to his face the moment the sedan was out of sight. Quick. Casual. Like brushing something off his shoulder.


"Mm," she said.


"Olivia—"


"Ward four. I'll meet you there."


She was already walking before Takeshi could finish the question.


---


The public restroom around the corner was empty at this hour.


One long mirror above a row of sinks, a fluorescent light buzzing faintly overhead. A window near the ceiling let in a thin strip of late afternoon. The floor was damp from earlier use. It smelled like hand soap and tile cleaner, which was the best you could reasonably hope for.


Sean stood at the middle sink with the tap running.


He had one hand braced against the basin, the other cupped under the water. He brought it up and pressed it against his face, held it there for a second — cold, grounding — then straightened up and looked at the mirror.


His eyes were dim.


The crescent shape of his irises — usually sharp and cleanly lit from somewhere behind them — had gone soft at the edges. The purple was low, muted, pulsing once faintly before settling back into something quieter than usual. He pressed two fingers to the outer corner of his left eye.


Dull ache. Specific. The kind that had been building since the alley and wasn't finished yet.


He stared at himself in the mirror for a moment.


Then clicked his tongue, turned the tap off, and stood there in the quiet with the expression he didn't use around other people — not quite a frown, not quite anything. Just honest. The face underneath the shades when nobody was watching.


"You're in the men's room."


His eyes moved in the mirror.


Olivia stood at the entrance, one shoulder against the doorframe, arms folded. She wasn't looking around the space with any particular concern. She'd assessed it the moment she walked in and moved on from that assessment.


Sean turned around slowly.


"Mm," he said, looking at her. "Bold."


"The women's room is on the other side of the building."


"And yet here you are." He leaned back against the sink, crossing his arms. "Did you follow me?"


"I walked in the same direction as you."


"That's following me."


"That's a matter of interpretation."


Sean tilted his head, a faint grin pulling at the corner of his mouth. "You know, most people would at least knock."


"You would've said you were fine through the door." She pushed off the doorframe and walked in like the sign on it was a suggestion. "So I skipped the middle part."


She looked at him.


"How are your eyes?"


"Perfect," he said immediately.


"You had your hand on them twice in the last ten minutes."


"I had something in them."


"Twice."


"It was persistent."


Olivia looked at him with the particular patience of someone who had already decided they weren't leaving without an actual answer and was entirely comfortable waiting as long as it took.


Sean held the expression for a moment.


Then he shrugged — loose, easy, the full performance of someone who genuinely could not see what the issue was.


"Daytime," he said. "Sun drains the moon energy. When I push the eyes past what the daylight allows, they ache for a bit after. Not a big deal."


"How long is a bit?"


"Couple hours. Maybe more today." He waved a hand. "Sorts itself out. Always does."


"And the second moon attempts?"


He looked at her.


"What about them?"


"Three callouts. Two dispersed. The third one took out a wall." She said it the same way she might read a mission report — factual, no editorializing. "That's not nothing on the reserve."


"I had it under control."


"Sean."


"I had it under control," he said again, same tone, same easy certainty behind it. Unbothered. Final. The kind of line he'd drawn so long ago it had become part of the landscape. "I caught the van. I took down two guys. The wall's the city's problem. Everything worked out."


"The wall—"


"Everything worked out," he said pleasantly.


She looked at him.


He looked back, perfectly comfortable.


She let it go — not because she agreed, but because she recognized a wall when she saw one, and had the sense not to throw things at it.


A beat passed.


Sean stayed leaning against the sink, half-lidded, unbothered, the picture of someone who had nothing to add.


Then his eyes moved across her.


Not casually. The other way — the way he actually looked at things when something didn't quite fit the room it was standing in. Slow. Reading. Past the surface of her, past the measured exterior and the even voice, landing somewhere underneath all of it.


There it was.


He'd noticed it the first day and filed it without comment because it wasn't his business and he hadn't been curious enough to make it his business. A presence sitting around her like a second layer of weather — not threatening, not loud, just wrong in a quiet, persistent way that had nothing to do with her and everything to do with something underneath her. Heavy. Layered. The kind of thing that didn't come from training.


Something that wasn't hers.


"Alright," he said, "while we're here."


"While we're here, what?"


"What is that thing around you?"


Olivia's expression didn't change. But something behind it did — barely, briefly.


"What thing?" she said.


"The presence." He kept his voice light. Conversational. Almost bored, the way he talked about most things that were actually interesting to him. "I read aura. Always have. Everyone's got one — baseline energy, background noise, I ignore it." He tilted his head. "Yours has something sitting underneath it. Heavy. Layered. Can't see the shape of it. But I can feel the weight from here. Been there since day one."


A silence passed through the room.


Not long. But the kind that changes the air.


Olivia looked at the floor for a moment — just briefly, just a second — then back up.


"You can actually see it," she said. Not a question. More like confirming something she hadn't quite let herself expect.


"The presence. Not the thing itself." Another shrug. "But yeah. Clearly."


She was quiet.


Then — something shifted. Small. The kind of thing you'd miss if you weren't paying attention. Her shoulders dropped just slightly, not in defeat but in the particular way of someone who'd been holding a door shut a long time and had quietly decided to take their hand off the handle.


"It's a curse," she said.


Sean's face didn't move. He just waited.


"Attained. Not inherited, not trained into. It's been there a long time." She said it clean and flat, the way you describe a scar you've had long enough to stop thinking about every day. "It doesn't control me. I function. I've always functioned." A brief pause. "It just — exists. It's always there."


"Does it hurt?" Sean asked.


"Not the way your eyes hurt." She paused. "Different kind of thing."


"What kind?"


She looked at him.


"The kind you learn to carry," she said. "And mostly stop noticing."


Sean was quiet for a moment.


"Hm," he said.


That was it. Just — hm. Like she'd told him something mildly interesting about a street he'd never been to.


Olivia blinked once. Just once. She'd clearly been braced for something more to land.


"How many people know?" he asked.


"Almost no one."


"Why?"


"Because people hear the word curse and stop thinking clearly." She held his gaze, steady. "Especially where I stand. I've spent a long time making sure the work speaks before anything else does. I'd like to keep it that way."


Sean nodded slowly.


Then: "Okay."


Olivia paused. "Okay?"


"Yeah." He pushed off from the sink and stretched his arms above his head, easy and unhurried, like they'd just finished talking about the weather. "I'm not going to go around telling people. What would I even say — hey, the boss has a curse, pass it on? Boring. Not interested."


Olivia looked at him.


"That's it?" she said.


"What were you expecting?"


"More," she said. "Something."


"Like what?"


"Questions. Concern. A reaction."


Sean lowered his arms and looked at her with a mild, genuinely puzzled expression.


"You've been carrying it this long," he said. "You're clearly fine. It's not eating you alive. Why would I make it into a thing?"


Something moved across her face — brief, unguarded, gone almost as fast as it appeared. The particular expression of someone who had prepared for a harder landing and found the ground unexpectedly level.


"Right," she said.


"Besides." He tilted his shades down slightly — just enough, letting her see his eyes. Dim. Aching. Still stubbornly lit underneath. "You're not going to say anything about this either. Or the wall. So we're even on all counts."


"I wasn't planning to."


"Good." He pushed the shades back up. "Then we never had this conversation."


Olivia held his gaze for a moment.


Then she extended her hand.


Sean looked at it. Looked at her. Then reached out and shook it once — firm, brief, done — and let go.


"Not a word," he said.


"Not a word," she agreed.


She turned and walked toward the exit. At the door she paused, not looking back.


"Get some water before you regroup," she said. "Your eyes will recover faster."


"I know how my own eyes work."


"I know you do."


She walked out.


Sean stood in the empty bathroom.


He turned back to the mirror. Looked at his reflection — shades slightly crooked from where he'd tilted them, crescent glow still dim, the ache sitting dull and constant behind his eyes.


He turned the tap on. Cupped his hands. Drank.


Straightened up. Adjusted his shades until they sat right. Looked at himself once more — expression the same easy, unbothered neutral it always was, the face that gave nothing away and asked nothing back.


Then he walked out into the afternoon like nothing had happened at all.


Because as far as he was concerned, nothing had.`
          },
        ]
      }
    ]
  }
};

