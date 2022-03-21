'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Birds', [
      {
        common_name: 'Snowy Owl',
        scientific_name: 'Bubo scandiacus',
        family: 'Owls',
        description: 'Seen south of Canada in numbers only some winters. Beautiful owl. Completely white with variable amount of black markings. In general, old males are the whitest, while immature females have the most dark markings. Favors lakeshores and coastal areas with fields, marshes, piers, and sand dunes in winter. Breeds on arctic tundra',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878260/snowy_owl_gggers.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878238/snowy_owl_mkk7t1.jpg',
        range: 'Found in North American and western Europe',
        conservation_status: 'Vulnerable'
      },
      {
        common_name: 'Rosy-faced Lovebird',
        scientific_name: 'Agapornis roseicollis',
        family: 'Parrots',
        description: 'A small, short-tailed parrot with a soft pink face and dark eyes. Native to southwestern Africa, but feral populations occur in Arizona and in Hawaii; a common pet species, and escapees may occur anywhere. Wild birds are leaf green with brilliant blue rumps, but escaped domestic types may be mostly blue or yellow. Inhabits dry forests and river valleys; present in cities in both natural and introduced range. Call is a shrill, high whistle',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878263/rosy_faced_lovebird_vjz1cv.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878237/rosy_faced_lovebird_d1wovu.jpg',
        range: 'Found in a small part of South African west coast',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Red-tailed Hawk',
        scientific_name: 'Buteo jamaicensis',
        family: 'Hawks',
        description: 'Most common roadside raptor across much of North America. Often perches atop telephone poles, light posts, and edges of trees. Incredible variation in plumages, including less common dark morphs and various regional differences. Eastern adults have brilliant reddish-orange tail and pale underparts with obvious band of dark marks across belly. Western birds are typically darker. Immatures do not have a red tail',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878265/red_tailed_hawk_fjq9u8.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878246/red_tailed_hawk_is19in.jpg',
        range: 'Found all over North and Central America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Peregrine Falcon',
        scientific_name: 'Falco peregrinus',
        family: 'Falcons',
        description: 'Burly, powerful, sharp-winged raptor that feeds mainly on birds captured in flight. Found across the globe; considerable plumage variation across subspecies. Chases prey down at high speeds with continuous powerful wingbeats. Becoming increasingly common, especially in cities, where they can nest on tall buildings and feed on pigeons. Also frequents mudflats and open areas with shorebirds',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878255/peregrine_falcon_jc7qsn.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878283/peregrine_falcon_e3her9.jpg',
        range: 'Found all over the world',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Northern Shoveler',
        scientific_name: 'Spatula clypeata',
        family: 'Ducks',
        description: 'Medium-sized duck; smaller than a Mallard. Huge, spoon-shaped bill visible at a distance and in flight. Breeding males have dark green head, white breast, and chestnut sides and belly. Females buffy-brown with large, distinctive bill. Chalky-blue upperwing. Forages by sifting through the water, often swimming in spirals in groups',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878252/northern_shoveler_su1zo2.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878232/northern_shoveler_cpchqn.jpg',
        range: 'Found all over the world',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Northern Saw-whet Owl',
        scientific_name: 'Aeogolius acadicus',
        family: 'Owls',
        description: 'Pint-sized owl of the U.S., Canada, and Mexico; found in northern forests and western mountains. Prefers areas with conifers and thick understory. Fairly common, but shy and difficult to see. Patterned with brown and white overall, with streaked white forehead and blotchy rusty-brown streaks below. No ear tufts. Migratory, but numbers of migrants fluctuate greatly from year to year. Named for its loud, repetitive whistles that sound like a saw being whetted (sharpened). Also gives a harsher, rising screech. Most similar to less common Boreal Owl. Saw-whet is smaller with streaks (not spots) on forehead and richer orange-brown streaks on underparts',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878251/northern_saw_whet_owl_pkvwwo.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878229/northern_saw_whet_owl_f9oooh.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Northern Harrier',
        scientific_name: 'Cicus hudsonius',
        family: 'Hawks',
        description: 'Medium-sized hawk with long tail and thin wings. Flies with wings held in a V-shape, low over open fields and marshes, listening for rodents lurking below. Distinctive foraging behavior and conspicuous white patch on rump in all plumages. Females and immatures are warm brown. Adult males gray above and whitish below with black wingtips',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878251/northern_harrier_ozgvfy.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878233/northern_harrier_kndzr1.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Mountain Bluebird',
        scientific_name: 'Sialia currucoides',
        family: 'Thrushes',
        description: 'Adult males are stunning: completely electric turquoise blue with limited white belly. Females are gray with blue wings and tail; some can show a rufous wash on breast. Also note thin bill and even longer wings compared with other bluebirds. Forages in open habitats with few trees. Can form large flocks in winter. Frequently perches on wires or fence posts. Nests in cavities',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878254/mountain_bluebird_fltn92.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878276/mountain_bluebird_cytbtq.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Great Horned Owl',
        scientific_name: 'Bubo virginianus',
        family: 'Owls',
        description: 'Large and widespread owl with distinctive ear tufts. Found in a variety of habitats from dense woods to prairie and deserts with at least some trees. Also, found in wooded towns and suburbs. Typically well-camouflaged dark brown overall, but varies in color. Often engages in haunting duets, with males and females hooting back and forth. Preys upon a variety of animals, including mammals, birds and reptiles',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647389984/great_horned_owl_vnu5oc.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647389985/great_horned_owl_hnzqj2.jpg',
        range: 'Found all throughout the Americas, though most densely populated in North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Goldcrest',
        scientific_name: 'Regulus regulus',
        family: 'Kinglets',
        description: 'Fairly common to common in coniferous and mixed woodland, forest, plantations, and gardens with conifers; migrants show up in hedgerows and areas without conifers. In autumn–winter, often travels with foraging flocks of tits and other small woodland birds. Inconspicuous but active, often high in the canopy. Tiny: smaller than warblers, with distinctive combination of black-edged, golden crown stripe, big dark eye giving impression of "innocent" face; also note white wingbar offset by black wing patch',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878250/goldcrest_rfr7tx.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878274/goldcrest_mtdro4.jpg',
        range: 'Found all throughout Europe and in scattered parts of Asia',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Fiery-throated Hummingbird',
        scientific_name: 'Panterpe insignis',
        family: 'Hummingbirds',
        description: 'If you see the throat in good light, there is no mistaking this beauty: no other hummingbird combines every color of the rainbow on the throat and breast. In poor light, could be mistaken for other fairly large hummingbirds like Talamanca Hummingbird. Look for dark blue-black tail, medium-length bill with pink at the base, and blue rump, or just wait for it to turn its head. Sexes alike. Found in montane forests and edges, mostly from 1500m to treeline. Frequently visits feeders',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647389983/fiery_throated_hummingbird_g2csua.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647389985/fiery_throated_hummingbird_ty9kvh.jpg',
        range: 'Found in Costa Rica and on the western edge of Panama',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Cuban Tody',
        scientific_name: 'Todus multicolor',
        family: 'Todies',
        description: 'A small, gemlike, woodland species that is usually found in pairs. The rather large head, long bill, and short tail create a unique profile. Also note its shimmering green upperparts and red throat and sides. No similar species occur within its range. It usually hunts from low-to-middle level perches, sitting nearly still before leaping upwards to snatch prey from twigs and leaves. Vocalizations include a loud “chuk, chuk, chuk, chuk,” uttered at a rate of about seven to ten notes per second, with each burst consisting of one to ten notes; bursts often come in rapid succession',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878245/cuban_tody_zpp7hh.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878273/cuban_tody_bprvwk.jpg',
        range: 'Found in and around Cuba',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Crimson Chat',
        scientific_name: 'Epthianura tricolor',
        family: 'Chats',
        description: 'Brightly colored, terrestrial songbird of arid inland Australia. Breeding male has crimson crown and belly, gray back, black mask, white throat, pale eye, and blackish wings with narrow pale wingbars. Nonbreeding male more muted, with only hints of crimson. Female similar to nonbreeding male but paler around the face. Usually seen in small grounds hopping along the ground in open areas',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878239/crimson_chat_ayvyv1.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878270/crimson_chat_stydct.jpg',
        range: 'Found all over Australia',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Canada Jay',
        scientific_name: 'Perisoreus canadensis',
        family: 'Jays',
        description: 'Adults are gray overall with a white head and dark nape. Juveniles are dark sooty-gray with a white mustache stripe. Some variation across range; Rocky Mountain birds are palest. A bird of northern latitudes and high elevations; found in coniferous forests and clearings. Almost always in pairs or small family groups. Known for friendly, inquisitive behavior. Often seen around campgrounds and roadsides, looking for food handouts. Voice consists of variable soft, husky notes',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878248/canada_jay_rezajw.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878277/canada_jay_rdoovq.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'California Quail',
        scientific_name: 'Callipepla california',
        family: 'New World Quail',
        description: 'Small and rotund with obvious teardrop-shaped plumes protruding from forehead. Looks gray and brown at a distance, with white streaks on the sides and a scaly belly. Males have black face and longer, more curled crest than females. Usually seen in flocks running on the ground in open, scrubby habitats. Listen for frequent, three-noted call, audible at long distances. Separated from similar Gambel’s Quail by range; also note California has scaly belly with rusty (not black) patch and duller brown crown and sides. Native to western North America including Baja California; well-established introduced populations in Chile, Argentina, New Zealand, and Hawaii',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647467550/california_quail_sypw60.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647467550/california_quail_vlko2c.jpg',
        range: 'Found along the western coasts of North and South America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Blue-footed Booby',
        scientific_name: 'Sula nebouxii',
        family: 'Boobies',
        description: 'Large seabird of inshore waters, often seen from beaches but not usually up close. Adult has streaky brown-and-white neck and bright blue feet. Immature has dusky brownish head and neck and grayish feet. All plumages told from Brown Booby by white at the base and tip of the tail. Typically flies and soars fairly high up. Feeds by spectacular, steep-angle plunge-dives. Breeds locally in colonies on offshore islands, nesting on the ground. Most well-known from the Galapagos but occurs extensively along the Pacific coast of Middle and South America, especially in the Gulf of California',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878243/blue_footed_booby_vodemo.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878268/blue_footed_booby_chiln6.jpg',
        range: 'Found along the western coasts of North and South America near the seashore',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Black-capped Chickadee',
        scientific_name: 'Poecile atricapillus',
        family: 'Chickadees',
        description: 'This tiny, plump-bodied, big-headed bird is a familiar woodland resident and backyard visitor in the northern U.S. and Canada. Gray overall with light buffy flanks and a contrasting head pattern: black cap, white cheek, and black throat. Short, stubby bill is used for hammering open seeds. Often the core of mixed flocks of songbirds. Visits feeders. Nearly identical to Carolina Chickadee, but range barely overlaps. Especially note voice, brighter white on wings, and buffier flanks on Black-capped. Beware that hybrids occur frequently in the overlap zone and some are best left unidentified',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878243/black_capped_chickadee_mrzi7v.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878266/black_capped_chickadee_z7x074.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Belted Kingfisher',
        scientific_name: 'Megaceryle alcyon',
        family: 'Kingfishers',
        description: 'Stocky and large-headed with a shaggy crest. Bill is long, straight, thick, and pointed. Powder blue above with white underparts and blue breast band. Females have additional rusty band across belly. Almost always solitary, perched along edges of streams, lakes, and estuaries. Flies along rivers and shorelines giving loud rattling calls. Hunts for fish by plunging headfirst into the water, either directly from a perch or hovering',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878239/belted_kingfisher_ve3f6b.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878259/belted_kingfisher_pupkfq.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Bee Hummingbird',
        scientific_name: 'Mellisuga helenae',
        family: 'Hummingbirds',
        description: "This tiny nectar sipper is the world’s smallest bird. It feeds on woodland flowers, especially those that are more horizontally positioned. Males often found perched on high exposed branches. The male is stunning with an iridescent red head and turquoise upperparts. The female is also turquoise above, but is dingy below. This species is readily identifiable by its tiny size and relatively short bill. In flight, this species’ wings make a sound resembling that of a bumblebee, hence its name. The most common vocalization is an extended, high-pitched, jumbled twitter",
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878243/bee_hummingbird_zglfun.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878262/bee_hummingbird_wfy6gl.jpg',
        range: 'Found in and around Cuba',
        conservation_status: 'Near Threatened'
      },
      {
        common_name: 'American Goldfinch',
        scientific_name: 'Spinus tristis',
        family: 'Finches',
        description: 'Small finch. Sharply pointed bill is pink in summer, grayish-brown in winter. Small head, long wings, and short, notched tail. Adult males in spring and summer are bright yellow with black forehead and wings. Females are dull yellow below and olive above with two distinct wingbars. In winter, they are drab, buffy-brown. Active and acrobatic. Sometimes in large numbers at feeders or on ground below. Found in weedy fields, cultivated areas, roadsides, orchards, and backyards',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647878234/american_goldfinch_wijdy4.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647878265/american_goldfinch_ufftwh.jpg',
        range: 'Found all over North America',
        conservation_status: 'Least Concern'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Birds', null, {});
  }
};
