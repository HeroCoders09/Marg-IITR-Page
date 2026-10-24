import sharmiliImg from "../assets/photos/SharmiliMitra.png";
import sambathImg from "../assets/photos/SambathRd.png";
import ankitaImg from "../assets/photos/AnkitaVerma.png";
import hiranmayaImg from "../assets/photos/HiranmayakaparthiRamadugu.png";

import vidishaImg from "../assets/photos/VidishaMaithani.png";
import tripureshwariImg from "../assets/photos/TripureshwariPaul.png";
import kaneezImg from "../assets/photos/KaneezFatima.png";
import vrashalImg from "../assets/photos/VrashalVerma.png";
import diptiImg from "../assets/photos/DiptiSingh.png";
import sakshimaImg from "../assets/photos/SakshimaMishra.png";
import kapilImg from "../assets/photos/KapilFaujdar.png";
import abhishekImg from "../assets/photos/AbhishekKarmakar.png";
import priyadarshiniImg from "../assets/photos/PriyadarshiniDeori.png";
import rakshaImg from "../assets/photos/RakshaSingh.png";
import nandiniImg from "../assets/photos/NandiniDutt.png";
import anshitaImg from "../assets/photos/AnshitaSingh.png";
import ishitaImg from "../assets/photos/IshitaSachdeva.png";
import arkajitImg from "../assets/photos/ArkajitChatterjee.png";
import annikaImg from "../assets/photos/AnnikaDold.png";
import harshitaImg from "../assets/photos/HarshitaVerma.png";
import divyanshuImg from "../assets/photos/DivyanshuTiwari.png";
import alishaImg from "../assets/photos/AlishaChatrath.png";
import kapilSImg from "../assets/photos/KapilSharma.png";
import vaishaliSharmaImg from "../assets/photos/vaishaliSharma.png";
import ashiJasujaImg from "../assets/photos/AshiJasuja.png";
import madelineSaadImg from "../assets/photos/MadelineSaad.png";

// TODO: add a photo for Anshika Sharma, e.g.
// import anshikaImg from "../assets/photos/AnshikaSharma.png";
// and use it in the `image` field below (until then the profile page shows initials).

const HSS = "Department of Humanities and Social Sciences";

// Helper: publication entry that links to its DOI.
const doi = (title, id) => ({ title, link: `https://doi.org/${id}` });

