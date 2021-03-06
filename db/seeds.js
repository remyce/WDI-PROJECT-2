const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config   = require('../config/config');
const Festival = require('../models/festival');

mongoose.connect(config.db);

Festival.collection.drop();

const festivals = [
  new Festival({
    name: 'Fat Out Fest',
    description:	'Experimental music and art festival',
    website:	'http://www.fatout.co.uk',
    location:	'Islington Mill, Salford',
    country:	'UK',
    date:	'14th-16th April 2017',
    genre: 'Various',
    lat:	'53.481878',
    lng:	'-2.263164'
  }),
  new Festival({
    name:	'BoomTown Fair',
    description: 'A multi-genre music and arts festival.',
    website:	'http://www.boomtownfair.co.uk',
    location:	'Temple Valley, Winchester',
    country:	'UK',
    date:	'10th-13th August 2017',
    genre:	'd&B, Oldschool Jungle, House, Garage, dubstep, Reggae, dub, Punk Rock, Swing, Folk, World, Hip-Hop',
    lat:	'51.051546',
    lng:	'-1.245557'
  }),
  new Festival({
    name:	'Insomnifest',
    description:	'Set in six diverse indoor and outdoor areas offering a different musical vibe and atmosphere',
    website: 'https://www.skiddle.com/whats-on/Leeds/Beaver-Works/Insomnifest-2017/12881095',
    location:	'Beaverworks, Leeds',
    country:	'UK',
    date:	'16th April 2017',
    genre:	'Various',
    lat:	'53.784013',
    lng: '-1.534251'
  }),
  new Festival({
    name:	'Live At Leeds',
    description:	'North Englands leading metropolitan festival showcasing new music.',
    website:	'http://liveatleeds.com/',
    location:	'Various, Leeds',
    country:	'UK',
    date:	'29th April 2017',
    genre:	'Rock, Indie, Electronica, Alternative',
    lat:	'53.800447',
    lng:	'-1.547068'
  }),
  new Festival({
    name:	'Sounds From The Other City',
    description:	'Celebration of new music and performance',
    website:	'http://www.soundsfromtheothercity.com/',
    location:	'Islington Mill, Salford',
    country:	'UK',
    date:	'30th April 2017',
    genre:	'Folk, Dance, Indie, country:, Rock, Alternative',
    lat:	'53.481878',
    lng:	'-2.263164'
  }),
  new Festival({
    name:	'Alfresco',
    description:	'3 day underground music festival located in the heart of Kent.',
    website:	'http://alfrescofestival.co.uk/',
    location:	'Royal Tunbridge Wells, Kent',
    country:	'UK',
    date:	'26th-28th May 2017',
    genre:	'Electronic, Reggae, Funk',
    lat:	'51.161899',
    lng:	'0.2924312'
  }),
  new Festival({
    name:	'Soundwave festival Croatia',
    description:	'A festival hidden away in a secluded cove with an evolving line up of global mucians, club nights and boat parties and activities such as snorkelling, diving and fishing.',
    website:	'http://www.soundwavecroatia.com/',
    location:	'The Garden in Tisno',
    country:	'Croatia',
    date:	'27th-31st July 2017',
    genre:	'Hip-Hop, Reggae, Jazz, World, Funk & Disco, Electronica, Drum & Bass',
    lat:	'43.800316',
    lng:	'15.656091'
  }),
  new Festival({
    name:	'Linton festival',
    description:	'Since 2001 Linton festival has gone from strength to strength with quality bands, memorable performances, plus improvements to venue and facilities.',
    website:	'http://www.lintonfestival.org/',
    location:	'Ross-On-Wye',
    country:	'UK',
    date:	'7th-9th July 2017',
    genre:	'Indie, Alternative',
    lat:	'51.926545',
    lng:	'-2.496812'
  }),
  new Festival({
    name:	'Live Expressions',
    description:	'A boutique festival featuring the finest emerging artists, DJs and performers.',
    website:	'http://www.liveexpressions.co.uk/',
    location:	'Colebrook Lakes, Royal Tunbridge Well',
    country:	'UK',
    date:	'7th-9th July 2017',
    genre:	'Rock, Indie, Funk, Folk, Soul, Acoustic, Reggae, Hip-Hop, Electro-Swing, House',
    lat:	'51.161926',
    lng:	'0.294614'
  }),
  new Festival({
    name:	'Samphire festival',
    description:	'Independent music and arts festival with magical sea views, quirky workshops and day time activities.',
    website:	'https://samphirefestival.com/',
    location:	'Exmoor National Park',
    country:	'UK',
    date:	'7-9th July 2017',
    genre:	'Folk, Funk, House, Techno, Ska, Reggae, Pop, Indie, Jazz, Disco',
    lat:	'51.208249',
    lng:	'-3.601116'
  }),
  new Festival({
    name:	'Common People - Oxford',
    description:	'A glorious two day metropolitan festival on south park brought to Oxford by the multi-award winning Bestival team.',
    website:	'http://oxford.commonpeople.net/',
    location:	'South Park, Oxford',
    country:	'UK',
    date:	'27th-28th May 2017',
    genre:	'House, R&B, Pop, Indie, Hip-Hop',
    lat:	'51.751431',
    lng:	'-1.22615'
  }),
  new Festival({
    name:	'We Are FSTVL',
    description:	'A huge weekend in May combines some of the world\'s biggest names in EDM with some of the world\'s leading club brands and labels for 50000 FSTVL fans.',
    website:	'http://www.wearefstvl.com',
    location:	'Upminster, London',
    country:	'UK',
    date:	'26th-28th May 2017',
    genre:	'EDM',
    lat:	'51.528865',
    lng:	'0.247517'
  }),
  new Festival({
    name:	'Leestock',
    description:	'A music festival which raises money for the willow foundation charity, which gives special days to seriously ill young adults.',
    website:	'http://leestock.org/',
    location:	'Melford Hall, Suffolk',
    country:	'UK',
    date:	'27th-28th May 2017',
    genre:	'Indie, Rock, Alternative, Acoustic',
    lat:	'52.082053',
    lng:	'0.726739'
  }),
  new Festival({
    name:	'Sea Star festival',
    description:	'The team behind the four awards for best European festivals (EXIT and Sea Dance) bring you Sea Star festival.',
    website:	'http://www.seastarfestival.com/en/',
    location:	'Stella Maris, Umag',
    country:	'Croatia',
    date:	'26th-27th May 2017',
    genre:	'Various',
    lat:	'45.450955',
    lng:	'13.514732'
  }),
  new Festival({
    name:	'Breaking Bands festival',
    description:	'A festival which aims to bring the very best of the bands of the future into one place.',
    website:	'https://breakingbandsfestival.com/',
    location:	'Stoke Prior Sports & country: Club, Bromsgrove',
    country:	'UK',
    date:	'26th-28th May',
    genre:	'Rock, Metal',
    lat:	'52.29419',
    lng:	'-2.082881'
  }),
  new Festival({
    name:	'Sonus festival',
    description:	'Good times with good people - bring it back! Presented by Sonus and Cosmopop',
    website:	'http://www.sonus-festival.com/',
    location:	'Pag Island, Novalja',
    country:	'Croatia',
    date:	'20th-24th August 2017',
    genre:	'House',
    lat:	'44.495357',
    lng:	'14.994584'
  }),
  new Festival({
    name: 'Forbidden Forest',
    description:	'Unique forest parties',
    website:	'http://www.forbidden-forest.co.uk/',
    location:	'Donington Forest, Derbyshire',
    country:	'UK',
    date:	'30th April 2017',
    genre:	'Electronic',
    lat:	'52.830639',
    lng:	'-1.378846'
  }),
  new Festival({
    name:	'The Great Escape',
    description:	'A festival for new music, showcasing 450 emerging artists in 30+ walkable venues across the city.',
    website:	'http://greatescapefestival.com/',
    location:	'Various Venues, Brighton',
    country:	'UK',
    date:	'18th-20th May 2017',
    genre:	'Various',
    lat:	'50.830461',
    lng:	'-0.138121'
  }),
  new Festival({
    name:	'Solfest',
    description:	'From a local shindig to one of the best loved of UK\'s independent festivals.',
    website:	'http://www.solfest.org.uk/',
    location:	'Tarnside Farm, Cumbria',
    country:	'UK',
    date:	'25th-27th August 2017',
    genre:	'Rock, Alternative, Soul, Dance, Indie, World, Punk, Reggae, Folk',
    lat:	'54.311335',
    lng:	'-2.8704'
  }),
  new Festival({
    name:	'Lost Village',
    description:	'Immersive festival experience in an abandoned woodland village.',
    website:	'http://lostvillagefestival.com/',
    location:	'Secret Village, Lincolnshire',
    country:	'UK',
    date:	'24th-27th August 2017',
    genre:	'Electronic',
    lat:	'53.143581',
    lng:	'-0.671966'
  }),
  new Festival({
    name:	'Creamfields',
    description:	'British dance music festival featuring DJs and live acts.',
    website:	'www.creamfields.com',
    location:	'Darresbury, Warrington',
    country:	'UK',
    date:	'24th-27th August 2017',
    genre:	'Dance',
    lat:	'53.34656',
    lng:	'-2.627148'
  }),
  new Festival({
    name:	'Camp Bestival',
    description:	'A multi-award winning festival that combines an all-encompassing family festival experience with an action packed camping holiday.',
    website:	'http://www.campbestival.net/',
    location:	'Lulworth Castle, East Lulwoth',
    country:	'UK',
    date:	'27th-30th July 2017',
    genre:	'Indie, Dance',
    lat:	'50.637628',
    lng:	'-2.206896'
  }),
  new Festival({
    name:	'Labyrinth Open',
    description:	'A brand new four day festival for Croatia this year .',
    website:	'http://www.labyrinthopen.com/',
    location:	'Kamp Galeb, Omis',
    country:	'Croatia',
    date:	'8th-11th July 2017',
    genre:	'Electronic',
    lat:	'43.440519',
    lng:	'16.681362'
  }),
  new Festival({
    name:	'Fresh Island festival',
    description:	'An urban beach festival in the sunny shores of Novalja\'s Zrće Beach.',
    website:	'http://fresh-island.org/',
    location:	'Zcre Beach, Isle of Pag',
    country:	'Croatia',
    date:	'11th-12th July 2017',
    genre:	'Hip-Hop, R&B',
    lat:	'44.5402',
    lng:	'14.914474'
  }),
  new Festival({
    name:	'Electric Castle',
    description:	'A unique festival experience on the spectacular Transylvanian domain of the Banffy Castle.',
    website:	'https://www.electriccastle.ro/',
    location:	'Banffy Castle in Bontida, Cluj',
    country:	'Romania',
    date:	'12th-16th July 2017',
    genre:	'Alternative, Electronic, Rock, Reggae, Tech House, Hip-Hop, Indie, Experimental',
    lat:	'46.908889',
    lng:	'23.808389'
  }),
  new Festival({
    name:	'Latitude festival',
    description:	'latitude combines art, theatre, comedy, cabaret, poetry, politics, dance and culture and showcases a variety of musicians, bands and artists across four stages.',
    website:	'http://www.lat:itudefestival.com/',
    location:	'Henham Park, Suffolk',
    country:	'UK',
    date:	'13th-16th July 2017',
    genre:	'Rock, Drum&Bass, Techno, Deep House, Pop, Dancehall, Indie, Electro, Rap, Hip-Hop, Blues, Acoustic, Soul, Funk, Disco, Big Band, Dubstep, African, Reggae',
    lat:	'52.33625',
    lng:	'1.598343'
  }),
  new Festival({
    name:	'Farr festival',
    description:	'From a small gathering of like-minded friends to one of  UK\'s leading electronic music festivals within an uninhabited forest.',
    website:	'http://www.farrfestival.co.uk/',
    location:	'Bygrave Wood, Hertfordshire',
    country:	'UK',
    date:	'13th-16th July 2017',
    genre:	'House, Tech House, Disco',
    lat:	'51.951683',
    lng:	'-0.286168'
  }),
  new Festival({
    name:	'Lovebox',
    description:	'The first ever party was thrown in an old strip club off Tottenham Court Road. In 2005 it changed to a two day event and moved to Victoria Park. Bringing good vibes and love each year.',
    website:	'http://loveboxfestival.com/',
    location:	'Victoria Park, London',
    country:	'UK',
    date:	'14th-15th July 2017',
    genre:	'Electronic, Dance, Hip-Hop',
    lat:	'51.533859',
    lng:	'-0.041703'
  }),
  new Festival({
    name:	'Ultra Europe',
    description:	'A multi venue outdoor electronic festival which is a part of the Ultra Music festival worldwide expansion.',
    website:	'https://ultraeurope.com',
    location:	'Poljud Stadium, Split',
    country:	'Croatia',
    date:	'14th-16th July 2017',
    genre:	'Electronic',
    lat:	'43.519586',
    lng:	'16.431841'
  }),
  new Festival({
    name:	'Suncebeat',
    description:	'A music festival brought to you by the team behind Southport Weekender, situated further afield in Croatia at the famous Garden Tisno. Expect exclusive DJ line ups and some of the best artists in House music.',
    website:	'http://suncebeat.com/',
    location:	'The Garden In Tisno',
    country:	'Croatia',
    date:	'19th-25th July 2017',
    genre:	'House, Deep House, Soul, Disco',
    lat:	'43.800072',
    lng:	'15.656499'
  }),
  new Festival({
    name:	'Deer Shed festival',
    description:	'A family friendly three day contemporary music, arts and science festival.',
    website:	'http://deershedfestival.com/',
    location:	'Baldersby Park, Thirsk',
    country:	'UK',
    date:	'21st-23rd July 2017',
    genre:	'Folk, Pop, Rock',
    lat:	'54.176323',
    lng:	'-1.397169'
  }),
  new Festival({
    name:	'Outlook festival',
    description:	'End of summer festival spread over four days,  largest soundsystem Culture festival in Europe.',
    website:	'http://www.outlookfestival.com/',
    location:	'Fort Punta Christo, Pula',
    country:	'Croatia',
    date:	'7th-10th September 2017',
    genre:	'Dub, Reggae, Hip-Hop, D&B, Garage, Grime',
    lat:	'44.892035',
    lng:	'13.798267'
  }),
  new Festival({
    name: 'Hideout	Hideout',
    description:	'A 5 day and night festival in a unique location: on Zcre Beach. The lineup gets bigger each year!',
    website:	'http://www.hideoutfestival.com/',
    location:	'Zcre Beach, Novalija',
    country:	'Croatia',
    date:	'26th-30th June 2017',
    genre:	'House, Techno, Electro, Disco, Electronic',
    lat:	'44.540177',
    lng:	'14.914313'
  }),
  new Festival({
    name:	'Snowbombing',
    description: 'A festival up a mountain 8,497ft above ordinary, in one of the finest ski resorts in Europe, showcasing world class acts in the most unique venues imaginable (think igloo rave, enchanted forest party, underground tennis club turned super club). Luxury spas, authentic alpine cuisine and not a tent in sight. Blue runs, black runs, schnapps runs. Chalet go on?',
    website:	'http://snowbombing.com/',
    location:	'Mayrhofen',
    country:	'Austria',
    date:	'3rd-8th April 2017',
    genre:	'EDM',
    lat:	'47.163285',
    lng:	'11.86064'
  }),
  new Festival({
    name:	'Annie Mac Presents Lost & Found',
    description:	'All night raves, pool parties, boat parties, castle raves, sunsets and cocktails. All on the sunny island of Malta',
    website:	'http://www.lostandfoundfestival.com/',
    location:	'St Pauls Bay',
    country:	'Malta',
    date:	'13th-16th April 2017',
    genre:	'House, Techno',
    lat:	'35.937242',
    lng:	'14.397981'
  }),
  new Festival({
    name:	'Kendal Calling',
    description:	'An independent 3 day music festival',
    website:	'http://www.kendalcalling.co.uk/',
    location:	'Lowther Deer Park, Cumbria',
    country:	'UK',
    date:	'27th-30th July 2017',
    genre:	'Rock, Indie, Dance, Folk, Electro',
    lat:	'54.608241',
    lng:	'-2.732306'
  }),
  new Festival({
    name:	'Farm festival',
    description:	'This is a homemade, down to earth creative and collaborative festival. Its dedicated to showcasing the best emerging talents, cult heros and DJs.',
    website:	'http://www.farmfestival.co.uk/',
    location:	'Gilcombe Farm in Bruton, Somerset',
    country:	'UK',
    date:	'28th-29th July 2017',
    genre:	'Rock, Pop, Alternative, Indie, Dance, Electronic, Folk, Hip-Hop, Brass Band, Spoken Word, Reggae',
    lat:	'51.126997',
    lng:	'-2.436284'
  }),
  new Festival({
    name:	'Made festival',
    description:	'A celebration of arts, music and culture.',
    website:	'http://www.madebirmingham.com/',
    location:	'The Digbeth Triangle, Birmingham',
    country:	'UK',
    date:	'29th July 2017',
    genre:	'Various',
    lat:	'52.475577',
    lng:	'-1.882579'
  }),
  new Festival({
    name:	'Wilderness festival',
    description:	'The team behind Secret Garden Party bring the same hedonistic vibe along with a variety of workshops and art activites.',
    website:	'https://www.wildernessfestival.com/',
    location:	'Cornbury Park, Charlbury',
    country:	'UK',
    date:	'3rd-6th August 2017',
    genre:	'Alternative, Folk, Indie',
    lat:	'51.862833',
    lng:	'-1.492385'
  }),
  new Festival({
    name:	'Wickham festival',
    description:	'A weekend village festival where you can enjoy excellent music, fine food, great company and lovely surroundings.',
    website:	'http://www.wickhamfestival.co.uk/',
    location:	'Wickham, Hampshire',
    country:	'UK',
    date:	'3rd-6th August 2017',
    genre:	'Folk, World, Traditional, Rock, Pop',
    lat:	'50.908015',
    lng:	'-1.188592'
  })

];
festivals.forEach(festival => {
  Festival
  .create(festival, (err, festival) => {
    if (err) return console.log(err);
    return console.log(`${festival.name} was saved.`);
  });
});
