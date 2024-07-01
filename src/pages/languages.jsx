const languages = {
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact Me',
        faqs: 'FAQs',
        name: 'Atsedemariam',

        salutation: 'Hello, I am Atsedemariam Bizuneh,',
        text:'a software engineer with more than three years of experience',
        footerText: "The people who are crazy enough to think they can change the world are the ones who do. ",
        portfolioParagraph:"I am Atsedemariam Bizuneh, a passionate and skilled software developer with over 3 years of experience. \n" +
                "Currently, I work remotely as a software developer at Tern Systems of Iceland, while being based in Bahirdar, Ethiopia. \n" +
                "In this role, I collaborate with teams in Iceland on impactful projects, contributing to their development and success. \n" +
                "My expertise extends beyond coding; I leverage a diverse toolkit including Figma, Jama, Wireshark, Docker, and Git to drive efficient \n" +
                "and collaborative project development. My track record demonstrates a consistent ability to deliver top-notch solutions and add value \n" +
                "to every project I'm involved in.",

        Experience:'Experience',
        exp_1_prof: "Frontend Developer",
        exp_1_date: "nov 2021 - jan 2022",
        comp_l: "Poshak consultancy plc.",

        exp_2_prof: "Quality Assurance Engineer",
        exp_2_date: "jan 2022 - may 2024",
        comp_2: "Tern Systems",
        
        exp_3_prof: "Backend Developer",
        exp_3_date: "may 2024 - present",

        journey_text:"A Tale of Role, Project, and Company Bliss",

        journey: "Embark on a journey with me as I delve into the depths of my role, project, and the extraordinary company that fueled my passion. \n" +
              "More than just a Quality Assurance Engineer, my time with Polaris transcended mere job descriptions. At the heart of Tern Systems, \n"+
              "Polaris stands tall as the flagship ATM suite, a culmination of innovation and precision meticulously crafted from systems deployed \n"+
              "across Iceland, South Korea, and Indonesia.",

        journey_2: "My journey with Polaris took an intriguing turn as I found myself immersed in a project tailored for the Hungarian airlines. \n"+
            "This opportunity not only widened my horizons but also granted me the privilege of collaborating with industry experts in the development \n"+ 
            "of a software so rare it could be counted on fingers. Within the labyrinth of Polaris SNS, I gained invaluable insights into the intricate \n"+
            "workings of Air Traffic Control (ATC).\n"+
            "Navigating through the complexities of Polaris SNS, including its Ground Station Safety Net features like Short Term Conflict Alert (STCA), \n"+
            "Area Proximity Warning (APW), Rout Adherence Monitoring (RAM), Airspace Infringement Waning (AIW), CLAM, DSAM, etc. honed my skills \n"+
            "as a Quality Assurance Engineer, actively involved in the development process, meticulously ensuring the integrity and reliability of the \n"+
            "code being crafted. This hands-on experience allowed me to immerse myself in the intricacies of the project, ensuring that every aspect of \n"+
            "the software met the stringent standards required for ground station safety and efficiency.",

        education_text: "Education",
        edu_1_prof:"Software Engineering",
        edu_1_date:"oct 2017 - sept 2021",
        edu_1_comp:"Bahirdar University",
        edu_1_gpa:"cGPA 3.84",
        
        edu_2_prof:"Management",
        edu_2_date:"nov 2018 - aug 2022",
        edu_2_comp:"Bahirdar University",
        edu_2_gpa:"cGPA 3.60",
        skill_text:"Skills",

        mission_text: "Professional Mission and Personal Aspiration",
        mission_paragraph :"My professional mission is to excel in every project I undertake as a software \n"+
        "engineer. With a passion for innovation and problem-solving, I aim to deliver high-quality solutions \n"+
        "that not only meet but exceed expectations. I am dedicated to continuous learning and improvement, \n"+
        "staying updated with the latest technologies and industry trends. This commitment ensures I can \n"+
        "effectively contribute to any team or project.\n"+
        "Beyond my professional goals, I aspire to make a meaningful impact in Ethiopia, my homeland. Driven by a \n"+
        "desire to contribute to initiatives that uplift and empower communities, I focus on leveraging technology \n"+
        "to address socio-economic challenges. My ambition is to leave a positive legacy by using my skills and \n"+
        "resources to create lasting change and opportunities for those in need.",
        cv_content:"I think you have an insight about me now. Need CV?",
        download_label:"Download",

        contact_form:"Want to say something?",
        name_q:"Name",
        email:"Email",
        subject:"Subject",
        message:"Message",
        placeholder_name:"Your name",
        placeholder_email:"Your email",
        placeholder_subject:"Subject",
        placeholder_message:"Your message",

        contact_info:"Contact Information",
        phone:"Phone",
        location:"Location",
        availability:"Availability",
        response:"Response time",
        location_a:"Bahirdar, Ethiopia",
        availability_a:"Mon-Fri, 9am-5pm",
        response_a:"Within 24 hours",
        get_in_touch:"Get in Touch",
        submit:"Send Message"
    },
    am: {
        home: 'ዋና ገጽ',
        about: 'ስለ እኔ',
        contact: 'ያግኙኝ',
        faqs: 'በየጥ',
        name: 'ዐጸደማርያም',
        salutation: 'ሰላም, ዐጸደማርያም ብዙነህ ነኝ',
        text:'ከ ሦስት ዓመት በላይ የስራ ልምድ ያለኝ የሶፍትዌር ኢንጂነር',
        footerText: "The people who are crazy enough to think they can change the world are the ones who do. ",
        portfolioParagraph:"ዐጸደማርያም እባላለሁ, ትጋትን ከበቂ የሦስት አመት ልምድ ጋር በሶፍትዌር ደቨሎፕመንት ሙያየ ለማጣመር ሞክርያለሁ። \n" +
        "አሁን, አይስላንድ ሃገር ላለ ተርን ሲስተምስ ለተባለ የሶፍትዌር ድርጅት ባለሁበት(ባህርዳር) ሆኘ የምሰራ ስሆን, በስራ ዘርፌም ትላልቅ በሚባሉ ፕሮጀክቶች ላይ \n" +
        "በአይስላንድ ከሚገኙ የተለያዩ የደቨሎፕመንት ቡድኖች ጋር አብሬ በመስራት ለስኬታችው የብኩሌን አስተዋኦ አበርክቻለሁ።\n" +
        "ችሎታየ በኮዲንግ ብቻ የተወሰነ ባለመሆኑ; የተወሰኑ ቱልኪትስ ጋር ልምዶች አሉኝ ከ እነሱም Figma, Jama, Wireshark, Docker, እና  Gitን መጥቀስ እችላለሁ።\n" +
        "እስካሁን ያሉኝ የስራ አፈፃፀሞች እንደሚያሳዩት በተገኘሁባቸው ፕሮጀክቶች ሁሉ አብረዉኝ ከሚሰሩ የስራ ባልደረቦች ጋር በመስማማት እና በመጽናት የምፍትሄ አካልም \n"+
        " በመሆን የበኩሌን አስተዋፅኦ አበርክቻለሁ እያበረከትኩም እገኛለሁ።" ,
        Experience:'የስራ ልምድ',
        
        exp_1_prof: "ፍሮንቲንድ ደቨሎፐር",
        exp_1_date: "ህዳር 2014 - ጥር 2014 ዓ/ም",
        comp_l: "ፖሻክ የሶፍትዌር አማካሪ ኃ.የ.ማ.",

        exp_2_prof: "ኳልቲ አሹራንስ ኢንጂነር",
        exp_2_date: "ጥር 2014 - ግንቦት 2016 ዓ/ም",
        comp_2: "ተርን ሲስተምስ",
        
        exp_3_prof: "ባኪንድ ደቨሎፐር",
        exp_3_date: "ግንቦት 2016 - አሁን",

        journey_text:"ስለተሳተፍኩበት ፕሮጀክት፤ ስለነበረኝም ሚና ቲንሽ ባወጋችሁስ...",

        journey: "ስለ ፕሮጀክቴ እና ስለነበረኝ ተሳትፎ ትቂት ልበላችሁ .. አብራችሁኝ ቆዩ። በፖላሪስ ፕሮጀክት የቆየሁባቸው ጊዜያቶች ከኳልቲ \n" +
        "አሹራንስ ተጨማሪ ሌሎች ስራና እውቀቶች እንዲኖሩኝ አስችለውኛል። ፖላሪስ በተርን ሲስተምስ የተበለፀገ የአዉሮፕላን የበረራ እንቅስቃሴ \n" +
        "መቆጣጠሪያ ቅንባሮ ሲሆን በአይስላንድ፣ በደቡብ ኮርያ እና በኢንዶነዢያ ሃገራት አየር መንገዶች ስራ ላይ ውሏል።",

        journey_2:"ፖላሪስ ሰፋ ባለ ሪኳየርመንት ለሃንጋሪ አየርመንገድ በሚሰራበት ጊዜ 'በጥልቀት ለማለት በምደፍርበት ሁኔታ ተሳትፎው ነበረኝ ፟፣ ይህ እድል ደግሞ \n"+
        "ዕዉቀትን ብቻ ሳይሆን በጣት በሚቆጠሩ የዘርፉ ድርጅቶች በሚያበለፅጉት ቅንባሮ ዉስጥ ከሚሰሩ ልሒቃን ጋር አብሮ መስራትንም ሰጥቶኛል። \n"+
        "STCA(የሁለትና ከዚያ በላይ አውሮፕላኖች ግጭትን የሚቆጣጠር ሴፍቲኔት)፣ AIW(አውሮፕላኑ ካልተፈቀደለት የአየር ክልል እንዳይገባ የሚቆጣጠር ሴፍቲኔት)፣ \n"+
        "RAM(አውሮፕላኑ ከተሰጠው የመንገድ መስመር እንዳያልፍ ወይም እንዳይርቅና መንገዱን እንዳይስት(እንዳይጠፋ፣ ወዳልታሰበ ሃገር እንዳይሄድ))፣ APW፣ CLAM፣ DSAM፣\n"+
        "ወዘተ የመሳሰሉት በዘርፉና እንዳተቃላይ በሶፍትዋር ሙያ ላይ አቅሜን አዳብረዉልኛል፤ በብልጽግናው ሂደት ላይ እያንዳንዱ የኮድ አካል(ኮምፖኔንት) ጥምረትና ውህደት የተጠበቀውን\n"+
        " ውጤት ማምጣቱን ማረጋገጥ አለብኝና።",
        education_text:"ትምህርት",
        
        edu_1_prof:"ሶፍትዌር ምህንድስና",
        edu_1_date:"ጥቅ 2009 - መስ 2014 ዓ/ም",
        edu_1_comp:"ባህርዳር ዩኒቨርስቲ",
        edu_1_gpa:"አው 3.84",
        
        edu_2_prof:"ማናጅመንት",
        edu_2_date:"ህዳር 2010 - ነሃሴ 2014 ዓ/ም",
        edu_2_comp:"ባህርዳር ዩኒቨርስቲ",
        edu_2_gpa:"አው 3.60",
        skill_text:"ልምዶች",
        
        mission_text:"ሙያዊ ዕቅዶችና ህልሞች ",
        mission_paragraph:"ምንጊዜም በምንም አይነት የተሳተፍኩበት ፕሮጀክት የተሻለ አበርክቶ እንዲኖረኝ በማድረግ በጥልቅ ሙያዊ ፍቅር ሁሌም የመፍትሄ አካል\n" +
        "በመሆን የተሻሉ የመፍትሄ ቅንባሮዎችን እና መተግበሪያዎችን ከተጠበቀብኝ በላይ ኃላፊነቴን መወጣት። በርግጥም ያለማቋረጥ መማርን አዳዲስ የቴክኖሎጂ ውጤቶችን መከታተል\n" +
        "መስሃልና መሻሻልን የግሌ ለማድረግ አብዝቼ እጥራለሁ። ይህ ጥረቴም በየትኛውም የስራ ቡድንና ፕሮጀክት እንደምሆን ልበሙሉነትን ፈጥሮልኛል። ከሙያ እቅዴ በዘለለ እናት ኢትዮጵያ ላይ መልካም \n" +
        "አስተዋፆየን ማሳረፍ ህልሜ ነው - የተሻሉ ቴክኖሎጅዎችን በመጠቀም የማህበራዊና እኮኖሚያዊ ትስስሩ እንዲጠናከር በማድረግ እኔም የኢኮኖሚ እንቅስቃሴው አካል በመሆን።",
        cv_content:"ከኔ ጋር በቲንሹም ቢሆን የተዋወቁ ይመስለኛል። ሲቪየን ይፈልጋሉ?",
        download_label:"ያውርዱ",
        
        contact_form:"የሆነ ነገር ማለት ይፈልጋሉ?",
        name_q:"ስም",
        email:"ኢሜል",
        subject:"ርዕስ",
        message:"መልዕክት",
        placeholder_name:"ስምዎን",
        placeholder_email:"የኢሜል አድራሻዎን",
        placeholder_subject:"የመልዕክቱን ርዕስ",
        placeholder_message:"መልዕክትዎን",

        contact_info:"መገናኛ መንገዶች",
        phone:"ስልክ",
        location:"አድራሻ",
        availability:"መገኛ ጊዜ",
        response:"መልስ መስጫ ጊዜ",
        location_a:"ባህርዳር, ኢትዮጵያ",
        availability_a:"ሰኞ - አርብ, ከጠዋቱ 3 ሰዐት - 11 ሰዐት",
        response_a:"በአንድ ቀን ዉስጥ",
        get_in_touch:"ይልመድባችሁ.. አትጥፉ 😊",
        submit:"መልዐክቱን ይላኩ",
        
        
    }
  };
  
  export default languages;
  