export const membersData = [
  /* ───────────────────────────── ALUMNI ───────────────────────────── */
  {
    slug: "dr-sharmili-mitra",
    name: "Dr. SHARMILI MITRA",
    role: "Assistant Professor, Jindal School of Psychology & Counselling, O.P. Jindal Global University",
    department: HSS,
    category: "alumni",
    image: sharmiliImg,
    email: "sharmili.mitra@jgu.edu.in",
    linkedin: "https://www.linkedin.com/in/sharmili-mitra-713758b7",
    orcid: "0000-0001-8459-4667",
    researchGate: "https://www.researchgate.net/profile/Sharmili-Mitra",
    sections: {
      about: [
        "Sharmili has completed her bachelors in Psychology from University of Calcutta and her masters in Applied Psychology from Tata Institute of Social Sciences. Her research interests include, but are not limited to, Human Cognition, Fear Conditioning, Psychopathology and Social Cognition. Currently, she is a PhD student and is particularly working in the area of Fear Generalization and Return of Fear in Humans. Through multi-measure assessments, she is interested in examining the efficacy of cognitive and behavioural interventions in Human Fear Generalization and Return of Fear, and its implications in anxiety disorders. She is also working on projects on understanding digital inclusion and technology acceptance among elderly, Gender based stereotypes among women in STEM, Human Spatial Cognition and Route Learning and Fear Memory Reconsolidation.",
      ],
      background: [
        "B.A. in Psychology, Gokhale Memorial Girls’ College, University of Calcutta.",
        "M.A in Applied Psychology with specialization in Counseling, Tata Institute of Social Science, Mumbai.",
      ],
      project: [
        "Technology Acceptance and Ease of Use among the Elderly.",
        "Efficacy of Sex Differences on the Perceptual Experience of Virtual Building Images.",
        "The Gender-STEM Dynamics in Higher Education in Premier Institutions of India.",
        "Investigating the effects of emotional eliciting images on human route learning strategies.",
        "Category-Based Fear Generalization in Humans.",
        "Investigating the effects of Imagery Rescripting and Transcranial Direct Current Stimulation in Fear Generalization and Extinction.",
      ],
      awards: [
        "Trainee Professional Development Award (TPDA) by the Society for Neuroscience, providing access to professional development courses and travel grant (2500 USD) to attend Neuroscience 2023 at Washington D.C.",
        "Received the International Travel Support (ITS) Scheme travel grant by the Science & Engineering Research Board (SERB) for attending the 33rd International Congress of Psychology 2024 at Prague, Czech Republic (2024).",
        "Received the Best Poster Award (3rd Position) at the Institute Research Day poster presentation at the Indian Institute of Technology Roorkee (14th March, 2024).",
      ],
      conferences: [
        "Mitra, S., & Asthana, M.K. (2024). Imagery rescripting attenuates the return of generalized fear through spontaneous recovery, poster presentation at the Neuroscience 2024, annual meeting of the Society for Neuroscience on 7th October, 2024 at Chicago, USA.",
        "Mitra, S., & Asthana, M.K. (2024). Role of Imagery Rescripting and Imaginal Extinction in Fear Generalization and UCS Devaluation, oral presentation at the 33rd International Congress of Psychology (ICP) 2024, on 22nd July 2024 at Prague, Czech Republic. Funding source: International Travel Support (ITS) Scheme travel grant by the Science & Engineering Research Board (SERB).",
        "Mitra, S., & Asthana, M.K. (2023). Imagery Rescripting and Imaginal Extinction in Reducing Generalized Fear: A Comparison, poster presentation at the 10th Annual Conference of Cognitive Science, Indian Institute of Technology Kanpur on 10th December, 2023.",
        "Mitra, S., & Asthana, M.K. (2023). Continuous and partial reinforcement impact threat expectancies in conceptual fear generalization, poster presentation at the Neuroscience 2023, annual meeting of the Society for Neuroscience on 11th November, 2023 at Washington DC, USA. Funding source: Trainee Professional Development Award (TPDA) by the Society for Neuroscience (2500 USD).",
        "Mitra, S., & Asthana, M.K. (2023). Exploring the role of Imagery Rescripting and Imaginal Extinction in Reducing Generalized Threat Expectancies, poster presentation at the 41st Annual Meeting of the Indian Academy of Neurosciences and International Conference on Brain: Chemistry to Cognition, Jiwaji University, Gwalior.",
        "Mitra, S., & Asthana, M.K. (2023). Investigating the Effect of Reinforcement Levels on Conceptual Fear Generalization, oral presentation at the 32nd National Academy of Psychology (NaOP) Annual Convention, Ahmedabad University.",
        "Mitra, S., & Asthana, M.K. (2022). Effect of Continuous and Partial Reinforcement in Conceptual Fear Generalization, poster presentation at the 9th Annual Conference of Cognitive Science, Indian Institute of Technology Delhi.",
        "Mitra, S., & Asthana, M.K. (2022). Information and Communication Technology Acceptance and Digital Inclusion among Elderly Users, oral presentation at the 2nd Young Graduate Meet, Indian Institute of Technology Mandi.",
        "Mitra, S., & Asthana, M.K. (2022). Understanding Information and Communication Technology Acceptance among Elderly Users, poster presentation at the 4th Summer School: Cultural Psychology as an Interdisciplinary Synthesis at the University of Luxembourg (APA Div. 52).",
        "Mitra, S., & Asthana, M.K. (2022). Modulation of Imagery Rescripting and Extinction using Transcranial Direct Current Stimulation, No-data poster presentation at TEAP Conference 2022, Germany.",
        "Mitra, S., & Asthana, M.K. (2021). Can Transcranial Direct Current Stimulation Modulate Generalized Fear Memories, oral presentation at SYNAPSE Neuroscience Symposium 2021 by IISER Thiruvananthapuram IISER Tirupati.",
        "Mitra, S., & Asthana, M.K. (2021). A Qualitative Approach to Examine Technology Acceptance and Ease of Use among Elderly, poster Presentation at Florida Psychological Association Conference- Diversity at Practice.",
        "Mitra, S., & Asthana, M.K. (2021). Can Transcranial Direct Current Stimulation Douse Fear Generalization?, oral presentation at Euregio Brain Networking Conference.",
      ],
      publications: [
        doi("Mitra, S., & Asthana, M. K. (2024). Attenuating Conditioned Fear using Imagery-Based Interventions: An Overview. Neuroscience & Biobehavioral Reviews, 105751.", "10.1016/j.neubiorev.2024.105751"),
        doi("Verma A, Mitra S, Khamaj A, Kant V, Asthana MK (2024). Preventing fear return in humans: Music-based intervention during reactivation-extinction paradigm. PLoS ONE 19(2): e0293880.", "10.1371/journal.pone.0293880"),
        doi("Maji, S., Mitra, S., & Asthana, M. K. (2023). ‘Treading the no woman’s land’: The gender-STEM dynamics in higher education in premier institutions of India. European Journal of Engineering Education, 0(0), 1–26.", "10.1080/03043797.2023.2168518"),
        doi("Mitra, S., Singh, A., Rajendran Deepam, S., & Asthana, M. K. (2022). Information and communication technology adoption among the older people: A qualitative approach. Health & Social Care in the Community, 30(6).", "10.1111/hsc.14085"),
        doi("Sambath, R. D., Mitra, S., & Asthana, M. K. (2022). Efficacy of Sex Differences on the Perceptual Experience of Virtual Building Images. In D. Chakrabarti, S. Karmakar, & U. R. Salve (Eds.), Ergonomics for Design and Innovation (pp. 247–258). Springer International Publishing.", "10.1007/978-3-030-94277-9_22"),
      ],
      memberships: [
        "Indian Academy of Neuroscience (Life Member)",
        "Society for Neuroscience (January to December 2023).",
      ],
    },
  },

  {
    slug: "dr-sambath-rd",
    name: "Dr. SAMBATH RD",
    role: "Assistant Professor, TKM College of Engineering Kollam Kerala",
    department: HSS,
    category: "alumni",
    image: sambathImg,
    email: "sambath.rd@tkmce.ac.in",
    linkedin: "https://www.linkedin.com/in/sambathrd/",
    orcid: "0000-0001-6081-0265",
    researchGate: "https://www.researchgate.net/profile/Sambath-Rd",
    sections: {
      currentAffiliation: [
        "Assistant Professor, TKM College of Engineering, Kollam, Kerala.",
        "Alumnus of MARG, Psychology Laboratory, Department of Humanities and Social Sciences, Indian Institute of Technology Roorkee.",
      ],
      about: [
        "Sambath RD, a native of Kerala, received his Bachelor of Fine Arts from the University of Kerala and Masters of Fine Arts (Visual Media) from Amrita Vishwa Vidyapeetham University. Sambath is interested in researching how human behavior is influenced by environmental features, specifically how elements and principles of communication design and art (color, shape, surface finishes) affect human wayfinding behavior. He completed his Ph.D. in Cognitive Visual Ergonomics at IIT Roorkee (2023). His research interests include, but are not limited to, the opposing roles of color and elements of design in human spatial learning and wayfinding. Using psychophysiology and virtual reality tools and methods, he investigates the impact of landmark identification and route planning strategies in human spatial navigation. He has submitted a research paper on Humanizing Work and Work Environment 2021 - IIT Guwahati 2021, and also presented a lighting talk at International Interdisciplinary Computational Cognitive Science Summer School 2021. Outside of the lab, he thoroughly enjoys being with his family and friends, paintings, sculpting, gardening, and cooking.",
      ],
      background: [
        "Bachelor of Fine Arts in Sculpture, Raja Ravivarma College of Fine Arts, University of Kerala (2008).",
        "Masters of Fine Arts (Visual Media), specialization in Broadcast Journalism and Video Production, Amrita Vishwa Vidyapeetham University (2010).",
        "Master of Media Business Management, specialization in Media Management, Institute of Chartered Financial Analysts of India (ICFAI) University.",
        "PhD in Cognitive Visual Ergonomics, titled “Impact of landmark identification and route learning strategies in spatial navigation”, Indian Institute of Technology Roorkee (2023).",
        "Masters in Psychology, specialisation in Industrial and Organizational Psychology, IGNOU (2025).",
      ],
      project: [
        {
          heading: "Ongoing Projects",
          items: [
            "‘संशोधन (Sanshodhan) Research Grant 2025: research proposal titled “Resonant Spaces: Unveiling the Emotional and Restorative Dynamics of Indian Architecture”, selected under the COA Outcome-Oriented Research Program for Senior Teachers/Architects.",
            "Design project of the Kerala State Council for Child Welfare (KSCCW).",
            "Jail architecture, public attitude and wellbeing of inmates of Kerala.",
          ],
        },
        {
          heading: "Completed Projects",
          items: [
            "Technology Acceptance and Ease of Use among Elderly: selection of virtual building models of social context without sex bias.",
            "Human landmark identification and effect of environmental information such as birds-eye view and route instructions.",
            "Investigating the effects of emotional eliciting images on human route learning strategies using psychophysiological tools.",
            "Student Information Brochures Design, IIT Roorkee (2023–2024): visual design and production.",
            "Poster Design for Academic Talks, Anushruti Academy for the Deaf, IIT Roorkee (2020–2021): accessibility-centered design.",
            "Memento Design, TKMCE Retirement Function (2018): visual communication and design.",
            "Public Park Design, Kollam Corporation (Amrith Project): community-engaged design and planning.",
          ],
        },
      ],
      patents: [
        "Inventor on Indian design patent “CHALK HOLDER APPARATUS” (Publication Number: 51/2024, Publication Date: 20/12/2024, Type: INA, Application Number: 202441099556, Filing Date: 16/12/2024), developed in collaboration with Dr. Anand Shekar (Mechanical Engineering Department, TKMCE).",
        "Inventor on Indian design patent “PORTABLE ARM REST DIVIDER APPARATUS” (Publication Number: 34/2024, Publication Date: 23/08/2024, Type: INA, Application Number: 202441062772, Filing Date: 20/08/2024; Field: Mechanical Engineering, IPC: B60N2/75, B64D11/00), co-invented with Dr. Anand Sekhar R (Assistant Professor, Mechanical Engineering, TKMCE).",
        "Inventor on Indian design patent application “SORPTION BASED SOLAR DESALINATION SYSTEM WITH THERMOELECTRIC DEHUMIDIFICATION UNIT” (Application Number: 202441051336, Filing Date: 04/07/2024), developed in collaboration with Dr. Baiju V and multidisciplinary colleagues in Mechanical Engineering.",
      ],
      awards: [
        "‘संशोधन (Sanshodhan) Research Grant 2025 (₹3 lakh): research proposal titled “Resonant Spaces: Unveiling the Emotional and Restorative Dynamics of Indian Architecture”, selected under the Council of Architecture (CoA) Outcome-Oriented Research Program for Senior Teachers/Architects.",
      ],
      conferences: [
        "Presented a talk on “Gender Differences in Visual Perception on Selected Images of Virtual Building Models” at an International Interdisciplinary Computational Cognitive Science Summer School 2021 by Computational Cognitive Science Colloquium on August 6th, 2021.",
        "Presented a paper on “Efficacy of Sex Differences on the Perceptual Experience of Virtual Building Images” at the 19th International Conference INDIAN SOCIETY OF ERGONOMICS, Humanizing Work and Work Environment on December 1, 2021.",
        "Member of a panel discussion on “Dialogue within the area of HFE (Human Factors and Ergonomics) supporting Sustainability and Climate Change work”.",
      ],
      memberships: [
        "Member at Association of Designers of India (Membership Id: 6475).",
        "Professional member of Public Relations Society of India.",
        {
          title: "Member of IEA Visual Ergonomics Technical Committee.",
          link: "https://secureservercdn.net/50.62.89.79/m4v.211.myftpupload.com/wp-content/uploads/2019/07/IEA-Visual-Ergonomics-Members-December-2021.pdf",
        },
        "Member of Puget Sound Chapter of the Human Factors and Ergonomics Society.",
      ],
      workExperience: [
        "Faculty of Visual Arts at Department of Architecture, TKM College of Engineering from Feb 2014 – Present.",
        "Art Teacher at Jawahar Navodaya Vidyalaya, Panchawati from March 2013 to February 2014.",
        "Faculty of Visual Arts at SIGMA College of Architecture from April 2013 to September 2013.",
        "Color Consultant for Asian Paints (Contact employee) from Jun 2011 to May 2012.",
      ],
      academicDuties: [
        "Chairman, Board of Examinations, B.Arch 2023 scheme Autonomy Batch, TKM College of Engineering (TKMCE).",
        "Member of the Strategic Committee of TKM College of Engineering (to advise and support institute management to take policy decisions).",
        "Current Chairman and Coordinator, Board of Examination, Bachelors of Design, APJ Abdul Kalam Technological University (KTU).",
        "Current member of the Board of Studies of Bachelors of Design, APJ Abdul Kalam Technological University (KTU).",
        "Current member of the Board of Studies for Engineering Studies, University of Kerala.",
        "Current member of Board of Studies of Bachelors of Visual and Performance Art Studies, University of Kerala.",
        "Current Assistant Camp Officer of Architecture Program of APJ Abdul Kalam Technological University for Kollam district of Kerala.",
        "Member of Curriculum Committee of B.Des Program, APJ Abdul Kalam Technological University (2019 to present).",
        "Assistant Chief Superintendent of Examination (Center TKMCE for University of Kerala, 2017–2019).",
      ],
      publications: [
        "R D, S., Mitra, S., & Asthana, M. K. (2022). Efficacy of Sex Differences on the Perceptual Experience of Virtual Building Images. In D. Chakrabarti, S. Karmakar, & U. R. Salve (Eds.), Ergonomics for Design and Innovation: Humanizing Work and Work Environment: Proceedings of HWWE 2021: 391 (Lecture Notes in Networks and Systems) (1st ed.). Springer Nature Switzerland AG. (Peer reviewed / SCOPUS)",
        {
          title: "RD, S., & Asthana, M. K. (2021, August). IEA VE NEWS. IEA Visual Ergonomics Technical Committee Newsletter. (General article)",
          link: "https://secureservercdn.net/50.62.194.59/m4v.211.myftpupload.com/wp-content/uploads/2019/07/IEA-VE-TC-Newsletter-August-2021.pdf",
        },
        "Kaur, R., Mitra, S., & RD, S. (2025). Phulkari Art, Folksong, and the Expression of Indignation: An Interdisciplinary Review with Indian Psychological Perspectives. Culture & Psychology, 1354067X251411805. (Peer reviewed / SSCI / SCOPUS)",
        "Mitra, S., Singh, A., Rajendran Deepam, S., & Asthana, M. K. (2022). Information and communication technology adoption among older people: A qualitative approach. Health & Social Care in the Community, 30(6), e6428–e6437. (Peer reviewed / SSCI / SCOPUS)",
        "Verma, A., Sambath, R. D., & Asthana, M. K. (2023, December). Music Genre Preference of Non-Musicians. In the International Conference on Humanizing Work and Work Environment (pp. 211–221). Singapore: Springer Nature Singapore. (Peer-reviewed conference proceedings / SCOPUS)",
        "Shynu, R. V., Suseelan, A., & Sambath, R. D. (2025). Environmental Perception. In The Encyclopedia of Human Geography (pp. 1–10). Cham: Springer Nature Switzerland. (International peer-reviewed encyclopedia contribution)",
        {
          title: "Sambath, R. D. (2025). Culture Dividend: Leveraging Cultural Festivals for Organizational Engagement. Anveshan: Newsletter of the Indian Institute of Business Psychology (IIBP), Issue 62, Volume 6. Published 5 August 2025. (General article)",
          link: "https://iibp.org.in/the-culture-dividend-leveraging-cultural-festivals-for-organizational-engagement/",
        },
      ],
    },
  },

  {
    slug: "dr-ankita-verma",
    name: "Dr. ANKITA VERMA",
    role: "PhD Psychology",
    department: HSS,
    category: "alumni",
    image: ankitaImg,
    linkedin: "https://www.linkedin.com/in/ankita-verma-46106077/",
    researchGate: "https://www.researchgate.net/profile/Ankita-Verma-20",
    email: "ankitaverma.iitr@gmail.com",
    sections: {
      about: [
        "Ankita, a Varanasi native, received her Bachelor of Psychology and Masters of Psychology from the Banaras Hindu University of Varanasi. She is a PhD student at the Indian Institute of Technology Roorkee. Ankita’s research interests include, but are not limited to, the opposing roles of fear in human learning and memory reconsolidation processes. Particularly, the effect of music on fear extinction using the paradigm of memory reconsolidation. Through the use of psychophysiology methods, she is investigating how the presence of a music during memory reconsolidation process can update and modify fear extinction, and further prevent relapse of fearful behaviours. Outside of the lab, she thoroughly enjoys music, cooking, reading, being with plants and writing blogs.",
      ],
      background: [
        "Bachelor in Psychology, Banaras Hindu University.",
        "Masters in Clinical Psychology, Banaras Hindu University, Varanasi.",
      ],
      project: [
        "Are males more adept than females at music perception?",
        "Community Currency: A Qualitative Study of Problematizing Indian Time Bank.",
        "Investigating the effects of emotional eliciting images on human route learning strategies using psychophysiological tools.",
        "Effect of Music on Memory Reconsolidation paradigm using multi-measure psycho-physiological assessment.",
      ],
      publications: [
        doi("Verma, A., Sambath, R.D., Asthana, M.K. (2025). Music Genre Preference of Non-musicians. In: Das, S., Akram, W., Khanzode, V., Iqbal, R. (eds) Human-Centered Digitalization, Volume 3. HWWE ACED BRICS 2023. Design Science and Innovation. Springer, Singapore.", "10.1007/978-981-96-4383-7_21"),
        doi("Verma, A., Sridhar, S., Dar, K.F. et al. (2024). Scope and challenges in the implementation of Time Bank in India: a qualitative study. Discover Global Society, 2, 14.", "10.1007/s44282-024-00040-0"),
        doi("Verma A, Mitra S, Khamaj A, Kant V, Asthana MK (2024). Preventing fear return in humans: Music-based intervention during reactivation-extinction paradigm. PLoS ONE 19(2): e0293880.", "10.1371/journal.pone.0293880"),
        doi("Ankita Verma, Sruthi Sridhar, Kaneez Fatima et al. (2023). Scope and Challenges in the Implementation of Time Bank in India: A Qualitative Study. 10 October 2023, PREPRINT (Version 1) available at Research Square.", "10.21203/rs.3.rs-3280321/v1"),
        doi("Sinha, S., Verma, A., & Tiwari, P. (2021). Technology: Saving and Enriching Life During COVID-19. Frontiers in Psychology, 12, 647681.", "10.3389/fpsyg.2021.647681"),
      ],
      conferences: [
        "Presented a poster on “Music and Emotion: The Effect of Valence and Arousal on Music Perception.” at the Florida Psychological Association Annual Convention 2021 on 25th September 2021.",
        "Presented a no-data poster on “The Effect of Music on Memory Reconsolidation Window to Regulate Fear Memory.” at TEAP Conference 2022, Germany on 23rd March 2022.",
      ],
      memberships: [
        "Graduate member of American Psychological Association.",
      ],
    },
  },

  {
    slug: "dr-hiranmayakaparthi-ramadugu",
    name: "Dr. Hiranmayakaparthi Ramadugu",
    role: "Project Generalist - Soul AI",
    category: "alumni",
    image: hiranmayaImg,
    email: "hiran.ramadugu@gmail.com",
    linkedin: "https://www.linkedin.com/in/hkramadugu",
    sections: {
      currentAffiliation: [
        "Project Generalist - Soul AI.",
      ],
      about: [
        "Hiranmayakaparthi received his PhD in May 2022 for his thesis on the role of ethical climate and emotional intelligence on workplace deviance. Prior to that, he completed an MBA in Marketing and Finance from the University of Hyderabad and a Bachelor in Technology from the University College of Technology, Osmania University. He gained work experience from well-respected corporate organizations such as Tata Consultancy Services Limited and Vimta Labs Limited, and academic institutes of national importance. He worked as an Assistant Professor at the National Forensic Sciences University, Delhi during 2023–24, and is currently involved in training LLMs at Soul AI.",
      ],
      background: [
        "PhD (May 2022): thesis on the role of ethical climate and emotional intelligence on workplace deviance.",
        "MBA in Marketing and Finance, University of Hyderabad.",
        "B.Tech, University College of Technology, Osmania University.",
      ],
      workExperience: [
        "Project Generalist (training LLMs), Soul AI: current.",
        "Assistant Professor, National Forensic Sciences University, Delhi (2023–24).",
        "Tata Consultancy Services Limited.",
        "Vimta Labs Limited.",
      ],
      publications: [
        doi("Ramadugu, H., & Rastogi, R. (2021). The impact of perceived ethical climate types on workplace deviance: An empirical investigation of IT professionals in India. Global Business and Organizational Excellence, 40(5), 53–64.", "10.1002/joe.22085"),
      ],
      memberships: [
        "Indian Academy of Management (INDAM)",
      ],
    },
  },

  {
    slug: "kaneez-fatima",
    name: "Dr. KANEEZ FATIMA",
    role: "PhD Scholar, Psychology",
    department: HSS,
    category: "alumni",
    image: kaneezImg,
    linkedin: "https://www.linkedin.com/in/kaneez-fatima-2b5430238/",
    researchGate: "https://www.researchgate.net/profile/Kaneez-Dar",
    orcid: "0000-0001-5029-2804",
    email: "kf9164787@gmail.com",
    sections: {
      about: [
        "Kaneez Fatima received her master's degree in psychology from university of Kashmir, where she worked on a master's dissertation titled \"Life satisfaction in relation with Hope and Religiosity\". She is a PhD student at IIT Roorkee working in cognitive psychology. Her PhD research work includes investigation of higher cognitive processes like emotion regulation, specifically the nature of cognitive reappraisals and inhibitory control in enhancing the effect of extinction of conditioned fear responses. Outside of work she enjoys reading fiction and writing.",
      ],
      background: [
        "B.A in Psychology, Govt. Degree College for women, University of Kashmir.",
        "M.A in General Psychology, University of Kashmir.",
      ],
      project: [
        "Movie Fans and Low Anxiety profiler are more Psychologically Resilient towards COVID-19.",
        "Community Currency: A Qualitative Study of Problematizing Indian Time Bank.",
        "Exploring stages of Grief in Parents of Hearing Impaired Children.",
        "Effects of Fear Sensitivity and Emotional Reactivity on Memory Update.",
        "Intern for a project titled “Cognitive effects of Mantra chanting” sponsored by Indian Knowledge System (IKS) Division, Ministry of Education.",
      ],
      publications: [
        doi("Dar, K. F., & Asthana, M. K. (2026). Inhibitory control training might be a gateway to enhance fear extinction. International Journal of Psychophysiology, 113335.", "10.1016/j.ijpsycho.2026.113335"),
        doi("Dar, K. F., & Asthana, M. K. (2026). Cognitive reappraisal of conditioned fear: A systematic review. Journal of Behavior Therapy and Experimental Psychiatry, 90, 102076.", "10.1016/j.jbtep.2025.102076"),
        doi("Dar, K. F., & Asthana, M. K. (2025). Does cognitive reappraisal facilitate extinction? Cognition and Emotion, 1–10.", "10.1080/02699931.2025.2467068"),
        doi("Dar, K. F., & Asthana, M. K. (2025). Trait Anxiety and Fictional Exposure: How Movie Preferences Shape Psychological Resilience and Pandemic Preparedness. Journal of Psychological Perspective.", "10.47679/jopp.7412602025"),
        doi("Verma, A., Sridhar, S., Dar, K.F., Asthana MK (2024). Scope and challenges in the implementation of Time Bank in India: a qualitative study. Discover Global Society, 2, 14.", "10.1007/s44282-024-00040-0"),
      ],
      awards: [
        "Trainee Professional Development Award (TPDA) by the Society for Neuroscience, providing access to professional development courses and a travel grant to attend Neuroscience 2025 in San Diego, USA.",
      ],
      conferences: [
        "Poster presentation titled “Inhibitory control training improves fear extinction and extinction recall” at Neuroscience 2025, San Diego, USA, 15th–19th November 2025.",
        "Poster presentation titled “Effect of Detached and Positive Reappraisal on Fear Extinction and Recall” at Neuroscience 2025, San Diego, USA, 15th–19th November 2025.",
        "Virtual presentation titled “Effect of inhibitory control training on extinction learning” at the European Congress of Psychology (ECP), Paphos, Cyprus, 1st–4th July, 2025.",
        "Oral presentation titled “Improving Inhibitory Control Results In Better Extinction” at the National Academy of Psychology (NAOP) Convention, Christ University, New Delhi, 17th–20th February, 2025.",
        "Presented a poster titled “Effect of Inhibitory Control Training on Extinction of Conditioned Fear” at 11th Annual Conference of Cognitive Science, ACCS 2024, held at Indian Institute of Technology Bombay (IITB) from 13th–15th December 2024.",
        "Presented a poster titled “Effect of Reappraisal on Extinction of Conditioned Fear Response” at XLII Annual Meeting of Indian Academy of Neurosciences 2024 (IAN-2024), held at National Institute of Mental Health and Neurosciences, November 12–14, 2024.",
        "Virtual Poster presentation titled \"Efficacy of style of Reappraisal on Fear Extinction and Recall\" at Neuroscience 2024.",
        "Accepted for presentation at the 8th edition of the European Neuroscience Conference by Doctoral Students (ENCODS), at the Collège de France, 11 Pl. Marcelin Berthelot, 75231 Paris, France.",
        "Presented a talk titled “Effect of Creative Cognitive Reappraisal on Extinction of Conditioned Responses” at 10th Annual Conference of Cognitive Science, ACCS 2023, held at IIT Kanpur.",
        "Acceptance for poster presentation titled “Influence of Trait Anxiety and Movie Preferences on Pandemic Resilience and Preparedness\" at 65th TeaP conference 2023, Germany.",
        "Presented a poster on “Coping with the Pandemic: Influence of Movie preference and Trait Anxiety” at the 32nd Annual Convention of the National Academy of Psychology (NAOP) on 3rd March 2023.",
        {
          title: "Poster display on “Movie Fans and Low Anxiety profiler are more Psychologically Resilient towards COVID-19” at the 13th California Cognitive Science Conference on 16th April 2022. (view poster)",
          link: "https://cssa.berkeley.edu/cogscicon/ccsc-22-posters.html",
        },
        "Presented a talk on “Does fear generalization and avoidance generalization involve similar or distinct neural structures?” at a Student Talk at SYNAPSE Neuroscience Symposium 2021 by IISER Thiruvananthapuram IISER Tirupati on 4th December, 2021.",
      ],
      media: [
        {
          title: "Made a virtual presentation sharing my work and ideas at Recreational Fear Lab at Aarhus University.",
          link: "https://twitter.com/RecFearLab/status/1567935544260268035?s=20&t=giRRvIyDCNkIkQxj96Ye8Q",
        },
      ],
      memberships: [
        "Indian Academy of Neuroscience",
      ],
    },
  },

  /* ────────────────────────── RESEARCH SCHOLARS ────────────────────────── */
  {
    slug: "tripureshwari-paul",
    name: "TRIPURESHWARI PAUL",
    role: "Ph.D. Scholar, Psychology",
    department: HSS,
    category: "research-scholars",
    image: tripureshwariImg,
    email: "tripureshwaripaul@gmail.com",
    linkedin: "https://www.linkedin.com/in/tripureshwari-paul-4b8911239",
    orcid: "0000-0001-9266-7926",
    researchGate: "https://www.researchgate.net/profile/Tripureshwari-Paul",
    sections: {
      about: [
        "Tripureshwari has received her bachelors in Applied Psychology from Gargi College, University of Delhi and masters in Applied Psychology from University of Delhi, South Campus. In her masters she developed interest in Cognitive psychology. Tripureshwari is interested in memory processes and how they can be influenced by emotions. These questions would be achieved by devising a multivariate model using behavioural and physiological measures. Simultaneously, she is also interested in fear conditioning and prediction error, believing that her research will have some clinical implications in PTSD and others. She loves animals (feeds street dogs everyday!), learning new recipes and strengthen neural connects (mindful meditation).",
      ],
      background: [
        "B.A. in Applied Psychology, Gargi College, University of Delhi.",
        "M.A in Applied Psychology, University of Delhi (South Campus).",
      ],
      project: [
        "Exploring the effect of Reinforcement Level and Prediction Error as decisive factors for triggering memory reconsolidation.",
        "Examine the effect of novel facilitated Extinction and reinforcement level in modulating the strength of fear memory.",
      ],
      publications: [
        doi("Paul, T., & Asthana, M. K. (2025). Investigating the effect of memory strength within reactivation-extinction paradigm on cue-dependent amnesia. Neuroscience, 582, 11–21.", "10.1016/j.neuroscience.2025.07.014"),
      ],
      conferences: [
        "Presented a talk titled “Manipulating Boundary Conditions: Memory Strength and Prediction Error to Initiate Memory Reconsolidation” at 11th Annual Conference of Cognitive Science, ACCS 2024, held at IIT Bombay.",
        "Virtual Poster presentation titled ‘Prediction Error and Memory Strength Affect the Initiation of Memory Reconsolidation’ at Neuroscience 2024.",
        "Poster presentation titled ‘Manipulating Memory Strength and Expectancy Violation to Trigger Memory Reconsolidation’ at the 66th TeaP Conference Regensburg 2024.",
        "Presented Poster on “Effect of Emotion on Memory encoding” at the 32nd Annual Convention of National Academy of Psychology (NAoP), 2023.",
        "“Can memory encoding be influenced by valence?” abstract accepted for poster presentation at TEAP Conference 2023, Germany.",
        "Presented a no-data poster on “The influence of Emotion on Affective Memory Encoding” at TEAP Conference 2022, Germany on 23rd March 2022.",
      ],
      awards: [
        "International Travel Grant by Science and Engineering Research Board (SERB): a statutory body under the Department of Science and Technology, Government of India to attend 66th TeaP Conference Regensburg 2024.",
      ],
    },
  },

  {
    slug: "vrashal-verma",
    name: "Vrashal Verma",
    role: "PhD Scholar, Design",
    department: "Department of Design",
    category: "research-scholars",
    image: vrashalImg,
    email: "vrashalverma@gmail.com",
    linkedin: "https://www.linkedin.com/in/vrashal-verma-764b5b47/",
    orcid: "0000-0002-4470-9156",
    researchGate: "https://www.researchgate.net/profile/Vrashal-Verma",
    sections: {
      currentAffiliation: [
        "Assistant Professor, School of Design, Jain University, Bangalore.",
      ],
      about: [
        "Vrashal Verma holds a Bachelor of Technology (B.Tech) in Aerospace Engineering, and a Master of Design (M.Des) in Interaction Design from IIITDM (Indian Institute of Information Technology, Design and Manufacturing), Jabalpur. His area of work is the driver distraction. He has a broad range of interests and expertise in UX Research, UX Information Design, UI Design Principles. He is also certified for Energy Management Systems by BSI (British Standards Institution). Out of work, he spends his time playing chess, understanding Vedic Jyotish, and exploring food.",
      ],
      background: [
        "B.Tech in Aerospace Engineering, Amity University, Noida.",
        "M.Des, Pandit Dwarka Prasad Mishra Indian Institute of Information Technology Design and Manufacturing, Jabalpur.",
      ],
      project: [
        "Analysis of Driving hours on the automobile control panel.",
        "Icon comprehension test for the OTC medicine.",
      ],
      publications: [
        doi("Verma, V., Singh, D. and Asthana, M. Kumar (2025). Systematic Analysis of Medication Errors in an Indian Context Using the Swiss Cheese Model. Journal of Systems Thinking in Practice, 4(4), 27–53.", "10.22067/jstinp.2025.93764.1155"),
      ],
      conferences: [
        "Prodhan, P., Deb, P., Asthana, M. K., & Verma, V. (2026). Evaluation of relevant user information: An eye tracking study for heater user manuals. Proceedings title INDIS (paper ID. 99). Accepted.",
        "Verma, V., & Asthana, M. K. (2024). To Understand the Healthcare Systems Thinking Using the Swiss-Cheese Model to Avoid Medication Error, Best Poster Award at the 1st Innovative Design for Excellence, Affordability and Sustainability (IDEAS 2024) jointly organised with Queens University Canada & Indian Institute of Technology Roorkee.",
        "Verma, V., & Asthana, M. K. (2023). An Analysis of Driving Hours on the Driver Preferential Use of the Dashboard: A Pilot Study, Oral Presentation at the 19th Humanizing Work and Work Environment (HWWE 2023) jointly with Asian Conference on Ergonomics and Design (ACED), Indian Institute of Management Mumbai.",
      ],
      abstract:
        "Vehicle accidents are a pervasive concern with far-reaching consequences for all parties. Accidents and crashes are often attributed to human mistakes. Some individuals engage in extended periods of driving, and others partake in shorter driving durations. This research delves into the varying driving durations, from extended journeys to shorter commutes. Distractions, whether originating from inside or outside of the car, may be present. The current study focuses on one of the interior factors of the dashboard, which plays a crucial role in facilitating automotive handling. The current study examines the issues regarding the integration of different safety and infotainment systems and their effect on traffic safety using the Optimized System Integration for Safe Interaction in Vehicles (OPTIVe) questionnaire to compare the preference of long route drivers (n = 9) and short route drivers (n = 15) between the age of 25 to 45. The IBM SPSS was used to administrate the Mann-Whitney U test; the results show that six essential features of dashboard design (i.e., Speedometer, Fuel Gauge, RPM, Oil pressure, Time on the dashboard, and outside temperature) are significant during long driving hours (M = 10.3, SD = 2.5) compared to short driving hours (M = 3.3, SD = 1.8). The current study provides the knowledge required to understand the impact of driving hours on dashboard use. The results highlight the importance of driver information, the instrument cluster, and warning symbols during long driving hours compared to short driving hours. Keywords: User Preferences, user interface, automotive user interface OPTIVe, driving hours, infotainment.",
      workshops: [
        "Sustainability and social innovation lab, Indian Institute of Technology, Guwahati.",
        "AI for UI/UX, Hindustan Aeronautical Limited and Indian Institute of Science, Bangalore.",
        "Ethnography for young researchers, Indian Institute of Technology Roorkee.",
      ],
      memberships: [
        "Indian Academy of Neuroscience student membership (Membership Id: LV: 51).",
        "Student member at Association of Designers of India (Membership Id: 16703).",
        "Member of ACM SIG (Membership Id: 8180130).",
        "Editorial board member, Edwin group of Journal.",
        "Student membership, System Dynamics Society.",
        "American Psychological Association.",
        "Indian Society of Ergonomics, Lifetime membership (L 0549).",
      ],
      workExperience: [
        "Assistant Professor, School of Design, Jain University, Bangalore, from September 2026 – current.",
        "Assistant Professor, School of Design, Avantika University, Ujjain, from July 2020 – 2022.",
      ],
      otherPositions: [
        "Learning Management System (LMS) CANVAS administration, Avantika University, Ujjain, November 2020 – September 2022.",
        "Jury member for M.Des and B.Des programme, Avantika University, Ujjain, November 2020 – September 2022.",
      ],
    },
  },

  {
    slug: "vidisha-maithani",
    name: "Vidisha Maithani",
    role: "Ph.D. Scholar, Cognitive Psychology",
    department: HSS,
    category: "research-scholars",
    image: vidishaImg,
    email: "vidisha_m@hs.iitr.ac.in",
    linkedin: "https://www.linkedin.com/in/vidisha-maithani-023355221/",
    orcid: "https://orcid.org/0009-0003-3085-033X",
    sections: {
      about: [
        "Vidisha Maithani received her Master’s degree in Neuropsychology from National Forensic Sciences University in Gujarat, where she worked on her dissertation on “Facial features based responses for emotion perception: A review of ERP studies”. She is currently a PhD candidate in IIT Roorkee working on the investigation of Threat Proximity in the Selection of Human Defense Responses.",
      ],
      background: [
        "B.Sc Psychology, Annamalai University Directorate of Distance Education, Tamil Nadu.",
        "M.Sc in Neuropsychology, National Forensic Sciences University, Gujarat.",
      ],
      publications: [
        doi("Maithani V and Asthana MK (2026). Investigation of human defence responses in a virtual reality environment: an EEG study. Frontiers in Human Neuroscience, 20:1924058.", "10.3389/fnhum.2026.1924058"),
      ],
      conferences: [
        "Presented a poster on “Self and Other-directed Threat in Virtual Reality: An Eye Tracking Study” at K-Brain 2026, hosted by The Korean Society for Brain and Neural Sciences (in-person), Daejeon, South Korea.",
        "Presented a talk on “Virtual Noise: The effect of online distractions on cognitive well-being” at Ahead conference 2025.",
        "Presented a Virtual Poster at the Neuroscience 2025 conference organised by the Society for Neuroscience on “Investigating the effect of 4-7-8 breathing technique in cynophobics” study.",
        "Presented a poster at 34th Annual Conference of the National Academy of Psychology (NAOP 2025) on “Investigating Acquired Equivalence Phenomenon In Conditioned Pleasant And Unpleasant Stimuli”.",
        "Acceptance of “An Electrophysiological Study To Investigate Human Defense Responses In Virtual Reality” for poster presentation at the international TeaP conference 2025 (Conference of Experimental Psychologists).",
        "Presented a poster on “An electrophysiological investigation of fight-flight defense responses in humans using 3D virtual reality environment” at 11th Annual Conference of Cognitive Science (ACCS 11), Indian Institute of Technology Bombay, on 13 December, 2024.",
        "Presented a Poster titled “An electrophysiological study to investigate fight-flight defense responses in humans using 3d virtual reality simulation” at XLII Annual Meeting of Indian Academy of Neurosciences (IAN-2024), NIMHANS, Bengaluru, on 14 November, 2024.",
        "Presented a Virtual Poster titled “Exploring the conditioned pleasant and unpleasant auditory stimuli in the acquired equivalence paradigm” at Neuroscience 2024 hosted by the Society for Neuroscience (SfN), Chicago USA, on 07 October, 2024.",
        "Presented a Virtual Poster titled “An electrophysiological investigation of fight-flight defense responses in humans using 3d virtual reality environment” at Neuroscience 2024 hosted by the Society for Neuroscience (SfN), Chicago USA, on 08 October 2024.",
        "Presented a poster on “Investigation of Threat Proximity in the Selection of Human Defense Responses” on Institute Research Day at Indian Institute of Technology Roorkee, on 13 March 2024.",
        "Presented a poster on “Investigating Acquired Equivalence in Conditioned Pleasant and Unpleasant Stimuli” at 10th Annual Conference of Cognitive Science (ACCS 10) on 10 December, 2023.",
        "Intern for project titled ‘Cognitive effects of Mantra chanting’ sponsored by Indian Knowledge System (IKS) Division, Ministry of Education.",
        "Attended NMC 2022: A conference for the computational neuroscience community, online, hosted by Neuromatch.",
        "Attended an International conference on Environmental change and socio-cultural transformations in India, 2022, IIT Roorkee, Uttarakhand.",
        "International Conference on emerging trends in cognitive neurosciences: Forensic and Clinical applications, 2020, Gujarat. Hosted by the Cognitive Neuroscience Society of India (CNSI) and Gujarat Forensic Sciences University.",
      ],
      workshops: [
        "Workshop on Reading and analysis of EEG and ERP signals: A hands-on experience, 2019, Gujarat. Hosted by Axxonet.",
      ],
      memberships: [
        "The Korean Society for Brain and Neural Sciences (KSBNS 2026)",
        "Indian Academy of Neuroscience (IAN) (Life Member)",
        "Society for Neuroscience (SfN) (2026)",
        "National Academy of Psychology (NAOP) (2025)",
      ],
    },
  },

  {
    slug: "dipti-singh",
    name: "Dipti Singh",
    role: "Ph.D. Scholar, Psychology",
    department: HSS,
    category: "research-scholars",
    image: diptiImg,
    linkedin: "https://www.linkedin.com/in/dipti-singh-a59288295",
    email: "deeptsingh98@gmail.com",
    sections: {
      about: [
        "Dipti Singh, a psychology graduate from Aligarh Muslim University, Uttar Pradesh, holds a B.A.(Hons), M.A. in Psychology, and diplomas in Educational and Vocational Counseling as well as Guidance and Counseling. Her educational background reflects a deep commitment to psychological studies and counseling.",
      ],
      background: [
        "B.A.(Hons) Psychology, Aligarh Muslim University, Uttar Pradesh.",
        "Part Time Diploma in Educational and Vocational Counseling, Aligarh Muslim University, Uttar Pradesh.",
        "M.A. Psychology, Aligarh Muslim University, Uttar Pradesh.",
        "Diploma in Guidance and Counseling, Aligarh Muslim University, Uttar Pradesh.",
      ],
      project: [
        "Investigating the effect of the 4-7-8 breathing technique on people with cynophobia.",
        "Emotional and Neurophysiological Correlates of Affective Visual Stimuli Processing.",
        "Neural mechanisms and effectiveness of Imagery rescripting and creative cognitive reappraisal in preventing the return of fear (Department of Science and Technology, Government of India-funded project).",
      ],
      publications: [
        doi("Verma, V., Singh, D. and Asthana, M. Kumar (2025). Systematic Analysis of Medication Errors in an Indian Context Using the Swiss Cheese Model. Journal of Systems Thinking in Practice.", "10.22067/jstinp.2025.93764.1155"),
      ],
      awards: [
        "Trainee Professional Development Award (TPDA) by the Society for Neuroscience, providing access to professional development courses and a travel grant to attend Neuroscience 2025 in San Diego, USA.",
      ],
      conferences: [
        "Research Talk titled “Memory Suppression in Addiction: A Cognitive Pathway to Healthier Recovery” at AHEAD international conference on Global Disruptions in Healthcare and Development: Challenges, innovations, and Pathways for the 21st Century, 15th–17th December 2025.",
        "Research Talk titled “Investigating the Direct effect of Directed Forgetting in Emotional Associations” at Annual Conference of Cognitive Science (ACCS) 12 (12th–14th December, 2025).",
        "Poster on “Examining Directed Forgetting in Emotional Associations” at Neuroscience 2025, 15th–19th November 2025.",
        "Poster on “Emotional and Neurophysiological Correlates of Affective Visual Stimuli Processing” at Neuroscience 2025, 15th–19th November 2025.",
        "Poster on Institute Research Day at Indian Institute of Technology Roorkee on “Impact of Active Forgetting on Emotional Associations” (20th March 2025).",
        "Research Talk titled “Investigating the Impact of Directed Forgetting on the Encoding of Emotional Associations” at 34th Annual Convention of the National Academy of Psychology (NAOP) at CHRIST (Deemed-to-be University), Delhi NCR, 17th–20th February, 2025.",
        "Poster on Institute Research Day on “Idea Presentation: Inhibitory Control in Pathological Memories” (13th March 2024).",
      ],
      memberships: [
        "Indian Academy of Neuroscience (Life Member)",
        "Society for Neuroscience (Annual membership)",
      ],
    },
  },

  {
    slug: "sakshima-mishra",
    name: "SAKSHIMA MISHRA",
    role: "Ph.D. Scholar, Psychology",
    department: HSS,
    category: "research-scholars",
    image: sakshimaImg,
    email: "sakshima.sara8@gmail.com",
    linkedin: "https://www.linkedin.com/in/sakshima-mishra-3485bb1aa/",
    sections: {
      about: [
        "Sakshima Mishra received her bachelor's degree in Psychology from Banasthali Vidyapeeth with First in Order of Merit, and her Master's degree in Psychology from Banaras Hindu University where she worked on a Master's dissertation titled \"Effect of Girls-only school and Co-education school on Self-esteem and Emotional Intelligence of female adolescents\". She is a PhD student at IIT Roorkee working in cognitive psychology. She admires receiving knowledge from the people and hence applying those to understand insight of human behavior and cognition. She also has keen interest in Music, Textile designing and Drama and theatre arts.",
      ],
      background: [
        "B.A Psychology, Banasthali Vidyapeeth, Rajasthan.",
        "M.A Psychology, Banaras Hindu University, Uttar Pradesh.",
      ],
      conferences: [
        "Mishra, S., & Asthana, M. K. (2026, July 30 – August 2). Investigating specificity and phenomenological characteristics of imagined future events. [Accepted Conference Abstract]. NEURO2026, 7th Annual Conference of the Japanese Neural Network Society, Kobe, Japan.",
        {
          title: "Mishra, S., & Asthana, M. K. (2026, March 9–12). Empirical evidence on Specificity and Phenomenological characteristics of EFT. [Accepted Conference Abstract]. Tagung experimentell arbeitender Psychologen 2026 (TeaP) Conference, Tübingen, Germany.",
          link: "https://coms.app/teap26/documents/TeapP_2026_Booklet_Upload260314.pdf",
        },
        "Mishra, S., & Asthana, M. K. (2026, April 29 – May 1). Investigating the role of Threat proximity: A study on Specificity and Phenomenological characteristics of Episodic Future Thinking [Oral Presentation]. National Academy of Psychology Conference, 2026, IIM Shillong.",
        "Mishra, S., & Asthana, M. K. (2025, December 15–17). Understanding the fabric of EFT in Cognitive Health using CaR-Fa-X model [Oral presentation]. AHEAD International Conference 2025, IIT Roorkee, Uttarakhand.",
        {
          title: "Mishra, S., & Asthana, M. K. (2025, November 15–19). Investigation of threat temporal distance on the specificity of episodic future thinking [Virtual Poster presentation]. Society for Neuroscience (SfN) 2025, San Diego, United States.",
          link: "https://www.sfn.org/-/media/SfN/Documents/NEW-SfN/Meetings/Neuroscience-2025/Abstracts-and-Sessions/Abstract-PDFs/SFN25_Abstracts-PDF-LB_Final.pdf",
        },
        "Mishra, S., & Mishra, K. (2023, March 18). Self-esteem and emotional intelligence among female adolescents of girls-only and coeducation school [Paper presentation]. National Seminar on Psychology & Society Today, Varanasi, Uttar Pradesh, India.",
      ],
      workshops: [
        "Attended a 3-day Neuroimaging Workshop: Clinical and Preclinical Perspectives 2025, 8th–10th December 2025, organised by National Brain Research Centre (NBRC), Gurugram, India.",
      ],
      memberships: [
        "Indian Academy of Neuroscience (Life Member)",
        "Society for Neuroscience",
        "American Psychological Association",
      ],
    },
  },

  {
    slug: "abhishek-karmakar",
    name: "ABHISHEK KARMAKAR",
    role: "Ph.D. Scholar, Cognitive Psychology",
    department: HSS,
    category: "research-scholars",
    image: abhishekImg,
    email: "abhishek_k1@hs.iitr.ac.in",
    linkedin: "https://www.linkedin.com/in/abhishek-karmakar-16379434b",
    orcid: "0009-0008-3841-685X",
    sections: {
      background: [
        "B.Sc. Clinical Psychology, Amity University, Mumbai (Silver Medalist).",
        "M.Sc. Psychology, Banaras Hindu University, Varanasi.",
      ],
      publications: [
        "Karmakar, A. (2024). Era of Binge-Watching: An ‘Asset’ or an ‘Abyss’? International Journal of Indian Psychology, 12(2).",
        "Karmakar, A. (2024). Psychology: An Era of Mental Health – Approach or Avoid? International Journal of Indian Psychology, 12(4).",
        "Karmakar, A. (2023). Self-Disclosure: A Psychological Pro. International Journal of Indian Psychology, 11(4).",
      ],
      workshops: [
        "Attended three-day hands-on workshop on tools & methods for EEG & fNIRS organized by the School of Biosciences & Bioengineering at Indian Institute of Technology, Mandi in collaboration with Aerobe Pvt. Ltd.",
      ],
      courses: [
        {
          title: "“Introduction to Systematic Review and Meta-Analysis” by Johns Hopkins University, Coursera, 2026: systematic review methodology, literature search strategies & meta-analytic techniques for evidence synthesis.",
          link: "https://coursera.org/verify/V4AW6NJ1U10H",
        },
        "“Marketing Research & Analysis-II”, NPTEL, 2025, Indian Institute of Technology Roorkee.",
      ],
      memberships: [
        "Student Membership - Clinical Psychology Society of India (CPSI)",
        "Life Membership - Indian Academy of Neuroscience (IAN)",
        "Student Graduate Member - American Psychological Association (APA)",
      ],
    },
  },

  {
    slug: "raksha-singh",
    name: "RAKSHA SINGH",
    role: "Ph.D. Scholar, Cognitive Psychology",
    department: HSS,
    category: "research-scholars",
    image: rakshaImg,
    linkedin: "https://www.linkedin.com/in/rakshasingh97",
    email: "raksha_s@hs.iitr.ac.in",
    orcid: "0009-0008-1248-7342",
    sections: {
      about: [
        "A Ph.D. scholar in Cognitive Psychology at MARG, she is driven by a passion for understanding the cognitive underpinnings of human behavior and how these insights can be translated into practical settings. Her professional background includes serving as a Junior Research Fellow (JRF) at the Defence Institute of Psychological Research (DIPR), DRDO Delhi, and as an Assistant Professor at MIT-ADT University, Pune. She holds a BA (Hons) and an MA in Psychology, complemented by a PG Diploma in Guidance and Counseling. Beyond her academic work, she enjoys reading, writing, and following evolving socio-cultural trends.",
      ],
      background: [
        "BA Psychology (Hons.), St. Bede’s College, Shimla.",
        "MA Psychology in Counselling, Indira Gandhi National Open University.",
        "PG Diploma in Guidance & Counselling, Jamia Millia Islamia.",
      ],
      workExperience: [
        "Assistant Professor, Psychology, MIT-ADT University, Pune.",
        "Junior Research Fellow, Defence Institute of Psychological Research (DIPR), DRDO, Delhi.",
      ],
      workshops: [
        "Attended three-day hands-on workshop on tools & methods for EEG & fNIRS organized by the School of Biosciences & Bioengineering at Indian Institute of Technology, Mandi in collaboration with Aerobe Pvt. Ltd.",
      ],
      memberships: [
        "World Women in Neuroscience (WWN) (Membership ID 01592)",
      ],
    },
  },

  {
    slug: "priyadarshini-deori",
    name: "PRIYADARSHINI DEORI",
    role: "Ph.D. Scholar, Cognitive Psychology",
    department: HSS,
    category: "research-scholars",
    image: priyadarshiniImg,
    email: "priyadarshini_d@hs.iitr.ac.in",
    linkedin: "https://www.linkedin.com/in/priyadarshini-deori-109585199/",
    orcid: "https://orcid.org/0009-0003-6752-4378",
    sections: {
      about: [
        "Priyadarshini, a native of Dibrugarh, Assam has completed her Bachelors in Applied Psychology from Dr. Bhim Rao Ambedkar College, University of Delhi and her Masters in Applied Psychology (Clinical and Counseling Practice) from Tata Institute of Social Sciences, Mumbai where she worked in a Master’s dissertation titled, “Meaning Making of Intimacy in Married Couples of the Deori Tribe in Assam”. During her field work placements she has worked closely as trauma focused therapist trainee with marginalised communities under supervision. She worked as a Research Assistant for an ICSSR Project that studied the impact of climate change on mental health in climate sensitive districts of Assam. Her research interests include human cognition, psychopathology, trauma recovery and fear. Currently she is a PhD scholar in IIT Roorkee in cognitive psychology working in the area of fear extinction. She is an advocate of adopting indie dogs and loves cooking. She engages herself in spiritual activities to keep herself grounded. She is also a cultural enthusiast who likes exploring lesser known communities and their cultures.",
      ],
      background: [
        "B.A. in Applied Psychology, Dr. Bhim Rao Ambedkar College, University of Delhi.",
        "M.A. in Applied Psychology (Clinical and Counseling Practice), Tata Institute of Social Sciences, Mumbai.",
        "Certification: Palliative Care Counseling (CAN Support, Delhi).",
        "Certification: Psychological First Aid (Johns Hopkins University, online).",
      ],
      project: [
        "“Meaning Making of Intimacy in Married Couples of Deori Tribe of Assam”: qualitative study under the supervision of Dr. Chetna Duggal.",
        "“AIKYAM”: Community Mental Health Project supporting youth with trauma informed care to navigate through emerging socio-political realities.",
        "Developed a week long relationship programme for couples as an intern in Amaha.",
        "Research Assistant for an ICSSR project studying the impact of climate change on mental health in climate sensitive districts of Assam.",
      ],
      workExperience: [
        "Trauma Focused Therapist Trainee at SEWA & Prerona Pratibandhi NGO, Dibrugarh, Assam.",
        "Couple Therapist Trainee at Inner Hour (Amaha), Mumbai, Maharashtra.",
        "Trauma Focused Therapist & Facilitator at SIMHA Field Action Project of TISS, sponsored by SBI in collaboration with Child Rights and You (CRY).",
        "Research Assistant (RA) at Indian Council of Social Science Research – Dibrugarh University Project.",
        "Clinical Intern: Sion Hospital (Mumbai), St. Stephens Hospital (Delhi), Assam Medical College & Hospital (Dibrugarh).",
      ],
      workshops: [
        "Organised and anchored the Indian Council of Social Science Research sponsored conference on “Climate Change, Livelihood & Mental Health” under the aegis of Viksit Bharat @2047 in collaboration with Dibrugarh University.",
        "Attended three-day hands-on workshop on tools & methods for EEG & fNIRS organized by the School of Biosciences & Bioengineering at Indian Institute of Technology, Mandi in collaboration with Aerobe Pvt. Ltd.",
      ],
      memberships: [
        "World Women in Neuroscience (WWN) (Membership ID 01544)",
        "American Psychological Association (APA)",
      ],
    },
  },

  {
    slug: "kapil-sharma",
    name: "KAPIL SHARMA",
    role: "Ph.D. Scholar, Psychology",
    department: HSS,
    category: "research-scholars",
    image: kapilSImg,
    sections: {
      about: [
        "Kapil Sharma is a professional with over 16 years of experience in Technical Sales, specializing in scientific and technology-driven products. His professional expertise lies in the promotion and commercialization of advanced technical solutions through a clear articulation of their functional capabilities, applications, and value propositions.",
        "He has extensive experience working with large and established organizations, where he has contributed to business development initiatives by effectively aligning technical product features with institutional and customer requirements. His work reflects a strong understanding of both technical concepts and strategic business practices.",
      ],
      background: [
        "Master of Business Administration (MBA) – International Business, Institute of Management Studies (IMS), Lal Kuan, Ghaziabad, Uttar Pradesh (2007–2009).",
        "Bachelor of Science (B.Sc.) – Physics, Chemistry, and Mathematics, D.A.V. (P.G.) College, Bulandshahr, Chaudhary Charan Singh University, Meerut, Uttar Pradesh (2003–2006).",
      ],
      professionalInterests: [
        "Technical and Scientific Sales",
        "Technology Commercialization",
        "Business Development and Client Engagement",
        "Solution-Oriented Sales Strategies",
      ],
    },
  },

  {
    slug: "vaishali-sharma",
    name: "VAISHALI SHARMA",
    role: "Ph.D. Scholar, Psychology",
    department: HSS,
    category: "research-scholars",
    image: vaishaliSharmaImg,
    email: "vaishali_s@hs.iitr.ac.in",
    linkedin: "https://www.linkedin.com/in/vaishali-sharma-52550025a",
    orcid: "https://orcid.org/0009-0005-2915-0920",
    sections: {
      about: [
        "Vaishali Sharma is a PhD Scholar at the Indian Institute of Technology Roorkee. Her research interests lie at the intersection of cognitive psychology and applied mental health, with a specific focus on burnout, trauma recovery, and psychological well-being.",
      ],
      background: [
        "PhD Scholar, Indian Institute of Technology Roorkee.",
        "MA/MSc in Psychology, Banaras Hindu University (2024) | First Position; CGPA 9.5.",
        "PG Diploma in Guidance & Counselling, Jamia Millia Islamia.",
        "BA (English & Psychology), Indraprastha College for Women, University of Delhi | CGPA 8.5.",
      ],
      publications: [
        doi("Sharma, V., & Srivastava, S. (2024). Quality of life and burnout among teachers in private schools in India. International Journal of Education Modern Management Applied Science & Social Science, 06(03(II)), 120–126.", "10.62823/ijemmasss/6.3(ii).6920"),
      ],
      conferences: [
        "Sharma, V., & Srivastava, S. (2025, March 28–29). Quality of life and burnout among teachers in private schools in India [Paper presentation]. 3rd International Conference on Positive Psychology by NPPA (Online).",
      ],
      achievements: [
        "Late Shephali Nandy Memorial Gold Medal (BHU)",
        "Late Chandra Bhal Dwivedi Memorial Gold Medal (BHU)",
        "BHU University Medal (2024)",
        "All India Rank 1, BHU PhD Entrance Examination (2025)",
        "UGC-NET Qualified (99.73 Percentile)",
        "GATE Psychology (AIR 121, First Attempt)",
      ],
      workshops: [
        "Attended Workshop on Mastering Systematic Literature Review and Meta-Analysis by Prof. (Dr.) Jaspreet Kaur.",
      ],
      webinars: [
        "Webinar on ONOS & Springer Nature: Open Access Publishing and APC Funding – A Practical Guide for Authors, 29 Jul 2026, 3:00 PM – 4:30 PM IST.",
        "Talk on Women in the Science of Applied Psychophysiology & Biofeedback, 31 Jul 2026.",
      ],
      academicDuties: [
        "Teaching Assistant, HSS-305 (Group Dynamics), Autumn Semester 2025, IIT Roorkee.",
        "Teaching Assistant, HST-501 (Statistical Application for Behavioural and Social Research), Spring Semester 2026, IIT Roorkee.",
        "Teaching Assistant, HSS-306 (Introduction to Cyberpsychology), Autumn Semester 2026, IIT Roorkee.",
      ],
      workExperience: [
        "SMS Psychiatric Center, Jaipur: clinical observation and research on caregiver burden.",
        "Fortis Hospital: training in Art Therapy, Psycho-oncology, and School Psychology.",
        "Clinical Internship: training at the clinic of Dr. Anil Tambi, Jaipur, under RCI-registered supervision.",
      ],
      memberships: [
        "Mentor & Member, World Women in Neuroscience (Membership ID: 01575)",
        "Women in Neuroscience, UK",
        "Member of Swedish Cognitive Science Society",
        "Member, American Psychological Association (APA)",
        "Indian Academy of Neuroscience (Life Member)",
      ],
    },
  },

  {
    slug: "anshika-sharma",
    name: "ANSHIKA SHARMA",
    role: "Junior Research Fellow",
    department: HSS,
    category: "research-scholars",
    image: null, // TODO: add photo (see import note at top of file)
    sections: {
      about: [
        "Anshika Sharma is a recent graduate from Jamia Millia Islamia University with a Master’s degree in Applied Psychology. She has qualified GATE (XH) and UGC-NET, and previously worked with AIIMS, TISS, and ABSL on interdisciplinary research projects.",
      ],
      currentAffiliation: [
        "Junior Research Fellow on a research project exploring the neural mechanisms and effectiveness of imagery rescripting and creative cognitive reappraisal in preventing the return of fear.",
        "Assists with experimental data collection using PsychoPy, EEG, skin conductance response (SCR), and behavioural measures.",
      ],
      background: [
        "Master’s degree in Applied Psychology, Jamia Millia Islamia University.",
        "Qualified GATE (XH) and UGC-NET.",
        "Previously worked with AIIMS, TISS, and ABSL on interdisciplinary research projects.",
      ],
    },
  },

  /* ───────────────────────────── INTERNS ───────────────────────────── */
  {
    slug: "nandini-dutt",
    name: "NANDINI DUTT",
    role: "Spark Intern, Psychology",
    category: "interns",
    image: nandiniImg,
    linkedin: "https://www.linkedin.com/in/nandini-dutt/?originalSubdomain=in",
    sections: {
      background: [
        "B.Tech Biomedical Engineering, Thapar Institute of Engineering and Technology, Patiala.",
      ],
      internship: [
        "Worked on the project \"Rethinking the Web Accessibility for Students with Hearing Impairments\" that proposed a newly designed bilingual web platform for hearing impaired, which is the first web-based platform for such children in India.",
      ],
    },
  },

  {
    slug: "anshita-singh",
    name: "ANSHITA SINGH",
    role: "Intern, Psychology",
    category: "interns",
    image: anshitaImg,
    linkedin: "https://www.linkedin.com/in/anshitasingh/",
    email: "as5uvq@virginia.edu",
    sections: {
      background: [
        "PhD Student at the Department of Psychology, University of Virginia.",
        "BA Psychology, Delhi University.",
      ],
      internship: [
        "Actively contributed to a project on information and communication technology adoption among older adults, helping formulate survey questions and conducting qualitative interviews. The project provides valuable insights into the barriers and opportunities older individuals encounter with technology. The findings contribute to ongoing discussions on fostering digital inclusivity across age groups.",
      ],
    },
  },

  {
    slug: "kapil-faujdar",
    name: "KAPIL FAUJDAR",
    role: "Intern, Psychology",
    category: "interns",
    image: kapilImg,
    sections: {
      background: [
        "BSc in Mathematics, Physics and Psychology from Rajasthan University.",
        "Currently pursuing Masters in Cognitive Science from Indian Institute of Technology Gandhinagar.",
        "Worked on an independent project on fMRI data analysis and group project on EEG data analysis.",
      ],
      internship: [
        "Understanding the relevance of threat proximity in fear learning using Virtual Reality.",
        "Worked with Unity, Mentalab, LSL and PsychoPy.",
      ],
    },
  },

  {
    slug: "ishita-sahdev",
    name: "ISHITA SAHDEV",
    role: "Intern, Psychology",
    category: "interns",
    image: ishitaImg,
    sections: {
      about: [
        "Ishita Sahdev is a dedicated clinical psychology student from Noida, currently pursuing her dual Master’s degree in Clinical Psychology at Amity University, Noida. With a strong academic foundation and focused interests in trauma-informed care, psychological resilience, and neuropsychology, she integrates empathic insight with scientific and analytical rigor in her academic pursuits. She previously contributed to an NPTEL research project at IIT Roorkee on Neuroergonomics and Brain–Computer Interfaces (BCI), where she engaged in interdisciplinary inquiry at the intersection of neuroscience, psychology, and technology. This experience enhanced her understanding of cognitive processes, human–machine interaction, and the application of adaptive technologies in mental health research and practice.",
      ],
    },
  },

  {
    slug: "arkajit",
    name: "ARKAJIT",
    role: "Intern, Psychology",
    category: "interns",
    image: arkajitImg,
    sections: {
      internship: [
        "Completed an internship project titled “Developing a Movie Database with Parameters Such as Valence, Arousal, and Intensity Influencing Emotional Perception”.",
        "Created a protocol for developing an Indian movie database using Tobii Pro Lab.",
      ],
      background: [
        "Completed B.Sc. in Applied Psychology from The Neotia University with Gold Medal Distinction.",
        "Currently pursuing M.Sc. in Neuropsychology at the National Forensic Sciences University, Gandhinagar.",
      ],
    },
  },

  {
    slug: "annika-dold",
    name: "ANNIKA DOLD",
    role: "Intern, Psychology",
    category: "interns",
    image: annikaImg,
    sections: {
      about: [
        "RISE-worldwide-DAAD intern at Department of Humanities and Social Science, Psychology.",
      ],
      internship: [
        "Internship topic: Effects of Fear Sensitivity and Emotional Reactivity on Memory Update.",
        "Duration of internship: 2 months.",
      ],
      background: [
        "3rd year of BSc Psychology at Leipzig University (Germany).",
      ],
      scholarships: [
        "Scholarship holder of the \"DAAD-Network\"",
        "Scholarship holder of the \"German National Academic Foundation\"",
        "Scholarship holder of the \"e-fellows-Scholarship\"",
      ],
    },
  },

  {
    slug: "harshita-verma",
    name: "HARSHITA VERMA",
    role: "Intern, Psychology",
    category: "interns",
    image: harshitaImg,
    linkedin: "https://www.linkedin.com/in/harshita-verma-680a7a21a/",
    email: "harshitaverma11@gmail.com",
    sections: {
      internship: [
        "Social Cognitive and affective approach in hearing impaired children using Virtual Reality tasks.",
      ],
      background: [
        "BTech in Biosciences and Bioengineering. Went to Canada for research internship (MITACS Globalink) to work in Human Computer Interaction Lab. Worked to design and develop a walkable AR experience and deployed in the Microsoft Hololens.",
        "Will be pursuing Master of Information (User Experience Design) in University of Toronto starting September 2024.",
      ],
    },
  },

  {
    slug: "divyanshu-tiwari",
    name: "DIVYANSHU TIWARI",
    role: "Intern, Psychology",
    category: "interns",
    image: divyanshuImg,
    linkedin: "https://www.linkedin.com/in/divyanshu-tiwari33/",
    email: "divyanshu.tiwari33@gmail.com",
    sections: {
      internship: [
        "Responsible for developing a number of interactive virtual environments on Unity and Vizard 7. These were used to collect behavioural data of users by testing their performance on particular tasks.",
        "Developed visualizations for participant’s behavioural data thus collected to help my supervisor gain insights into their behaviour.",
      ],
      background: [
        "Bachelors in Architecture, Indian Institute of Technology Roorkee.",
      ],
      publications: [
        {
          title: "Sambath RD, Divyanshu Tiwari, Deepak Kumar et al. Impact of environmental color and instruction on wayfinding in humans, 24 March 2023, PREPRINT (Version 1) available at Research Square.",
          link: "https://doi.org/10.21203/rs.3.rs-2721767/v1",
        },
      ],
    },
  },

  {
    slug: "alisha-chatrath",
    name: "ALISHA CHATRATH",
    role: "Intern, Psychology",
    category: "interns",
    image: alishaImg,
    sections: {
      internship: [
        "Worked on a research project titled “Bridging Minds and Machines: The Role of Cognitive Ergonomics in Sustainable Engineering” that focused on examining how cognitive ergonomics can be integrated into Industry 5.0 to enhance usability, safety, sustainability, and human–machine collaboration.",
        "Also designed a four-week academic course curriculum on Cognitive Ergonomics in Industry 5.0, involving learning outcome formulation, module structuring, and integration of real-world and Indian case studies to translate research insights into applied learning content.",
      ],
      background: [
        "B.A. Applied Psychology Honors with Research, AIPS, Amity University, Noida.",
      ],
    },
  },

  {
    slug: "ashi-jasuja",
    name: "ASHI JASUJA",
    role: "Intern, Psychology",
    category: "interns",
    image: ashiJasujaImg,
    sections: {
      internship: [
        "Completed a SPARK Summer Internship at MARG Lab, IIT Roorkee, working on a project titled “Effect of Prior Social Information on Fear Conditioning.”",
        "Conducted psychophysiological experiments using skin conductance responses (SCR) to investigate fear acquisition, retention, and extinction, with hands-on experience in PsychoPy, BIOPAC, experimental design, and behavioral research.",
      ],
      background: [
        "Completed B.A. (Hons.) in Psychology from Banaras Hindu University. Currently pursuing M.Sc. in Neuropsychology at the National Forensic Sciences University, Gandhinagar.",
      ],
    },
  },

  {
    slug: "madeline-saad",
    name: "Madeline Saad",
    role: "Intern, Psychology",
    category: "interns",
    image: madelineSaadImg,
    sections: {
      internship: [
        "Topic: Effect of Threat Proximity in Learning Fear Response Using Virtual Reality. Duration: 2 months.",
      ],
      background: [
        "4th year BSc Neuroscience at University of Lethbridge.",
      ],
    },
  },
];