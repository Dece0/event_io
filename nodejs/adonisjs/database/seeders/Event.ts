import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Event from 'App/Models/Event'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Event.createMany([
      {
        id: 1,
        title: 'Winter fest 2022',
        description:
          'Winter fest je umelecký festival na ktorom sa alternatíva, indie, elektronika, world music a punk stretávajú s klasikou; spolu s literatúrou, tancom, vizuálnym umením, filmom a divadlom.',
        isPrivate: false,
        location: 'Stará Tržnica, Bratislava',
        createdBy: 1,
        from: DateTime.utc(2022, 11, 1, 10, 10),
        to: DateTime.utc(2022, 11, 2, 6, 30),
      },
      {
        id: 2,
        title: 'Ektomorf',
        description:
          'Ektomorf sa vracajú k svojim hudobným koreňom a po 26 rokoch existencie je album Reborn znovu pod znamením thrash metalu. Maďarský energetický stroj svojim debutom vo vydavateľstve Napalm Records prenáša tento žáner do sľubnej modernej doby. Piesne ako úvodná Ebullition, zúrivá FearMe alebo energická, demolačná guľa SmashingThePast iskria plnou silou a tlačia album dopredu. \n 8 nekompromisných zásekov posúva tvorbu ešte ďalej, pričom vždy zachovávajú obvyklú tvár Ektomorfu. Od svojho debutu Hangok (1994) štvorčlenný ansámbel okolo speváka / gitaristu Zoltána “Zoli” Farkaša pravidelne dodáva svojim oddaným fanúšikom novú silu. Iba tri roky po vydaní ich hitového počinu Fury, Reborn vznieti horiaci oheň svojim ťažkým zvukom a drsnými textami, ktoré spália akékoľvek žánrové obmedzenia. Ich 15. štúdiový album dýcha duchom „veľkej štvorky“ – Metallica, Slayer, Anthrax a Megadeth – a zároveň začína úplne samostatnú novú kapitolu.',
        isPrivate: false,
        location: 'Randal Club',
        createdBy: 1,
        from: DateTime.utc(2022, 11, 20, 19, 0),
        to: DateTime.utc(2022, 11, 21, 2, 30),
      },
      {
        id: 3,
        title: 'Mike Cooper + Segundo Bercetche & Tomi Lebrero',
        description:
          'V bratislavskej A4 vystúpi „ikona post-everything music” alebo aj „ten, ktorý odmietol ponuku hrať so Stounami” – dnes už 80-ročný anglický umelec Mike Cooper. \n Mike Cooper si za posledné polstoročie vytýčil svoju vlastnú cestu ako medzinárodný hudobný prieskumník, lap steel gitarista, spevák, improvizátor aj skladateľ. Vystupoval a nahrával sólovo a v mnohých inšpirovaných zoskupeniach a rôznych žánroch (od blues a folku, polynézskej hudby až po improvizáciu a ambient). Svoju tvorbu zasvätil rozšíreniu možností gitary, ktoré okorenil rôznorodou zmesou štýlových prvkov. Do A4 prinesie svoju veľmi osobnú a osobitú verziu doširoka otvorenej, pohlcujúcej „kozmickej hudby \n Argentínska dvojica Segundo Bercetche a Tomi Lebrero tiež zručne nadväzuje na tradíciu, a tiež po svojom. Tradičný nástroj bandoneon, ktorý kedysi preslávil napríklad Astor Piazzolla, zažíva v predstavení o budúcnosti tradícií prekvapivé transformácie, obklopený zvukmi syntetizátorov a ďalšej elektroniky. \n Podujatie z verejných zdrojov podporil Fond na podporu umenia a Nadácia mesta Bratislavy.',
        isPrivate: false,
        location: 'A4 – priestor súčasnej kultúry',
        createdBy: 1,
        from: DateTime.utc(2022, 11, 30, 18, 30),
        to: DateTime.utc(2022, 11, 30, 23, 30),
      },
      {
        id: 4,
        title: 'Cosmos Discovery',
        description:
          'Svetová výstava „Cosmos Discovery“ mapuje pilotované lety do vesmíru od ich počiatkov až po súčasné plánované misie. Návštevníkov oboznamuje s prvými vesmírnymi rokmi, míľnikmi povojnovej histórie ľudstva, aj s najnovšími projektmi či víziami. Ponúka možnosť prežiť naozajstné príbehy hrdinov, ktorí prekročili hranicu atmosféry. \n Výstava Cosmos Discovery vznikla v spolupráci s NASA, svetovými, českými a slovenskými odborníkmi. Slávnostne otvorená bude v Incheba Expo Bratislava dňa 1. októbra 2022. Rozliehať sa bude na viac ako 2000 m2.',
        isPrivate: false,
        location: 'Incheba Expo Aréna',
        createdBy: 2,
        from: DateTime.utc(2022, 12, 1, 9, 0),
        to: DateTime.utc(2022, 12, 1, 16, 30),
      },
      {
        id: 5,
        title: 'Experimentálne grafické prístupy na princípe monotypu',
        description:
          'Prednáška doc. Mgr. art Patrika Ševčíka, ArtD, ktorý je vedúcim katedry Grafiky a ateliéru vizuálnej tvorby a ateliéru digitálnej a analógovej grafiky na Akadémii umení v Banskej Bystrici. \n Venuje sa voľnej tvorbe a grafickému designu. V oblasti voľnej tvorby pracuje v médiu plošnej inštalácie, špecificky v oblasti textovej inštalácie s využitím postkonceptuálnych princípov výtvarnej tvorby. Tiež využíva digitálnu tlač a pracuje s nájdeným prisvojeným predmetom. Skúma výtvarné možnosti práce s textom v umení.',
        isPrivate: false,
        location: 'Galéria Artotéka',
        createdBy: 2,
        from: DateTime.utc(2022, 12, 2, 10, 0),
        to: DateTime.utc(2022, 12, 2, 19, 30),
      },
      {
        id: 6,
        title: 'Pančlajn',
        description:
          'Pančlajn je stand-up formát osobitých členov rovnomennej skupiny, ktorá sa na pravidelnej báze predstavuje publiku KC Dunaj. \n „Nahoďte si trvalé smiechu a nažehlite puky zábavy, prichádzajú pohrobkovia televíznych estrád! Zaslúžili národní stand-upisti a majstri machrovania so slovom – Matej Adámy, Joe Trendy, Ivan Kostra, Docent, Peter Petiar Lachký, Matúš Toderiška, Samo Trnka – sa opäť vracajú v rámci cyklu klubový štvrtok – večer pre vtipný prdok! Hudobné repete večera ovládne Petiar.“',
        isPrivate: false,
        location: 'KC Dunaj',
        createdBy: 2,
        from: DateTime.utc(2022, 12, 10, 20, 0),
        to: DateTime.utc(2022, 12, 10, 23, 0),
      },
    ])
  }
}
