import { useState } from "react";

import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

export default function Rejaser() {
  const [data] = useState([
    {
      actor: `./actors/ahmedHelmi.png`,
      film: [
        "./aflam/Aasef3alaElez3ag.jpg",
        "./aflam/assalEsoed.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/lafWeDaoaran.jpg",
        "./aflam/kedaReda.jpg",
        "./aflam/SayeBahr.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/MatabSinai.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/55Esaaf.jpg",
        "./aflam/1000mabrok.jpg",
        "./aflam/3alakosti.jpg",
      ],
    },
    {
      actor: `./actors/ahmedMekky.png`,
      film: [
        "./aflam/laTrago3WlaEstslam.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/sima3liBaba.jpg",
        "./aflam/tito.jpg",
        "./aflam/H-daboor.jpg",
      ],
    },
    {
      actor: `./actors/7asan7osny.png`,
      film: [
        "./aflam/3okal.jpg",
        "./aflam/a7lamElfataElataaesh.jpg",
        "./aflam/aeathono.jpg",
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/bo7a.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/elLimbi.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/Ghapy.jpg",
        "./aflam/H-daboor.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/YaAnaYaKhalty.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/samerWeShaherWeBaher.jpg",
        "./aflam/a7laElAuqat.jpg",
        "./aflam/Lakhmetrass.jpg",
        "./aflam/3eshElZaogia.jpg",
        "./aflam/katkot.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/3alakosti.jpg",
        "./aflam/HmadaEl3ap.png",
      ],
    },
    {
      actor: `./actors/ahmedELsaka.png`,
      film: [
        "./aflam/IbrahimElAbyad.jpg",
        "./aflam/TaimourWeShafika.jpg",
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/AlGezira.png",
        "./aflam/7arbItalya.jpg",
        "./aflam/3alaGanbYasta.jpg",
        "./aflam/3anEl3eahkWeElHawa.jpg",
        "./aflam/EbnElQonsol.jpg",
        "./aflam/Elfelos.jpg",
        "./aflam/3alakosti.jpg",
        "./aflam/hamamFeAmsterdam.jpg",
        "./aflam/tito.jpg",
        "./aflam/HmadaEl3ap.png",
        "./aflam/elfra7.jpg",
        "./aflam/mafia.jpg",
        "./aflam/Elfelos.jpg",
      ],
    },
    {
      actor: `./actors/doniaSamerGhanem.png`,
      film: [
        "./aflam/lafWeDaoaran.jpg",
        "./aflam/laTrago3WlaEstslam.jpg",
        "./aflam/YaAnaYaKhalty.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/365YomSa3ada.jpg",
        "./aflam/taslemAhali.jpg",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
      ],
    },
    {
      actor: `./actors/hendSabry.png`,
      film: [
        "./aflam/IbrahimElAbyad.jpg",
        "./aflam/elFeelElAzrak.png",
        "./aflam/AlGezira.png",
        "./aflam/a7laElAuqat.jpg",
      ],
    },
    {
      actor: `./actors/lotfiLabib.png`,
      film: [
        "./aflam/assalEsoed.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/ElTalataYeshtghalonha.jpg",
        "./aflam/H-daboor.jpg",
        "./aflam/kedaReda.jpg",
        "./aflam/YaAnaYaKhalty.jpg",
        "./aflam/SayeBahr.jpg",
        "./aflam/FeMahatetMasr.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/tabakhElRais.jpg",
        "./aflam/SHIKAMARA.jpg",
        "./aflam/amirElBi7ar.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/elLimbi.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/3andlibElDuki.jpg",
        "./aflam/365YomSa3ada.jpg",
        "./aflam/aboShanab.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/Lakhmetrass.jpg",
        "./aflam/sima3liBaba.jpg",
        "./aflam/HasalKher.jpg",
        "./aflam/SahibSahbu.jpg",
        "./aflam/HarameyaFeThailand.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/tumnTastaAshrar.jpg",
      ],
    },
    {
      actor: `./actors/mohammedHenedy.png`,
      film: [
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/TetaRaheba.jpg",
        "./aflam/YaAnaYaKhalty.jpg",
        "./aflam/amirElBi7ar.jpg",
        "./aflam/folElSinElAzim.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/WeshEgram.jpg",
        "./aflam/3andlibElDuki.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/SahibSahbu.jpg",
        "./aflam/hamamFeAmsterdam.jpg",
      ],
    },
    {
      actor: `./actors/mohammedSa3d.png`,
      film: [
        "./aflam/3okal.jpg",
        "./aflam/bo7a.jpg",
        "./aflam/Boshkash.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/elLimbi.jpg",
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/55Esaaf.jpg",
        "./aflam/katkot.jpg",
      ],
    },
    {
      actor: `./actors/monaZaki.png`,
      film: [
        "./aflam/TaimourWeShafika.jpg",
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/KhaltyFaransa.jpg",
        "./aflam/AbuAli.jpg",
        "./aflam/elDadaDody.jpg",
        "./aflam/WeladEl3m.jpg",
        "./aflam/3anEl3eahkWeElHawa.jpg",
        "./aflam/mafia.jpg",
      ],
    },
    {
      actor: `./actors/nelliKarem.png`,
      film: [
        "./aflam/a7lamElfataElataaesh.jpg",
        "./aflam/Ghapy.jpg",
        "./aflam/elFeelElAzrak.png",
        "./aflam/7arbItalya.jpg",
      ],
    },
    {
      actor: `./actors/yassminAbdElaziz.png`,
      film: [
        "./aflam/ElTalataYeshtghalonha.jpg",
        "./aflam/SayeBahr.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/elrahina.jpg",
        "./aflam/elDadaDody.jpg",
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/7aremKarem.jpg",
        "./aflam/aboShanab.jpg",
        "./aflam/tumnTastaAshrar.jpg",
      ],
    },
    {
      actor: `./actors/3ablaKamel.png`,
      film: [
        "./aflam/elLimbi.jpg",
        "./aflam/KhaltyFaransa.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/3awdaElNadla.jpg",
      ],
    },
    {
      actor: `./actors/3alaaMorsi.png`,
      film: [
        "./aflam/YaAnaYaKhalty.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/3okal.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/Ma3leshEhnaBenetbahdel.jpg",
        "./aflam/3andlibElDuki.jpg",
        "./aflam/eo3aOeshk.jpg",
        "./aflam/3alaGanbYasta.jpg",
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/Karkar.jpg",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
        "./aflam/AboNasab.jpg",
      ],
    },
    {
      actor: `./actors/3ezatAbo3of.png`,
      film: [
        "./aflam/aeathono.jpg",
        "./aflam/Boshkash.jpg",
        "./aflam/laTrago3WlaEstslam.jpg",
        "./aflam/OmarWeSalma2.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/AlGezira.png",
        "./aflam/3awdaElNadla.jpg",
        "./aflam/MatabSinai.jpg",
      ],
    },
    {
      actor: `./actors/ahmedEzz.png`,
      film: [
        "./aflam/elrahina.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/elshab7.jpg",
        "./aflam/weladRezk.png",
        "./aflam/365YomSa3ada.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/el3arif.jpg",
        "./aflam/elKhalia.jpg",
        "./aflam/malahiAlix.jpg",
      ],
    },
    {
      actor: `./actors/ahmedFat7y.png`,
      film: [
        "./aflam/kabtenMasr.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/3endamaYak3ElAnsan.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/bankEl7az.jpg",
        "./aflam/ItlauliBarrah.jpg",
        "./aflam/kalbBalady.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/7amilElLakab.jpg",
        "./aflam/taslemAhali.jpg",
      ],
    },
    {
      actor: `./actors/amrAbdElgilel.png`,
      film: [
        "./aflam/ziko.jpg",
        "./aflam/SarkhetNamla.jpg",
        "./aflam/KalemnyShokran.jpg",
        "./aflam/3andlibElDuki.jpg",
      ],
    },
    {
      actor: `./actors/basemSamra.png`,
      film: [
        "./aflam/weladRezk.png",
        "./aflam/TetaRaheba.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/IbrahimElAbyad.jpg",
        "./aflam/AlGezira.png",
        "./aflam/3amohm.jpg",
        "./aflam/elshab7.jpg",
        "./aflam/elfra7.jpg",
      ],
    },
    {
      actor: `./actors/edward.png`,
      film: [
        "./aflam/a7lamElfataElataaesh.jpg",
        "./aflam/assalEsoed.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/elDadaDody.jpg",
        "./aflam/FeMahatetMasr.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/SHIKAMARA.jpg",
        "./aflam/Boshkash.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/7aremKarem.jpg",
        "./aflam/3eshElZaogia.jpg",
        "./aflam/3alakosti.jpg",
        "./aflam/elMeshmohands7asan.jpg",
        "./aflam/MohtaramElaRob3.jpg",
        "./aflam/kbareh.jpg",
      ],
    },
    {
      actor: `./actors/karemAbdElaziz.png`,
      film: [
        "./aflam/AbuAli.jpg",
        "./aflam/FeMahatetMasr.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/elFeelElAzrak.png",
        "./aflam/faselWaNa3od.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/HarameyaFeThailand.jpg",
        "./aflam/WeladEl3m.jpg",
        "./aflam/nadiElRigalElSeri.jpg",
      ],
    },
    {
      actor: `./actors/khaledElsawy.png`,
      film: [
        "./aflam/zarfTarek.jpg",
        "./aflam/kedaReda.jpg",
        "./aflam/elFeelElAzrak.png",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/AlGezira.png",
        "./aflam/AbuAli.jpg",
        "./aflam/ItlauliBarrah.jpg",
        "./aflam/Elfelos.jpg",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
        "./aflam/weladRezk.png",
      ],
    },
    {
      actor: `./actors/magedElkedwani.png`,
      film: [
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/laTrago3WlaEstslam.jpg",
        "./aflam/wakfetRekala.jpg",
        "./aflam/elrahina.jpg",
        "./aflam/SHIKAMARA.jpg",
        "./aflam/Sa3aWaNos.jpg",
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/faselWaNa3od.jpg",
        "./aflam/HarameyaFeThailand.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/sima3liBaba.jpg",
        "./aflam/3alaGanbYasta.jpg",
        "./aflam/AboNasab.jpg",
        "./aflam/nadiElRigalElSeri.jpg",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
      ],
    },
    {
      actor: `./actors/maiEzzEldin.png`,
      film: [
        "./aflam/aeathono.jpg",
        "./aflam/bo7a.jpg",
        "./aflam/OmarWeSalma2.jpg",
        "./aflam/SHIKAMARA.jpg",
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/Elfelos.jpg",
      ],
    },
    {
      actor: `./actors/minnaShalaby.png`,
      film: [
        "./aflam/ziko.jpg",
        "./aflam/Nour3iney.jpg",
        "./aflam/kedaReda.jpg",
        "./aflam/FeMahatetMasr.jpg",
        "./aflam/FilmHendi.png",
        "./aflam/aboElAraby.jpg",
        "./aflam/Aasef3alaElez3ag.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/a7laElAuqat.jpg",
        "./aflam/3anEl3eahkWeElHawa.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/eo3aOeshk.jpg",
      ],
    },
    {
      actor: `./actors/mohammedFarag.png`,
      film: [
        "./aflam/TetaRaheba.jpg",
        "./aflam/elrahina.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/faselWaNa3od.jpg",
        "./aflam/1000mabrok.jpg",
      ],
    },
    {
      actor: `./actors/mohammedLotfi.png`,
      film: [
        "./aflam/3amohm.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/weladRezk.png",
        "./aflam/EyalHabiba.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/ElTalataYeshtghalonha.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/faselWaNa3od.jpg",
        "./aflam/AboNasab.jpg",
        "./aflam/kbareh.jpg",
      ],
    },
    {
      actor: `./actors/mohammedSalam.png`,
      film: [
        "./aflam/3amohm.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/laTrago3WlaEstslam.jpg",
        "./aflam/elrahina.jpg",
        "./aflam/sima3liBaba.jpg",
        "./aflam/akherDikFeMasr.jpg",
        "./aflam/kalbBalady.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/wakfetRekala.jpg",
        "./aflam/7amilElLakab.jpg",
        "./aflam/Elfelos.jpg",
        "./aflam/3endamaYak3ElAnsan.jpg",
      ],
    },
    {
      actor: `./actors/mohammedSaroat.png`,
      film: [
        "./aflam/3amohm.jpg",
        "./aflam/3endamaYak3ElAnsan.jpg",
        "./aflam/bankEl7az.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/KalemnyShokran.jpg",
        "./aflam/WeladEl3m.jpg",
        "./aflam/AboNasab.jpg",
        "./aflam/akherDikFeMasr.jpg",
        "./aflam/kalbBalady.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/sab3ElBromba.jpg",
        "./aflam/7amilElLakab.jpg",
      ],
    },
    {
      actor: `./actors/mohammedMamdo7.png`,
      film: [
        "./aflam/bankEl7az.jpg",
        "./aflam/wakfetRekala.jpg",
        "./aflam/IbrahimElAbyad.jpg",
        "./aflam/elFeelElAzrak.png",
        "./aflam/weladRezk.png",
        "./aflam/elKhalia.jpg",
        "./aflam/el3arif.jpg",
        "./aflam/taslemAhali.jpg",
        "./aflam/7amilElLakab.jpg",
      ],
    },
    {
      actor: `./actors/nour.png`,
      film: [
        "./aflam/3okal.jpg",
        "./aflam/elrahina.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/MatabSinai.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/malahiAlix.jpg",
        "./aflam/tesba73alaKhir.jpg",
      ],
    },
    {
      actor: `./actors/sa3edTarablk.png`,
      film: [
        "./aflam/WeshEgram.jpg",
        "./aflam/tabakhElRais.jpg",
        "./aflam/folElSinElAzim.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/Ghapy.jpg",
        "./aflam/folElSinElAzim.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/assalEsoed.jpg",
        "./aflam/kedaReda.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/SayeBahr.jpg",
        "./aflam/Boshkash.jpg",
        "./aflam/FeMahatetMasr.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/AbuAli.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/KhaltyFaransa.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/Lakhmetrass.jpg",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
        "./aflam/mafia.jpg",
      ],
    },
    {
      actor: `./actors/salahAbdallah.png`,
      film: [
        "./aflam/elrahina.jpg",
        "./aflam/elDadaDody.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/aboElAraby.jpg",
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/ElTalataYeshtghalonha.jpg",
        "./aflam/elshab7.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/FilmHendi.png",
        "./aflam/365YomSa3ada.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/AboNasab.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/LeesBaghdad.jpg",
        "./aflam/Kalashnikov.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/HmadaEl3ap.png",
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
      ],
    },
    {
      actor: `./actors/shiko.png`,
      film: [
        "./aflam/samerWeShaherWeBaher.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/taslemAhali.jpg",
        "./aflam/7amilElLakab.jpg",
      ],
    },
    {
      actor: `./actors/heshamMaged.png`,
      film: [
        "./aflam/samerWeShaherWeBaher.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/7amilElLakab.jpg",
        "./aflam/taslemAhali.jpg",
        "./aflam/nadiElRigalElSeri.jpg",
      ],
    },
    {
      actor: `./actors/ahmedFahmi.png`,
      film: [
        "./aflam/samerWeShaherWeBaher.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/kalbBalady.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/el3arif.jpg",
      ],
    },
    {
      actor: `./actors/tal3atZakria.png`,
      film: [
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/AbuAli.jpg",
        "./aflam/aboElAraby.jpg",
        "./aflam/QessatAlhayAlSha3bi.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/tabakhElRais.jpg",
        "./aflam/3okal.jpg",
        "./aflam/Ghapy.jpg",
        "./aflam/KhaltyFaransa.jpg",
        "./aflam/3awdaElNadla.jpg",
        "./aflam/7aremKarem.jpg",
        "./aflam/eo3aOeshk.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/HarameyaFeThailand.jpg",
      ],
    },
    {
      actor: `./actors/tamerHosni.png`,
      film: [
        "./aflam/CaptainHema.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/tesba73alaKhir.jpg",
        "./aflam/Nour3iney.jpg",
        "./aflam/OmarWeSalma2.jpg",
        "./aflam/ahoak.jpg",
        "./aflam/7amilElLakab.jpg",
        "./aflam/Elfelos.jpg",
      ],
    },
    {
      actor: `./actors/youssefEid.png`,
      film: [
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/H-daboor.jpg",
        "./aflam/SayeBahr.jpg",
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/TetaRaheba.jpg",
        "./aflam/Aasef3alaElez3ag.jpg",
        "./aflam/amirElBi7ar.jpg",
        "./aflam/faselWaNa3od.jpg",
        "./aflam/SarkhetNamla.jpg",
        "./aflam/55Esaaf.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/samerAboElNile.jpg",
      ],
    },
    {
      actor: `./actors/zina.png`,
      film: [
        "./aflam/Boshkash.jpg",
        "./aflam/CaptainHema.jpg",
        "./aflam/elshab7.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/SayedElAtefy.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/AlGezira.png",
        "./aflam/Elfelos.jpg",
        "./aflam/7amilElLakab.jpg",
      ],
    },
    {
      actor: `./actors/7asanAbdElFata7.png`,
      film: [
        "./aflam/samerWeShaherWeBaher.jpg",
        "./aflam/aeathono.jpg",
        "./aflam/7a7aWeTofa7a.jpg",
        "./aflam/samerAboElNile.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/amirElBi7ar.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/SHIKAMARA.jpg",
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/7aremKarem.jpg",
        "./aflam/aboShanab.jpg",
        "./aflam/Boshkash.jpg",
        "./aflam/WahidSaidi.jpg",
        "./aflam/katkot.jpg",
      ],
    },
    {
      actor: `./actors/karemMahmmodAbdeElAziz.png`,
      film: [
        "./aflam/ziko.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/Sa3aWaNos.jpg",
        "./aflam/HasalKher.jpg",
        "./aflam/ItlauliBarrah.jpg",
      ],
    },
    {
      actor: `./actors/mohammedEmam.png`,
      film: [
        "./aflam/Sa3aWaNos.jpg",
        "./aflam/3amohm.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/AboNasab.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/LeesBaghdad.jpg",
      ],
    },
    {
      actor: `./actors/ramezGalal.png`,
      film: [
        "./aflam/MedoMashakel.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/a7lamElfataElataaesh.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/55Esaaf.jpg",
        "./aflam/3eshElZaogia.jpg",
        "./aflam/sab3ElBromba.jpg",
      ],
    },
    {
      actor: `./actors/same77esin.png`,
      film: [
        "./aflam/elDadaDody.jpg",
        "./aflam/H-daboor.jpg",
        "./aflam/QessatAlhayAlSha3bi.jpg",
        "./aflam/tabakhElRais.jpg",
        "./aflam/FilmHendi.png",
        "./aflam/eo3aOeshk.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/SahibSahbu.jpg",
        "./aflam/Lakhmetrass.jpg",
      ],
    },
    {
      actor: `./actors/ahmedRezk.png`,
      film: [
        "./aflam/eo3aOeshk.jpg",
        "./aflam/Lakhmetrass.jpg",
        "./aflam/3alaGanbYasta.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/LeesBaghdad.jpg",
        "./aflam/HmadaEl3ap.png",
        "./aflam/mafia.jpg",
      ],
    },
    {
      actor: `./actors/fat7iAbdElwehab.png`,
      film: [
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/Sa3aWaNos.jpg",
        "./aflam/3awdaElNadla.jpg",
        "./aflam/LeesBaghdad.jpg",
        "./aflam/kbareh.jpg",
      ],
    },
    {
      actor: `./actors/hananTurk.png`,
      film: [
        "./aflam/HarameyaFeThailand.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/IbrahimElAbyad.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/tito.jpg",
        "./aflam/a7laElAuqat.jpg",
      ],
    },
    {
      actor: `./actors/khaledSar7an.png`,
      film: [
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/7aremKarem.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/TetaRaheba.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/EbnElQonsol.jpg",
      ],
    },
    {
      actor: `./actors/mohammedRakab.png`,
      film: [
        "./aflam/tumnTastaAshrar.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/HarameyaFeKG2.jpg",
        "./aflam/elMeshmohands7asan.jpg",
        "./aflam/Kalashnikov.jpg",
        "./aflam/malahiAlix.jpg",
        "./aflam/MohtaramElaRob3.jpg",
        "./aflam/HmadaEl3ap.png",
      ],
    },
    {
      actor: `./actors/mohammedSharaf.png`,
      film: [
        "./aflam/elrahina.jpg",
        "./aflam/Aasef3alaElez3ag.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/elDadaDody.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/3esabaDr.Omar.jpg",
        "./aflam/HarameyaFeThailand.jpg",
        "./aflam/ramadanMabrok.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/QessatAlhayAlSha3bi.jpg",
        "./aflam/kbareh.jpg",
      ],
    },
    {
      actor: `./actors/shrefMoner.png`,
      film: [
        "./aflam/WeladEl3m.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/3anEl3eahkWeElHawa.jpg",
        "./aflam/HelmAziz.jpg",
        "./aflam/HmadaEl3ap.png",
      ],
    },
    {
      actor: `./actors/baiomyFoaad.png`,
      film: [
        "./aflam/wakfetRekala.jpg",
        "./aflam/bankEl7az.jpg",
        "./aflam/kabtenMasr.jpg",
        "./aflam/3endamaYak3ElAnsan.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/aboShanab.jpg",
        "./aflam/ItlauliBarrah.jpg",
        "./aflam/ka7imFeElHend.jpg",
        "./aflam/kalbBalady.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/LeesBaghdad.jpg",
        "./aflam/BanatEl3am.jpg",
        "./aflam/sab3ElBromba.jpg",
        "./aflam/lafWeDaoaran.jpg",
        "./aflam/sima3liBaba.jpg",
        "./aflam/taslemAhali.jpg",
        "./aflam/nadiElRigalElSeri.jpg",
      ],
    },
    {
      actor: `./actors/khaledSaleh.png`,
      film: [
        "./aflam/7arbItalya.jpg",
        "./aflam/tumnTastaAshrar.jpg",
        "./aflam/a7laElAuqat.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/3anEl3eahkWeElHawa.jpg",
        "./aflam/EbnElQonsol.jpg",
        "./aflam/AlGezira.png",
        "./aflam/malahiAlix.jpg",
        "./aflam/tito.jpg",
      ],
    },
    {
      actor: `./actors/tota.png`,
      film: [
        "./aflam/ElLemby8Giga.jpg",
        "./aflam/xLarg.jpg",
        "./aflam/LeesBaghdad.jpg",
        "./aflam/sab3ElBromba.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
        "./aflam/sab3ElBromba.jpg",
        "./aflam/el7arbEl3alamiaElTalta.jpg",
        "./aflam/ka7imFeElHend.jpg",
      ],
    },
    {
      actor: `./actors/ashrafAbdElBaki.png`,
      film: [
        "./aflam/Lakhmetrass.jpg",
        "./aflam/tabakhElRais.jpg",
        "./aflam/3amohm.jpg",
        "./aflam/3alaGanbYasta.jpg",
        "./aflam/ItlauliBarrah.jpg",
        "./aflam/SahibSahbu.jpg",
      ],
    },
    {
      actor: `./actors/ghada3adil.png`,
      film: [
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/s3ediFeElGam3aElamirkia.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/EbnElQonsol.jpg",
        "./aflam/55Esaaf.jpg",
        "./aflam/weladRezk.png",
        "./aflam/3alakosti.jpg",
        "./aflam/ahoak.jpg",
        "./aflam/Kalashnikov.jpg",
        "./aflam/malahiAlix.jpg",
        "./aflam/nadiElRigalElSeri.jpg",
        "./aflam/HmadaEl3ap.png",
      ],
    },
    {
      actor: `./actors/mahmmodBizawi.png`,
      film: [
        "./aflam/tesba73alaKhir.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/elshab7.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/30sana.jpg",
        "./aflam/ElMaslaha.jpg",
        "./aflam/hamamFeAmsterdam.jpg",
        "./aflam/Kalashnikov.jpg",
        "./aflam/Sa3aWaNos.jpg",
        "./aflam/lilaHanaWeSoror.jpg",
      ],
    },
    {
      actor: `./actors/slimanEid.png`,
      film: [
        "./aflam/kbareh.jpg",
        "./aflam/elfra7.jpg",
        "./aflam/AskarFiElMu3askar.jpg",
        "./aflam/ElBashaTelmeez.jpg",
        "./aflam/folElSinElAzim.jpg",
        "./aflam/eo3aOeshk.jpg",
        "./aflam/EyalHabiba.jpg",
        "./aflam/ga3latnyMogrman.jpg",
        "./aflam/gaanaElBaianElTali.jpg",
        "./aflam/MedoMashakel.jpg",
        "./aflam/EbnElQonsol.jpg",
        "./aflam/ShebhMonharef.jpg",
        "./aflam/ziko.jpg",
        "./aflam/zakiShan.jpg",
        "./aflam/WeshEgram.jpg",
        "./aflam/elNazer.jpg",
        "./aflam/hamamFeAmsterdam.jpg",
        "./aflam/zarfTarek.jpg",
        "./aflam/el3yalHerbt.jpg",
        "./aflam/HmadaEl3ap.png",
        "./aflam/HelmAziz.jpg",
      ],
    },
    {
      actor: `./actors/hamadaHelal.png`,
      film: ["./aflam/el3yalHerbt.jpg", "./aflam/EyalHabiba.jpg"],
    },
  ]);

  for (let sdf of data[1].film) {
    console.log("./aflam/" + sdf + ".jpg");
  }

  const getDistinctActorIndexes = () => {
    const first = Math.floor(Math.random() * data.length);
    let second = Math.floor(Math.random() * data.length);
    while (second === first) {
      second = Math.floor(Math.random() * data.length);
    }
    return [first, second];
  };

  const initializeGame = () => {
    const [first, second] = getDistinctActorIndexes();
    return { currentIndex: first, targetIndex: second };
  };

  const [game, setGame] = useState(() => initializeGame());
  const [matchedActors, setMatchedActors] = useState([]);
  const [message, setMessage] = useState("");
  const [hasWon, setHasWon] = useState(false);
  const [history, setHistory] = useState([]);

  const currentActor = data[game.currentIndex];
  const targetActor = data[game.targetIndex];

  const saveHistory = () => {
    setHistory((prev) => [
      ...prev,
      {
        game,
        matchedActors,
        message,
        hasWon,
      },
    ]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setGame(previousState.game);
    setMatchedActors(previousState.matchedActors);
    setMessage(previousState.message);
    setHasWon(previousState.hasWon);
  };

  const handleFilmClick = (film) => {
    if (hasWon) return;

    saveHistory();

    const actorsForFilm = data.filter((item) => item.film.includes(film));
    const win = actorsForFilm.some((item) => item.actor === targetActor.actor);

    setMatchedActors(
      actorsForFilm.filter((item) => item.actor !== currentActor.actor),
    );
    setHasWon(win);

    if (win) {
      setMessage("الكسباااااان! وصلت لفيلم الممثل التاني.");
    } else {
      setMessage(
        "الممثل التاني غير موجود في هذا الفيلم. اختر ممثلًا من الفيلم للمتابعة.",
      );
    }
  };

  const handleActorClick = (actor) => {
    const clickedIndex = data.findIndex((item) => item.actor === actor.actor);
    if (clickedIndex === -1) return;

    saveHistory();

    setGame((prev) => ({ ...prev, currentIndex: clickedIndex }));
    setMatchedActors([]);
    setHasWon(false);
    setMessage("اختر فيلمًا من الممثل الجديد.");
  };

  const resetGame = () => {
    setHistory([]);
    setGame(initializeGame());
    setMatchedActors([]);
    setMessage("");
    setHasWon(false);
  };

  const filmCards = currentActor.film.map((film) => (
    <Button
      onClick={() => handleFilmClick(film)}
      key={film}
      style={{ minWidth: "20%", height: "100%" }}
    >
      <CardMedia
        component="img"
        style={{ width: "100%", height: "100%" }}
        image={film}
        alt={film}
      />
    </Button>
  ));

  const actorCards = matchedActors.map((actor) => (
    <div
      onClick={() => handleActorClick(actor)}
      key={actor.actor}
      style={{
        minWidth: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        borderRadius: "20px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        image={actor.actor}
        alt={actor.actor}
      />
    </div>
  ));

  const displayContent = matchedActors.length > 0 ? actorCards : filmCards;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        background: "#333",
        boxShadow: "0 0 30px 5px black",
        border: "3px solid white",
        width: "70vw",
        height: "90vh",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={handleUndo}
          disabled={history.length === 0}
          style={{ background: "#f5c542", color: "black", fontSize: "16px" }}
        >
          رجوع
        </Button>
        <Button
          onClick={resetGame}
          style={{ background: "darkred", color: "white", fontSize: "16px" }}
        >
          بداية جديدة
        </Button>
      </div>
      <div
        style={{
          width: "80%",
          height: "250px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            background: "gold",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "30px",
            width: "200px",
            height: "200px",
            transition: "background 0.2s",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={currentActor.actor}
            alt="current actor"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ color: "white", fontSize: "18px" }}>
            أفلام الممثل الحالي
          </div>
          <div style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}>
            {message || "اضغط على فيلم لترى إذا كان الممثل التاني فيه."}
          </div>
          <div style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}>
            الممثل الهدف:
            <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
              {targetActor.actor.split("/").pop().replace(".png", "")}
            </span>
          </div>
        </div>

        <div
          style={{
            background: "#ccc",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "30px",
            width: "200px",
            height: "200px",
            transition: "background 0.2s",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={targetActor.actor}
            alt="target actor"
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflowX: "scroll",
          padding: "10px",
          gap: "10px",
        }}
      >
        {displayContent}
      </div>

      {hasWon && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            color: "white",
            padding: "30px",
            borderRadius: "30px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            الكسباااااان!
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center", maxWidth: "70%" }}
          >
            وصلت لفيلم الممثل التاني. مبروك!
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              onClick={resetGame}
              style={{
                background: "#4caf50",
                color: "white",
                fontSize: "18px",
                padding: "10px 20px",
              }}
            >
              إعادة اللعبة
            </Button>
            <Button
              onClick={resetGame}
              style={{
                background: "#2196f3",
                color: "white",
                fontSize: "18px",
                padding: "10px 20px",
              }}
            >
              جرب مرة تانية
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
